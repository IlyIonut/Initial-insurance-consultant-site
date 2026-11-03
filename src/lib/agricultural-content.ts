import type { BusinessSolution } from "./business-content";

export const agriculturalSolution: BusinessSolution = {
  slug: "agricole",
  name: "Asigurări agricole",
  title: "Asigurări agricole pentru culturi, vii și livezi",
  seoTitle: "Asigurări agricole, culturi și sprijin APIA / AFIR",
  description: "Asigurări agricole în România: culturi, vii, livezi și sere. Grindină, secetă și sprijin APIA/AFIR pentru prima eligibilă, explicate pe scurt.",
  intro: "Un sezon de muncă depinde și de vreme. Analizăm protecția culturilor de câmp, a viilor, livezilor și legumelor, precum și a serelor și solariilor. Pornim de la ce cultivi, unde și pe ce suprafață, apoi clarificăm riscurile și condițiile potrivite fermei tale.",
  icon: "leaf",
  color: "mint",
  label: "PROTECȚIA CULTURILOR",
  suitable: [
    "Fermieri și exploatații cu cereale, plante oleaginoase sau alte culturi de câmp",
    "Viticultori și producători de fructe",
    "Legumicultori cu producție în câmp, sere sau solarii",
    "Ferme care vor să revizuiască protecția înaintea următorului sezon",
  ],
  coverages: [
    "Culturi și suprafețe acceptate și declarate în poliță",
    "Riscuri precum grindina, furtuna, ploaia torențială sau înghețul, după cultură",
    "Componente ale serelor și solariilor, când sunt incluse expres",
    "Opțiuni distincte pentru secetă și cheltuieli de reînsămânțare",
  ],
  questions: [
    "Ce culturi, parcele și suprafețe sunt declarate?",
    "Ce riscuri sunt incluse pentru fiecare cultură și din ce moment?",
    "Cum se stabilește suma asigurată pe hectar?",
    "Ce franșize, praguri de daună și limite se aplică?",
    "Seceta se evaluează în teren sau prin criterii meteorologice?",
    "Cum notifici o daună și ce trebuie păstrat pentru constatare?",
  ],
  note: "Acoperirea diferă între culturi și variante de asigurare. Seceta, înghețul, reînsămânțarea și dotările unui solar nu sunt incluse automat. Se verifică termenele de subscriere, perioadele de protecție și excluderile din oferta concretă.",
  scenario: {
    title: "Aceeași furtună, culturi în stadii diferite.",
    body: "Două parcele sunt afectate în aceeași zi. Cultura, stadiul de vegetație, riscul contractat și franșiza pot duce la evaluări diferite. Comparăm condițiile pe fiecare cultură; suprafața totală și prețul poliței nu spun singure cât poate fi despăgubit.",
  },
  sections: [
    {
      title: "Culturi de câmp: de la răsărire la recoltare",
      body: "Pentru cereale, porumb, floarea-soarelui și alte culturi se verifică separat riscurile climatice, etapele de vegetație și suprafețele. Grindina, incendiul, furtuna, ploaia torențială sau înghețul pot face obiectul unor acoperiri. Cheltuielile de reînsămânțare au condiții proprii și nu reprezintă o garanție pentru orice cultură nereușită.",
    },
    {
      title: "Vii și livezi: rodul și sistemele de protecție",
      body: "La vița de vie contează destinația producției și stadiul plantei. La livezi se verifică specia, tipul plantației și existența protecției antigrindină. Rodul, sistemul de protecție și echipamentele sunt obiecte diferite. Înghețul târziu de primăvară și pierderile de calitate necesită verificarea expresă a condițiilor; nu se presupun acoperite pentru orice plantație.",
    },
    {
      title: "Legume, sere și solarii: ce anume protejezi?",
      body: "Pentru legumele cultivate în câmp se poate analiza protecția la grindină. În sere și solarii, cultura, structura, materialul de acoperire și dotările se declară distinct. Se verifică riscurile acceptate și cerințele tehnice. De exemplu, protecția la greutatea zăpezii poate depinde de existența unui sistem de încălzire funcțional și dimensionat corespunzător.",
    },
    {
      title: "Secetă: pierdere în teren sau criterii meteorologice",
      body: "Unele variante urmăresc pierderea constatată în cultură; altele folosesc deficitul de precipitații și temperaturile măsurate pentru un punct de referință și o perioadă stabilite în contract. La varianta bazată pe date meteorologice, despăgubirea urmează formula convenită, iar pierderea din parcela ta poate să nu coincidă cu rezultatul acelui calcul. Cultura, zona, pragurile și condițiile de acces se verifică înainte de alegere.",
    },
  ],
  faqs: [
    {
      question: "Ce culturi pot fi analizate pentru asigurare?",
      answer: "Putem porni de la cereale, porumb, floarea-soarelui, soia, vii, livezi, legume și culturi în sere sau solarii. Lista acceptată și riscurile disponibile se confirmă pentru cultura, zona și sezonul declarate.",
    },
    {
      question: "Seceta este inclusă în orice asigurare agricolă?",
      answer: "Nu. O acoperire pentru grindină nu confirmă și protecția la secetă. Se verifică o acoperire distinctă, culturile eligibile și metoda de despăgubire: evaluarea pierderii în teren sau calculul pe baza datelor meteorologice și a formulei din contract.",
    },
    {
      question: "Până când pot încheia asigurarea?",
      answer: "Termenele diferă în funcție de cultură, sezon și riscurile alese. Verificăm data-limită de subscriere și momentul începerii protecției din oferta concretă. Este util să începi discuția din timp, înaintea perioadei de expunere.",
    },
    {
      question: "Ce informații pregătesc pentru ofertă?",
      answer: "Pentru început: cultura, localitatea sau zona, suprafața aproximativă și riscurile de interes. Ulterior pot fi necesare identificarea parcelelor, hărți, suprafețe actualizate, producția ori valoarea asigurată și informații despre irigații sau protecția antigrindină. Documentele se stabilesc la ofertare; nu se încarcă în formularul inițial.",
    },
    {
      question: "Cât costă asigurarea agricolă?",
      answer: "Nu există un preț unic pe hectar pentru toate fermele. Oferta ține cont de cultură, amplasament, suprafață, suma asigurată, riscuri și franșize. Comparăm ce primești pentru prima cerută, inclusiv limitele și condițiile de despăgubire.",
    },
    {
      question: "Ce fac după grindină, îngheț sau altă daună?",
      answer: "Notifică asigurătorul în termenul și prin canalul prevăzute în poliță. Notează data, cultura și parcelele afectate, păstrează fotografiile și documentele relevante și clarifică instrucțiunile pentru constatare înainte de recoltare sau alte intervenții care pot modifica urmele daunei.",
    },
    {
      question: "Cum funcționează decontarea poliței prin APIA?",
      answer: "Pentru recolta de struguri pentru vin se verifică intervenția IS-V-03, polița plătită, identificarea parcelelor și documentele pentru cererea online. Pentru alte situații se verifică programele AFIR sau regulile sectoriale aplicabile. Înscrierea la APIA și încheierea unei polițe nu confirmă singure finanțarea primei.",
    },
    {
      question: "Sunt incluse și utilajele, clădirile sau animalele fermei?",
      answer: "Acestea se analizează distinct. Asigurarea culturilor nu confirmă automat protecția utilajelor, clădirilor, animalelor sau răspunderii fermei. Precizează ce vrei să protejezi, pentru a verifica separat disponibilitatea și condițiile unei soluții.",
    },
  ],
};
