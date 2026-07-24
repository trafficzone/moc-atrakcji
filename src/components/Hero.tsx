import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-night">
      <Image
        src="https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?auto=format&fit=crop&w=2000&q=80"
        alt="Kolorowy pokaz fajerwerków nocą"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-night/70 via-night/60 to-night" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center sm:py-36 lg:py-44">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light sm:text-sm">
          Profesjonalne Atrakcje Weselne · Pomorze i Okolice
        </p>

        <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
          Spraw, by Wasze
          <br />
          <span className="gradient-text">Wesele Błyszczało</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
          Fotobudka, ciężki dym, fontanny iskier i wiele więcej. Przyjeżdżamy,
          ustawiamy, ogarniamy wszystko na miejscu.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#kontakt"
            className="gradient-cta rounded-full px-8 py-3.5 text-sm font-semibold text-void shadow-lg shadow-gold/30 transition hover:opacity-90"
          >
            Zapytaj o termin
          </a>
          <a
            href="#atrakcje"
            className="rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
          >
            Zobacz atrakcje
          </a>
        </div>
      </div>
    </section>
  );
}
