"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/assets/logo-moc-atrakcji.png";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/Icons";

const navLinks = [
  { href: "/#atrakcje", label: "Oferta" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101010]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            alt="Moc Atrakcji"
            className="h-14 w-14 object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/70 transition hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href="/#kontakt"
            className="border border-gold px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-light transition hover:bg-gold hover:text-void"
          >
            Zapytaj o termin
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Otwórz menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center border border-white/15 md:hidden"
        >
          {open ? (
            <CloseIcon className="h-5 w-5 text-ink" />
          ) : (
            <MenuIcon className="h-5 w-5 text-ink" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-night px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.15em] text-ink/70"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+48690945898"
              className="flex items-center gap-2 text-base font-medium text-ink/70"
            >
              <PhoneIcon className="h-4 w-4 text-gold-light" />
              690 945 898
            </a>
            <a
              href="/#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 border border-gold px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gold-light"
            >
              Zapytaj o termin
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
