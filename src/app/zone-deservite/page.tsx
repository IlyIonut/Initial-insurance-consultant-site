import Link from "next/link";
import { FAQ } from "@/components/FAQ";
import { ProductCard, ProductContact, ProductPage, ProductSection } from "@/components/ProductPage";
import { pageMetadata } from "@/lib/seo";

const path = "/zone-deservite";

export const metadata = pageMetadata(
  "Asigurări în toată România",
  "Află ce date pregătești pentru asigurarea mașinii, locuinței, firmei sau fermei. Preluăm solicitări din toată România.",
  path,
);

const questions = [
  {
    question: "Pot cere o ofertă pentru o casă aflată în altă localitate decât cea în care locuiesc?",
    answer: "Da. Pentru ofertă contează datele casei pe care vrei să o asiguri: localitatea, construcția și modul în care este folosită. Spune dacă locuiești acolo permanent, o folosești ca locuință de vacanță sau o închiriezi. Acoperirile disponibile se verifică pentru imobilul respectiv.",
  },
  {
    question: "Ce trimit dacă am mai multe parcele sau puncte de lucru?",
    answer: "În prima cerere, trece localitățile și ce vrei să protejezi în fiecare. Pentru o fermă, notează cultura și suprafața aproximativă pentru fiecare zonă. Pentru o firmă, notează activitatea și bunurile de la fiecare punct de lucru. Confirmăm ulterior adresele, suprafețele și valorile necesare ofertării.",
  },
];

export default function ServiceAreasPage() {
  return (
    <ProductPage
      eyebrow="ASIGURĂRI PENTRU PERSOANE FIZICE ȘI FIRME"
      title="Asigurări în toată România"
      description="Preluăm cereri de la persoane fizice, firme și ferme din orice județ. Alege ce vrei să protejezi și vezi ce informații pregătești, inclusiv când ai bunuri sau activități în mai multe localități."
      icon="pin"
      tone="mint"
      breadcrumbs={[{ label: "Zone deservite", href: path }]}
      facts={[
        "RCA, CASCO, PAD și asigurări facultative de locuință",
        "Asigurări pentru culturi, bunuri, răspunderi și flote",
        "Ofertarea pornește de la datele bunului sau activității",
      ]}
      navigation={[
        { id: "persoane-fizice", label: "Mașină, locuință și călătorie" },
        { id: "firme-ferme", label: "Firme și ferme" },
        { id: "intrebari", label: "Întrebări despre ofertă" },
      ]}
    >
      <ProductSection id="persoane-fizice" number="01" title="Mașină, locuință și călătorie">
        <div className="product-grid">
          <ProductCard title="Reînnoiești RCA pentru mașină?" tone="blue">
            <p>
              Notează data expirării poliței și pregătește talonul pentru etapa de ofertare. Dacă s-au schimbat proprietarul sau datele mașinii, menționează asta de la început. Vezi <Link href="/asigurare-rca#acte">ce acte sunt utile pentru RCA</Link> și când merită să analizezi separat <Link href="/asigurare-casco">o poliță CASCO</Link> pentru propriul vehicul.
            </p>
          </ProductCard>
          <ProductCard title="Asiguri o casă sau un apartament?" tone="mint">
            <p>
              Notează localitatea, suprafața și eventualele modificări ale construcției. Verifică dacă ai PAD valabilă și ce ai vrea să incluzi prin facultativă, cum ar fi bunurile sau daunele de apă. Dacă locuința este cumpărată cu credit, pregătește cerințele băncii. Vezi <Link href="/asigurare-locuinta#date-pentru-oferta">datele utile pentru asigurarea locuinței</Link>.
            </p>
          </ProductCard>
        </div>
        <p className="product-note">Planifici o deplasare în străinătate? La <Link href="/asigurare-calatorie#alegere">asigurarea de călătorie</Link>, verifică dacă oferta acoperă destinația, toate zilele deplasării și activitățile planificate.</p>
      </ProductSection>

      <ProductSection id="firme-ferme" number="02" title="Firme și ferme">
        <div className="product-grid">
          <ProductCard title="Ai o firmă, un atelier sau o flotă?" tone="peach">
            <p>
              La un spațiu închiriat, separă echipamentele și stocurile proprii de bunurile proprietarului și verifică ce prevede contractul. Dacă firma folosește mai multe vehicule, pornește de la lista lor și datele de expirare. Vezi <Link href="/asigurari-firme">asigurările pentru firme</Link> și <Link href="/asigurari-firme/flote-auto">opțiunile pentru flote</Link>.
            </p>
          </ProductCard>
          <ProductCard title="Ai culturi sau o livadă?" tone="mint">
            <p>
              Grupează parcelele după localitate, cultură și suprafață. Pentru livadă, notează specia și dacă există protecție antigrindină. Așa poți compara ce riscuri și ce sumă pe hectar are fiecare ofertă. Vezi <Link href="/asigurari-firme/agricole#comparatie">cum compari asigurările pentru culturi</Link> și <Link href="/asigurari-firme/agricole#sprijin-prima">când poți verifica sprijinul pentru primă</Link>.
            </p>
          </ProductCard>
        </div>
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
