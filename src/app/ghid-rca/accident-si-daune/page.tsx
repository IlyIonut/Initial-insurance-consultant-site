import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { rcaAccidentSteps } from "@/lib/rca-content";

export const metadata = pageMetadata("Accident și daună RCA: pași de urmat", "Repere orientative după un accident: constatare, documente și deschiderea dosarului de daună RCA. Verifică procedura aplicabilă situației tale.", "/ghid-rca/accident-si-daune");

const amiabilaRules = [
  "accidentul are doar pagube materiale, fără victime;",
  "sunt implicate doar două vehicule;",
  "ambii conducători sunt de acord să folosească formularul;",
  "formularul este completat lizibil, semnat de ambii șoferi și depus la asigurător.",
];

const damageDocs = [
  "constatarea amiabilă completată sau documentele eliberate de poliție, după caz;",
  "polița RCA a vehiculului considerat vinovat, în copie;",
  "permisul de conducere al persoanei implicate, original și copie, după caz;",
  "certificatul de înmatriculare/talonul vehiculului păgubit;",
  "împuternicire sau înștiințare dacă vehiculul aparține unei persoane juridice sau societăți de leasing;",
  "alte documente cerute în scris de asigurător pentru clarificarea dosarului.",
];

export default function RcaAccidentPage() {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Ghid RCA</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Ce faci după un accident: constatare amiabilă și daună RCA
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          După un accident, primul lucru este siguranța. Apoi contează documentele, procedura corectă și avizarea daunei la asigurătorul potrivit.
        </p>

        <section className="mt-12 grid gap-5">
          {rcaAccidentSteps.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white">{index + 1}</span>
              <h2 className="mt-5 text-xl font-bold text-slate-950">{step.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-950">Când poți folosi constatarea amiabilă</h2>
            <ul className="mt-5 list-disc space-y-3 pl-6 text-sm leading-6 text-slate-600">
              {amiabilaRules.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-2xl font-bold text-slate-950">Documente utile la daună</h2>
            <ul className="mt-5 list-disc space-y-3 pl-6 text-sm leading-6 text-slate-600">
              {damageDocs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">Cine stabilește despăgubirea</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Asigurătorul RCA analizează documentele din dosarul de daună, stabilește răspunderea și cuantifică prejudiciul conform procedurilor aplicabile. Dacă apar neclarități, poate cere documente suplimentare. În caz de litigiu, răspunderea sau despăgubirea poate fi stabilită de instanță.
          </p>
        </section>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white">
          <h2 className="text-2xl font-bold">Ai avut o daună și nu știi care este următorul pas?</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Îți pot explica orientativ ce documente sunt utile și cui trebuie să te adresezi. Pentru soluționarea dosarului, se respectă procedura asigurătorului și legislația aplicabilă.
          </p>
          <div className="mt-6">
            <ButtonLink href="/contact?tip=dauna-rca" variant="secondary">Cere îndrumare</ButtonLink>
          </div>
        </section>

        <nav className="mt-12 flex flex-col justify-between gap-3 border-t border-slate-200 pt-8 text-sm font-semibold sm:flex-row">
          <Link href="/ghid-rca/bonus-malus" className="text-slate-600 hover:text-slate-950">← Bonus-malus</Link>
          <Link href="/ghid-rca" className="text-slate-950 underline underline-offset-4">Înapoi la ghidul RCA →</Link>
        </nav>
      </article>
    </main>
  );
}
