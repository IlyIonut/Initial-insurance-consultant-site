export type FAQItem = { question: string; answer: string };
// Editorial source notes: docs/content-review.md. No search-volume ranking is claimed.
export const businessFaqExtras: Record<string, FAQItem[]> = {
  "bunuri-si-echipamente": [
    {
      "question": "Cât costă asigurarea bunurilor firmei?",
      "answer": "Prețul depinde de ce bunuri ai, unde le folosești, cât valorează și ce evenimente vrei să acoperi. Contează și construcția, protecția la incendiu sau furt și daunele anterioare. Îți pot explica ce date sunt necesare pentru o ofertă și ce parte dintr-o pagubă ar rămâne în grija firmei."
    },
    {
      "question": "Ce înseamnă subasigurarea?",
      "answer": "Înseamnă să asiguri bunurile pentru mai puțin decât valoarea cerută de contract. Dacă se aplică regula proporționalității, poți primi doar o parte din despăgubire, chiar și pentru o daună mai mică decât suma asigurată. Verificăm valoarea corectă și dacă polița are excepții de la această regulă."
    },
    {
      "question": "Polița proprietarului protejează bunurile firmei din spațiul închiriat?",
      "answer": "Nu automat. Proprietarul poate avea asigurată doar clădirea. Echipamentele, stocurile și amenajările tale trebuie verificate separat, împreună cu responsabilitățile din contractul de închiriere."
    }
  ],
  "raspundere-civila-profesionala": [
    {
      "question": "Ce limită de despăgubire aleg?",
      "answer": "Pornim de la cât de mare ar putea fi o pagubă în activitatea ta și de la ce îți cer legea și contractele. Verificăm suma maximă pentru un eveniment și pentru toate daunele dintr-un an. Contează și franșiza, partea plătită de tine, și dacă apărarea juridică folosește aceeași limită."
    },
    {
      "question": "Ce înseamnă data retroactivă?",
      "answer": "La unele polițe profesionale, aceasta arată de la ce dată din trecut pot fi luate în calcul greșelile pentru care primești o reclamație. Contează și când primești și anunți reclamația. Înainte să schimbi sau să închizi polița, verificăm aceste date și dacă ai timp suplimentar pentru anunțarea unor cereri."
    },
    {
      "question": "Sunt acoperite automat amenzile și penalitățile contractuale?",
      "answer": "Nu. Amenzile, promisiunile de rezultat și unele obligații asumate în plus prin contract pot fi excluse sau limitate. Arată-mi cerința clientului, ca să verificăm ce poate acoperi oferta înainte să închei polița."
    }
  ],
  "flote-auto": [
    {
      "question": "Pot include vehicule în leasing?",
      "answer": "Da, dacă sunt respectate condițiile asigurătorului și ale firmei de leasing. Verificăm cine primește despăgubirea, valoarea asigurată, franșiza și service-urile acceptate. Contractul de leasing poate cere și CASCO."
    },
    {
      "question": "Ce fac atunci când cumpăr sau vând un vehicul?",
      "answer": "Anunță schimbarea și verifică ce documente sunt necesare pentru includerea mașinii sau încetarea poliței. Procedurile RCA și CASCO pot fi diferite. O mașină nouă nu este asigurată automat doar pentru că ai deja alte vehicule în flotă."
    },
    {
      "question": "O daună schimbă prețul pentru toată flota?",
      "answer": "La RCA, pentru firme, clasa bonus-malus se stabilește separat pentru fiecare vehicul, conform normei. La CASCO, daunele din întreaga flotă pot conta la oferta de reînnoire. Prețul depinde și de celelalte criterii ale asigurătorului."
    }
  ],
  "sanatate-angajati": [
    {
      "question": "Sunt acoperite afecțiunile deja existente?",
      "answer": "Nu în orice plan. Pot exista excluderi, o evaluare a asigurătorului sau condiții speciale pentru echipă. Verificăm și când începe protecția pentru fiecare serviciu. Nu trimite diagnostice ori documente medicale ale angajaților prin formular."
    },
    {
      "question": "Poate fi folosită în orice clinică?",
      "answer": "Depinde de plan. Verificăm clinicile din localitățile angajaților, dacă asigurătorul le plătește direct și dacă poți recupera cheltuieli făcute în afara rețelei. Unele servicii cer aprobare înainte, au limite proprii sau o parte de cost plătită de angajat."
    },
    {
      "question": "Există avantaje fiscale?",
      "answer": "Pot exista, în limitele și condițiile fiscale aplicabile. Contează cine plătește asigurarea și situația firmei și a angajatului. Verifică împreună cu persoana care îți ține contabilitatea ce se aplică și care este plafonul pentru firma ta."
    }
  ],
  "intreruperea-activitatii": [
    {
      "question": "Ce pierderi financiare poate acoperi?",
      "answer": "Pot fi incluse anumite cheltuieli fixe, profitul calculat după definiția din contract și costuri suplimentare pentru reluarea activității. Nu primești automat toate încasările pierdute. Verificăm formula de calcul, perioada acoperită, partea rămasă în grija ta și documentele necesare."
    },
    {
      "question": "Sunt acoperite întreruperile la furnizori sau căderile de utilități?",
      "answer": "Doar dacă polița include opțiunile potrivite și sunt îndeplinite condițiile lor. Spune-mi dacă depinzi de un anumit furnizor, de alimentarea cu energie sau de servicii informatice, ca să verificăm aceste situații separat."
    },
    {
      "question": "Acoperă o închidere administrativă sau o pandemie?",
      "answer": "Simpla închidere a firmei nu este suficientă. Trebuie să aibă loc un eveniment inclus în poliță și să fie respectate condițiile acoperirii. Verificăm și excluderile, deoarece asigurarea obișnuită nu protejează orice pierdere economică."
    }
  ],
  "riscuri-cibernetice": [
    {
      "question": "Ce costuri poate include o poliță cyber?",
      "answer": "Poate ajuta cu intervenția specialiștilor IT, refacerea datelor, anumite pierderi cât timp nu poți lucra și despăgubiri datorate altor persoane. Verificăm separat limita și excluderile fiecărei categorii de cost."
    },
    {
      "question": "Ce măsuri de securitate poate cere asigurătorul?",
      "answer": "Poate cere confirmarea accesului prin mai mulți pași, precum parolă și cod, copii de siguranță, actualizări și un plan pentru incidente. Completează chestionarul împreună cu responsabilul IT, descriind măsurile pe care le aveți în funcțiune. Cerințele diferă între produse."
    },
    {
      "question": "Ce fac imediat după un incident?",
      "answer": "Urmează planul firmei pentru incidente și contactează asistența din poliță. Păstrează dovezile cu ajutorul specialiștilor. Eventualele obligații de anunțare a autorităților se verifică separat. Nu presupune că amenzile sau plățile cerute de atacatori sunt permise ori acoperite de asigurare."
    }
  ]
};

