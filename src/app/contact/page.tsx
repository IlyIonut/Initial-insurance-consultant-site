import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact și cerere ofertă",
  description: "Trimite o solicitare pentru RCA, CASCO, locuință, călătorie, sănătate, viață sau asigurări pentru firme.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Cere o ofertă sau o recomandare inițială
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Completează formularul cu date minime. Pentru date suplimentare, documente sau detalii sensibile, te contactez ulterior pe un canal potrivit.
            </p>

            <div className="mt-8 grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700">
              <p><strong>Telefon:</strong> <a href={`tel:${SITE.phoneRaw}`} className="underline">{SITE.phoneDisplay}</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${SITE.email}`} className="underline">{SITE.email}</a></p>
              <p><strong>Zonă:</strong> {SITE.city}</p>
              <p><strong>Reprezentare:</strong> {SITE.company}</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}
