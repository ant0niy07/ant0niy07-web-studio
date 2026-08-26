# ant0niy07 Web Studio

Produkcyjny, polskojęzyczny one-page portfolio niezależnego web developera dla rynku B2B. Projekt korzysta z Next.js App Router, React, TypeScript w trybie strict, Tailwind CSS, Motion, Lucide, Vitest i React Testing Library.

## Uruchomienie

```bash
npm ci
npm run dev
```

Walidacja: `npm run lint`, `npm run typecheck`, `npm run test`, `npm run build`.

## Konfiguracja

- Kontakty: `src/config/contact.ts`. Pola `phone`, `whatsapp`, `telegram` i `email` są celowo `null`; po uzupełnieniu przyciski automatycznie zbudują poprawne adresy. Instagram jest zweryfikowany.
- Adres produkcyjny: ustaw `NEXT_PUBLIC_SITE_URL` na właściwy kanoniczny adres wdrożenia. Domyślny adres jest bezpiecznym adresem przewidywanego projektu Vercel, ale przed publikacją na innej domenie należy go nadpisać.
- Formularz nie udaje wysyłki na serwer: waliduje dane, buduje zapytanie i kopiuje je do schowka.

## Import do Vercel

- Framework Preset: **Next.js**
- Root Directory: **./**
- Build Command: **default** (`next build`), Override OFF
- Output Directory: **default**, Override OFF
- Install Command: **default**

Nie ustawiaj `dist`, `.next`, SPA rewrites, `basePath` ani statycznego eksportu. Aplikacja korzysta ze standardowego wyjścia Next.js.

## Uczciwe warunki oferty

Hosting bez miesięcznego abonamentu dotyczy standardowej strony firmowej w ramach limitów wybranej platformy. Domena, płatności, dostawy, e-mail, bazy danych i inne usługi zewnętrzne mogą mieć własne opłaty.
