import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { categories, formatPriceBadge, getItemsByCategory } from "@/lib/offer";

export const metadata: Metadata = {
  title: "Pełna Oferta",
  description:
    "Zobacz pełną ofertę Moc Atrakcji — efekty pirotechniczne, fotobudki, dmuchańce, DJ, fotograf, dekoracje i wynajem sprzętu na wesele lub imprezę.",
  alternates: {
    canonical: "https://mocatrakcji.pl/oferta",
  },
};

export default function OfertaPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-night">
        <section className="pt-16 pb-14 sm:pt-20">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Pełna Oferta
            </p>
            <h1 className="mt-4 font-display text-4xl font-medium text-ink sm:text-5xl">
              Wszystkie atrakcje.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink/70">
              Kompletny spis efektów i usług, którymi obsługujemy wesela,
              eventy firmowe i prywatne celebracje na całym Pomorzu.
            </p>
          </div>
        </section>

        {categories.map((category) => {
          const items = getItemsByCategory(category.slug);
          if (items.length === 0) return null;

          return (
            <section
              key={category.slug}
              id={category.slug}
              className="scroll-mt-24 border-t border-white/10 bg-night-soft py-20 odd:bg-night-soft even:bg-night"
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <Reveal className="max-w-2xl">
                  <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
                    {category.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">
                    {category.description}
                  </p>
                </Reveal>
              </div>

              <div className="mt-10 grid grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item, i) => (
                  <Reveal key={item.slug} delay={(i % 3) * 100}>
                    <Link
                      href={`/oferta/${item.slug}`}
                      className="group relative flex h-[360px] flex-col justify-end overflow-hidden border-b border-white/10 p-7 sm:border-l"
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
                        <h3 className="font-display text-xl font-medium text-ink">
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
            </section>
          );
        })}

        <section className="border-t border-white/10 bg-night-soft py-20 text-center">
          <Reveal className="mx-auto max-w-xl px-6 lg:px-8">
            <h2 className="font-display text-3xl font-medium text-ink sm:text-4xl">
              Nie wiesz, co wybrać?
            </h2>
            <p className="mt-4 text-ink/70">
              Napisz do nas, opowiedz o swoim wydarzeniu, a dobierzemy
              atrakcje dopasowane do Waszego stylu i budżetu.
            </p>
            <a
              href="/#kontakt"
              className="mt-8 inline-flex items-center gap-2 bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-void transition hover:bg-gold-light"
            >
              Zapytaj o wycenę
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
