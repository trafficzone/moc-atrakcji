export default function Footer() {
  return (
    <footer className="bg-void text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Zróbmy coś wyjątkowego
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
              Masz datę?
              <br />
              <span className="italic text-gold-light">My mamy moc.</span>
            </h2>
            <a
              href="mailto:mocatrakcji.pomorksie@gmail.com"
              className="mt-6 inline-block border-b border-gold-light/60 pb-1 text-lg text-ink hover:text-gold-light"
            >
              mocatrakcji.pomorksie@gmail.com ↗
            </a>
          </div>

          <div className="flex flex-col justify-between gap-10 lg:items-end lg:text-right">
            <p className="max-w-sm text-sm leading-relaxed text-white/60 lg:ml-auto">
              Najpierw napisz nam, kiedy i gdzie dzieje się Wasza historia.
              Wrócimy z pomysłem — oraz wolnym terminem.
            </p>
            <div>
              <a
                href="tel:+48690945898"
                className="block text-lg text-ink hover:text-gold-light"
              >
                690 945 898
              </a>
              <p className="mt-1 text-sm text-white/50">Pomorze i okolice</p>
            </div>
          </div>
        </div>

        <nav className="mt-16 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/10 pt-8 text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
          <a href="/#atrakcje" className="hover:text-gold-light">
            Oferta
          </a>
          <a href="/kontakt" className="hover:text-gold-light">
            Kontakt
          </a>
        </nav>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Moc Atrakcji</p>
          <p>Wspomnienia w dobrej oprawie</p>
        </div>
      </div>
    </footer>
  );
}
