import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { rcaCoverage, rcaNotCoverage } from "@/lib/rca-content";

export const metadata: Metadata = {
  title: "Ce acoperă RCA? Daune, limite și diferența față de CASCO",
  description:
    "Explicație simplă despre ce acoperă asigurarea RCA, ce nu acoperă și de ce RCA nu înlocuiește CASCO.",
};

export default function RcaCoveragePage() {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Ghid RCA</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Ce acoperă RCA și ce trebuie să știi înainte să alegi polița
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          RCA este o asigurare de răspundere civilă. Asta înseamnă că rolul ei principal este să acopere prejudiciile produse altor persoane printr-un accident cauzat de vehiculul asigurat.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Ce poate acoperi RCA</h2>
            <ul className="mt-5 list-disc space-y-3 pl-6 text-sm leading-6 text-slate-600">
              {rcaCoverage.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-950">Ce nu trebuie confundat cu RCA</h2>
            <ul className="mt-5 list-disc space-y-3 pl-6 text-sm leading-6 text-slate-600">
              {rcaNotCoverage.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white">
          <h2 className="text-2xl font-bold">RCA vs CASCO, foarte simplu</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            RCA este obligatorie și se referă la prejudiciile produse terților. CASCO este facultativă și poate proteja propriul vehicul, în funcție de produsul ales. De aceea, chiar dacă ai CASCO, ai nevoie și de RCA.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact?tip=RCA" variant="secondary">Cere ofertă RCA</ButtonLink>
            <ButtonLink href="/asigurare-casco" variant="secondary">Vezi CASCO</ButtonLink>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">De ce contează consultanța</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Riscurile acoperite prin RCA sunt stabilite legal, dar prețul, asigurătorul, datele poliței, valabilitatea și experiența în caz de daună pot conta mult. Un consultant te ajută să verifici datele și să înțelegi ce cumperi.
          </p>
        </section>

        <nav className="mt-12 flex flex-col justify-between gap-3 border-t border-slate-200 pt-8 text-sm font-semibold sm:flex-row">
          <Link href="/ghid-rca" className="text-slate-600 hover:text-slate-950">← Înapoi la ghidul RCA</Link>
          <Link href="/ghid-rca/cum-cumperi-rca" className="text-slate-950 underline underline-offset-4">Următorul: cum cumperi RCA →</Link>
        </nav>
      </article>
    </main>
  );
}
