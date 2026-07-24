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

const PYRO = {
  smoke:
    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80",
  confetti:
    "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=1200&q=80",
  sparklers:
    "https://images.unsplash.com/photo-1481162854517-d9e353af153d?auto=format&fit=crop&w=1200&q=80",
  fireworks:
    "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?auto=format&fit=crop&w=1200&q=80",
  stage:
    "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
};

const OTHER = {
  toast:
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
  crowdLights:
    "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
  longTable:
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80",
  kidsPlaying:
    "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80",
  balloons:
    "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
  djHeadphones:
    "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?auto=format&fit=crop&w=1200&q=80",
  djTurntable:
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
  camera:
    "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80",
  ringsBouquet:
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
  gazebo:
    "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=80",
  beachTable:
    "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1200&q=80",
  ballroom:
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
};

export const offerItems: OfferItem[] = [
  {
    slug: "ciezki-dym",
    category: "pirotechnika",
    emoji: "☁️",
    title: "Ciężki Dym",
    shortDescription:
      "Efekt tańca w chmurach — niezapomniane pierwsze wejście pary młodej.",
    longDescription: [
      "Ciężki dym to gęsta, opadająca chmura spowijająca parkiet — efekt znany z klubowych imprez i teledysków, dziś jeden z najchętniej wybieranych elementów pierwszego tańca. W przeciwieństwie do dymu ze zwykłej wytwornicy, ciężki dym opada w dół i ściele się nisko nad podłogą, dzięki czemu para młoda dosłownie „tańczy w chmurach”, a widoczność w górnej części sali pozostaje pełna — goście i fotograf cały czas widzą twarze tańczących.",
      "Efekt uzyskujemy za pomocą specjalistycznej maszyny na bazie suchego lodu lub glikolu spożywczego — w obu wariantach dym jest zimny, bezpieczny dla dróg oddechowych i nie pozostawia zapachu ani śladów na ubraniach, garniturze czy sukni ślubnej. Urządzenie ustawiamy dyskretnie przy krawędzi parkietu, tak by nie było widoczne na zdjęciach, a samą chmurę uruchamiamy zdalnie, dokładnie w momencie, który wcześniej z Wami ustalimy.",
      "To jeden z tych efektów, które najlepiej wychodzą na filmie — polecamy go szczególnie parom, które planują profesjonalną relację wideo z pierwszego tańca. Chętnie łączymy ciężki dym z fontannami iskier do ręki lub wiatrakami iskier, tworząc rozbudowaną, wielowarstwową scenografię wejścia na parkiet.",
    ],
    highlights: [
      "Efekt „tańca w chmurach” na pierwszy taniec",
      "Bezpieczny, chłodny dym bez zapachu",
      "Nie plami ubrań ani sukni ślubnej",
      "Zdalne uruchomienie w idealnym momencie",
    ],
    image: "/ciezki-dym.webp",
    gallery: [PYRO.stage, PYRO.sparklers, PYRO.confetti],
    price: { from: 700 },
  },
  {
    slug: "fontanny-iskier",
    category: "pirotechnika",
    emoji: "✨",
    title: "Fontanny Iskier",
    shortDescription:
      "Zimne ognie elektryczne — spektakl bez ognia, bezpieczny w każdej sali.",
    longDescription: [
      "Fontanny iskier to strzelające w górę snopy zimnych ogni, uruchamiane elektronicznie — bez otwartego ognia, dymu prochowego i hałasu typowego dla klasycznych fajerwerków. Iskry mają niską temperaturę i rozpraszają się, zanim opadną, dzięki czemu efekt można bezpiecznie ustawić stosunkowo blisko gości i dekoracji.",
      "To rozwiązanie sprawdza się zarówno w salach zamkniętych, jak i w plenerze — jest w pełni zgodne z przepisami przeciwpożarowymi większości obiektów weselnych, dlatego to jeden z najczęściej akceptowanych przez właścicieli sal efektów pirotechnicznych. Świetnie wygląda na zdjęciach i filmie, szczególnie podczas wejścia pary młodej na salę, pierwszego tańca lub przecięcia tortu.",
      "Czas trwania, wysokość i liczbę fontann dobieramy do wielkości sali oraz oczekiwanego efektu — od dwóch dyskretnych fontann przy stole prezydialnym, po rozbudowaną scenografię wzdłuż całego parkietu.",
    ],
    highlights: [
      "Bezpieczne dla gości i wnętrz",
      "Można używać w salach zamkniętych",
      "Efektowne na zdjęciach i wideo",
      "Zdalne, precyzyjne odpalenie",
    ],
    image: PYRO.smoke,
    gallery: [PYRO.sparklers, PYRO.fireworks, PYRO.stage],
    price: { note: "Wycena indywidualna" },
  },
  {
    slug: "fontanny-iskier-do-reki",
    category: "pirotechnika",
    emoji: "🎇",
    title: "Fontanny Iskier do Ręki",
    shortDescription:
      "Trzymane w dłoni zimne ognie — idealne na wyjście pary młodej przez szpaler gości.",
    longDescription: [
      "Ręczne fontanny iskier to bezpieczna alternatywa dla klasycznych zimnych ogni — goście trzymają je w dłoniach, tworząc świetlisty szpaler, przez który przechodzi para młoda, wyjeżdża samochód lub kończy się część oficjalna wieczoru.",
      "To jeden z najczęściej fotografowanych i filmowanych momentów całego wesela — świetlisty tunel z iskier to gotowa, efektowna scena, która świetnie wygląda zarówno na zdjęciach, jak i w relacjach na Instagramie czy TikToku gości.",
      "Dostarczamy odpowiednią liczbę sztuk dopasowaną do liczby gości uczestniczących w szpalerze, a przed rozpoczęciem krótko instruujemy, jak bezpiecznie trzymać i odpalać fontannę. Cały czas jesteśmy na miejscu, by nadzorować przebieg i pomóc, jeśli ktoś będzie miał pytania.",
    ],
    highlights: [
      "Świetlisty szpaler dla pary młodej",
      "Bezpieczne w użyciu dla gości",
      "Liczba sztuk dopasowana do liczby gości",
      "Rewelacyjny materiał na zdjęcia i wideo",
    ],
    image: PYRO.confetti,
    gallery: [PYRO.smoke, PYRO.sparklers, PYRO.fireworks],
    price: { note: "Wycena indywidualna" },
  },
  {
    slug: "kolorowe-wystrzaly",
    category: "pirotechnika",
    emoji: "🎆",
    title: "Kolorowe Wystrzały do Góry",
    shortDescription:
      "Barwne strzały iskier wystrzeliwane pionowo w niebo — mocny, widowiskowy akcent wieczoru.",
    longDescription: [
      "Kolorowe wystrzały to pionowe strumienie iskier w wybranych barwach, wystrzeliwane wysoko w powietrze. To jeden z mocniejszych efektów w naszej ofercie — widoczny z daleka, słyszalny i świetnie komponujący się z muzyką graną w tym momencie przez DJ-a.",
      "Kolorystykę dobieramy indywidualnie — możecie postawić na barwy nawiązujące do motywu przewodniego wesela, kolorystyki dekoracji lub po prostu na klasyczne złoto i srebro, które sprawdzają się przy niemal każdej stylistyce.",
      "Polecamy je na zewnątrz, jako zwieńczenie ważnego momentu wieczoru — pierwszego tańca, przejścia w północ czy wjazdu pary młodej na plac zabawy weselnej. Ze względu na skalę efektu wymagana jest odpowiednia przestrzeń, którą ustalamy podczas konsultacji.",
    ],
    highlights: [
      "Widowiskowy efekt widoczny z daleka",
      "Kolory dopasowane do charakteru imprezy",
      "Idealne na kulminacyjny moment wieczoru",
      "Realizacja w plenerze",
    ],
    image: "/kolorowe-wystrzaly.jpg",
    secondaryImage: "/kolorowe-wystrzaly-2.jpg",
    gallery: [PYRO.stage, PYRO.confetti, PYRO.sparklers],
    price: {
      tiers: [
        { label: "6 szt", price: 700 },
        { label: "8 szt", price: 900 },
        { label: "10 szt", price: 1000 },
        { label: "12 szt", price: 1200 },
        { label: "14 szt", price: 1400 },
      ],
    },
  },
  {
    slug: "wystrzal-wachlarz",
    category: "pirotechnika",
    emoji: "🌟",
    title: "Wystrzał w Kształcie Wachlarza",
    shortDescription:
      "Szeroki, rozłożysty snop iskier przypominający otwarty wachlarz — efektowny akcent sceniczny.",
    longDescription: [
      "Wystrzał w kształcie wachlarza tworzy szeroką, symetryczną smugę iskier rozchodzącą się na boki — w przeciwieństwie do pionowych fontann, efekt ten „otwiera się” poziomo, tworząc widowiskowe tło o dużej rozpiętości.",
      "Świetnie sprawdza się jako scenografia dla pary młodej, zespołu muzycznego lub stanowiska DJ-a — ustawiamy go tak, by komponował się z istniejącą dekoracją sceny, a jednocześnie zachowywał bezpieczną odległość od gości i elementów łatwopalnych.",
      "To efekt, który dobrze wygląda zarówno z bliska, jak i na szerokich ujęciach filmowych — polecamy go szczególnie parom, które planują profesjonalne nagranie wideo z pierwszego tańca lub przemówień.",
    ],
    highlights: [
      "Szeroki, symetryczny efekt sceniczny",
      "Świetne tło do zdjęć i wideo",
      "Dopasowanie do dekoracji sceny",
      "Bezpieczna, kontrolowana realizacja",
    ],
    image: PYRO.stage,
    gallery: [PYRO.fireworks, PYRO.confetti, PYRO.smoke],
    price: { from: 1300 },
  },
  {
    slug: "wystrzal-wachlarz-gwiazdy",
    category: "pirotechnika",
    emoji: "🌠",
    title: "Wachlarz z Gwiazdami na Niebie + Większy Kaliber",
    shortDescription:
      "Rozbudowana wersja wachlarza — większy kaliber i dodatkowe gwiazdy wystrzeliwane wysoko w niebo.",
    longDescription: [
      "To rozszerzona, mocniejsza wersja efektu wachlarza: oprócz szerokiego snopu iskier przy scenie, w niebo wystrzeliwane są dodatkowe gwiazdy pirotechniczne, które rozświetlają się wysoko nad głowami gości, łącząc naziemny i powietrzny efekt w jedną spójną scenę.",
      "Dzięki większemu kalibrowi ładunków cały efekt jest bardziej intensywny, głośniejszy i widoczny z większej odległości — to opcja dla par, które chcą, by dany moment wieczoru zapadł w pamięć wszystkim gościom, nie tylko tym stojącym najbliżej.",
      "Ze względu na skalę i moc efektu realizujemy go wyłącznie w plenerze, z zachowaniem odpowiednich stref bezpieczeństwa — szczegóły lokalizacji i wymaganą przestrzeń ustalamy podczas wizji lokalnej lub na podstawie zdjęć i opisu miejsca.",
    ],
    highlights: [
      "Połączenie wachlarza i gwiazd na niebie",
      "Większy kaliber — mocniejszy efekt",
      "Rekomendowane na duże imprezy plenerowe",
      "Najbardziej widowiskowa wersja wachlarza",
    ],
    image: PYRO.fireworks,
    gallery: [PYRO.stage, PYRO.sparklers, PYRO.confetti],
    price: { from: 1500, note: "cena od" },
  },
  {
    slug: "wiatraki-iskier",
    category: "pirotechnika",
    emoji: "🎡",
    title: "Wiatraki Iskier",
    shortDescription:
      "Wirujące koła iskier — dynamiczny, hipnotyzujący efekt na scenie lub przy wejściu.",
    longDescription: [
      "Wiatraki iskier to obracające się koła pirotechniczne, które tworzą efekt wirującego, świetlistego kręgu — zupełnie inny charakter ruchu niż pionowe fontanny czy poziome wachlarze, dzięki czemu świetnie urozmaicają dłuższy pokaz.",
      "Doskonale sprawdzają się jako element dekoracyjny przy wejściu na salę, w bramie powitalnej gości lub jako oprawa sceny podczas przemówień i toastów. Montujemy je na stabilnych stojakach, z zachowaniem bezpiecznej strefy wokół obracającego się elementu.",
      "Wiatraki można łączyć z innymi efektami z naszej oferty — np. fontannami iskier, ciężkim dymem czy fontannami stojącymi — tworząc rozbudowany, wielowątkowy pokaz świetlny trwający kilka minut.",
    ],
    highlights: [
      "Efekt wirującego koła iskier",
      "Świetne jako element dekoracji wejścia lub sceny",
      "Można łączyć z innymi efektami",
      "Dynamiczny, hipnotyzujący pokaz",
    ],
    image: "/wiatraki-iskier.jpg",
    video: "/wiatraki-iskier-realizacja.mov",
    gallery: [PYRO.confetti, PYRO.stage, PYRO.fireworks],
    price: { tiers: [{ label: "2 szt", price: 1000 }] },
  },
  {
    slug: "fontanna-stojaca-2m",
    category: "pirotechnika",
    emoji: "🎯",
    title: "Fontanny Stojące 2m",
    shortDescription:
      "Klasyczne fontanny iskier o wysokości 2 metrów — uniwersalny efekt do wnętrz i plenerów.",
    longDescription: [
      "Fontanny stojące 2m to sprawdzony, uniwersalny efekt: pionowy słup iskier o wysokości około dwóch metrów, ustawiany parami lub w większych zestawach wzdłuż sceny, ołtarza plenerowego czy wejścia na salę.",
      "To rozmiar, który dobrze sprawdza się zarówno w dużych salach z wysokim sufitem, jak i w mniejszych, kameralnych wnętrzach — robi wyraźne wrażenie, nie dominując przy tym nad wystrojem sali ani nie przytłaczając przestrzeni.",
      "Fontanny 2m to nasz najczęściej wybierany rozmiar — elegancki, bezpieczny i uniwersalny, dlatego polecamy go jako punkt wyjścia, jeśli nie jesteście pewni, jaką skalę efektu wybrać na swoje wesele.",
    ],
    highlights: [
      "Wysokość ok. 2 metrów",
      "Uniwersalne zastosowanie — sala i plener",
      "Możliwość ustawienia w zestawach",
      "Sprawdzony, elegancki efekt",
    ],
    image: PYRO.confetti,
    gallery: [PYRO.sparklers, PYRO.smoke, PYRO.stage],
    price: {
      tiers: [
        { label: "4 szt", price: 250 },
        { label: "6 szt", price: 300 },
        { label: "8 szt", price: 400 },
      ],
    },
  },
  {
    slug: "fontanna-stojaca-3m",
    category: "pirotechnika",
    emoji: "🎯",
    title: "Fontanny Stojące 3m",
    shortDescription:
      "Fontanny iskier o wysokości 3 metrów — mocniejszy akcent niż wersja 2m, wciąż uniwersalny w użyciu.",
    longDescription: [
      "Fontanny stojące 3m to krok pomiędzy delikatną wersją 2m a najbardziej okazałą wersją 5m — wyższy, bardziej widoczny słup iskier, który wciąż dobrze sprawdza się zarówno w plenerze, jak i w salach z wyższym sufitem.",
      "To rozmiar polecany parom, które chcą mocniejszego efektu wizualnego niż standardowe 2m, ale niekoniecznie potrzebują skali i przestrzeni wymaganej przez fontanny 5m — dobry kompromis między widowiskowością a uniwersalnością zastosowania.",
      "Fontanny 3m ustawiamy pojedynczo lub w zestawach, dopasowując liczbę sztuk do wielkości sceny, wejścia na salę lub ołtarza plenerowego, z zachowaniem odpowiednich stref bezpieczeństwa.",
    ],
    highlights: [
      "Wysokość ok. 3 metrów",
      "Mocniejszy efekt niż wersja 2m",
      "Dobry kompromis skali i uniwersalności",
      "Możliwość ustawienia w zestawach",
    ],
    image: PYRO.stage,
    gallery: [PYRO.confetti, PYRO.fireworks, PYRO.smoke],
    price: { tiers: [{ label: "4 szt", price: 200 }] },
  },
  {
    slug: "fontanna-stojaca-5m",
    category: "pirotechnika",
    emoji: "🚀",
    title: "Fontanny Stojące 5m",
    shortDescription:
      "Imponujące fontanny iskier sięgające 5 metrów wysokości — mocny akcent na dużych imprezach.",
    longDescription: [
      "Fontanny stojące 5m to najbardziej okazała wersja tego efektu w naszej ofercie — wysoki, intensywny słup iskier widoczny z każdego miejsca na sali czy w plenerze, nawet przy dużej liczbie gości i rozległej przestrzeni.",
      "Ze względu na rozmiar i moc efektu realizujemy go głównie na zewnątrz lub w bardzo dużych, wysokich salach — zawsze z zachowaniem odpowiednich stref bezpieczeństwa wokół urządzenia, które ustalamy indywidualnie na etapie planowania.",
      "To efekt dla par, które chcą maksymalnego wrażenia — świetnie sprawdza się jako zwieńczenie pokazu pirotechnicznego lub samodzielny, mocny akcent podczas wjazdu pary młodej czy pierwszego tańca na dużej imprezie plenerowej.",
    ],
    highlights: [
      "Wysokość do 5 metrów",
      "Najmocniejszy efekt fontanny w ofercie",
      "Realizacja w plenerze lub dużych salach",
      "Pełne zachowanie stref bezpieczeństwa",
    ],
    image: PYRO.fireworks,
    gallery: [PYRO.confetti, PYRO.stage, PYRO.sparklers],
    price: {
      tiers: [
        { label: "2 szt", price: 300 },
        { label: "4 szt", price: 500 },
        { label: "6 szt", price: 700 },
      ],
    },
  },
  {
    slug: "fajerwerki-do-wiatrakow",
    category: "pirotechnika",
    emoji: "🎨",
    title: "Fajerwerki do Wiatraków (Wachlarze) — Do Wyboru",
    shortDescription:
      "Zestaw fajerwerków dobieranych do wiatraków i wachlarzy — kolor i intensywność efektu na Wasze życzenie.",
    longDescription: [
      "Do efektów wiatraków i wachlarzy oferujemy kilka wariantów ładunków pirotechnicznych różniących się kolorem iskier oraz intensywnością efektu — od delikatnego, srebrnego blasku, po intensywne, kolorowe warianty przyciągające wzrok z daleka.",
      "Wybór dobieramy wspólnie z Wami podczas ustalania szczegółów pokazu — na podstawie zdjęć referencyjnych i próbek wideo pokazujemy, jak każdy wariant wygląda w praktyce, zanim podejmiecie ostateczną decyzję.",
      "Dzięki temu każdy pokaz można dopasować do kolorystyki dekoracji sali, kwiatów czy motywu przewodniego wesela — tak, by cała oprawa wizualna wieczoru tworzyła spójną całość.",
    ],
    highlights: [
      "Kilka wariantów kolorystycznych do wyboru",
      "Dopasowanie do dekoracji i motywu wesela",
      "Ustalane indywidualnie podczas konsultacji",
      "Kompatybilne z wiatrakami i wachlarzami",
    ],
    image: PYRO.stage,
    gallery: [PYRO.fireworks, PYRO.sparklers, PYRO.confetti],
    price: {
      tiers: [
        { label: "Wariant 1", price: 600 },
        { label: "Wariant 2", price: 800 },
      ],
      note: "do wyboru",
    },
  },
  {
    slug: "wodospad-iskier",
    category: "pirotechnika",
    emoji: "💧",
    title: "Wodospad Iskier",
    shortDescription:
      "Opadająca kurtyna iskier rozciągnięta wzdłuż sceny lub wejścia — efektowna, świetlista ściana.",
    longDescription: [
      "Wodospad iskier to pozioma linia urządzeń, z których jednocześnie opada w dół gęsta kurtyna iskier — w przeciwieństwie do pionowych fontann efekt ten „spływa” ku ziemi, tworząc świetlistą ścianę o dużej rozpiętości.",
      "Świetnie sprawdza się jako scenografia przy wejściu na salę, wzdłuż stołu prezydialnego lub sceny zespołu — para młoda lub goście mogą przejść pod kurtyną iskier lub pozować na jej tle do zdjęć.",
      "Montaż wymaga stabilnej konstrukcji nad wybranym miejscem, którą przygotowujemy indywidualnie na podstawie wymiarów i charakteru sali lub plenerowej lokalizacji.",
    ],
    highlights: [
      "Efekt opadającej kurtyny iskier",
      "Duża rozpiętość — efektowne tło",
      "Idealne na wejście lub scenę",
      "Montaż dopasowany do miejsca",
    ],
    image: PYRO.smoke,
    gallery: [PYRO.fireworks, PYRO.confetti, PYRO.sparklers],
    price: { from: 1300 },
  },
  {
    slug: "pokaz-fajerwerkow",
    category: "pirotechnika",
    emoji: "🎉",
    title: "Pokaz Fajerwerków",
    shortDescription:
      "Indywidualny pokaz fajerwerków — wycena i scenariusz dopasowane do Waszych wymagań.",
    longDescription: [
      "Dla par, które marzą o prawdziwym, rozbudowanym pokazie fajerwerków, przygotowujemy indywidualny scenariusz dopasowany do miejsca, budżetu i oczekiwanego czasu trwania pokazu — od kilkuminutowego akcentu na zakończenie wieczoru, po pełny, kilkunastominutowy spektakl.",
      "Pokaz może zostać zsynchronizowany z muzyką i innymi efektami z naszej oferty — ciężkim dymem, fontannami iskier czy wiatrakami — tworząc spójną, wyreżyserowaną scenę na finał wesela.",
      "Każdy pokaz fajerwerków wyceniamy osobno po rozmowie o Waszych oczekiwaniach oraz oględzinach lub dokładnym opisie i zdjęciach miejsca realizacji, ponieważ zakres i lokalizacja mają kluczowe znaczenie dla bezpieczeństwa i doboru sprzętu. Skontaktuj się z nami, aby otrzymać bezpłatną, indywidualną wycenę.",
    ],
    highlights: [
      "Scenariusz dopasowany indywidualnie",
      "Wycena po konsultacji i analizie miejsca",
      "Możliwość synchronizacji z muzyką",
      "Realizacja przez doświadczony zespół pirotechników",
    ],
    image: PYRO.fireworks,
    gallery: [PYRO.stage, PYRO.confetti, PYRO.sparklers],
    price: { note: "Wycena według wymagań klienta" },
  },
  {
    slug: "fotobudka-klasyczna",
    category: "fotobudki",
    emoji: "📸",
    title: "Fotobudka Klasyczna",
    shortDescription:
      "Nieograniczone zdjęcia, natychmiastowe wydruki i rekwizyty dla gości.",
    longDescription: [
      "Klasyczna fotobudka to sprawdzona atrakcja, która bawi gości od pierwszej do ostatniej minuty wesela. Nielimitowana liczba zdjęć w trakcie całej imprezy oznacza, że nikt nie musi się spieszyć ani czekać w kolejce zbyt długo.",
      "Do fotobudki dostarczamy zestaw zabawnych rekwizytów — okulary, kapelusze, tabliczki z napisami i inne akcesoria, które rozluźniają atmosferę i sprawiają, że nawet najbardziej nieśmiali goście chętnie robią sobie pamiątkowe zdjęcie.",
      "Każde zdjęcie drukowane jest natychmiast na miejscu, dzięki czemu goście wychodzą z wesela z fizyczną pamiątką w kieszeni, a Wy — z pełnym albumem zdjęć w wersji cyfrowej po zakończeniu imprezy. Obsługę fotobudki zapewnia nasz operator, który dba o sprzęt, rekwizyty i pomaga gościom przez cały wieczór.",
    ],
    highlights: [
      "Nielimitowana liczba zdjęć",
      "Natychmiastowe wydruki dla gości",
      "Zestaw zabawnych rekwizytów",
      "Obsługa operatora przez cały wieczór",
    ],
    image: OTHER.toast,
    gallery: [OTHER.crowdLights, OTHER.longTable, OTHER.ballroom],
    price: {
      tiers: [
        { label: "2h", price: 700 },
        { label: "3h", price: 900 },
      ],
    },
  },
  {
    slug: "fotobudka-360",
    category: "fotobudki",
    emoji: "🔄",
    title: "Fotobudka 360",
    shortDescription:
      "Efektowne wideo w slow motion kręcone dookoła gości — hit ostatnich sezonów weselnych.",
    longDescription: [
      "Fotobudka 360 to platforma, na której gość staje na środku, a obracająca się wokół niego kamera rejestruje dynamiczne, efektowne wideo w zwolnionym tempie — zupełnie inne doświadczenie niż klasyczne zdjęcie z fotobudki.",
      "Gotowe nagranie w kilkanaście sekund trafia na telefon gościa, idealne do natychmiastowego udostępnienia w mediach społecznościowych — Instagram Stories, TikTok czy Facebook. To sprawia, że atrakcja sama „rozchodzi się” wśród gości i buduje dodatkową, spontaniczną promocję Waszego wesela.",
      "To jedna z najchętniej wybieranych atrakcji przez młodszych gości i coraz częściej pierwszy wybór par młodych szukających czegoś więcej niż klasyczna fotobudka. Platformę obsługuje nasz operator, który dba o płynność nagrań i pomaga gościom skorzystać z atrakcji przez cały wieczór.",
    ],
    highlights: [
      "Dynamiczne wideo 360° w slow motion",
      "Gotowe do udostępnienia w social mediach",
      "Duże zainteresowanie wśród gości",
      "Obsługa operatora na miejscu",
    ],
    image: OTHER.crowdLights,
    gallery: [OTHER.toast, OTHER.longTable, OTHER.ballroom],
    price: {
      tiers: [
        { label: "2h", price: 700 },
        { label: "3h", price: 900 },
      ],
    },
  },
  {
    slug: "dmuchance",
    category: "dmuchance",
    emoji: "🎪",
    title: "Dmuchańce",
    shortDescription:
      "Atrakcje dla najmłodszych gości — bezpieczna zabawa podczas wesela lub imprezy plenerowej.",
    longDescription: [
      "Dmuchańce to gwarancja dobrej zabawy dla najmłodszych uczestników wesela. Dzięki nim dzieci mają swoją własną strefę rozrywki, dostosowaną do ich wieku i energii, a rodzice mogą spokojnie cieszyć się przyjęciem, nie martwiąc się, że pociechy będą się nudzić.",
      "Dostarczamy, montujemy i zabezpieczamy dmuchaną atrakcję na miejscu — cały proces, od rozładunku po napompowanie i sprawdzenie mocowań, zajmuje naszej ekipie zwykle około pół godziny. Dobieramy model odpowiedni do wielkości dostępnej przestrzeni oraz przewidywanej liczby dzieci na imprezie.",
      "Atrakcja świetnie sprawdza się zarówno na weselach plenerowych, jak i rodzinnych piknikach czy imprezach firmowych z udziałem dzieci. Na życzenie możemy połączyć dmuchaniec z innymi atrakcjami z naszej oferty, tworząc kompleksową strefę rozrywki dla gości w każdym wieku.",
    ],
    highlights: [
      "Bezpieczna strefa zabawy dla dzieci",
      "Montaż i zabezpieczenie na miejscu",
      "Model dopasowany do dostępnej przestrzeni",
      "Rodzice mogą spokojnie bawić się na weselu",
    ],
    image: OTHER.kidsPlaying,
    gallery: [OTHER.balloons, OTHER.toast, OTHER.crowdLights],
    price: { note: "Wycena indywidualna" },
  },
  {
    slug: "dj",
    category: "inne",
    emoji: "🎧",
    title: "DJ",
    shortDescription:
      "Doświadczony DJ, który poprowadzi zabawę od pierwszego tańca po ostatnią piosenkę.",
    longDescription: [
      "Organizujemy oprawę muzyczną Waszego wesela — od pierwszego tańca, przez integrację gości i tradycyjne elementy wieczoru, po najlepszą zabawę do białego rana. Repertuar dopasowujemy do Waszych gustów, wieku gości i charakteru imprezy, łącząc klasyki weselne z aktualnymi hitami.",
      "Nasz DJ współpracuje na bieżąco z zespołem obsługującym efekty pirotechniczne i światło, dzięki czemu kluczowe momenty wieczoru — pierwszy taniec, wjazd pary młodej, północ — mogą być zsynchronizowane z muzyką i efektami specjalnymi w jedną spójną scenę.",
      "Skontaktuj się z nami, aby ustalić szczegóły, wstępną playlistę, ewentualne utwory „zakazane” oraz sprawdzić dostępność terminu — chętnie doradzimy też, jak ułożyć przebieg wieczoru, bazując na doświadczeniu z setek zrealizowanych wesel.",
    ],
    highlights: [
      "Muzyka dopasowana do charakteru wesela",
      "Konferansjerka i prowadzenie zabawy",
      "Profesjonalny sprzęt nagłośnieniowy",
      "Współpraca z efektami pirotechnicznymi i światłem",
    ],
    image: OTHER.djHeadphones,
    gallery: [OTHER.djTurntable, PYRO.stage, OTHER.crowdLights],
    price: { note: "Wycena indywidualna" },
  },
  {
    slug: "fotograf",
    category: "inne",
    emoji: "📷",
    title: "Fotograf",
    shortDescription:
      "Profesjonalna fotografia ślubna — uwiecznimy każdy ważny moment Waszego dnia.",
    longDescription: [
      "Organizujemy też profesjonalną oprawę fotograficzną wesela — od przygotowań panny młodej i pana młodego, przez ceremonię i sesję plenerową, po zabawę na sali do późnych godzin wieczoru.",
      "Nasi fotografowie na bieżąco współpracują z zespołem pirotechnicznym i znają charakterystykę naszych efektów — wiedzą, z jakiej odległości i przy jakich ustawieniach aparatu najlepiej uchwycić ciężki dym, fontanny iskier czy pokaz fajerwerków, dzięki czemu te momenty wyglądają na zdjęciach naprawdę spektakularnie.",
      "Skontaktuj się z nami, aby poznać dostępne pakiety, czas realizacji zdjęć oraz sprawdzić dostępność terminu — możemy też zaproponować gotowy, sprawdzony harmonogram dnia ślubu, dopasowany pod kątem światła i najważniejszych ujęć.",
    ],
    highlights: [
      "Pełna relacja z przygotowań i uroczystości",
      "Doświadczenie w fotografowaniu efektów specjalnych",
      "Pakiety dopasowane do potrzeb pary młodej",
      "Możliwość połączenia z innymi atrakcjami",
    ],
    image: OTHER.camera,
    gallery: [OTHER.ringsBouquet, OTHER.gazebo, OTHER.beachTable],
    price: { note: "Wycena indywidualna" },
  },
  {
    slug: "dekoracje",
    category: "inne",
    emoji: "🎀",
    title: "Dekoracje",
    shortDescription:
      "Kompleksowa dekoracja sali, ceremonii i strefy plenerowej w wybranej przez Was kolorystyce.",
    longDescription: [
      "Zajmujemy się też dekoracją Waszego wesela — od stołu prezydialnego i stołów gościnnych, przez salę i strefę ceremonii, po elementy plenerowe takie jak łuki kwiatowe, girlandy balonowe czy oświetlenie dekoracyjne.",
      "Dobieramy dekoracje tak, by komponowały się z efektami pirotechnicznymi i pozostałymi atrakcjami — jeśli planujecie np. fontanny iskier czy wachlarz przy stole prezydialnym, uwzględnimy to już na etapie projektowania dekoracji, zachowując odpowiednie odległości i spójną stylistykę.",
      "Skontaktuj się z nami, aby omówić stylistykę, kolorystykę i zakres dekoracji — na tej podstawie przygotujemy indywidualną wycenę oraz propozycję wizualną dopasowaną do charakteru Waszego wesela.",
    ],
    highlights: [
      "Dekoracja sali, ceremonii i strefy plenerowej",
      "Kolorystyka dopasowana do Waszego motywu",
      "Spójna oprawa z atrakcjami i efektami",
      "Indywidualna wycena po konsultacji",
    ],
    image: OTHER.beachTable,
    gallery: [OTHER.longTable, OTHER.ballroom, OTHER.balloons],
    price: { note: "Wycena indywidualna" },
  },
  {
    slug: "jbl-partybox-720",
    category: "wynajem",
    emoji: "🔊",
    title: "Wynajem Głośnika JBL PartyBox 720",
    shortDescription:
      "Potężny głośnik imprezowy z efektami świetlnymi — do wynajęcia na wesele lub prywatną imprezę.",
    longDescription: [
      "JBL PartyBox 720 to mocny, przenośny głośnik imprezowy z wbudowanymi efektami świetlnymi, idealny jako dodatkowe nagłośnienie na wesele, plener czy after party — sprawdzi się zarówno jako główne źródło muzyki na mniejszej imprezie, jak i uzupełnienie nagłośnienia sali.",
      "Głośnik obsługuje odtwarzanie przez Bluetooth, dzięki czemu muzykę można puszczać bezpośrednio z telefonu — bez dodatkowego sprzętu czy kabli. Świetnie sprawdza się też na plenerowej części wesela, przy ognisku czy w strefie chillout.",
      "Wynajem rozliczamy za dobę — odbiór i zwrot ustalamy indywidualnie, w razie potrzeby możemy też dostarczyć sprzęt na miejsce imprezy.",
    ],
    highlights: [
      "Potężne brzmienie i wbudowane efekty świetlne",
      "Odtwarzanie muzyki przez Bluetooth",
      "Idealny na plener, after party i strefę chillout",
      "Wynajem rozliczany za dobę",
    ],
    image: OTHER.djHeadphones,
    gallery: [OTHER.djTurntable, OTHER.crowdLights, PYRO.stage],
    price: { from: 200, note: "za dobę" },
  },
];

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
