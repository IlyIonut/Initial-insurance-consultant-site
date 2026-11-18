import { SITE } from "./site";

export type AgriculturalCrop = {
  id: string;
  label: string;
  title: string;
  description: string;
  checks: string[];
};

export const agriculturalCrops: AgriculturalCrop[] = [
  {
    id: "asigurare-grau",
    label: "Grâu și cereale",
    title: "Asigurare pentru grâu, orz și alte cereale",
    description: "Cultivi grâu, orz, orzoaică, ovăz, secară sau triticale? Verificăm ce fenomene poate acoperi polița și din ce stadiu al culturii începe protecția. Pentru cerealele de toamnă, discutăm separat înghețul și cheltuielile de reînsămânțare. Dacă te interesează seceta la grâul de toamnă, comparăm și varianta bazată pe date meteorologice, acolo unde este disponibilă.",
    checks: [
      "specia, cultura de toamnă sau de primăvară și suprafața pe parcele",
      "valoarea asigurată pe hectar și pierderile pentru care poți primi bani",
      "regulile pentru îngheț, reînsămânțare și momentul recoltării",
    ],
  },
  {
    id: "asigurare-porumb",
    label: "Porumb",
    title: "Asigurare porumb: grindină, furtună și secetă",
    description: "La porumb contează dacă producția este pentru boabe, siloz sau sămânță. Pe lângă grindină și alte fenomene acceptate, putem verifica o protecție distinctă pentru secetă. Unele variante evaluează paguba în teren, iar altele calculează plata după precipitații și temperaturi. Îți explic diferența înainte să compari prețul pe hectar.",
    checks: [
      "destinația culturii, localitatea, suprafața și dacă ai irigații",
      "dacă seceta este inclusă și cum se stabilește despăgubirea",
      "perioada protejată, pragurile de plată și partea din pagubă rămasă în grija ta",
    ],
  },
  {
    id: "asigurare-rapita",
    label: "Rapiță",
    title: "Asigurare pentru rapiță de toamnă sau de primăvară",
    description: "Pentru rapiță, începem cu sezonul de semănat și stadiul plantelor. Verificăm separat grindina, furtuna, înghețul și eventualele cheltuieli pentru reînsămânțare, în condițiile ofertei. Protecția pentru o cultură nereușită nu este automată, iar o poliță pentru grindină nu confirmă că ai și acoperire pentru secetă.",
    checks: [
      "tipul de cultură, data semănatului și suprafața declarată",
      "ce situații de îngheț sau reînsămânțare pot fi incluse",
      "data de început a protecției și condițiile aplicate la daună",
    ],
  },
  {
    id: "asigurare-floarea-soarelui",
    label: "Floarea-soarelui",
    title: "Asigurare pentru floarea-soarelui",
    description: "Dacă vrei să protejezi cultura de floarea-soarelui, pornim de la destinația producției, suprafață și valoarea pe hectar. Comparăm fenomenele incluse și verificăm separat opțiunea pentru deficit de precipitații și caniculă. Aceasta poate avea perioade și reguli de plată diferite față de asigurarea pentru grindină.",
    checks: [
      "cultura pentru consum sau sămânță și parcelele pe care o cultivi",
      "ce include oferta pentru grindină, furtună și alte fenomene",
      "dacă există o variantă pentru secetă și ce date folosește la calcul",
    ],
  },
  {
    id: "asigurare-soia",
    label: "Soia și leguminoase",
    title: "Asigurare pentru soia și alte leguminoase",
    description: "Soia, mazărea, fasolea sau năutul se declară după cultura și utilizarea lor, pentru a verifica ce poate accepta asigurătorul. La soia putem discuta și despre o variantă pentru secetă bazată pe date meteorologice. Aceleași condiții nu se extind automat la celelalte leguminoase.",
    checks: [
      "specia, suprafața și destinația producției",
      "riscurile și stadiile de vegetație acceptate pentru cultura ta",
      "valoarea pe hectar și condițiile distincte pentru secetă, dacă o soliciți",
    ],
  },
  {
    id: "asigurare-cartofi-sfecla",
    label: "Cartofi și sfeclă",
    title: "Asigurare pentru cartofi și sfeclă de zahăr",
    description: "Cartofii și sfecla de zahăr pot avea variante de asigurare cu reguli proprii. Spune-mi cultura, suprafața și ce te preocupă, ca să verificăm fenomene precum grindina sau efectele ploii torențiale. Bolile, dăunătorii și pierderile de calitate nu trebuie considerate incluse fără o confirmare în ofertă.",
    checks: [
      "cultura, parcelele și valoarea producției pe care vrei să o asiguri",
      "ce efecte ale ploii și ce tipuri de pierderi sunt acceptate",
      "eventualele condiții pentru dăunători și calitatea recoltei",
    ],
  },
  {
    id: "asigurare-vita-de-vie",
    label: "Viță-de-vie",
    title: "Asigurare pentru viță-de-vie și recolta de struguri",
    description: "Pentru struguri de vin sau de masă, verificăm ce este protejat: recolta, plantația sau alte bunuri declarate separat. Contează stadiul viței și dacă polița se referă la cantitatea pierdută ori include și anumite pierderi de calitate. Dacă te interesează înghețul târziu de primăvară, îl verificăm expres înainte să alegi.",
    checks: [
      "destinația strugurilor, soiul și suprafața plantației",
      "riscurile incluse pentru rod și condițiile pentru îngheț",
      "documentele necesare dacă vrei să verifici sprijinul pentru costul poliței",
    ],
  },
  {
    id: "asigurare-pomi-fructiferi",
    label: "Livezi și arbuști",
    title: "Asigurare pentru pomi fructiferi, livezi și arbuști",
    description: "Ai o livadă de meri, peri, pruni, cireși, vișini, caiși sau piersici? Ori cultivi afine, zmeură sau alte fructe? Spune-mi speciile și tipul plantației, ca să verificăm variantele disponibile. Asigurarea recoltei, a pomilor, a plaselor antigrindină și a echipamentelor poate avea condiții diferite. Protecția la îngheț nu este disponibilă automat pentru orice specie și plantație.",
    checks: [
      "specia, vârsta și tipul plantației, suprafața și valoarea rodului",
      "existența plaselor antigrindină și ce dotări vrei să incluzi",
      "dacă sunt acoperite pierderile de cantitate, calitate sau înghețul târziu",
    ],
  },
  {
    id: "asigurare-legume",
    label: "Legume în câmp",
    title: "Asigurare pentru legume cultivate în câmp",
    description: "Cultivi tomate, ardei, castraveți, ceapă, varză sau alte legume în câmp? Verificăm dacă specia și pierderile care te preocupă sunt acceptate. La unele variante, protecția pentru grindină poate privi atât cantitatea, cât și calitatea recoltei, după regulile culturii. Nu presupunem că sunt incluse și seceta ori toate celelalte fenomene meteo.",
    checks: [
      "speciile cultivate și suprafața pentru fiecare",
      "calendarul recoltărilor și valoarea pe care vrei să o asiguri",
      "cum se evaluează pierderea de producție și eventualele daune de calitate",
    ],
  },
  {
    id: "asigurare-sere-solarii",
    label: "Sere și solarii",
    title: "Asigurare pentru sere, solarii și culturile din interior",
    description: "Într-o seră sau într-un solar, cultura, structura, folia ori sticla și dotările sunt lucruri diferite. Le declarăm separat și verificăm protecția pentru grindină, furtună sau greutatea zăpezii. Pentru unele riscuri sunt cerute condiții tehnice, precum un sistem de încălzire funcțional și potrivit construcției.",
    checks: [
      "tipul construcției, materialul de acoperire și suprafața",
      "culturile din interior și valorile structurii și dotărilor",
      "cerințele tehnice și ce condiții se aplică la zăpadă sau furtună",
    ],
  },
];

