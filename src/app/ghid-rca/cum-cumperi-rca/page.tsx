import { QuestionSection } from "@/components/QuestionSection";
import { rcaArticleFaqs } from "@/lib/faq-content";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { rcaPolicyChecks, rcaQuoteData } from "@/lib/rca-content";

export const metadata = pageMetadata("Cum cumperi RCA: pași și verificări", "Pași pentru cumpărarea unei polițe RCA: informații, perioadă, verificarea datelor și documentele primite. Consultanță în toată România.", "/ghid-rca/cum-cumperi-rca");

const buyingSteps = [
  {
    title: "Verifică dacă vehiculul are nevoie de RCA",
    text: "RCA se încheie la înscrierea în circulație și la expirarea poliței existente. Obligația se verifică potrivit categoriei vehiculului și situației legale; simpla neutilizare nu echivalează cu o suspendare legală a asigurării.",
  },
  {
    title: "Alege un canal autorizat",
    text: "RCA trebuie cumpărată printr-un asigurător sau intermediar autorizat. Rolul brokerului este să caute variante, să îți explice diferențele și să emită polița aleasă.",
  },
  {
    title: "Verifică datele înainte de emitere",
    text: "Erorile în datele proprietarului sau ale vehiculului pot crea probleme la verificare, bonus-malus sau daună. Verifică atent polița înainte de confirmare.",
  },
  {
    title: "Păstrează documentele",
    text: "După emitere, păstrează polița, documentul de Carte Verde și datele de contact ale asigurătorului sau consultantului.",
  },
];

export default function RcaBuyingPage() {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Ghid RCA</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Cum cumperi RCA corect: date necesare și verificări utile
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          RCA este obligatorie, dar merită cumpărată atent. Nu te uita doar la preț: verifică datele poliței, valabilitatea, asigurătorul și modul în care poți primi suport ulterior.
        </p>

        <section className="mt-12 grid gap-5">
          {buyingSteps.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white">{index + 1}</span>
              <h2 className="mt-5 text-xl font-bold text-slate-950">{step.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-950">Date utile pentru ofertă</h2>
            <ul className="mt-5 list-disc space-y-3 pl-6 text-sm leading-6 text-slate-600">
              {rcaQuoteData.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-950">Ce verifici pe poliță</h2>
            <ul className="mt-5 list-disc space-y-3 pl-6 text-sm leading-6 text-slate-600">
              {rcaPolicyChecks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">Verificarea poliței</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            După emitere, polița RCA poate fi verificată în baza publică folosită pentru RCA, după raportarea datelor de către asigurător. Dacă polița nu apare după perioada de raportare, cere clarificări asigurătorului sau brokerului.
          </p>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white">
          <h2 className="text-2xl font-bold">Vrei să cumpărăm RCA fără pași confuzi?</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Scrie-mi ce vehicul ai și te contactez pentru datele necesare. Nu trimite CNP, documente sau poze cu acte în mesajul inițial.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact?pentru=personal&tip=RCA" variant="secondary">Cere ofertă RCA</ButtonLink>
            <ButtonLink href="/contact?pentru=personal&tip=RCA" variant="secondary">Discută despre RCA</ButtonLink>
          </div>
        </section>

        <nav className="mt-12 flex flex-col justify-between gap-3 border-t border-slate-200 pt-8 text-sm font-semibold sm:flex-row">
          <Link href="/ghid-rca/ce-acopera-rca" className="text-slate-600 hover:text-slate-950">← Ce acoperă RCA</Link>
          <Link href="/ghid-rca/bonus-malus" className="text-slate-950 underline underline-offset-4">Următorul: bonus-malus →</Link>
        </nav>
      </article>
    <QuestionSection items={rcaArticleFaqs.buying}/></main>
  );
}