export const personalFaqExtras: Record<string, FAQItem[]> = {
  "casco": [
    {
      "question": "Sunt acoperite zgârieturile în parcare și defecțiunile mecanice?",
      "answer": "Pentru zgârieturi, vandalism sau daune cu autor necunoscut, verificăm dacă situația este inclusă și cum trebuie anunțată. Uzura și întreținerea nu sunt acoperite în mod obișnuit de CASCO. O defecțiune internă are alte reguli decât o avarie produsă de un accident acoperit."
    },
    {
      "question": "Ce se plătește la daună totală?",
      "answer": "Suma se calculează după regulile poliței și poate ține cont de valoarea mașinii, valoarea epavei, franșiză și sumele încă datorate. Nu primești automat prețul de cumpărare. Dacă mașina este finanțată, verificăm separat și eventuala asigurare GAP, care poate acoperi anumite diferențe de valoare."
    }
  ],
  "locuinta": [
    {
      "question": "PAD acoperă și mobila sau electrocasnicele?",
      "answer": "Nu. Pentru ele verificăm o poliță facultativă care include bunurile din locuință. Stabilim categoriile și valorile, iar obiectele deosebit de valoroase pot avea nevoie de o listă sau o evaluare separată. Asigurarea clădirii nu include automat și conținutul ei."
    },
    {
      "question": "Pot asigura o locuință cu credit sau o clădire cu risc seismic?",
      "answer": "Dacă ai credit, verificăm cerințele băncii, valorile și cine are dreptul la despăgubire. Pentru clădirile din clasa I de risc seismic există restricții legale privind PAD până la recepția lucrărilor de consolidare. Posibilitatea unei asigurări facultative se verifică pentru clădirea ta."
    }
  ],
  "calatorie": [
    {
      "question": "Când trebuie cumpărată polița?",
      "answer": "Cel mai bine este să verifici asigurarea înainte să pleci. Unele produse nu se pot cumpăra după începerea călătoriei, iar altele impun condiții sau o perioadă de așteptare. Pentru anulare, numită și storno, poate exista un termen legat de data rezervării. Un eveniment deja cunoscut nu devine automat acoperit."
    },
    {
      "question": "Ce fac dacă am o urgență medicală în străinătate?",
      "answer": "Cere ajutorul de urgență necesar și contactează cât mai repede asistența din poliță. Verifică ce servicii trebuie aprobate și păstrează documentele medicale și dovezile de plată. Banii se recuperează în limitele și după procedura contractului, nu automat pentru orice cheltuială."
    }
  ],
  "sanatate": [
    {
      "question": "Sunt acoperite bolile existente înainte de contract?",
      "answer": "Depinde de produs și de evaluarea asigurătorului. Pot exista excluderi, condiții speciale sau situații care nu sunt acceptate. Informațiile medicale se completează corect prin canalul asigurătorului; nu le trimite prin formularul public."
    },
    {
      "question": "Pot folosi polița imediat și cine plătește clinica?",
      "answer": "Unele servicii au o perioadă de așteptare sau cer aprobare înainte de programare. Asigurătorul poate plăti direct clinica ori poți plăti tu și cere banii înapoi. Alte beneficii sunt sume fixe. Verificăm limitele și ce parte din cost rămâne în grija ta."
    }
  ],
  "viata": [
    {
      "question": "Primesc înapoi toți banii plătiți dacă renunț?",
      "answer": "Nu automat. O asigurare simplă de protecție poate să nu restituie plățile făcute. Dacă are economisire sau investiții, suma primită la renunțare poate fi mai mică decât ai plătit, mai ales în primii ani. Îți explic costurile și regulile înainte să decizi."
    },
    {
      "question": "Cine primește banii și este garantată investiția?",
      "answer": "Contractul arată cine primește banii și în ce situații. Pentru un credit, dreptul la despăgubire poate fi transferat băncii. Dacă există o componentă de investiții, valoarea poate varia; suma investită și câștigul nu sunt automat garantate. Verificăm ce promite efectiv produsul."
    }
  ],
  "raspundere": [
    {
      "question": "Cât se poate plăti pentru o daună și pentru toate daunele dintr-un an?",
      "answer": "Prima este suma maximă care poate fi plătită pentru un eveniment sau o cerere. Agregatul anual este plafonul pentru toate daunele dintr-un an. Verificăm și cât plătești tu la daună și dacă apărarea juridică folosește aceeași limită."
    },
    {
      "question": "Sunt acoperite automat amenzile și penalitățile?",
      "answer": "Nu. Amenzile, promisiunile de rezultat și unele obligații asumate în plus prin contract pot fi excluse. Contează și activitatea declarată, perioada acoperită și când anunți reclamația. Verificăm oferta pentru situațiile care te privesc."
    }
  ],
  "accidente": [
    {
      "question": "Sunt protejat la serviciu, acasă și în străinătate?",
      "answer": "Verificăm dacă polița acoperă accidentele de muncă, timpul liber sau ambele, precum și țările în care este valabilă. Spune-mi ce ocupație ai, ce activități practici și unde călătorești. Nu toate polițele oferă protecție permanentă sau în întreaga lume."
    },
    {
      "question": "Se plătește suma integrală pentru orice invaliditate?",
      "answer": "Nu. Plata poate depinde de gradul de invaliditate și de tabelul de calcul din contract, până la suma asigurată. Pentru spitalizare, fracturi sau operații există alte reguli. Îți explic separat cum se calculează fiecare plată."
    }
  ]
};

