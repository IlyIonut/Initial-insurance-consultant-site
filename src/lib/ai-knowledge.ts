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
      "RCA este asigurarea obligatorie de răspundere civilă auto. Acoperă prejudiciile produse terților, nu avariile propriului vehicul. Recomandarea finală depinde de datele vehiculului, proprietarului, clasa bonus-malus și ofertele disponibile la momentul solicitării.",
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
    signals: ["mașină nouă", "leasing", "credit", "vreau acoperire furt", "vreau acoperire avarii", "parcare afară", "grindină", "vandalism"],
    notFor: ["client care caută doar obligația legală minimă"],
    notes:
      "CASCO poate acoperi avarii, furt, incendiu, fenomene naturale, vandalism, elemente vitrate sau asistență rutieră, în funcție de pachet. Sunt importante franșiza, excluderile, service-urile acceptate, valoarea asigurată și acoperirea teritorială.",
    nextStep: "Clientul ar trebui să discute cu consultantul pentru compararea acoperirilor, nu doar a prețului.",
  },
  {
    id: "pad-facultativa",
    name: "Asigurare locuință: PAD + facultativă",
    category: "Locuință",
    bestFor: ["apartamente", "case", "locuințe cu credit ipotecar", "proprietari care vor protecție extinsă"],
    signals: ["apartament", "casă", "credit ipotecar", "inundație", "incendiu", "cutremur", "bunuri în casă", "vecini", "PAD"],
    notes:
      "PAD este polița obligatorie pentru cutremur, inundații naturale și alunecări de teren, în limitele legale. Asigurarea facultativă poate extinde protecția pentru clădire, bunuri, răspundere față de vecini, apă de conductă, furt, incendiu și alte riscuri, în funcție de produs.",
    nextStep: "Clientul ar trebui să ceară o ofertă pentru locuință și să discute valoarea clădirii, bunurile și riscurile dorite.",
  },
  {
    id: "calatorie",
    name: "Asigurare de călătorie / Travel",
    category: "Călătorie",
    bestFor: ["vacanțe", "city break", "călătorii business", "familii", "călătorii în afara țării"],
    signals: ["plec în vacanță", "city break", "călătorie", "avion", "bagaje", "medical în străinătate", "schi", "storno", "SUA", "Canada"],
    notes:
      "Asigurarea de călătorie poate include cheltuieli medicale de urgență, asistență, repatriere, bagaje, anulare/storno sau sporturi, în funcție de produs, destinație și opțiuni.",
    nextStep: "Clientul ar trebui să menționeze perioada, destinația, vârstele aproximative și scopul călătoriei, fără a trimite date sensibile în chat.",
  },
  {
    id: "sanatate",
    name: "Asigurare privată de sănătate",
    category: "Sănătate",
    bestFor: ["persoane care vor acces mai rapid la servicii medicale", "familii", "angajați", "beneficii extrasalariale"],
    signals: ["sănătate", "clinici private", "analize", "consultații", "abonament medical", "beneficii angajați", "spitalizare", "intervenții"],
    notes:
      "Pentru sănătate este important să nu fie colectate date medicale sensibile prin formularul public. Discuția inițială poate clarifica obiectivul general, rețeaua dorită, tipul de acoperire și bugetul.",
    nextStep: "Clientul ar trebui să fie contactat pentru o discuție privată și pentru a primi opțiuni potrivite.",
  },
  {
    id: "viata",
    name: "Asigurare de viață / protecție financiară",
    category: "Viață",
    bestFor: ["familii", "persoane cu credit", "persoane care vor protecție financiară pentru dependenți", "părinți care urmăresc economisire pentru copii"],
    signals: ["viață", "credit", "familie", "copii", "protecție financiară", "venituri", "boli grave", "economisire"],
    notes:
      "Recomandarea depinde de obiectiv: protecție pentru familie, credit, economisire, copii, boli grave sau alte nevoi. Nu se cer date medicale în chatul public.",
    nextStep: "Clientul ar trebui să discute obiectivul, perioada și bugetul orientativ cu consultantul.",
  },
  {
    id: "accidente",
    name: "Asigurare de accidente",
    category: "Persoane",
    bestFor: ["persoane active", "familii", "șoferi și pasageri", "angajați"],
    signals: ["accident", "invaliditate", "spitalizare", "fractură", "șofer", "pasageri", "familie", "angajați"],
    notes:
      "Asigurarea de accidente poate acoperi consecințe ale evenimentelor accidentale: deces din accident, invaliditate, spitalizare, intervenții, fracturi sau alte riscuri incluse. Nu este identică cu sănătatea privată.",
    nextStep: "Clientul ar trebui să menționeze dacă dorește protecție individuală, familială, pentru șofer/pasageri sau pentru angajați.",
  },
  {
    id: "raspundere-profesionala",
    name: "Răspundere civilă / profesională",
    category: "Firme / profesii",
    bestFor: ["profesioniști", "PFA", "SRL", "activități cu risc de prejudicii față de clienți sau terți"],
    signals: ["PFA", "SRL", "răspundere", "profesională", "client", "daune produse altora", "malpraxis", "contract", "limită de răspundere"],
    notes:
      "Acoperirea depinde de profesie, activitate, limitele de răspundere, teritoriu, excluderi și cerințele contractuale sau legale aplicabile.",
    nextStep: "Clientul ar trebui să trimită detalii generale despre activitate și cerințele partenerilor, fără documente sensibile în chat.",
  },
  {
    id: "bunuri-firme",
    name: "Asigurări pentru bunuri și activitatea firmei",
    category: "Firme",
    bestFor: ["magazine", "birouri", "depozite", "echipamente", "stocuri", "producție", "IMM"],
    signals: ["firmă", "magazin", "depozit", "echipamente", "stoc", "incendiu", "furt", "business", "CAEN", "clădire", "răspundere civilă"],
    notes:
      "Pentru firme se pot analiza clădiri, bunuri, echipamente, stocuri, întreruperea activității, răspunderi, transporturi și beneficii pentru angajați, în funcție de nevoi.",
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
- Nu promite „cel mai mic preț”, despăgubiri garantate sau acoperiri universale.
- Nu cere CNP, serie document, poze cu acte, date medicale, adresă completă sau alte date sensibile în chat.
- Pentru RCA, explică diferența RCA vs CASCO: RCA acoperă prejudiciile produse terților, CASCO poate acoperi propriul vehicul, în funcție de produs.
- Pentru RCA, dacă utilizatorul întreabă despre accident, menționează orientativ: 112 dacă sunt victime, constatare amiabilă doar pentru accidente cu două vehicule și pagube materiale, altfel poliție/asigurător.
- Pentru CASCO, menționează că trebuie comparate acoperirile, franșiza, excluderile, service-ul, valoarea asigurată și acoperirea teritorială.
- Pentru locuință, explică diferența PAD vs facultativă: PAD acoperă dezastre naturale în limite legale, facultativa poate extinde acoperirea la incendiu, apă, furt, bunuri, răspundere și asistență.
- Pentru călătorie, întreabă doar destinația, perioada, numărul/vârsta aproximativă a călătorilor și activități speciale; nu cere date medicale.
- Pentru sănătate/viață, evită întrebările medicale și recomandă discuție privată cu consultantul.
- Pentru firme/răspunderi, cere doar activitatea generală, tipul locației, valori orientative și cerințe contractuale; nu cere documente sensibile în chat.
- Menționează că recomandarea este orientativă și oferta finală depinde de datele clientului și condițiile asigurătorilor.
- Încheie cu un îndemn către formularul de contact sau WhatsApp.
Format preferat:
Recomandare orientativă: ...
De ce: ...
Următorul pas: ...
`;
