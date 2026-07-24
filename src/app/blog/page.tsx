import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Poradniki o Atrakcjach Weselnych",
  description:
    "Praktyczne poradniki o atrakcjach weselnych: efekty pirotechniczne, fotobudki, organizacja wesela na Pomorzu i bezpieczeństwo pokazów.",
  alternates: {
    canonical: "https://mocatrakcji.pl/blog",
  },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <>
      <Header />

      <main className="flex-1 bg-night">
        <section className="py-20 text-center">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Poradniki
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
              Blog
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink/75">
              Praktyczna wiedza o atrakcjach weselnych — od doboru efektów
              pirotechnicznych, przez fotobudki, po organizację wesela na
              Pomorzu.
            </p>
          </div>
        </section>

        <section className="bg-night-soft py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 100}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block overflow-hidden rounded-2xl border border-white/10 bg-night-card shadow-lg transition hover:-translate-y-1 hover:border-gold/40"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-xs font-medium uppercase tracking-wide text-gold-light">
                        {formatDate(post.date)} · {post.readTime}
                      </p>
                      <h2 className="mt-3 font-display text-lg font-bold text-ink">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm text-ink/70">{post.excerpt}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-light transition group-hover:gap-2">
                        Czytaj dalej
                        <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
