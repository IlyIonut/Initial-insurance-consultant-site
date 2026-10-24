export type FAQItem = { question: string; answer: string };
// Editorial source notes: docs/content-review.md. No search-volume ranking is claimed.
export const businessFaqExtras: Record<string, FAQItem[]> = {
  "bunuri-si-echipamente": [
    {
      "question": "Cât costă asigurarea bunurilor firmei?",
      "answer": "Prima depinde de activitate, locații, valori, construcție, protecția la incendiu și furt, istoric și riscurile alese. Compară și franșizele și limitele. O estimare fără aceste date nu este o ofertă."
    },
    {
      "question": "Ce înseamnă subasigurarea?",
      "answer": "Dacă suma declarată este sub valoarea ce trebuia asigurată potrivit contractului, despăgubirea poate fi redusă proporțional, dacă se aplică regula proporționalității. Verifică baza de evaluare și eventualele derogări, precum asigurarea la prim risc."
    },
    {
      "question": "Polița proprietarului protejează bunurile firmei din spațiul închiriat?",
      "answer": "Nu automat. Clădirea, bunurile chiriașului și amenajările pot reprezenta interese diferite. Declară investițiile și verifică responsabilitățile din contractul de închiriere și limitele din poliță."
    }
  ],
  "raspundere-civila-profesionala": [
    {
      "question": "Ce limită de despăgubire aleg?",
      "answer": "Pornește de la prejudiciul posibil și de la cerințele legale și contractuale. Verifică limita pe cerere sau eveniment, agregatul anual, franșiza și cheltuielile de apărare. Limita cerută de client nu confirmă singură că polița este potrivită."
    },
    {
      "question": "Ce înseamnă data retroactivă?",
      "answer": "La polițele care funcționează pe baza cererilor de despăgubire pot conta atât data erorii, cât și formularea și notificarea reclamației. Verifică data retroactivă, continuitatea și perioada extinsă de notificare înainte de schimbarea sau încetarea poliței."
    },
    {
      "question": "Sunt acoperite automat amenzile și penalitățile contractuale?",
      "answer": "Nu. Amenzile, garanțiile de rezultat și răspunderea asumată suplimentar prin contract pot fi excluse sau limitate. Prezintă clauza clientului și cere o explicație scrisă privind acoperirea, înainte de încheiere."
    }
  ],
  "flote-auto": [
    {
      "question": "Pot include vehicule în leasing?",
      "answer": "Da, cu respectarea condițiilor produsului și ale finanțatorului. Verifică beneficiarul, suma asigurată, franșiza și service-urile. CASCO poate fi o obligație contractuală față de societatea de leasing."
    },
    {
      "question": "Ce fac atunci când cumpăr sau vând un vehicul?",
      "answer": "Anunță schimbarea și cere documentele de includere sau încetare aplicabile. RCA și CASCO pot avea proceduri diferite. Vehiculul nou nu devine automat protejat pentru că firma are alte vehicule asigurate."
    },
    {
      "question": "O daună schimbă prețul pentru toată flota?",
      "answer": "La RCA, bonus-malus pentru o persoană juridică se aplică distinct pe vehicul, conform normei. La CASCO, rezultatele întregului parc pot influența oferta de reînnoire. Prețul final depinde și de criteriile tarifare ale asigurătorului."
    }
  ],
  "sanatate-angajati": [
    {
      "question": "Sunt acoperite afecțiunile deja existente?",
      "answer": "Nu automat. Pot exista excluderi, evaluare de risc și condiții speciale la nivel de grup. Verifică și perioadele de așteptare. Nu trimite diagnostice ori documente medicale individuale prin formularul public."
    },
    {
      "question": "Poate fi folosită în orice clinică?",
      "answer": "Verifică rețeaua din localitățile angajaților, decontarea directă, rambursarea în afara rețelei și autorizarea prealabilă. Serviciile pot avea sub-limite și coplată. Rețeaua trebuie verificată înainte de programare."
    },
    {
      "question": "Există avantaje fiscale?",
      "answer": "Pot exista, în limitele și condițiile Codului fiscal aplicabil la acordarea beneficiului. Tratamentul depinde de cine suportă costul și de situația firmei și a angajatului. Confirmă încadrarea și plafonul cu specialistul contabil sau fiscal."
    }
  ],
  "intreruperea-activitatii": [
    {
      "question": "Ce pierderi financiare poate acoperi?",
      "answer": "Poate acoperi profitul brut definit contractual, anumite cheltuieli fixe și costuri suplimentare pentru limitarea întreruperii. Nu se plătește automat întreaga cifră de afaceri. Formula, perioada, franșiza și documentele financiare sunt stabilite în contract."
    },
    {
      "question": "Sunt acoperite întreruperile la furnizori sau căderile de utilități?",
      "answer": "Numai dacă există extensii adecvate și sunt îndeplinite condițiile lor. Furnizorii, utilitățile și incidentele cibernetice pot necesita protecții distincte. Declară dependențele importante înainte de ofertare."
    },
    {
      "question": "Acoperă o închidere administrativă sau o pandemie?",
      "answer": "Nu prin simplul fapt că firma se închide. Trebuie îndeplinit declanșatorul prevăzut în poliță și verificate excluderile. Asigurarea obișnuită de bunuri și întrerupere nu garantează protecție pentru orice pierdere economică."
    }
  ],
  "riscuri-cibernetice": [
    {
      "question": "Ce costuri poate include o poliță cyber?",
      "answer": "Poate include investigații informatice, răspuns la incident, restaurarea datelor, anumite pierderi din întrerupere și răspundere față de terți. Fiecare secțiune are limite și excluderi; disponibilitatea se confirmă pe oferta concretă."
    },
    {
      "question": "Ce măsuri de securitate poate cere asigurătorul?",
      "answer": "Chestionarul poate verifica autentificarea multifactor, copiile de siguranță, actualizările, accesul și planul de răspuns. Cerințele diferă. Răspunsurile trebuie să descrie controalele implementate efectiv, împreună cu responsabilul IT."
    },
    {
      "question": "Ce fac imediat după un incident?",
      "answer": "Activează planul de răspuns, contactează asistența prevăzută în poliță și păstrează probele cu ajutorul specialiștilor. Obligațiile legale de notificare rămân distincte. Plățile către atacatori și amenzile nu sunt automat permise ori despăgubibile."
    }
  ]
};

