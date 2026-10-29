import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { ButtonLink } from "./ButtonLink";
import { Icon } from "./Icon";

type ProductNavItem = { id: string; label: string };
type ProductTone = "blue" | "mint" | "peach";

export function ProductPage({ eyebrow, title, description, icon, tone = "blue", breadcrumbs, facts, navigation, children }: {
  eyebrow: string;
  title: string;
  description: string;
  icon: string;
  tone?: ProductTone;
  breadcrumbs: { label: string; href: string }[];
  facts: string[];
  navigation: ProductNavItem[];
  children: ReactNode;
}) {
  return <main className={`product-page product-tone-${tone}`}>
    <section className="product-hero">
      <div className="shell">
        <Breadcrumbs items={breadcrumbs} />
        <div className="product-intro">
          <div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="product-description">{description}</p></div>
          <aside className="product-at-a-glance" aria-label="De reținut">
            <div className="product-symbol"><Icon name={icon} size={32} /><span>DE REȚINUT</span></div>
            <ul>{facts.map(fact => <li key={fact}><Icon name="check" size={17} /><span>{fact}</span></li>)}</ul>
          </aside>
        </div>
        <nav className="product-nav" aria-label="Cuprinsul paginii"><span>În această pagină</span><div>{navigation.map((item, index) => <a key={item.id} href={`#${item.id}`}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{item.label}</a>)}</div></nav>
      </div>
    </section>
    <div className="shell product-body">{children}</div>
  </main>;
}

export function ProductSection({ id, number, title, description, children }: { id: string; number: string; title: string; description?: string; children: ReactNode }) {
  return <section id={id} className="product-section" aria-labelledby={`${id}-title`}><div className="product-section-heading"><span className="product-section-number" aria-hidden="true">{number}</span><div><h2 id={`${id}-title`}>{title}</h2>{description && <p>{description}</p>}</div></div>{children}</section>;
}

export function ProductCard({ title, tone = "plain", children }: { title: string; tone?: ProductTone | "plain"; children: ReactNode }) {
  return <div className={`product-card card-tone-${tone}`}><h3>{title}</h3>{children}</div>;
}

export function ProductList({ items }: { items: string[] }) {
  return <ul className="product-list">{items.map(item => <li key={item}><Icon name="check" size={16} /><span>{item}</span></li>)}</ul>;
}

export function ProductContact({ title, description, href, label }: { title: string; description: string; href: string; label: string }) {
  return <section className="product-contact" aria-labelledby="product-contact-title"><div><p className="eyebrow">CÂND EȘTI PREGĂTIT</p><h2 id="product-contact-title">{title}</h2><p>{description}</p></div><ButtonLink href={href} arrow>{label}</ButtonLink></section>;
}
