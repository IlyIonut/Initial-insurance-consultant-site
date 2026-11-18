import Link from "next/link";
import { EditorialNote } from "@/components/EditorialNote";
import { FAQ } from "@/components/FAQ";
import { ProductCard, ProductContact, ProductList, ProductPage, ProductSection } from "@/components/ProductPage";
import { rcaArticleFaqs } from "@/lib/faq-content";
import { rcaAccidentSteps, rcaAmiabilaRules, rcaBonusPrinciples, rcaBuyingSteps, rcaCoverage, rcaDamageDocs, rcaFaqs, rcaNotCoverage, rcaPolicyChecks, rcaQuoteData } from "@/lib/rca-content";
import { insuranceServiceSchema, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Asigurare RCA: preț, acte și reînnoire", "Află de ce depinde prețul RCA, cum compari ofertele pe aceeași perioadă și ce acte pregătești pentru o poliță nouă sau o reînnoire.", "/asigurare-rca");
const faqs = [...rcaFaqs, ...Object.values(rcaArticleFaqs).flat()];

export default function RcaPage() {
  const schema = insuranceServiceSchema("Asigurare RCA pentru persoane fizice și firme", "Cere o ofertă RCA și află ce date pregătești, cum compari prețurile și ce verifici înainte de emitere.", "/asigurare-rca");
  return <ProductPage
    eyebrow="AUTO · PENTRU PERSOANE FIZICE ȘI FIRME"
    title="Asigurare RCA: ofertă, reînnoire și pașii după un accident"
    description="Află cum compari ofertele de asigurare auto obligatorie (RCA), ce acte pregătești la reînnoire, cum se aplică bonus-malus și ce faci după un accident."
    icon="car"
    tone="peach"
    breadcrumbs={[{ label: "Persoane fizice", href: "/persoane-fizice" }, { label: "RCA", href: "/asigurare-rca" }]}
    facts={["Acoperă daunele produse altor persoane", "Pentru daunele la mașina ta, verificăm separat CASCO", "Verificăm datele și momentul în care începe protecția"]}
    navigation={[{ id: "acoperiri", label: "Ce acoperă" }, { id: "acte", label: "Acte și reînnoire" }, { id: "bonus-malus", label: "Preț și bonus-malus" }, { id: "daune", label: "Accident și daună" }, { id: "intrebari", label: "Întrebări frecvente" }]}
  >
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <ProductSection id="acoperiri" number="01" title="Ce acoperă RCA. Și unde se oprește." description="Dacă produci un accident cu vehiculul asigurat, RCA acoperă daunele provocate altor persoane, în limitele legii. Este obligatorie pentru categoriile de vehicule și situațiile prevăzute de lege.">
      <div className="product-grid"><ProductCard title="Daune produse altor persoane" tone="mint"><ProductList items={rcaCoverage} /></ProductCard><ProductCard title="Ce nu acoperă propria RCA" tone="peach"><ProductList items={rcaNotCoverage} /></ProductCard></div>
      <p className="product-note"><strong>RCA și CASCO au roluri diferite.</strong> RCA se referă la daunele pe care le produci altora cu vehiculul asigurat. <Link href="/asigurare-casco">CASCO</Link> este opțională și poate acoperi daunele la mașina ta, în condițiile poliței. Ai nevoie în continuare de RCA, chiar dacă alegi și CASCO. Pentru mai multe vehicule ale firmei, poți consulta pagina despre <Link href="/asigurari-firme/flote-auto">flote auto</Link>.</p>
    </ProductSection>
    <ProductSection id="acte" number="02" title="Ce acte sunt necesare pentru o ofertă RCA?" description="Pentru un vehicul deja înmatriculat, pregătește datele proprietarului sau ale firmei, talonul și, dacă este necesar, cartea de identitate a vehiculului. La reînnoire, verifică data exactă la care expiră polița și semnalează orice schimbare de proprietar sau de date ale vehiculului.">
      <ol className="product-steps">{rcaBuyingSteps.map((step, index) => <li key={step.title}><span aria-hidden="true">{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
      <div className="product-grid"><ProductCard title="Ce date pregătești" tone="blue"><ProductList items={rcaQuoteData} /></ProductCard><ProductCard title="Ce verifici înainte de confirmare" tone="mint"><ProductList items={rcaPolicyChecks} /></ProductCard></div>
      <p className="product-note"><strong>La primul contact, fără acte.</strong> Nu trimite CNP sau fotografii ale documentelor prin formularul public. Pentru înmatriculare, leasing sau regim temporar, documentele se stabilesc pentru situația concretă. Datele proprietarului și utilizatorului trebuie să corespundă actelor și situației legale.</p>
      <p className="product-caption">După emitere, verifică valabilitatea raportată în AIDA, baza administrată de BAAR. Dacă polița nu apare după raportarea datelor sau observi neconcordanțe, cere clarificări asigurătorului ori intermediarului. Cererea de ofertă și plata nu confirmă, singure, că protecția a început.</p>
    </ProductSection>
    <ProductSection id="bonus-malus" number="03" title="Cât costă RCA și cum contează bonus-malus?" description="Prețul depinde de vehicul, datele proprietarului, perioada aleasă și criteriile asigurătorului. Bonus-malus este sistemul prin care istoricul daunelor plătite poate aduce o reducere sau o majorare a costului.">
      <div className="product-grid">{rcaBonusPrinciples.map((item, index) => <ProductCard key={item.title} title={item.title} tone={index % 2 === 0 ? "mint" : "blue"}><p>{item.text}</p></ProductCard>)}</div>
      <p className="product-note"><strong>Clasa și prețul sunt lucruri diferite.</strong> Un bonus păstrat nu garantează același preț ca anul trecut. Tipul și caracteristicile vehiculului, localitatea, vârsta și celelalte criterii ale asigurătorului pot influența tariful. Dacă nu ești de acord cu încadrarea, cere justificarea și corectarea erorilor la asigurătorul care a raportat informațiile.</p>
      <p className="product-note"><strong>Cauți un RCA mai ieftin?</strong> Compară suma totală pentru același vehicul, aceeași dată de început și aceeași perioadă. Verifică separat decontarea directă: opțiunea prin care, în condițiile legii, poți cere despăgubirea propriului asigurător când alt vehicul îți avariază mașina. Compară și costul ei. Dacă plata poate fi eșalonată, compară totalul datorat, nu doar prima rată.</p>
    </ProductSection>
    <ProductSection id="daune" number="04" title="Ce faci după un accident" description="Verifică mai întâi siguranța persoanelor, apoi pașii pentru documente și anunțarea daunei.">
      <ol className="product-steps accident-steps">{rcaAccidentSteps.map((step, index) => <li key={step.title}><span aria-hidden="true">{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
      <div className="product-grid"><details className="product-disclosure"><summary>Când poți folosi constatarea amiabilă<span aria-hidden="true">+</span></summary><ProductList items={rcaAmiabilaRules} /></details><details className="product-disclosure"><summary>Documente utile în dosarul de daună<span aria-hidden="true">+</span></summary><ProductList items={rcaDamageDocs} /></details></div>
      <p className="product-caption">Asigurătorul verifică documentele, cine răspunde pentru accident și valoarea pagubei și poate cere clarificări. Dacă există un litigiu, instanța poate stabili răspunderea sau despăgubirea. Pentru a anunța dauna, urmează procedura asigurătorului; formularul site-ului nu deschide un dosar de daună.</p>
    </ProductSection>
    <ProductSection id="intrebari" number="05" title="Întrebări frecvente despre RCA" description="Decontare directă, clasa B8, leasing, începutul poliței și alte situații practice."><FAQ items={faqs} /><EditorialNote /></ProductSection>
    <ProductContact title="Vrei să comparăm ofertele RCA?" description="Lasă-mi datele de contact și spune-mi dacă ai nevoie de o poliță nouă sau de reînnoire. Îți explic apoi ce informații sunt necesare pentru ofertă." href="/contact?pentru=personal&tip=RCA" label="Cere ofertă RCA" />
  </ProductPage>;
}