export const industryFaqs: Record<string, FAQItem[]> = {
  "comert-si-servicii": [
    {
      "question": "Polița proprietarului spațiului îmi protejează magazinul?",
      "answer": "Nu automat. Verificăm separat clădirea, amenajările, echipamentele și stocurile tale. Contează atât ce prevede polița, cât și responsabilitățile din contractul de închiriere."
    },
    {
      "question": "Ce se întâmplă dacă un client se accidentează în spațiu?",
      "answer": "Poate fi relevantă asigurarea de răspundere civilă pentru activitatea ta. Asigurătorul verifică ce s-a întâmplat, dacă răspunzi pentru accident și dacă situația este inclusă în poliță. Faptul că s-a întâmplat în spațiul tău nu garantează singur plata."
    },
    {
      "question": "Pot include stocuri sezoniere și bunuri ale clienților?",
      "answer": "Spune-mi valoarea maximă a stocurilor și dacă păstrezi, prelucrezi sau repari bunuri ale clienților. Verificăm dacă pot fi incluse și ce condiții se aplică la depozitare, manipulare și furt."
    },
    {
      "question": "Primesc venituri dacă închid temporar?",
      "answer": "Poți primi despăgubiri doar dacă ai protecție pentru întreruperea activității și închiderea are legătură cu un eveniment acoperit. Polița nu plătește automat pentru lipsa clienților sau pentru orice oprire a firmei."
    }
  ],
  "productie-si-ateliere": [
    {
      "question": "Asigurarea halei acoperă defectarea utilajelor?",
      "answer": "Nu automat. Incendiul și defecțiunile interne ale utilajelor pot avea nevoie de acoperiri diferite. Verificăm echipamentele declarate, cerințele de întreținere și ce defecțiuni sunt excluse."
    },
    {
      "question": "Sunt incluse materiile prime și produsele finite?",
      "answer": "Pot fi incluse dacă le declari și sunt acceptate în poliță, la valorile și locațiile potrivite. Stocurile, produsele aflate în lucru și bunurile clienților pot avea reguli diferite de evaluare."
    },
    {
      "question": "Polița acoperă produsele defecte pe care le vând?",
      "answer": "Asigurarea de răspundere pentru produse poate acoperi anumite pagube produse altor persoane de produsele tale. Repararea propriului produs, retragerea de pe piață și garanția comercială nu sunt incluse automat. Le verificăm separat."
    },
    {
      "question": "Cum protejez perioada până la înlocuirea utilajului?",
      "answer": "Putem analiza asigurarea pentru întreruperea activității împreună cu protecția utilajului. Estimăm cât durează livrarea, instalarea și repornirea și verificăm ce pierderi pot fi acoperite în acel interval."
    }
  ],
  "it-si-consultanta": [
    {
      "question": "Am nevoie de răspundere profesională, cyber sau ambele?",
      "answer": "O greșeală în serviciul livrat și un atac informatic sunt situații diferite. Pornim de la activitatea și contractele tale, apoi verificăm dacă ai nevoie de două polițe sau de un produs care le include pe ambele."
    },
    {
      "question": "Pot acoperi contracte cu clienți din SUA sau Canada?",
      "answer": "Poate fi posibil dacă asigurătorul acceptă activitatea, țările și condițiile juridice respective. Nu este suficient ca polița să se numească internațională. Verificăm cerințele clientului, limitele, subcontractorii și excluderile."
    },
    {
      "question": "Ce verific când schimb asigurătorul?",
      "answer": "La unele polițe profesionale contează când ai făcut greșeala și când ai primit și ai anunțat reclamația. Verificăm de la ce dată sunt luate în calcul faptele anterioare și ce ai de anunțat despre situațiile deja cunoscute, înainte să înceteze polița veche."
    },
    {
      "question": "Echipamentele și munca de acasă sunt acoperite?",
      "answer": "Depinde de bunurile și locațiile acceptate în poliță. Laptopurile folosite în deplasare, echipamentele de acasă și bunurile din transport trebuie declarate; asigurarea sediului nu le include automat."
    }
  ],
  "horeca": [
    {
      "question": "Pot include alterarea alimentelor dintr-o vitrină frigorifică?",
      "answer": "Unele produse au o opțiune dedicată. Verificăm dacă este acoperită defecțiunea ori întreruperea curentului, după cât timp poate fi plătită paguba și ce verificări de temperatură sunt cerute. Simpla asigurare a stocului nu confirmă aceste situații."
    },
    {
      "question": "Sunt acoperite intoxicațiile alimentare sau bunurile oaspeților?",
      "answer": "Le verificăm separat în protecția de răspundere potrivită activității tale. Contează ce servicii oferi, cine este asigurat și ce limite sau excluderi există. Nu orice incident cu un oaspete este inclus."
    },
    {
      "question": "Pot asigura terasa și echipamentele din exterior?",
      "answer": "Spune-mi ce bunuri ai afară, cum le folosești și cum le protejezi. Bunurile în aer liber, construcțiile ușoare și dotările sezoniere pot avea condiții speciale sau restricții."
    },
    {
      "question": "Asigurarea plătește dacă restaurantul este închis?",
      "answer": "Depinde de motivul închiderii și de ce include contractul. Oprirea trebuie să fie legată de un eveniment acoperit. O decizie administrativă, lipsa autorizațiilor, pandemia sau scăderea cererii nu dau automat dreptul la despăgubire."
    }
  ],
  "cabinete-medicale": [
    {
      "question": "Malpraxisul medicului acoperă cabinetul și aparatura?",
      "answer": "Nu automat. Răspunderea ta profesională, cea a cabinetului și protecția aparaturii se verifică separat. Contează persoanele asigurate, specialitățile și serviciile pe care le oferi."
    },
    {
      "question": "Cum verific limita de malpraxis?",
      "answer": "Pornim de la cerințele legale și profesionale pentru specialitatea ta, apoi vedem suma maximă pentru o reclamație și pentru toate reclamațiile dintr-un an. Limita minimă cerută nu garantează că orice pagubă va fi plătită integral."
    },
    {
      "question": "Este inclusă avaria internă a aparaturii?",
      "answer": "Poate fi necesară o acoperire separată de cea pentru incendiu sau alte evenimente externe. Verificăm utilizarea, vechimea, valoarea și întreținerea aparaturii. Uzura și service-ul obișnuit nu sunt acoperite automat."
    },
    {
      "question": "Trimit datele pacienților pentru prima discuție?",
      "answer": "Nu. Sunt suficiente specialitățile și informațiile generale despre cabinet. Nu trimite fișe, diagnostice ori documente ale pacienților prin formular. Dacă ulterior sunt necesare date pentru un dosar, se folosesc procedurile potrivite."
    }
  ]
};

