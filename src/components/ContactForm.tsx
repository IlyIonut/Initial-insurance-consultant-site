"use client";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";
import { Icon } from "./Icon";
import { businessTypes, personalTypes, privacyVersion } from "@/lib/contact-fields.mjs";
export function ContactForm({ initialAudience = "business", initialType = "" }: { initialAudience?: "business" | "personal"; initialType?: string }) {
  const [audience, setAudience] = useState(initialAudience);
  const [type, setType] = useState(initialType);
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "prepared" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [sentRequestId, setSentRequestId] = useState("");
  const [prepared, setPrepared] = useState("");
  const [copied, setCopied] = useState(false);
  const [sendingAvailable, setSendingAvailable] = useState<boolean | null>(null);
  const lastSubmission = useRef<{ snapshot: string; id: string } | null>(null);
  const submitting = useRef(false);
  useEffect(() => {
    const controller = new AbortController();
    let mounted = true;
    const timeout = window.setTimeout(() => controller.abort(), 8000);
    fetch("/api/contact", { cache: "no-store", signal: controller.signal })
      .then(response => response.ok ? response.json() : Promise.reject())
      .then(data => { if (mounted) setSendingAvailable(data.available === true); })
      .catch(() => { if (mounted) setSendingAvailable(false); })
      .finally(() => window.clearTimeout(timeout));
    return () => { mounted = false; window.clearTimeout(timeout); controller.abort(); };
  }, []);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current || sendingAvailable === null) return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.website) return;
    const message = `Solicitare de consultanță în asigurări\n\nPentru: ${audience === "business" ? "Firmă" : "Persoană fizică"}\nNume: ${data.name}\nEmail: ${data.email}\nTelefon: ${data.phone || "-"}\n${audience === "business" ? `Firmă / activitate: ${data.business || "-"}\n` : ""}Localitate: ${data.city || "-"}\nInteres: ${data.insuranceType}\n${data.renewal ? `Reînnoire: ${data.renewal}\n` : ""}Mesaj: ${data.message || "-"}`;
    setPrepared(message); setCopied(false);
    if (sendingAvailable) {
      const snapshot = JSON.stringify({ ...data, audience });
      if (lastSubmission.current?.snapshot !== snapshot) lastSubmission.current = { snapshot, id: crypto.randomUUID() };
      const requestId = lastSubmission.current!.id;
      submitting.current = true;
      setStatus("loading"); setErrorMessage("");
      try {
        const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, audience, requestId }), signal: AbortSignal.timeout(28000) });
        const result = await response.json();
        if (!response.ok || result.ok !== true || result.stored !== true || result.requestId !== requestId) throw new Error(typeof result.error === "string" ? result.error : "Înregistrarea nu a putut fi confirmată. Încearcă din nou.");
        setSentRequestId(requestId); setStatus("sent"); form.reset(); setType(""); setPrepared(""); lastSubmission.current = null;
      } catch (error) { setErrorMessage(error instanceof Error && error.name !== "TimeoutError" && error.name !== "AbortError" ? error.message : "Serviciul nu a răspuns la timp. Încearcă din nou."); setStatus("error"); }
      finally { submitting.current = false; }
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
  const manualEmail = SITE.requestEmail || SITE.email;
  const emailHref = `mailto:${manualEmail}?subject=${encodeURIComponent("Solicitare asigurări")}&body=${encodeURIComponent(prepared)}`;
  return <form onSubmit={submit} className="contact-form"><div className="form-heading"><span className="eyebrow">PRIMUL PAS</span><h2>Spune-mi ce vrei să protejezi.</h2><p>Începem cu câteva informații. Fără acte la primul contact.</p></div>
    <fieldset className="audience-switch"><legend className="sr-only">Pentru cine soliciți consultanță?</legend>{[["business", "Pentru firmă", "building"], ["personal", "Pentru mine", "people"]].map(([value, label, icon]) => <label key={value} className={audience === value ? "selected" : ""}><input type="radio" name="audience" value={value} checked={audience === value} onChange={() => { setAudience(value as "business" | "personal"); setType(""); setStatus("idle"); }} /><Icon name={icon} size={18} />{label}</label>)}</fieldset>
    <p className="form-required">Câmpurile marcate cu * sunt obligatorii. Restul le completezi dacă îți sunt utile.</p>
    {sendingAvailable === false && <p className="form-availability" role="status">Trimiterea online nu este disponibilă acum. Poți pregăti cererea mai jos și o poți trimite prin email la <a href={`mailto:${manualEmail}`}>{manualEmail}</a>.</p>}
    <noscript><p className="form-availability">Pentru formular este necesar JavaScript. Poți cere o ofertă direct la <a href={`mailto:${manualEmail}`}>{manualEmail}</a>.</p></noscript>
    <div className="form-grid"><label>Numele tău *<input name="name" autoComplete="name" required maxLength={100} placeholder="Nume și prenume" /></label><label>Email *<input name="email" type="email" autoComplete="email" required maxLength={180} placeholder={audience === "business" ? "nume@companie.ro" : "nume@exemplu.ro"} /></label>
    {audience === "business" && <label className="field-wide">Firma și domeniul de activitate *<input name="business" required maxLength={180} placeholder="Ex. atelier de mobilier, magazin, firmă IT" /></label>}
    <label>Telefon <span className="optional">opțional</span><input name="phone" type="tel" autoComplete="tel" maxLength={30} placeholder="07xx xxx xxx" /></label><label>Localitate <span className="optional">opțional</span><input name="city" autoComplete="address-level2" maxLength={100} placeholder="Localitatea ta" /></label>
    <label className="field-wide">Ce te interesează? *<select name="insuranceType" required value={type} onChange={e => setType(e.target.value)}><option value="">Alege o opțiune</option>{options.map(t => <option key={t}>{t}</option>)}</select></label>
    {audience === "business" && <label className="field-wide">Când expiră polițele actuale? <span className="optional">opțional</span><input name="renewal" type="month" /></label>}
    <label className="field-wide">Ce ar fi util să știu? <span className="optional">opțional</span><textarea name="message" rows={3} maxLength={1800} placeholder={audience === "business" ? "Ex. Avem echipamente și un spațiu închiriat. Vrem să verificăm ce protecție ne trebuie." : "Spune-mi pe scurt ce asigurare cauți."} /></label></div>
    <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
    <input type="hidden" name="noticeVersion" value={privacyVersion} />
    <p className="form-privacy-note">Folosim datele pentru a răspunde cererii tale și le păstrăm într-un registru privat. Află cine le poate vedea, cât timp sunt păstrate și ce drepturi ai în <Link href="/confidentialitate">informarea de confidențialitate</Link>. Nu te înscriem automat la reclame sau newsletter.</p>
    <label className="consent"><input type="checkbox" required name="consent" value="accepted" /><span>Am citit și accept <Link href="/termeni-si-conditii">termenii și condițiile formularului</Link> și confirm că am citit <Link href="/confidentialitate">informarea de confidențialitate</Link>. Solicit să fiu contactat pentru această cerere. *</span></label>
    <button type="submit" className="button button-primary form-submit" disabled={status === "loading" || sendingAvailable === null}>{status === "loading" ? "Se trimite…" : sendingAvailable === null ? "Se verifică trimiterea…" : sendingAvailable ? "Trimite cererea" : "Pregătește solicitarea"}</button><p className="form-footnote">Cererea nu te obligă să cumperi, nu încheie o poliță și nu anunță o daună la asigurător. Nu introduce CNP, date medicale sau documente.</p>
    <div aria-live="polite" aria-atomic="true">{status === "sent" && <div className="form-result success"><strong>Cererea ta a fost înregistrată.</strong><p>Te voi contacta ca să discutăm despre asigurarea pe care o cauți. Verifică și folderul Spam pentru răspuns.</p><p>Numărul cererii: <code>{sentRequestId}</code></p></div>}
    {status === "prepared" && <div className="form-result"><strong>Cererea ta este pregătită.</strong><p>Cererea nu a fost trimisă. O poți copia sau descărca și trimite prin email la {manualEmail}.</p><div className="result-actions"><button type="button" onClick={copy}>{copied ? "Copiată ✓" : "Copiază cererea"}</button><button type="button" onClick={download}>Descarcă cererea</button><a href={emailHref}>Continuă prin email</a></div></div>}
    {status === "error" && <div className="form-result error" role="alert"><strong>Înregistrarea cererii nu a putut fi confirmată.</strong><p>{errorMessage || "Încearcă din nou."} Datele completate au rămas în formular. Poți salva o copie sau continua prin email.</p><div className="result-actions"><button type="button" onClick={download}>Descarcă cererea</button><a href={emailHref}>Continuă prin email</a></div></div>}</div></form>;
}
