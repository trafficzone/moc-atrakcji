import Reveal from "./Reveal";

const audiences = [
  {
    tag: "Dla Par",
    title: "Wesela",
    description:
      "Pierwszy taniec, pełen parkiet i zdjęcia, do których wraca się po latach.",
  },
  {
    tag: "Dla Firm",
    title: "Firmowe emocje",
    description:
      "Gale, jubileusze i integracje z profesjonalną oprawą, bez organizacyjnego chaosu.",
  },
  {
    tag: "Dla Was",
    title: "Prywatne chwile",
    description:
      "Urodziny, rocznice i każda okazja, która zasługuje na coś więcej niż zwykłe spotkanie.",
  },
];

export default function AudienceStrip() {
  return (
    <section className="border-t border-white/10 bg-night">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-8">
        {audiences.map((audience, i) => (
          <Reveal key={audience.tag} delay={i * 100} className="px-2 py-12 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              {audience.tag}
            </p>
            <h3 className="mt-3 font-display text-2xl font-medium text-ink">
              {audience.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/70">
              {audience.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
