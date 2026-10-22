import Link from "next/link";
import { ButtonLink } from "./ButtonLink";
import { Breadcrumbs } from "./Breadcrumbs";
import { FAQ } from "./FAQ";
import { ContactForm } from "./ContactForm";
import { Icon } from "./Icon";
import type { InsuranceContentPage } from "@/lib/general-insurance-content";
function CheckList({items}:{items:string[]}){return <ul className="check-list">{items.map(t=><li key={t}><Icon name="check" size={18}/><span>{t}</span></li>)}</ul>;}
export function GeneralInsurancePage({content:c}:{content:InsuranceContentPage}) {
 const href=`/contact?pentru=personal&tip=${encodeURIComponent(c.eyebrow)}`;
 return <main><section className="page-hero"><div className="shell"><Breadcrumbs items={[{label:"Persoane fizice",href:"/persoane-fizice"},{label:c.eyebrow,href:c.slug}]}/><p className="eyebrow">PENTRU TINE · {c.eyebrow.toUpperCase()}</p><h1>{c.title}</h1><p className="lead">{c.description}</p><div className="hero-actions"><ButtonLink href={href} arrow>{c.ctaLabel}</ButtonLink><Link href="/persoane-fizice" className="text-link">Toate asigurările personale <Icon name="arrow" size={18}/></Link></div></div></section>
 <section className="section"><div className="shell"><div className="content-grid"><div className="content-card"><h2>Cui i se poate potrivi</h2><CheckList items={c.suitableFor}/></div><div className="content-card"><h2>Acoperiri de analizat</h2><CheckList items={c.commonCoverages}/></div></div><div className="info-note"><strong>De reținut: </strong>{c.importantNote}</div></div></section>
 <section className="section process-section"><div className="shell article-columns"><div className="prose">{c.sections.map(s=><section key={s.title}><h2>{s.title}</h2><p>{s.body}</p>{s.items&&<CheckList items={s.items}/>}</section>)}</div><aside className="content-card"><h2>Ce comparăm în ofertă</h2><CheckList items={c.compareChecklist}/></aside></div></section>
 <section className="section"><div className="shell article-columns"><div><p className="eyebrow">DATE PENTRU OFERTĂ</p><h2 style={{margin:"20px 0 25px"}}>Pregătim informațiile<br />necesare, pas cu pas.</h2><CheckList items={c.offerData}/><div className="info-note">Pentru primul contact sunt suficiente informațiile generale. Nu trimite CNP, date medicale sau copii ale actelor prin formularul public.</div></div><ContactForm initialAudience="personal" initialType={c.eyebrow}/></div></section>
 <section className="section faq-section"><div className="shell faq-layout"><div><p className="eyebrow">ÎNTREBĂRI FRECVENTE</p><h2 style={{marginTop:20}}>Înainte să alegi.</h2></div><FAQ items={c.faqs}/></div></section></main>;
}