export const personalFaqExtras: Record<string, FAQItem[]> = {
  "casco": [
    {
      "question": "Sunt acoperite zgârieturile în parcare și defecțiunile mecanice?",
      "answer": "Zgârieturile, autorul necunoscut și vandalismul trebuie să fie incluse și notificate conform poliței. Uzura și întreținerea nu sunt în mod obișnuit riscuri CASCO. O defecțiune internă se analizează diferit de avaria produsă de un eveniment asigurat."
    },
    {
      "question": "Ce se plătește la daună totală?",
      "answer": "Se aplică definiția și formula contractuală, care pot ține cont de valoarea vehiculului, epavă, franșiză și sume datorate. Prețul de cumpărare nu este automat despăgubirea. Verifică separat și eventualele condiții GAP la vehicule finanțate."
    }
  ],
  "locuinta": [
    {
      "question": "PAD acoperă și mobila sau electrocasnicele?",
      "answer": "Nu. Pentru bunurile din locuință este necesară o acoperire facultativă adecvată, cu categorii și limite declarate. Obiectele de valoare pot necesita enumerare ori evaluare separată. Asigurarea clădirii nu confirmă automat protecția conținutului."
    },
    {
      "question": "Pot asigura o locuință cu credit sau o clădire cu risc seismic?",
      "answer": "Pentru credit verifică cerințele băncii, beneficiarul sau cesiunea și sumele. Pentru clădirile încadrate în clasa I de risc seismic există restricții legale privind PAD până la recepția lucrărilor de consolidare. Acceptarea facultativei și riscurile se verifică individual."
    }
  ],
  "calatorie": [
    {
      "question": "Când trebuie cumpărată polița?",
      "answer": "Verifică emiterea și începutul protecției înainte de plecare. Unele produse nu acceptă emiterea după începerea călătoriei sau impun condiții și așteptare. Storno poate avea un termen legat de rezervare. Un eveniment deja cunoscut nu devine automat asigurabil."
    },
    {
      "question": "Ce fac dacă am o urgență medicală în străinătate?",
      "answer": "Cere ajutorul de urgență necesar și contactează asistența din poliță cât mai repede. Verifică autorizarea serviciilor și păstrează documentele medicale și de plată. Procedura și termenele diferă; nu presupune rambursare integrală fără verificarea condițiilor."
    }
  ],
  "sanatate": [
    {
      "question": "Sunt acoperite bolile existente înainte de contract?",
      "answer": "Depinde de produs și evaluare: pot exista excluderi, condiții speciale ori lipsa acceptării. Declarațiile medicale se completează corect prin canalul asigurătorului. Nu transmite diagnostice, analize sau documente medicale prin formularul public."
    },
    {
      "question": "Pot folosi polița imediat și cine plătește clinica?",
      "answer": "Pot exista perioade de așteptare și autorizare prealabilă. Unele servicii se decontează direct, altele prin rambursare sau beneficii în sumă fixă. Verifică mecanismul, documentele, coplata și limitele înainte de programare."
    }
  ],
  "viata": [
    {
      "question": "Primesc înapoi toate primele dacă renunț?",
      "answer": "Nu automat. Protecția pură poate să nu aibă valoare de răscumpărare. La acumulare ori investiție, valoarea poate fi mai mică decât primele plătite, mai ales la început. Verifică drepturile, costurile și consecințele înainte de încetare."
    },
    {
      "question": "Cine primește banii și este garantată investiția?",
      "answer": "Beneficiarul și beneficiul sunt stabilite în contract. Pentru credite poate exista o cesiune către bancă. Componenta de investiție poate fluctua și nu presupune automat capital sau randament garantat. Citește documentele produsului și verifică beneficiarii."
    }
  ],
  "raspundere": [
    {
      "question": "Ce înseamnă limita pe eveniment și agregatul anual?",
      "answer": "Limita pe eveniment sau cerere și plafonul pentru întreaga perioadă pot fi diferite. Verifică și franșiza și dacă apărarea juridică intră în limită. Suma dintr-o cerință contractuală nu confirmă singură toate acoperirile necesare."
    },
    {
      "question": "Sunt acoperite automat amenzile și penalitățile?",
      "answer": "Nu. Amenzile, garanțiile de rezultat și obligațiile suplimentare asumate prin contract pot fi excluse. Pentru o reclamație contează și activitatea declarată, perioada și condițiile de notificare. Cere explicații pe situația concretă."
    }
  ],
  "accidente": [
    {
      "question": "Sunt protejat la serviciu, acasă și în străinătate?",
      "answer": "Depinde de intervalul și teritoriul poliței. Acoperirea poate fi pentru muncă, timp liber ori permanentă, cu limite geografice. Ocupația, activitățile și deplasările trebuie declarate corect; nu presupune automat acoperire mondială sau de 24 de ore."
    },
    {
      "question": "Se plătește suma integrală pentru orice invaliditate?",
      "answer": "Nu. Beneficiul poate fi calculat după gradul de invaliditate și baremul contractual, în limita sumei asigurate. Indemnizațiile pentru spitalizare, fractură sau intervenție au alte reguli. Compară definiția și formula fiecărui risc."
    }
  ]
};

