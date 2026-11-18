import type { BusinessSolution } from "./business-content";

export const agriculturalSolution: BusinessSolution = {
  slug: "agricole",
  name: "Asigurări agricole",
  title: "Asigurări agricole pentru culturi, vii și livezi",
  seoTitle: "Asigurări agricole: culturi, grindină și secetă",
  description: "Asigurări agricole în toată România pentru grâu, porumb, rapiță, livezi și solarii. Vezi ce acoperă polița și cere o ofertă pe hectar.",
  intro: "Ai investit timp și bani în culturi, iar vremea poate schimba rezultatul unui sezon. Te ajut să compari asigurări pentru cereale, porumb, plante oleaginoase, vii, livezi și legume. Putem începe discuția din orice județ: îmi spui ce cultivi, unde sunt parcelele și ce suprafață vrei să protejezi.",
  icon: "leaf",
  color: "mint",
  label: "PROTECȚIA CULTURILOR",
  suitable: [
    "Fermieri cu grâu, orz, porumb, rapiță, floarea-soarelui, soia sau alte culturi de câmp",
    "Viticultori și producători de fructe, inclusiv livezi și arbuști fructiferi",
    "Legumicultori cu producție în câmp, sere sau solarii",
    "Ferme mici sau cu mai multe culturi și parcele, pentru verificarea variantelor disponibile",
  ],
  coverages: [
    "Grindină, incendiu, furtună sau ploaie torențială, în funcție de cultură și poliță",
    "Opțiuni pentru secetă, îngheț ori reînsămânțare, verificate separat",
    "Recolta și, unde sunt incluse, anumite structuri sau dotări ale plantației",
    "Protecție pentru suprafețele și perioadele declarate și acceptate în contract",
  ],
  questions: [
    "Sunt declarate toate culturile, parcelele și suprafețele tale?",
    "Ce fenomene sunt acoperite pentru fiecare cultură și de când?",
    "Pentru ce valoare pe hectar asiguri recolta?",
    "Ce parte din pagubă plătești tu și de la ce prag se acordă despăgubirea?",
    "La secetă, se evaluează cultura sau se folosesc date meteorologice?",
    "Când anunți paguba și ce trebuie să păstrezi pentru constatare?",
  ],
  note: "Seceta, înghețul, reînsămânțarea și dotările unei plantații sau ale unui solar nu sunt incluse în orice poliță. Verificăm pentru cultura și zona ta ce poate fi asigurat, de când începe protecția și ce situații sunt excluse.",
  scenario: {
    title: "Aceeași furtună, culturi în stadii diferite.",
    body: "Ai două parcele afectate în aceeași zi, dar culturile sunt în stadii diferite. Asigurătorul verifică riscul inclus, pierderea și condițiile pentru fiecare. De aceea, comparăm protecția pe cultură și parcelă, nu doar suprafața totală sau prețul poliței.",
  },
  sections: [
    {
      id: "pret-pe-hectar",
      title: "Cât costă asigurarea culturilor agricole pe hectar?",
      body: "Prețul depinde de cultură, localitatea parcelei, suprafață, valoarea asigurată pe hectar și fenomenele incluse. Contează și franșiza: partea din pagubă pe care o plătești tu. Cere comparația pentru aceleași parcele și valori, cu seceta sau înghețul indicate separat. Un preț mai mic poate însemna o protecție mai restrânsă sau un cost mai mare pentru tine la daună.",
    },
    {
      id: "grindina",
      title: "Ce verifici la asigurarea pentru grindină?",
      body: "Verificăm dacă polița plătește pierderea de cantitate și dacă include și anumite pierderi de calitate, importante la fructe și legume. Contează cultura, stadiul ei, pragul de la care se plătește și franșiza. Faptul că ai protecție la grindină nu înseamnă că sunt acoperite automat seceta, înghețul sau toate ploile abundente.",
    },
    {
      id: "seceta",
      title: "Asigurare de secetă: evaluare în teren sau index meteorologic?",
      body: "Unele variante urmăresc paguba constatată în cultură. Altele folosesc un index, adică un calcul pe baza precipitațiilor și temperaturilor pentru un punct și o perioadă stabilite în contract. În acest caz, suma rezultată poate fi diferită de pierderea pe care o vezi în parcelă. Verificăm culturile acceptate, punctul de referință, perioadele și pragurile. Nu orice poliță agricolă include seceta sau canicula.",
    },
    {
      id: "inghet-reinsamantare",
      title: "Îngheț și reînsămânțare: sunt incluse pentru cultura ta?",
      body: "Înghețul de iarnă și înghețul târziu de primăvară pot avea condiții diferite. Pentru livezi contează specia și tipul plantației, iar pentru culturile de toamnă verificăm și eventualele cheltuieli de reînsămânțare. Aceste opțiuni au cauze, perioade și limite proprii; nu orice cultură care nu se dezvoltă normal este acoperită.",
    },
    {
      id: "oferta-nationala",
      title: "Cum ceri o ofertă pentru terenuri din orice județ?",
      body: "Poți începe discuția online, indiferent unde locuiești. Pentru ofertă contează locul în care se află fiecare parcelă, cultura, suprafața și, dacă este cazul, irigațiile sau protecția antigrindină. Dacă ai terenuri în mai multe zone, le declarăm separat și verificăm condițiile fiecăreia. Transmiterea cererii nu activează polița; data de început apare în documentele emise.",
    },
    {
      id: "cand-inchei-asigurarea",
      title: "Când închei asigurarea: înainte sau după semănat?",
      body: "Termenul depinde de cultură, stadiul plantelor și riscurile pe care vrei să le incluzi. Nu există o singură dată-limită pentru toate polițele. Începem discuția din timp și verificăm până când poți încheia asigurarea și când începe protecția. O pagubă deja produsă sau cunoscută nu devine automat acoperită prin cumpărarea unei polițe.",
    },
  ],
  faqs: [
    {
      question: "Ce culturi agricole pot asigura?",
      answer: "Putem verifica cereale precum grâu și orz, porumb, rapiță, floarea-soarelui, soia, cartofi, sfeclă de zahăr, vii, livezi, arbuști fructiferi și legume în câmp sau spații protejate. Acceptarea și riscurile se confirmă pentru cultura, parcela și sezonul tău.",
    },
    {
      question: "Pot cere o ofertă de asigurare agricolă din orice județ?",
      answer: "Da, preluăm cereri din toată România. Spune-mi unde sunt terenurile, ce cultivi și suprafața aproximativă. Condițiile disponibile se verifică pentru fiecare cultură și zonă; nu este suficientă localitatea în care locuiești tu.",
    },
    {
      question: "Cât costă asigurarea pentru grâu, porumb sau rapiță pe hectar?",
      answer: "Nu există un tarif unic. Contează cultura, zona, valoarea pe hectar, suprafața și fenomenele incluse. Pregătim o ofertă pentru datele tale și comparăm separat prețul, franșiza și eventualele opțiuni pentru secetă ori îngheț.",
    },
    {
      question: "Seceta și canicula sunt incluse automat?",
      answer: "Nu. Verificăm dacă oferta le include, pentru ce culturi și după ce metodă se calculează plata. Protecția bazată pe date meteorologice are alte reguli decât evaluarea pagubei din teren. O asigurare pentru grindină nu confirmă și acoperirea secetei.",
    },
    {
      question: "Pot asigura mai multe culturi și parcele prin aceeași solicitare?",
      answer: "Da. Poți începe cu o singură cerere, menționând culturile și suprafețele din fiecare zonă. Verificăm apoi ce poate fi grupat în același contract și ce condiții diferite se aplică pe cultură. Una dintre polițe nu extinde automat protecția la toate parcelele fermei.",
    },
    {
      question: "Pot cere ofertă și pentru o suprafață mică?",
      answer: "Da, poți cere verificarea unei variante. Suprafața minimă, costul minim și culturile acceptate diferă între produse. Spune-mi suprafața reală, fără să presupui că un prag menționat pentru altă fermă se aplică și situației tale.",
    },
    {
      question: "Asigurarea livezii include înghețul târziu de primăvară?",
      answer: "Doar dacă există o acoperire potrivită pentru specia și tipul plantației tale și o alegi în ofertă. Verificăm stadiul de vegetație, perioada protejată și ce pierderi sunt acceptate. Asigurarea rodului la grindină nu confirmă automat protecția la îngheț sau a pomilor înșiși.",
    },
    {
      question: "Asigurarea solarului protejează și legumele din interior?",
      answer: "Verificăm separat structura, materialul de acoperire, dotările și culturile din interior. O poliță care acoperă unul dintre acestea nu le include automat pe toate. Pot exista și condiții tehnice pentru anumite fenomene, cum este greutatea zăpezii.",
    },
    {
      question: "Ce informații pregătesc pentru ofertă?",
      answer: "Pentru început: cultura, localitatea terenului, suprafața aproximativă și ce fenomene vrei să verificăm. Ulterior pot fi necesare parcelele, hărțile, valorile pe hectar și informații despre irigații sau protecția antigrindină. Nu trimite documente prin formularul inițial.",
    },
    {
      question: "Ce fac după grindină, îngheț sau altă pagubă?",
      answer: "Anunță asigurătorul în termenul și prin canalul din poliță. Notează data și parcelele afectate și păstrează fotografiile și documentele. Verifică instrucțiunile pentru constatare înainte de recoltare, reînsămânțare sau alte intervenții care pot modifica urmele pagubei.",
    },
    {
      question: "Pot primi sprijin pentru costul poliței prin APIA sau AFIR?",
      answer: "Pentru strugurii de vin se verifică programul APIA aplicabil, iar pentru alte situații, programele AFIR sau regulile sectoriale. Contează polița, dovada plății, parcelele și condițiile sesiunii. Încheierea unei asigurări nu garantează finanțarea. Găsești mai sus explicația programelor și a documentelor consultate.",
    },
    {
      question: "Sunt incluse și utilajele, clădirile sau animalele fermei?",
      answer: "Nu automat. Pagina aceasta se concentrează pe culturi, recolte și anumite dotări care pot fi incluse expres. Pentru utilaje, clădiri, animale sau răspunderea fermei, spune-mi separat ce ai nevoie, ca să verific disponibilitatea și condițiile unei soluții.",
    },
  ],
};
