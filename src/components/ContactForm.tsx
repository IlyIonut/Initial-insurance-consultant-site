"use client";

import { FormEvent, useState } from "react";
import { SITE } from "@/lib/site";

const types = [
  "RCA",
  "CASCO",
  "Locuință",
  "Călătorie",
  "Sănătate / Viață",
  "Asigurări firme",
  "Alt tip de asigurare",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    if (!payload.gdpr) {
      setStatus("error");
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

    if (endpoint) {
      setStatus("loading");
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) throw new Error("Formularul nu a putut fi trimis.");
        setStatus("success");
        form.reset();
        return;
      } catch {
        setStatus("error");
      }
    }

    const message = encodeURIComponent(
      `Bună! Doresc o ofertă de asigurare.\n\nNume: ${payload.name}\nTelefon: ${payload.phone}\nEmail: ${payload.email}\nTip asigurare: ${payload.insuranceType}\nMesaj: ${payload.message || "-"}`
    );

    window.open(`https://wa.me/${SITE.phoneRaw}?text=${message}`, "_blank", "noopener,noreferrer");
    setStatus("success");
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Nume
          <input
            name="name"
            required
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
            placeholder="Nume și prenume"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Telefon
          <input
            name="phone"
            required
            inputMode="tel"
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
            placeholder="07xx xxx xxx"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Email
          <input
            name="email"
            required
            type="email"
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
            placeholder="email@exemplu.ro"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Tip asigurare
          <select
            name="insuranceType"
            required
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
          >
            <option value="">Alege o opțiune</option>
            {types.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-medium text-slate-700">
        Mesaj
        <textarea
          name="message"
          rows={4}
          className="rounded-2xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
          placeholder="Spune-mi pe scurt ce asigurare cauți. Nu trimite date medicale sau documente prin acest formular."
        />
      </label>

      <label className="mt-4 flex gap-3 text-sm leading-6 text-slate-600">
        <input name="gdpr" type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300" />
        <span>
          Sunt de acord să fiu contactat pentru solicitarea transmisă și confirm că nu trimit date sensibile prin acest formular.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Se trimite..." : "Trimite solicitarea"}
      </button>

      {status === "success" && (
        <p className="mt-4 rounded-2xl bg-emerald-50 p-3 text-sm text-emerald-800">
          Solicitarea a fost preluată. Dacă nu ai configurat un endpoint, s-a deschis WhatsApp cu mesajul pregătit.
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 rounded-2xl bg-rose-50 p-3 text-sm text-rose-800">
          Verifică datele și acordul de contact. Dacă problema persistă, scrie-mi direct pe WhatsApp.
        </p>
      )}
    </form>
  );
}
