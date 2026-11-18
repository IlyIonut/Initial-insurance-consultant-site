import { QuestionSection } from "@/components/QuestionSection";
import { serviceFaqs } from "@/lib/faq-content";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icon";
import { LegalIdentity } from "@/components/LegalIdentity";
import { SITE } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  SITE.consultantName ? `${SITE.consultantName} — consultanță în asigurări` : "Consultanță în asigurări — cum lucrăm",
  "Află cine te ajută la IlyAsig și cum lucrăm: pornim de la întrebările tale, comparăm ofertele și explicăm ce include fiecare asigurare.",
  "/despre",
);

export default function AboutPage() {
  return <main className="compact-page">
    <section className="page-hero"><div className="shell">
      <Breadcrumbs items={[{ label: "Cum lucrăm", href: "/despre" }]} />
      <p className="eyebrow">CLARITATE, ÎNAINTE DE TOATE</p>
      <h1>Consultanță în asigurări.<br />Cu explicații clare.</h1>
      <p className="lead">Înainte să alegi o asigurare, ai nevoie să știi ce primești pentru banii plătiți. Te ascult, îți explic variantele disponibile și verificăm împreună ce se potrivește situației tale.</p>
    </div></section>
    <section className="section"><div className="shell article-columns">
      <article className="prose">
        <section id="identitate-profesionala">
          <h2>Identitate profesională și contact</h2>
          <LegalIdentity />
        </section>
        <h2>Întâi, situația ta</h2>
        <p>Dacă ai o firmă, îmi spui cu ce te ocupi, ce bunuri folosești și ce te preocupă. Dacă vrei o asigurare personală, pornim de la mașină, locuință, călătorie sau familie. Nu trebuie să cunoști deja produsele; le parcurgem împreună.</p>
        <h2>Apoi, diferențele dintre variante</h2>
        <p>Îți explic ce poate plăti fiecare poliță, până la ce sumă, cât ar rămâne în grija ta și ce situații nu sunt incluse. Verificăm și obligațiile pe care le ai. Asigurătorul stabilește condițiile și decide dacă poate oferi asigurarea pentru situația ta.</p>
        <h2>Și după alegere, atenție la schimbări</h2>
        <p>O investiție, o activitate nouă sau un alt sediu pot schimba datele declarate. La reînnoire și atunci când apar schimbări, este util să verificăm din nou dacă polițele corespund situației reale.</p>
        <h2>Cum folosești informațiile de pe site</h2>
        <p>Ghidurile te ajută să înțelegi produsele și să știi ce să întrebi. Pentru a afla ce cumperi, citim oferta și condițiile contractului, împreună cu regulile legale aplicabile. Recomandarea pentru tine vine după ce discutăm situația și nevoile tale.</p>
      </article>
      <aside className="scenario-card">
        <Icon name="shield" size={45} />
        <h3>Te pot ajuta<br />oriunde în România.</h3>
        <p>O conversație directă, pornită de la întrebările tale. Începem cu activitatea și nevoile tale, indiferent de județ.</p>
        <div style={{ marginTop: 25 }}><ButtonLink href="/contact" arrow>Să discutăm</ButtonLink></div>
      </aside>
    </div></section>
    <QuestionSection items={serviceFaqs.about} />
  </main>;
}