export const industryFaqs: Record<string, FAQItem[]> = {
  "comert-si-servicii": [
    {
      "question": "Polița proprietarului spațiului îmi protejează magazinul?",
      "answer": "Nu automat. Verifică separat clădirea, amenajările, echipamentele și stocurile firmei. Contractul de închiriere și interesele fiecărei părți trebuie corelate cu polița."
    },
    {
      "question": "Ce se întâmplă dacă un client se accidentează în spațiu?",
      "answer": "Poate fi relevantă răspunderea civilă pentru activitatea declarată. Se analizează împrejurările, răspunderea și condițiile; simpla prezență a clientului nu garantează despăgubirea."
    },
    {
      "question": "Pot include stocuri sezoniere și bunuri ale clienților?",
      "answer": "Declară valorile maxime și bunurile în custodie, prelucrare ori reparație. Includerea lor și condițiile de furt, depozitare sau manipulare trebuie confirmate expres."
    },
    {
      "question": "Primesc venituri dacă închid temporar?",
      "answer": "Doar dacă există acoperire pentru întreruperea activității și este îndeplinit declanșatorul contractual. Nu este o protecție automată pentru lipsa clienților sau orice suspendare."
    }
  ],
  "productie-si-ateliere": [
    {
      "question": "Asigurarea halei acoperă defectarea utilajelor?",
      "answer": "Nu automat. Incendiul și avariile interne pot necesita secțiuni diferite. Verifică utilajele declarate, întreținerea, uzura și excluderile tehnice."
    },
    {
      "question": "Sunt incluse materiile prime și produsele finite?",
      "answer": "Dacă sunt declarate și acceptate, la valori și în locații adecvate. Stocurile, bunurile în curs de fabricație și cele ale clienților pot avea reguli diferite de evaluare."
    },
    {
      "question": "Polița acoperă produsele defecte pe care le vând?",
      "answer": "Răspunderea pentru produse privește anumite prejudicii produse terților. Refacerea produsului propriu, retragerea din piață și garanția comercială nu sunt automat acoperite de aceeași poliță."
    },
    {
      "question": "Cum protejez perioada până la înlocuirea utilajului?",
      "answer": "Analizează întreruperea activității împreună cu riscul ce poate avaria utilajul. Livrarea, instalarea, repornirea și documentele financiare contează la alegerea perioadei și limitei."
    }
  ],
  "it-si-consultanta": [
    {
      "question": "Am nevoie de răspundere profesională, cyber sau ambele?",
      "answer": "Eroarea în serviciul prestat și atacul informatic sunt expuneri diferite. Activitatea și contractele stabilesc dacă sunt necesare polițe distincte ori un produs care le combină explicit."
    },
    {
      "question": "Pot acoperi contracte cu clienți din SUA sau Canada?",
      "answer": "Activitatea, teritoriul și jurisdicția trebuie acceptate expres. Denumirea internațională nu confirmă singură cerințele clientului. Verifică limitele, subcontractorii și excluderile."
    },
    {
      "question": "Ce verific când schimb asigurătorul?",
      "answer": "La răspunderea bazată pe cereri de despăgubire contează data retroactivă, continuitatea și notificarea circumstanțelor cunoscute. Compară aceste elemente înainte de încetarea vechii polițe."
    },
    {
      "question": "Echipamentele și munca de acasă sunt acoperite?",
      "answer": "Numai în limitele și locațiile acceptate. Laptopurile mobile, echipamentele la angajați și bunurile din transport se declară separat de simpla asigurare a sediului."
    }
  ],
  "horeca": [
    {
      "question": "Pot include alterarea alimentelor dintr-o vitrină frigorifică?",
      "answer": "Unele produse oferă extensii, cu declanșatori și limite specifice. Verifică avaria, întreruperea alimentării, așteptarea și obligațiile de monitorizare; asigurarea stocului nu este suficientă."
    },
    {
      "question": "Sunt acoperite intoxicațiile alimentare sau bunurile oaspeților?",
      "answer": "Aceste expuneri trebuie confirmate în secțiunile de răspundere potrivite. Activitatea, persoanele asigurate, limitele și excluderile diferă. Nu orice incident cu un oaspete este acoperit."
    },
    {
      "question": "Pot asigura terasa și echipamentele din exterior?",
      "answer": "Declară-le expres, cu utilizarea și măsurile de protecție. Bunurile în aer liber, construcțiile ușoare și elementele sezoniere pot avea restricții ori condiții speciale."
    },
    {
      "question": "Asigurarea plătește dacă restaurantul este închis?",
      "answer": "Întreruperea presupune evenimentul și condițiile din contract. Închiderea administrativă, lipsa autorizațiilor, pandemia sau scăderea cererii nu sunt automat despăgubibile."
    }
  ],
  "cabinete-medicale": [
    {
      "question": "Malpraxisul medicului acoperă cabinetul și aparatura?",
      "answer": "Nu automat. Răspunderea personalului, a unității și asigurarea aparaturii au obiecte diferite. Verifică persoanele asigurate, specialitățile și serviciile efectiv prestate."
    },
    {
      "question": "Cum verific limita de malpraxis?",
      "answer": "Compară cerințele legale și profesionale ale specialității cu expunerea reală, limita pe eveniment și agregatul anual. Un minim legal nu garantează acoperirea integrală a oricărui prejudiciu."
    },
    {
      "question": "Este inclusă avaria internă a aparaturii?",
      "answer": "Poate necesita o secțiune tehnică, distinctă de incendiu și alte riscuri materiale. Declară utilizarea, vechimea, valoarea și întreținerea. Uzura și service-ul obișnuit nu devin automat asigurate."
    },
    {
      "question": "Trimit datele pacienților pentru prima discuție?",
      "answer": "Nu. Sunt suficiente specialitățile și informațiile generale despre activitate. Nu transmite fișe, diagnostice sau documente ale pacienților prin formular. Datele unui eventual dosar se gestionează ulterior prin proceduri adecvate."
    }
  ]
};

