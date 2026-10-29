import Link from "next/link";
import { notFound } from "next/navigation";
import { EditorialNote } from "@/components/EditorialNote";
import { FAQ } from "@/components/FAQ";
import { ProductCard, ProductContact, ProductList, ProductPage, ProductSection } from "@/components/ProductPage";
import { businessSolutions, solutionHref } from "@/lib/business-content";
import { guides } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export function generateStaticParams() { return businessSolutions.map(solution => ({ slug: solution.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = businessSolutions.find(item => item.slug === slug);
  return solution ? pageMetadata(solution.title, solution.description, solutionHref(solution.slug)) : {};
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = businessSolutions.find(item => item.slug === slug);
  if (!s) notFound();
  const continuityGuide = s.slug === "intreruperea-activitatii" ? guides.find(guide => guide.slug === "bunuri-versus-intreruperea-activitatii") : undefined;
  const navigation = [{ id: "acoperiri", label: "Cui și ce acoperă" }, { id: "comparatie", label: "Cum compari" }, ...(continuityGuide ? [{ id: "bunuri-si-continuitate", label: "Bunuri și continuitate" }] : []), { id: "intrebari", label: "Întrebări frecvente" }];
  const schema = { "@context": "https://schema.org", "@type": "Service", name: s.title, description: s.description, url: SITE.url + solutionHref(s.slug), provider: { "@id": `${SITE.url}/#organization` }, areaServed: { "@type": "Country", name: "România" } };
  return <ProductPage eyebrow={`PENTRU FIRME · ${s.label}`} title={s.title} description={s.intro} icon={s.icon} tone={s.color === "mint" ? "mint" : s.color === "peach" ? "peach" : "blue"} breadcrumbs={[{ label: "Pentru firme", href: "/asigurari-firme" }, { label: s.name, href: solutionHref(s.slug) }]} facts={s.coverages.slice(0, 3)} navigation={navigation}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <ProductSection id="acoperiri" number="01" title="Cui îi poate fi utilă și ce analizăm">
      <div className="product-grid"><ProductCard title="Cui i se poate potrivi" tone="mint"><ProductList items={s.suitable} /></ProductCard><ProductCard title="Protecții de analizat" tone="blue"><ProductList items={s.coverages} /></ProductCard></div>
      <p className="product-note"><strong>De verificat înainte de decizie: </strong>{s.note}</p>
    </ProductSection>
    <ProductSection id="comparatie" number="02" title="Detaliile care fac diferența">
      <div className="product-grid product-detail-grid"><div className="product-copy">{s.sections.map(section => <section key={section.title}><h3>{section.title}</h3><p>{section.body}</p></section>)}</div><ProductCard title="Întrebări pentru comparația ofertelor" tone="peach"><ProductList items={s.questions} /></ProductCard></div>
      <div className="product-example"><span>EXEMPLU ORIENTATIV</span><h3>{s.scenario.title}</h3><p>{s.scenario.body}</p></div>
    </ProductSection>
    {continuityGuide && <ProductSection id="bunuri-si-continuitate" number="03" title="Bunurile sunt asigurate. Dar activitatea?" description={continuityGuide.intro}><div className="product-grid product-copy">{continuityGuide.sections.map(section => <section key={section.title}><h3>{section.title}</h3>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}</div></ProductSection>}
    <ProductSection id="intrebari" number={continuityGuide ? "04" : "03"} title="Întrebări frecvente"><FAQ items={[...s.faqs, ...(continuityGuide?.faqs || [])]} /><EditorialNote /></ProductSection>
    <p className="product-related">Alte protecții pentru firmă: {businessSolutions.filter(item => item.slug !== s.slug).slice(0, 3).map(item => <Link key={item.slug} href={solutionHref(item.slug)}>{item.name}</Link>)}</p>
    <ProductContact title="Cum se aplică în firma ta?" description="Pornim de la activitatea și polițele existente. Nu sunt necesare documente sensibile în formularul inițial." href={`/contact?tip=${encodeURIComponent(s.name)}`} label="Solicită o discuție" />
  </ProductPage>;
}
