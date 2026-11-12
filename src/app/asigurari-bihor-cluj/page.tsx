import Link from "next/link";
import { FAQ } from "@/components/FAQ";
import { ProductCard, ProductContact, ProductPage, ProductSection } from "@/components/ProductPage";
import { pageMetadata } from "@/lib/seo";

const path = "/asigurari-bihor-cluj";

export const metadata = pageMetadata(
  "Asigurări în Bihor și Cluj: Ștei, Beiuș și Cluj-Napoca",
  "Asigurări pentru casă, mașină, fermă și firmă în Bihor și Cluj, inclusiv Ștei și Beiuș. Vezi ce informații pregătești și ce compari înainte de ofertă.",
  path,
);

const questions = [
  {
    question: "Locuiesc în Cluj, dar casa pe care vreau s-o asigur e în Bihor. Pot cere o ofertă?",
    answer: "Da. Pentru ofertă contează datele casei pe care vrei să o asiguri: localitatea, construcția și modul în care este folosită. Spune dacă locuiești acolo permanent, o folosești ca locuință de vacanță sau o închiriezi. Acoperirile disponibile se verifică pentru imobilul respectiv.",
  },
  {
    question: "Ce trimit dacă am mai multe parcele sau puncte de lucru?",
    answer: "În prima cerere, trece localitățile și ce vrei să protejezi în fiecare. Pentru o fermă, notează cultura și suprafața aproximativă pentru fiecare zonă. Pentru o firmă, notează activitatea și bunurile de la fiecare punct de lucru. Confirmăm ulterior adresele, suprafețele și valorile necesare ofertării.",
  },
];

export default function RegionalInsurancePage() {
  return (
    <ProductPage
      eyebrow="ASIGURĂRI PENTRU PERSOANE FIZICE ȘI FIRME"
      title="Asigurări în Bihor și Cluj"
      description="Pregătești o reînnoire RCA în Ștei, vrei să asiguri o casă lângă Beiuș sau ai o firmă în Cluj? Pornește de la ce vrei să protejezi și vezi ce informații te ajută să compari ofertele."
      icon="pin"
      tone="mint"
      breadcrumbs={[{ label: "Asigurări în Bihor și Cluj", href: path }]}
      facts={[
        "RCA, CASCO, PAD și asigurări facultative de locuință",
        "Asigurări pentru culturi, bunuri, răspunderi și flote",
        "Preluăm cereri din toată România",
      ]}
      navigation={[
        { id: "stei-beius", label: "Ștei, Beiuș și Bihor" },
        { id: "cluj", label: "Cluj-Napoca și județul Cluj" },
        { id: "intrebari", label: "Întrebări despre ofertă" },
      ]}
    >
      <ProductSection id="stei-beius" number="01" title="Ștei, Beiuș și restul județului Bihor">
        <div className="product-grid">
          <ProductCard title="Reînnoiești RCA pentru mașină?" tone="blue">
            <p>
              Notează data expirării poliței și pregătește talonul pentru etapa de ofertare. Dacă s-au schimbat proprietarul sau datele mașinii, menționează asta de la început. Vezi <Link href="/asigurare-rca#acte">ce acte sunt utile pentru RCA</Link> și când merită să analizezi separat <Link href="/asigurare-casco">o poliță CASCO</Link> pentru propriul vehicul.
            </p>
          </ProductCard>
          <ProductCard title="Ai culturi sau o livadă?" tone="mint">
            <p>
              Grupează parcelele după localitate, cultură și suprafață. Pentru livadă, notează specia și dacă există protecție antigrindină. Așa poți compara ce riscuri și ce sumă pe hectar are fiecare ofertă. Vezi <Link href="/asigurari-firme/agricole#comparatie">cum compari asigurările pentru culturi</Link> și <Link href="/asigurari-firme/agricole#sprijin-prima">când poți verifica sprijinul pentru primă</Link>.
            </p>
          </ProductCard>
        </div>
        <p className="product-note">Pentru o casă în Ștei, Beiuș sau altă localitate din Bihor, notează suprafața actuală și orice extindere sau modificare a structurii. Vezi <Link href="/asigurare-locuinta#date-pentru-oferta">ce date pregătești pentru asigurarea locuinței</Link>.</p>
      </ProductSection>

      <ProductSection id="cluj" number="02" title="Cluj-Napoca și județul Cluj">
        <div className="product-grid">
          <ProductCard title="Asiguri o casă sau un apartament?" tone="mint">
            <p>
              Verifică dacă ai o poliță PAD valabilă și ce ai vrea să incluzi prin facultativă, de exemplu bunurile sau daunele de apă. Dacă locuința este cumpărată cu credit, pregătește cerințele băncii privind suma și beneficiarul poliței. Vezi <Link href="/asigurare-locuinta#alegere">diferența dintre PAD și asigurarea facultativă</Link>.
            </p>
          </ProductCard>
          <ProductCard title="Ai o firmă, un atelier sau o flotă?" tone="peach">
            <p>
              La un spațiu închiriat, separă echipamentele și stocurile proprii de bunurile proprietarului și verifică ce prevede contractul. Dacă firma folosește mai multe vehicule, pornește de la lista lor și datele de expirare. Vezi <Link href="/asigurari-firme">asigurările pentru firme</Link> și <Link href="/asigurari-firme/flote-auto">opțiunile pentru flote</Link>.
            </p>
          </ProductCard>
        </div>
        <p className="product-note">Planifici o deplasare în străinătate? La <Link href="/asigurare-calatorie#alegere">asigurarea de călătorie</Link>, verifică dacă oferta acoperă destinația, toate zilele deplasării și activitățile planificate.</p>
      </ProductSection>

      <ProductSection id="intrebari" number="03" title="Întrebări despre ofertă">
        <FAQ items={questions} />
      </ProductSection>

      <ProductContact
        title="Spune-mi ce vrei să asiguri"
        description="În prima cerere sunt suficiente localitatea, tipul asigurării și datele de contact. Actele se stabilesc ulterior."
        href="/contact"
        label="Cere o ofertă"
      />
    </ProductPage>
  );
}