export const guideFaqs: Record<string, FAQItem[]> = {
  "ce-asigurari-are-nevoie-un-imm": [
    {
      "question": "Există un pachet obligatoriu pentru orice IMM?",
      "answer": "Nu există o listă identică pentru toate firmele. Obligațiile pot depinde de vehicule, profesie, bunuri și contracte. Separă cerințele legale de protecțiile facultative și cele solicitate de bancă ori client."
    },
    {
      "question": "De unde încep dacă bugetul este limitat?",
      "answer": "Identifică cerințele obligatorii și pierderile care ar afecta cel mai mult continuitatea. Compară sumele, limitele și franșizele. O poliță cu limite insuficiente poate lăsa costuri importante firmei."
    },
    {
      "question": "Când revizuiesc polițele?",
      "answer": "La reînnoire și la schimbări ale activității, locațiilor, bunurilor, echipei sau contractelor. Unele modificări trebuie anunțate pe parcurs, potrivit condițiilor; nu aștepta automat următoarea scadență."
    }
  ],
  "bunuri-versus-intreruperea-activitatii": [
    {
      "question": "Dacă este despăgubit incendiul primesc și profitul pierdut?",
      "answer": "Nu automat. Bunurile și întreruperea se verifică separat. Sunt necesare o secțiune adecvată și îndeplinirea declanșatorului, formulei și limitelor acesteia."
    },
    {
      "question": "Perioada poliței și perioada de despăgubire sunt identice?",
      "answer": "Nu. Prima arată când trebuie să se producă evenimentul, iar a doua limitează consecințele financiare eligibile, potrivit contractului. Verifică separat și franșiza temporală."
    },
    {
      "question": "Pot fi acoperite cheltuieli de relocare temporară?",
      "answer": "Unele produse includ costuri suplimentare eligibile pentru limitarea pierderii. Verifică acordul asigurătorului, justificarea și limita. Nu orice cheltuială după daună este rambursată."
    }
  ],
  "cum-compari-ofertele-pentru-firma": [
    {
      "question": "Ofertele cu aceeași sumă asigurată sunt echivalente?",
      "answer": "Nu. Compară riscurile, evaluarea, sub-limitele, franșizele, excluderile, persoanele și locațiile. Limita totală nu arată singură ce se poate plăti pentru fiecare risc."
    },
    {
      "question": "Documentul de informare este suficient pentru decizie?",
      "answer": "Este un rezumat util, dar trebuie citit cu oferta, condițiile, clauzele și celelalte documente contractuale. Cere explicații scrise pentru scenariile importante neclare."
    },
    {
      "question": "Oferta cea mai ieftină este mereu potrivită?",
      "answer": "Prețul contează în raport cu protecția. O primă mai mică poate însemna franșiză mai mare, limite mai mici ori riscuri excluse. Compară ofertele pe aceleași date despre firmă."
    }
  ]
};

