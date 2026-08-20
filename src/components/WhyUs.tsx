import Image from "next/image";
import Reveal from "./Reveal";

const reasons = [
  {
    number: "01",
    title: "100+ Zrealizowanych Imprez",
    description:
      "Bogate doświadczenie gwarantuje sprawne i profesjonalne przeprowadzenie każdej imprezy bez niespodzianek.",
  },
  {
    number: "02",
    title: "Pomorze i Okolice",
    description:
      "Obsługujemy wesela na całym Pomorzu — Gdańsk, Gdynia, Sopot, Trójmiasto i okoliczne powiaty. Dojedziemy do Ciebie!",
  },
  {
    number: "03",
    title: "Dojeżdżamy i Ustawiamy",
    description:
      "Przywieziemy, ustawimy i obsłużymy wszystko na miejscu. Ty skupiasz się na imprezie — my ogarniamy resztę.",
  },
  {
    number: "04",
    title: "Indywidualne Podejście",
    description:
      "Każde wesele jest inne. Dopasowujemy atrakcje do Waszego stylu i oczekiwań. Konsultacja zawsze gratis.",
  },
  {
    number: "05",
    title: "Bezpieczeństwo Przede Wszystkim",
    description:
      "Wszystkie nasze urządzenia są certyfikowane i regularnie serwisowane. Zimne ognie są bezpieczne dla gości.",
  },
  {
    number: "06",
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
          <h2 className="mt-3 font-display text-4xl font-medium text-ink sm:text-5xl">
            Warto nam zaufać.
          </h2>
          <p className="mt-4 text-ink/70">
            Kilka powodów, dla których warto wybrać właśnie nas w
            najważniejszy dzień Waszego życia.
          </p>
        </Reveal>

        <Reveal delay={100} className="relative mt-14">
          <div className="relative h-72 overflow-hidden border border-white/10 sm:h-80">
            <Image
              src="/wiatraki-iskier.jpg"
              alt="Realizacja Moc Atrakcji — pokaz iskier na weselu"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-void/90 via-void/30 to-transparent" />
            <div className="absolute inset-0 flex items-center p-8 sm:p-12">
              <blockquote className="max-w-md">
                <span
                  aria-hidden
                  className="font-display text-5xl italic leading-none text-gold-light/70"
                >
                  „
                </span>
                <p className="mt-2 font-display text-xl italic leading-snug text-ink sm:text-2xl">
                  Zaufanie budujemy przy każdej realizacji — od pierwszej
                  rozmowy po ostatni efekt wieczoru.
                </p>
                <cite className="mt-4 block text-xs font-semibold not-italic uppercase tracking-[0.2em] text-gold-light">
                  Zespół Moc Atrakcji
                </cite>
              </blockquote>
            </div>
          </div>
          <div
            aria-hidden
            className="absolute -bottom-4 -right-4 hidden h-24 w-24 border border-gold/40 sm:block"
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={(i % 3) * 100}>
              <div className="h-full border-b border-white/10 p-8 sm:border-l">
                <span
                  aria-hidden
                  className="font-display text-3xl italic text-gold-light/70"
                >
                  {reason.number}
                </span>
                <h3 className="mt-5 font-display text-lg font-medium text-ink">
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
