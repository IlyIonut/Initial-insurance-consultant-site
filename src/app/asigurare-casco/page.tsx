import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { FAQ } from "@/components/FAQ";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Asigurare CASCO în ${SITE.city}`,
  description: "Consultanță pentru CASCO: acoperiri, franșiză, excluderi, service-uri și opțiuni suplimentare explicate clar.",
};

const faqs = [
  {
    question: "Ce acoperă CASCO?",
    answer: "Depinde de produs și de condițiile asigurătorului. În general poate acoperi avarii proprii, furt, fenomene naturale sau alte riscuri, dar detaliile trebuie verificate în condițiile poliței.",
  },
  {
    question: "Ce este franșiza?",
    answer: "Franșiza este partea din daună suportată de client, dacă polița prevede acest lucru. Poate influența prețul și modul de despăgubire.",
  },
  {
    question: "Merită CASCO pentru o mașină mai veche?",
    answer: "Depinde de valoarea mașinii, riscurile asumate, buget și condițiile disponibile. Discutăm situația concretă înainte de recomandare.",
  },
];

export default function CascoPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">CASCO</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            CASCO ales informat, nu doar după preț
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            La CASCO contează acoperirile, excluderile, franșiza, service-ul și modul de despăgubire. Te ajut să compari opțiunile și să înțelegi ce alegi.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact?tip=CASCO">Cere ofertă CASCO</ButtonLink>
            <ButtonLink href={`https://wa.me/${SITE.phoneRaw}?text=Bună! Doresc o ofertă CASCO.`} variant="secondary">WhatsApp</ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">Ce verificăm împreună</h2>
          <ul className="mt-6 grid gap-4 text-sm leading-6 text-slate-600 sm:grid-cols-2">
            <li>• acoperiri principale și riscuri incluse;</li>
            <li>• excluderi importante;</li>
            <li>• franșiză și impactul ei;</li>
            <li>• reparație în service agreat;</li>
            <li>• opțiuni suplimentare;</li>
            <li>• condiții de plată și reînnoire.</li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950">Întrebări frecvente CASCO</h2>
        <div className="mt-6">
          <FAQ items={faqs} />
        </div>
      </section>
    </main>
  );
}