// Nationwide service area, without suggesting local branches or offices.
const counties = [
  "Alba", "Arad", "Argeș", "Bacău", "Bihor", "Bistrița-Năsăud", "Botoșani", "Brașov", "Brăila",
  "Buzău", "Caraș-Severin", "Călărași", "Cluj", "Constanța", "Covasna", "Dâmbovița", "Dolj",
  "Galați", "Giurgiu", "Gorj", "Harghita", "Hunedoara", "Ialomița", "Iași", "Ilfov", "Maramureș",
  "Mehedinți", "Mureș", "Neamț", "Olt", "Prahova", "Satu Mare", "Sălaj", "Sibiu", "Suceava",
  "Teleorman", "Timiș", "Tulcea", "Vaslui", "Vâlcea", "Vrancea",
];

export const agriculturalServiceAreas = [
  { "@type": "Country", name: "România" },
  ...counties.map(name => ({ "@type": "AdministrativeArea", name: `Județul ${name}, România` })),
  { "@type": "AdministrativeArea", name: "Municipiul București, România" },
  ...SITE.seoAreas.filter(area => area["@type"] === "City"),
];

export function agriculturalOfferCatalog(path: string) {
  return {
    "@type": "OfferCatalog",
    name: "Asigurări pentru culturi agricole",
    itemListElement: agriculturalCrops.map(crop => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: crop.title,
        description: crop.description,
        url: `${SITE.url}${path}#${crop.id}`,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: { "@type": "Country", name: "România" },
      },
    })),
  };
}
