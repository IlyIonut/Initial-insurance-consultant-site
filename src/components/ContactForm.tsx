"use client";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { Icon } from "./Icon";
const businessTypes = ["Analiza polițelor existente", "Bunuri și echipamente", "Răspundere civilă / profesională", "Flote auto", "Sănătate pentru angajați", "Întreruperea activității", "Riscuri cibernetice", "Nu știu încă ce mi se potrivește"];
const personalTypes = ["RCA", "CASCO", "Locuință", "Călătorie", "Sănătate", "Viață", "Accidente", "Răspundere civilă"];
export function ContactForm({ initialAudience = "business", initialType = "" }: { initialAudience?: "business" | "personal"; initialType?: string }) {
  const [audience, setAudience] = useState(initialAudience);
  const [type, setType] = useState(initialType);
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "prepared" | "error">("idle");
  const [prepared, setPrepared] = useState("");
  const [copied, setCopied] = useState(false);
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "";
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selectedAudience = params.get("pentru") === "personal" ? "personal" : initialAudience;
    setAudience(selectedAudience);
    const value = params.get("tip") || initialType;
    if (params.get("motiv") === "analiza") setType("Analiza polițelor existente");
    else if (value) {
      const options = selectedAudience === "personal" ? personalTypes : businessTypes;
      setType(options.find(t => t.toLowerCase().includes(value.toLowerCase()) || value.toLowerCase().includes(t.toLowerCase())) || (value.toLowerCase().includes("răspundere") ? (selectedAudience === "business" ? "Răspundere civilă / profesională" : "Răspundere civilă") : ""));
    }
  }, [initialAudience, initialType]);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.website) return;
    const message = `Solicitare de consultanță în asigurări\n\nPentru: ${audience === "business" ? "Firmă" : "Persoană fizică"}\nNume: ${data.name}\nEmail: ${data.email}\nTelefon: ${data.phone || "-"}\n${audience === "business" ? `Firmă / activitate: ${data.business || "-"}\n` : ""}Localitate: ${data.city || "-"}\nInteres: ${data.insuranceType}\n${data.renewal ? `Reînnoire: ${data.renewal}\n` : ""}Mesaj: ${data.message || "-"}`;
    setPrepared(message); setCopied(false);
    if (endpoint) {
      setStatus("loading");
      try {
        const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, audience }) });
        if (!response.ok) throw new Error("delivery");
        setStatus("sent"); form.reset(); setType("");
      } catch { setStatus("error"); }
      return;
    }
    setStatus("prepared");
  }
  function download() {
    const url = URL.createObjectURL(new Blob([prepared], { type: "text/plain;charset=utf-8" }));
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = "solicitare-asigurari.txt"; anchor.click(); URL.revokeObjectURL(url);
  }
  async function copy() { try { await navigator.clipboard.writeText(prepared); setCopied(true); } catch { setCopied(false); } }
  const options = audience === "business" ? businessTypes : personalTypes;
  return <form onSubmit={submit} className="contact-form"><div className="form-heading"><span className="eyebrow">PRIMUL PAS</span><h2>Spune-mi ce vrei să protejezi.</h2><p>Începem cu câteva informații. Fără acte la primul contact.</p></div>
    <fieldset className="audience-switch"><legend className="sr-only">Pentru cine soliciți consultanță?</legend>{[["business", "Pentru firmă", "building"], ["personal", "Pentru mine", "people"]].map(([value, label, icon]) => <label key={value} className={audience === value ? "selected" : ""}><input type="radio" name="audience" value={value} checked={audience === value} onChange={() => { setAudience(value as "business" | "personal"); setType(""); setStatus("idle"); }} /><Icon name={icon} size={18} />{label}</label>)}</fieldset>
    <div className="form-grid"><label>Numele tău<input name="name" autoComplete="name" required maxLength={100} placeholder="Nume și prenume" /></label><label>Email<input name="email" type="email" autoComplete="email" required maxLength={180} placeholder="nume@companie.ro" /></label>
    {audience === "business" && <label className="field-wide">Firma și domeniul de activitate<input name="business" required maxLength={180} placeholder="Ex. atelier de mobilier, magazin, firmă IT" /></label>}
    <label>Telefon <span className="optional">opțional</span><input name="phone" type="tel" autoComplete="tel" maxLength={30} placeholder="07xx xxx xxx" /></label><label>Localitate <span className="optional">opțional</span><input name="city" autoComplete="address-level2" maxLength={100} placeholder="Ex. Cluj-Napoca" /></label>
    <label className="field-wide">Ce te interesează?<select name="insuranceType" required value={type} onChange={e => setType(e.target.value)}><option value="">Alege o opțiune</option>{options.map(t => <option key={t}>{t}</option>)}</select></label>
    {audience === "business" && <label className="field-wide">Când expiră polițele actuale? <span className="optional">opțional</span><input name="renewal" type="month" /></label>}
    <label className="field-wide">Ce ar fi util să știu? <span className="optional">opțional</span><textarea name="message" rows={3} maxLength={1800} placeholder={audience === "business" ? "Ex. Avem echipamente și un spațiu închiriat. Vrem să verificăm ce protecție ne trebuie." : "Spune-mi pe scurt ce asigurare cauți."} /></label></div>
    <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <label className="consent"><input type="checkbox" required name="consent" value="accepted" /><span>Am citit <Link href="/confidentialitate">politica de confidențialitate</Link> și sunt de acord să fiu contactat în legătură cu solicitarea mea.</span></label>
    <button type="submit" className="button button-primary form-submit" disabled={status === "loading"}>{status === "loading" ? "Se trimite…" : endpoint ? "Trimite solicitarea" : "Pregătește solicitarea"}<Icon name="arrow" size={19} /></button><p className="form-footnote">Fără obligația de a încheia o poliță. Nu introduce CNP, date medicale sau documente.</p>
    <div aria-live="polite">{status === "sent" && <div className="form-result success"><strong>Solicitarea a fost trimisă.</strong><p>Te voi contacta pentru a clarifica detaliile.</p></div>}
    {status === "prepared" && <div className="form-result"><strong>Cererea ta este pregătită.</strong><p>O poți copia sau descărca. Nu a fost transmisă automat.</p><div className="result-actions"><button type="button" onClick={copy}>{copied ? "Copiată ✓" : "Copiază cererea"}</button><button type="button" onClick={download}>Descarcă cererea</button>{SITE.phoneRaw && <a target="_blank" rel="noopener noreferrer" href={`https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(prepared)}`}>Continuă pe WhatsApp ↗</a>}{SITE.email && <a href={`mailto:${SITE.email}?subject=${encodeURIComponent("Solicitare asigurări")}&body=${encodeURIComponent(prepared)}`}>Continuă prin email ↗</a>}</div></div>}
    {status === "error" && <div className="form-result error"><strong>Solicitarea nu a putut fi trimisă.</strong><p>Poți salva cererea și încerca din nou.</p><button type="button" onClick={download}>Descarcă cererea</button></div>}</div></form>;
}
