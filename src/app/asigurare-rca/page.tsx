import Link from "next/link";
import { EditorialNote } from "@/components/EditorialNote";
import { FAQ } from "@/components/FAQ";
import { ProductCard, ProductContact, ProductList, ProductPage, ProductSection } from "@/components/ProductPage";
import { rcaArticleFaqs } from "@/lib/faq-content";
import { rcaAccidentSteps, rcaAmiabilaRules, rcaBonusPrinciples, rcaBuyingSteps, rcaCoverage, rcaDamageDocs, rcaFaqs, rcaNotCoverage, rcaPolicyChecks, rcaQuoteData } from "@/lib/rca-content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Asigurare RCA și ghid complet — Cluj și Bihor", "RCA pentru persoane fizice și firme: acoperiri, acte, cumpărare, bonus-malus, accident și daună. Toate explicațiile și întrebările frecvente într-o singură pagină.", "/asigurare-rca");
const faqs = [...rcaFaqs, ...Object.values(rcaArticleFaqs).flat()];

export default function RcaPage() {
  return <ProductPage
    eyebrow="AUTO · PENTRU PERSOANE FIZICE ȘI FIRME"
    title="RCA. Toate răspunsurile, în același loc."
    description="Ce acoperă polița, cum o cumperi și ce faci la daună. Un ghid complet, fără să treci dintr-o pagină în alta pentru fiecare întrebare."
    icon="car"
    tone="peach"
    breadcrumbs={[{ label: "Persoane fizice", href: "/persoane-fizice" }, { label: "RCA", href: "/asigurare-rca" }]}
    facts={["Protejează terții păgubiți", "Nu înlocuiește protecția CASCO", "Datele și valabilitatea trebuie verificate"]}
    navigation={[{ id: "acoperiri", label: "Ce acoperă" }, { id: "acte", label: "Acte și cumpărare" }, { id: "bonus-malus", label: "Bonus-malus" }, { id: "daune", label: "Accident și daună" }, { id: "intrebari", label: "Întrebări frecvente" }]}
  >
    <ProductSection id="acoperiri" number="01" title="Ce acoperă RCA. Și unde se oprește." description="RCA este asigurarea obligatorie de răspundere civilă auto, în categoriile și situațiile prevăzute de lege. Ea privește prejudiciile produse altor persoane prin vehiculul asigurat.">
      <div className="product-grid"><ProductCard title="Prejudicii produse terților" tone="mint"><ProductList items={rcaCoverage} /></ProductCard><ProductCard title="Ce nu acoperă propria RCA" tone="peach"><ProductList items={rcaNotCoverage} /></ProductCard></div>
      <p className="product-note"><strong>RCA și CASCO au roluri diferite.</strong> RCA acoperă răspunderea față de terți. <Link href="/asigurare-casco">CASCO</Link> este facultativă și poate proteja propriul vehicul, în condițiile produsului. Chiar dacă ai CASCO, obligația RCA rămâne aplicabilă. Pentru mai multe vehicule ale firmei, poți consulta pagina despre <Link href="/asigurari-firme/flote-auto">flote auto</Link>.</p>
    </ProductSection>
    <ProductSection id="acte" number="02" title="Acte, cumpărare și verificarea poliței" description="Compară ofertele pe aceleași date. Contează prețul, dar și asigurătorul, valabilitatea, corectitudinea poliței și suportul ulterior.">
      <ol className="product-steps">{rcaBuyingSteps.map((step, index) => <li key={step.title}><span aria-hidden="true">{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
      <div className="product-grid"><ProductCard title="Ce date pregătești" tone="blue"><ProductList items={rcaQuoteData} /></ProductCard><ProductCard title="Ce verifici înainte de confirmare" tone="mint"><ProductList items={rcaPolicyChecks} /></ProductCard></div>
      <p className="product-note"><strong>La primul contact, fără acte.</strong> Nu trimite CNP sau fotografii ale documentelor prin formularul public. Pentru înmatriculare, leasing sau regim temporar, documentele se stabilesc pentru situația concretă. Datele proprietarului și utilizatorului trebuie să corespundă actelor și situației legale.</p>
      <p className="product-caption">După emitere, verifică valabilitatea raportată în AIDA, baza administrată de BAAR. Dacă polița nu apare după raportarea datelor sau observi neconcordanțe, cere clarificări asigurătorului ori intermediarului. Cererea de ofertă și plata nu confirmă, singure, că protecția a început.</p>
    </ProductSection>
    <ProductSection id="bonus-malus" number="03" title="Bonus-malus, fără confuzii" description="Istoricul daunelor plătite poate influența prima. Prețul final depinde și de tariful curent și de criteriile de risc ale fiecărui asigurător.">
      <div className="product-grid">{rcaBonusPrinciples.map((item, index) => <ProductCard key={item.title} title={item.title} tone={index % 2 === 0 ? "mint" : "blue"}><p>{item.text}</p></ProductCard>)}</div>
      <p className="product-note"><strong>Clasa și prețul sunt lucruri diferite.</strong> Un bonus păstrat nu garantează același preț ca anul trecut. Tipul și caracteristicile vehiculului, localitatea, vârsta și celelalte criterii ale asigurătorului pot influența tariful. Dacă nu ești de acord cu încadrarea, cere justificarea și corectarea erorilor la asigurătorul care a raportat informațiile.</p>
    </ProductSection>
    <ProductSection id="daune" number="04" title="Ce faci după un accident" description="Mai întâi siguranța, apoi procedura corectă, documentele și avizarea daunei.">
      <ol className="product-steps accident-steps">{rcaAccidentSteps.map((step, index) => <li key={step.title}><span aria-hidden="true">{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
      <div className="product-grid"><details className="product-disclosure"><summary>Când poți folosi constatarea amiabilă<span aria-hidden="true">+</span></summary><ProductList items={rcaAmiabilaRules} /></details><details className="product-disclosure"><summary>Documente utile în dosarul de daună<span aria-hidden="true">+</span></summary><ProductList items={rcaDamageDocs} /></details></div>
      <p className="product-caption">Asigurătorul analizează documentele, răspunderea și cuantumul prejudiciului potrivit legii și poate solicita clarificări. În caz de litigiu, răspunderea sau despăgubirea poate fi stabilită de instanță. Pentru avizarea daunei folosește procedura asigurătorului; formularul de contact al site-ului nu o înlocuiește.</p>
    </ProductSection>
    <ProductSection id="intrebari" number="05" title="Întrebări frecvente despre RCA" description="Decontare directă, clasa B8, leasing, începutul poliței și alte situații practice."><FAQ items={faqs} /><EditorialNote /></ProductSection>
    <ProductContact title="Ai clarificat informațiile? Putem pregăti oferta." description="Trimite o singură solicitare cu datele de contact. Documentele și detaliile vehiculului se stabilesc ulterior, printr-un canal potrivit." href="/contact?pentru=personal&tip=RCA" label="Cere ofertă RCA" />
  </ProductPage>;
}
