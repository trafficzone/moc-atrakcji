// Self-contained admin UI, served directly by this worker at its own
// workers.dev URL. Deliberately NOT part of the public Next.js site repo —
// see README.md for why (the site's repo is public, so anything committed
// there, including "hidden" route names, is visible to anyone browsing it
// on GitHub). This file's only public exposure is its own source code,
// never the deployed URL itself (that depends on your Cloudflare account's
// subdomain, which is not stored anywhere in this repo).
export const ADMIN_HTML = `<!doctype html>
<html lang="pl">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="referrer" content="no-referrer" />
<meta name="robots" content="noindex, nofollow" />
<title>Panel — Moc Atrakcji</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,600&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
<style>
  :root {
    --night: #0d0b07;
    --night-soft: #19140c;
    --night-card: #221b10;
    --void: #000000;
    --ink: #f7f1e3;
    --gold: #d4af37;
    --gold-light: #f0d571;
    --gold-dark: #9a7b23;
    --border: rgba(255,255,255,0.1);
    --border-hover: rgba(212,175,55,0.5);
  }
  * { box-sizing: border-box; }
  html { -webkit-font-smoothing: antialiased; }
  body {
    margin: 0;
    background: var(--night);
    color: var(--ink);
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    line-height: 1.5;
  }
  .font-display { font-family: "Playfair Display", Georgia, serif; }
  .glow {
    position: fixed; top: -260px; left: 50%; transform: translateX(-50%);
    width: 640px; height: 640px; border-radius: 50%;
    background: radial-gradient(circle, rgba(212,175,55,0.16) 0%, rgba(212,175,55,0) 70%);
    pointer-events: none; z-index: 0;
  }
  .wrap { position: relative; z-index: 1; max-width: 920px; margin: 0 auto; padding: 40px 24px 100px; }
  .eyebrow { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.22em; color: var(--gold-light); }
  h1, h2, h3 { font-weight: 500; margin: 0; }
  h1 { font-family: "Playfair Display", Georgia, serif; }
  h2 { font-family: "Playfair Display", Georgia, serif; font-size: 24px; }
  .topbar { display: flex; align-items: center; justify-content: space-between; margin-bottom: 40px; padding-bottom: 20px; border-bottom: 1px solid var(--border); }
  .brand { display: flex; align-items: center; gap: 10px; }
  .brand-mark {
    width: 30px; height: 30px; flex-shrink: 0; display: flex; align-items: center; justify-content: center;
    border: 1px solid var(--gold); color: var(--gold); font-family: "Playfair Display", serif; font-weight: 700; font-size: 14px;
  }
  .brand-text { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.18em; color: rgba(247,241,227,0.55); }
  .brand-text b { color: var(--ink); font-weight: 600; }
  .logout { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(247,241,227,0.5); background: none; border: none; cursor: pointer; transition: color 0.15s; }
  .logout:hover { color: var(--gold-light); }
  .card { border: 1px solid var(--border); background: var(--night-card); padding: 32px; box-shadow: 0 24px 48px -24px rgba(0,0,0,0.5); }
  .login-card { max-width: 380px; margin: 64px auto 0; padding: 40px; text-align: center; }
  .login-card h1 { font-size: 26px; }
  .login-card .eyebrow { display: block; margin-bottom: 10px; }
  .login-card label.field-label { text-align: left; }
  label.field-label { display: block; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: rgba(247,241,227,0.55); margin-top: 22px; margin-bottom: 0; }
  input, select, textarea {
    width: 100%; margin-top: 9px; border: 1px solid var(--border);
    background: var(--night); color: var(--ink); padding: 11px 14px; font-size: 14px;
    font-family: inherit; transition: border-color 0.15s;
  }
  input:focus, select:focus, textarea:focus { outline: none; border-color: var(--gold); }
  input::placeholder, textarea::placeholder { color: rgba(247,241,227,0.3); }
  textarea { resize: vertical; }
  select { cursor: pointer; }
  button { font-family: inherit; cursor: pointer; transition: all 0.15s ease; }
  .btn-gold {
    background: linear-gradient(100deg, var(--gold-light) 0%, var(--gold) 55%, var(--gold-dark) 100%);
    border: none; color: var(--void); padding: 13px 28px; font-size: 12px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.2em;
  }
  .btn-gold:hover { opacity: 0.9; }
  .btn-gold:disabled { opacity: 0.5; cursor: default; }
  .btn-outline { background: none; border: 1px solid var(--border); color: rgba(247,241,227,0.8); padding: 11px 22px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; }
  .btn-outline:hover { border-color: var(--border-hover); color: var(--gold-light); }
  .btn-danger { background: none; border: 1px solid rgba(239,68,68,0.3); color: #f87171; padding: 7px 14px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; }
  .btn-danger:hover { background: rgba(239,68,68,0.12); border-color: rgba(239,68,68,0.5); }
  .btn-small { border: 1px solid var(--border); color: rgba(247,241,227,0.7); background: none; padding: 7px 12px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; }
  .btn-small:hover { border-color: var(--border-hover); color: var(--gold-light); }
  .list-row { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 4px; border-bottom: 1px solid var(--border); transition: background 0.15s; }
  .list-row:hover { background: rgba(255,255,255,0.02); }
  .list-row:first-child { border-top: 1px solid var(--border); }
  .list-main { display: flex; align-items: center; gap: 14px; min-width: 0; }
  .list-title { font-weight: 600; font-size: 15px; }
  .list-meta { font-size: 12px; color: rgba(247,241,227,0.45); margin-top: 3px; }
  .badge { display: inline-block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; padding: 4px 9px; border: 1px solid var(--border-hover); color: var(--gold-light); white-space: nowrap; flex-shrink: 0; }
  .price-tag { font-size: 12px; color: rgba(247,241,227,0.6); white-space: nowrap; flex-shrink: 0; }
  .row-actions { display: flex; gap: 8px; flex-shrink: 0; }
  .status { border: 1px solid rgba(212,175,55,0.4); background: rgba(212,175,55,0.06); color: var(--gold-light); padding: 14px 18px; font-size: 14px; margin-bottom: 28px; }
  .status.error { border-color: rgba(239,68,68,0.4); background: rgba(239,68,68,0.06); color: #f87171; }
  .list-item-row { display: flex; align-items: flex-start; gap: 8px; margin-top: 12px; }
  .list-item-row textarea, .list-item-row input { margin-top: 0; }
  .link-btn { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--gold-light); background: none; border: none; cursor: pointer; margin-top: 14px; padding: 0; }
  .link-btn:hover { text-decoration: underline; }
  .image-field { display: flex; align-items: center; gap: 10px; margin-top: 9px; }
  .image-field img { height: 56px; width: 56px; object-fit: cover; border: 1px solid var(--border); flex-shrink: 0; background: var(--night); }
  .image-field input { margin-top: 0; }
  .upload-label { flex-shrink: 0; cursor: pointer; border: 1px solid var(--border); padding: 11px 16px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(247,241,227,0.7); transition: all 0.15s; }
  .upload-label:hover { border-color: var(--border-hover); color: var(--gold-light); }
  .price-box { border: 1px solid var(--border); background: rgba(0,0,0,0.15); padding: 20px; margin-top: 9px; }
  .price-box .field-label { margin-top: 18px; font-weight: 400; text-transform: none; letter-spacing: normal; font-size: 13px; color: rgba(247,241,227,0.7); }
  .price-box .field-label:first-child { margin-top: 0; }
  .tier-row { display: flex; gap: 8px; margin-top: 8px; }
  .tier-row input:nth-child(2) { width: 120px; }
  .hidden { display: none; }
  code { color: var(--gold-light); font-family: ui-monospace, monospace; }
  .muted { color: rgba(247,241,227,0.55); font-size: 14px; }
  .section-title { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
  .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  @media (max-width: 640px) { .field-row { grid-template-columns: 1fr; } }
  .field-row > div label.field-label { margin-top: 0; }
  ::selection { background: rgba(212,175,55,0.3); }
</style>
</head>
<body>
<div class="glow" aria-hidden="true"></div>
<div class="wrap" id="app"></div>
<script>
(function () {
  "use strict";

  var SESSION_KEY = "moc-admin-token";
  var app = document.getElementById("app");
  var state = {
    token: sessionStorage.getItem(SESSION_KEY) || null,
    offers: null,
    editingSlug: null,
    isNew: false,
    draft: null,
    status: null, // { kind, message }
  };

  var CATEGORIES = [
    { slug: "pirotechnika", title: "Efekty Pirotechniczne" },
    { slug: "fotobudki", title: "Fotobudki" },
    { slug: "dmuchance", title: "Dmuchańce" },
    { slug: "inne", title: "DJ, Fotograf i Dekoracje" },
    { slug: "wynajem", title: "Wynajem Sprzętu" },
  ];

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function slugify(input) {
    var map = { ą: "a", ć: "c", ę: "e", ł: "l", ń: "n", ó: "o", ś: "s", ź: "z", ż: "z" };
    return String(input)
      .toLowerCase()
      .split("")
      .map(function (ch) { return map[ch] || ch; })
      .join("")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function emptyOffer() {
    return {
      slug: "", category: CATEGORIES[0].slug, emoji: "", title: "",
      shortDescription: "", longDescription: [""], highlights: [""],
      image: "", secondaryImage: "", gallery: [], price: {},
    };
  }

  async function api(path, options) {
    options = options || {};
    var headers = options.headers || {};
    if (state.token) headers["Authorization"] = "Bearer " + state.token;
    var res = await fetch(path, { ...options, headers: headers });
    return res;
  }

  async function loadOffers() {
    var res = await api("/offers");
    if (res.status === 401) {
      sessionStorage.removeItem(SESSION_KEY);
      state.token = null;
      render();
      return;
    }
    if (!res.ok) {
      state.status = { kind: "error", message: "Błąd pobierania ofert (" + res.status + ")" };
      render();
      return;
    }
    var data = await res.json();
    state.offers = data.offers;
    render();
  }

  async function handleLogin(username, password) {
    state.status = { kind: "saving" };
    render();
    try {
      var res = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password }),
      });
      if (!res.ok) {
        state.status = { kind: "error", message: "Błędny login lub hasło." };
        render();
        return;
      }
      var data = await res.json();
      sessionStorage.setItem(SESSION_KEY, data.token);
      state.token = data.token;
      state.status = null;
      await loadOffers();
    } catch (e) {
      state.status = { kind: "error", message: "Nie udało się połączyć z serwerem." };
      render();
    }
  }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    state.token = null;
    state.offers = null;
    state.draft = null;
    state.editingSlug = null;
    render();
  }

  function startEdit(slug) {
    var item = state.offers.find(function (o) { return o.slug === slug; });
    state.draft = JSON.parse(JSON.stringify(item));
    state.editingSlug = slug;
    state.isNew = false;
    state.status = null;
    render();
  }

  function startNew() {
    state.draft = emptyOffer();
    state.editingSlug = null;
    state.isNew = true;
    state.status = null;
    render();
  }

  function cancelEdit() {
    state.draft = null;
    state.editingSlug = null;
    state.isNew = false;
    render();
  }

  async function saveDraft() {
    var draft = state.draft;
    var finalSlug = state.isNew ? slugify(draft.slug || draft.title) : draft.slug;
    if (!finalSlug) {
      state.status = { kind: "error", message: "Podaj tytuł, żeby wygenerować slug." };
      render();
      return;
    }
    if (state.isNew && state.offers.some(function (o) { return o.slug === finalSlug; })) {
      state.status = { kind: "error", message: "Taki slug już istnieje — zmień tytuł." };
      render();
      return;
    }

    var cleaned = Object.assign({}, draft, {
      slug: finalSlug,
      longDescription: draft.longDescription.map(function (p) { return p.trim(); }).filter(Boolean),
      highlights: draft.highlights.map(function (h) { return h.trim(); }).filter(Boolean),
      gallery: draft.gallery.map(function (g) { return g.trim(); }).filter(Boolean),
    });
    if (cleaned.longDescription.length === 0) cleaned.longDescription = [""];
    if (!cleaned.secondaryImage) delete cleaned.secondaryImage;

    var nextOffers = state.isNew
      ? state.offers.concat([cleaned])
      : state.offers.map(function (o) { return o.slug === state.editingSlug ? cleaned : o; });

    state.status = { kind: "saving" };
    render();
    try {
      var res = await api("/offers", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ offers: nextOffers }),
      });
      if (!res.ok) throw new Error("Zapis nie powiódł się (" + res.status + ")");
      state.offers = nextOffers;
      state.status = { kind: "success", message: "Zapisano. Strona przebuduje się automatycznie w ciągu 1–2 minut." };
      state.draft = null;
      state.editingSlug = null;
      state.isNew = false;
      render();
    } catch (e) {
      state.status = { kind: "error", message: String(e) };
      render();
    }
  }

  async function deleteOffer(slug) {
    if (!confirm("Na pewno usunąć ofertę \\"" + slug + "\\"? Tej operacji nie da się cofnąć z panelu.")) return;
    var nextOffers = state.offers.filter(function (o) { return o.slug !== slug; });
    state.status = { kind: "saving" };
    render();
    try {
      var res = await api("/offers", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ offers: nextOffers }),
      });
      if (!res.ok) throw new Error("Usuwanie nie powiodło się (" + res.status + ")");
      state.offers = nextOffers;
      state.status = { kind: "success", message: "Usunięto." };
      render();
    } catch (e) {
      state.status = { kind: "error", message: String(e) };
      render();
    }
  }

  async function uploadFile(file, onDone, onError) {
    try {
      var contentBase64 = await new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function () { resolve(reader.result.split(",")[1] || ""); };
        reader.onerror = function () { reject(reader.error); };
        reader.readAsDataURL(file);
      });
      var res = await api("/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: file.name, contentType: file.type, contentBase64: contentBase64 }),
      });
      if (!res.ok) throw new Error("Wgrywanie nie powiodło się (" + res.status + ")");
      var data = await res.json();
      onDone(data.path);
    } catch (e) {
      onError(String(e));
    }
  }

  // ---------- rendering ----------

  function render() {
    if (!state.token) return renderLogin();
    if (state.draft) return renderEditor();
    return renderList();
  }

  function formatPrice(price) {
    price = price || {};
    if (price.tiers && price.tiers.length > 0) {
      var min = Math.min.apply(null, price.tiers.map(function (t) { return t.price; }));
      return "od " + min + " zł";
    }
    if (typeof price.from === "number") return "od " + price.from + " zł";
    return price.note || "Zapytaj o cenę";
  }

  function renderTopbar(showLogout) {
    return (
      '<div class="topbar">' +
      '<div class="brand">' +
      '<span class="brand-mark">M</span>' +
      '<span class="brand-text"><b>MOC ATRAKCJI</b> — Panel Admina</span>' +
      "</div>" +
      (showLogout ? '<button class="logout" id="logoutBtn">Wyloguj</button>' : "") +
      "</div>"
    );
  }

  function renderStatus() {
    if (!state.status || state.status.kind === "idle") return "";
    var cls = state.status.kind === "error" ? "status error" : "status";
    var msg = state.status.kind === "saving" ? "Zapisywanie…" : esc(state.status.message || "");
    return '<div class="' + cls + '">' + msg + "</div>";
  }

  function renderLogin() {
    app.innerHTML =
      renderTopbar(false) +
      '<div class="card login-card">' +
      '<span class="eyebrow">Strefa prywatna</span>' +
      '<h1 class="font-display">Panel administracyjny</h1>' +
      '<p class="muted" style="margin-top:8px;">Zaloguj się, aby edytować ofertę.</p>' +
      '<label class="field-label">Login</label>' +
      '<input type="text" id="usernameInput" autofocus autocomplete="username" />' +
      '<label class="field-label">Hasło</label>' +
      '<input type="password" id="passwordInput" autocomplete="current-password" />' +
      '<button class="btn-gold" id="loginBtn" style="margin-top:28px;width:100%;">Zaloguj</button>' +
      renderStatus() +
      "</div>";

    function submit() {
      handleLogin(
        document.getElementById("usernameInput").value,
        document.getElementById("passwordInput").value
      );
    }
    document.getElementById("loginBtn").onclick = submit;
    document.getElementById("usernameInput").onkeydown = function (e) {
      if (e.key === "Enter") submit();
    };
    document.getElementById("passwordInput").onkeydown = function (e) {
      if (e.key === "Enter") submit();
    };
  }

  function categoryTitle(slug) {
    var c = CATEGORIES.find(function (c) { return c.slug === slug; });
    return c ? c.title : slug;
  }

  function renderList() {
    var offers = state.offers || [];
    var rows = offers
      .map(function (item) {
        var thumb = item.image
          ? '<img src="' + esc(item.image) + '" referrerpolicy="no-referrer" style="width:44px;height:44px;object-fit:cover;border:1px solid var(--border);flex-shrink:0;" />'
          : '<span style="width:44px;height:44px;border:1px solid var(--border);flex-shrink:0;"></span>';
        return (
          '<div class="list-row">' +
          '<div class="list-main">' +
          thumb +
          '<div style="min-width:0;">' +
          '<p class="list-title">' + esc(item.title) + "</p>" +
          '<p class="list-meta">' + esc(categoryTitle(item.category)) + "</p>" +
          "</div></div>" +
          '<span class="price-tag">' + esc(formatPrice(item.price)) + "</span>" +
          '<div class="row-actions">' +
          '<button class="btn-small" data-edit="' + esc(item.slug) + '">Edytuj</button>' +
          '<button class="btn-danger" data-delete="' + esc(item.slug) + '">Usuń</button>' +
          "</div></div>"
        );
      })
      .join("");

    app.innerHTML =
      renderTopbar(true) +
      renderStatus() +
      '<div class="section-title">' +
      '<div><span class="eyebrow">Zarządzanie ofertą</span><h2 class="font-display" style="margin-top:4px;">Oferty (' + offers.length + ")</h2></div>" +
      '<button class="btn-outline" id="newBtn">+ Nowa oferta</button>' +
      "</div>" +
      (state.offers === null ? '<p class="muted">Wczytywanie…</p>' : rows);

    document.getElementById("logoutBtn").onclick = logout;
    document.getElementById("newBtn").onclick = startNew;
    app.querySelectorAll("[data-edit]").forEach(function (btn) {
      btn.onclick = function () { startEdit(btn.getAttribute("data-edit")); };
    });
    app.querySelectorAll("[data-delete]").forEach(function (btn) {
      btn.onclick = function () { deleteOffer(btn.getAttribute("data-delete")); };
    });
  }

  function renderStringList(values, key) {
    var list = values.length > 0 ? values : [""];
    return (
      list
        .map(function (v, i) {
          var tag = key === "longDescription" ? "textarea" : "input";
          var attrs = key === "longDescription" ? ' rows="3"' : "";
          return (
            '<div class="list-item-row">' +
            "<" + tag + attrs + ' style="flex:1;" data-list="' + key + '" data-idx="' + i + '">' +
            (tag === "textarea" ? esc(v) : "") +
            "</" + tag + ">" +
            (tag === "input" ? "" : "") +
            '<button class="btn-small" data-list-remove="' + key + '" data-idx="' + i + '">Usuń</button>' +
            "</div>"
          );
        })
        .join("") +
      '<button class="link-btn" data-list-add="' + key + '">+ dodaj pozycję</button>'
    );
  }

  function imageFieldHtml(fieldName, value) {
    var preview = value ? '<img src="' + esc(value) + '" referrerpolicy="no-referrer" />' : "";
    return (
      '<div class="image-field" data-image-field="' + fieldName + '">' +
      preview +
      '<input type="text" value="' + esc(value) + '" data-image-input="' + fieldName + '" placeholder="Wklej adres zdjęcia lub wgraj plik →" style="flex:1;" />' +
      '<label class="upload-label">Wgraj<input type="file" accept="image/jpeg,image/png,image/webp,image/gif" data-image-upload="' + fieldName + '" style="display:none;" /></label>' +
      "</div>"
    );
  }

  function galleryFieldHtml(values) {
    var list = values.length > 0 ? values : [];
    var rows = list
      .map(function (v, i) {
        var preview = v ? '<img src="' + esc(v) + '" referrerpolicy="no-referrer" />' : "";
        return (
          '<div class="image-field" data-gallery-row="' + i + '">' +
          preview +
          '<input type="text" value="' + esc(v) + '" data-gallery-input="' + i + '" style="flex:1;" />' +
          '<label class="upload-label">Wgraj<input type="file" accept="image/jpeg,image/png,image/webp,image/gif" data-gallery-upload="' + i + '" style="display:none;" /></label>' +
          '<button class="btn-small" data-gallery-remove="' + i + '">Usuń</button>' +
          "</div>"
        );
      })
      .join("");
    return rows + '<button class="link-btn" data-gallery-add="1">+ dodaj zdjęcie do galerii</button>';
  }

  function priceHtml(price) {
    var tiers = price.tiers || [];
    var tierRows = tiers
      .map(function (t, i) {
        return (
          '<div class="tier-row">' +
          '<input type="text" value="' + esc(t.label) + '" placeholder="np. 6 szt" data-tier-label="' + i + '" />' +
          '<input type="number" value="' + esc(t.price) + '" placeholder="cena zł" data-tier-price="' + i + '" />' +
          '<button class="btn-small" data-tier-remove="' + i + '">Usuń</button>' +
          "</div>"
        );
      })
      .join("");
    return (
      '<div class="price-box">' +
      '<label class="field-label">Cena „od” (zł, opcjonalnie)</label>' +
      '<input type="number" id="priceFrom" value="' + (price.from != null ? esc(price.from) : "") + '" />' +
      '<label class="field-label">Notatka zamiast/obok ceny (opcjonalnie)</label>' +
      '<input type="text" id="priceNote" value="' + esc(price.note || "") + '" placeholder="np. Wycena indywidualna" />' +
      '<label class="field-label">Warianty cenowe (opcjonalnie)</label>' +
      '<div id="tiersList">' + tierRows + "</div>" +
      '<button class="link-btn" id="addTierBtn">+ dodaj wariant</button>' +
      "</div>"
    );
  }

  function renderEditor() {
    var d = state.draft;
    var categoryOptions = CATEGORIES.map(function (c) {
      return '<option value="' + c.slug + '"' + (c.slug === d.category ? " selected" : "") + ">" + esc(c.title) + "</option>";
    }).join("");

    app.innerHTML =
      renderTopbar(true) +
      renderStatus() +
      '<div class="card">' +
      '<span class="eyebrow">' + (state.isNew ? "Nowa pozycja" : "Edycja oferty") + "</span>" +
      '<h2 class="font-display" style="margin-top:6px;">' + (state.isNew ? "Nowa oferta" : esc(d.title || d.slug)) + "</h2>" +

      '<label class="field-label">Tytuł</label>' +
      '<input type="text" id="f_title" value="' + esc(d.title) + '" />' +

      (state.isNew
        ? '<label class="field-label">Slug (adres URL) — zostanie wygenerowany z tytułu, jeśli puste</label>' +
          '<input type="text" id="f_slug" value="' + esc(d.slug) + '" placeholder="np. nowy-efekt" />'
        : "") +

      '<label class="field-label">Kategoria</label>' +
      '<select id="f_category">' + categoryOptions + "</select>" +

      '<label class="field-label">Krótki opis (widoczny na kafelkach)</label>' +
      '<textarea id="f_shortDescription" rows="2">' + esc(d.shortDescription) + "</textarea>" +

      '<label class="field-label">Opis szczegółowy (akapity)</label>' +
      '<div id="longDescriptionList">' + renderStringList(d.longDescription, "longDescription") + "</div>" +

      '<label class="field-label">Najważniejsze punkty (jeden na pozycję)</label>' +
      '<div id="highlightsList">' + renderStringList(d.highlights, "highlights") + "</div>" +

      '<label class="field-label">Zdjęcie główne</label>' +
      imageFieldHtml("image", d.image) +

      '<label class="field-label">Zdjęcie dodatkowe (opcjonalne)</label>' +
      imageFieldHtml("secondaryImage", d.secondaryImage || "") +

      '<label class="field-label">Galeria zdjęć (3 pozycje w mozaice)</label>' +
      '<div id="galleryList">' + galleryFieldHtml(d.gallery) + "</div>" +

      '<label class="field-label">Cena</label>' +
      priceHtml(d.price) +

      '<div style="margin-top:32px;display:flex;gap:12px;flex-wrap:wrap;">' +
      '<button class="btn-gold" id="saveBtn">Zapisz zmiany</button>' +
      '<button class="btn-outline" id="cancelBtn">Anuluj</button>' +
      "</div></div>";

    bindEditorEvents();
  }

  function bindEditorEvents() {
    var d = state.draft;

    document.getElementById("f_title").oninput = function () { d.title = this.value; };
    var slugInput = document.getElementById("f_slug");
    if (slugInput) slugInput.oninput = function () { d.slug = this.value; };
    document.getElementById("f_category").onchange = function () { d.category = this.value; };
    document.getElementById("f_shortDescription").oninput = function () { d.shortDescription = this.value; };

    bindStringList("longDescriptionList", d.longDescription, function (v) { d.longDescription = v; });
    bindStringList("highlightsList", d.highlights, function (v) { d.highlights = v; });

    bindImageField("image", function (v) { d.image = v; });
    bindImageField("secondaryImage", function (v) { d.secondaryImage = v; });
    bindGallery(d);
    bindPrice(d);

    document.getElementById("saveBtn").onclick = saveDraft;
    document.getElementById("cancelBtn").onclick = cancelEdit;
  }

  function bindStringList(containerId, values, setValues) {
    var container = document.getElementById(containerId);
    container.querySelectorAll("[data-list]").forEach(function (el) {
      el.oninput = function () {
        var idx = Number(this.getAttribute("data-idx"));
        values[idx] = this.value;
      };
    });
    container.querySelectorAll("[data-list-remove]").forEach(function (btn) {
      btn.onclick = function () {
        var idx = Number(this.getAttribute("data-idx"));
        values.splice(idx, 1);
        if (values.length === 0) values.push("");
        renderEditor();
      };
    });
    var addBtn = container.parentElement.querySelector("[data-list-add]");
    if (addBtn) {
      addBtn.onclick = function () {
        values.push("");
        renderEditor();
      };
    }
  }

  function bindImageField(fieldName, setValue) {
    var wrap = document.querySelector('[data-image-field="' + fieldName + '"]');
    var input = wrap.querySelector("[data-image-input]");
    input.oninput = function () { setValue(this.value); };
    var fileInput = wrap.querySelector("[data-image-upload]");
    fileInput.onchange = function () {
      var file = this.files[0];
      if (!file) return;
      uploadFile(
        file,
        function (path) { setValue(path); renderEditor(); },
        function (err) { state.status = { kind: "error", message: err }; renderEditor(); }
      );
    };
  }

  function bindGallery(d) {
    var container = document.getElementById("galleryList");
    container.querySelectorAll("[data-gallery-input]").forEach(function (el) {
      el.oninput = function () {
        var idx = Number(this.getAttribute("data-gallery-input"));
        d.gallery[idx] = this.value;
      };
    });
    container.querySelectorAll("[data-gallery-remove]").forEach(function (btn) {
      btn.onclick = function () {
        var idx = Number(this.getAttribute("data-gallery-remove"));
        d.gallery.splice(idx, 1);
        renderEditor();
      };
    });
    container.querySelectorAll("[data-gallery-upload]").forEach(function (fileInput) {
      fileInput.onchange = function () {
        var idx = Number(this.getAttribute("data-gallery-upload"));
        var file = this.files[0];
        if (!file) return;
        uploadFile(
          file,
          function (path) { d.gallery[idx] = path; renderEditor(); },
          function (err) { state.status = { kind: "error", message: err }; renderEditor(); }
        );
      };
    });
    var addBtn = document.querySelector('[data-gallery-add]');
    if (addBtn) {
      addBtn.onclick = function () {
        d.gallery.push("");
        renderEditor();
      };
    }
  }

  function bindPrice(d) {
    document.getElementById("priceFrom").oninput = function () {
      d.price.from = this.value === "" ? undefined : Number(this.value);
      if (d.price.from === undefined) delete d.price.from;
    };
    document.getElementById("priceNote").oninput = function () {
      d.price.note = this.value || undefined;
      if (!d.price.note) delete d.price.note;
    };
    document.querySelectorAll("[data-tier-label]").forEach(function (el) {
      el.oninput = function () {
        var idx = Number(this.getAttribute("data-tier-label"));
        d.price.tiers[idx].label = this.value;
      };
    });
    document.querySelectorAll("[data-tier-price]").forEach(function (el) {
      el.oninput = function () {
        var idx = Number(this.getAttribute("data-tier-price"));
        d.price.tiers[idx].price = Number(this.value);
      };
    });
    document.querySelectorAll("[data-tier-remove]").forEach(function (btn) {
      btn.onclick = function () {
        var idx = Number(this.getAttribute("data-tier-remove"));
        d.price.tiers.splice(idx, 1);
        renderEditor();
      };
    });
    var addTierBtn = document.getElementById("addTierBtn");
    if (addTierBtn) {
      addTierBtn.onclick = function () {
        if (!d.price.tiers) d.price.tiers = [];
        d.price.tiers.push({ label: "", price: 0 });
        renderEditor();
      };
    }
  }

  render();
  if (state.token) loadOffers();
})();
</script>
</body>
</html>
`;
