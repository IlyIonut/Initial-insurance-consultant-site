# Consultant Asigurări - site Next.js

Site de prezentare pentru consultant/broker de asigurări, construit cu Next.js + Tailwind CSS.

## Ce conține

- Homepage cu formular de contact și asistent AI.
- Pagini comerciale/educaționale:
  - `/asigurare-rca`
  - `/asigurare-casco`
  - `/asigurare-locuinta`
  - `/asigurare-calatorie`
  - `/asigurare-sanatate`
  - `/asigurare-viata`
  - `/asigurari-firme`
  - `/asigurare-raspundere-civila`
  - `/asigurare-accidente`
- Ghid RCA educațional:
  - `/ghid-rca`
  - `/ghid-rca/ce-acopera-rca`
  - `/ghid-rca/cum-cumperi-rca`
  - `/ghid-rca/bonus-malus`
  - `/ghid-rca/accident-si-daune`
- Articol SEO: `/blog/ce-acte-rca`.
- Formular de contact cu WhatsApp fallback.
- API route pentru AI advisor: `/api/ai-advisor`.

## Rulare locală

```bash
npm install
npm run dev
```

Apoi deschide:

```text
http://localhost:3000
```

## Configurare date site

Editează:

```text
src/lib/site.ts
```

Acolo setezi numele consultantului, telefonul, emailul, orașele/zona și URL-ul site-ului.

## Configurare OpenAI

Creează local fișierul `.env.local` și adaugă cheia reală:

```env
OPENAI_API_KEY=cheia_ta_reala
OPENAI_MODEL=gpt-5.4-mini
```

Nu urca `.env.local` în GitHub. Fișierul `.env.example` trebuie să conțină doar valori demonstrative, niciodată cheia reală.

## Unde modifici textele produselor

Textele generale pentru CASCO, Locuință, Călătorie, Sănătate, Viață, Firme, Răspundere civilă și Accidente sunt centralizate în:

```text
src/lib/general-insurance-content.ts
```

Cunoștințele folosite de AI advisor sunt în:

```text
src/lib/ai-knowledge.ts
```

## Notă compliance

Textele sunt educaționale și generalizate din produse și condiții întâlnite la mai mulți asigurători. Ele nu trebuie prezentate ca descriere contractuală a unui anumit produs. Verifică periodic legislația, condițiile asigurătorilor și statutul tău de consultant/intermediar/broker. Nu promite prețuri finale, acoperiri garantate sau consultanță juridică.
