import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politică de confidențialitate",
  description: "Informații generale despre datele colectate prin formularul de contact.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950">Politică de confidențialitate</h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-slate-600">
          <p>
            Această pagină este un model de pornire și trebuie adaptată cu datele reale ale operatorului, firma/brokerul prin care lucrezi și modul exact de prelucrare a datelor.
          </p>
          <p>
            Prin formularul de contact putem colecta nume, telefon, email, tipul asigurării solicitate și mesajul transmis voluntar. Aceste date sunt folosite pentru a răspunde solicitării tale.
          </p>
          <p>
            Nu transmite prin formular date medicale, copii de documente, CNP sau alte date sensibile. Pentru informații suplimentare, vei fi contactat ulterior pe un canal adecvat.
          </p>
          <p>
            Pentru întrebări legate de datele tale, ne poți contacta la <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
