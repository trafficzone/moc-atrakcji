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
  {
    slug: "dekoracje-weselne-jak-dobrac-styl-i-kolorystyke",
    title: "Dekoracje weselne — jak dobrać styl i kolorystykę sali",
    excerpt:
      "Od stołu prezydialnego po strefę plenerową — podpowiadamy, jak zaplanować spójne dekoracje wesela i dopasować je do efektów specjalnych.",
    date: "2026-03-16",
    readTime: "6 min czytania",
    image:
      "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        paragraphs: [
          "Dekoracje to element, który najbardziej wpływa na to, jak goście zapamiętają charakter Waszego wesela — jeszcze zanim zabrzmi pierwsza piosenka czy odpali się pierwsza fontanna iskier. W tym artykule podpowiadamy, jak krok po kroku zaplanować spójną stylistykę sali i strefy plenerowej.",
        ],
      },
      {
        heading: "Od czego zacząć planowanie dekoracji?",
        paragraphs: [
          "Najlepiej zacząć od wyboru 2–3 kolorów przewodnich, które będą się powtarzać w dekoracji stołów, kwiatach, a nawet w kolorystyce efektów pirotechnicznych. Dzięki temu cała oprawa wizualna — od zaproszeń po fontanny iskier — tworzy spójną całość, a nie zbiór przypadkowych elementów.",
          "Warto też zdecydować wcześnie, czy stawiacie na styl klasyczny, boho, rustykalny czy nowoczesny minimalizm — to ułatwia dobór zarówno kwiatów i tkanin, jak i dodatkowych atrakcji.",
        ],
      },
      {
        heading: "Stół prezydialny i strefa ceremonii",
        paragraphs: [
          "Stół prezydialny i miejsce ceremonii to punkty, na które goście patrzą najczęściej i najdłużej — warto zainwestować w nie najwięcej uwagi. Popularne rozwiązania to łuki kwiatowe, girlandy zieleni czy delikatne oświetlenie punktowe, które dobrze wygląda zarówno w świetle dziennym, jak i wieczorem.",
        ],
      },
      {
        heading: "Jak połączyć dekoracje z efektami specjalnymi?",
        paragraphs: [
          "Jeśli planujecie fontanny iskier, wachlarz czy ciężki dym przy stole prezydialnym lub scenie, warto uwzględnić to już na etapie projektowania dekoracji — zachowując odpowiednie odległości od elementów łatwopalnych i tak dobierając materiały, by komponowały się z pirotechniką, a nie z nią kolidowały.",
          "Zajmujemy się kompleksową dekoracją wesela i chętnie zaproponujemy stylistykę dopasowaną do wybranych przez Was efektów — wystarczy się z nami skontaktować.",
        ],
      },
    ],
    relatedOfferSlugs: ["dekoracje", "fontanny-iskier", "ciezki-dym"],
  },
  {
    slug: "jak-wybrac-dj-a-na-wesele",
    title: "Jak wybrać DJ-a na wesele? 7 pytań, które warto zadać",
    excerpt:
      "Repertuar, sprzęt, konferansjerka — sprawdź, o co zapytać DJ-a przed podpisaniem umowy, żeby zabawa trwała do białego rana.",
    date: "2026-03-25",
    readTime: "6 min czytania",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        paragraphs: [
          "DJ to jedna z tych decyzji weselnych, które mają największy wpływ na atmosferę całego wieczoru. Dobry wykonawca wyczuje energię sali i poprowadzi zabawę tak, by parkiet nie pustoszał — słaby dobór muzyki potrafi zepsuć nawet najlepiej zaplanowane przyjęcie. Oto pytania, które warto zadać przed rezerwacją.",
        ],
      },
      {
        heading: "1. Jak wygląda repertuar i czy można go dopasować?",
        paragraphs: [
          "Poproście o przykładową playlistę z ostatnich wesel i zapytajcie, czy DJ jest w stanie dostosować repertuar do Waszych gustów oraz wieku gości — dobry wykonawca płynnie łączy klasyki weselne z aktualnymi hitami, czytając na bieżąco reakcje parkietu.",
        ],
      },
      {
        heading: "2. Czy DJ prowadzi też konferansjerkę?",
        paragraphs: [
          "Część DJ-ów ogranicza się do samej muzyki, inni prowadzą też zabawy integracyjne i zapowiadają kolejne punkty programu. Warto ustalić to wcześniej, żeby uniknąć sytuacji, w której nikt nie prowadzi wieczoru między pierwszym tańcem a tortem.",
        ],
      },
      {
        heading: "3. Jaki sprzęt zapewnia i czy zna salę?",
        paragraphs: [
          "Zapytajcie o nagłośnienie, oświetlenie oraz to, czy DJ miał już wcześniej okazję grać w wybranej przez Was sali — znajomość akustyki i wielkości parkietu pozwala lepiej dobrać moc sprzętu i uniknąć problemów technicznych w dniu wesela.",
        ],
      },
      {
        heading: "Współpraca z efektami specjalnymi",
        paragraphs: [
          "Nasz DJ na bieżąco współpracuje z zespołem obsługującym efekty pirotechniczne, dzięki czemu kluczowe momenty wieczoru — pierwszy taniec, wjazd pary młodej, północ — mogą być zsynchronizowane z muzyką i pokazem iskier w jedną spójną scenę. Skontaktuj się z nami, aby ustalić szczegóły i sprawdzić dostępność terminu.",
        ],
      },
    ],
    relatedOfferSlugs: ["dj", "ciezki-dym", "fontanny-iskier"],
  },
  {
    slug: "dmuchance-na-wesele-czy-warto",
    title: "Dmuchańce na wesele — czy warto i jak to zorganizować",
    excerpt:
      "Strefa zabaw dla najmłodszych gości weselnych — sprawdź, kiedy warto zamówić dmuchaniec i na co zwrócić uwagę przy jego ustawieniu.",
    date: "2026-04-03",
    readTime: "5 min czytania",
    image:
      "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        paragraphs: [
          "Jeśli wśród Waszych gości będzie sporo dzieci, dmuchaniec to jedna z tych atrakcji, które realnie odciążają rodziców i pozwalają im spokojnie cieszyć się przyjęciem. W tym artykule podpowiadamy, kiedy warto ją zamówić i jak dobrze zaplanować jej ustawienie.",
        ],
      },
      {
        heading: "Dla kogo sprawdza się ta atrakcja?",
        paragraphs: [
          "Dmuchaniec najlepiej sprawdza się na weselach plenerowych, gdzie jest dość miejsca na osobną strefę zabaw, oraz na przyjęciach z dużą liczbą dzieci w różnym wieku. Dzięki własnej strefie rozrywki maluchy nie nudzą się podczas dłuższych części oficjalnych, a rodzice mogą spokojnie usiąść przy stole.",
        ],
      },
      {
        heading: "Gdzie i jak ustawić dmuchaniec?",
        paragraphs: [
          "Najlepiej sprawdza się miejsce w pobliżu sali, ale na tyle oddalone, by dźwięk zabawy nie zakłócał części oficjalnej ani wystąpień. Dostarczamy, montujemy i zabezpieczamy atrakcję na miejscu — cały proces, od rozładunku po napompowanie i sprawdzenie mocowań, zajmuje naszej ekipie zwykle około pół godziny.",
          "Model dobieramy do wielkości dostępnej przestrzeni oraz przewidywanej liczby dzieci — warto podać nam tę informację już na etapie zapytania o wycenę.",
        ],
      },
      {
        heading: "Czy warto połączyć dmuchaniec z innymi atrakcjami?",
        paragraphs: [
          "Tak — na życzenie łączymy dmuchaniec z innymi atrakcjami z naszej oferty, na przykład fotobudką, tworząc kompleksową strefę rozrywki dla gości w każdym wieku. To rozwiązanie szczególnie doceniają rodziny z dziećmi, które w innym wypadku mogłyby się nudzić na dłuższym przyjęciu.",
        ],
      },
    ],
    relatedOfferSlugs: ["dmuchance", "fotobudka-klasyczna", "fotobudka-360"],
  },
  {
    slug: "wiatraki-iskier-czy-wachlarz-czym-sie-roznia",
    title: "Wiatraki iskier czy wachlarz? Czym różnią się te efekty pirotechniczne",
    excerpt:
      "Wirujące koło czy szeroki snop iskier — porównujemy dwa efektowne, ale zupełnie inne w charakterze pokazy pirotechniczne na wesele.",
    date: "2026-04-12",
    readTime: "6 min czytania",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        paragraphs: [
          "Wiatraki iskier i wachlarz to dwa efekty, które często mylone są ze sobą przez pary planujące wesele — oba są widowiskowe, oba dobrze wyglądają jako oprawa sceny, ale różnią się charakterem ruchu i tym, do jakiego momentu wieczoru najlepiej pasują.",
        ],
      },
      {
        heading: "Wiatraki iskier — dynamiczny, wirujący ruch",
        paragraphs: [
          "Wiatraki iskier to obracające się koła pirotechniczne, które tworzą efekt hipnotyzującego, świetlistego kręgu. Ich charakterystyczny, dynamiczny ruch świetnie sprawdza się jako element dekoracyjny przy wejściu na salę lub w bramie powitalnej gości — przyciąga wzrok i dobrze wygląda na filmie.",
        ],
      },
      {
        heading: "Wachlarz — szeroki, statyczny snop iskier",
        paragraphs: [
          "Wachlarz tworzy szeroką, symetryczną smugę iskier rozchodzącą się na boki — w przeciwieństwie do wiatraków efekt „otwiera się” poziomo i pozostaje statyczny, tworząc widowiskowe tło o dużej rozpiętości. To rozwiązanie polecamy jako scenografię dla pary młodej, zespołu muzycznego lub stanowiska DJ-a.",
        ],
      },
      {
        heading: "Które wybrać na swoje wesele?",
        paragraphs: [
          "Jeśli zależy Wam na efekcie ruchu i chcecie urozmaicić dłuższy pokaz — sprawdzą się wiatraki iskier. Jeśli szukacie szerokiego, efektownego tła do zdjęć i wideo, np. za stołem prezydialnym — lepszym wyborem będzie wachlarz, ewentualnie jego rozbudowana wersja z dodatkowymi gwiazdami na niebie.",
          "Oba efekty świetnie się też uzupełniają — wiele par decyduje się na połączenie ich w jednym, rozbudowanym pokazie pirotechnicznym.",
        ],
      },
    ],
    relatedOfferSlugs: ["wiatraki-iskier", "wystrzal-wachlarz", "wystrzal-wachlarz-gwiazdy"],
  },
  {
    slug: "fotograf-na-wesele-jak-wybrac",
    title: "Fotograf na wesele — jak wybrać i na co zwrócić uwagę",
    excerpt:
      "Portfolio, styl reportażu i doświadczenie z efektami specjalnymi — sprawdź, jak dobrze wybrać fotografa na najważniejszy dzień roku.",
    date: "2026-04-21",
    readTime: "7 min czytania",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80",
    sections: [
      {
        paragraphs: [
          "Zdjęcia to jedyna rzecz z wesela, która zostaje z Wami na zawsze — dlatego wybór fotografa warto przemyśleć równie dokładnie, jak wybór sali czy sukni ślubnej. W tym artykule podpowiadamy, na co zwrócić uwagę, przeglądając portfolio i rozmawiając z potencjalnymi wykonawcami.",
        ],
      },
      {
        heading: "Portfolio i spójność stylu",
        paragraphs: [
          "Poproście o pełny reportaż z jednego wesela, a nie tylko wybrane, najlepsze ujęcia z wielu realizacji — to najlepszy sposób, by ocenić, czy styl fotografa (jasny i naturalny, klasyczny czy mocno reżyserowany) pasuje do Waszych oczekiwań i czy potrafi konsekwentnie utrzymać jakość przez cały dzień.",
        ],
      },
      {
        heading: "Doświadczenie z efektami specjalnymi",
        paragraphs: [
          "Jeśli planujecie ciężki dym, fontanny iskier czy pokaz fajerwerków, warto zapytać fotografa, czy ma doświadczenie w fotografowaniu tego typu efektów. Znajomość odpowiednich ustawień aparatu i dystansu do sceny sprawia, że te momenty wychodzą na zdjęciach naprawdę spektakularnie, zamiast wyjść przepalone lub rozmyte.",
          "Nasi fotografowie na bieżąco współpracują z zespołem pirotechnicznym i dokładnie wiedzą, czego się spodziewać w każdym z naszych efektów — dzięki temu możemy zaproponować gotowy, sprawdzony harmonogram dnia pod kątem najlepszych ujęć.",
        ],
      },
      {
        heading: "Umowa, pakiety i czas realizacji",
        paragraphs: [
          "Przed podpisaniem umowy ustalcie liczbę godzin pracy fotografa, czas oczekiwania na gotowe zdjęcia oraz to, czy w cenie zawarty jest album lub nośnik ze zdjęciami w wersji cyfrowej. Skontaktuj się z nami, aby poznać dostępne pakiety i sprawdzić dostępność terminu.",
        ],
      },
    ],
    relatedOfferSlugs: ["fotograf", "pokaz-fajerwerkow", "ciezki-dym"],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
