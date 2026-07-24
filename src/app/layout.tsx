import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const siteUrl = "https://mocatrakcji.pl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Moc Atrakcji — Atrakcje Weselne na Pomorzu | Fotobudka, Ciężki Dym, Fontanny Iskier",
    template: "%s | Moc Atrakcji",
  },
  description:
    "Profesjonalne atrakcje weselne na Pomorzu i okolicach: fotobudka, ciężki dym, fontanny iskier, napis LOVE, balony i efekty pyro. Bezpłatna wycena w 24h — dojeżdżamy i ogarniamy wszystko na miejscu.",
  keywords: [
    "atrakcje weselne Pomorze",
    "fotobudka na wesele",
    "ciężki dym wesele",
    "fontanna iskier wesele",
    "napis LOVE na wesele",
    "atrakcje na wesele Gdańsk",
    "efekty pyro wesele",
    "Moc Atrakcji",
  ],
  authors: [{ name: "Moc Atrakcji" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    siteName: "Moc Atrakcji",
    title: "Moc Atrakcji — Atrakcje Weselne na Pomorzu",
    description:
      "Fotobudka, ciężki dym, fontanny iskier i więcej. Sprawiamy, by Wasze wesele błyszczało — dojeżdżamy i ogarniamy wszystko na miejscu.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Moc Atrakcji — atrakcje weselne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moc Atrakcji — Atrakcje Weselne na Pomorzu",
    description:
      "Fotobudka, ciężki dym, fontanny iskier i więcej. Bezpłatna wycena w 24h.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Moc Atrakcji",
  description:
    "Profesjonalne atrakcje weselne na Pomorzu: fotobudka, ciężki dym, fontanny iskier, napis LOVE, balony i efekty pyro.",
  url: siteUrl,
  telephone: "+48690945898",
  areaServed: {
    "@type": "Place",
    name: "Pomorze",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "Pomorskie",
    addressCountry: "PL",
  },
  priceRange: "$$",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-night text-ink">
        {children}
      </body>
    </html>
  );
}
