/**
 * Moc Atrakcji — admin proxy worker.
 *
 * This is the ONLY place that holds the GitHub write token and the admin
 * password. The static site (GitHub Pages) never sees either secret — the
 * hidden admin page in the Next.js app calls this worker over HTTPS, and
 * this worker is the one that talks to the GitHub Contents API to commit
 * changes to src/data/offers.json and to public/uploads/*.
 *
 * Endpoints:
 *   POST /login    { password }                         -> { token, expiresAt }
 *   GET  /offers    (Authorization: Bearer <token>)       -> { offers }
 *   PUT  /offers    (Authorization: Bearer <token>)       body: { offers }
 *   POST /upload    (Authorization: Bearer <token>)       body: { filename, contentType, contentBase64 }
 */

export interface Env {
  ADMIN_PASSWORD: string;
  SESSION_SECRET: string;
  GITHUB_TOKEN: string;
  GITHUB_OWNER: string;
  GITHUB_REPO: string;
  GITHUB_BRANCH: string;
  OFFERS_PATH: string;
  UPLOADS_PATH: string;
  ALLOWED_ORIGINS: string;
}

const TOKEN_TTL_SECONDS = 60 * 60 * 4; // 4 hours
const MAX_OFFERS_JSON_BYTES = 2 * 1024 * 1024; // 2 MB
const MAX_IMAGE_BYTES = 8 * 1024 * 1024; // 8 MB
const ALLOWED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
]);

function corsHeaders(origin: string | null, env: Env): HeadersInit {
  const allowed = env.ALLOWED_ORIGINS.split(",").map((o) => o.trim());
  const allowOrigin = origin && allowed.includes(origin) ? origin : allowed[0];
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "GET, POST, PUT, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function json(data: unknown, init: ResponseInit = {}, cors: HeadersInit = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...cors,
      ...(init.headers ?? {}),
    },
  });
}

// --- base64url + HMAC session tokens (no external deps, Web Crypto only) ---

function bytesToBase64Url(bytes: Uint8Array): string {
  let str = "";
  for (const b of bytes) str += String.fromCharCode(b);
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlToBytes(b64url: string): Uint8Array {
  const b64 = b64url.replace(/-/g, "+").replace(/_/g, "/");
  const padded = b64 + "=".repeat((4 - (b64.length % 4)) % 4);
  const str = atob(padded);
  const bytes = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) bytes[i] = str.charCodeAt(i);
  return bytes;
}

async function hmac(secret: string, data: string): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(data));
  return new Uint8Array(sig);
}

async function createToken(env: Env): Promise<{ token: string; expiresAt: number }> {
  const expiresAt = Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS;
  const payload = JSON.stringify({ exp: expiresAt });
  const payloadB64 = bytesToBase64Url(new TextEncoder().encode(payload));
  const sig = await hmac(env.SESSION_SECRET, payloadB64);
  const token = `${payloadB64}.${bytesToBase64Url(sig)}`;
  return { token, expiresAt };
}

async function verifyToken(token: string | null, env: Env): Promise<boolean> {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 2) return false;
  const [payloadB64, sigB64] = parts;
  const expectedSig = await hmac(env.SESSION_SECRET, payloadB64);
  const givenSig = base64UrlToBytes(sigB64);
  if (expectedSig.length !== givenSig.length) return false;
  let diff = 0;
  for (let i = 0; i < expectedSig.length; i++) diff |= expectedSig[i] ^ givenSig[i];
  if (diff !== 0) return false;

  try {
    const payload = JSON.parse(new TextDecoder().decode(base64UrlToBytes(payloadB64)));
    return typeof payload.exp === "number" && payload.exp > Date.now() / 1000;
  } catch {
    return false;
  }
}

function getBearerToken(request: Request): string | null {
  const header = request.headers.get("Authorization") ?? "";
  const match = header.match(/^Bearer\s+(.+)$/i);
  return match ? match[1] : null;
}

// --- GitHub Contents API helpers ---

const GITHUB_API = "https://api.github.com";

function githubHeaders(env: Env) {
  return {
    Authorization: `Bearer ${env.GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "moc-atrakcji-admin-worker",
  };
}

async function getFile(
  env: Env,
  path: string
): Promise<{ content: string; sha: string } | null> {
  const url = `${GITHUB_API}/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${path}?ref=${env.GITHUB_BRANCH}`;
  const res = await fetch(url, { headers: githubHeaders(env) });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GitHub GET ${path} failed: ${res.status} ${await res.text()}`);
  const data = (await res.json()) as { content: string; sha: string };
  return { content: data.content, sha: data.sha };
}

