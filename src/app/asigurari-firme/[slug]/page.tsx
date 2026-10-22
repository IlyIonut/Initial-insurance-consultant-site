import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { FAQ } from "@/components/FAQ";
import { Icon } from "@/components/Icon";
import { SolutionCards } from "@/components/SolutionCards";
import { businessSolutions, solutionHref } from "@/lib/business-content";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";
export function generateStaticParams() { return businessSolutions.map(s=>({slug:s.slug})); }
export async function generateMetadata({ params }: {params:Promise<{slug:string}>}) { const {slug}=await params; const s=businessSolutions.find(s=>s.slug===slug); return s ? pageMetadata(s.title,s.description,solutionHref(s.slug)) : {}; }
export default async function SolutionPage({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const s=businessSolutions.find(s=>s.slug===slug); if(!s) notFound();
  const schema={"@context":"https://schema.org","@type":"Service",name:s.title,description:s.description,url:SITE.url+solutionHref(s.slug),provider:{"@id":`${SITE.url}/#organization`},areaServed:["Cluj","Bihor"]};
  return <main><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/><section className="page-hero"><div className="shell"><Breadcrumbs items={[{label:"Pentru firme",href:"/asigurari-firme"},{label:s.name,href:solutionHref(s.slug)}]}/><div className="page-hero-layout"><div><p className="eyebrow">{s.label}</p><h1>{s.title}</h1><p className="lead">{s.intro}</p><div className="hero-actions"><ButtonLink href={`/contact?tip=${encodeURIComponent(s.name)}`} arrow>Discutăm despre această protecție</ButtonLink></div></div><div className="page-hero-icon"><Icon name={s.icon} size={90}/></div></div></div></section>
    <section className="section"><div className="shell"><div className="content-grid"><div className="content-card"><h2>Cui îi poate fi utilă</h2><ul className="check-list">{s.suitable.map(t=><li key={t}><Icon name="check" size={18}/><span>{t}</span></li>)}</ul></div><div className="content-card"><h2>Ce protecții putem analiza</h2><ul className="check-list">{s.coverages.map(t=><li key={t}><Icon name="check" size={18}/><span>{t}</span></li>)}</ul></div></div><div className="info-note"><strong>De verificat înainte de decizie: </strong>{s.note}</div></div></section>
    <section className="section process-section"><div className="shell article-columns"><div className="prose">{s.sections.map(x=><section key={x.title}><h2>{x.title}</h2><p>{x.body}</p></section>)}<h2>Întrebări pentru comparația ofertelor</h2><ul>{s.questions.map(q=><li key={q}>{q}</li>)}</ul></div><aside className="scenario-card"><p className="eyebrow">EXEMPLU ORIENTATIV</p><h3>{s.scenario.title}</h3><p>{s.scenario.body}</p><Link href={`/contact?tip=${encodeURIComponent(s.name)}`} className="text-link">Discutăm situația firmei tale <Icon name="arrow" size={18}/></Link></aside></div></section>
    <section className="section"><div className="shell faq-layout"><div><p className="eyebrow">ÎNTREBĂRI FRECVENTE</p><h2>Ce merită clarificat.</h2><div className="source-note">Repere pentru informare. Acestea nu reprezintă o ofertă sau confirmarea accesului la un produs.{s.sources.map(x=><a key={x.url} href={x.url} target="_blank" rel="noopener noreferrer">{x.title} ↗</a>)}</div></div><FAQ items={s.faqs}/></div></section>
    <section className="closing-section"><div className="shell closing-inner"><div><p className="eyebrow">DE LA INFORMAȚIE LA SITUAȚIA TA</p><h2>Să vedem ce are sens<br />pentru firma ta.</h2></div><ButtonLink href={`/contact?tip=${encodeURIComponent(s.name)}`} arrow>Solicită o discuție</ButtonLink></div></section>
    <section className="section"><div className="shell"><div className="section-heading"><p className="eyebrow">POATE FI RELEVANT ȘI</p><h2>Privim protecția în ansamblu.</h2></div><SolutionCards solutions={businessSolutions.filter(x=>x.slug!==s.slug).slice(0,3)}/></div></section></main>;
}
