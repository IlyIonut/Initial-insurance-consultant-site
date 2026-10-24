import { QuestionSection } from "@/components/QuestionSection";
import { rcaArticleFaqs } from "@/lib/faq-content";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata = pageMetadata("Bonus-malus RCA: ce merită să știi", "Explicații despre sistemul bonus-malus RCA și informațiile care merită verificate la ofertare și reînnoire. Ghid orientativ pentru șoferi.", "/ghid-rca/bonus-malus");

const principles = [
  {
    title: "Fără daune plătite, poți primi bonus",
    text: "Dacă în perioada de referință nu apar daune plătite pe RCA, la reînnoire poți beneficia de o reducere a primei, conform regulilor sistemului bonus-malus.",
  },
  {
    title: "Daunele plătite pot aduce malus",
    text: "Dacă sunt înregistrate daune plătite, prima RCA poate fi majorată la reînnoire. În general contează dauna plătită, nu doar producerea accidentului.",
  },
  {
    title: "Istoricul se urmărește pe vehicul/asigurat",
    text: "Pentru persoanele fizice se aplică aceeași clasă bonus-malus vehiculelor deținute, potrivit normei. Pentru persoanele juridice, încadrarea este distinctă pe vehicul.",
  },
  {
    title: "La schimbarea vehiculului, întreabă de transfer",
    text: "Pentru persoanele juridice, transferul clasei de pe un vehicul înstrăinat sau radiat pe unul nou-dobândit se verifică pe baza solicitării și documentelor justificative. Pentru persoanele fizice se aplică regulile clasei comune.",
  },
];

export default function BonusMalusPage() {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Ghid RCA</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Bonus-malus RCA: de ce istoricul tău poate schimba prețul
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Sistemul bonus-malus are rolul de a diferenția șoferii/proprietarii cu istoric bun de cei care au produs daune plătite. Pe scurt, fără daune poți primi reducere, iar cu daune plătite poți primi majorare.
        </p>

        <section className="mt-12 grid gap-5 sm:grid-cols-2">
          {principles.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-slate-950">De ce prețurile diferă între asigurători</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Fiecare asigurător își stabilește propriile tarife pe categorii de risc. Pot conta date precum tipul vehiculului, caracteristicile tehnice, localitatea, vârsta proprietarului/conducătorului, istoricul de daune și alte criterii folosite actuarial.
          </p>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">Ce poți face dacă nu ești de acord cu clasa aplicată</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Solicită justificarea încadrării de la asigurător sau broker. Dacă există erori în datele transmise, acestea trebuie corectate de asigurătorul care a emis polița și a raportat informațiile.
          </p>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white">
          <h2 className="text-2xl font-bold">Ai nevoie de ofertă RCA și vrei să verificăm clasa bonus-malus?</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Trimite o cerere scurtă, iar la discuția de ofertare verificăm datele necesare și ce apare pentru situația ta.
          </p>
          <div className="mt-6">
            <ButtonLink href="/contact?pentru=personal&tip=RCA" variant="secondary">Cere ofertă RCA</ButtonLink>
          </div>
        </section>

        <nav className="mt-12 flex flex-col justify-between gap-3 border-t border-slate-200 pt-8 text-sm font-semibold sm:flex-row">
          <Link href="/ghid-rca/cum-cumperi-rca" className="text-slate-600 hover:text-slate-950">← Cum cumperi RCA</Link>
          <Link href="/ghid-rca/accident-si-daune" className="text-slate-950 underline underline-offset-4">Următorul: accident și daune →</Link>
        </nav>
      </article>
    <QuestionSection items={rcaArticleFaqs.bonus}/></main>
  );
}
