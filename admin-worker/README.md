# Panel admina — worker (backend)

Ten folder to osobny, mały serwer (Cloudflare Worker), który stoi między
ukrytą stroną admina a repo na GitHubie. To jedyne miejsce, które zna hasło
admina i token GitHuba z prawem zapisu — panel admina (strona statyczna) nigdy
ich nie widzi.

Trzeba to wdrożyć **raz**, ręcznie, z własnego konta Cloudflare (darmowy plan
w zupełności wystarczy). Poniżej krok po kroku.

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
npm run secret:admin-password
# wpisz hasło do panelu admina (dla Ciebie/osoby edytującej oferty)

npm run secret:session-secret
# wpisz dowolny losowy, długi ciąg znaków (np. wygenerowany hasłem menadżera)

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

Skopiuj ten adres.

## 6. Podepnij adres workera do panelu admina

W pliku `src/app/panel-768c916f8af9/AdminPanelClient.tsx` w głównym repo
(nie w tym folderze) podmień wartość stałej `API_BASE` na skopiowany adres,
np.:

```ts
const API_BASE = "https://moc-atrakcji-admin.twoja-subdomena.workers.dev";
```

Zacommituj i wypchnij zmianę — strona się przebuduje i panel będzie gotowy.

## Jak to działa dalej

- Panel admina loguje się hasłem → worker sprawdza je i wystawia
  krótkotrwały (4h) podpisany token sesji.
- Każda zmiana w panelu (edycja oferty, dodanie nowej, wgranie zdjęcia)
  trafia do workera, a worker sam robi commit do repo `trafficzone/moc-atrakcji`
  (do `src/data/offers.json` lub `public/uploads/...`).
- Commit do `main` automatycznie odpala już istniejący workflow
  (`.github/workflows/deploy.yml`), który buduje stronę i publikuje ją na
  GitHub Pages — zmiana pojawia się na żywo po ok. 1–2 minutach.

## Jeśli kiedyś trzeba zmienić hasło albo unieważnić wszystkie sesje

```bash
npm run secret:admin-password   # nowe hasło
npm run secret:session-secret   # nowy sekret — unieważnia od razu wszystkie wydane tokeny
npm run deploy
```
