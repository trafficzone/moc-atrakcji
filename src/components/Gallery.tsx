import Image from "next/image";
import Reveal from "./Reveal";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
    alt: "Dłonie nowożeńców z obrączkami i bukietem",
  },
  {
    src: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=800&q=80",
    alt: "Ceremonia ślubna pod ozdobną altaną",
  },
  {
    src: "https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=800&q=80",
    alt: "Słodki stół weselny przy ceglanej ścianie",
  },
  {
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
    alt: "Elegancko nakryty długi stół weselny",
  },
  {
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
    alt: "Sala weselna przygotowana na przyjęcie",
  },
  {
    src: "https://images.unsplash.com/photo-1509927083803-4bd519298ac4?auto=format&fit=crop&w=800&q=80",
    alt: "Buty pary młodej przed ceremonią",
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="scroll-mt-24 bg-night py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Nasze Realizacje
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
            Galeria Zdjęć
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 3) * 100}>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
