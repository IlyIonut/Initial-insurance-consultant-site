import Link from "next/link";
import { EditorialNote } from "@/components/EditorialNote";
import { FAQ } from "@/components/FAQ";
import { ProductPage, ProductSection } from "@/components/ProductPage";
import { guides } from "@/lib/guides";
import { insuranceTypes } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Ghiduri de asigurări pentru firme și persoane fizice", "Ce asigurări analizezi pentru un IMM și cum compari ofertele, explicate în aceeași pagină. Informațiile despre fiecare produs sunt reunite în pagina sa.", "/ghiduri");
const generalGuides = guides.filter(guide => guide.slug !== "bunuri-versus-intreruperea-activitatii");

export default function GuidesPage() {
  return <ProductPage eyebrow="GHIDURI UTILE · DECIZII INFORMATE" title="Mai ușor de înțeles. Fără ocoluri." description="Două repere pentru asigurările firmei, explicate aici. Pentru acoperiri, documente și întrebări despre un anumit produs, găsești totul în pagina lui." icon="document" tone="mint" breadcrumbs={[{ label: "Ghiduri utile", href: "/ghiduri" }]} facts={["Pornește de la activitatea reală", "Compară mai mult decât prețul", "Verifică oferta și condițiile complete"]} navigation={generalGuides.map(guide => ({ id: guide.slug, label: guide.category }))}>
    {generalGuides.map((guide, index) => <ProductSection key={guide.slug} id={guide.slug} number={String(index + 1).padStart(2, "0")} title={guide.title} description={guide.intro}>
      <div className="product-grid product-copy">{guide.sections.map(section => <section key={section.title}><h3>{section.title}</h3>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}</div>
      <details className="product-disclosure guide-questions"><summary>Întrebări frecvente despre acest subiect<span aria-hidden="true">+</span></summary><FAQ items={guide.faqs} /></details>
    </ProductSection>)}
    <section className="product-resources"><h2>Cauți informații despre un produs?</h2><p>Acoperirile, detaliile de ofertare și răspunsurile sunt reunite în paginile produselor.</p><div className="product-resource-links">{insuranceTypes.map(type => <Link key={type.href} href={type.href}>{type.title} →</Link>)}<Link href="/asigurari-firme/intreruperea-activitatii#bunuri-si-continuitate">Bunuri și întreruperea activității →</Link><Link href="/asigurari-firme">Toate asigurările pentru firme →</Link></div><EditorialNote /></section>
  </ProductPage>;
}
