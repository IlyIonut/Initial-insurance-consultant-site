import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { FAQ } from "@/components/FAQ";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Asigurare RCA în ${SITE.city}`,
  description: "Solicită consultanță pentru RCA: acte necesare, pași, explicații clare și ofertă potrivită pentru autoturism sau flotă.",
};

const faqs = [
  {
    question: "Ce este RCA?",
    answer: "RCA este asigurarea obligatorie de răspundere civilă auto. Ea acoperă prejudiciile produse terților în urma unui accident, conform condițiilor poliței și legislației aplicabile.",
  },
  {
    question: "Ce date sunt necesare pentru o ofertă RCA?",
    answer: "De obicei sunt necesare date despre proprietar, vehicul și perioada dorită. Pentru primul contact este suficient să îmi spui că vrei RCA și te ghidez mai departe.",
  },
  {
    question: "Aleg doar cel mai mic preț?",
    answer: "Prețul contează, dar e util să verifici și detaliile poliței, asigurătorul, opțiunile de plată și modul de suport ulterior.",
  },
];

export default function RcaPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">RCA</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Asigurare RCA explicată simplu
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Ai nevoie de RCA pentru mașină personală, autoutilitară sau flotă? Îți explic pașii, datele necesare și variantele disponibile, fără termeni complicați.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact?tip=RCA">Cere ofertă RCA</ButtonLink>
            <ButtonLink href={`https://wa.me/${SITE.phoneRaw}?text=Bună! Doresc o ofertă RCA.`} variant="secondary">WhatsApp</ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          ["Rapid", "Transmiterea datelor minime și clarificarea pașilor pentru ofertă."],
          ["Clar", "Îți explic diferențele dintre opțiuni și ce trebuie urmărit."],
          ["Util", "Te pot ajuta și cu reînnoirea sau întrebările ulterioare."],
        ].map(([title, text]) => (
          <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-950">{title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950">Întrebări frecvente RCA</h2>
        <div className="mt-6">
          <FAQ items={faqs} />
        </div>
      </section>
    </main>
  );
}
