import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Wypełnij formularz",
    description:
      "Podaj datę wesela, lokalizację i interesujące Cię atrakcje. Odpiszemy w ciągu 24 godzin z bezpłatną wyceną.",
  },
  {
    number: "02",
    title: "Ustalamy szczegóły",
    description:
      "Omawiamy Wasze oczekiwania, dobieramy atrakcje i ustalamy szczegóły realizacji. Wszystko dopasowane pod Was.",
  },
  {
    number: "03",
    title: "Przyjeżdżamy i ogarniamy",
    description:
      "W dniu imprezy przyjeżdżamy, ustawiamy i obsługujemy przez cały wieczór. Wy się bawicie — my pilnujemy reszty.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-night py-24">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Jak Działamy
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
            Proste jak 1-2-3
          </h2>
        </Reveal>

        <div className="relative mt-16 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-px bg-white/10 sm:block"
          />
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 150} className="relative flex flex-col items-center">
              <div className="gradient-cta relative z-10 flex h-16 w-16 items-center justify-center rounded-full font-display text-xl font-bold text-void">
                {step.number}
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
