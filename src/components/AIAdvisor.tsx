"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";

const suggestions = [
  "Am cumpărat o mașină și nu știu dacă am nevoie doar de RCA sau și de CASCO.",
  "Am apartament cu credit și vreau să știu ce asigurare de locuință îmi trebuie.",
  "Plec în vacanță cu familia și vreau să știu ce asigurare de călătorie să aleg.",
  "Am un SRL mic și vreau să îmi protejez activitatea și bunurile.",
];

export function AIAdvisor() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function askAdvisor(event?: FormEvent<HTMLFormElement>, overrideQuestion?: string) {
    event?.preventDefault();

    const finalQuestion = (overrideQuestion ?? question).trim();
    if (!finalQuestion) return;

    setQuestion(finalQuestion);
    setAnswer("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/ai-advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: finalQuestion }),
      });

      const data = (await response.json()) as { answer?: string; error?: string };

      if (!response.ok || data.error) {
        throw new Error(data.error || "Nu am putut genera răspunsul.");
      }

      setAnswer(data.answer || "Nu am primit un răspuns. Te rog folosește formularul de contact.");
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "A apărut o eroare.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="asistent-ai" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Asistent AI</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Întreabă ce asigurare ți s-ar potrivi.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300">
            Scrie pe scurt situația ta, iar asistentul îți oferă o recomandare orientativă pe baza categoriilor disponibile. Oferta finală se stabilește doar după discuția cu consultantul.
          </p>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-300">
            Nu trimite CNP, poze cu documente, date medicale sau informații sensibile. Pentru ofertă exactă, continuăm pe formular sau WhatsApp.
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white p-4 text-slate-950 shadow-2xl sm:p-6">
          <form onSubmit={askAdvisor} className="grid gap-4">
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Întrebarea ta
              <textarea
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                rows={5}
                maxLength={900}
                className="rounded-3xl border border-slate-300 px-4 py-3 text-base font-normal outline-none transition focus:border-slate-950"
                placeholder="Ex: Am un apartament în Cluj, cumpărat prin credit. Ce asigurare de locuință ar trebui să iau în calcul?"
              />
            </label>
            <button
              type="submit"
              disabled={isLoading || question.trim().length < 4}
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Analizez..." : "Primește recomandare"}
            </button>
          </form>

          <div className="mt-5 flex flex-wrap gap-2">
            {suggestions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => void askAdvisor(undefined, item)}
                className="rounded-full border border-slate-200 px-3 py-2 text-left text-xs font-medium text-slate-600 transition hover:border-slate-950 hover:text-slate-950"
              >
                {item}
              </button>
            ))}
          </div>

          {answer && (
            <div className="mt-6 rounded-3xl bg-slate-50 p-5">
              <p className="text-sm font-bold text-slate-950">Răspuns orientativ</p>
              <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-700">{answer}</p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="rounded-full bg-slate-950 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Cere ofertă
                </Link>
                <Link
                  href={`https://wa.me/${SITE.phoneRaw}`}
                  className="rounded-full border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-white"
                >
                  Continuă pe WhatsApp
                </Link>
              </div>
            </div>
          )}

          {error && (
            <p className="mt-6 rounded-3xl bg-rose-50 p-4 text-sm leading-6 text-rose-800">
              {error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
