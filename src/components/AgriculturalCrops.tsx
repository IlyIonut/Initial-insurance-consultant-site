import Link from "next/link";
import { agriculturalCrops } from "@/lib/agricultural-crops";
import { ProductList, ProductSection } from "./ProductPage";

export function AgriculturalCrops() {
  return <ProductSection
    id="culturi-agricole"
    number="02"
    title="Ce cultură vrei să asiguri?"
    description="Alege cultura ta și vezi ce merită verificat pentru ofertă. Disponibilitatea și condițiile se confirmă pentru specia, parcela și sezonul declarate."
  >
    <nav className="crop-links" aria-label="Asigurări după cultură">
      {agriculturalCrops.map(crop => <a key={crop.id} href={`#${crop.id}`}>{crop.label}</a>)}
    </nav>
    <div className="product-grid crop-grid">
      {agriculturalCrops.map(crop => <article className="product-card crop-guide" id={crop.id} key={crop.id} aria-labelledby={`${crop.id}-title`}>
        <h3 id={`${crop.id}-title`}>{crop.title}</h3>
        <p>{crop.description}</p>
        <p className="crop-check-label">Ce verificăm pentru cultura ta:</p>
        <ProductList items={crop.checks} />
      </article>)}
    </div>
    <p className="product-note">Ai mai multe culturi sau parcele în județe diferite? Le putem analiza împreună, cu valorile și condițiile fiecăreia. Spune-mi cultura, localitatea și suprafața aproximativă în <Link href="/contact?tip=Asigur%C4%83ri%20agricole">cererea de ofertă pentru asigurări agricole</Link>. La primul contact nu ai nevoie să trimiți acte.</p>
  </ProductSection>;
}
