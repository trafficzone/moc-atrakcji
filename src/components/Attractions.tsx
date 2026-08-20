import Image from "next/image";
import Link from "next/link";
import { formatPriceBadge, offerItems } from "@/lib/offer";
import Reveal from "./Reveal";

export default function Attractions() {
  return (
    <section id="atrakcje" className="scroll-mt-24 bg-night-soft py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Pełna Oferta
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium text-ink sm:text-5xl">
            Wszystkie atrakcje w jednym miejscu.
          </h2>
          <p className="mt-4 text-ink/70">
            Kliknij w dowolną pozycję, by dowiedzieć się więcej i zobaczyć,
            co dokładnie obejmuje.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {offerItems.slice(0, 6).map((item, i) => (
          <Reveal key={item.slug} delay={(i % 3) * 100}>
            <Link
              href={`/oferta/${item.slug}`}
              className="group relative flex h-[420px] flex-col justify-end overflow-hidden border-b border-white/10 p-7 sm:border-l"
            >
              <Image
                src={item.image}
                alt={`${item.title} — Moc Atrakcji`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />

              <span className="absolute right-6 top-6 rounded-full bg-void/70 px-3 py-1 text-xs font-semibold text-gold-light backdrop-blur">
                {formatPriceBadge(item.price)}
              </span>

              <div className="relative">
                <h3 className="font-display text-2xl font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink/70">
                  {item.shortDescription}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 border-b border-gold-light/60 pb-1 text-xs font-semibold uppercase tracking-[0.15em] text-gold-light">
                  Zobacz szczegóły
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14 flex justify-center">
        <Link
          href="/oferta"
          className="inline-flex items-center gap-2 border border-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light transition hover:bg-gold hover:text-void"
        >
          Sprawdź wszystkie
          <span aria-hidden>→</span>
        </Link>
      </Reveal>
    </section>
  );
}
