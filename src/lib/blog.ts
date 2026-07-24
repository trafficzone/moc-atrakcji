export type BlogSection = {
  heading?: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  sections: BlogSection[];
  relatedOfferSlugs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ile-kosztuje-ciezki-dym-na-wesele",
    title: "Ile kosztuje ciężki dym na wesele? Kompletny poradnik",
    excerpt:
      "Sprawdź, od czego zależy cena ciężkiego dymu na wesele, jak wygląda ten efekt w praktyce i dlaczego warto zamówić go u sprawdzonej ekipy.",
    date: "2026-01-12",
    readTime: "6 min czytania",
    image:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        paragraphs: [
          "Ciężki dym to jeden z najczęściej wyszukiwanych efektów specjalnych na wesele — i nic dziwnego, bo pierwszy taniec „w chmurach” wygląda spektakularnie zarówno na żywo, jak i na zdjęciach czy filmie. W tym artykule wyjaśniamy, od czego zależy cena tego efektu i na co zwrócić uwagę, wybierając wykonawcę.",
        ],
      },
      {
        heading: "Czym właściwie jest ciężki dym?",
        paragraphs: [
          "W przeciwieństwie do dymu ze zwykłej wytwornicy, ciężki dym opada w dół i ściele się nisko nad podłogą, tworząc gęstą chmurę, w której „tańczy” para młoda. Efekt uzyskuje się za pomocą specjalistycznej maszyny na bazie suchego lodu lub glikolu spożywczego — w obu wariantach dym jest zimny, bezpieczny i nie pozostawia zapachu ani śladów na ubraniach czy sukni ślubnej.",
        ],
      },
      {
        heading: "Od czego zależy cena ciężkiego dymu na wesele?",
        paragraphs: [
          "Koszt usługi zależy przede wszystkim od kilku czynników: wielkości sali (a więc ilości potrzebnego dymu), odległości dojazdu ekipy, czasu trwania efektu oraz tego, czy zamawiacie go samodzielnie, czy w pakiecie z innymi atrakcjami, np. fontannami iskier do ręki lub wiatrakami iskier.",
          "Zamawianie kilku efektów naraz u jednego wykonawcy zwykle wychodzi taniej niż zlecanie ich osobno różnym firmom — ekipa przyjeżdża raz, ustawia cały sprzęt jednocześnie i obsługuje wszystko w ramach jednego wyjazdu.",
        ],
      },
      {
        heading: "Na co zwrócić uwagę, wybierając wykonawcę?",
        paragraphs: [
          "Warto zapytać, czy firma używa certyfikowanego sprzętu, czy ekipa jest obecna na miejscu przez cały pokaz oraz czy dym jest bezpieczny dla gości z problemami z drogami oddechowymi. Rzetelny wykonawca powinien też zapytać o wielkość sali i wysokość sufitów — to wpływa na dobór odpowiedniej maszyny.",
          "Jeśli planujecie wesele na Pomorzu i zastanawiacie się nad ciężkim dymem na pierwszy taniec, chętnie doradzimy i przygotujemy bezpłatną wycenę dopasowaną do Waszej sali.",
        ],
      },
    ],
    relatedOfferSlugs: ["ciezki-dym", "fontanny-iskier-do-reki", "wiatraki-iskier"],
  },
  {
    slug: "fontanny-iskier-czy-fajerwerki-co-wybrac-na-wesele",
    title: "Fontanny iskier czy fajerwerki? Co wybrać na wesele",
    excerpt:
      "Zimne ognie czy klasyczne fajerwerki — porównujemy oba rozwiązania pod kątem bezpieczeństwa, miejsca realizacji i efektu wizualnego.",
    date: "2026-01-20",
    readTime: "7 min czytania",
    image:
      "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        paragraphs: [
          "Para młoda planująca efekty pirotechniczne na wesele często staje przed wyborem: fontanny iskier (tzw. zimne ognie) czy klasyczny pokaz fajerwerków? Oba rozwiązania robią wrażenie, ale różnią się bezpieczeństwem, wymaganiami co do miejsca i skalą efektu.",
        ],
      },
      {
        heading: "Fontanny iskier — bezpieczeństwo i uniwersalność",
        paragraphs: [
          "Fontanny iskier, znane też jako zimne ognie elektryczne, to strzelające w górę snopy iskier o niskiej temperaturze, uruchamiane elektronicznie — bez otwartego ognia i dymu prochowego. Dzięki temu można je bezpiecznie wykorzystać zarówno w plenerze, jak i w salach zamkniętych, co czyni je najbardziej uniwersalnym wyborem spośród efektów pirotechnicznych.",
          "To rozwiązanie sprawdza się świetnie przy wejściu pary młodej na salę, pierwszym tańcu czy przecięciu tortu — moment trwa krótko, ale efekt na zdjęciach i wideo jest bardzo mocny.",
        ],
      },
      {
        heading: "Klasyczne fajerwerki — większa skala, więcej wymagań",
        paragraphs: [
          "Pokaz fajerwerków to zupełnie inna skala wrażeń — głośny, widowiskowy spektakl widoczny z daleka, idealny na zwieńczenie wieczoru pod otwartym niebem. Wymaga jednak odpowiedniej przestrzeni, zachowania stref bezpieczeństwa i zazwyczaj zgłoszenia w lokalnych służbach, w zależności od skali pokazu.",
          "Ze względu na te wymagania każdy pokaz fajerwerków wyceniamy i planujemy indywidualnie, po rozmowie o lokalizacji i oczekiwaniach pary młodej.",
        ],
      },
      {
        heading: "Które rozwiązanie wybrać?",
        paragraphs: [
          "Jeśli wesele odbywa się w sali bez dostępu do dużej przestrzeni zewnętrznej, naturalnym wyborem są fontanny iskier lub wachlarze. Jeśli macie do dyspozycji duży plener i chcecie mocnego, zapadającego w pamięć finału wieczoru — warto rozważyć pełny pokaz fajerwerków.",
          "Wiele par decyduje się na połączenie obu efektów: fontanny iskier na wejście i pierwszy taniec, a fajerwerki jako zwieńczenie imprezy.",
        ],
      },
    ],
    relatedOfferSlugs: ["fontanny-iskier", "pokaz-fajerwerkow", "wystrzal-wachlarz-gwiazdy"],
  },
  {
    slug: "fotobudka-na-wesele-dlaczego-warto",
    title: "Fotobudka na wesele — dlaczego warto i jak wybrać najlepszą",
    excerpt:
      "Fotobudka klasyczna czy 360? Podpowiadamy, na co zwrócić uwagę, planując tę atrakcję, i dlaczego goście tak bardzo ją lubią.",
    date: "2026-02-02",
    readTime: "5 min czytania",
    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        paragraphs: [
          "Fotobudka od lat pozostaje jedną z najchętniej wybieranych atrakcji weselnych — i to nie bez powodu. To prosta, sprawdzona forma rozrywki, która angażuje gości w każdym wieku, od najmłodszych po najstarszych uczestników przyjęcia.",
        ],
      },
      {
        heading: "Fotobudka klasyczna — sprawdzona klasyka",
        paragraphs: [
          "Klasyczna fotobudka z natychmiastowym wydrukiem to gwarancja pamiątki, którą goście zabierają ze sobą tego samego wieczoru. W połączeniu z zestawem zabawnych rekwizytów — okularami, kapeluszami, tabliczkami z napisami — sprawia, że nawet najbardziej nieśmiali goście chętnie robią sobie zdjęcie.",
        ],
      },
      {
        heading: "Fotobudka 360 — nowość, która podbija wesela",
        paragraphs: [
          "Fotobudka 360, na której gość staje na platformie, a kamera nagrywa dynamiczne wideo w zwolnionym tempie dookoła niego, to atrakcja ostatnich sezonów. Gotowe nagranie trafia na telefon gościa w kilkanaście sekund — idealne do udostępnienia w mediach społecznościowych, co dodatkowo promuje Wasze wesele wśród znajomych gości.",
        ],
      },
      {
        heading: "Jak wybrać najlepszą opcję dla siebie?",
        paragraphs: [
          "Jeśli zależy Wam na klasycznej, namacalnej pamiątce w postaci wydrukowanego zdjęcia — postawcie na fotobudkę klasyczną. Jeśli chcecie czegoś bardziej dynamicznego i „instagramowego” — fotobudka 360 sprawdzi się lepiej. Wiele par decyduje się na obie atrakcje jednocześnie, dając gościom pełny wybór.",
        ],
      },
    ],
    relatedOfferSlugs: ["fotobudka-klasyczna", "fotobudka-360"],
  },
  {
    slug: "atrakcje-na-wesele-w-trojmiescie-przewodnik",
    title: "Atrakcje na wesele w Trójmieście — pełny przewodnik",
    excerpt:
      "Gdańsk, Gdynia, Sopot i okolice — jakie atrakcje najlepiej sprawdzają się na weselach w Trójmieście i jak dobrze zaplanować ich kolejność.",
    date: "2026-02-14",
    readTime: "8 min czytania",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        paragraphs: [
          "Trójmiasto to jeden z najpopularniejszych regionów Polski pod względem organizacji wesel — bliskość morza, urokliwe sale weselne i duży wybór lokalizacji plenerowych sprawiają, że pary młode z całego kraju decydują się właśnie tutaj powiedzieć sobie „tak”. W tym przewodniku podpowiadamy, jakie atrakcje najlepiej sprawdzają się na weselach w Gdańsku, Gdyni, Sopocie i okolicznych powiatach.",
        ],
      },
      {
        heading: "Wesela plenerowe a efekty pirotechniczne",
        paragraphs: [
          "Jeśli Wasze wesele odbywa się w plenerze — np. w ogrodzie, nad wodą lub w gospodarstwie agroturystycznym pod Trójmiastem — macie znacznie większą swobodę w doborze efektów pirotechnicznych. Fontanny stojące 5m, wachlarze z gwiazdami na niebie czy pełny pokaz fajerwerków wymagają odpowiedniej przestrzeni, którą plenerowe lokalizacje zwykle zapewniają.",
          "W przypadku sal zamkniętych w centrum miasta lepiej sprawdzają się bardziej kameralne efekty — fontanny iskier do ręki, wiatraki iskier czy ciężki dym na pierwszy taniec.",
        ],
      },
      {
        heading: "Kolejność atrakcji w ciągu wieczoru",
        paragraphs: [
          "Dobrze zaplanowany harmonogram wesela to podstawa udanej imprezy. Zazwyczaj efekty pirotechniczne pojawiają się przy wejściu pary młodej na salę oraz podczas pierwszego tańca, fotobudka działa przez cały wieczór, a pokaz fajerwerków — jeśli go planujecie — najlepiej sprawdza się jako zwieńczenie części oficjalnej, tuż przed dobrą zabawą do białego rana.",
          "Dmuchańce i atrakcje dla dzieci warto ustawić w osobnej strefie, dostępnej od popołudnia — szczególnie na weselach plenerowych z udziałem rodzin z dziećmi.",
        ],
      },
      {
        heading: "Dojazd i logistyka na terenie Trójmiasta",
        paragraphs: [
          "Obsługujemy wesela na terenie całego Pomorza — Gdańska, Gdyni, Sopotu, Trójmiasta i okolicznych powiatów. Przyjeżdżamy, ustawiamy sprzęt i obsługujemy każdą atrakcję na miejscu, więc nie musicie martwić się o logistykę ani transport.",
        ],
      },
    ],
    relatedOfferSlugs: ["pokaz-fajerwerkow", "fontanna-stojaca-5m", "dmuchance"],
  },
  {
    slug: "kiedy-zaplanowac-pokaz-fajerwerkow-na-weselu",
    title: "Kiedy zaplanować pokaz fajerwerków na weselu? Praktyczny poradnik",
    excerpt:
      "Jak wpasować pokaz fajerwerków w harmonogram wesela, ile trwa i o czym warto pamiętać, planując go razem z DJ-em i fotografem.",
    date: "2026-02-25",
    readTime: "6 min czytania",
    image:
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        paragraphs: [
          "Pokaz fajerwerków to jeden z najbardziej zapadających w pamięć momentów wesela — pod warunkiem, że zostanie dobrze zaplanowany w harmonogramie wieczoru. W tym artykule podpowiadamy, kiedy najlepiej go zorganizować i jak skoordynować go z innymi punktami programu.",
        ],
      },
      {
        heading: "Najpopularniejsze momenty na pokaz fajerwerków",
        paragraphs: [
          "Najczęściej wybieranym momentem jest przejście w północ lub zakończenie części oficjalnej wieczoru — to naturalny punkt kulminacyjny, po którym goście przechodzą do dalszej zabawy. Coraz więcej par decyduje się też na krótszy akcent pirotechniczny tuż po zachodzie słońca, kiedy niebo jest już wystarczająco ciemne, by efekt był w pełni widoczny, a goście wciąż są w pełni sił do dalszego świętowania.",
        ],
      },
      {
        heading: "Współpraca z DJ-em i fotografem",
        paragraphs: [
          "Pokaz fajerwerków najlepiej wypada, gdy jest zsynchronizowany z muzyką i skoordynowany z fotografem, który wie, z jakiej odległości i przy jakich ustawieniach aparatu najlepiej uchwycić ten moment. Warto ustalić dokładny scenariusz z wyprzedzeniem — kto daje sygnał do rozpoczęcia pokazu, jak długo ma trwać i co dzieje się bezpośrednio po nim.",
        ],
      },
      {
        heading: "Ile trwa pokaz fajerwerków?",
        paragraphs: [
          "Czas trwania zależy od wybranego wariantu — od kilkuminutowego akcentu na zakończenie wieczoru, po pełny, kilkunastominutowy spektakl. Każdy pokaz wyceniamy i planujemy indywidualnie, biorąc pod uwagę miejsce realizacji, budżet i oczekiwany czas trwania.",
        ],
      },
    ],
    relatedOfferSlugs: ["pokaz-fajerwerkow", "kolorowe-wystrzaly", "dj"],
  },
  {
    slug: "jak-bezpiecznie-zorganizowac-zimne-ognie-na-weselu",
    title: "Jak bezpiecznie zorganizować zimne ognie na weselu",
    excerpt:
      "Zasady bezpieczeństwa, certyfikowany sprzęt i profesjonalna obsługa — o czym warto pamiętać, planując zimne ognie na wesele.",
    date: "2026-03-05",
    readTime: "5 min czytania",
    image:
      "https://images.unsplash.com/photo-1481162854517-d9e353af153d?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        paragraphs: [
          "Zimne ognie, mimo swojej nazwy sugerującej pełne bezpieczeństwo, to wciąż efekt pirotechniczny, który — źle zaplanowany — może stanowić zagrożenie. W tym artykule wyjaśniamy, na co zwrócić uwagę, by pokaz zimnych ogni na Waszym weselu był efektowny i w pełni bezpieczny dla gości.",
        ],
      },
      {
        heading: "Certyfikowany sprzęt to podstawa",
        paragraphs: [
          "Przed zamówieniem usługi warto zapytać wykonawcę, czy używany sprzęt posiada odpowiednie certyfikaty i jest regularnie serwisowany. Profesjonalne fontanny iskier są zaprojektowane tak, by emitować chłodne iskry, które nie zapalają tkanin ani włosów, ale wciąż wymagają zachowania minimalnych, bezpiecznych odległości od gości.",
        ],
      },
      {
        heading: "Obecność doświadczonej ekipy",
        paragraphs: [
          "Zimne ognie zawsze powinny być odpalane przez doświadczoną, przeszkoloną osobę, obecną na miejscu przez cały czas trwania efektu — nigdy przez przypadkowego gościa czy członka rodziny. Profesjonalna ekipa wie, jak dobrać odpowiedni rozmiar i rodzaj efektu do konkretnej sali czy przestrzeni plenerowej.",
        ],
      },
      {
        heading: "Zgoda właściciela sali weselnej",
        paragraphs: [
          "Przed zamówieniem efektów pirotechnicznych zawsze warto potwierdzić z właścicielem sali, czy dopuszcza tego typu atrakcje — większość nowoczesnych sal akceptuje zimne ognie ze względu na ich bezpieczeństwo, ale dobrą praktyką jest wcześniejsze ustalenie szczegółów.",
          "Jeśli macie pytania dotyczące bezpieczeństwa konkretnego efektu, chętnie doradzimy podczas bezpłatnej konsultacji przed weselem.",
        ],
      },
    ],
    relatedOfferSlugs: ["fontanny-iskier-do-reki", "fontanny-iskier", "fontanna-stojaca-2m"],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
