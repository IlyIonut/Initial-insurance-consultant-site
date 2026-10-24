# IlyAsig — Business & personal · v8

Site Next.js cu orientare predominantă spre firme și IMM-uri în Cluj și Bihor. Secțiunea pentru persoane fizice și adresele paginilor vechi au fost păstrate.

## Ce s-a schimbat

- Identitate IlyAsig, logo varianta 3 în SVG vectorial, favicon A, versiune inversă pentru subsol, export transparent și actualizarea metadatelor sociale.

- Design nou: albastru intens, verde mentă și accente coral, fotografie editorială originală, iconuri SVG și versiune adaptată telefoanelor.
- Prima pagină pentru firme, cu selector de domeniu și trasee către soluțiile relevante.
- Șase pagini de soluții: bunuri și echipamente, răspundere civilă/profesională, flote, sănătatea angajaților, întreruperea activității și riscuri cibernetice.
- Cinci pagini pe domenii: comerț și servicii, producție și ateliere, IT și consultanță, HoReCa, cabinete medicale.
- Trei ghiduri pentru antreprenori și păstrarea ghidurilor RCA.
- Secțiune distinctă `/persoane-fizice`, cu toate categoriile personale.
- Formular adaptat pentru firmă/persoană fizică și preselectarea interesului din pagina de origine.
- Asistent orientativ cu răspunsuri generale disponibile și fără o cheie AI. Integrarea AI de pe server rămâne opțională.
- Titluri și descrieri distincte, adrese canonice, Open Graph/Twitter, sitemap și robots generate din domeniul configurat.
- Date structurate InsuranceAgency, BreadcrumbList, Service și Article, în funcție de pagină.

## Pornire

Necesită Node.js 22 LTS. Proiectul folosește Next.js 16.3.4, React 19.2.6 și Tailwind CSS 4.2.1.

```bash
npm ci
npm run dev
```

Pentru build și rulare:

```bash
npm run build
npm start
```

Fișierul `package-lock.json` fixează dependențele pentru instalări reproductibile.

## Publicare pe Vercel

Proiectul existent este legat la repository-ul `IlyIonut/Initial-insurance-consultant-site`, ramura `main`. `vercel.json` selectează Next.js, instalarea prin `npm ci` și build-ul prin `npm run build`. Vercel gestionează paginile și ruta API; nu este necesar un export static sau un director de publicare Netlify.

Adresa de producție implicită este `https://initial-insurance-consultant-site.vercel.app`. Pentru un domeniu propriu, setează `NEXT_PUBLIC_SITE_URL` în mediul Production din Vercel și redeployează. Nu seta această variabilă la adresa unei previzualizări. Previzualizările Vercel emit `noindex`; versiunea de producție permite indexarea.

Variabilele de contact și cheia AI se configurează în Vercel. Nu se comit fișiere `.env.local`, credențiale sau starea locală `.vercel`.

## Datele reale ale activității

Copiază `.env.example` în `.env.local` și completează:

- `NEXT_PUBLIC_SITE_URL`: domeniul final, cu `https://`;
- `NEXT_PUBLIC_CONSULTANT_NAME`: numele real al persoanei de contact;
- `NEXT_PUBLIC_BROKER_COMPANY`: compania prin care se desfășoară activitatea;
- `NEXT_PUBLIC_REGISTRATION`: informația de înregistrare relevantă, după verificare;
- `NEXT_PUBLIC_PHONE`: numărul internațional, numai cifre, de exemplu prefixul 40 urmat de număr;
- `NEXT_PUBLIC_PHONE_DISPLAY`: forma în care se afișează telefonul;
- `NEXT_PUBLIC_CONTACT_EMAIL`: adresa de contact;
- `CONTACT_GOOGLE_SCRIPT_URL` și `CONTACT_SHARED_SECRET`: setări private pentru integrarea formularului, exclusiv pe server.

Reexecută build-ul după modificarea variabilelor publice. În lipsa unui domeniu configurat, metadatele folosesc adresa de producție Vercel indicată mai sus.

Nu sunt inventate numere de telefon, recenzii, clienți, asigurători parteneri, autorizări sau vechime profesională. Completează identitatea reală și informațiile aplicabile activității înainte de o lansare publică.

