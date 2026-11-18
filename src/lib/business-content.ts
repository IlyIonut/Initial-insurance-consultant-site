import { businessFaqExtras } from "./faq-content";
import { agriculturalSolution } from "./agricultural-content";
export type BusinessSolution = {
  slug: string; name: string; title: string; description: string; intro: string; icon: string; color: string; label: string;
  seoTitle?: string;
  suitable: string[]; coverages: string[]; questions: string[]; note: string;
  scenario: { title: string; body: string }; sections: { id?: string; title: string; body: string }[];
  faqs: { question: string; answer: string }[];
};
export const businessSolutions: BusinessSolution[] = [
  {
    slug: "bunuri-si-echipamente", name: "Bunuri și echipamente", title: "Asigurarea bunurilor și echipamentelor firmei",
    seoTitle: "Asigurare bunuri, utilaje și stocuri pentru firme",
    description: "Asigură spațiile, utilajele și stocurile firmei. Vezi ce evenimente pot fi acoperite, cum alegi valorile și ce parte din daună plătești tu.",
    intro: "Dacă un incendiu sau o avarie ți-ar afecta echipamentele ori stocurile, cât de greu ar fi să le înlocuiești? Pornim de la bunurile pe care le folosești și căutăm o asigurare potrivită activității și bugetului tău.",
    icon: "box", color: "blue", label: "BUNURILE FIRMEI",
    suitable: ["Magazine și firme de servicii cu spații proprii sau închiriate", "Ateliere, mici producători și firme cu utilaje", "Birouri, cabinete și afaceri cu echipamente valoroase", "Firme cu stocuri și amenajări realizate în spații închiriate"],
    coverages: ["Clădiri, amenajări și bunuri declarate în poliță", "Incendiu, explozie și anumite fenomene naturale", "Furt prin efracție, apă de conductă sau vandalism, dacă sunt incluse", "Avarii accidentale ale unor utilaje sau echipamente, prin acoperiri adecvate"],
    questions: [
  "Cât ar costa acum repararea sau înlocuirea bunurilor?",
  "Sunt incluse toate punctele de lucru și activitățile tale?",
  "Ce măsuri de siguranță și întreținere cere asigurătorul?",
  "Sunt incluse stocurile sezoniere și bunurile închiriate? Ce parte din daună plătești tu?"
],
    note: "Uzura și întreținerea obișnuită nu sunt acoperite automat. Nici orice defecțiune nu este despăgubită. Spune-mi ce echipamente ai și cum le folosești, ca să verificăm evenimentele și bunurile acceptate.",
    scenario: { title: "Un echipament esențial se avariază.", body: "Un atelier rămâne fără utilajul folosit pentru majoritatea comenzilor. Analiza urmărește separat paguba materială și efectele opririi activității. O poliță pentru bunuri nu include automat pierderea de profit." },
    sections: [
  {
    "title": "Pentru ce valoare îți asiguri bunurile?",
    "body": "Prețul plătit acum câțiva ani pentru un utilaj poate fi mai mic decât costul înlocuirii lui astăzi. Verificăm împreună valorile și regulile de calcul din ofertă. Dacă asiguri bunurile pentru mai puțin decât valoarea cerută de contract, despăgubirea poate fi redusă proporțional. Aceasta se numește subasigurare."
  },
  {
    "title": "Lucrezi într-un spațiu închiriat?",
    "body": "Asigurarea proprietarului poate proteja clădirea, fără să includă echipamentele, stocurile sau amenajările tale. Verificăm ce aparține firmei și ce responsabilități ai prin contractul de închiriere, apoi stabilim ce bunuri trebuie declarate separat."
  },
  {
    "title": "Cum alegi dacă ai un buget fix?",
    "body": "Începem cu bunurile a căror pierdere ți-ar opri activitatea. Comparăm oferte pentru aceleași valori ale clădirii, utilajelor și stocurilor. Verificăm și avariile interne ale echipamentelor, precum și stocurile mai mari din perioadele aglomerate, ca să vezi ce primești pentru suma plătită."
  }
],
    faqs: [...[{ question: "Pot asigura doar echipamentele?", answer: "Poate fi posibil. Spune-mi ce echipamente ai, unde le folosești și pentru ce situații vrei să le asiguri. Verificăm apoi produsele și condițiile disponibile." }, { question: "Stocurile sunt incluse automat?", answer: "Nu. Declarăm ce stocuri ai, cât valorează, unde le păstrezi și dacă valoarea lor crește în anumite perioade. Verificăm apoi ce include oferta." }, { question: "Sunt acoperite bunurile folosite la sediul clientului?", answer: "Depinde de locurile și utilizările acceptate în poliță. Spune-mi dacă duci echipamentele la clienți sau le transporți frecvent, ca să verificăm și aceste situații." }], ...businessFaqExtras["bunuri-si-echipamente"]],
  },
  {
    slug: "raspundere-civila-profesionala", name: "Răspundere civilă și profesională", title: "Asigurări de răspundere pentru firme și profesii",
    seoTitle: "Asigurare de răspundere profesională și malpraxis",
    description: "Răspundere profesională și malpraxis: ce date pregătești pentru ofertă și cum verifici activitățile acoperite, limitele și excluderile.",
    intro: "O greșeală în serviciul prestat sau un incident la sediu poate produce o pagubă unui client ori unui vizitator. Te ajut să vezi ce tip de răspundere ai nevoie să asiguri și dacă oferta respectă cerințele din contractele tale.",
    icon: "scale", color: "mint", label: "RELAȚIA CU CLIENȚII",
    suitable: ["Firme care primesc clienți sau desfășoară lucrări la terți", "Consultanți, profesii liberale și furnizori de servicii specializate", "Producători și distribuitori, în funcție de răspunderea pentru produse", "Firme cărora un partener le cere o anumită limită de asigurare"],
    coverages: [
  "pagube materiale sau vătămări produse altor persoane, în situațiile incluse",
  "greșeli sau omisiuni profesionale, prin polițe dedicate",
  "pagube produse de produsele ori lucrările tale, dacă sunt acceptate",
  "cheltuieli pentru apărarea juridică, în limitele contractului"
],
    questions: [
  "Sunt incluse toate serviciile și activitățile pe care le prestezi?",
  "Ce sume, țări și condiții juridice îți cere contractul cu clientul?",
  "Sunt acoperite și pierderile financiare care nu pornesc de la o pagubă materială?",
  "Când trebuie să primești și să anunți reclamația pentru a fi acoperită?"
],
    note: "O poliță de răspundere generală nu acoperă automat greșelile profesionale. Verificăm separat penalitățile, obligațiile de rezultat și pierderile financiare, deoarece pot fi excluse sau limitate.",
    scenario: { title: "Clientul cere o limită de răspundere în contract.", body: "O firmă de servicii primește o cerință de asigurare înainte de semnarea unui proiect. Comparăm cerința cu activitatea efectivă, teritoriul, excluderile și momentul în care este acoperită reclamația. Verificăm ce include polița, nu doar cum se numește." },
    sections: [
  {
    "title": "Ce tip de răspundere ai nevoie să asiguri?",
    "body": "Dacă deteriorezi accidental un bun al clientului, poate fi relevantă răspunderea civilă generală. Dacă o greșeală în serviciul tău îi produce o pierdere, poate fi necesară răspunderea profesională. Îmi descrii ce faci, iar eu te ajut să înțelegi ce variantă poate acoperi situațiile care te preocupă."
  },
  {
    "title": "Ce verifici când reînnoiești sau schimbi asigurătorul?",
    "body": "La unele polițe profesionale contează atât când ai făcut greșeala, cât și când ai primit și ai anunțat reclamația. Data retroactivă arată cât de departe în trecut pot fi luate în calcul faptele, în condițiile contractului. Verificăm aceste date înainte să renunți la vechea poliță, pentru a evita o perioadă fără protecția de care ai nevoie."
  },
  {
    "title": "De ce depinde prețul asigurării profesionale?",
    "body": "Contează serviciile prestate, tipurile de clienți, țările în care lucrezi și suma pe care trebuie să o acopere polița. Asigurătorul poate cere și cifra de afaceri sau informații despre reclamațiile anterioare. Comparăm costul pentru aceleași activități, limite și reguli de anunțare a reclamațiilor."
  },
  {
    "id": "malpraxis",
    "title": "Ce verifici la asigurarea de malpraxis medical?",
    "body": "Începem cu profesia, specialitatea, serviciile oferite și unitățile în care lucrezi. Verificăm dacă acestea sunt incluse și ce sumă se poate plăti pentru o reclamație sau pentru toate reclamațiile dintr-un an. Contează și cheltuielile de apărare și termenele în care anunți o reclamație. Polița ta profesională nu protejează automat și cabinetul ori aparatura."
  }
],
    faqs: [...[{ question: "O poliță generală acoperă și erorile profesionale?", answer: "Nu automat. Verificăm separat ce greșeli profesionale pot fi incluse, pentru serviciile pe care le oferi și pagubele pe care le-ai putea produce." }, { question: "Poți verifica o cerință de la un client extern?", answer: "Da, putem verifica cerința clientului și variantele disponibile: sumele, țările și regulile juridice acceptate. Asigurătorul decide ce poate acoperi și în ce condiții." }, { question: "Este obligatorie pentru orice firmă?", answer: "Depinde de profesia și activitatea ta. Pot exista obligații legale sau cerințe din contractele cu partenerii. Le verificăm înainte să alegi polița." }], ...businessFaqExtras["raspundere-civila-profesionala"]],
  },
  {
    slug: "flote-auto", name: "Flote auto", title: "Asigurări RCA și CASCO pentru flotele firmelor",
    seoTitle: "Asigurare flotă auto: ofertă RCA și CASCO",
    description: "RCA și CASCO pentru vehiculele firmei: comparație de acoperiri, franșize, condiții de reparație și organizarea reînnoirilor pentru flote.",
    intro: "Ai câteva mașini de serviciu sau mai multe autoutilitare? Te ajut să compari RCA și CASCO pentru felul în care le folosești și să urmărești reînnoirile. Verificăm fiecare categorie de vehicule, inclusiv cerințele de leasing.",
    icon: "car", color: "peach", label: "MOBILITATEA FIRMEI",
    suitable: ["Firme cu autoturisme de serviciu și autoutilitare", "Echipe comerciale, de intervenție sau mentenanță", "Companii cu vehicule cumpărate în leasing", "Afaceri care vor un calendar clar al polițelor auto"],
    coverages: [
  "RCA pentru daunele produse altor persoane cu vehiculele firmei",
  "CASCO pentru daunele la vehiculele tale, dacă sunt incluse în poliță",
  "asistență rutieră și alte opțiuni, acolo unde sunt disponibile",
  "variante adaptate tipului de vehicul și utilizării declarate"
],
    questions: ["Cum sunt folosite vehiculele și de către cine?", "Care este istoricul de daune și ce cerințe are finanțatorul?", "Ce franșize, service-uri și teritorii sunt potrivite?", "Cum gestionăm intrările, ieșirile și expirările din flotă?"],
    note: "Mai multe mașini nu înseamnă automat un tarif de flotă sau o reducere. Spune-mi dacă le folosești pentru curierat, transport, închiriere ori alte activități speciale, pentru a verifica ofertele potrivite.",
    scenario: { title: "Un vehicul de intervenție este avariat.", body: "Pe lângă reparație, firma trebuie să reorganizeze vizitele la clienți. Verificăm ce acoperă CASCO, ce franșiză se aplică, opțiunile de service și dacă există beneficii relevante de asistență. Pierderea veniturilor sau vehiculul de înlocuire nu sunt presupuse automat." },
    sections: [
  {
    "title": "Cum folosești fiecare vehicul?",
    "body": "O mașină de serviciu și o autoutilitară care merge zilnic pe șantier au nevoi diferite. Pe lângă prețul total, verificăm cât plătești tu la o daună, unde poți repara vehiculul și în ce țări este valabilă asigurarea. Utilizarea declarată trebuie să corespundă activității reale."
  },
  {
    "title": "Ce verificăm la reînnoire?",
    "body": "Pornim de la o listă actualizată cu vehiculele, polițele și daunele. Îmi spui ce ai cumpărat sau vândut, dacă s-a schimbat utilizarea și ce condiții impune leasingul. Dacă transporți marfă, verificăm separat protecția mărfii și răspunderea ta ca transportator."
  },
  {
    "title": "Cum compari prețul unei asigurări de flotă auto?",
    "body": "Cere costul pe vehicul și pe tip de asigurare. La RCA, compară aceeași perioadă. La CASCO, verifică franșiza, adică partea de daună plătită de tine, service-urile acceptate și condițiile de utilizare. Așa poți decide unde merită o protecție suplimentară pentru vehiculele esențiale echipei."
  }
],
    faqs: [...[{ question: "Poți analiza și o flotă mică?", answer: "Da, putem începe și cu câteva vehicule. Verificăm ce oferte sunt disponibile; fiecare asigurător are propriile condiții pentru programele de flotă." }, { question: "RCA protejează și mașina firmei care provoacă accidentul?", answer: "RCA acoperă daunele produse altor persoane. Pentru reparația mașinii firmei care a provocat accidentul, verificăm separat o poliță CASCO." }, { question: "Marfa transportată intră în CASCO?", answer: "Nu automat. CASCO protejează vehiculul în condițiile poliței. Pentru marfă și pentru răspunderea ta ca transportator verificăm asigurări separate." }], ...businessFaqExtras["flote-auto"]],
  },
  {
    slug: "sanatate-angajati", name: "Sănătate pentru angajați", title: "Asigurări de sănătate pentru angajații firmei",
    seoTitle: "Asigurare de sănătate pentru angajați",
    description: "Soluții de sănătate de grup pentru angajați. Comparăm rețelele medicale, serviciile, limitele, perioadele de așteptare și administrarea planului.",
    intro: "Vrei să oferi echipei acces la servicii medicale? Începem cu localitățile în care lucrează angajații, clinicile disponibile și bugetul firmei. Îți explic ce include fiecare plan și cum îl poate folosi echipa.",
    icon: "heart", color: "mint", label: "OAMENII DIN ECHIPĂ",
    suitable: ["IMM-uri care analizează un beneficiu medical pentru echipă", "Companii cu angajați în mai multe localități", "Firme care vor să revizuiască un plan de grup existent", "Angajatori interesați și de accidente sau viață de grup"],
    coverages: ["Consultații și investigații, în limitele planului", "Spitalizare și intervenții, în produsele care le includ", "Servicii în rețea sau rambursare, conform regulilor contractuale", "Opțiuni pentru alte protecții de grup, analizate separat"],
    questions: [
  "Ce consultații, analize și spitale sunt utile echipei?",
  "Cum se face programarea și când este necesară aprobarea asigurătorului?",
  "Cât poate plăti planul și după cât timp pot fi folosite serviciile?",
  "Cum adaugi un angajat nou sau retragi o persoană care pleacă din firmă?"
],
    note: "Un abonament medical și o asigurare de sănătate pot oferi servicii diferite. Verificăm ce include planul, ce limite are și ce afecțiuni pot fi excluse. Pentru prima discuție, nu am nevoie de datele medicale ale angajaților.",
    scenario: { title: "Echipa lucrează în două orașe.", body: "Un angajator compară două planuri cu preț apropiat. Verificăm rețeaua disponibilă efectiv în fiecare oraș, accesul la investigații, regulile pentru spitalizare și modul în care angajații folosesc beneficiul." },
    sections: [
  {
    "title": "La ce clinici poate merge echipa?",
    "body": "Lista de servicii este utilă dacă angajații le pot accesa în localitățile lor. Verificăm rețeaua medicală și modul de plată: direct către clinică sau prin rambursare, când angajatul plătește și cere ulterior banii înapoi. Îți explic și ce aprobări sunt necesare înainte de anumite investigații."
  },
  {
    "title": "Cum gestionezi planul pe parcurs?",
    "body": "Stabilim cine poate fi inclus și cum anunți schimbările din echipă. Numărul de angajați și condițiile de includere pot influența oferta. Pentru modul în care costul este tratat fiscal, verifică situația firmei împreună cu persoana care îți ține contabilitatea."
  },
  {
    "title": "Cum compari costul pe angajat?",
    "body": "Compară aceeași perioadă, clinicile disponibile, serviciile incluse și sumele maxime pentru consultații sau spitalizare. Verifică dacă angajatul plătește o parte din cost. Dacă vrei să incluzi membrii familiei, cerem separat condițiile și prețul pentru ei."
  }
],
    faqs: [...[{ question: "Este același lucru cu un abonament medical?", answer: "Nu. Pot fi diferite serviciile, clinicile și felul în care se plătesc cheltuielile. Comparăm ce poate folosi efectiv echipa ta și ce condiții are fiecare variantă." }, { question: "Există un număr minim de angajați?", answer: "Numărul minim diferă între produse. Spune-mi câți angajați ai, ca să verific ce variante sunt disponibile pentru echipa ta." }, { question: "Pot fi incluși membrii familiei?", answer: "Unele planuri îți permit să adaugi membrii familiei. Verificăm cine poate fi inclus și care este costul suplimentar." }], ...businessFaqExtras["sanatate-angajati"]],
  },
  {
    slug: "intreruperea-activitatii", name: "Întreruperea activității", title: "Asigurarea pentru întreruperea activității firmei",
    seoTitle: "Asigurare pentru întreruperea activității",
    description: "Dacă o daună îți oprește firma, unele cheltuieli continuă. Află ce poate acoperi asigurarea pentru întreruperea activității și pentru cât timp.",
    intro: "Dacă un incendiu ți-ar închide temporar spațiul, chiria și alte cheltuieli ar putea continua. Pe lângă repararea bunurilor, putem analiza o protecție pentru anumite pierderi din perioada în care nu poți lucra. Îți explic în ce situații se aplică și pentru cât timp.",
    icon: "clock", color: "blue", label: "CONTINUITATEA AFACERII",
    suitable: ["Firme dependente de un spațiu sau de echipamente esențiale", "Ateliere și producători cu timpi lungi de înlocuire a utilajelor", "Magazine și afaceri HoReCa cu cheltuieli fixe importante", "Companii care verifică protecția dincolo de paguba materială"],
    coverages: [
  "anumite pierderi financiare după un eveniment inclus în poliță",
  "profit și cheltuieli fixe, calculate după regulile contractului",
  "unele costuri suplimentare pentru a relua mai repede activitatea",
  "plăți în limitele și pe perioada stabilite în contract"
],
    questions: [
  "Ce trebuie să se întâmple pentru a putea cere despăgubirea?",
  "Cum se calculează pierderea acoperită?",
  "Cât timp ți-ar lua să poți lucra din nou?",
  "Există o perioadă inițială fără despăgubire? Ce limite și obligații ai?"
],
    note: "Asigurarea nu plătește pentru orice scădere a vânzărilor sau lipsă de clienți. Oprirea trebuie să fie legată de un eveniment și de condițiile prevăzute în contract.",
    scenario: { title: "Spațiul poate fi reparat. Între timp, costurile continuă.", body: "După un incendiu, un magazin are nevoie de timp pentru refacere. Polița pentru bunuri și clauza de întrerupere a activității au roluri diferite. Pentru pierderile financiare se verifică evenimentul, modul de calcul, perioada și limita convenite." },
    sections: [
  {
    "title": "Cât ar dura să reiei activitatea?",
    "body": "Pe lângă reparația clădirii, poate fi nevoie să comanzi un utilaj, să îl instalezi și să repornești producția. Discutăm acești pași ca să alegi o perioadă de despăgubire potrivită: intervalul pentru care pot fi acoperite pierderile după eveniment, în condițiile poliței."
  },
  {
    "title": "Ce informații financiare sunt necesare?",
    "body": "Asigurătorul poate cere cifra de afaceri, cheltuielile fixe și alte date folosite la calculul pierderii. Împreună cu persoana care cunoaște finanțele firmei, verificăm ce sume pot fi acoperite și cum se calculează. Polița nu plătește automat toate încasările pierdute."
  },
  {
    "title": "Cum ceri și compari o ofertă?",
    "body": "Estimează cât timp ai avea nevoie pentru a lucra din nou dacă sediul sau un utilaj esențial ar fi afectat. Comparăm oferte pentru aceleași evenimente, aceeași perioadă și aceeași metodă de calcul. Verificăm ce cheltuieli pot fi plătite și dacă există o perioadă inițială pentru care nu primești despăgubire, numită franșiză temporală."
  }
],
    faqs: [...[{ question: "Este inclusă automat în asigurarea bunurilor?", answer: "Nu automat. Poate fi inclusă într-un pachet sau adăugată separat. Verificăm dacă oferta ta o conține și ce condiții are." }, { question: "Acoperă și o scădere generală a vânzărilor?", answer: "O scădere a vânzărilor nu este suficientă. Pierderea trebuie să fie legată de un eveniment acoperit, în condițiile contractului." }, { question: "Cum aleg perioada de despăgubire?", answer: "Estimează cât ar dura să repari spațiul, să înlocuiești echipamentele și să reiei lucrul. Verificăm apoi ce perioadă de protecție poate oferi asigurătorul." }], ...businessFaqExtras["intreruperea-activitatii"]],

  },
  {
    slug: "riscuri-cibernetice", name: "Riscuri cibernetice", title: "Asigurări pentru riscurile cibernetice ale firmelor",
    seoTitle: "Asigurare cyber pentru firme: acoperire și ofertă",
    description: "Asigurare cyber pentru firma ta: ce costuri poate acoperi un incident informatic, ce măsuri de securitate sunt cerute și ce verifici în ofertă.",
    intro: "Dacă nu ai mai putea accesa comenzile, datele sau aplicațiile firmei, cât de greu ar fi să continui munca? O asigurare cyber poate ajuta cu anumite costuri ale unui incident informatic. Verificăm ce poate acoperi și ce măsuri de securitate trebuie să ai.",
    icon: "cyber", color: "peach", label: "ACTIVITATEA DIGITALĂ",
    suitable: ["Firme IT și furnizori de servicii digitale", "Afaceri care prelucrează date sau depind de sisteme informatice", "Comerț online și servicii cu operațiuni digitale", "Companii cu cerințe de asigurare cyber din partea clienților"],
    coverages: ["Costuri de răspuns la anumite incidente, în condițiile produsului", "Unele costuri de refacere a datelor sau sistemelor", "Răspundere față de terți pentru incidente acceptate", "Anumite pierderi din întreruperea operațiunilor digitale"],
    questions: [
  "Fără ce aplicații și date nu ai putea lucra?",
  "Cum protejezi conturile și unde păstrezi copiile de siguranță?",
  "Ce specialiști și ce cheltuieli sunt incluși dacă apare un incident?",
  "Ce reguli se aplică fraudelor prin email, furnizorilor externi și incidentelor deja cunoscute?"
],
    note: "Asigurarea nu înlocuiește securitatea informatică. Atacurile care blochează datele și cer bani, fraudele prin email, amenzile sau plățile către atacatori nu sunt acoperite automat. Le verificăm separat în ofertă.",
    scenario: { title: "Un incident blochează accesul la sistemul de comenzi.", body: "Firma trebuie să înțeleagă ce s-a întâmplat, să refacă sistemele și să gestioneze efectele asupra clienților. Analiza unei oferte cyber urmărește costurile și serviciile eligibile, perioada de așteptare și obligațiile de notificare." },
    sections: [
  {
    "title": "Ce informații îți cere asigurătorul?",
    "body": "De obicei, completezi un chestionar despre protecția conturilor, actualizări, copii de siguranță și accesul la sisteme. Îl parcurgi cu persoana care se ocupă de IT, folosind măsurile pe care le aveți deja în funcțiune. Pe baza acestor răspunsuri, asigurătorul stabilește dacă poate oferi protecția și în ce condiții."
  },
  {
    "title": "Cyber sau răspundere profesională?",
    "body": "Dacă ai o firmă IT, un atac asupra sistemelor și o greșeală în serviciul livrat clientului pot avea consecințe diferite. Verificăm ce acoperă fiecare poliță, unde se completează și ce situații rămân excluse. Luăm în calcul și ce îți cer clienții prin contract."
  },
  {
    "title": "Cum compari costul unei asigurări cyber?",
    "body": "Pornim de la cheltuielile greu de suportat pentru firmă: intervenția specialiștilor, refacerea datelor, oprirea activității sau reclamațiile clienților. Comparăm sumele maxime pentru fiecare și măsurile de securitate cerute. O limită totală mare nu înseamnă că orice cost al incidentului este acoperit până la acea sumă."
  }
],
    faqs: [...[{ question: "Este utilă doar firmelor IT?", answer: "Nu. Dacă firma ta depinde de date, aplicații sau comenzi online, un incident informatic poate avea costuri importante. Discutăm ce impact ar avea și dacă asigurarea poate fi utilă." }, { question: "Acoperă orice fraudă prin email?", answer: "Nu. Fraudele și transferurile de bani pot fi excluse sau acoperite doar în anumite condiții. Verificăm explicit ce situații include oferta." }, { question: "Poate înlocui măsurile de securitate?", answer: "Nu. Ai nevoie în continuare de prevenție și de un plan pentru incidente. Asigurătorul poate cere anumite măsuri de securitate pentru a oferi polița." }], ...businessFaqExtras["riscuri-cibernetice"]],
  },
  agriculturalSolution,
];

