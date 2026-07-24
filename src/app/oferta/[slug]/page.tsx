import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import {
  categories,
  formatPriceBadge,
  getItemsByCategory,
  getOfferItem,
  offerItems,
} from "@/lib/offer";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return offerItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getOfferItem(slug);
  if (!item) return {};

  return {
    title: item.title,
    description: item.shortDescription,
    alternates: {
      canonical: `https://mocatrakcji.pl/oferta/${item.slug}`,
    },
    openGraph: {
      title: `${item.title} | Moc Atrakcji`,
      description: item.shortDescription,
      images: [{ url: item.image }],
    },
  };
}

export default async function OfferDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getOfferItem(slug);
  if (!item) notFound();

  const category = categories.find((c) => c.slug === item.category);
  const relatedItems = getItemsByCategory(item.category).filter(
    (i) => i.slug !== item.slug
  );
  const [introText, secondaryText, closingText] = item.longDescription;
  const secondaryImage = item.secondaryImage ?? item.image;
  const isVideo = (src: string) => /\.(mov|mp4|webm)$/i.test(src);

  return (
    <>
      <Header />

      <main className="flex-1 bg-night">
        {/* Block 1 — text left, image right, elevated feature panel */}
        <section className="relative overflow-hidden pt-16 pb-20 sm:pt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl"
          />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <nav className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              <Link href="/#atrakcje" className="hover:underline">
                {category?.title ?? "Oferta"}
              </Link>
            </nav>

            <div className="mt-8 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
                  <span aria-hidden className="mr-2">
                    {item.emoji}
                  </span>
                  {item.title}
                </h1>
                <p className="gradient-text mt-5 font-display text-xl font-semibold italic sm:text-2xl">
                  {item.shortDescription}
                </p>
                <p className="mt-6 text-base leading-relaxed text-ink/75">
                  {introText}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/#kontakt"
                    className="gradient-cta rounded-full px-7 py-3.5 text-center text-sm font-semibold text-void shadow-lg shadow-gold/20 transition hover:opacity-90"
                  >
                    Zapytaj o wycenę
                  </a>
                  <a
                    href="tel:+48690945898"
                    className="rounded-full border border-white/15 px-7 py-3.5 text-center text-sm font-semibold text-ink/85 transition hover:border-gold-dark/50 hover:text-gold-light"
                  >
                    📞 690 945 898
                  </a>
                </div>
              </Reveal>

              <Reveal delay={150} className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/30 via-gold-dark/20 to-gold-dark/20 blur-2xl"
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
                  <Image
                    src={item.image}
                    alt={`${item.title} — Moc Atrakcji`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="gradient-cta absolute -bottom-5 -left-5 flex h-20 w-20 items-center justify-center rounded-2xl text-3xl shadow-xl">
                  {item.emoji}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Block 2 — image left, text right, alternate layout */}
        <section className="bg-night-soft py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal className="relative order-2 lg:order-1">
                <div className="relative aspect-[16/11] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                  {item.video ? (
                    <video
                      src={item.video}
                      poster={secondaryImage}
                      controls
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Image
                      src={secondaryImage}
                      alt={`${item.title} — realizacja`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full border border-gold-dark/40 bg-night-card" />
              </Reveal>

              <Reveal delay={150} className="order-1 lg:order-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                  Dlaczego warto
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
                  Jak to realizujemy
                </h2>
                <p className="mt-5 text-base leading-relaxed text-ink/75">
                  {secondaryText}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.highlights.slice(0, 3).map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-white/10 bg-night-card px-4 py-2 text-xs font-medium text-ink/80"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Photo gallery — mosaic */}
        {item.gallery.length > 0 && (
          <section className="bg-night py-20">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <Reveal className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                  Zobacz Efekt
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
                  Przykładowe Zdjęcia
                </h2>
              </Reveal>

              <div className="mt-12 grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:h-[520px]">
                <Reveal className="col-span-2 row-span-1 lg:col-span-1 lg:row-span-2">
                  <div className="relative h-full overflow-hidden rounded-2xl border border-white/10">
                    <Image
                      src={item.gallery[0]}
                      alt={`${item.title} — przykładowe zdjęcie 1`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                </Reveal>
                {item.gallery.slice(1, 3).map((src, i) => (
                  <Reveal key={src + i} delay={(i + 1) * 100}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 lg:aspect-auto lg:h-full">
                      {isVideo(src) ? (
                        <video
                          src={src}
                          controls
                          muted
                          loop
                          playsInline
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <Image
                          src={src}
                          alt={`${item.title} — przykładowe zdjęcie ${i + 2}`}
                          fill
                          sizes="(min-width: 1024px) 25vw, 50vw"
                          className="object-cover transition duration-500 hover:scale-105"
                        />
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pricing */}
        <section className="bg-night py-20">
          <Reveal className="mx-auto max-w-xl px-6 text-center lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Cennik
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
              {item.price.tiers ? "Ceny" : formatPriceBadge(item.price)}
            </h2>
            {item.price.tiers && (
              <ul className="mx-auto mt-8 flex max-w-sm flex-col gap-3 text-left">
                {item.price.tiers.map((tier) => (
                  <li
                    key={tier.label}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-night-card px-5 py-3"
                  >
                    <span className="text-sm text-ink/80">{tier.label}</span>
                    <span className="font-display text-lg font-bold text-gold-light">
                      {tier.price} zł
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {item.price.note &&
              (item.price.tiers || typeof item.price.from === "number") && (
                <p className="mt-4 text-sm text-ink/60">{item.price.note}</p>
              )}
          </Reveal>
        </section>

        {/* Remaining offer details — simple, unsectioned */}
        <section className="bg-night-soft py-20">
          <Reveal className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
              W skrócie
            </h2>
            {closingText && (
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink/75">
                {closingText}
              </p>
            )}
            <ul className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
              {item.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-2 text-sm text-ink/80"
                >
                  <span aria-hidden className="mt-0.5 text-gold-light">
                    ✓
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
            <a
              href="/#kontakt"
              className="gradient-cta mt-10 inline-block rounded-full px-8 py-3.5 text-sm font-semibold text-void shadow-lg shadow-gold/20 transition hover:opacity-90"
            >
              Zapytaj o wycenę
            </a>
          </Reveal>
        </section>

        {relatedItems.length > 0 && (
          <section className="bg-night py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="font-display text-2xl font-bold text-ink">
                Zobacz też: {category?.title}
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {relatedItems.map((related, i) => (
                  <Reveal key={related.slug} delay={(i % 3) * 100}>
                    <Link
                      href={`/oferta/${related.slug}`}
                      className="group block overflow-hidden rounded-2xl border border-white/10 bg-night-card shadow-lg transition hover:-translate-y-1 hover:border-gold/40"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={related.image}
                          alt={`${related.title} — Moc Atrakcji`}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                          <span aria-hidden>{related.emoji}</span>
                          {related.title}
                        </h3>
                        <p className="mt-2 text-sm text-ink/70">
                          {related.shortDescription}
                        </p>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-void py-10 text-center text-sm text-white/70">
        <Link href="/" className="hover:text-gold-light">
          ← Wróć do strony głównej
        </Link>
      </footer>
    </>
  );
}
