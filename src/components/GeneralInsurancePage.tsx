import { EditorialNote } from "./EditorialNote";
import { FAQ } from "./FAQ";
import { ProductCard, ProductContact, ProductList, ProductPage, ProductSection } from "./ProductPage";
import type { InsuranceContentPage } from "@/lib/general-insurance-content";

const productVisuals: Record<string, { icon: string; tone: "blue" | "mint" | "peach" }> = {
  "/asigurare-casco": { icon: "car", tone: "peach" },
  "/asigurare-locuinta": { icon: "home", tone: "mint" },
  "/asigurare-calatorie": { icon: "plane", tone: "blue" },
  "/asigurare-sanatate": { icon: "heart", tone: "mint" },
  "/asigurare-viata": { icon: "people", tone: "peach" },
  "/asigurare-accidente": { icon: "shield", tone: "blue" },
  "/asigurare-raspundere-civila": { icon: "scale", tone: "mint" },
};

export function GeneralInsurancePage({ content: c }: { content: InsuranceContentPage }) {
  const visual = productVisuals[c.slug] || { icon: "shield", tone: "blue" as const };
  return <ProductPage
    eyebrow={`PENTRU TINE · ${c.eyebrow.toUpperCase()}`}
    title={c.title}
    description={c.description}
    {...visual}
    breadcrumbs={[{ label: "Persoane fizice", href: "/persoane-fizice" }, { label: c.eyebrow, href: c.slug }]}
    facts={c.heroBullets}
    navigation={[{ id: "acoperiri", label: "Acoperiri" }, { id: "alegere", label: "Cum alegi" }, { id: "date-pentru-oferta", label: "Date utile" }, { id: "intrebari", label: "Întrebări frecvente" }]}
  >
    <ProductSection id="acoperiri" number="01" title="Cui i se potrivește și ce poate acoperi">
      <div className="product-grid"><ProductCard title="Cui i se poate potrivi" tone="mint"><ProductList items={c.suitableFor} /></ProductCard><ProductCard title="Acoperiri de analizat" tone="blue"><ProductList items={c.commonCoverages} /></ProductCard></div>
      <p className="product-note"><strong>De reținut: </strong>{c.importantNote}</p>
    </ProductSection>
    <ProductSection id="alegere" number="02" title="Cum alegi o variantă potrivită">
      <div className="product-grid product-detail-grid"><div className="product-copy">{c.sections.map(section => <section key={section.title}><h3>{section.title}</h3><p>{section.body}</p>{section.items && <ProductList items={section.items} />}</section>)}</div><ProductCard title="Ce comparăm în ofertă" tone="peach"><ProductList items={c.compareChecklist} /></ProductCard></div>
    </ProductSection>
    <ProductSection id="date-pentru-oferta" number="03" title="Ce informații pregătești">
      <ProductCard title="Date utile pentru o discuție despre ofertă"><ProductList items={c.offerData} /></ProductCard>
      <p className="product-note">Pentru primul contact sunt suficiente informațiile generale. Nu trimite CNP, date medicale sau copii ale actelor prin formularul public. Documentele necesare se stabilesc ulterior.</p>
    </ProductSection>
    <ProductSection id="intrebari" number="04" title="Întrebări frecvente"><FAQ items={c.faqs} /><EditorialNote /></ProductSection>
    <ProductContact title="Vrei să discutăm situația ta?" description="O singură cerere, cu câteva date generale. Clarificăm apoi nevoile și informațiile necesare." href={`/contact?pentru=personal&tip=${encodeURIComponent(c.eyebrow)}`} label={c.ctaLabel} />
  </ProductPage>;
}
