"use client";

import { useState } from "react";
import Script from "next/script";
import Reveal from "./Reveal";

type Status = "idle" | "submitting" | "success" | "error";

const interestOptions = [
  "Efekty Pirotechniczne",
  "Fotobudki",
  "Dmuchańce",
  "DJ",
  "Fotograf",
  "Dekoracje",
  "Pakiet Wszystko",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [selected, setSelected] = useState<string[]>([]);

  function toggleInterest(name: string) {
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    formData.append("interests", selected.join(", "));

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (!result.success) throw new Error("Request failed");

      setStatus("success");
      event.currentTarget.reset();
      setSelected([]);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="scroll-mt-24 bg-night-soft py-24">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Bezpłatna Wycena
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
            Napisz do Nas
          </h2>
          <p className="mt-4 text-ink/70">Odpiszemy w ciągu 24 godzin.</p>
        </Reveal>

        <Reveal delay={100}>
        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl border border-white/10 bg-night-card p-6 text-left shadow-xl sm:p-8"
        >
          <input type="hidden" name="access_key" value="REPLACE_WITH_WEB3FORMS_ACCESS_KEY" />
          <input type="hidden" name="subject" value="Nowe zapytanie ofertowe - Moc Atrakcji" />
          <input type="hidden" name="from_name" value="Formularz Moc Atrakcji" />
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-ink">
                Imię i nazwisko *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Anna Kowalska"
                className="mt-2 w-full rounded-lg border border-white/15 bg-night px-4 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
            <div>
              <label htmlFor="date" className="text-sm font-medium text-ink">
                Data wesela *
              </label>
              <input
                id="date"
                name="date"
                type="date"
                required
                style={{ colorScheme: "dark" }}
                className="mt-2 w-full rounded-lg border border-white/15 bg-night px-4 py-2.5 text-sm text-ink focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="phone" className="text-sm font-medium text-ink">
              Telefon *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+48 600 000 000"
              className="mt-2 w-full rounded-lg border border-white/15 bg-night px-4 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>

          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-ink">
              Co Cię interesuje?
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {interestOptions.map((option) => {
                const active = selected.includes(option);
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleInterest(option)}
                    aria-pressed={active}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      active
                        ? "gradient-cta border-transparent text-void"
                        : "border-white/15 text-ink/70 hover:border-gold/60"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-6">
            <label htmlFor="message" className="text-sm font-medium text-ink">
              Dodatkowe informacje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Lokalizacja, liczba gości, szczegóły wesela..."
              className="mt-2 w-full rounded-lg border border-white/15 bg-night px-4 py-2.5 text-sm text-ink placeholder:text-ink/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>

          <div className="mt-6 flex justify-center">
            <div className="h-captcha" data-captcha="true" />
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="gradient-cta mt-8 w-full rounded-full px-6 py-3.5 text-sm font-semibold text-void transition hover:opacity-90 disabled:opacity-60"
          >
            {status === "submitting" ? "Wysyłanie..." : "Wyślij zapytanie"}
          </button>

          {status === "success" && (
            <p className="mt-4 text-center text-sm font-medium text-gold-light">
              Dziękujemy! Odpowiemy w ciągu 24 godzin.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-center text-sm font-medium text-gold-light">
              Coś poszło nie tak. Zadzwoń do nas: 690 945 898.
            </p>
          )}
        </form>
        </Reveal>
      </div>
      <Script src="https://web3forms.com/client/script.js" strategy="lazyOnload" />
    </section>
  );
}
