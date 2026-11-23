import Link from "next/link";
import { QuestionSection } from "@/components/QuestionSection";
import { serviceFaqs } from "@/lib/faq-content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icon";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { resolveContactType } from "@/lib/contact-fields.mjs";

export const metadata = pageMetadata("Contact și cereri de ofertă pentru asigurări", "Cere o ofertă de asigurare pentru firmă sau pentru tine. Spune ce vrei să protejezi, fără acte la primul contact. Discuți direct cu un consultant.", "/contact");

type ContactSearch = { pentru?: string; tip?: string; motiv?: string };

export default async function ContactPage({ searchParams }: { searchParams: Promise<ContactSearch> }) {
  const params = await searchParams;
  const audience = params.pentru === "personal" ? "personal" : "business";
  const initialType = resolveContactType(audience, typeof params.tip === "string" ? params.tip : "", typeof params.motiv === "string" ? params.motiv : "");
  return <main><div className="shell">
    <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
    <div className="contact-layout"><div className="contact-intro">
      <p className="eyebrow">ÎNCEPEM CU SITUAȚIA TA</p>
      <h1>Cere o ofertă<br />de asigurare.</h1>
      <p>Spune-mi ce ai vrea să asiguri și cum te pot contacta. Poți cere o poliță nouă, o reînnoire sau o analiză a polițelor existente.</p>
    </div><ContactForm key={`${audience}:${initialType}`} initialAudience={audience} initialType={initialType} /><div className="contact-details">
      <div className="contact-checks"><h2 className="contact-subheading">Ce urmează după cerere</h2><ol className="contact-next-steps">
        <li>Clarificăm ce vrei să protejezi și ce informații sunt necesare.</li>
        <li>Verificăm variantele disponibile și comparăm costul, limitele, partea din daună plătită de tine și excluderile.</li>
        <li>Alegi după ce înțelegi oferta. Acoperirea începe conform poliței, după îndeplinirea condițiilor ei.</li>
      </ol></div>
      <div className="contact-channel">
        <h2 className="contact-subheading">Preferi să îmi scrii direct?</h2>
        {SITE.phoneRaw && <a href={`tel:+${SITE.phoneRaw}`}><Icon name="phone" size={20} />{SITE.phoneDisplay || `+${SITE.phoneRaw}`}</a>}
        <a href={`mailto:${SITE.email}`}><Icon name="mail" size={20} />{SITE.email}</a>
        <p className="hero-local"><Icon name="pin" size={18} />Te pot ajuta oriunde în România</p>
      </div>
      <div className="consultant-note">
        {SITE.consultantName && <p><strong>{SITE.consultantName}</strong></p>}
        {SITE.intermediaryRole && <p>{SITE.intermediaryRole}{SITE.registration && ` · ${SITE.registration}`}</p>}
        {SITE.company && <p>Broker partener: {SITE.company}</p>}
        <Link href="/despre#identitate-profesionala">Identitate profesională și cum lucrăm</Link>
      </div>
    </div></div>
  </div><QuestionSection items={serviceFaqs.contact} /></main>;
}
