import Image from "next/image";
import { categories } from "@/lib/offer";
import logo from "@/assets/logo-moc-atrakcji.png";

export default function Footer() {
  return (
    <footer className="bg-void text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <Image
              src={logo}
              alt="Moc Atrakcji"
              className="h-14 w-14 object-contain"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Profesjonalne atrakcje weselne na Pomorzu i w okolicach.
              Sprawiamy, by Wasze wesele błyszczało.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Oferta
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {categories.map((category) => (
                <li key={category.slug}>
                  <a href="/#atrakcje" className="hover:text-gold-light">
                    {category.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Kontakt
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="tel:+48690945898" className="hover:text-gold-light">
                  690 945 898
                </a>
              </li>
              <li>
                <a
                  href="mailto:mocatrakcji.pomorksie@gmail.com"
                  className="hover:text-gold-light"
                >
                  mocatrakcji.pomorksie@gmail.com
                </a>
              </li>
              <li>Pomorze i okolice</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Moc Atrakcji. Wszelkie prawa
            zastrzeżone.
          </p>
          <a href="/blog" className="text-white/40 hover:text-gold-light">
            Blog
          </a>
        </div>
      </div>
    </footer>
  );
}
