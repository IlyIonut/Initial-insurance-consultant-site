import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { FAQ } from "@/components/FAQ";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Asigurare locuință în ${SITE.city}`,
  description: "Consultanță pentru asigurarea locuinței: PAD, asigurare facultativă, apartament, casă sau locuință cu credit.",
};

const faqs = [
  {
    question: "Care este diferența dintre PAD și facultativă?",
    answer: "PAD este asigurarea obligatorie pentru anumite riscuri de bază, iar asigurarea facultativă poate adăuga acoperiri suplimentare. Condițiile exacte depind de poliță.",
  },
  {
    question: "Am nevoie de asigurare dacă locuința este cumpărată prin credit?",
    answer: "În multe situații banca solicită o asigurare a locuinței. Este important să verifici cerințele băncii și ce acoperiri sunt potrivite pentru tine.",
  },
  {
    question: "Pot asigura și bunurile din casă?",
    answer: "Da, în funcție de produsul ales pot exista acoperiri pentru bunuri, răspundere civilă față de vecini sau alte riscuri suplimentare.",
  },
];

export default function HomeInsurancePage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Locuință</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Asigurare locuință pentru apartament sau casă
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Îți explic diferența dintre PAD și asigurarea facultativă, ce riscuri poți acoperi și ce aspecte merită verificate înainte de emiterea poliței.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact?tip=Locuință">Cere ofertă locuință</ButtonLink>
            <ButtonLink href={`https://wa.me/${SITE.phoneRaw}?text=Bună! Doresc o ofertă pentru asigurarea locuinței.`} variant="secondary">WhatsApp</ButtonLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">PAD</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">Polița obligatorie acoperă riscuri de bază, în limitele și condițiile prevăzute de legislație și produs.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Facultativă</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">Poate include acoperiri extinse pentru locuință, bunuri, instalații, fenomene naturale sau răspundere civilă.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-slate-950">Întrebări frecvente locuință</h2>
        <div className="mt-6">
          <FAQ items={faqs} />
        </div>
      </section>
    </main>
  );
}
