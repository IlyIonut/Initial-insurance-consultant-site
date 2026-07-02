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
    title: "Asigurare CASCO explicată clar, dincolo de preț",
    description:
      "CASCO este asigurarea facultativă care poate proteja propriul vehicul pentru avarii, furt și alte evenimente, în funcție de condițiile produsului ales. Te ajut să compari acoperirile importante, nu doar prima anuală.",
    metaTitle: "Asigurare CASCO | Consultanță pentru acoperiri, franșiză și daune",
    metaDescription:
      "Consultanță CASCO pentru autoturisme: acoperiri uzuale, franșiză, furt, avarii, fenomene naturale, service-uri și date necesare pentru ofertă.",
    ctaLabel: "Cere ofertă CASCO",
    whatsappMessage: "Bună! Doresc o ofertă CASCO și aș vrea să compar acoperirile disponibile.",
    heroBullets: ["Pentru mașina ta, nu pentru prejudiciile produse terților", "Utilă mai ales pentru mașini noi, valoroase sau finanțate", "Condițiile diferă mult între pachete și asigurători"],
    suitableFor: [
      "autoturisme noi sau cu valoare ridicată",
      "mașini cumpărate prin leasing sau credit",
      "șoferi care parchează frecvent în spații expuse",
      "persoane care vor protecție pentru furt, avarii și fenomene naturale",
      "firme care folosesc autovehicule în activitatea curentă",
    ],
    commonCoverages: [
      "coliziuni, zgârieri, răsturnare sau derapaj",
      "incendiu, trăsnet, explozie",
      "fenomene naturale sau atmosferice: furtună, grindină, inundație, căderi de corpuri",
      "furt sau tentativă de furt, în condițiile poliței",
      "vandalism sau evenimente cu autor necunoscut, dacă pachetul include riscul",
      "elemente vitrate, asistență rutieră sau extindere teritorială, ca opțiuni/pachete suplimentare",
    ],
    compareChecklist: [
      "riscurile incluse în pachetul de bază și opțiunile suplimentare",
      "franșiza: valoare fixă, procentuală sau pe anumite tipuri de daune",
      "excluderile: utilizare comercială, șoferi neautorizați, neglijență, uzură, daune anterioare",
      "modul de stabilire a valorii asigurate și a despăgubirii",
      "service agreat / service ales / decontare directă",
      "acoperirea în afara României și eventualele limite teritoriale",
    ],
    offerData: [
      "marca, modelul, anul fabricației și motorizarea",
      "numărul de kilometri și valoarea orientativă a vehiculului",
      "persoană fizică sau juridică, utilizare personală sau profesională",
      "dacă mașina este în leasing/credit",
      "istoricul de daune, dacă este relevant",
      "preferințe: franșiză, service, asistență rutieră, extindere externă",
    ],
    importantNote:
      "CASCO nu înlocuiește RCA. RCA rămâne obligatorie și acoperă prejudiciile produse terților; CASCO poate acoperi propriul vehicul, în limitele și condițiile poliței alese.",
    sections: [
      {
        title: "Ce este CASCO",
        body:
          "CASCO este o asigurare auto facultativă. Rolul ei este să reducă impactul financiar al daunelor la propriul vehicul, atunci când riscul este inclus în poliță. De aceea, două oferte cu preț apropiat pot fi foarte diferite ca valoare reală pentru client.",
      },
      {
        title: "De ce contează comparația pe acoperiri",
        body:
          "În piață există pachete de bază, pachete extinse și clauze opționale. Unele includ doar riscuri limitate, altele adaugă furt, vandalism, fenomene naturale, elemente vitrate, asistență rutieră sau extindere teritorială. Recomandarea trebuie făcută după nevoia clientului, nu după un singur beneficiu promovat de un asigurător.",
      },
    ],
    faqs: [
      {
        question: "CASCO este obligatorie?",
        answer: "Nu. CASCO este facultativă, dar poate fi cerută de finanțator în cazul leasingului sau creditului auto.",
      },
      {
        question: "CASCO acoperă orice daună?",
        answer: "Nu. Acoperirea depinde de riscurile incluse, excluderi, franșiză și condițiile asigurătorului. De aceea este importantă verificarea condițiilor înainte de emitere.",
      },
      {
        question: "Ce este franșiza?",
        answer: "Franșiza este partea din daună suportată de client. Poate reduce prețul poliței, dar influențează despăgubirea la daună.",
      },
      {
        question: "Pot alege service-ul?",
        answer: "Depinde de poliță. Unele produse lucrează cu service-uri agreate, altele permit o libertate mai mare. Acest aspect trebuie verificat din ofertă.",
      },
    ],
  },

  locuinta: {
    slug: "/asigurare-locuinta",
    eyebrow: "Locuință",
    title: "Asigurare locuință: PAD și facultativă, explicate simplu",
    description:
      "Pentru o protecție corectă a casei sau apartamentului, trebuie înțeleasă diferența dintre PAD, polița obligatorie pentru dezastre naturale, și asigurarea facultativă, care poate extinde protecția pentru locuință, bunuri și răspundere civilă.",
    metaTitle: "Asigurare locuință | PAD și facultativă pentru casă sau apartament",
    metaDescription:
      "Consultanță pentru asigurarea locuinței: PAD obligatoriu, facultativă, bunuri, incendiu, furt, inundații, răspundere civilă și locuințe cu credit.",
    ctaLabel: "Cere ofertă locuință",
    whatsappMessage: "Bună! Doresc o ofertă pentru asigurarea locuinței: PAD și/sau facultativă.",
    heroBullets: ["PAD este obligatorie pentru proprietarii de locuințe", "Facultativa poate completa protecția pentru riscuri uzuale", "Poți include bunuri, răspundere față de vecini și asistență la domiciliu"],
    suitableFor: [
      "apartamente și case de locuit",
      "locuințe cumpărate prin credit ipotecar",
      "proprietari care vor protecție peste limita PAD",
      "persoane care vor să includă bunuri, instalații sau răspundere civilă",
      "locuințe închiriate, în funcție de calitatea clientului: proprietar sau chiriaș",
    ],
    commonCoverages: [
      "PAD: cutremur, inundații naturale și alunecări de teren, în limitele legale",
      "incendiu, trăsnet, explozie",
      "furtună, grindină, greutatea stratului de zăpadă sau alte fenomene naturale, în funcție de poliță",
      "daune produse de apă din conducte sau instalații",
      "furt, vandalism sau avarii accidentale, dacă sunt incluse",
      "bunuri casnice, elemente vitrate, răspundere civilă față de terți/vecini și asistență la domiciliu",
    ],
    compareChecklist: [
      "dacă există PAD valabilă și ce tip de locuință este: A sau B",
      "suma asigurată pentru clădire și dacă reflectă valoarea de reconstrucție",
      "dacă sunt asigurate și bunurile din locuință",
      "riscurile incluse în pachet și riscurile opționale",
      "franșize, excluderi și obligații de întreținere a locuinței",
      "beneficiarul poliței, dacă locuința este ipotecată în favoarea băncii",
    ],
    offerData: [
      "tip locuință: apartament sau casă",
      "localitate, suprafață utilă/construită și anul construcției",
      "structura și materialele principale ale construcției",
      "dacă există credit ipotecar și cerințe ale băncii",
      "valoarea estimată a clădirii și a bunurilor",
      "acoperiri dorite: bunuri, răspundere civilă, asistență, furt, apă, fenomene naturale",
    ],
    importantNote:
      "PAD acoperă doar riscurile de dezastru natural prevăzute de lege și în limitele legale. Pentru incendiu, furt, daune de apă, bunuri sau răspundere față de vecini este necesară, de regulă, o asigurare facultativă adecvată.",
    sections: [
      {
        title: "PAD, pe scurt",
        body:
          "PAD este polița obligatorie pentru locuințe. Pentru locuințele de tip A, suma asigurată este 100.000 lei, cu primă anuală de 130 lei. Pentru locuințele de tip B, suma asigurată este 50.000 lei, cu primă anuală de 50 lei. Valorile trebuie verificate periodic, pentru că pot exista modificări legislative.",
      },
      {
        title: "Facultativa de locuință",
        body:
          "Asigurarea facultativă nu trebuie prezentată ca un produs unic universal. În funcție de asigurător și pachet, poate include clădirea, bunurile, instalațiile, riscuri de apă, incendiu, furt, fenomene naturale, răspundere civilă sau servicii de asistență la domiciliu.",
      },
    ],
    faqs: [
      {
        question: "PAD este suficientă pentru locuință?",
        answer: "PAD acoperă doar riscurile obligatorii prevăzute de lege. Pentru protecție extinsă este utilă o poliță facultativă.",
      },
      {
        question: "Pot face facultativă fără PAD?",
        answer: "În practică, facultativa se analizează împreună cu existența PAD. Recomand să verificăm situația exactă înainte de ofertare.",
      },
      {
        question: "Pot asigura și bunurile?",
        answer: "Da, multe polițe facultative pot include bunuri casnice, electrocasnice, mobilier sau alte categorii, în limitele și condițiile poliței.",
      },
      {
        question: "Ce înseamnă răspundere civilă față de vecini?",
        answer: "Este acoperirea care poate ajuta dacă produci accidental prejudicii altor persoane, de exemplu o daună de apă către un vecin, dacă riscul este inclus.",
      },
    ],
  },

  calatorie: {
    slug: "/asigurare-calatorie",
    eyebrow: "Călătorie / Travel",
    title: "Asigurare de călătorie pentru vacanțe, city break-uri și deplasări business",
    description:
      "Asigurarea de călătorie poate acoperi cheltuieli medicale neprevăzute, asistență, bagaje sau anularea călătoriei, în funcție de pachet. Alegerea corectă depinde de destinație, durată, scopul călătoriei și activitățile planificate.",
    metaTitle: "Asigurare de călătorie | Travel insurance pentru vacanțe și business",
    metaDescription:
      "Consultanță pentru asigurare de călătorie: medical, asistență, bagaje, storno, sporturi, familie, Europa, SUA/Canada și alte destinații.",
    ctaLabel: "Cere ofertă călătorie",
    whatsappMessage: "Bună! Doresc o ofertă pentru asigurare de călătorie.",
    heroBullets: ["Pentru vacanțe, business travel sau deplasări în familie", "Atenție la destinație, durată și activități sportive", "Poate include clauze suplimentare: bagaje, storno, sporturi"],
    suitableFor: [
      "persoane care călătoresc în străinătate",
      "familii cu copii",
      "călătorii business",
      "city break-uri și vacanțe scurte",
      "călătorii cu zboruri, bagaje de cală sau rezervări scumpe",
      "persoane care practică sporturi recreative sau activități speciale, dacă se pot include clauze dedicate",
    ],
    commonCoverages: [
      "cheltuieli medicale de urgență în caz de accident sau îmbolnăvire",
      "asistență medicală și suport în străinătate",
      "transport medical, repatriere sau alte servicii de asistență, în funcție de poliță",
      "bagaje pierdute, furate, deteriorate sau întârziate, conform condițiilor",
      "anulare călătorie / storno, dacă este inclusă clauza",
      "sporturi, activități de iarnă sau sporturi extreme, de regulă prin opțiuni suplimentare",
    ],
    compareChecklist: [
      "suma asigurată pentru cheltuieli medicale",
      "zona de acoperire: Europa, worldwide, SUA/Canada sau alte destinații",
      "limitele pentru bagaje, întârziere, anulare sau întrerupere călătorie",
      "excluderi pentru boli preexistente, alcool, sporturi sau activități riscante",
      "vârsta persoanelor asigurate și durata maximă a călătoriei",
      "modul de contactare a asistenței în caz de urgență",
    ],
    offerData: [
      "destinația sau țările vizitate",
      "perioada exactă a călătoriei",
      "numărul de persoane și vârstele aproximative",
      "scopul călătoriei: turism, business, studii, muncă",
      "dacă sunt planificate sporturi, schi, drumeții sau alte activități speciale",
      "dacă dorești acoperire pentru bagaje sau storno",
    ],
    importantNote:
      "Nu toate polițele de călătorie includ automat bagaje, anulare, sporturi sau afecțiuni preexistente. Aceste aspecte trebuie verificate înainte de emitere, mai ales pentru destinații îndepărtate sau călătorii costisitoare.",
    sections: [
      {
        title: "Ce problemă rezolvă",
        body:
          "În străinătate, costurile medicale și de asistență pot fi ridicate. O poliță de călătorie bine aleasă poate ajuta în situații precum accident, îmbolnăvire, bagaje afectate sau anularea călătoriei, în funcție de pachet.",
      },
      {
        title: "Cum alegi corect",
        body:
          "Nu alegem doar după cel mai mic preț. Pentru o familie, o călătorie în SUA/Canada sau o vacanță la schi, criteriile importante pot fi diferite. De aceea discutăm perioada, destinația, activitățile și acoperirile suplimentare dorite.",
      },
    ],
    faqs: [
      {
        question: "Este suficient cardul european de sănătate?",
        answer: "Cardul european poate fi util în anumite situații în UE, dar nu înlocuiește automat o asigurare de călătorie cu asistență, bagaje sau storno. Depinde de destinație și de nevoia ta.",
      },
      {
        question: "Bagajele sunt incluse automat?",
        answer: "Nu întotdeauna. Unele produse includ bagaje în pachet, altele doar prin opțiuni suplimentare.",
      },
      {
        question: "Pot include anularea călătoriei?",
        answer: "Da, la anumite produse există clauză de tip storno/anulare, dar condițiile și momentul încheierii poliței sunt importante.",
      },
      {
        question: "Am nevoie de clauză pentru sporturi?",
        answer: "Dacă mergi la schi, sporturi nautice, drumeții dificile sau alte activități speciale, trebuie verificată acoperirea dedicată.",
      },
    ],
  },

  sanatate: {
    slug: "/asigurare-sanatate",
    eyebrow: "Sănătate",
    title: "Asigurare privată de sănătate pentru acces mai clar la servicii medicale",
    description:
      "Asigurările private de sănătate pot acoperi servicii medicale în ambulatoriu, spitalizare, intervenții sau tratament în anumite rețele, în funcție de produs. Discuția inițială trebuie făcută fără transmiterea datelor medicale sensibile prin formularul public.",
    metaTitle: "Asigurare privată de sănătate | Consultanță pentru persoane și familii",
    metaDescription:
      "Consultanță pentru asigurări private de sănătate: consultații, investigații, spitalizare, intervenții, rețea medicală, rambursare și beneficii pentru angajați.",
    ctaLabel: "Cere discuție sănătate",
    whatsappMessage: "Bună! Doresc o discuție despre o asigurare privată de sănătate.",
    heroBullets: ["Pentru persoane, familii sau beneficii pentru angajați", "Nu trimite diagnostice sau documente medicale prin formular", "Comparația se face pe servicii, limite, rețea și excluderi"],
    suitableFor: [
      "persoane care vor acces la servicii medicale private",
      "familii care vor o soluție predictibilă pentru consultații și investigații",
      "angajatori care vor beneficii pentru angajați",
      "persoane care vor acoperire pentru spitalizare sau intervenții, dacă produsul o permite",
    ],
    commonCoverages: [
      "consultații și investigații în regim ambulatoriu, în funcție de pachet",
      "spitalizare și intervenții chirurgicale, dacă sunt incluse",
      "servicii în rețea medicală parteneră sau prin rambursare",
      "a doua opinie medicală sau tratament în străinătate, la produse specializate",
      "beneficii de grup pentru angajați, în funcție de contract",
      "limite anuale, sub-limite pe servicii și perioade de așteptare",
    ],
    compareChecklist: [
      "ce servicii sunt incluse: ambulatoriu, spitalizare, chirurgie, investigații",
      "rețeaua de clinici și spitale disponibile",
      "dacă plata este directă către clinică sau prin rambursare",
      "limite anuale, sub-limite și coplată/franșiză",
      "perioade de așteptare și excluderi",
      "condiții pentru persoane fizice versus grupuri de angajați",
    ],
    offerData: [
      "persoană individuală, familie sau firmă",
      "numărul de persoane și intervale de vârstă",
      "tip de acoperire dorit: ambulatoriu, spitalizare, intervenții, internațional",
      "localitatea unde vrei acces la servicii",
      "buget orientativ",
      "nu trimite diagnostice, analize sau documente medicale prin formularul public",
    ],
    importantNote:
      "Pentru sănătate, datele medicale sunt sensibile. Site-ul trebuie să colecteze doar o solicitare de contact; detaliile medicale, dacă sunt necesare, se gestionează ulterior prin canalele și documentele asigurătorului.",
    sections: [
      {
        title: "Asigurare de sănătate vs. abonament medical",
        body:
          "Un abonament medical oferă de regulă acces la servicii într-o rețea, în timp ce o asigurare funcționează pe condiții de asigurare, limite, riscuri acoperite și proceduri de despăgubire/rambursare. Cele două pot semăna la nivel de experiență, dar nu sunt identice.",
      },
      {
        title: "Pentru firme",
        body:
          "Pentru companii, asigurarea de sănătate poate fi un beneficiu pentru angajați. Analiza pornește de la numărul de persoane, profilul echipei, localități, buget și nivelul de acoperire dorit.",
      },
    ],
    faqs: [
      {
        question: "Trebuie să trimit analize sau diagnostice prin formular?",
        answer: "Nu. Formularul public trebuie folosit doar pentru solicitarea de contact. Datele medicale se tratează separat, conform procedurilor asigurătorului.",
      },
      {
        question: "Se poate face pentru familie?",
        answer: "Da, în funcție de produs, pot exista variante individuale sau de familie.",
      },
      {
        question: "Este valabilă în orice clinică?",
        answer: "Depinde de produs: unele funcționează în rețele partenere, altele permit rambursare. Trebuie verificat înainte de alegere.",
      },
      {
        question: "Pot face asigurare pentru angajați?",
        answer: "Da, există soluții de grup pentru companii, cu condiții stabilite în funcție de echipă și acoperiri.",
      },
    ],
  },

  viata: {
    slug: "/asigurare-viata",
    eyebrow: "Viață",
    title: "Asigurare de viață pentru protecție financiară, credit sau familie",
    description:
      "Asigurarea de viață se alege în funcție de obiectiv: protecția familiei, acoperirea unui credit, economisire, protecție pentru copii sau boli grave. Recomandarea corectă pornește de la nevoie, perioadă și buget, nu de la un produs generic.",
    metaTitle: "Asigurare de viață | Protecție financiară pentru familie sau credit",
    metaDescription:
      "Consultanță pentru asigurare de viață: protecție familie, credit, sumă descrescătoare, economisire, copii, boli grave și obiective financiare.",
    ctaLabel: "Cere discuție viață",
    whatsappMessage: "Bună! Doresc o discuție despre o asigurare de viață.",
    heroBullets: ["Pentru protecția familiei sau a unui credit", "Poate fi simplă, cu economisire sau cu clauze suplimentare", "Nu trimite date medicale prin formularul public"],
    suitableFor: [
      "persoane cu familie sau copii dependenți financiar",
      "persoane cu credit ipotecar sau alte obligații financiare",
      "persoane care vor protecție în caz de deces, invaliditate sau boli grave, dacă produsul include",
      "părinți care urmăresc economisire/protecție pentru copii",
      "persoane care vor un plan pe termen mediu sau lung",
    ],
    commonCoverages: [
      "deces din orice cauză sau din accident, în funcție de produs",
      "invaliditate permanentă, ca risc inclus sau clauză suplimentară",
      "boli grave, la produse sau clauze dedicate",
      "sumă asigurată constantă sau descrescătoare pentru credit",
      "componentă de economisire, maturitate sau investiție, pentru anumite produse",
      "clauze suplimentare: spitalizare, intervenții, accidente, scutire de plată, în funcție de asigurător",
    ],
    compareChecklist: [
      "obiectivul principal: protecție pură, credit, economisire, copii, boli grave",
      "suma asigurată necesară și perioada contractului",
      "beneficiarii și rolul poliței în planul financiar al familiei",
      "costul total și flexibilitatea plății",
      "excluderi, perioade de așteptare și cerințe de evaluare medicală",
      "dacă produsul are valoare de răscumpărare sau este doar protecție",
    ],
    offerData: [
      "scopul poliței: familie, credit, economisire, protecție copii",
      "perioada dorită și suma orientativă de protecție",
      "vârsta persoanei asigurate și statutul de fumător/nefumător, dacă se solicită ulterior",
      "buget orientativ lunar/anual",
      "nu trimite documente medicale sau diagnostice prin formularul public",
      "dacă există cerințe ale băncii pentru credit",
    ],
    importantNote:
      "Asigurările de viață sunt produse pe termen mediu/lung. Înainte de alegere, trebuie clarificat dacă obiectivul este protecția simplă, acoperirea unui credit, economisirea sau o combinație între acestea.",
    sections: [
      {
        title: "Protecție simplă vs. economisire",
        body:
          "O poliță de protecție pură urmărește plata unei sume în caz de eveniment asigurat. O poliță cu economisire/investiție poate avea și componentă de acumulare sau maturitate. Costurile, flexibilitatea și riscurile sunt diferite.",
      },
      {
        title: "Asigurarea pentru credit",
        body:
          "Pentru credite, unele polițe urmăresc protejarea soldului datoriei, uneori cu sumă asigurată descrescătoare. Este important să verificăm cerințele băncii, beneficiarul și perioada creditului.",
      },
    ],
    faqs: [
      {
        question: "Ce sumă asigurată ar trebui să aleg?",
        answer: "Depinde de venit, datorii, persoane dependente și perioada în care familia ar avea nevoie de sprijin. Se calculează orientativ în discuția de consultanță.",
      },
      {
        question: "Este același lucru cu o asigurare de sănătate?",
        answer: "Nu. Viața urmărește protecție financiară în caz de evenimente majore; sănătatea urmărește acces la servicii medicale sau despăgubiri medicale, în funcție de produs.",
      },
      {
        question: "Trebuie control medical?",
        answer: "Depinde de asigurător, vârstă, sumă asigurată și produs. Nu se trimit date medicale prin formularul public.",
      },
      {
        question: "Pot acoperi un credit ipotecar?",
        answer: "Da, există produse dedicate sau adaptabile pentru credite, dar trebuie verificate cerințele băncii.",
      },
    ],
  },

  firme: {
    slug: "/asigurari-firme",
    eyebrow: "Firme",
    title: "Asigurări pentru firme: bunuri, răspunderi, angajați și activitate",
    description:
      "Pentru firme, asigurarea potrivită depinde de activitate, locații, bunuri, echipamente, stocuri, angajați, vehicule și riscurile față de clienți sau terți. Scopul este să identificăm riscurile reale, nu să alegem un pachet generic.",
    metaTitle: "Asigurări firme | IMM, bunuri, răspundere civilă, flote și angajați",
    metaDescription:
      "Consultanță asigurări pentru firme: clădiri, bunuri, echipamente, stocuri, răspundere civilă, răspundere profesională, flote, transport, angajați.",
    ctaLabel: "Cere ofertă pentru firmă",
    whatsappMessage: "Bună! Doresc o discuție despre asigurări pentru firmă.",
    heroBullets: ["Pentru SRL, PFA, cabinete, magazine, birouri, HoReCa sau servicii", "Analizăm riscurile activității, nu doar denumirea produsului", "Pot fi combinate mai multe tipuri de protecție"],
    suitableFor: [
      "IMM-uri, PFA-uri și profesii liberale",
      "magazine, restaurante, birouri, cabinete, depozite sau ateliere",
      "firme cu echipamente, stocuri sau clădiri",
      "firme care lucrează cu clienți, vizitatori sau parteneri contractuali",
      "companii cu autovehicule, transporturi sau angajați pentru care se doresc beneficii",
    ],
    commonCoverages: [
      "clădiri, bunuri, echipamente, stocuri și amenajări",
      "incendiu, explozie, fenomene naturale, apă de conductă, furt sau vandalism, în funcție de poliță",
      "întreruperea activității, dacă este inclusă sau atașată",
      "răspundere civilă legală față de terți",
      "răspundere profesională pentru anumite profesii",
      "flote, transporturi, CMR/cargo, accidente angajați sau sănătate de grup, dacă sunt relevante",
    ],
    compareChecklist: [
      "activitatea exactă și codurile CAEN relevante",
      "locațiile unde se desfășoară activitatea și măsurile de siguranță",
      "valorile clădirilor, bunurilor, stocurilor și echipamentelor",
      "limitele de răspundere cerute de contracte sau de lege",
      "excluderi pentru activități speciale, depozitare, substanțe sau lucrări cu risc ridicat",
      "dacă este nevoie de polițe separate pentru auto, transport, răspundere profesională sau angajați",
    ],
    offerData: [
      "denumire firmă și domeniul de activitate, fără documente sensibile în primă fază",
      "tipul locației: birou, magazin, depozit, cabinet, atelier etc.",
      "valorile orientative ale bunurilor, stocurilor, echipamentelor și clădirilor",
      "numărul de angajați, dacă se dorește protecție de grup",
      "cerințe contractuale de la clienți, bănci, furnizori sau autorități",
      "vehicule, transporturi sau activități speciale, dacă există",
    ],
    importantNote:
      "Pentru firme, un produs standard poate fi insuficient dacă activitatea are riscuri specifice. De aceea, înainte de ofertă trebuie clarificate activitatea, locația, valorile asigurate și limitele de răspundere necesare.",
    sections: [
      {
        title: "O firmă poate avea mai multe riscuri simultan",
        body:
          "O companie poate avea nevoie de protecție pentru bunuri, răspundere civilă, vehicule, transporturi, angajați și contracte. Nu toate acestea intră într-o singură poliță, deci consultanța constă în maparea riscurilor.",
      },
      {
        title: "Răspunderea civilă și profesională",
        body:
          "Răspunderea civilă legală poate acoperi prejudicii accidentale produse terților. Răspunderea profesională este relevantă pentru profesii sau servicii unde o eroare poate produce pierderi clientului. Limitele și excluderile contează mult.",
      },
    ],
    faqs: [
      {
        question: "Pot asigura doar echipamentele firmei?",
        answer: "Da, în funcție de produs, pot fi asigurate echipamente, stocuri, bunuri sau clădiri. Trebuie stabilite valorile și riscurile dorite.",
      },
      {
        question: "Ce este răspunderea civilă pentru firmă?",
        answer: "Este protecția pentru anumite prejudicii produse terților prin activitatea firmei, în limitele și condițiile poliței.",
      },
      {
        question: "Am nevoie de răspundere profesională?",
        answer: "Depinde de profesie, contracte și obligații legale. Este relevantă mai ales când oferi servicii specializate și poți produce pierderi clientului printr-o eroare profesională.",
      },
      {
        question: "Poți analiza o flotă mică?",
        answer: "Da. Pentru flote contează numărul de vehicule, utilizarea lor, șoferii, istoricul de daune și tipul activității.",
      },
    ],
  },

  raspundere: {
    slug: "/asigurare-raspundere-civila",
    eyebrow: "Răspundere civilă",
    title: "Asigurări de răspundere civilă și profesională",
    description:
      "Răspunderea civilă acoperă, în anumite condiții, prejudicii produse altor persoane sau bunurilor acestora. Pentru profesii și firme, răspunderea profesională poate fi esențială când o eroare produce pierderi clientului.",
    metaTitle: "Asigurare răspundere civilă și profesională | Consultanță pentru firme și profesii",
    metaDescription:
      "Consultanță pentru asigurări de răspundere civilă legală, profesională, față de terți, manageri, profesii liberale, PFA și SRL.",
    ctaLabel: "Cere ofertă răspundere",
    whatsappMessage: "Bună! Doresc o ofertă pentru asigurare de răspundere civilă/profesională.",
    heroBullets: ["Pentru profesii, firme și situații cu risc față de terți", "Limita de răspundere și excluderile sunt decisive", "Poate fi cerută prin lege sau prin contract"],
    suitableFor: [
      "PFA-uri și SRL-uri care prestează servicii",
      "profesii liberale sau reglementate",
      "firme cu vizitatori, clienți sau lucrări la sediul clientului",
      "manageri, administratori sau persoane cu responsabilități de conducere, dacă produsul este disponibil",
      "persoane care au cerințe contractuale de asigurare impuse de parteneri",
    ],
    commonCoverages: [
      "prejudicii materiale produse terților",
      "vătămări corporale produse accidental, în funcție de poliță",
      "cheltuieli de judecată sau apărare, dacă sunt incluse",
      "prejudicii patrimoniale din erori profesionale, la polițele profesionale",
      "răspunderea angajaților/prepușilor, dacă este inclusă",
      "retroactivitate sau perioadă extinsă de notificare, la anumite polițe profesionale",
    ],
    compareChecklist: [
      "tipul răspunderii: generală, profesională, produs, managerială sau altă formă",
      "limita de răspundere per eveniment și agregat anual",
      "franșiză, excluderi și activități neacoperite",
      "cerințe legale sau contractuale pentru profesia/activitatea ta",
      "teritoriul acoperit și jurisdicția aplicabilă",
      "modul de notificare a daunelor și perioada de acoperire",
    ],
    offerData: [
      "profesia sau activitatea exactă",
      "cifra de afaceri orientativă sau volumul activității, dacă este relevant",
      "limita de răspundere cerută de contract/lege",
      "teritoriul unde se desfășoară activitatea",
      "dacă ai avut cereri de despăgubire anterioare",
      "nu trimite contracte sau documente sensibile prin formularul public; le discutăm ulterior dacă este necesar",
    ],
    importantNote:
      "Răspunderea civilă generală și răspunderea profesională nu sunt același lucru. Prima se referă, de regulă, la prejudicii accidentale față de terți; a doua la pierderi produse prin erori profesionale, în condițiile poliței.",
    sections: [
      {
        title: "De ce nu există o recomandare universală",
        body:
          "O firmă de servicii IT, un cabinet medical, un avocat, un magazin și un administrator de clădire au riscuri diferite. Trebuie analizată activitatea, limita de răspundere cerută și obligațiile contractuale.",
      },
      {
        title: "Ce înseamnă limită de răspundere",
        body:
          "Limita de răspundere este suma maximă până la care asigurătorul poate despăgubi, conform poliței. O limită prea mică poate face polița insuficientă pentru contracte sau riscuri reale.",
      },
    ],
    faqs: [
      {
        question: "Este obligatorie răspunderea profesională?",
        answer: "Pentru unele profesii poate fi obligatorie sau cerută de organizații profesionale/contracte. Trebuie verificat cazul concret.",
      },
      {
        question: "Acoperă greșelile angajaților?",
        answer: "Unele polițe pot include faptele angajaților/prepușilor, dar depinde de condițiile produsului.",
      },
      {
        question: "Ce limită de răspundere aleg?",
        answer: "Depinde de cerințele contractuale, riscul activității și impactul financiar posibil al unei daune.",
      },
      {
        question: "Pot asigura o activitate desfășurată și în afara României?",
        answer: "Depinde de teritoriul și jurisdicția acceptate de asigurător. Trebuie menționat înainte de ofertare.",
      },
    ],
  },

  accidente: {
    slug: "/asigurare-accidente",
    eyebrow: "Accidente",
    title: "Asigurare de accidente pentru persoane, familie sau pasageri",
    description:
      "Asigurarea de accidente poate oferi protecție financiară în cazul unor evenimente accidentale, precum invaliditate, spitalizare, intervenții sau alte consecințe, în funcție de pachet. Este diferită de asigurarea de sănătate și de asigurarea de viață.",
    metaTitle: "Asigurare accidente | Persoane, familie, șoferi și pasageri",
    metaDescription:
      "Consultanță pentru asigurări de accidente: invaliditate, spitalizare, intervenții, fracturi, familie, șoferi și persoane transportate.",
    ctaLabel: "Cere ofertă accidente",
    whatsappMessage: "Bună! Doresc o ofertă pentru asigurare de accidente.",
    heroBullets: ["Pentru persoane individuale, familie sau pasageri", "Poate completa viața sau sănătatea", "Se aleg sume și clauze în funcție de activitate"],
    suitableFor: [
      "persoane active care vor protecție financiară în caz de accident",
      "familii cu copii",
      "șoferi și persoane transportate",
      "angajatori care vor beneficii pentru angajați",
      "persoane care practică activități cu risc moderat, dacă produsul permite",
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
      "ce evenimente sunt considerate accidente acoperite",
      "sumele asigurate pentru fiecare risc",
      "teritoriul de valabilitate și durata acoperirii",
      "excluderi pentru sporturi, activități profesionale sau comportamente riscante",
      "dacă produsul este individual, familial sau de grup",
      "procedura de despăgubire și documentele necesare",
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
      "Asigurarea de accidente acoperă evenimente accidentale definite în poliță. Nu este identică cu sănătatea privată și nu acoperă automat orice problemă medicală.",
    sections: [
      {
        title: "Când este utilă",
        body:
          "Poate fi utilă când vrei o protecție financiară simplă pentru consecințe ale accidentelor: invaliditate, spitalizare, intervenții sau alte riscuri incluse. Pentru familii sau angajatori, poate fi integrată într-un pachet mai larg.",
      },
      {
        title: "Cum o compari",
        body:
          "Nu compara doar prima. Uită-te la sumele asigurate pe fiecare risc, excluderi, activități acoperite și modul de despăgubire.",
      },
    ],
    faqs: [
      {
        question: "Este același lucru cu asigurarea de viață?",
        answer: "Nu. Poate include deces din accident, dar este concentrată pe evenimente accidentale și consecințele lor, conform condițiilor.",
      },
      {
        question: "Acoperă sporturile?",
        answer: "Depinde de produs. Sporturile sau activitățile cu risc pot necesita clauze speciale sau pot fi excluse.",
      },
      {
        question: "Se poate face pentru familie?",
        answer: "Da, unele produse permit acoperire individuală sau familială.",
      },
      {
        question: "Pot face pentru angajați?",
        answer: "Da, există soluții de grup pentru angajați, în funcție de asigurător și condiții.",
      },
    ],
  },
};
