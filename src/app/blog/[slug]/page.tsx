import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { getOfferItem } from "@/lib/offer";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://mocatrakcji.pl/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      publishedTime: post.date,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedOffers = post.relatedOfferSlugs
    .map((s) => getOfferItem(s))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Moc Atrakcji",
    },
    publisher: {
      "@type": "Organization",
      name: "Moc Atrakcji",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1 bg-night">
        <article>
          <section className="py-16 sm:py-20">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
              <nav className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
                <Link href="/blog" className="hover:underline">
                  Blog
                </Link>
              </nav>
              <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                {post.title}
              </h1>
              <p className="mt-4 text-sm text-ink/60">
                {formatDate(post.date)} · {post.readTime}
              </p>
            </div>
          </section>

          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-white/10">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <section className="py-16">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
              {post.sections.map((section, i) => (
                <div key={i} className={i > 0 ? "mt-8" : ""}>
                  {section.heading && (
                    <h2 className="font-display text-2xl font-bold text-ink">
                      {section.heading}
                    </h2>
                  )}
                  <div
                    className={`space-y-4 text-base leading-relaxed text-ink/75 ${
                      section.heading ? "mt-4" : ""
                    }`}
                  >
                    {section.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}

              <Reveal className="mt-12 rounded-2xl border border-white/10 bg-night-card p-6 text-center sm:p-8">
                <h3 className="font-display text-xl font-bold text-ink">
                  Zaplanujmy razem Wasze wesele
                </h3>
                <p className="mt-2 text-sm text-ink/70">
                  Bezpłatna wycena w 24 godziny — dojeżdżamy i ogarniamy
                  wszystko na miejscu.
                </p>
                <a
                  href="/kontakt"
                  className="gradient-cta mt-5 inline-block rounded-full px-7 py-3 text-sm font-semibold text-void transition hover:opacity-90"
                >
                  Zapytaj o wycenę
                </a>
              </Reveal>
            </div>
          </section>

          {relatedOffers.length > 0 && (
            <section className="bg-night-soft py-16">
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <h2 className="font-display text-xl font-bold text-ink">
                  Zobacz też w naszej ofercie
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {relatedOffers.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/oferta/${item.slug}`}
                      className="group overflow-hidden rounded-2xl border border-white/10 bg-night-card shadow-lg transition hover:-translate-y-1 hover:border-gold/40"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, 100vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="flex items-center gap-2 font-display text-base font-bold text-ink">
                          <span aria-hidden>{item.emoji}</span>
                          {item.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          {otherPosts.length > 0 && (
            <section className="bg-night py-16">
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <h2 className="font-display text-xl font-bold text-ink">
                  Więcej na blogu
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {otherPosts.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/blog/${p.slug}`}
                      className="group overflow-hidden rounded-2xl border border-white/10 bg-night-card shadow-lg transition hover:-translate-y-1 hover:border-gold/40"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, 100vw"
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-display text-base font-bold text-ink">
                          {p.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </article>
      </main>

      <Footer />
    </>
  );
}
