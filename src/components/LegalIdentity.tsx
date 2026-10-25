import { SITE } from "@/lib/site";
export function LegalIdentity() {
  return <div className="legal-identity">
    <p><strong>{SITE.name}</strong> este denumirea folosită pe acest site pentru prezentarea serviciilor și preluarea solicitărilor.</p>
    {SITE.operatorName && <p>Operatorul site-ului și al datelor din formular: {SITE.operatorName}.</p>}
    {SITE.professionalAddress && <p>Adresă profesională: {SITE.professionalAddress}.</p>}
    {SITE.taxId && <p>Cod de identificare fiscală: {SITE.taxId}.</p>}
    {SITE.tradeRegister && <p>Înregistrare în registrul comerțului: {SITE.tradeRegister}.</p>}
    {SITE.consultantName && <p>Persoană de contact: {SITE.consultantName}.</p>}
    {SITE.intermediaryRole && <p>Calitate profesională: {SITE.intermediaryRole}.</p>}
    {SITE.company && <p>Broker partener: {SITE.company}.</p>}
    {SITE.registration && <p>Înregistrare profesională: {SITE.registration}. Înregistrarea și statutul se verifică în registrele publice ale Autorității de Supraveghere Financiară, prin denumire sau cod.</p>}
    <p>Contact: <a href={`mailto:${SITE.email}`}>{SITE.email}</a>{SITE.phoneRaw && <> · <a href={`tel:+${SITE.phoneRaw}`}>{SITE.phoneDisplay || `+${SITE.phoneRaw}`}</a></>}</p>
  </div>;
}