export const industries = [
  { slug: "comert-si-servicii", name: "Comerț și servicii", icon: "building", description: "Pentru magazine, saloane, birouri și afaceri aproape de clienți.", intro: "Ai un magazin, un salon sau un birou? Discutăm despre spațiu, echipamente, stocuri și ce s-ar putea întâmpla cu clienții care te vizitează. Verificăm și ce responsabilități ai dacă lucrezi într-un spațiu închiriat.", solutions: ["bunuri-si-echipamente", "raspundere-civila-profesionala", "intreruperea-activitatii"], risks: ["Ce se întâmplă cu stocurile și amenajările dacă apare un incendiu?", "Cine răspunde pentru un incident suferit de un vizitator?", "Ce cheltuieli continuă dacă spațiul nu poate fi folosit?"], detail: "Dacă ai un magazin, ne uităm la valoarea stocurilor, inclusiv în perioadele aglomerate, și la cum le depozitezi. Pentru un salon, verificăm echipamentele și serviciile pe care le oferi. Îmi explici activitatea și măsurile de siguranță, apoi vedem ce variante pot fi disponibile. Discutăm separat amenajările făcute de tine și cerințele proprietarului.", preparation: "Spune-mi cu ce te ocupi, în ce localitate și dacă spațiul este al tău sau închiriat. Ajută și o valoare aproximativă a echipamentelor, amenajărilor și stocurilor." },
  { slug: "productie-si-ateliere", name: "Producție și ateliere", icon: "tools", description: "Pentru utilajele, produsele și continuitatea muncii tale.", intro: "Dacă un utilaj esențial s-ar opri, cât de multe comenzi ai putea continua? Te ajut să verifici protecția echipamentelor, a materiilor prime și a produselor. Discutăm și ce se întâmplă cu veniturile cât timp nu poți lucra.", solutions: ["bunuri-si-echipamente", "intreruperea-activitatii", "raspundere-civila-profesionala"], risks: ["Cât ar dura înlocuirea unui utilaj esențial?", "Ce materii prime, stocuri și produse finite sunt expuse?", "Pot produsele sau lucrările să producă prejudicii unui client?"], detail: "Îmi explici ce produci, ce materiale folosești și cum este protejat spațiul împotriva incendiului. Verificăm separat avariile utilajelor, bunurile clienților aflate în lucru și timpul necesar pentru repornire. Lista echipamentelor și o descriere a etapelor de lucru ne ajută să cerem oferte pentru activitatea ta reală.", preparation: "Pregătește o listă cu utilajele principale și valorile lor aproximative. Notează și cât ar dura să le înlocuiești și să reiei lucrul." },
  { slug: "it-si-consultanta", name: "IT și consultanță", icon: "laptop", description: "Pentru servicii profesionale, contracte și activitatea digitală.", intro: "O greșeală într-un proiect sau un incident informatic îți poate afecta atât clientul, cât și firma. Pornim de la serviciile tale și de la cerințele din contracte, apoi verificăm răspunderea profesională și protecția pentru incidente informatice.", solutions: ["raspundere-civila-profesionala", "riscuri-cibernetice", "sanatate-angajati"], risks: [
  "Cât de mare ar putea fi pierderea clientului dacă faci o greșeală în proiect?",
  "Ce sume, țări și condiții juridice îți cer contractele?",
  "Cum ai continua munca dacă nu ai mai avea acces la date sau aplicații?"
], detail: "În contractele internaționale contează mai mult decât numele poliței. Verificăm serviciile, subcontractorii, țările și regulile juridice acceptate, precum și când trebuie să primești și să anunți o reclamație. Analizăm separat greșelile profesionale și incidentele informatice, pentru a vedea ce acoperă fiecare variantă.", preparation: "Spune-mi ce servicii oferi, în ce țări sunt clienții tăi și ce asigurare îți cer contractele. Pentru protecția cyber, discutăm și măsurile generale de securitate ale firmei." },
  { slug: "horeca", name: "HoReCa", icon: "coffee", description: "Pentru spațiu, echipamente și zilele în care activitatea se oprește.", intro: "Restaurantul, cafeneaua sau pensiunea ta depinde de spațiu, echipamente și experiența oaspeților. Discutăm ce ai nevoie să protejezi, ce pagube ai putea produce altora și cum ai gestiona o oprire temporară.", solutions: ["bunuri-si-echipamente", "raspundere-civila-profesionala", "intreruperea-activitatii"], risks: ["Ce impact ar avea un incendiu sau o avarie importantă?", "Ce răspunderi pot apărea față de clienți și oaspeți?", "Cât timp ar dura redeschiderea după o pagubă?"], detail: "Începem cu locația, bucătăria, instalațiile, capacitatea și serviciile oferite. Spune-mi dacă vrei să verificăm și alimentele păstrate la rece, bunurile oaspeților sau evenimentele organizate: nu sunt incluse automat. Pentru perioadele în care nu poți deschide după o daună, verificăm separat cheltuielile și pierderile care pot fi acoperite.", preparation: "Pregătește o descriere a locației și serviciilor, valorile aproximative ale echipamentelor și informații despre perioadele aglomerate și cheltuielile fixe." },
  { slug: "cabinete-medicale", name: "Cabinete medicale", icon: "heart", description: "Pentru spații, aparatură și răspunderile activității medicale.", intro: "Vrei să protejezi aparatura cabinetului și să verifici răspunderea pentru activitatea medicală? Începem cu specialitățile, serviciile și persoanele care lucrează în cabinet. Polițele pot avea roluri diferite, pe care ți le explic separat.", solutions: ["bunuri-si-echipamente", "raspundere-civila-profesionala", "riscuri-cibernetice"], risks: ["Ce aparatură este critică pentru programările cabinetului?", "Cine trebuie asigurat și pentru ce servicii medicale?", "Cum sunt protejate sistemele și datele cabinetului?"], detail: "Asigurarea aparaturii, răspunderea cabinetului și malpraxisul personalului nu se acoperă automat prin aceeași poliță. Verificăm cine este asigurat, pentru ce specialități și până la ce sume. Pentru prima discuție am nevoie doar de informații generale despre cabinet, fără date sau documente ale pacienților.", preparation: "Spune-mi ce servicii și specialități are cabinetul, ce aparatură folosiți și ce cerințe de asigurare vrei să verificăm." },
];
export function solutionHref(slug: string) { return `/asigurari-firme/${slug}`; }
