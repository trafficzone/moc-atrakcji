import Image from "next/image";
import Reveal from "./Reveal";

const points = [
  {
    title: "Rozmowa na początek",
    description:
      "Pytamy o Was, gości i charakter wieczoru, zanim zaproponujemy jakikolwiek efekt.",
  },
  {
    title: "Dym, iskry i światło",
    description:
      "Dobieramy efekty tak, by razem tworzyły spójną, wyreżyserowaną scenę, a nie osobne atrakcje.",
  },
  {
    title: "Moment, który zostaje",
    description:
      "Liczy się to, co goście pamiętają jeszcze długo po ostatnim efekcie wieczoru.",
  },
];

export default function AtmosphereBand() {
  return (
    <section className="bg-night-soft py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <Reveal className="relative aspect-[4/5] lg:aspect-[3/4]">
          <Image
            src="/kolorowe-wystrzaly-2.jpg"
            alt="Para młoda w kolorowych iskrach — Moc Atrakcji"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute -bottom-6 -right-6 hidden h-32 w-32 border border-gold/40 sm:block"
          />
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Nie Tylko Atrakcje
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium text-ink sm:text-5xl">
              Budujemy
              <br />
              <span className="italic text-gold-light">atmosferę.</span>
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col gap-6 border-t border-white/10">
            {points.map((point, i) => (
              <Reveal
                key={point.title}
                delay={(i + 1) * 100}
                className="flex gap-5 border-b border-white/10 pt-6"
              >
                <span className="font-display text-sm text-gold-light">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
