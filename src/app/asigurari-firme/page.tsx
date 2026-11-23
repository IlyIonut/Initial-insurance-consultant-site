import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { FAQ } from "@/components/FAQ";
import { Icon } from "@/components/Icon";
import { SolutionCards } from "@/components/SolutionCards";
import { industries } from "@/lib/business-content";
import { faqs } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Asigurări pentru firme și IMM-uri", "Compară asigurările pentru bunuri, răspundere, flote, culturi agricole și angajați. Vezi ce polițe merită analizate în funcție de activitatea firmei.", "/asigurari-firme");
const businessFaqs = [
  {
    question: "Ce asigurări îi trebuie unei firme mici?",
    answer: "Pornește de la pierderea pe care firma nu și-ar permite să o suporte. Un atelier poate avea nevoie să protejeze utilajele și stocurile; un prestator de servicii poate analiza răspunderea profesională; o firmă care livrează poate analiza protecția vehiculelor. Verifică și cerințele din contractele cu clienții, proprietarul spațiului sau finanțatorul.",
  },
  ...faqs.slice(0, 5),
];

export default function BusinessPage() { return <main className="compact-page"><section className="page-hero"><div className="shell"><Breadcrumbs items={[{label:"Pentru firme",href:"/asigurari-firme"}]} /><div className="page-hero-layout"><div><p className="eyebrow">DE LA RISC LA PROTECȚIE</p><h1>Asigurări pentru firme,<br />pornind de la afacerea ta.</h1><p className="lead">Spune-mi cu ce te ocupi și ce vrei să protejezi: spațiul, echipamentele, mașinile sau echipa. Te ajut să înțelegi ce asigurări pot fi utile firmei tale și ce include fiecare ofertă.</p><div className="hero-actions"><a href="#solutii" className="text-link">Vezi asigurările pentru firmă <Icon name="arrow" size={18} /></a></div></div><div className="page-hero-icon"><Icon name="building" size={95} /></div></div></div></section>
    <section id="solutii" className="section"><div className="shell"><h2 className="hub-solutions-title">Ce vrei să protejezi în firmă?</h2><p className="business-hub-intro">Alege categoria care te interesează și vezi în ce situații te poate ajuta. Verificăm apoi ce variante sunt disponibile pentru activitatea, bunurile și bugetul firmei tale.</p><SolutionCards /></div></section>
    <section className="section process-section"><div className="shell content-grid"><div><p className="eyebrow">AI DEJA ASIGURĂRI?</p><h2 style={{marginTop:20}}>Firma se schimbă.<br />Polițele țin pasul?</h2><p className="business-hub-intro" style={{marginTop:22}}>O investiție, un sediu nou, alte servicii sau un contract important pot modifica nevoile de protecție. Merită să verificăm polițele la reînnoire și când apar astfel de schimbări.</p><ButtonLink href="/contact?motiv=analiza" arrow>Solicită analiza polițelor</ButtonLink></div><div className="content-card"><h2>Ce verificăm împreună</h2><ul className="check-list">{["Activitățile și locațiile declarate", "Valorile bunurilor și sumele maxime care pot fi despăgubite", "Ce parte din daună plătești tu și ce situații sunt excluse", "Cerințele din contractele cu partenerii sau finanțatorii", "Dacă două polițe acoperă același lucru sau lasă o nevoie neacoperită"].map(t=><li key={t}><Icon name="check" size={18}/><span>{t}</span></li>)}</ul></div></div></section>
    <section className="section"><div className="shell"><div className="section-heading"><p className="eyebrow">DUPĂ DOMENIUL TĂU</p><h2>Ce contează<br />pentru domeniul tău?</h2></div><div className="industry-list">{industries.map((x,i)=><Link href={`/domenii/${x.slug}`} className="industry-row" key={x.slug}><span className="industry-index">0{i+1}</span><span className="industry-row-icon"><Icon name={x.icon}/></span><span><strong>{x.name}</strong><small>{x.description}</small></span><Icon name="diagonal" size={20}/></Link>)}</div></div></section>
    <section className="section faq-section"><div className="shell faq-layout"><div><p className="eyebrow">ÎNTREBĂRI DESPRE FIRMA TA</p><h2>Clarificăm înainte<br />{" "}să alegi.</h2></div><FAQ items={businessFaqs} /></div></section></main>; }
