# IlyAsig — firme și persoane fizice

Site Next.js pentru clienți din toată România. Prioritatea SEO rămâne Cluj și Bihor, prin metadate și date structurate, fără mesaje care limitează serviciile la anumite județe.

## Revizia din 25 octombrie 2026

- Eliminate asistentul, componenta, ruta API, baza lui de texte și configurarea AI.
- Eliminate linkurile publice către site-uri terțe. Navigarea informativă rămâne internă; emailul și telefonul sunt canale directe.
- Revizuite paginile și completate întrebări tematice pentru produse personale, soluțiile business, domenii, ghiduri și contact.
- Corectate explicațiile despre PAD/facultativă, RCA, bonus-malus PF/PJ și procedura după accident.
- Adăugați termeni pentru site/formular și rescrisă confidențialitatea pentru fluxul real Vercel → Apps Script → Sheets/email.
- Formularul cere confirmarea termenilor și informării, fără acord de marketing. Serverul respinge o versiune veche sau lipsă a informării înainte de transmiterea către Google.
- Actualizate sitemap-ul, revizia editorială și imaginea socială generată la /og.

Sursele și limitele verificării sunt în [docs/content-review.md](docs/content-review.md). Selecția întrebărilor este editorială, fără clasament pretins al volumelor de căutare.

## Dezvoltare

Node.js 22.x, Next.js 16.3.4, React 19.2.6. Dependențele sunt fixate în package-lock.json.

```bash
npm ci
npm run dev
```

```bash
node --test tests/*.test.mjs
npm run build
npm start
```

Build-ul verifică TypeScript. Testele folosesc date fictive și un serviciu Google simulat. Pe Vercel, vercel.json rulează testele înainte de build.

## Vercel

Repository: IlyIonut/Initial-insurance-consultant-site, ramura main. Producție: https://initial-insurance-consultant-site.vercel.app. Nu este un proiect Netlify. Se păstrează conexiunea Git și secretele formularului.

NEXT_PUBLIC_SITE_URL este domeniul canonic; previzualizările emit noindex. Variabilele publice sunt evaluate la build și schimbarea lor cere un build nou.

## Identitate și informare juridică

Completează numai date reale, verificate, din .env.example:

- NEXT_PUBLIC_OPERATOR_NAME, NEXT_PUBLIC_PROFESSIONAL_ADDRESS, NEXT_PUBLIC_TAX_ID și NEXT_PUBLIC_TRADE_REGISTER, după situație;
- NEXT_PUBLIC_CONSULTANT_NAME, NEXT_PUBLIC_INTERMEDIARY_ROLE, NEXT_PUBLIC_BROKER_COMPANY și NEXT_PUBLIC_REGISTRATION;
- NEXT_PUBLIC_CONTACT_EMAIL, NEXT_PUBLIC_COMPLAINTS_EMAIL, NEXT_PUBLIC_PHONE și NEXT_PUBLIC_PHONE_DISPLAY.

Adresa publică este Ionut.Ilies@kbagencies.ro, distinctă de contul personal folosit pentru notificările formularului. Codul nu inventează operatori, adrese, coduri ASF/RIS, afilieri, remunerații sau autorizări.

Identitatea publică este configurată în Vercel: Ilies Ionut Cristian — PFI, intermediar secundar în asigurări, RAF 527814, prin Kunden Broker Companie de Brokeraj S.R.L. Codul și numele au fost găsite în registrul publicat de broker. Identificatorul personal fiscal nu este publicat și nu se introduce într-o variabilă NEXT_PUBLIC_. Adresa profesională a titularului rămâne de furnizat.

Textele sunt o implementare pentru fluxul actual, nu o certificare de conformitate. Rămân de validat procedurile intermediarului, rolurile GDPR, condițiile reale ale conturilor Google/Vercel și cerințele responsabilului juridic/compliance al brokerului.

Politica prevede revizuirea și ștergerea manuală a cererilor fără contract în cel mult 12 luni de la ultima comunicare relevantă, în lipsa unui motiv documentat pentru păstrare suplimentară. Nu există ștergere automată. Administratorul gestionează registrul, emailurile și exporturile.

## Formular și registru

Setări exclusiv pe server: CONTACT_GOOGLE_SCRIPT_URL și CONTACT_SHARED_SECRET. Nu le include în variabile publice ori Git. Nu se schimbă pentru revizia de conținut.

Ruta /api/contact validează, semnează și confirmă numai salvarea confirmată de Google. UUID-ul stabil împiedică dublarea la reîncercare. Apps Script notifică doar proprietarul configurat și reîncearcă notificările nereușite.

Versiunea 2026-10-29 identifică perechea termeni/informare cu identitatea profesională și noua adresă publică, confirmată de formular. Coloana existentă Acord contact păstrează această versiune. La cererile noi înseamnă solicitarea de contact și citirea documentelor, nu acord pentru marketing.

Registrul rămâne privat și se poate exporta din Sheets în Excel ori CSV. Administrare: [google-apps-script/README.md](google-apps-script/README.md). Fără secrete, formularul oferă pregătire/copiere/descărcare, fără să pretindă trimiterea.

## Conținut

- src/lib/faq-content.ts: întrebări și răspunsuri tematice;
- src/lib/business-content.ts, general-insurance-content.ts, rca-content.ts și guides.ts: paginile;
- src/lib/site.ts: identitate, contact și metadate;
- src/app/termeni-si-conditii, confidentialitate și cookies: documentele publice;
- src/app/globals.css: stiluri și adaptare mobilă.

Logo-ul vectorial și fotografia ilustrativă au fost păstrate. Fotografia nu reprezintă clienți reali. Nu sunt inventate recenzii, statistici sau parteneriate.

## Organizarea paginilor — 29 octombrie 2026

Fiecare produs are o singură pagină cu acoperiri, comparație, informații de pregătit și întrebări frecvente. RCA este la `/asigurare-rca`; vechile pagini de ghid și articolul despre acte au redirecționări permanente către secțiunile relevante. Ghidurile generale pentru firme sunt reunite în `/ghiduri`, iar explicația despre bunuri și continuitate este inclusă în pagina întreruperii activității. Maparea adreselor vechi se află în `src/lib/product-redirects.mjs`. Sitemap-ul include numai paginile canonice.

Paginile de produs păstrează un singur buton de solicitare la final; cuprinsurile navighează în aceeași pagină. Formularul este centralizat pe `/contact`.

Adresa publică este configurabilă prin `NEXT_PUBLIC_CONTACT_EMAIL`. Fallback-ul manual prin email al formularului poate folosi separat `NEXT_PUBLIC_REQUEST_EMAIL`, fără o adresă personală implicită în sursa publică. Dacă nu este configurat, rămân copierea și descărcarea cererii. Destinatarul notificărilor automate este stabilit exclusiv de proprietatea privată `NOTIFICATION_EMAIL` din Google Apps Script; schimbarea adresei publice nu îl modifică.
