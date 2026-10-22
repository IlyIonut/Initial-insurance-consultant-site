# SEO — structură și configurare

Poziționare principală: asigurări pentru firme și IMM-uri în Cluj și Bihor. Poziționare secundară: asigurări pentru persoane fizice.

## Structura comercială

- `/asigurari-firme`: pagina centrală pentru firme.
- `/asigurari-firme/bunuri-si-echipamente`
- `/asigurari-firme/raspundere-civila-profesionala`
- `/asigurari-firme/flote-auto`
- `/asigurari-firme/sanatate-angajati`
- `/asigurari-firme/intreruperea-activitatii`
- `/asigurari-firme/riscuri-cibernetice`

Cele cinci pagini din `/domenii/` explică riscuri și informații specifice activității și conduc la soluțiile relevante. Cele trei articole din `/ghiduri/` răspund întrebărilor de început ale antreprenorilor și au legături către paginile comerciale.

`/persoane-fizice` reunește paginile personale. Adresele lor vechi și ghidurile RCA au fost păstrate. `/asigurare-travel` redirecționează permanent la `/asigurare-calatorie`.

## Implementare

- Conținut HTML generat pe server și, în exportul Next.js, pagini publice pre-randate.
- Titluri și descrieri distincte pentru cele 37 de pagini din sitemap.
- Canonical și Open Graph pe fiecare adresă.
- Imagine de distribuire de 1200 × 630 și favicon propriu.
- Sitemap și robots.txt generate din domeniul real configurat.
- Domeniu implicit de producție: `https://initial-insurance-consultant-site.vercel.app`; poate fi înlocuit prin `NEXT_PUBLIC_SITE_URL` în Vercel.
- Previzualizările Vercel emit `noindex` prin `VERCEL_ENV=preview`.
- Date structurate pentru organizație, breadcrumb, servicii și articole, fără recenzii sau ratinguri inventate.
- Legături între domenii, soluții, ghiduri și formular.
- Conținut local inclus natural; fără multiplicarea unor pagini aproape identice pe localități.
- Imagine principală WebP, dimensiuni declarate și prioritate de încărcare pentru vizualul principal.

## Înainte de lansarea pe domeniul final

1. Completează `NEXT_PUBLIC_SITE_URL`, datele reale de contact și identitatea profesională.
2. Reexecută build-ul și verifică domeniul din canonical, Open Graph, sitemap și JSON-LD.
3. Configurează recepția formularului și testează o solicitare completă.
4. Actualizează informațiile de confidențialitate pentru operatorul și serviciile efectiv folosite.
5. Dacă schimbi adresele unui site deja public, păstrează redirecționări permanente către echivalentele lor.
6. După lansarea publică, trimite sitemap-ul în Google Search Console și verifică indexarea.
7. Completează în timp conținutul cu experiență și exemple reale, publicabile, fără promisiuni de despăgubire.

Nu au fost estimate volume de căutare, costuri Google Ads sau poziții viitoare. Versiunea privată de previzualizare nu este indexabilă ca un site public.
