"use client";

import { useEffect, useMemo, useState } from "react";
import { categories, type OfferItem, type Price } from "@/lib/offer";

// Set this once you've deployed admin-worker (see admin-worker/README.md).
const API_BASE = "REPLACE_ME_WITH_WORKER_URL";

const SESSION_KEY = "moc-admin-token";

function slugify(input: string): string {
  const map: Record<string, string> = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };
  return input
    .toLowerCase()
    .split("")
    .map((ch) => map[ch] ?? ch)
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function emptyOffer(): OfferItem {
  return {
    slug: "",
    category: categories[0]?.slug ?? "",
    emoji: "",
    title: "",
    shortDescription: "",
    longDescription: [""],
    highlights: [""],
    image: "",
    gallery: [],
    price: {},
  };
}

type Status = { kind: "idle" | "saving" | "success" | "error"; message?: string };

export default function AdminPanelClient() {
  const [token, setToken] = useState<string | null>(null);
  const [checkingSession, setCheckingSession] = useState(true);
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState<Status>({ kind: "idle" });

  const [offers, setOffers] = useState<OfferItem[] | null>(null);
  const [loadingOffers, setLoadingOffers] = useState(false);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [draft, setDraft] = useState<OfferItem | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [saveStatus, setSaveStatus] = useState<Status>({ kind: "idle" });

  const notConfigured = API_BASE.startsWith("REPLACE_ME");

  useEffect(() => {
    const saved = sessionStorage.getItem(SESSION_KEY);
    if (saved) setToken(saved);
    setCheckingSession(false);
  }, []);

  useEffect(() => {
    if (token) void loadOffers(token);
  }, [token]);

  async function loadOffers(activeToken: string) {
    setLoadingOffers(true);
    try {
      const res = await fetch(`${API_BASE}/offers`, {
        headers: { Authorization: `Bearer ${activeToken}` },
      });
      if (res.status === 401) {
        sessionStorage.removeItem(SESSION_KEY);
        setToken(null);
        return;
      }
      if (!res.ok) throw new Error(`Błąd pobierania (${res.status})`);
      const data = (await res.json()) as { offers: OfferItem[] };
      setOffers(data.offers);
    } catch (err) {
      setLoginStatus({ kind: "error", message: String(err) });
    } finally {
      setLoadingOffers(false);
    }
  }

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    setLoginStatus({ kind: "saving" });
    try {
      const res = await fetch(`${API_BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (!res.ok) {
        setLoginStatus({ kind: "error", message: "Błędne hasło." });
        return;
      }
      const data = (await res.json()) as { token: string };
      sessionStorage.setItem(SESSION_KEY, data.token);
      setToken(data.token);
      setPassword("");
      setLoginStatus({ kind: "idle" });
    } catch {
      setLoginStatus({ kind: "error", message: "Nie udało się połączyć z serwerem." });
    }
  }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    setToken(null);
    setOffers(null);
    setEditingSlug(null);
    setDraft(null);
  }

  function startEdit(item: OfferItem) {
    setDraft(JSON.parse(JSON.stringify(item)));
    setEditingSlug(item.slug);
    setIsNew(false);
    setSaveStatus({ kind: "idle" });
  }

  function startNew() {
    setDraft(emptyOffer());
    setEditingSlug(null);
    setIsNew(true);
    setSaveStatus({ kind: "idle" });
  }

  function cancelEdit() {
    setDraft(null);
    setEditingSlug(null);
    setIsNew(false);
  }

  async function saveDraft() {
    if (!draft || !offers || !token) return;

    const finalSlug = isNew ? slugify(draft.slug || draft.title) : draft.slug;
    if (!finalSlug) {
      setSaveStatus({ kind: "error", message: "Podaj tytuł, żeby wygenerować slug." });
      return;
    }
    if (isNew && offers.some((o) => o.slug === finalSlug)) {
      setSaveStatus({ kind: "error", message: "Taki slug już istnieje — zmień tytuł." });
      return;
    }

    const cleaned: OfferItem = {
      ...draft,
      slug: finalSlug,
      longDescription: draft.longDescription.map((p) => p.trim()).filter(Boolean),
      highlights: draft.highlights.map((h) => h.trim()).filter(Boolean),
      gallery: draft.gallery.map((g) => g.trim()).filter(Boolean),
    };
    if (cleaned.longDescription.length === 0) cleaned.longDescription = [""];

    const nextOffers = isNew
      ? [...offers, cleaned]
      : offers.map((o) => (o.slug === editingSlug ? cleaned : o));

    setSaveStatus({ kind: "saving" });
    try {
      const res = await fetch(`${API_BASE}/offers`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ offers: nextOffers }),
      });
      if (!res.ok) throw new Error(`Zapis nie powiódł się (${res.status})`);
      setOffers(nextOffers);
      setSaveStatus({
        kind: "success",
        message: "Zapisano. Strona przebuduje się automatycznie w ciągu 1–2 minut.",
      });
      cancelEdit();
    } catch (err) {
      setSaveStatus({ kind: "error", message: String(err) });
    }
  }

  async function deleteOffer(slug: string) {
    if (!offers || !token) return;
    if (!confirm(`Na pewno usunąć ofertę „${slug}”? Tej operacji nie da się cofnąć z panelu.`)) {
      return;
    }
    const nextOffers = offers.filter((o) => o.slug !== slug);
    setSaveStatus({ kind: "saving" });
    try {
      const res = await fetch(`${API_BASE}/offers`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ offers: nextOffers }),
      });
      if (!res.ok) throw new Error(`Usuwanie nie powiodło się (${res.status})`);
      setOffers(nextOffers);
      setSaveStatus({ kind: "success", message: "Usunięto." });
      if (editingSlug === slug) cancelEdit();
    } catch (err) {
      setSaveStatus({ kind: "error", message: String(err) });
    }
  }

  async function uploadImage(file: File): Promise<string> {
    if (!token) throw new Error("Brak sesji.");
    const contentBase64 = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result.split(",")[1] ?? "");
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
    const res = await fetch(`${API_BASE}/upload`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        filename: file.name,
        contentType: file.type,
        contentBase64,
      }),
    });
    if (!res.ok) throw new Error(`Wgrywanie nie powiodło się (${res.status})`);
    const data = (await res.json()) as { path: string };
    return data.path;
  }

  const filteredOffers = useMemo(() => offers ?? [], [offers]);

  if (notConfigured) {
    return (
      <PanelShell>
        <div className="mx-auto max-w-lg border border-gold/40 bg-night-card p-6 text-sm text-ink/80">
          <p className="font-semibold text-gold-light">Panel nieskonfigurowany</p>
          <p className="mt-2">
            Zmienna <code className="text-gold-light">API_BASE</code> w pliku
            <code className="mx-1 text-gold-light">AdminPanelClient.tsx</code>
            nadal wskazuje placeholder. Wdróż workera z folderu
            <code className="mx-1 text-gold-light">admin-worker/</code> (patrz jego
            README) i wklej tam docelowy adres.
          </p>
        </div>
      </PanelShell>
    );
  }

  if (checkingSession) return <PanelShell>Wczytywanie…</PanelShell>;

  if (!token) {
    return (
      <PanelShell>
        <form
          onSubmit={handleLogin}
          className="mx-auto mt-20 max-w-sm border border-white/10 bg-night-card p-8"
        >
          <h1 className="font-display text-2xl text-ink">Panel administracyjny</h1>
          <label className="mt-6 block text-xs font-semibold uppercase tracking-[0.15em] text-ink/60">
            Hasło
          </label>
          <input
            type="password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full border border-white/15 bg-night px-4 py-2.5 text-sm text-ink focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            disabled={loginStatus.kind === "saving"}
            className="mt-6 w-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-void transition hover:bg-gold-light disabled:opacity-60"
          >
            {loginStatus.kind === "saving" ? "Logowanie…" : "Zaloguj"}
          </button>
          {loginStatus.kind === "error" && (
            <p className="mt-4 text-sm text-red-400">{loginStatus.message}</p>
          )}
        </form>
      </PanelShell>
    );
  }

  return (
    <PanelShell onLogout={logout}>
      {saveStatus.kind !== "idle" && (
        <div
          className={`mb-6 border px-4 py-3 text-sm ${
            saveStatus.kind === "error"
              ? "border-red-500/40 text-red-300"
              : "border-gold/40 text-gold-light"
          }`}
        >
          {saveStatus.kind === "saving" ? "Zapisywanie…" : saveStatus.message}
        </div>
      )}

      {!draft && (
        <>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-display text-xl text-ink">
              Oferty ({filteredOffers.length})
            </h2>
            <button
              onClick={startNew}
              className="border border-gold px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold-light hover:bg-gold hover:text-void"
            >
              + Nowa oferta
            </button>
          </div>

          {loadingOffers && <p className="text-ink/60">Wczytywanie ofert…</p>}

          <div className="divide-y divide-white/10 border-t border-white/10">
            {filteredOffers.map((item) => (
              <div key={item.slug} className="flex items-center justify-between gap-4 py-4">
                <div className="min-w-0">
                  <p className="truncate font-medium text-ink">{item.title}</p>
                  <p className="truncate text-xs text-ink/50">
                    {item.slug} · {item.category}
                  </p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    onClick={() => startEdit(item)}
                    className="border border-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-ink/80 hover:border-gold/50 hover:text-gold-light"
                  >
                    Edytuj
                  </button>
                  <button
                    onClick={() => deleteOffer(item.slug)}
                    className="border border-red-500/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-red-400 hover:bg-red-500/10"
                  >
                    Usuń
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {draft && (
        <OfferEditor
          draft={draft}
          setDraft={setDraft}
          isNew={isNew}
          onCancel={cancelEdit}
          onSave={saveDraft}
          onUploadImage={uploadImage}
          saving={saveStatus.kind === "saving"}
        />
      )}
    </PanelShell>
  );
}

function PanelShell({
  children,
  onLogout,
}: {
  children: React.ReactNode;
  onLogout?: () => void;
}) {
  return (
    <div className="min-h-screen bg-night px-6 py-10 text-ink">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Moc Atrakcji — panel admina
          </p>
          {onLogout && (
            <button
              onClick={onLogout}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/50 hover:text-gold-light"
            >
              Wyloguj
            </button>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}

function OfferEditor({
  draft,
  setDraft,
  isNew,
  onCancel,
  onSave,
  onUploadImage,
  saving,
}: {
  draft: OfferItem;
  setDraft: (item: OfferItem) => void;
  isNew: boolean;
  onCancel: () => void;
  onSave: () => void;
  onUploadImage: (file: File) => Promise<string>;
  saving: boolean;
}) {
  return (
    <div className="border border-white/10 bg-night-card p-6 sm:p-8">
      <h2 className="font-display text-xl text-ink">
        {isNew ? "Nowa oferta" : `Edycja: ${draft.title || draft.slug}`}
      </h2>

      <Field label="Tytuł">
        <input
          value={draft.title}
          onChange={(e) => setDraft({ ...draft, title: e.target.value })}
          className={inputClass}
        />
      </Field>

      {isNew && (
        <Field label="Slug (adres URL) — zostanie wygenerowany z tytułu, jeśli puste">
          <input
            value={draft.slug}
            onChange={(e) => setDraft({ ...draft, slug: e.target.value })}
            placeholder="np. nowy-efekt"
            className={inputClass}
          />
        </Field>
      )}

      <Field label="Kategoria">
        <select
          value={draft.category}
          onChange={(e) => setDraft({ ...draft, category: e.target.value })}
          className={inputClass}
        >
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.title}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Krótki opis (widoczny na kafelkach)">
        <textarea
          rows={2}
          value={draft.shortDescription}
          onChange={(e) => setDraft({ ...draft, shortDescription: e.target.value })}
          className={inputClass}
        />
      </Field>

      <Field label="Opis szczegółowy (akapity)">
        <StringListEditor
          values={draft.longDescription}
          onChange={(v) => setDraft({ ...draft, longDescription: v })}
          textarea
          addLabel="+ dodaj akapit"
        />
      </Field>

      <Field label="Najważniejsze punkty (jeden na pozycję)">
        <StringListEditor
          values={draft.highlights}
          onChange={(v) => setDraft({ ...draft, highlights: v })}
          addLabel="+ dodaj punkt"
        />
      </Field>

      <Field label="Zdjęcie główne">
        <ImageField
          value={draft.image}
          onChange={(v) => setDraft({ ...draft, image: v })}
          onUpload={onUploadImage}
        />
      </Field>

      <Field label="Zdjęcie dodatkowe (opcjonalne, sekcja „Jak to realizujemy”)">
        <ImageField
          value={draft.secondaryImage ?? ""}
          onChange={(v) => setDraft({ ...draft, secondaryImage: v || undefined })}
          onUpload={onUploadImage}
        />
      </Field>

      <Field label="Galeria zdjęć (3 pozycje wyświetlane w mozaice)">
        <StringListEditor
          values={draft.gallery}
          onChange={(v) => setDraft({ ...draft, gallery: v })}
          addLabel="+ dodaj zdjęcie do galerii"
          renderItem={(value, onItemChange) => (
            <ImageField value={value} onChange={onItemChange} onUpload={onUploadImage} compact />
          )}
        />
      </Field>

      <Field label="Cena">
        <PriceEditor price={draft.price} onChange={(p) => setDraft({ ...draft, price: p })} />
      </Field>

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          onClick={onSave}
          disabled={saving}
          className="bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-void hover:bg-gold-light disabled:opacity-60"
        >
          {saving ? "Zapisywanie…" : "Zapisz zmiany"}
        </button>
        <button
          onClick={onCancel}
          className="border border-white/15 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70 hover:border-gold/40 hover:text-gold-light"
        >
          Anuluj
        </button>
      </div>
    </div>
  );
}

const inputClass =
  "mt-2 w-full border border-white/15 bg-night px-4 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-gold focus:outline-none";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-6">
      <label className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/60">
        {label}
      </label>
      {children}
    </div>
  );
}

function StringListEditor({
  values,
  onChange,
  addLabel,
  textarea,
  renderItem,
}: {
  values: string[];
  onChange: (values: string[]) => void;
  addLabel: string;
  textarea?: boolean;
  renderItem?: (value: string, onItemChange: (v: string) => void) => React.ReactNode;
}) {
  const list = values.length > 0 ? values : [""];

  function update(i: number, value: string) {
    const next = [...list];
    next[i] = value;
    onChange(next);
  }

  function remove(i: number) {
    const next = list.filter((_, idx) => idx !== i);
    onChange(next.length > 0 ? next : [""]);
  }

  return (
    <div className="mt-2 space-y-3">
      {list.map((value, i) => (
        <div key={i} className="flex items-start gap-2">
          <div className="flex-1">
            {renderItem ? (
              renderItem(value, (v) => update(i, v))
            ) : textarea ? (
              <textarea
                rows={3}
                value={value}
                onChange={(e) => update(i, e.target.value)}
                className={inputClass}
              />
            ) : (
              <input
                value={value}
                onChange={(e) => update(i, e.target.value)}
                className={inputClass}
              />
            )}
          </div>
          <button
            type="button"
            onClick={() => remove(i)}
            className="mt-2 shrink-0 border border-white/15 px-2 py-1 text-xs text-ink/60 hover:border-red-400/50 hover:text-red-400"
          >
            Usuń
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...list, ""])}
        className="text-xs font-semibold uppercase tracking-[0.1em] text-gold-light hover:underline"
      >
        {addLabel}
      </button>
    </div>
  );
}

function ImageField({
  value,
  onChange,
  onUpload,
  compact,
}: {
  value: string;
  onChange: (value: string) => void;
  onUpload: (file: File) => Promise<string>;
  compact?: boolean;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFile(file: File | undefined) {
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      const path = await onUpload(file);
      onChange(path);
    } catch (err) {
      setError(String(err));
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className={compact ? "" : "mt-2"}>
      <div className="flex items-center gap-3">
        {value && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={value}
            alt=""
            className="h-14 w-14 shrink-0 border border-white/15 object-cover"
          />
        )}
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Wklej adres zdjęcia lub wgraj plik →"
          className={inputClass + " mt-0"}
        />
        <label className="shrink-0 cursor-pointer border border-white/15 px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-ink/70 hover:border-gold/50 hover:text-gold-light">
          {uploading ? "Wgrywanie…" : "Wgraj"}
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/gif"
            className="hidden"
            onChange={(e) => void handleFile(e.target.files?.[0])}
          />
        </label>
      </div>
      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  );
}

function PriceEditor({
  price,
  onChange,
}: {
  price: Price;
  onChange: (price: Price) => void;
}) {
  const tiers = price.tiers ?? [];

  return (
    <div className="mt-2 space-y-4 border border-white/10 p-4">
      <div>
        <label className="text-xs text-ink/60">Cena „od” (zł, opcjonalnie)</label>
        <input
          type="number"
          value={price.from ?? ""}
          onChange={(e) =>
            onChange({
              ...price,
              from: e.target.value === "" ? undefined : Number(e.target.value),
            })
          }
          className={inputClass}
        />
      </div>

      <div>
        <label className="text-xs text-ink/60">Notatka zamiast/obok ceny (opcjonalnie)</label>
        <input
          value={price.note ?? ""}
          onChange={(e) => onChange({ ...price, note: e.target.value || undefined })}
          placeholder="np. Wycena indywidualna"
          className={inputClass}
        />
      </div>

      <div>
        <label className="text-xs text-ink/60">Warianty cenowe (opcjonalnie)</label>
        <div className="mt-2 space-y-2">
          {tiers.map((tier, i) => (
            <div key={i} className="flex gap-2">
              <input
                value={tier.label}
                onChange={(e) => {
                  const next = [...tiers];
                  next[i] = { ...next[i], label: e.target.value };
                  onChange({ ...price, tiers: next });
                }}
                placeholder="np. 6 szt"
                className={inputClass + " mt-0"}
              />
              <input
                type="number"
                value={tier.price}
                onChange={(e) => {
                  const next = [...tiers];
                  next[i] = { ...next[i], price: Number(e.target.value) };
                  onChange({ ...price, tiers: next });
                }}
                placeholder="cena zł"
                className={inputClass + " mt-0 w-32"}
              />
              <button
                type="button"
                onClick={() => onChange({ ...price, tiers: tiers.filter((_, idx) => idx !== i) })}
                className="shrink-0 border border-white/15 px-2 text-xs text-ink/60 hover:border-red-400/50 hover:text-red-400"
              >
                Usuń
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => onChange({ ...price, tiers: [...tiers, { label: "", price: 0 }] })}
            className="text-xs font-semibold uppercase tracking-[0.1em] text-gold-light hover:underline"
          >
            + dodaj wariant
          </button>
        </div>
      </div>
    </div>
  );
}
