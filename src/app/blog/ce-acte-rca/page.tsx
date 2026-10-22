import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { rcaPolicyChecks, rcaQuoteData } from "@/lib/rca-content";

export const metadata = pageMetadata("Ce acte sunt necesare pentru RCA?", "Ce informații și documente pot fi necesare pentru o ofertă RCA. Pregătește datele corecte și evită transmiterea actelor prin formularul public.", "/blog/ce-acte-rca");

export default function BlogRcaDocsPage() {
  return (
    <main>
      <article className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Ghid RCA</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Ce acte și date sunt necesare pentru RCA?
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Pentru emiterea unei polițe RCA sunt necesare date despre proprietar și vehicul. Pentru primul contact, trimite doar solicitarea și datele de contact; documentele concrete se stabilesc în discuția de ofertare.
        </p>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">Date utile pentru ofertă RCA</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-sm leading-6 text-slate-600">
            {rcaQuoteData.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-2xl font-bold text-slate-950">Condiții generale pentru RCA</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Vehiculul trebuie să fie înmatriculat, supus înmatriculării sau înregistrat, iar asiguratul trebuie să fie persoana fizică sau juridică înscrisă în documentele vehiculului ori persoana pe numele căreia urmează înmatricularea.
          </p>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">Ce verifici pe poliță înainte de confirmare</h2>
          <ul className="mt-5 list-disc space-y-3 pl-6 text-sm leading-6 text-slate-600">
            {rcaPolicyChecks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white">
          <h2 className="text-2xl font-bold">Important</h2>
          <p className="mt-4 text-sm leading-6 text-slate-300">
            Nu trimite CNP, poze cu acte sau documente sensibile prin formularul public. Pentru început este suficient să ceri oferta, iar consultantul îți spune ce date sunt necesare în mod sigur.
          </p>
          <div className="mt-6">
            <ButtonLink href="/contact?pentru=personal&tip=RCA" variant="secondary">Cere ofertă RCA</ButtonLink>
          </div>
        </section>

        <nav className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-8 text-sm font-semibold sm:flex-row sm:justify-between">
          <Link href="/asigurare-rca" className="text-slate-600 hover:text-slate-950">← Pagina RCA</Link>
          <Link href="/ghid-rca" className="text-slate-950 underline underline-offset-4">Vezi ghidul RCA complet →</Link>
        </nav>
      </article>
    </main>
  );
}
