import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { SITE } from "@/lib/site";
import { rcaGuideCards, rcaHighlights } from "@/lib/rca-content";

export const metadata: Metadata = {
  title: "Ghid RCA | Informații utile înainte de ofertă",
  description:
    "Ghid RCA cu explicații despre ce acoperă asigurarea obligatorie auto, cum cumperi RCA, bonus-malus, constatare amiabilă și dosar de daună.",
};

export default function RcaGuideIndexPage() {
  return (
    <main>
      <section className="bg-gradient-to-b from-white to-slate-100">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Ghid RCA</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Tot ce trebuie să înțelegi despre RCA, pe scurt.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Am organizat informațiile importante despre RCA în pagini scurte, utile pentru șoferi, proprietari de vehicule și firme. Ghidul te ajută să întrebi mai bine înainte de ofertă.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact?tip=RCA">Cere ofertă RCA</ButtonLink>
            <ButtonLink href={`https://wa.me/${SITE.phoneRaw}?text=Bună! Doresc să discut despre RCA.`} variant="secondary">
              Întreabă pe WhatsApp
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Pe scurt"
          title="Idei de reținut despre RCA"
          description="RCA este obligatorie, dar asta nu înseamnă că trebuie cumpărată fără să verifici datele și condițiile poliței."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {rcaHighlights.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-950">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Pagini RCA"
            title="Alege subiectul care te interesează"
            description="Aceste pagini pot fi folosite și ca articole SEO pentru clienții care caută răspunsuri concrete pe Google."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rcaGuideCards.map((card) => (
              <Link key={card.href} href={card.href} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-md">
                <h2 className="text-lg font-bold text-slate-950">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
                <p className="mt-5 text-sm font-semibold text-slate-950">Deschide pagina →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-xl font-bold text-slate-950">Notă importantă</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Informațiile sunt educaționale și trebuie verificate cu legislația și condițiile asigurătorilor valabile la momentul solicitării. Pentru o ofertă finală, discutăm pe datele concrete ale vehiculului și ale proprietarului.
          </p>
        </div>
      </section>
    </main>
  );
}
