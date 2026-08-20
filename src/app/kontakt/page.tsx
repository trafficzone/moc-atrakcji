import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Skontaktuj się z Moc Atrakcji — działamy na terenie całego Pomorza. Zadzwoń, napisz lub wypełnij formularz, a odpiszemy w ciągu 24 godzin z bezpłatną wyceną.",
  alternates: {
    canonical: "https://mocatrakcji.pl/kontakt",
  },
};

export default function KontaktPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-night">
        <section className="relative overflow-hidden pt-16 pb-20 text-center sm:pt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold-dark/15 blur-3xl"
          />
          <Reveal className="relative mx-auto max-w-3xl px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Porozmawiajmy o Waszym Wydarzeniu
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
              Kontakt
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink/75">
              Działamy na terenie całego Pomorza — dojeżdżamy, ustawiamy i
              obsługujemy każdą atrakcję na miejscu. Zadzwoń, napisz lub
              wypełnij formularz poniżej, a odpiszemy w ciągu 24 godzin z
              bezpłatną wyceną.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="tel:+48690945898"
                className="gradient-cta flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-void shadow-lg shadow-gold/20 transition hover:opacity-90"
              >
                <PhoneIcon className="h-4 w-4" />
                690 945 898
              </a>
              <a
                href="mailto:mocatrakcji.pomorksie@gmail.com"
                className="flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-ink/85 transition hover:border-gold-dark/50 hover:text-gold-light"
              >
                <MailIcon className="h-4 w-4" />
                mocatrakcji.pomorksie@gmail.com
              </a>
            </div>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-night-card px-5 py-2.5 text-sm text-ink/75">
              <PinIcon className="h-4 w-4 shrink-0 text-gold-light" />
              Świadczymy usługi na terenie całego Pomorza — Gdańsk, Gdynia,
              Sopot, Trójmiasto i okoliczne powiaty
            </div>
          </Reveal>
        </section>

        <section className="bg-night py-20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                Kim Jesteśmy
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
                O Nas
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink/75">
                Moc Atrakcji to zespół specjalizujący się w organizacji
                efektów pirotechnicznych, fotobudek i dodatkowych atrakcji na
                wesela oraz imprezy okolicznościowe. Od lat pomagamy parom
                młodym i organizatorom wydarzeń na Pomorzu tworzyć momenty,
                które goście zapamiętają na długo.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink/75">
                Sami przyjeżdżamy, ustawiamy sprzęt i obsługujemy każdą
                atrakcję na miejscu — Wy nie musicie martwić się o logistykę
                ani szczegóły techniczne. Do każdej realizacji podchodzimy
                indywidualnie, dopasowując zakres i skalę efektów do
                charakteru wydarzenia oraz oczekiwań klienta.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink/75">
                Bezpieczeństwo gości jest dla nas priorytetem — cały sprzęt
                jest regularnie serwisowany i certyfikowany, a każdy pokaz
                prowadzony jest przez doświadczoną ekipę.
              </p>
            </Reveal>

            <Reveal delay={150} className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="rounded-2xl border border-white/10 bg-night-card p-6 text-center">
                <p className="font-display text-3xl font-bold text-gold-light">
                  100+
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-ink/60">
                  Zrealizowanych Imprez
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-night-card p-6 text-center">
                <p className="font-display text-3xl font-bold text-gold-light">
                  5
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-ink/60">
                  Lat Doświadczenia
                </p>
              </div>
              <div className="col-span-2 rounded-2xl border border-white/10 bg-night-card p-6 text-center">
                <p className="font-display text-2xl font-bold text-gold-light">
                  Całe Pomorze
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-ink/60">
                  Dojeżdżamy Do Was
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <ContactForm />
      </main>

      <Footer />
    </>
  );
}