## Formularul de contact

Integrarea Google Sheets + email este pregătită în `google-apps-script/`. După configurarea `CONTACT_GOOGLE_SCRIPT_URL` și `CONTACT_SHARED_SECRET` pe server, formularul afișează „Trimite cererea”, înregistrează datele în registrul privat și notifică proprietarul prin email. Fără aceste setări păstrează modul de pregătire/copiere/descărcare.

Ruta `/api/contact` validează datele pe server și semnează solicitarea; URL-ul Google și cheia comună nu ajung în browser. Un identificator stabil previne rândurile duplicate la reîncercare. Confirmarea de pe site apare numai după confirmarea salvării. Apps Script păstrează și reîncearcă separat notificările nereușite.

Registrul include statusuri și observații editabile și se descarcă din Google Sheets în Excel sau CSV. Instrucțiunile de activare și verificare sunt în `google-apps-script/README.md`. Nu se solicită și nu se încarcă documente sensibile.

Verificări: `node --test tests/*.test.mjs`, apoi `npm run build`. Activarea în contul Google și o cerere reală de test sunt necesare pentru confirmarea fluxului complet.

## Asistentul orientativ

Ruta `/api/ai-advisor` oferă orientare generală și legături către paginile relevante. În lipsa `OPENAI_API_KEY`, folosește răspunsuri locale pregătite. Pentru generare AI, setează cheia numai pe server. Nu o include într-o variabilă `NEXT_PUBLIC_*` și nu urca `.env.local` în Git.

Răspunsurile nu sunt oferte, confirmări de acoperire sau recomandări contractuale. Formularul și asistentul nu sunt destinate CNP-urilor, datelor medicale ori documentelor sensibile.

## Unde modifici conținutul

- `src/lib/site.ts`: identitate, contact și categorii personale;
- `src/lib/business-content.ts`: soluții pentru firme și domenii de activitate;
- `src/lib/guides.ts`: cele trei ghiduri pentru antreprenori;
- `src/lib/general-insurance-content.ts`: conținutul produselor personale păstrate;
- `src/lib/seo.ts`: generatorul de metadate;
- `src/app/globals.css`: culori, compoziție și reguli pentru mobil;
- `src/app/page.tsx`: pagina principală;
- `src/app/sitemap.ts` și `src/app/robots.ts`: fișierele pentru motoarele de căutare.

## Verificări efectuate

- Build de producție Next.js, inclusiv verificarea TypeScript și generarea paginilor statice.
- Build-ul versiunii găzduite și verificare TypeScript.
- Verificarea în browser a celor 37 de pagini din sitemap: un H1, titlu și descriere unice, canonical, Open Graph, limba română și JSON-LD valid.
- Verificarea efectivă a sitemap-ului și robots.txt.
- Navigarea prin selectorul de domeniu, meniul mobil și secțiunea pentru persoane fizice.
- Preselectarea formularului, câmpurile pentru firme și pregătirea unei cereri de test.
- Răspunsul orientativ pentru o întrebare despre un atelier.
- Verificarea afișării la o lățime mobilă, inclusiv lipsa depășirilor orizontale pe paginile inspectate.

Verificarea reală Google Sheets/email se efectuează după autorizarea proiectului Apps Script și configurarea secretelor Vercel. Generarea AI cu o cheie reală nu a fost testată.

## SEO și lansare

Detaliile sunt în `SEO_NOTES.md`. Versiunea de previzualizare este privată și nu poate servi ca site public indexabil. Implementarea tehnică SEO nu garantează poziții în Google; indexarea presupune un site public accesibil și un domeniu configurat corect.

## Elemente vizuale

Fotografia din `public/images/antreprenori-atelier.webp` a fost creată cu instrumentul integrat de generare de imagini. Este un vizual ilustrativ, nu o fotografie a consultantului sau a unor clienți reali. Promptul este în `DESIGN_ASSETS.md`.

Structura de navigare și prezentarea pe domenii sunt inspirate de modele uzuale din Hiscox și Simply Business. Textele, identitatea, iconurile și compoziția au fost realizate pentru acest proiect; nu au fost preluate recenzii, statistici comerciale, logo-uri sau afirmații despre acele companii.
