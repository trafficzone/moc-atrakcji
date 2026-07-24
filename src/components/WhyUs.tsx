import Reveal from "./Reveal";

const reasons = [
  {
    emoji: "🏆",
    title: "100+ Zrealizowanych Imprez",
    description:
      "Bogate doświadczenie gwarantuje sprawne i profesjonalne przeprowadzenie każdej imprezy bez niespodzianek.",
  },
  {
    emoji: "🌍",
    title: "Pomorze i Okolice",
    description:
      "Obsługujemy wesela na całym Pomorzu — Gdańsk, Gdynia, Sopot, Trójmiasto i okoliczne powiaty. Dojedziemy do Ciebie!",
  },
  {
    emoji: "⚡",
    title: "Dojeżdżamy i Ustawiamy",
    description:
      "Przywieziemy, ustawimy i obsłużymy wszystko na miejscu. Ty skupiasz się na imprezie — my ogarniamy resztę.",
  },
  {
    emoji: "🎨",
    title: "Indywidualne Podejście",
    description:
      "Każde wesele jest inne. Dopasowujemy atrakcje do Waszego stylu i oczekiwań. Konsultacja zawsze gratis.",
  },
  {
    emoji: "🔒",
    title: "Bezpieczeństwo Przede Wszystkim",
    description:
      "Wszystkie nasze urządzenia są certyfikowane i regularnie serwisowane. Zimne ognie są bezpieczne dla gości.",
  },
  {
    emoji: "📷",
    title: "Przyjazne Fotografom",
    description:
      "Nasze efekty wyglądają fantastycznie na zdjęciach i filmach. Współpracujemy z fotografami dla najlepszego efektu.",
  },
];

export default function WhyUs() {
  return (
    <section id="opinie" className="scroll-mt-24 bg-night-soft py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Dlaczego Właśnie My
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
            Warto Nam Zaufać
          </h2>
          <p className="mt-4 text-ink/70">
            Kilka powodów, dla których warto wybrać właśnie nas w
            najważniejszy dzień Waszego życia.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 3) * 100}>
              <div className="rounded-2xl border border-white/10 bg-night-card p-8 shadow-lg">
                <span aria-hidden className="text-3xl">
                  {reason.emoji}
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
