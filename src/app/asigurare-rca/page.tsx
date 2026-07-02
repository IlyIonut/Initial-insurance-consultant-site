import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { FAQ } from "@/components/FAQ";
import { SectionHeader } from "@/components/SectionHeader";
import { SITE } from "@/lib/site";
import { rcaCoverage, rcaFaqs, rcaGuideCards, rcaHighlights, rcaPolicyChecks, rcaQuoteData } from "@/lib/rca-content";

export const metadata: Metadata = {
  title: `Asigurare RCA în Cluj și Bihor | Ofertă și ghid complet`,
  description:
    "Solicită ofertă RCA și află, pe înțelesul tău, ce acoperă polița, ce date sunt necesare, cum funcționează bonus-malus și ce verifici înainte de emitere.",
};

const processSteps = [
  "Îmi spui ce vehicul ai și pentru cine se emite polița: persoană fizică sau firmă.",
  "Verific datele necesare și compar variantele disponibile pentru situația ta.",
  "Îți explic prețul, perioada, bonus-malus și detaliile importante ale poliței.",
  "Alegi varianta potrivită, iar apoi poți reveni pentru reînnoire sau întrebări.",
];

export default function RcaPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-100">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div>
            <p className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              RCA pentru persoane fizice, firme și flote mici
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              Asigurare RCA explicată clar înainte să alegi polița.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              RCA este polița obligatorie pentru vehicule. Te ajut să înțelegi ce acoperă, ce date sunt necesare, cum se verifică polița și cum alegi informat, nu doar după cel mai mic preț.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact?tip=RCA">Cere ofertă RCA</ButtonLink>
              <ButtonLink href={`https://wa.me/${SITE.phoneRaw}?text=Bună! Doresc o ofertă RCA.`} variant="secondary">
                Scrie pe WhatsApp
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Pe scurt</p>
            <div className="mt-6 grid gap-4">
              {rcaHighlights.map((item) => (
                <div key={item.title} className="rounded-3xl bg-slate-50 p-5">
                  <h2 className="font-bold text-slate-950">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Ce acoperă RCA"
          title="RCA acoperă prejudiciile produse terților"
          description="Informațiile de mai jos sunt educaționale. Oferta finală și condițiile exacte se verifică în poliță și în documentele asigurătorului."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Ce poate acoperi RCA</h2>
            <ul className="mt-5 list-disc space-y-3 pl-6 text-sm leading-6 text-slate-600">
              {rcaCoverage.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/ghid-rca/ce-acopera-rca" className="text-sm font-semibold text-slate-950 underline underline-offset-4">
                Citește ghidul: ce acoperă RCA
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-sm">
            <h2 className="text-2xl font-bold">Important: RCA nu este CASCO</h2>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              RCA este pentru prejudiciile produse terților. Dacă vrei protecție pentru propriul vehicul, se discută separat despre CASCO, cu acoperiri, franșiză și excluderi specifice.
            </p>
            <div className="mt-6">
              <ButtonLink href="/asigurare-casco" variant="secondary">Vezi și CASCO</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Ofertă RCA"
            title="Ce date sunt utile pentru o ofertă"
            description="Pentru primul contact nu este nevoie să trimiți poze cu acte în formularul public. Îmi poți transmite cererea, iar eu îți spun exact ce informații sunt necesare."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-bold text-slate-950">Date orientative</h2>
              <ul className="mt-5 list-disc space-y-3 pl-6 text-sm leading-6 text-slate-600">
                {rcaQuoteData.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-bold text-slate-950">Ce verifici înainte de emitere</h2>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-600 sm:grid-cols-2">
                {rcaPolicyChecks.map((item) => (
                  <li key={item} className="rounded-2xl bg-white p-4 shadow-sm">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Cum lucrăm"
          title="Proces simplu pentru RCA"
          description="Scopul este să primești rapid o direcție clară și să înțelegi ce cumperi."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white">{index + 1}</span>
              <p className="mt-5 text-sm leading-6 text-slate-700">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Ghiduri RCA"
            title="Pagini utile pentru clienți"
            description="Am separat informațiile importante în pagini scurte, ușor de citit și bune pentru SEO."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rcaGuideCards.map((card) => (
              <Link key={card.href} href={card.href} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <h2 className="text-lg font-bold text-slate-950">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
                <p className="mt-5 text-sm font-semibold text-slate-950">Citește mai mult →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">FAQ RCA</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Întrebări frecvente despre RCA</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Răspunsuri scurte pentru cele mai comune întrebări înainte de solicitarea unei oferte.
          </p>
        </div>
        <FAQ items={rcaFaqs} />
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Ofertă RCA</p>
            <h2 className="mt-3 text-3xl font-bold">Vrei să verificăm variantele pentru vehiculul tău?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              Trimite o cerere scurtă și te contactez pentru datele necesare. Nu trimite documente sensibile prin formularul public.
            </p>
          </div>
          <ButtonLink href="/contact?tip=RCA" variant="secondary">Cere ofertă RCA</ButtonLink>
        </div>
      </section>
    </main>
  );
}