async function putFile(
  env: Env,
  path: string,
  contentBase64: string,
  message: string,
  sha?: string
): Promise<void> {
  const url = `${GITHUB_API}/repos/${env.GITHUB_OWNER}/${env.GITHUB_REPO}/contents/${path}`;
  const res = await fetch(url, {
    method: "PUT",
    headers: { ...githubHeaders(env), "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      content: contentBase64,
      branch: env.GITHUB_BRANCH,
      ...(sha ? { sha } : {}),
    }),
  });
  if (!res.ok) throw new Error(`GitHub PUT ${path} failed: ${res.status} ${await res.text()}`);
}

function utf8ToBase64(str: string): string {
  const bytes = new TextEncoder().encode(str);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin);
}

function base64ToUtf8(b64: string): string {
  const bin = atob(b64.replace(/\n/g, ""));
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

function sanitizeFilename(name: string): string {
  const base = name.split("/").pop()?.split("\\").pop() ?? "upload";
  const cleaned = base.replace(/[^a-zA-Z0-9._-]/g, "-").replace(/-+/g, "-");
  const stamp = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  const dot = cleaned.lastIndexOf(".");
  if (dot <= 0) return `${stamp}-${cleaned}`;
  return `${cleaned.slice(0, dot)}-${stamp}${cleaned.slice(dot)}`;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin");
    const cors = corsHeaders(origin, env);
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    try {
      if (url.pathname === "/login" && request.method === "POST") {
        const body = (await request.json().catch(() => ({}))) as { password?: string };
        if (!body.password || body.password !== env.ADMIN_PASSWORD) {
          return json({ error: "invalid_password" }, { status: 401 }, cors);
        }
        const { token, expiresAt } = await createToken(env);
        return json({ token, expiresAt }, { status: 200 }, cors);
      }

      // Everything below requires a valid session token.
      const token = getBearerToken(request);
      const authed = await verifyToken(token, env);
      if (!authed) {
        return json({ error: "unauthorized" }, { status: 401 }, cors);
      }

      if (url.pathname === "/offers" && request.method === "GET") {
        const file = await getFile(env, env.OFFERS_PATH);
        if (!file) return json({ error: "not_found" }, { status: 404 }, cors);
        const offers = JSON.parse(base64ToUtf8(file.content));
        return json({ offers }, { status: 200 }, cors);
      }

      if (url.pathname === "/offers" && request.method === "PUT") {
        const body = (await request.json().catch(() => null)) as { offers?: unknown } | null;
        if (!body || !Array.isArray(body.offers)) {
          return json({ error: "invalid_body" }, { status: 400 }, cors);
        }
        const serialized = JSON.stringify(body.offers, null, 2) + "\n";
        if (new TextEncoder().encode(serialized).length > MAX_OFFERS_JSON_BYTES) {
          return json({ error: "payload_too_large" }, { status: 413 }, cors);
        }
        const current = await getFile(env, env.OFFERS_PATH);
        await putFile(
          env,
          env.OFFERS_PATH,
          utf8ToBase64(serialized),
          "chore(admin): update offers via admin panel",
          current?.sha
        );
        return json({ ok: true }, { status: 200 }, cors);
      }

      if (url.pathname === "/upload" && request.method === "POST") {
        const body = (await request.json().catch(() => null)) as {
          filename?: string;
          contentType?: string;
          contentBase64?: string;
        } | null;
        if (!body?.filename || !body.contentType || !body.contentBase64) {
          return json({ error: "invalid_body" }, { status: 400 }, cors);
        }
        if (!ALLOWED_IMAGE_TYPES.has(body.contentType)) {
          return json({ error: "unsupported_type" }, { status: 415 }, cors);
        }
        const approxBytes = Math.floor((body.contentBase64.length * 3) / 4);
        if (approxBytes > MAX_IMAGE_BYTES) {
          return json({ error: "payload_too_large" }, { status: 413 }, cors);
        }
        const safeName = sanitizeFilename(body.filename);
        const path = `${env.UPLOADS_PATH}/${safeName}`;
        await putFile(
          env,
          path,
          body.contentBase64,
          `chore(admin): upload image ${safeName}`
        );
        return json({ path: `/uploads/${safeName}` }, { status: 200 }, cors);
      }

      return json({ error: "not_found" }, { status: 404 }, cors);
    } catch (err) {
      return json(
        { error: "internal_error", detail: String(err) },
        { status: 500 },
        cors
      );
    }
  },
};