export const rcaArticleFaqs: Record<string, FAQItem[]> = {
  "coverage": [
    {
      "question": "RCA acoperă pasagerii și șoferul vinovat?",
      "answer": "Pasagerii prejudiciați pot beneficia de despăgubiri în condițiile legii. Vătămarea ori decesul conducătorului răspunzător nu sunt acoperite prin propria RCA pentru acel accident. Protecția sa se poate analiza separat prin asigurarea de accidente."
    },
    {
      "question": "Dacă șoferul era sub influența alcoolului, terțul pierde despăgubirea?",
      "answer": "Nu confunda protecția persoanei prejudiciate cu regresul. Asigurătorul poate despăgubi terțul potrivit legii și poate recupera sumele de la persoana răspunzătoare în cazurile legale. Împrejurările se analizează în dosar."
    },
    {
      "question": "Decontarea directă este CASCO?",
      "answer": "Nu. Este un serviciu suplimentar RCA pentru prejudiciul produs de alt vehicul, prin propriul asigurător, dacă sunt îndeplinite condițiile legale. Nu acoperă avaria produsă din propria vină."
    }
  ],
  "buying": [
    {
      "question": "Polița începe imediat ce o plătesc?",
      "answer": "Nu întotdeauna. Începutul urmează regulile legale și situația vehiculului și asigurării existente. Verifică data și ora înscrise; plata sau cererea de ofertă nu confirmă singure că protecția este activă."
    },
    {
      "question": "Cum verific emiterea?",
      "answer": "Păstrează documentele și verifică înmatricularea, VIN-ul, asiguratul, perioada și prima. Valabilitatea raportată se poate consulta în AIDA, administrată de BAAR. Cere clarificări asigurătorului pentru neconcordanțe."
    },
    {
      "question": "Ce fac dacă primesc numai oferte foarte mari?",
      "answer": "Verifică dacă îndeplinești procedura BAAR pentru asigurat cu risc ridicat. Sunt necesare oferte conforme și încadrarea în regulile în vigoare. Un preț perceput ca mare nu garantează eligibilitatea sau un anumit tarif."
    }
  ],
  "bonus": [
    {
      "question": "Dacă am două mașini, clasa se aplică la fel?",
      "answer": "Pentru persoana fizică se aplică aceeași clasă bonus-malus vehiculelor sale, potrivit normei. Pentru persoana juridică încadrarea este distinctă pe vehicul. Verifică istoricul și datele folosite în ofertă."
    },
    {
      "question": "La B8 plătesc jumătate din prețul de anul trecut?",
      "answer": "Nu. Coeficientul clasei se aplică tarifului curent al asigurătorului, care se poate schimba. Chiar păstrând bonusul, prețul final poate crește sau scădea."
    },
    {
      "question": "Constatarea amiabilă schimbă imediat clasa?",
      "answer": "Semnarea formularului nu este același lucru cu înregistrarea unei despăgubiri plătite în perioada de referință. Aplicarea malusului urmează norma și istoricul. Cere corectarea erorilor la asigurătorul care le-a raportat."
    }
  ],
  "accident": [
    {
      "question": "Când mă prezint la poliție în 24 de ore?",
      "answer": "Pentru accidentul de circulație cu numai pagube materiale, regula este prezentarea la poliția competentă în cel mult 24 de ore de la eveniment, cu excepțiile legale, inclusiv amiabila în condițiile legii. Dacă există victime, anunță imediat 112."
    },
    {
      "question": "Amiabila înseamnă recunoașterea automată a vinei?",
      "answer": "Formularul consemnează împrejurările; nu stabilește singur dreptul sau cuantumul despăgubirii. Asigurătorul analizează datele și răspunderea. Completează corect schița și informațiile și nu semna formulare necompletate."
    },
    {
      "question": "Când pot cere despăgubirea propriului asigurător RCA?",
      "answer": "Prin decontare directă, dacă ai cumpărat serviciul și sunt îndeplinite cumulativ condițiile: accident în România, vehicule înmatriculate sau înregistrate în România, ambele cu RCA valabilă, prejudicii exclusiv vehiculelor și fără vătămări corporale. În alte cazuri se verifică procedura aplicabilă."
    }
  ],
  "documents": [
    {
      "question": "Trebuie să încarc actele în formular?",
      "answer": "Nu. Pentru primul contact sunt suficiente numele, emailul și interesul pentru RCA. Documentele se stabilesc ulterior printr-un canal potrivit. Nu transmite CNP sau fotografii ale actelor prin formular."
    },
    {
      "question": "Se poate solicita RCA pentru o mașină neînmatriculată încă?",
      "answer": "Există situații de asigurare în vederea înmatriculării, cu documente și perioade specifice. Prezintă situația reală a vehiculului, proprietății și înmatriculării; lista pentru un vehicul deja înmatriculat nu acoperă toate cazurile."
    },
    {
      "question": "Cine apare ca asigurat la leasing?",
      "answer": "Proprietarul și utilizatorul se preiau potrivit documentelor și cadrului legal. Nu se alege arbitrar persoana cu tariful mai mic. Prezintă contractul și cerințele finanțatorului prin procedura de ofertare."
    }
  ]
};

