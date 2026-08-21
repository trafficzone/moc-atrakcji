import offersData from "@/data/offers.json";

export type Category = {
  slug: string;
  title: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "pirotechnika",
    title: "Efekty Pirotechniczne",
    description:
      "Zimne ognie, fontanny iskier i pokazy fajerwerków — bezpieczne efekty sceniczne, które zrobią wrażenie na sali i pod otwartym niebem.",
  },
  {
    slug: "fotobudki",
    title: "Fotobudki",
    description:
      "Nieograniczone zdjęcia, natychmiastowe wydruki i mnóstwo zabawy dla gości przez cały wieczór.",
  },
  {
    slug: "dmuchance",
    title: "Dmuchańce",
    description: "Atrakcje dla najmłodszych gości weselnych i rodzinnych imprez plenerowych.",
  },
  {
    slug: "inne",
    title: "DJ, Fotograf i Dekoracje",
    description:
      "Organizujemy też oprawę muzyczną, fotograficzną i dekoracyjną Waszego wesela — jeden kontakt, kompleksowa organizacja.",
  },
  {
    slug: "wynajem",
    title: "Wynajem Sprzętu",
    description:
      "Sprzęt nagłośnieniowy i imprezowy do wynajęcia na Wasze wesele lub prywatną imprezę.",
  },
];

export type PriceTier = {
  label: string;
  price: number;
};

export type Price = {
  from?: number;
  tiers?: PriceTier[];
  note?: string;
};

export type OfferItem = {
  slug: string;
  category: string;
  emoji: string;
  title: string;
  shortDescription: string;
  longDescription: string[];
  highlights: string[];
  image: string;
  secondaryImage?: string;
  video?: string;
  gallery: string[];
  price: Price;
};

export const offerItems: OfferItem[] = offersData as OfferItem[];

export function getOfferItem(slug: string) {
  return offerItems.find((item) => item.slug === slug);
}

export function getItemsByCategory(categorySlug: string) {
  return offerItems.filter((item) => item.category === categorySlug);
}

export function formatPriceBadge(price: Price): string {
  if (price.tiers && price.tiers.length > 0) {
    const min = Math.min(...price.tiers.map((t) => t.price));
    return `od ${min} zł`;
  }
  if (typeof price.from === "number") {
    return `od ${price.from} zł`;
  }
  return price.note ?? "Zapytaj o cenę";
}
