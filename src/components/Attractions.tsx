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
            Co Oferujemy
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
            Nasza Oferta
          </h2>
          <p className="mt-4 text-ink/70">
            Kliknij w dowolną pozycję, by dowiedzieć się więcej i zobaczyć,
            co dokładnie obejmuje.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {offerItems.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 3) * 100}>
              <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-night-card shadow-lg transition hover:-translate-y-1 hover:border-gold/40 hover:shadow-gold/10">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={`${item.title} — Moc Atrakcji`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-night/85 px-3 py-1 text-xs font-semibold text-gold-light backdrop-blur">
                    {formatPriceBadge(item.price)}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                    <span aria-hidden>{item.emoji}</span>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/70">
                    {item.shortDescription}
                  </p>
                  <Link
                    href={`/oferta/${item.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-light transition group-hover:gap-2"
                  >
                    Dowiedz się więcej
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
