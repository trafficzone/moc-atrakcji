import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-void">
      <div className="mx-auto grid max-w-[1800px] grid-cols-1 lg:grid-cols-2">
        <div className="relative flex flex-col justify-center px-6 py-24 sm:px-12 lg:py-32 lg:px-16">
          <div className="flex items-center gap-3">
            <span aria-hidden className="h-px w-8 bg-gold" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-light">
              Eventy, które czuć się długo
            </p>
          </div>

          <h1 className="mt-8 font-display text-5xl font-medium leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            Dajemy
            <br />
            <span className="italic text-gold-light">moc</span>
            <br />
            wspomnieniom.
          </h1>

          <p className="mt-8 max-w-md text-base leading-relaxed text-ink/70">
            Tworzymy atrakcje, które rozkręcają wesela, eventy firmowe i
            prywatne celebracje.
          </p>

          <div className="mt-10">
            <a
              href="#atrakcje"
              className="inline-flex items-center gap-2 bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-void transition hover:bg-gold-light"
            >
              Poznaj ofertę
              <span aria-hidden>↓</span>
            </a>
          </div>
        </div>

        <div className="relative min-h-[420px] lg:min-h-[720px]">
          <Image
            src="/wiatraki-iskier.jpg"
            alt="Fontanny iskier na weselu Moc Atrakcji"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute left-6 right-14 top-8 bottom-20 border border-gold/40 sm:left-10 sm:right-24 sm:top-10 sm:bottom-28"
          />
        </div>
      </div>
    </section>
  );
}
