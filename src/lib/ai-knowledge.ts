export type AdvisorProduct = {
  id: string;
  name: string;
  category: string;
  bestFor: string[];
  signals: string[];
  notFor?: string[];
  notes: string;
  nextStep: string;
};

export const advisorProducts: AdvisorProduct[] = [
  {
    id: "rca-pf",
    name: "RCA persoane fizice",
    category: "Auto",
    bestFor: ["șoferi persoane fizice", "mașini personale", "reînnoire poliță RCA"],
    signals: ["am mașină", "îmi expiră RCA", "vreau să circul legal", "am cumpărat o mașină"],
    notes:
      "RCA este asigurarea obligatorie de răspundere civilă auto. Recomandarea finală depinde de datele vehiculului, proprietarului și ofertele disponibile la momentul solicitării.",
    nextStep: "Clientul ar trebui să trimită o cerere de ofertă pentru verificarea variantelor disponibile.",
  },
  {
    id: "rca-firme-flote",
    name: "RCA firme și flote",
    category: "Auto / firme",
    bestFor: ["societăți comerciale", "flote mici", "autoutilitare", "vehicule folosite în activitatea firmei"],
    signals: ["firmă", "SRL", "flotă", "autoutilitară", "mai multe mașini", "transport"],
    notes:
      "Pentru firme contează tipul vehiculelor, utilizarea lor, numărul de mașini și istoricul. O discuție scurtă ajută la centralizarea ofertelor.",
    nextStep: "Clientul ar trebui să fie contactat pentru o listă minimă a vehiculelor și scopul utilizării.",
  },
  {
    id: "casco",
    name: "CASCO",
    category: "Auto",
    bestFor: ["mașini noi sau valoroase", "mașini finanțate prin leasing/credit", "șoferi care vor protecție pentru propriul autoturism"],
    signals: ["mașină nouă", "leasing", "credit", "vreau acoperire furt", "vreau acoperire avarii", "parcare afară"],
    notFor: ["client care caută doar obligația legală minimă"],
    notes:
      "CASCO poate acoperi avarii, furt și alte riscuri, în funcție de condițiile poliței. Sunt importante franșiza, excluderile, service-urile acceptate și valoarea asigurată.",
    nextStep: "Clientul ar trebui să discute cu consultantul pentru compararea acoperirilor, nu doar a prețului.",
  },
  {
    id: "pad-facultativa",
    name: "Asigurare locuință: PAD + facultativă",
    category: "Locuință",
    bestFor: ["apartamente", "case", "locuințe cu credit ipotecar", "proprietari care vor protecție extinsă"],
    signals: ["apartament", "casă", "credit ipotecar", "inundație", "incendiu", "cutremur", "bunuri în casă"],
    notes:
      "PAD este polița obligatorie pentru anumite riscuri, iar asigurarea facultativă poate extinde protecția pentru locuință, bunuri, răspundere față de vecini și alte riscuri, în funcție de produs.",
    nextStep: "Clientul ar trebui să ceară o ofertă pentru locuință și să discute valoarea clădirii, bunurile și riscurile dorite.",
  },
  {
    id: "calatorie",
    name: "Asigurare de călătorie",
    category: "Călătorie",
    bestFor: ["vacanțe", "city break", "călătorii business", "familii", "călătorii în afara țării"],
    signals: ["plec în vacanță", "city break", "călătorie", "avion", "bagaje", "medical în străinătate", "schi"],
    notes:
      "Asigurarea de călătorie poate include cheltuieli medicale, asistență, bagaje, anulare sau sporturi, în funcție de produs și destinație.",
    nextStep: "Clientul ar trebui să menționeze perioada, destinația și scopul călătoriei, fără a trimite date sensibile în chat.",
  },
  {
    id: "sanatate",
    name: "Asigurare de sănătate",
    category: "Sănătate",
    bestFor: ["persoane care vor acces mai rapid la servicii medicale", "familii", "angajați", "beneficii extrasalariale"],
    signals: ["sănătate", "clinici private", "analize", "consultații", "abonament medical", "beneficii angajați"],
    notes:
      "Pentru sănătate este important să nu fie colectate date medicale sensibile prin formularul public. Discuția inițială poate clarifica obiectivul general și tipul de acoperire dorit.",
    nextStep: "Clientul ar trebui să fie contactat pentru o discuție privată și pentru a primi opțiuni potrivite.",
  },
  {
    id: "viata",
    name: "Asigurare de viață / protecție financiară",
    category: "Viață",
    bestFor: ["familii", "persoane cu credit", "persoane care vor protecție financiară pentru dependenți"],
    signals: ["viață", "credit", "familie", "copii", "protecție financiară", "venituri"],
    notes:
      "Recomandarea depinde de obiectiv: protecție pentru familie, credit, economisire sau alte nevoi. Nu se cer date medicale în chatul public.",
    nextStep: "Clientul ar trebui să discute obiectivul și bugetul orientativ cu consultantul.",
  },
  {
    id: "raspundere-profesionala",
    name: "Răspundere civilă / profesională",
    category: "Firme / profesii",
    bestFor: ["profesioniști", "PFA", "SRL", "activități cu risc de prejudicii față de clienți sau terți"],
    signals: ["PFA", "SRL", "răspundere", "profesională", "client", "daune produse altora", "malpraxis"],
    notes:
      "Acoperirea depinde de profesie, activitate, limitele de răspundere și cerințele contractuale sau legale aplicabile.",
    nextStep: "Clientul ar trebui să trimită detalii generale despre activitate și cerințele partenerilor, fără documente sensibile în chat.",
  },
  {
    id: "bunuri-firme",
    name: "Asigurări pentru bunuri și activitatea firmei",
    category: "Firme",
    bestFor: ["magazine", "birouri", "depozite", "echipamente", "stocuri", "producție"],
    signals: ["firmă", "magazin", "depozit", "echipamente", "stoc", "incendiu", "furt", "business"],
    notes:
      "Pentru firme se pot analiza clădiri, bunuri, echipamente, stocuri, întreruperea activității și răspunderi, în funcție de nevoi.",
    nextStep: "Clientul ar trebui să ceară o discuție pentru identificarea riscurilor principale ale activității.",
  },
];

export const advisorKnowledge = `
Rol: asistent digital pentru un consultant de asigurări din zona Cluj și Bihor.
Scop: orientare inițială, educație și triere către produs/categorie potrivită. Nu emite polițe, nu oferă preț final și nu înlocuiește consultanța personalizată.
Reguli de răspuns:
- Răspunde în română, clar, scurt și prietenos.
- Recomandă maximum 2 categorii de produse când informațiile sunt suficiente.
- Dacă informațiile sunt insuficiente, pune 1-2 întrebări simple și apoi invită clientul să ceară ofertă.
- Nu promite „cel mai mic preț” sau acoperiri garantate.
- Nu cere CNP, serie document, poze cu acte, date medicale, adresă completă sau alte date sensibile în chat.
- Pentru sănătate/viață, evită întrebările medicale și recomandă discuție privată cu consultantul.
- Menționează că recomandarea este orientativă și oferta finală depinde de datele clientului și condițiile asigurătorilor.
- Încheie cu un îndemn către formularul de contact sau WhatsApp.
Format preferat:
Recomandare orientativă: ...
De ce: ...
Următorul pas: ...
`;
