# Panel admina — worker (backend + panel w jednym)

Ten folder to osobny, mały serwer (Cloudflare Worker). Robi dwie rzeczy:

1. **Serwuje sam panel** (stronę logowania i edycji ofert) pod swoim
   własnym adresem `*.workers.dev` — panel **celowo nie jest częścią**
   głównego repo strony (`src/app/...`). Repo `trafficzone/moc-atrakcji`
   jest **publiczne**, więc każda "ukryta" ścieżka umieszczona tam byłaby
   natychmiast widoczna dla każdego przeglądającego kod na GitHubie —
   losowa nazwa folderu nic by nie dała. Adres workera (`https://moc-atrakcji-admin.<twoja-subdomena>.workers.dev`)
   zależy od nazwy subdomeny Twojego konta Cloudflare, która nigdzie w
   repo nie jest zapisana.
2. **Trzyma sekrety** — hasło admina i token GitHuba z prawem zapisu.
   Panel (przeglądarka) nigdy ich nie widzi; to jedyne miejsce, które je zna.

Trzeba to wdrożyć **raz**, ręcznie, z własnego konta Cloudflare (darmowy
plan w zupełności wystarczy). Poniżej krok po kroku.

## 1. Zainstaluj zależności

```bash
cd admin-worker
npm install
```

## 2. Zaloguj się do Cloudflare

```bash
npx wrangler login
```

Otworzy się przeglądarka — zaloguj się / załóż darmowe konto Cloudflare.

## 3. Utwórz token GitHuba (tylko dla tego repo)

1. Wejdź na GitHub → **Settings → Developer settings → Personal access tokens
   → Fine-grained tokens → Generate new token**.
2. **Repository access**: wybierz tylko `trafficzone/moc-atrakcji`.
3. **Permissions**: `Contents` → **Read and write**. Nic więcej nie zaznaczaj.
4. Wygeneruj i skopiuj token (zaczyna się od `github_pat_...`).

To ważne — token musi być ograniczony tylko do tego repo. Nie używaj tu
swojego głównego, ogólnego tokena GitHuba.

## 4. Ustaw sekrety workera

```bash
npm run secret:admin-username
# wpisz login do panelu admina

npm run secret:admin-password
# wpisz hasło do panelu admina (dla Ciebie/osoby edytującej oferty)

npm run secret:session-secret
# wpisz dowolny losowy, długi ciąg znaków (np. wygenerowany menadżerem haseł)

npm run secret:github-token
# wklej token z kroku 3
```

## 5. Wdróż workera

```bash
npm run deploy
```

Na koniec wrangler wypisze adres URL workera, coś w stylu:

```
https://moc-atrakcji-admin.<twoja-subdomena>.workers.dev
```

**To jest adres panelu admina.** Wejdź na niego bezpośrednio w przeglądarce
— zobaczysz ekran logowania. Zapisz go sobie w menadżerze haseł, obok
hasła do panelu — nigdzie indziej nie jest ani nie będzie opublikowany.

## Jak to działa dalej

- Wchodzisz na adres workera → logujesz się hasłem → dostajesz
  krótkotrwały (4h) podpisany token sesji trzymany w przeglądarce.
- Każda zmiana w panelu (edycja oferty, dodanie nowej, wgranie zdjęcia)
  trafia do tego samego workera, a on sam robi commit do repo
  `trafficzone/moc-atrakcji` (do `src/data/offers.json` lub
  `public/uploads/...`).
- Commit do `main` automatycznie odpala już istniejący workflow
  (`.github/workflows/deploy.yml`), który buduje stronę i publikuje ją na
  GitHub Pages — zmiana pojawia się na żywo po ok. 1–2 minutach.

## Bezpieczeństwo — co warto wiedzieć

- Prawdziwą ochroną jest **hasło + token sesji**, nie sama "tajność" adresu
  workera. Traktuj hasło jak każde inne ważne hasło.
- Token GitHuba ma dostęp **tylko** do zapisu plików w tym jednym repo
  (dzięki fine-grained scoping z kroku 3) — nawet gdyby ktoś przejął
  workera, nie dostanie się nigdzie indziej na Twoim koncie GitHub.
- Strona panelu ustawia `Referrer-Policy: no-referrer`, więc jej adres nie
  wycieka do zewnętrznych serwisów (np. przy wyświetlaniu podglądów zdjęć
  z Unsplasha).

## Jeśli kiedyś trzeba zmienić hasło albo unieważnić wszystkie sesje

```bash
npm run secret:admin-username   # nowy login (opcjonalnie)
npm run secret:admin-password   # nowe hasło
npm run secret:session-secret   # nowy sekret — unieważnia od razu wszystkie wydane tokeny
npm run deploy
```
