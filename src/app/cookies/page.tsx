import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politică de cookies",
  description: "Informații generale despre utilizarea cookie-urilor pe site.",
};

export default function CookiesPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950">Politică de cookies</h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-slate-600">
          <p>
            Această pagină este un model de pornire. Completeaz-o după ce decizi ce servicii folosești pentru analiză, formulare, chat sau marketing.
          </p>
          <p>
            În varianta inițială, site-ul nu setează cookie-uri de marketing. Dacă vei adăuga Google Analytics, Meta Pixel sau alte servicii similare, trebuie să actualizezi această politică și mecanismul de consimțământ.
          </p>
        </div>
      </section>
    </main>
  );
}
