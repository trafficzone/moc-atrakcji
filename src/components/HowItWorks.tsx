import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Poznajmy się",
    description:
      "Opowiadacie nam o dacie, miejscu i klimacie wydarzenia. Słuchamy, pytamy i podpowiadamy.",
  },
  {
    number: "02",
    title: "Dobieramy oprawę",
    description:
      "Tworzymy zestaw atrakcji, który wygląda i działa jak jedna, dobrze zaplanowana historia.",
  },
  {
    number: "03",
    title: "Robimy moment",
    description:
      "W dniu wydarzenia jesteśmy o krok przed Wami — spokojni, przygotowani i gotowi na dobrą energię.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-night py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Jak Działamy
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
            Bez przypadku.
            <br />
            <span className="italic text-gold-light">Z wyczuciem.</span>
          </h2>
        </Reveal>

        <div className="flex flex-col divide-y divide-white/10 border-t border-white/10">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 120}>
              <div className="flex gap-6 py-8">
                <span className="font-display text-lg text-gold-light">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/70">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
