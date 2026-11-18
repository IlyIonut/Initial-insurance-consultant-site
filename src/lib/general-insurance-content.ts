import { personalFaqExtras } from "./faq-content";
export type InsuranceContentSection = {
  title: string;
  body: string;
  items?: string[];
};

export type InsuranceContentPage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  ctaLabel: string;
  whatsappMessage: string;
  heroBullets: string[];
  suitableFor: string[];
  commonCoverages: string[];
  compareChecklist: string[];
  offerData: string[];
  importantNote: string;
  sections: InsuranceContentSection[];
  faqs: { question: string; answer: string }[];
};

export const insuranceContent: Record<string, InsuranceContentPage> = {
  casco: {
    slug: "/asigurare-casco",
    eyebrow: "CASCO",
    title: "Asigurare CASCO pentru mașina ta",
    description:
      "Cu o asigurare CASCO, poți primi ajutor pentru costul reparațiilor sau pentru furtul mașinii, dacă situația este inclusă în poliță. Te ajut să înțelegi ce primești pentru prețul plătit și ce cheltuieli ar rămâne în grija ta.",
    metaTitle: "Asigurare CASCO: preț, franșiză și ofertă",
    metaDescription:
      "Află cât poate costa CASCO, ce daune poate acoperi și ce parte din reparație plătești tu. Compară ofertele pentru mașina ta.",
    ctaLabel: "Cere ofertă CASCO",
    whatsappMessage: "Bună! Doresc o ofertă CASCO și aș vrea să compar acoperirile disponibile.",
    heroBullets: ["Poate acoperi daunele la mașina ta, inclusiv când provoci accidentul", "Poți alege protecție pentru avarii, furt și fenomene naturale", "Verificăm împreună ce include fiecare ofertă și cât ai plăti tu la daună"],
    suitableFor: [
  "ai o mașină nouă sau cu o valoare importantă pentru bugetul tău",
  "ai cumpărat mașina prin leasing sau credit",
  "parchezi frecvent în locuri expuse avariilor",
  "vrei protecție pentru furt, avarii sau fenomene naturale",
  "folosești mașina pentru firmă și vrei să verifici opțiunile disponibile"
],
    commonCoverages: [
  "lovituri, zgârieturi, răsturnare sau derapaj",
  "incendiu, trăsnet și explozie",
  "furtună, grindină, inundație sau obiecte căzute pe mașină, dacă sunt acoperite",
  "furt sau tentativă de furt, în condițiile poliței",
  "vandalism sau daune cu autor necunoscut, dacă sunt incluse",
  "geamuri, asistență rutieră sau protecție în alte țări, în funcție de pachet"
],
    compareChecklist: ["ce evenimente sunt acoperite și ce opțiuni plătești separat", "franșiza: partea din daună pe care o plătești tu; poate fi fixă sau procentuală", "excluderile: situațiile pentru care asigurătorul nu plătește", "valoarea pentru care asiguri mașina și cum se calculează despăgubirea", "unde poți repara mașina și cum se achită reparația", "în ce țări este valabilă polița"],
    offerData: [
  "marca, modelul, anul fabricației și motorizarea",
  "kilometrajul și valoarea aproximativă a mașinii",
  "cine deține mașina și dacă o folosești personal sau pentru muncă",
  "dacă mașina este cumpărată prin leasing sau credit",
  "informații despre daunele anterioare, dacă sunt necesare",
  "ce service preferi, dacă vrei asistență rutieră și în ce țări călătorești"
],
    importantNote:
      "RCA și CASCO au roluri diferite. RCA acoperă daunele pe care le produci altora cu mașina. CASCO poate acoperi daunele la mașina ta, pentru evenimentele incluse în contract. Ai nevoie în continuare de RCA chiar dacă alegi și CASCO.",
    sections: [
  {
    "title": "Ce este CASCO și cum te poate ajuta?",
    "body": "CASCO este o asigurare opțională pentru mașina ta. Poate acoperi daune precum cele produse de un accident sau de grindină, dar și furtul, dacă sunt incluse în poliță. Două oferte cu prețuri apropiate pot acoperi situații diferite sau pot lăsa în grija ta o parte mai mare din costul reparației. De aceea, merită să vezi ce include fiecare înainte să alegi."
  },
  {
    "title": "La ce să te uiți, pe lângă preț?",
    "body": "Unele oferte includ furtul, vandalismul, geamurile sparte sau asistența rutieră; în altele, le alegi separat. Contează și unde parchezi, cum folosești mașina și unde ai vrea să o repari. Pornim de la aceste lucruri și îți explic ce acoperă fiecare variantă."
  },
  {
    "title": "Cum compari un CASCO mai ieftin?",
    "body": "Compară oferte pentru aceeași valoare a mașinii, aceleași evenimente acoperite și aceleași condiții de reparație. O franșiză mai mare poate reduce prețul poliței, dar înseamnă că plătești tu mai mult la o daună. Dacă mașina este în leasing, verificăm și ce franșiză și ce service acceptă finanțatorul."
  }
],
    faqs: [...[
  {
    "question": "Cât costă CASCO pentru o mașină nouă sau second hand?",
    "answer": "Prețul depinde de valoarea și vechimea mașinii, de cum o folosești și de protecțiile alese. Contează și franșiza, adică partea din daună pe care o plătești tu. Pentru o mașină rulată, asigurătorul poate cere o inspecție sau poate avea o limită de vechime. Dacă ai leasing ori credit, verificăm și cerințele finanțatorului."
  },
  {
    "question": "CASCO acoperă orice daună?",
    "answer": "Nu. Înainte să alegi, verificăm împreună ce evenimente sunt incluse, ce situații sunt excluse și cât ai plăti tu din reparație. Aceste detalii apar în oferta și condițiile poliței."
  },
  {
    "question": "Ce este franșiza?",
    "answer": "Franșiza este partea din daună pe care o plătești tu. Într-un exemplu simplificat, la o reparație acoperită de 3.000 lei și o franșiză fixă de 500 lei, tu plătești 500 lei. Calculul exact depinde de contract. O franșiză mai mare poate reduce prețul asigurării."
  },
  {
    "question": "Pot alege service-ul?",
    "answer": "Depinde de poliță. Unele variante îți permit să alegi service-ul, iar altele prevăd reparații în service-urile partenere ale asigurătorului. Spune-mi unde ai vrea să repari mașina, ca să verificăm oferta potrivită."
  }
], ...personalFaqExtras["casco"]],
  },

  locuinta: {
    slug: "/asigurare-locuinta",
    eyebrow: "Locuință",
    title: "Asigurare locuință: PAD și facultativă, explicate simplu",
    description:
      "Vrei să îți asiguri casa sau apartamentul? Începem cu diferența dintre PAD, asigurarea obligatorie pentru trei dezastre naturale, și polița facultativă. Apoi vedem cum poți proteja și bunurile din locuință sau cum te poate ajuta asigurarea dacă inunzi un vecin.",
    metaTitle: "Asigurare locuință: preț PAD și poliță facultativă",
    metaDescription:
      "Cât costă PAD și de ce depinde prețul asigurării facultative pentru casă sau apartament. Vezi ce date pregătești, inclusiv pentru credit.",
    ctaLabel: "Cere ofertă locuință",
    whatsappMessage: "Bună! Doresc o ofertă pentru asigurarea locuinței: PAD și/sau facultativă.",
    heroBullets: ["PAD acoperă cutremurul, inundațiile naturale și alunecările de teren", "Polița facultativă poate adăuga protecție pentru incendiu, furt și daune de apă", "Verificăm separat bunurile din casă și daunele pe care le-ai putea produce vecinilor"],
    suitableFor: ["ai un apartament sau o casă", "ai cumpărat locuința prin credit ipotecar", "vrei protecție și pentru alte evenimente decât cele acoperite de PAD", "vrei să asiguri mobilierul, electrocasnicele sau alte bunuri", "închiriezi o locuință, ca proprietar sau chiriaș; verificăm ce poți asigura în fiecare situație"],
    commonCoverages: [
      "PAD: cutremur, inundații naturale și alunecări de teren, în limitele legale",
      "incendiu, trăsnet, explozie",
      "furtună, grindină, greutatea stratului de zăpadă sau alte fenomene naturale, în funcție de poliță",
      "daune produse de apă din conducte sau instalații",
      "furt, vandalism sau avarii accidentale, dacă sunt incluse",
      "bunuri din casă, geamuri, daune produse vecinilor și asistență la domiciliu, dacă sunt incluse",
    ],
    compareChecklist: ["dacă ai PAD valabilă și în ce categorie se încadrează locuința", "suma asigurată: valoarea pentru care este protejată clădirea, calculată după regulile poliței", "ce mobilier, electrocasnice și alte bunuri sunt incluse", "ce evenimente sunt acoperite și ce opțiuni alegi separat", "franșiza: partea din daună pe care o plătești tu; excluderile și obligațiile de întreținere", "cine primește despăgubirea și ce cere banca, dacă ai credit"],
    offerData: [
      "tip locuință: apartament sau casă",
      "localitate, suprafață utilă/construită și anul construcției",
      "structura și materialele principale ale construcției",
      "dacă există credit ipotecar și cerințe ale băncii",
      "valoarea estimată a clădirii și a bunurilor",
      "acoperiri dorite: bunuri, răspundere civilă, asistență, furt, apă, fenomene naturale",
    ],
    importantNote:
      "PAD protejează clădirea doar pentru cutremur, inundații naturale și alunecări de teren, în limitele legale. Pentru incendiu, furt, apă din conducte, bunuri sau daune produse vecinilor, verificăm o poliță facultativă care include aceste situații.",
    sections: [
  {
    "title": "Cât costă asigurarea obligatorie PAD?",
    "body": "Costul PAD depinde de categoria construcției. La data de 25 octombrie 2026, pentru o locuință de tip A prețul este de 130 lei pe an, cu o sumă asigurată de 100.000 lei. Pentru tip B, prețul este de 50 lei pe an, cu o sumă asigurată de 50.000 lei. Categoria se stabilește după materialele și structura clădirii, conform legii; nu alegi tu categoria în funcție de preț. Verificăm încadrarea și eventualele excepții înainte de emitere."
  },
  {
    "title": "De ce depinde prețul asigurării facultative?",
    "body": "Contează caracteristicile casei sau apartamentului, valoarea asigurată și evenimentele pentru care vrei protecție. Dacă incluzi și bunurile sau daunele produse vecinilor, verificăm separat limitele pentru ele. Două oferte pot avea prețuri diferite pentru că una acoperă mai multe situații sau lasă în grija ta o parte mai mică din daună."
  },
  {
    "title": "Cum alegi dacă ai un buget fix?",
    "body": "Verificăm mai întâi PAD și obligațiile tale, apoi discutăm ce pierdere ți-ar fi cel mai greu să acoperi: refacerea casei după incendiu, înlocuirea bunurilor sau repararea unei daune de apă. Comparăm ofertele pentru aceeași valoare a clădirii și îți explic ce se schimbă când alegi un preț mai mic."
  }
],
    faqs: [...[
  {
    "question": "PAD este suficientă pentru locuință?",
    "answer": "PAD acoperă clădirea pentru cele trei dezastre naturale prevăzute de lege, în limitele stabilite. Dacă vrei protecție și pentru incendiu, furt, apă din conducte sau bunuri, ai nevoie de o poliță facultativă care le include."
  },
  {
    "question": "Pot face facultativă fără PAD?",
    "answer": "De regulă, trebuie să ai PAD valabilă ca să închei asigurarea facultativă a locuinței. Există excepții legale, iar situațiile speciale se verifică înainte de emitere. Polița facultativă nu înlocuiește PAD."
  },
  {
    "question": "Pot asigura și bunurile?",
    "answer": "Da, multe polițe facultative îți permit să incluzi mobilierul, electrocasnicele și alte bunuri din casă. Stabilim ce vrei să protejezi și verificăm limitele și condițiile pentru fiecare categorie."
  },
  {
    "question": "Ce înseamnă răspundere civilă față de vecini?",
    "answer": "Este protecția care te poate ajuta să acoperi daune produse accidental altor persoane. De exemplu, dacă o scurgere din locuința ta afectează apartamentul vecinului, polița poate acoperi despăgubirea dacă situația și răspunderea ta se încadrează în condițiile contractului."
  }
], ...personalFaqExtras["locuinta"]],
  },

  calatorie: {
    slug: "/asigurare-calatorie",
    eyebrow: "Călătorie",
    title: "Asigurare de călătorie pentru vacanțe și deplasări",
    description:
      "O problemă medicală îți poate schimba planurile când ești în străinătate. Asigurarea de călătorie te poate ajuta cu cheltuieli medicale și asistență, iar unele pachete includ bagajele sau anularea plecării. Alegem în funcție de destinație, durată și ce ai de gând să faci în călătorie.",
    metaTitle: "Asigurare medicală de călătorie: preț și storno",
    metaDescription:
      "Vezi de ce depinde prețul asigurării de călătorie. Compară cheltuielile medicale, asistența, bagajele și storno pentru destinația și durata ta.",
    ctaLabel: "Cere ofertă călătorie",
    whatsappMessage: "Bună! Doresc o ofertă pentru asigurare de călătorie.",
    heroBullets: ["Pentru vacanțe, călătorii în familie și deplasări de serviciu", "Alegem acoperirea pentru destinația și activitățile tale", "Bagajele, anularea călătoriei și sporturile pot necesita opțiuni suplimentare"],
    suitableFor: [
  "pleci în străinătate, chiar și pentru câteva zile",
  "călătorești cu familia sau cu copiii",
  "mergi într-o deplasare de serviciu",
  "ai zboruri, bagaje de cală sau rezervări costisitoare",
  "vrei să practici sporturi ori activități pentru care trebuie verificată o acoperire dedicată"
],
    commonCoverages: [
  "urgențe medicale în caz de accident sau îmbolnăvire",
  "asistență și sprijin medical în străinătate",
  "transport medical și, după caz, transport înapoi în țară, numit repatriere",
  "bagaje pierdute, furate, deteriorate sau întârziate, în condițiile poliței",
  "anularea călătoriei pentru cauze prevăzute în contract, numită storno",
  "sporturi sau activități speciale, de obicei prin opțiuni suplimentare"
],
    compareChecklist: ["până la ce sumă sunt acoperite urgențele medicale", "în ce țări este valabilă polița, inclusiv pentru SUA sau Canada", "cât poți primi pentru bagaje, întârzieri sau anularea călătoriei", "ce reguli se aplică bolilor deja existente, sporturilor și consumului de alcool", "vârstele acceptate și numărul maxim de zile acoperite", "cum contactezi serviciul de asistență dacă ai nevoie de ajutor"],
    offerData: [
  "țara sau țările în care mergi",
  "datele de plecare și întoarcere",
  "numărul persoanelor și vârstele aproximative",
  "scopul: vacanță, deplasare de serviciu, studii sau muncă",
  "sporturile, schiul, drumețiile ori alte activități planificate",
  "dacă vrei protecție pentru bagaje sau anularea călătoriei"
],
    importantNote:
      "Spune-mi dacă vrei protecție pentru bagaje, anulare sau sporturi și dacă ai nevoie să verifici regulile pentru boli deja existente. Acestea nu sunt incluse în orice poliță; le verificăm înainte de plecare.",
    sections: [
  {
    "title": "Cum te poate ajuta în călătorie?",
    "body": "Dacă te îmbolnăvești sau ai un accident în străinătate, consultațiile, tratamentul ori transportul medical pot costa mult. O poliță care include aceste situații te poate ajuta cu plata și cu accesul la asistență. Pentru bagaje și anularea plecării, verificăm separat ce opțiuni sunt disponibile."
  },
  {
    "title": "Cât costă asigurarea medicală de călătorie?",
    "body": "Prețul depinde de destinație, numărul de zile, vârsta persoanelor și activitățile planificate. Comparăm mai întâi suma disponibilă pentru urgențe medicale și condițiile pentru transportul înapoi în țară, numit repatriere. Apoi vedem dacă ai nevoie de protecție pentru bagaje, anulare sau sporturi."
  }
],
    faqs: [...[
      {
        question: "Este suficient cardul european de sănătate?",
        answer: "Cardul oferă acces la îngrijiri medicale necesare în sistemul public în statele și condițiile aplicabile unei șederi temporare. Nu acoperă prin el însuși repatrierea, serviciile private, bagajele sau anularea călătoriei. Nu înlocuiește o asigurare de călătorie adecvată.",
      },
      {
        question: "Bagajele sunt incluse automat?",
        answer: "Nu întotdeauna. Unele produse includ bagaje în pachet, altele doar prin opțiuni suplimentare.",
      },
      {
        question: "Pot include anularea călătoriei?",
        answer: "Unele produse includ anularea călătoriei, numită storno, pentru cauze precizate în contract. Nu este acoperită renunțarea din orice motiv. Verificăm până când o poți cumpăra, ce sume deja plătite poți recupera, ce parte din pierdere suporți tu și ce documente sunt necesare.",
      },
      {
        question: "Am nevoie de clauză pentru sporturi?",
        answer: "Dacă mergi la schi, sporturi nautice, drumeții dificile sau alte activități speciale, trebuie verificată acoperirea dedicată.",
      },
      {
        question: "Ce verific la asigurarea pentru o excursie de o zi în străinătate?",
        answer: "Verifică dacă polița este valabilă în țara vizitată pe toată durata deplasării și ce include pentru urgențe medicale și asistență. Dacă ai o poliță anuală sau o asigurare prin cardul bancar, verifică dacă deplasarea și activitățile planificate intră în acoperire și dacă există condiții de activare.",
      },
    ], ...personalFaqExtras["calatorie"]],
  },

  sanatate: {
    slug: "/asigurare-sanatate",
    eyebrow: "Sănătate",
    title: "Asigurare privată de sănătate pentru tine și familie",
    description:
      "Cauți o asigurare pentru consultații, analize, spitalizare sau intervenții? Te ajut să compari serviciile incluse, clinicile disponibile și cât poate plăti asigurătorul. Pentru prima discuție, spune-mi ce cauți, fără să trimiți diagnostice sau documente medicale prin formular.",
    metaTitle: "Asigurare privată de sănătate: preț și acoperire",
    metaDescription:
      "Vezi de ce depinde prețul asigurării private de sănătate pentru tine sau familie. Compară clinicile, consultațiile, spitalizarea și limitele.",
    ctaLabel: "Discutăm despre sănătate",
    whatsappMessage: "Bună! Doresc o discuție despre o asigurare privată de sănătate.",
    heroBullets: ["Pentru tine, familie sau angajații firmei", "Verificăm clinicile, serviciile incluse și costurile care rămân în grija ta", "La primul contact, nu trimite diagnostice sau documente medicale"],
    suitableFor: [
  "vrei acces la servicii medicale private",
  "cauți o variantă pentru consultațiile și investigațiile familiei",
  "vrei să oferi angajaților un beneficiu medical",
  "te interesează spitalizarea sau operațiile și vrei să verifici ce variante le includ"
],
    commonCoverages: ["consultații și investigații fără internare, dacă sunt incluse", "spitalizare și operații, în funcție de pachet", "servicii plătite direct clinicii sau recuperarea ulterioară a cheltuielilor", "a doua opinie medicală sau tratament în străinătate, la produse dedicate", "asigurare pentru echipa firmei, prin planuri de grup", "prevenție sau plata unei sume fixe pentru anumite situații, dacă sunt prevăzute în contract"],
    compareChecklist: ["ce consultații, analize, investigații și intervenții sunt incluse", "la ce clinici și spitale poți merge", "dacă asigurătorul plătește clinica sau plătești tu și ceri banii înapoi", "cât poate plăti asigurătorul pe an și pe serviciu; ce parte din cost plătești tu", "după cât timp poți folosi fiecare serviciu și ce situații sunt excluse", "ce condiții se aplică pentru tine, familie sau echipa firmei"],
    offerData: ["pentru cine cauți asigurare: tine, familie sau angajați", "numărul de persoane și vârstele aproximative", "ce te interesează: consultații, analize, spitalizare, operații sau tratament în străinătate", "localitatea în care ai vrea să mergi la medic", "bugetul lunar sau anual aproximativ", "fără diagnostice, analize ori documente medicale prin formularul public"],
    importantNote:
      "La început, am nevoie doar de informații generale despre ce cauți. Dacă pentru ofertă sunt necesare date medicale, îți explic ulterior cum le transmiți prin canalele asigurătorului.",
    sections: [
  {
    "title": "Asigurare de sănătate sau abonament medical?",
    "body": "Un abonament îți oferă, de regulă, acces la anumite servicii din rețeaua furnizorului. O asigurare acoperă cheltuielile sau plătește beneficiile prevăzute în contract, până la limitele stabilite. Uneori experiența este asemănătoare, dar merită să verifici ce servicii primești, unde mergi și ce costuri rămân în grija ta la fiecare variantă."
  },
  {
    "title": "Cauți un beneficiu pentru angajați?",
    "body": "Pornim de la numărul de persoane, localitățile în care lucrează și bugetul firmei. Apoi comparăm serviciile și clinicile pe care echipa le-ar putea folosi, precum și regulile pentru adăugarea sau retragerea unui angajat din plan."
  },
  {
    "title": "Cât costă asigurarea privată de sănătate?",
    "body": "Costul depinde de persoanele asigurate și de serviciile alese. Dacă ai un buget lunar, verificăm și costul pe an, clinicile disponibile și cât ai plăti tu pentru serviciile care te interesează. Sumele pentru consultații și pentru spitalizare pot avea limite separate."
  }
],
    faqs: [...[
  {
    "question": "Trebuie să trimit analize sau diagnostice prin formular?",
    "answer": "Nu. Scrie doar ce tip de asigurare cauți și cum te pot contacta. Dacă sunt necesare informații medicale pentru ofertare, îți explic pașii și canalul asigurătorului prin care le poți transmite."
  },
  {
    "question": "Pot face asigurare pentru familie?",
    "answer": "Pot exista variante pentru tine și membrii familiei. Verificăm persoanele care pot fi incluse, vârstele acceptate și condițiile produsului ales."
  },
  {
    "question": "Pot merge la orice clinică?",
    "answer": "Depinde de asigurare. Unele variante au clinici partenere; altele îți permit să ceri înapoi costul unor servicii făcute în afara rețelei. Verificăm clinicile, limitele și aprobările necesare înainte să alegi."
  },
  {
    "question": "Pot face asigurare pentru angajați?",
    "answer": "Da, există planuri de grup pentru firme. Oferta depinde de echipă și de serviciile pe care vrei să le incluzi."
  }
], ...personalFaqExtras["sanatate"]],
  },

  viata: {
    slug: "/asigurare-viata",
    eyebrow: "Viață",
    title: "Asigurare de viață pentru familie și credit",
    description:
      "Dacă venitul tău nu ar mai fi disponibil, cum s-ar descurca oamenii apropiați? O asigurare de viață poate oferi sprijin financiar pentru familie sau pentru un credit, în situațiile prevăzute în contract. Pornim de la ce vrei să protejezi, pentru cât timp și cu ce buget.",
    metaTitle: "Asigurare de viață: cost, familie și credit",
    metaDescription:
      "De ce depinde costul asigurării de viață și cum compari suma, durata și clauzele pentru protecția familiei sau a unui credit.",
    ctaLabel: "Discutăm despre asigurarea de viață",
    whatsappMessage: "Bună! Doresc o discuție despre o asigurare de viață.",
    heroBullets: ["Pentru sprijinul familiei sau protecția unui credit", "Comparăm suma care poate fi plătită și situațiile în care se plătește", "Verificăm separat opțiunile de economisire și costurile lor"],
    suitableFor: [
  "ai copii sau alte persoane care depind de venitul tău",
  "ai un credit ori alte obligații financiare",
  "vrei sprijin financiar în caz de deces, invaliditate sau boli grave, dacă sunt incluse",
  "te interesează o variantă de protecție sau economisire pentru copii",
  "vrei să construiești un plan pe care îl poți susține mai mulți ani"
],
    commonCoverages: [
  "deces din cauzele prevăzute în contract, inclusiv variante doar pentru accident",
  "invaliditate permanentă, dacă este inclusă sau adăugată separat",
  "boli grave dintre cele definite în produs",
  "protecție pentru credit, cu o sumă constantă sau care scade pe parcurs",
  "economisire sau investiții și, la anumite produse, o plată la finalul contractului",
  "opțiuni pentru spitalizare, operații, accidente sau preluarea plății primelor în anumite situații"
],
    compareChecklist: ["ce vrei să protejezi: familia, un credit sau un obiectiv de economisire", "ce sumă ar fi necesară și pentru câți ani", "cine primește banii în situațiile prevăzute în contract", "cât plătești în total și dacă poți modifica plățile", "ce situații sunt excluse, ce perioade de așteptare există și dacă este necesară evaluarea medicală", "dacă primești o sumă înapoi când renunți și cum se calculează aceasta"],
    offerData: [
      "scopul poliței: familie, credit, economisire, protecție copii",
      "perioada dorită și suma orientativă de protecție",
      "vârsta persoanei asigurate și statutul de fumător/nefumător, dacă se solicită ulterior",
      "buget orientativ lunar/anual",
      "nu trimite documente medicale sau diagnostice prin formularul public",
      "dacă există cerințe ale băncii pentru credit",
    ],
    importantNote:
      "Alege o durată și un cost pe care le poți susține. Dacă polița include economisire sau investiții, verificăm și costurile, riscurile și ce se întâmplă cu banii dacă renunți înainte de termen.",
    sections: [
  {
    "title": "Protecție pentru familie sau și economisire?",
    "body": "O asigurare simplă de viață plătește suma stabilită dacă are loc un eveniment acoperit, de exemplu decesul persoanei asigurate. Alte variante includ și economisire sau investiții. Acestea au costuri și reguli diferite, iar partea de investiții poate avea riscuri. Îți explic ce primești în fiecare variantă și ce se întâmplă dacă renunți."
  },
  {
    "title": "Cum te poate ajuta pentru un credit?",
    "body": "Unele polițe pot acoperi soldul creditului, adică suma rămasă de plată, dacă are loc evenimentul asigurat. Suma protejată poate scădea odată cu datoria. Verificăm ce cere banca, cine primește banii și dacă durata asigurării corespunde creditului tău."
  },
  {
    "title": "Cum compari prețul unei asigurări de viață?",
    "body": "Cere oferte pentru aceeași sumă și aceeași durată. Prețul poate depinde de vârstă, evaluarea asigurătorului și opțiunile suplimentare. Dacă ai un buget fix, începem cu perioada în care familia depinde de venitul tău sau cu datoria pe care vrei să o protejezi. Verificăm și dacă prețul rămâne același pe durata contractului."
  }
],
    faqs: [...[
  {
    "question": "Ce sumă asigurată ar trebui să aleg?",
    "answer": "Ne uităm la venitul tău, la datorii, la persoanele care depind financiar de tine și la cât timp ar avea nevoie de sprijin. Pe baza lor, putem estima o sumă potrivită pentru obiectivul și bugetul tău."
  },
  {
    "question": "Este același lucru cu o asigurare de sănătate?",
    "answer": "Nu. Asigurarea de viață oferă sprijin financiar când are loc un eveniment prevăzut în contract. Asigurarea de sănătate se referă la servicii medicale sau la plata unor beneficii medicale. Unele protecții se pot completa."
  },
  {
    "question": "Am nevoie de un control medical?",
    "answer": "Depinde de produs, vârstă, suma aleasă și cerințele asigurătorului. Îți explic ce este necesar la ofertare. Nu trimite date sau documente medicale prin formularul public."
  },
  {
    "question": "Pot acoperi un credit ipotecar?",
    "answer": "Există polițe care pot fi folosite pentru protecția unui credit. Verificăm împreună condițiile băncii și ale asigurării înainte să alegi."
  }
], ...personalFaqExtras["viata"]],
  },



  raspundere: {
    slug: "/asigurare-raspundere-civila",
    eyebrow: "Răspundere civilă",
    title: "Asigurări de răspundere civilă și profesională",
    description:
      "Dacă produci accidental o pagubă altei persoane, poți avea de plătit reparații sau despăgubiri. O asigurare de răspundere civilă te poate ajuta în situațiile incluse în poliță. Dacă lucrezi cu clienți, verificăm separat și protecția pentru greșeli făcute în exercitarea profesiei.",
    metaTitle: "Asigurare de răspundere civilă: cost și limite",
    metaDescription:
      "Vezi de ce depinde costul asigurării de răspundere civilă și cum compari activitățile acoperite, limitele și franșiza.",
    ctaLabel: "Cere ofertă răspundere",
    whatsappMessage: "Bună! Doresc o ofertă pentru asigurare de răspundere civilă/profesională.",
    heroBullets: ["Pentru pagube pe care le-ai putea produce altor persoane", "Alegem protecția în funcție de activitatea și obligațiile tale", "Verificăm suma maximă plătită și situațiile excluse"],
    suitableFor: [
  "prestezi servicii ca PFA, SRL sau printr-o profesie liberală",
  "ai clienți ori vizitatori la sediu sau lucrezi în spațiile lor",
  "conduci o firmă și vrei să verifici protecția pentru responsabilitățile tale",
  "un partener îți cere o asigurare prin contract"
],
    commonCoverages: ["pagube produse bunurilor altor persoane", "vătămări produse accidental altor persoane, dacă sunt acoperite", "cheltuieli de apărare sau judecată, dacă sunt incluse", "pierderi financiare ale clienților provocate de greșeli profesionale, prin produse dedicate", "fapte ale angajaților pentru care răspunzi, dacă sunt incluse", "protecție pentru unele fapte anterioare sau timp suplimentar pentru anunțarea reclamațiilor, la anumite polițe profesionale"],
    compareChecklist: ["ce tip de răspundere ai nevoie să acoperi: personală, profesională, pentru produse sau conducerea firmei", "suma maximă pe eveniment și suma maximă pentru toate daunele dintr-un an", "ce parte din daună plătești tu și ce situații sunt excluse", "ce asigurare îți cere legea sau un contract pentru activitatea ta", "în ce țări ești protejat și ce instanțe sau legi sunt acceptate de poliță", "când și cum trebuie să anunți o daună sau o reclamație"],
    offerData: [
      "profesia sau activitatea exactă",
      "cifra de afaceri orientativă sau volumul activității, dacă este relevant",
      "limita de răspundere cerută de contract/lege",
      "teritoriul unde se desfășoară activitatea",
      "dacă ai avut cereri de despăgubire anterioare",
      "nu trimite contracte sau documente sensibile prin formularul public; le discutăm ulterior dacă este necesar",
    ],
    importantNote:
      "Răspunderea civilă generală și cea profesională acoperă situații diferite. Una poate privi, de exemplu, deteriorarea accidentală a bunului cuiva; cealaltă, o pierdere provocată de o greșeală în serviciul prestat. Verificăm de care ai nevoie și ce include oferta.",
    sections: [
  {
    "title": "Ce variantă se potrivește activității tale?",
    "body": "Un consultant IT, un medic și un proprietar de magazin pot produce pagube în moduri diferite. Pornim de la ce faci, cui i-ai putea produce o pierdere și ce îți cer contractele. Așa putem căuta protecția potrivită situației tale."
  },
  {
    "title": "Ce este limita de răspundere?",
    "body": "Este suma maximă pe care o poate plăti asigurătorul, în condițiile poliței. Poate exista o limită pentru fiecare eveniment și o altă limită pentru toate daunele dintr-un an. Dacă paguba depășește suma acoperită, diferența poate rămâne în grija ta."
  },
  {
    "title": "De ce depinde prețul?",
    "body": "Contează activitatea, suma maximă de despăgubire, țările în care lucrezi și franșiza, adică partea din daună pe care o plătești tu. Comparăm oferte pentru aceleași situații. Dacă riscul vine dintr-o greșeală în serviciul prestat unui client, verificăm și răspunderea profesională."
  }
],
    faqs: [...[
  {
    "question": "Este obligatorie răspunderea profesională?",
    "answer": "Pentru unele profesii există obligații legale sau profesionale. Asigurarea poate fi cerută și prin contractul cu un client. Verificăm cerințele care se aplică activității tale."
  },
  {
    "question": "Acoperă greșelile angajaților?",
    "answer": "Unele polițe pot include faptele angajaților pentru care răspunzi. Verificăm cine este asigurat, ce activități desfășoară și ce condiții se aplică."
  },
  {
    "question": "Ce limită de răspundere aleg?",
    "answer": "Pornim de la ce cer contractele și de la cât de mare ar putea fi o pagubă în activitatea ta. Apoi comparăm suma acoperită pe eveniment și pentru întreaga perioadă."
  },
  {
    "question": "Pot asigura și activitatea din afara României?",
    "answer": "Poate fi posibil, dacă asigurătorul acceptă țările și regulile juridice respective. Spune-mi de la început unde lucrezi și ce cerințe ai în contracte."
  }
], ...personalFaqExtras["raspundere"]],
  },

  accidente: {
    slug: "/asigurare-accidente",
    eyebrow: "Accidente",
    title: "Asigurare de accidente pentru tine și familie",
    description:
      "Un accident poate aduce cheltuieli și o perioadă în care nu poți lucra ca înainte. O asigurare de accidente îți poate oferi sprijin financiar pentru spitalizare, invaliditate sau alte urmări incluse în contract. Verificăm ce se potrivește activităților tale și cine poate fi asigurat.",
    metaTitle: "Asigurare de accidente: preț și despăgubiri",
    metaDescription:
      "Compară costul asigurării de accidente, sumele pentru invaliditate și spitalizare, activitățile acoperite și condițiile de despăgubire.",
    ctaLabel: "Cere ofertă accidente",
    whatsappMessage: "Bună! Doresc o ofertă pentru asigurare de accidente.",
    heroBullets: ["Pentru tine, familie sau, prin produse dedicate, șofer și pasageri", "Poate completa asigurarea de viață sau de sănătate", "Verificăm activitățile acoperite și suma plătită pentru fiecare situație"],
    suitableFor: [
  "vrei sprijin financiar pentru urmările unui accident",
  "cauți o variantă pentru membrii familiei",
  "te interesează protecția șoferului și a pasagerilor",
  "vrei să asiguri angajații firmei",
  "practici sporturi sau activități pentru care trebuie verificată protecția"
],
    commonCoverages: [
      "deces ca urmare a unui accident",
      "invaliditate permanentă din accident",
      "spitalizare continuă din accident",
      "intervenții chirurgicale, fracturi sau arsuri, dacă sunt incluse",
      "protecție pentru familie sau grupuri",
      "acoperire pentru șofer și pasageri, prin produse dedicate",
    ],
    compareChecklist: [
  "ce situații sunt considerate accidente acoperite",
  "ce sumă poți primi pentru fiecare urmare a accidentului",
  "unde și pentru cât timp este valabilă polița",
  "ce sporturi, ocupații și alte activități sunt excluse",
  "dacă poți include doar o persoană, familia sau un grup",
  "cum ceri plata și ce documente sunt necesare"
],
    offerData: [
      "persoană individuală, familie sau grup",
      "vârste aproximative și ocupație/activitate generală",
      "nivelul de protecție dorit",
      "dacă se dorește acoperire pentru șofer/pasageri",
      "activități sportive sau profesionale speciale, dacă există",
      "buget orientativ",
    ],
    importantNote:
      "Polița se referă la accidentele și urmările descrise în contract. Nu acoperă automat o îmbolnăvire și nu înlocuiește asigurarea de sănătate.",
    sections: [
  {
    "title": "Cum te poate ajuta?",
    "body": "Dacă un accident duce la spitalizare, fracturi sau invaliditate, polița poate plăti sumele prevăzute pentru acele situații. Ce primești și cum se calculează plata depind de contract. Putem verifica variante pentru tine, familie sau angajații firmei."
  },
  {
    "title": "Cum compari costul unei asigurări de accidente?",
    "body": "Compară oferte pentru aceleași persoane și activități. Uită-te separat la suma pentru invaliditate și la banii plătiți pentru zilele de spitalizare. O ofertă mai ieftină poate avea sume mai mici sau poate exclude un sport ori o activitate pe care o practici."
  }
],
    faqs: [...[
  {
    "question": "Este același lucru cu asigurarea de viață?",
    "answer": "Nu. Asigurarea de accidente se concentrează pe urmările unui accident și poate include decesul din accident. O asigurare de viață poate acoperi și alte cauze, în funcție de contract."
  },
  {
    "question": "Acoperă sporturile pe care le practic?",
    "answer": "Depinde de sport și de produs. Spune-mi ce practici, ca să verificăm dacă activitatea este inclusă, necesită o opțiune suplimentară sau este exclusă."
  },
  {
    "question": "Pot face asigurare pentru familie?",
    "answer": "Unele produse permit includerea membrilor familiei. Verificăm persoanele și vârstele acceptate, precum și sumele disponibile pentru fiecare."
  },
  {
    "question": "Pot face asigurare pentru angajați?",
    "answer": "Da, există și variante de grup. Oferta depinde de numărul de persoane, activitățile lor și condițiile asigurătorului."
  }
], ...personalFaqExtras["accidente"]],
  },
};
