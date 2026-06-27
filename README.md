# Site consultant asigurări

MVP Next.js + Tailwind pentru un consultant de asigurări, cu pagini de prezentare, formular de lead, WhatsApp CTA și asistent AI orientativ.

## Rulare locală

```bash
npm install
npm run dev
```

Deschide `http://localhost:3000`.

## Configurare date consultant

Editează `src/lib/site.ts`:

```ts
consultantName: "Numele Tău",
city: "Cluj și Bihor",
phoneDisplay: "+40 700 000 000",
phoneRaw: "40700000000",
email: "contact@numeletau.ro",
company: "Broker / companie parteneră",
url: "https://numeletau.ro",
```

## Asistent AI pentru recomandări orientative

Componenta vizibilă este în:

```text
src/components/AIAdvisor.tsx
```

API route-ul server-side este în:

```text
src/app/api/ai-advisor/route.ts
```

Baza de cunoștințe și produsele/categoriile recomandabile se editează în:

```text
src/lib/ai-knowledge.ts
```

Important: asistentul este gândit ca instrument de orientare, nu ca ofertă finală, emitere poliță sau consultanță complet automatizată. Promptul îi spune să nu ceară CNP, documente, date medicale sau alte informații sensibile în chatul public.

## Cheia OpenAI

Creează local un fișier `.env.local` pe baza `.env.example`:

```bash
OPENAI_API_KEY=cheia_ta
OPENAI_MODEL=gpt-5.4-mini
```

Pe Vercel: Project → Settings → Environment Variables → adaugă `OPENAI_API_KEY` și, opțional, `OPENAI_MODEL`, apoi redeploy.

Nu pune cheia API în cod și nu o publica în GitHub.

## Deploy

Proiectul este pregătit pentru Vercel. După push în GitHub, Vercel va face deploy automat.
