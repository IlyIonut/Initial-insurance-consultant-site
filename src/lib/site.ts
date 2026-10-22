export const SITE = {
  name: "IlyAsig",
  consultantName: process.env.NEXT_PUBLIC_CONSULTANT_NAME || "",
  city: "Cluj și Bihor",
  serviceAreas: ["Cluj", "Bihor", "Cluj-Napoca", "Oradea", "Florești", "Turda", "Beiuș"],
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "",
  phoneRaw: (process.env.NEXT_PUBLIC_PHONE || "").replace(/\D/g, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  company: process.env.NEXT_PUBLIC_BROKER_COMPANY || "",
  registration: process.env.NEXT_PUBLIC_REGISTRATION || "",
  description: "Asigurări pentru firme și IMM-uri în Cluj și Bihor: bunuri, echipamente, răspunderi, flote și angajați. Consultanță și pentru persoane fizice.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://initial-insurance-consultant-site.vercel.app").replace(/\/$/, ""),
};

export const insuranceTypes = [
  { title: "RCA", href: "/asigurare-rca", icon: "car", tag: "Auto", description: "Oferte RCA, verificarea datelor și explicații despre bonus-malus." },
  { title: "CASCO", href: "/asigurare-casco", icon: "shield", tag: "Auto", description: "Avarii, furt, franșize și opțiuni de reparație pentru mașina ta." },
  { title: "Locuință", href: "/asigurare-locuinta", icon: "home", tag: "Acasă", description: "PAD și asigurare facultativă pentru locuință, bunuri și răspundere." },
  { title: "Călătorie", href: "/asigurare-calatorie", icon: "plane", tag: "În deplasare", description: "Protecție medicală și opțiuni pentru călătoriile tale." },
  { title: "Sănătate", href: "/asigurare-sanatate", icon: "heart", tag: "Pentru tine", description: "Consultații, investigații și spitalizare, în funcție de plan." },
  { title: "Viață", href: "/asigurare-viata", icon: "people", tag: "Familie", description: "Protecție financiară pentru tine și oamenii care depind de tine." },
  { title: "Accidente", href: "/asigurare-accidente", icon: "check", tag: "Protecție", description: "Soluții pentru consecințele financiare ale unui accident." },
  { title: "Răspundere civilă", href: "/asigurare-raspundere-civila", icon: "scale", tag: "Față de terți", description: "Acoperiri pentru prejudicii accidentale produse altor persoane." },
];

export const faqs = [
  { question: "Cu ce tipuri de firme putem începe o discuție?", answer: "Cu IMM-uri, SRL-uri, PFA-uri și profesii liberale. Începem cu activitatea efectivă, locațiile și riscurile relevante. Disponibilitatea unei soluții depinde de activitate și de acceptarea asigurătorului." },
  { question: "Am deja polițe. Mai are sens o analiză?", answer: "Da. Putem verifica ce bunuri și activități sunt declarate, sumele și limitele asigurate, franșizele, excluderile și schimbările apărute în firmă. O analiză poate confirma o protecție adecvată sau poate identifica aspecte de clarificat." },
  { question: "Pot primi o singură poliță pentru toată firma?", answer: "Unele produse reunesc mai multe protecții, dar nu toate riscurile intră în același contract. Pentru flote, răspundere profesională, sănătate de grup sau riscuri cibernetice pot fi necesare polițe distincte." },
  { question: "Lucrați doar în Cluj și Bihor?", answer: "Acestea sunt zonele principale de consultanță. Discuția inițială și analiza documentelor se pot desfășura și online. Posibilitatea unei vizite la locație se stabilește în funcție de situație." },
  { question: "Ce pregătesc pentru prima discuție?", answer: "Domeniul de activitate, localitatea, ce vrei să protejezi și, dacă ai polițe, data următoarei reînnoiri. Documentele și datele suplimentare se cer ulterior, în funcție de soluția analizată." },
  { question: "Pot solicita și asigurări pentru mine sau familie?", answer: "Da. Secțiunea pentru persoane fizice include RCA, CASCO, locuință, călătorie, sănătate, viață și accidente. Poți începe din pagina dedicată sau din formularul de contact." },
];