export const guideFaqs: Record<string, FAQItem[]> = {
  "ce-asigurari-are-nevoie-un-imm": [
    {
      "question": "Există un pachet obligatoriu pentru orice IMM?",
      "answer": "Nu există aceeași listă pentru toate firmele. Verificăm ce obligații ai în funcție de vehicule, profesie și activitate, apoi cerințele băncii sau ale clienților și protecțiile opționale utile afacerii tale."
    },
    {
      "question": "De unde încep dacă bugetul este limitat?",
      "answer": "Începem cu obligațiile tale și cu pierderile pe care firma le-ar suporta cel mai greu. Comparăm sumele maxime și partea din daună plătită de tine. O poliță cu limite prea mici poate lăsa cheltuieli importante în grija firmei."
    },
    {
      "question": "Când revizuiesc polițele?",
      "answer": "La reînnoire și când schimbi activitatea, sediul, bunurile, echipa sau contractele. Unele schimbări trebuie anunțate imediat, conform poliței. Spune-mi când apar, fără să aștepți neapărat expirarea asigurării."
    }
  ],
  "bunuri-versus-intreruperea-activitatii": [
    {
      "question": "Dacă este despăgubit incendiul primesc și profitul pierdut?",
      "answer": "Nu automat. Verificăm separat protecția bunurilor și cea pentru întreruperea activității. Pentru pierderile financiare trebuie să existe acoperirea potrivită și să fie respectate evenimentele, formula și limitele din contract."
    },
    {
      "question": "Perioada poliței și perioada de despăgubire sunt identice?",
      "answer": "Nu. Perioada poliței arată când trebuie să aibă loc evenimentul. Perioada de despăgubire arată pentru cât timp după acel eveniment pot fi acoperite pierderile, potrivit contractului. Poate exista și un interval inițial fără despăgubire, numit franșiză temporală."
    },
    {
      "question": "Pot fi acoperite cheltuieli de relocare temporară?",
      "answer": "Unele produse pot include costuri suplimentare care te ajută să limitezi pierderea. Verificăm dacă ai nevoie de acordul asigurătorului, cum justifici cheltuiala și ce limită există. Nu orice cost apărut după daună este rambursat."
    }
  ],
  "cum-compari-ofertele-pentru-firma": [
    {
      "question": "Ofertele cu aceeași sumă asigurată sunt echivalente?",
      "answer": "Nu. Pot include evenimente, bunuri, persoane și locații diferite. Pot avea și sume maxime mai mici pentru anumite situații sau o franșiză mai mare. Verificăm ce se poate plăti pentru fiecare risc, nu doar valoarea totală."
    },
    {
      "question": "Documentul de informare este suficient pentru decizie?",
      "answer": "Este un rezumat util. Citește-l împreună cu oferta, condițiile și clauzele contractului. Dacă un detaliu important nu este clar, cere o explicație scrisă înainte să alegi."
    },
    {
      "question": "Oferta cea mai ieftină este mereu potrivită?",
      "answer": "Depinde de ce include. Un preț mai mic poate însemna o parte mai mare din daună plătită de tine, limite mai mici sau situații excluse. Comparăm ofertele folosind aceleași date despre firmă și aceleași nevoi."
    }
  ]
};