export const serviceFaqs: Record<string, FAQItem[]> = {
  "contact": [
    {
      "question": "Trimiterea cererii încheie o poliță sau mă obligă să cumpăr?",
      "answer": "Nu. Formularul solicită o discuție și nu încheie, modifică ori reînnoiește asigurarea. Acoperirea începe numai conform documentelor emise și condițiilor aplicabile."
    },
    {
      "question": "Pot trimite o cerere din orice județ?",
      "answer": "Da. Preluăm solicitări pentru firme și persoane fizice din toată România. Documentele, acceptarea riscului și eventuala evaluare se stabilesc pentru situația concretă."
    },
    {
      "question": "Mă abonez la reclame prin formular?",
      "answer": "Nu. Contactul este pentru răspunsul și clarificările cererii tale. Nu te înscriem automat la newsletter, iar confirmarea documentelor formularului nu este acord pentru marketing."
    }
  ],
  "about": [
    {
      "question": "Primesc o recomandare doar după preț?",
      "answer": "Comparația pornește de la cerințe și nevoi și include riscurile, sumele, limitele, franșizele și excluderile. Recomandarea contractuală trebuie explicată pe documentele și situația concretă."
    },
    {
      "question": "Cine acceptă riscul și stabilește despăgubirea?",
      "answer": "Acceptarea și condițiile aparțin asigurătorului. Soluționarea daunei urmează polița și legea, iar litigiile se adresează mecanismelor competente. Consultantul nu poate promite acceptarea sau plata oricărei daune."
    },
    {
      "question": "Pot cere explicații despre o poliță existentă?",
      "answer": "Da. Precizează categoria, activitatea și reînnoirea. Documentele se solicită ulterior printr-un canal potrivit; formularul public este pentru informații generale și contact."
    }
  ],
  "personal": [
    {
      "question": "Care asigurări sunt obligatorii?",
      "answer": "RCA și PAD au obligații și excepții legale pentru situațiile cărora li se aplică. Alte protecții pot fi facultative ori cerute contractual. Se verifică vehiculul, locuința, finanțarea și activitatea ta."
    },
    {
      "question": "O poliță protejează automat toată familia?",
      "answer": "Numai dacă persoanele și riscurile sunt incluse expres. Sănătatea, accidentele, viața și călătoria au reguli diferite de eligibilitate, limite și beneficiari."
    },
    {
      "question": "Pot discuta mai multe categorii de asigurare?",
      "answer": "Da. Alege interesul principal în formular și descrie pe scurt celelalte nevoi. Comparația și documentele se stabilesc pentru fiecare categorie."
    }
  ]
};

