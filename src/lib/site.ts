export const SITE = {
  name: "IlyAsig",
  consultantName: process.env.NEXT_PUBLIC_CONSULTANT_NAME || "",
  city: "România",
  serviceAreas: ["România"],
  seoAreas: [
    { "@type": "AdministrativeArea", name: "Județul Bihor, România" },
    { "@type": "AdministrativeArea", name: "Județul Cluj, România" },
    { "@type": "City", name: "Ștei, România" },
    { "@type": "City", name: "Beiuș, România" },
    { "@type": "City", name: "Cluj-Napoca, România" },
    { "@type": "City", name: "Oradea, România" },
  ],
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "0729 062 563",
  phoneRaw: (process.env.NEXT_PUBLIC_PHONE || "40729062563").replace(/\D/g, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "Ionut.Ilies@kbagencies.ro",
  requestEmail: process.env.NEXT_PUBLIC_REQUEST_EMAIL || "",
  company: process.env.NEXT_PUBLIC_BROKER_COMPANY || "",
  registration: process.env.NEXT_PUBLIC_REGISTRATION || "",
  operatorName: process.env.NEXT_PUBLIC_OPERATOR_NAME || "",
  professionalAddress: process.env.NEXT_PUBLIC_PROFESSIONAL_ADDRESS || "",
  taxId: process.env.NEXT_PUBLIC_TAX_ID || "",
  tradeRegister: process.env.NEXT_PUBLIC_TRADE_REGISTER || "",
  intermediaryRole: process.env.NEXT_PUBLIC_INTERMEDIARY_ROLE || "",
  complaintsEmail: process.env.NEXT_PUBLIC_COMPLAINTS_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL || "Ionut.Ilies@kbagencies.ro",
  description: "IlyAsig oferă consultanță în asigurări pentru firme, fermieri și persoane fizice. Compară protecțiile pentru bunuri, culturi agricole, mașină și locuință.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://ilyasig.ro").replace(/\/$/, ""),
};

export const insuranceTypes = [
  { title: "RCA", href: "/asigurare-rca", icon: "car", tag: "Auto", description: "Oferte RCA, verificarea datelor și explicații despre bonus-malus." },
  { title: "CASCO", href: "/asigurare-casco", icon: "shield", tag: "Auto", description: "Vezi ce poate acoperi CASCO, unde repari mașina și ce costuri rămân în grija ta." },
  { title: "Locuință", href: "/asigurare-locuinta", icon: "home", tag: "Acasă", description: "Protejează casa și bunurile tale. Află diferența dintre PAD și polița facultativă." },
  { title: "Călătorie", href: "/asigurare-calatorie", icon: "plane", tag: "În deplasare", description: "Protecție medicală și opțiuni pentru călătoriile tale." },
  { title: "Sănătate", href: "/asigurare-sanatate", icon: "heart", tag: "Pentru tine", description: "Consultații, investigații și spitalizare, în funcție de plan." },
  { title: "Viață", href: "/asigurare-viata", icon: "people", tag: "Familie", description: "Protecție financiară pentru tine și oamenii care depind de tine." },
  { title: "Accidente", href: "/asigurare-accidente", icon: "check", tag: "Protecție", description: "Soluții pentru consecințele financiare ale unui accident." },
  { title: "Răspundere civilă", href: "/asigurare-raspundere-civila", icon: "scale", tag: "Față de alții", description: "Protecție pentru pagubele pe care le-ai putea produce accidental altor persoane." },
];

export const faqs = [
  { question: "Mă poți ajuta dacă am o firmă mică sau un PFA?", answer: "Da. Putem discuta despre un IMM, SRL, PFA sau o profesie liberală. Spune-mi cu ce te ocupi, unde lucrezi și ce ai vrea să protejezi, iar eu verific variantele disponibile și condițiile asigurătorilor." },
  { question: "Am deja polițe. Mai are sens să le verificăm?", answer: "Da, mai ales dacă ai făcut investiții, ai schimbat sediul ori ai adăugat servicii. Verificăm ce este declarat, valorile, limitele și situațiile excluse. Putem confirma că polițele încă se potrivesc sau putem vedea ce trebuie clarificat." },
  { question: "Pot avea o singură poliță pentru toată firma?", answer: "Unele pachete reunesc mai multe protecții. Pentru mașini, greșeli profesionale, sănătatea echipei sau incidente informatice pot fi necesare polițe separate. Îți explic rolul fiecăreia înainte să alegi." },
  { question: "Pot cere o discuție din orice județ?", answer: "Da, pentru tine sau pentru firmă, oriunde în România. Îți explic ce date sunt necesare, dacă asigurătorul cere o evaluare a locației și ce variante poate oferi pentru situația ta." },
  { question: "Ce pregătesc pentru prima discuție?", answer: "Spune-mi cu ce te ocupi, localitatea și ce ai vrea să asiguri. Dacă ai deja polițe, notează când expiră. Pentru început nu ai nevoie să trimiți acte; stabilim apoi documentele necesare pentru ofertă." },
  { question: "Pot cere și asigurări pentru mine sau familie?", answer: "Da. Te pot ajuta să compari RCA, CASCO, locuință, călătorie, sănătate, viață și accidente. Alege produsul care te interesează sau scrie-mi pe scurt ce cauți în formularul de contact." },
  { question: "Mă poți ajuta cu asigurarea culturilor agricole?", answer: "Da, putem discuta despre culturi de câmp, vii, livezi, legume, sere și solarii. Verificăm ce fenomene pot fi acoperite, inclusiv dacă există o variantă pentru secetă. Separat, verificăm dacă poți cere sprijin pentru costul poliței; încheierea asigurării nu garantează finanțarea." },
];
