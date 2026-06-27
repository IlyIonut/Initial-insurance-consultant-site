import { AIAdvisor } from "@/components/AIAdvisor";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { InsuranceCard } from "@/components/InsuranceCard";
import { SectionHeader } from "@/components/SectionHeader";
import { faqs, insuranceTypes, SITE } from "@/lib/site";

const steps = [
  "Îmi spui ce tip de asigurare cauți.",
  "Te contactez pentru datele necesare, fără formulare complicate.",
  "Îți explic variantele, acoperirile și limitările importante.",
  "Alegi polița potrivită și rămân disponibil pentru reînnoiri sau întrebări.",
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-100">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div>
            <p className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              Consultant asigurări în {SITE.city}
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
              Asigurări explicate clar, fără timp pierdut.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Te ajut să alegi o poliță potrivită pentru RCA, CASCO, locuință, călătorie, sănătate sau firmă. Nu primești doar un preț, ci și explicații despre ce acoperă polița.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Cere ofertă</ButtonLink>
              <ButtonLink href={`https://wa.me/${SITE.phoneRaw}`} variant="secondary">Scrie-mi pe WhatsApp</ButtonLink>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
              <p className="rounded-2xl bg-white p-4 shadow-sm">Consultanță personalizată</p>
              <p className="rounded-2xl bg-white p-4 shadow-sm">Explicații pe înțelesul tău</p>
              <p className="rounded-2xl bg-white p-4 shadow-sm">Suport la reînnoire</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Cerere rapidă</p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">Primește o recomandare inițială</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Completează datele minime și te contactez pentru detalii. Formularul nu cere documente sau date sensibile.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <AIAdvisor />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Tipuri de asigurări"
          title="Cu ce te pot ajuta"
          description="Începem simplu: alegi categoria, îmi spui situația ta, iar eu îți explic variantele potrivite."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {insuranceTypes.map((item) => (
            <InsuranceCard key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Proces"
            title="Cum funcționează colaborarea"
            description="Scopul este să primești rapid o direcție bună, nu să pierzi timp comparând termeni greu de citit."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-slate-950 text-sm font-bold text-white">{index + 1}</span>
                <p className="mt-5 text-sm leading-6 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Întrebări frecvente</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Întrebări pe care le are aproape orice client</h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Aceste întrebări ajută și la SEO, dar mai ales cresc încrederea înainte ca omul să te contacteze.
          </p>
        </div>
        <FAQ items={faqs} />
      </section>
    </main>
  );
}
