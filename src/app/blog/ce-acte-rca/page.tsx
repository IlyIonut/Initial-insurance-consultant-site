import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Ce acte sunt necesare pentru RCA?",
  description: "Ghid simplu despre datele și documentele necesare pentru solicitarea unei oferte RCA.",
};

export default function BlogRcaDocsPage() {
  return (
    <main>
      <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Ghid RCA</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Ce acte sunt necesare pentru RCA?
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Pentru o ofertă RCA, datele necesare pot varia în funcție de situație, dar în general ai nevoie de informații despre proprietar și vehicul. Mai jos ai o listă orientativă.
        </p>

        <div className="mt-10 space-y-8 text-slate-700">
          <h2 className="text-2xl font-bold text-slate-950">Pentru persoană fizică</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7">
            <li>datele proprietarului;</li>
            <li>datele vehiculului;</li>
            <li>talonul sau cartea vehiculului, după caz;</li>
            <li>perioada pentru care dorești asigurarea;</li>
            <li>date de contact pentru transmiterea ofertei.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-950">Pentru firmă</h2>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-7">
            <li>datele firmei;</li>
            <li>datele vehiculului sau ale flotei;</li>
            <li>documente auto relevante;</li>
            <li>persoana de contact;</li>
            <li>perioada dorită.</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-950">Important</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Nu trimite documente sau date sensibile prin formulare nesecurizate. Pentru început este suficient să transmiți solicitarea, iar consultantul îți spune exact ce este necesar.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">Vrei o ofertă RCA?</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">Trimite o cerere scurtă și te contactez pentru detalii.</p>
          <div className="mt-5">
            <ButtonLink href="/contact?tip=RCA">Cere ofertă RCA</ButtonLink>
          </div>
        </div>
      </article>
    </main>
  );
}
