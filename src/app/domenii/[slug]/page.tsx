import Link from "next/link";
import { QuestionSection } from "@/components/QuestionSection";
import { industryFaqs } from "@/lib/faq-content";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";
import { SolutionCards } from "@/components/SolutionCards";
import { industries, businessSolutions, solutionHref } from "@/lib/business-content";
import { pageMetadata } from "@/lib/seo";
const industryMetaDescriptions: Record<string, string> = {
  "comert-si-servicii": "Asigurări pentru magazine, saloane și birouri: bunuri, stocuri, răspundere față de clienți și întreruperea activității.",
  "productie-si-ateliere": "Asigurări pentru ateliere și producători: utilaje, stocuri, răspundere pentru produse și pierderi când activitatea se oprește.",
  "it-si-consultanta": "Asigurări pentru firme IT și consultanți: răspundere profesională, riscuri cibernetice și cerințe din contractele cu clienții.",
  horeca: "Asigurări pentru restaurante, cafenele și pensiuni: spații, echipamente, răspundere față de clienți și întreruperea activității.",
  "cabinete-medicale": "Asigurări pentru cabinete medicale: aparatură, răspunderea unității și ce verifici separat la malpraxisul personalului.",
};
export const dynamicParams = false;
export function generateStaticParams(){return industries.map(x=>({slug:x.slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}) {const {slug}=await params;const x=industries.find(x=>x.slug===slug);return x?pageMetadata(`Asigurări pentru ${(x.name.startsWith("IT")||x.name==="HoReCa"?x.name:x.name.toLowerCase())}`,industryMetaDescriptions[x.slug] ?? x.description, `/domenii/${x.slug}`):{};}
export default async function IndustryPage({params}:{params:Promise<{slug:string}>}) {const {slug}=await params;const x=industries.find(x=>x.slug===slug);if(!x)notFound();const solutions=x.solutions.map(s=>businessSolutions.find(b=>b.slug===s)!);
  return <main className="compact-page"><section className="page-hero"><div className="shell"><Breadcrumbs items={[{label:"Domenii",href:"/domenii"},{label:x.name,href:`/domenii/${x.slug}`}]} /><div className="page-hero-layout"><div><p className="eyebrow">ASIGURĂRI DUPĂ ACTIVITATE</p><h1>Asigurări pentru<br />{(x.name.startsWith("IT")||x.name==="HoReCa"?x.name:x.name.toLowerCase())}.</h1><p className="lead">{x.intro}</p></div><div className="page-hero-icon"><Icon name={x.icon} size={90}/></div></div></div></section><section className="section"><div className="shell article-columns"><div className="prose"><h2>Ce contează în acest domeniu</h2><p>{x.detail}</p>{x.slug === "cabinete-medicale" && <p>Pentru polița personalului medical, vezi <Link className="text-link" href={`${solutionHref("raspundere-civila-profesionala")}#malpraxis`}>ce verifici într-o ofertă de asigurare de malpraxis</Link>.</p>}<h2>Ce pregătești pentru început</h2><p>{x.preparation}</p><p>Putem începe discuția din orice județ. Îți explic apoi ce documente sunt necesare, dacă este nevoie de o evaluare a locației și ce condiții propune asigurătorul.</p></div><div className="scenario-card"><p className="eyebrow">TREI ÎNTREBĂRI DE PORNIRE</p><h3>Unde ar conta<br />o protecție în plus?</h3><ul className="check-list">{x.risks.map(r=><li key={r}><Icon name="check" size={18}/><span>{r}</span></li>)}</ul></div></div></section><section className="section process-section"><div className="shell"><div className="section-heading"><p className="eyebrow">SOLUȚII DE ANALIZAT</p><h2>De aici poate începe<br />protecția firmei tale.</h2></div><SolutionCards solutions={solutions}/><div className="info-note">Acestea sunt câteva variante pe care le putem discuta. Înainte să alegi, verificăm ce se poate asigura pentru activitatea ta și în ce condiții.</div></div></section><section className="closing-section"><div className="shell closing-inner"><div><p className="eyebrow">AI DEJA POLIȚE?</p><h2>Să le punem în contextul<br />activității de azi.</h2></div><ButtonLink href="/contact?motiv=analiza" arrow>Analizăm împreună</ButtonLink></div></section><QuestionSection items={industryFaqs[x.slug]}/></main>;
}
