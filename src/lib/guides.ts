import { guideFaqs } from "./faq-content";
export function guideHref(slug: string) {
  return slug === "bunuri-versus-intreruperea-activitatii"
    ? "/asigurari-firme/intreruperea-activitatii#bunuri-si-continuitate"
    : `/ghiduri#${slug}`;
}

export const guides = [
  {
    slug: "ce-asigurari-are-nevoie-un-imm", title: "Ce asigurări merită să analizezi pentru un IMM?", description: "De unde începi cu asigurarea firmei: ce bunuri folosești, ce pagube ai putea produce și cum ai continua după un incident.", category: "Primii pași", icon: "document", readTime: 4,
    intro: "Ai o firmă mică și nu știi ce asigurări îți trebuie? Începem cu activitatea ta și cu pierderile pe care ți-ar fi greu să le plătești. Un magazin, un atelier și o firmă de consultanță pot avea nevoi foarte diferite.",
    sections: [
  {
    "title": "Ce bunuri îți trebuie ca să poți lucra?",
    "paragraphs": [
      "Notează spațiile, utilajele, echipamentele, stocurile și vehiculele pe care le folosești. Separă ce este al firmei de ce ai închiriat sau ai primit de la clienți. Întreabă-te cât ar costa înlocuirea fiecăruia și cât timp ai putea lucra fără el.",
      "Dacă închiriezi spațiul, polița proprietarului poate proteja doar clădirea. Iar dacă asiguri un utilaj, nu înseamnă că orice defecțiune este inclusă. Verificăm împreună bunurile, valorile și situațiile pentru care poate plăti asigurătorul."
    ]
  },
  {
    "title": "Cui ai putea produce o pagubă?",
    "paragraphs": [
      "Un vizitator se poate accidenta la sediu sau poți deteriora un bun al clientului. O greșeală în serviciul prestat poate provoca o pierdere financiară diferită. Aceste situații ne ajută să vedem ce tip de răspundere merită asigurat.",
      "Dacă un contract îți cere o asigurare, pregătește cerința pentru discuție. Verificăm suma cerută, serviciile și țările acoperite, regulile juridice și când trebuie anunțată o reclamație."
    ]
  },
  {
    "title": "Cum ai continua după o pagubă?",
    "paragraphs": [
      "Dacă repari spațiul după un incendiu, chiria și unele salarii pot continua. Asigurarea pentru întreruperea activității poate ajuta cu anumite pierderi, dacă evenimentul și condițiile sunt incluse în contract. Nu plătește pentru orice scădere a încasărilor.",
      "În funcție de firmă, discutăm și mașinile, sănătatea echipei sau incidentele informatice. Scopul este să înțelegi ce protejează fiecare poliță și ce poți susține din bugetul tău."
    ]
  },
  {
    "title": "Ce pregătești pentru prima discuție?",
    "paragraphs": [
      "Spune-mi cu ce te ocupi, unde lucrezi, ce bunuri importante ai și câți angajați sau câte vehicule folosești. Dacă ai deja polițe, notează când expiră și ce s-a schimbat în firmă. Documentele detaliate le stabilim ulterior."
    ]
  }
], related: ["bunuri-si-echipamente", "raspundere-civila-profesionala", "intreruperea-activitatii"], faqs: guideFaqs["ce-asigurari-are-nevoie-un-imm"],
  },
  {
    slug: "bunuri-versus-intreruperea-activitatii", title: "Bunurile sunt asigurate. Dar activitatea firmei?", description: "Diferența dintre refacerea bunurilor și protecția pentru pierderile financiare din perioada de oprire.", category: "Continuitatea afacerii", icon: "clock", readTime: 4,
    intro: "După un incendiu, ai nevoie să repari bunurile, dar și să treci prin perioada în care nu poți lucra. Chiria și alte costuri pot continua chiar dacă nu ai încasările obișnuite. Cele două nevoi se verifică separat în asigurare.",
    sections: [
  {
    "title": "Repararea bunurilor și pierderile din oprire",
    "paragraphs": [
      "Asigurarea bunurilor poate plăti pentru paguba materială, precum refacerea spațiului sau înlocuirea echipamentelor. Protecția pentru întreruperea activității, numită și Business Interruption, poate acoperi anumite pierderi financiare cauzate de oprire.",
      "Verificăm dacă această protecție este inclusă în pachet, trebuie adăugată printr-o clauză sau are nevoie de o ofertă separată. Polița de bunuri nu o include automat."
    ]
  },
  {
    "title": "În ce situații poate plăti asigurarea?",
    "paragraphs": [
      "Oprirea trebuie să aibă legătură cu un eveniment acoperit de contract. Unele produse cer și existența unei pagube materiale asigurate. Pierderea clienților sau o scădere a pieței nu sunt acoperite automat.",
      "Verificăm cum definește contractul profitul, cheltuielile fixe și costurile suplimentare. Două oferte cu nume asemănătoare pot calcula diferit pierderile pe care le plătesc."
    ]
  },
  {
    "title": "Pentru cât timp ai nevoie de protecție?",
    "paragraphs": [
      "Ia în calcul reparațiile, livrarea utilajelor, instalarea și reluarea lucrului. Dacă un echipament ajunge greu, oprirea poate dura mai mult decât repararea clădirii.",
      "Discutăm suma maximă și perioada pentru care pot fi plătite pierderile. Verificăm și dacă există zile inițiale fără despăgubire, numite franșiză temporală, ce documente financiare sunt necesare și ce ai de făcut pentru a limita paguba."
    ]
  },
  {
    "title": "Un exemplu: magazinul se închide după un incendiu",
    "paragraphs": [
      "Reparația spațiului poate fi acoperită de asigurarea bunurilor. Pentru chiria, salariile sau profitul pierdut cât timp magazinul este închis, verificăm separat protecția pentru întreruperea activității. Faptul că ai aceste cheltuieli nu înseamnă că sunt toate incluse; se aplică regulile și limitele poliței."
    ]
  }
], related: ["intreruperea-activitatii", "bunuri-si-echipamente"], faqs: guideFaqs["bunuri-versus-intreruperea-activitatii"],
  },
  {
    slug: "cum-compari-ofertele-pentru-firma", title: "Cum compari două oferte de asigurare pentru firmă", description: "Cum vezi ce primești pentru prețul plătit: evenimentele incluse, suma maximă de despăgubire și partea din daună pe care o suporți tu.", category: "Alegerea poliței", icon: "scale", readTime: 4,
    intro: "Ai primit două oferte cu prețuri apropiate? Înainte să alegi, verifică dacă asigură aceleași bunuri și activități și dacă te ajută în aceleași situații. Iată ce merită să compari.",
    sections: [
  {
    "title": "Sunt asigurate aceleași lucruri?",
    "paragraphs": [
      "Uită-te la activități, locații și bunuri. Sunt incluse amenajările tale din spațiul închiriat, stocurile din sezon și bunurile folosite la clienți? O ofertă mai ieftină poate lăsa în afara poliței lucruri importante pentru tine.",
      "La răspundere, verifică cine este asigurat, pentru ce servicii, în ce țări și pentru ce pagube. Numele produsului nu arată singur toate aceste detalii."
    ]
  },
  {
    "title": "Cât se plătește și cât rămâne în grija ta?",
    "paragraphs": [
      "O poliță poate avea o sumă totală mare, dar limite mai mici pentru furt, anumite bunuri sau anumite cheltuieli. Verifică separat fiecare situație importantă, precum și plafonul pentru toate daunele dintr-un an.",
      "Franșiza este partea din daună pe care o plătești tu. Poate fi o sumă fixă, un procent sau, la întreruperea activității, un interval fără despăgubire. Compară prețul poliței și costul pe care l-ai suporta dacă se întâmplă o daună."
    ]
  },
  {
    "title": "Ce este exclus și ce obligații ai?",
    "paragraphs": [
      "Excluderile sunt situațiile pentru care asigurătorul nu plătește. Verifică și ce ai de făcut: să anunți schimbările din firmă, să păstrezi măsurile de siguranță sau să declari dauna în termen.",
      "La răspunderea profesională pot conta data greșelii și când primești sau anunți reclamația. La sănătate, verifică serviciile și perioadele de așteptare. Îți explic termenii care se aplică produsului pe care îl compari."
    ]
  },
  {
    "title": "Cere o recomandare pe care o înțelegi",
    "paragraphs": [
      "Întreabă de ce o variantă răspunde mai bine nevoilor tale și cere clarificări pentru ce nu este limpede. Păstrează oferta și condițiile contractului. Rezumatul comercial este util, dar documentele complete arată ce cumperi."
    ]
  }
], related: ["raspundere-civila-profesionala", "bunuri-si-echipamente", "flote-auto"], faqs: guideFaqs["cum-compari-ofertele-pentru-firma"],
  },
];
