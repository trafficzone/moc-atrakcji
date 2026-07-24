"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/assets/logo-moc-atrakcji.png";

const navLinks = [
  { href: "/#atrakcje", label: "Atrakcje" },
  { href: "/#galeria", label: "Galeria" },
  { href: "/#opinie", label: "Opinie" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-night/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Moc Atrakcji"
            className="h-12 w-12 object-contain"
            preload
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href="tel:+48690945898"
            className="flex items-center gap-2 text-sm font-medium text-ink/70 transition hover:text-gold-light"
          >
            <span aria-hidden>📞</span>
            690 945 898
          </a>
          <a
            href="/#kontakt"
            className="gradient-cta rounded-full px-5 py-2.5 text-sm font-semibold text-void shadow-lg shadow-gold/20 transition hover:opacity-90"
          >
            Zapytaj o termin
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Otwórz menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 md:hidden"
        >
          <span aria-hidden className="text-xl text-ink">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-night-soft px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink/70"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+48690945898"
              className="text-base font-medium text-ink/70"
            >
              📞 690 945 898
            </a>
            <a
              href="/#kontakt"
              onClick={() => setOpen(false)}
              className="gradient-cta mt-2 rounded-full px-5 py-3 text-center text-sm font-semibold text-void"
            >
              Zapytaj o termin
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