export const rcaArticleFaqs: Record<string, FAQItem[]> = {
  "coverage": [
    {
      "question": "RCA acoperă pasagerii și șoferul vinovat?",
      "answer": "Pasagerii răniți pot primi despăgubiri în condițiile legii. Dacă ai provocat accidentul, propria RCA nu îți acoperă vătămarea sau decesul pentru acel eveniment. Pentru protecția ta putem verifica separat o asigurare de accidente."
    },
    {
      "question": "Dacă șoferul era sub influența alcoolului, persoana păgubită pierde despăgubirea?",
      "answer": "Asigurătorul poate despăgubi persoana păgubită potrivit legii și, în cazurile prevăzute de lege, poate cere apoi banii înapoi de la persoana răspunzătoare. Această recuperare se numește regres. Împrejurările accidentului sunt analizate în dosar."
    },
    {
      "question": "Decontarea directă este CASCO?",
      "answer": "Nu. Este o opțiune RCA prin care poți cere despăgubirea propriului asigurător dacă mașina îți este avariată de alt vehicul și sunt îndeplinite condițiile legale. Nu acoperă reparația mașinii tale dacă tu ai provocat accidentul."
    }
  ],
  "buying": [
    {
      "question": "Polița începe imediat ce o plătesc?",
      "answer": "Nu întotdeauna. Verifică data și ora de început din poliță; acestea depind de regulile legale și de situația vehiculului și a asigurării existente. Plata sau cererea de ofertă nu înseamnă singure că protecția a început."
    },
    {
      "question": "Cum verific emiterea?",
      "answer": "Verifică numele, numărul de înmatriculare, seria de șasiu, perioada și prețul din poliță. Valabilitatea raportată de asigurător poate fi consultată în AIDA, baza administrată de Biroul Asigurătorilor de Autovehicule din România (BAAR). Dacă observi o diferență, cere clarificări asigurătorului."
    },
    {
      "question": "Ce fac dacă primesc numai oferte foarte mari?",
      "answer": "Putem verifica procedura BAAR pentru asigurații cu risc ridicat. Ea are reguli și cerințe pentru ofertele pe care le prezinți. Faptul că prețul ți se pare mare nu confirmă singur că te încadrezi sau că vei primi un anumit tarif."
    }
  ],
  "bonus": [
    {
      "question": "Dacă am două mașini, clasa se aplică la fel?",
      "answer": "Dacă le deții ca persoană fizică, aceeași clasă bonus-malus se aplică vehiculelor tale, potrivit normei. Pentru mașinile unei firme, clasa se stabilește separat pentru fiecare vehicul. Verificăm istoricul și datele folosite în ofertă."
    },
    {
      "question": "La B8 plătesc jumătate din prețul de anul trecut?",
      "answer": "Nu. Reducerea clasei se aplică tarifului actual al asigurătorului, iar acesta se poate schimba. Poți păstra aceeași clasă bonus-malus și să primești totuși un preț diferit față de anul trecut."
    },
    {
      "question": "Constatarea amiabilă schimbă imediat clasa?",
      "answer": "Semnarea amiabilei nu înseamnă că s-a plătit deja o despăgubire. Pentru majorarea legată de daune contează regulile bonus-malus și daunele plătite în perioada luată în calcul. Dacă datele sunt greșite, cere corectarea lor asigurătorului care le-a raportat."
    }
  ],
  "accident": [
    {
      "question": "Când mă prezint la poliție în 24 de ore?",
      "answer": "Pentru un accident de circulație cu doar pagube materiale, regula este să te prezinți la poliția competentă în cel mult 24 de ore de la eveniment. Există excepții legale, inclusiv constatarea amiabilă în condițiile legii. Dacă sunt victime, sună imediat la 112."
    },
    {
      "question": "Amiabila înseamnă recunoașterea automată a vinei?",
      "answer": "Formularul descrie ce s-a întâmplat. Nu stabilește singur cine primește despăgubirea sau cât se plătește; asigurătorul analizează datele și răspunderea. Completează corect informațiile și schița și nu semna un formular necompletat."
    },
    {
      "question": "Când pot cere despăgubirea propriului asigurător RCA?",
      "answer": "Prin decontare directă, dacă ai ales această opțiune și sunt îndeplinite toate condițiile legale: accident în România, vehicule înmatriculate sau înregistrate în România, ambele cu RCA valabilă, pagube doar la vehicule și fără persoane rănite. Pentru alte situații, verificăm procedura potrivită."
    }
  ],
  "documents": [
    {
      "question": "Trebuie să încarc actele în formular?",
      "answer": "Nu. Pentru început, lasă numele, emailul și ce asigurare cauți. Îți explic ulterior ce documente sunt necesare și cum le transmiți. Nu introduce CNP sau fotografii ale actelor în formular."
    },
    {
      "question": "Se poate solicita RCA pentru o mașină neînmatriculată încă?",
      "answer": "Există situații în care poți încheia RCA în vederea înmatriculării. Documentele și perioada pot fi diferite de cele pentru o mașină deja înmatriculată. Spune-mi în ce etapă ești și verificăm ce îți trebuie."
    },
    {
      "question": "Cine apare ca asigurat la leasing?",
      "answer": "Datele proprietarului și utilizatorului trebuie să corespundă actelor și regulilor legale. Nu poți alege pur și simplu persoana pentru care oferta este mai ieftină. Verificăm contractul și cerințele firmei de leasing la ofertare."
    }
  ]
};

