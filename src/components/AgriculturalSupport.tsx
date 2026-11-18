import { ProductCard, ProductSection } from "./ProductPage";

export function AgriculturalSupport({ number = "03" }: { number?: string }) {
  return <ProductSection id="sprijin-prima" number={number} title="Sprijin pentru costul poliței: APIA și AFIR" description="Poți primi înapoi o parte din costul eligibil al poliței, numit și primă de asigurare, dacă îndeplinești regulile programului. Acest sprijin este separat de despăgubirea pe care o ceri asigurătorului pentru o pagubă la culturi.">
    <div className="product-grid">
      <ProductCard title="APIA: struguri pentru vin" tone="mint">
        <p>Intervenția IS-V-03 poate acoperi <strong>până la 80%</strong> din costul eligibil al poliței pentru anumite pierderi climatice asimilate dezastrelor naturale sau <strong>până la 50%</strong> pentru alte acoperiri eligibile, în funcție de poliță. Acestea sunt procente maxime, nu sume garantate. Sprijinul aprobat poate fi mai mic, în funcție de bugetul programului.</p>
        <p>Se verifică inclusiv minimum 0,1 ha, soiurile pentru vin, înscrierea în Registrul Plantațiilor Viticole, declararea la APIA și identificarea parcelelor în poliță.</p>
        <p>Termenul publicat pentru 2026 a fost <strong>15 octombrie 2026</strong>, cu transmitere online. Pentru o cerere viitoare se verifică regulile și calendarul aplicabile.</p>
      </ProductCard>
      <ProductCard title="AFIR: verifică programul și sesiunea" tone="blue">
        <p>Submăsura 17.1 prevede <strong>70%</strong> din costul eligibil al poliței deja plătite; documentația consultată privește sesiunea 2025. Procentul nu confirmă existența unei sesiuni deschise în prezent.</p>
        <p>Pentru DR-31, documentația consultativă identificată prevede <strong>50%</strong>. Depunerea și condițiile efective se confirmă prin ghidul final și anunțul de lansare; această informație nu reprezintă confirmarea unui apel deschis.</p>
      </ProductCard>
    </div>
    <p className="product-note"><strong>Pașii de bază: </strong>verifici eligibilitatea, închei și achiți polița, păstrezi contractul și dovada plății, apoi depui cererea și documentele cerute de instituția competentă. Aprobarea și suma finală se stabilesc după verificări.</p>
    <p className="product-note">Pentru organizațiile de producători din sectorul legume-fructe există reguli APIA distincte, prin programe operaționale. Informații verificate la <time dateTime="2026-11-03">3 noiembrie 2026</time>; condițiile se reconfirmă înainte de ofertare și depunere.</p>
  </ProductSection>;
}
