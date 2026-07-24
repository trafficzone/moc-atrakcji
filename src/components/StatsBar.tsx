import Reveal from "./Reveal";

const stats = [
  { value: "100+", label: "Zrealizowanych Imprez" },
  { value: "5", label: "Lat Doświadczenia" },
  { value: "Pomorze", label: "I Okolice" },
];

export default function StatsBar() {
  return (
    <section className="bg-void">
      <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-white/10 px-6 py-12 text-center sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 100} className="px-6 py-6 sm:py-0">
            <p
              className="font-display text-4xl font-bold text-gold-light sm:text-5xl"
            >
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