export const serviceFaqs: Record<string, FAQItem[]> = {
  "contact": [
    {
      "question": "Trimiterea cererii încheie o poliță sau mă obligă să cumpăr?",
      "answer": "Nu. Prin formular ceri să discutăm și nu îți asumi obligația de a cumpăra. Cererea nu încheie, modifică sau reînnoiește o poliță. Protecția începe la data și în condițiile prevăzute în documentele emise."
    },
    {
      "question": "Pot trimite o cerere din orice județ?",
      "answer": "Da, poți cere o discuție din orice județ, pentru tine sau pentru firmă. În funcție de ce vrei să asiguri, verificăm documentele necesare, dacă este nevoie de o evaluare și ce poate accepta asigurătorul."
    },
    {
      "question": "Mă abonez la reclame prin formular?",
      "answer": "Nu. Folosim datele pentru a răspunde cererii tale și pentru clarificările necesare. Nu te înscriem automat la newsletter, iar confirmarea citirii documentelor nu este acord pentru reclame."
    }
  ],
  "about": [
    {
      "question": "Primesc o recomandare doar după preț?",
      "answer": "Pornim de la ce vrei să protejezi și de la buget. Îți explic ce evenimente include oferta, cât poate plăti asigurătorul, ce parte plătești tu și ce situații sunt excluse. Recomandarea se leagă de nevoile tale și de documentele poliței."
    },
    {
      "question": "Cine acceptă riscul și stabilește despăgubirea?",
      "answer": "Asigurătorul decide dacă poate oferi polița și în ce condiții, apoi analizează daunele potrivit contractului și legii. Te pot ajuta să înțelegi documentele, dar nu îți pot promite acceptarea oricărei cereri sau plata oricărei pagube. Pentru dispute există procedurile competente."
    },
    {
      "question": "Pot cere explicații despre o poliță existentă?",
      "answer": "Da. Spune-mi ce tip de poliță ai, pentru ce o folosești și când expiră. Pentru început sunt suficiente informațiile generale; stabilim apoi ce documente sunt necesare și cum le poți transmite."
    }
  ],
  "personal": [
    {
      "question": "Care asigurări sunt obligatorii?",
      "answer": "RCA și PAD au obligații și excepții prevăzute de lege. Alte polițe pot fi opționale sau cerute prin contract, de exemplu de bancă. Verificăm ce se aplică mașinii, locuinței, finanțării sau activității tale."
    },
    {
      "question": "O poliță protejează automat toată familia?",
      "answer": "Doar dacă membrii familiei și situațiile respective sunt incluși în contract. Verificăm cine poate fi asigurat și ce sume sau condiții se aplică fiecăruia, în funcție de produs."
    },
    {
      "question": "Pot discuta mai multe categorii de asigurare?",
      "answer": "Da. Alege în formular asigurarea care te interesează în primul rând și scrie pe scurt ce ai mai vrea să discutăm. Parcurgem apoi opțiunile și documentele pentru fiecare."
    }
  ]
};

