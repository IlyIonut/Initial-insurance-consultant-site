import Link from "next/link";
import { SITE } from "@/lib/site";
export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  const entries = [{ label: "Acasă", href: "/" }, ...items];
  const schema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: entries.map((entry, i) => ({ "@type": "ListItem", position: i + 1, name: entry.label, item: SITE.url + entry.href })) };
  return <><nav aria-label="Fir de navigare" className="breadcrumbs">{entries.map((entry, i) => <span key={entry.href}>{i > 0 && <span className="breadcrumb-divider" aria-hidden="true">/</span>}{i === entries.length - 1 ? <span aria-current="page">{entry.label}</span> : <Link href={entry.href}>{entry.label}</Link>}</span>)}</nav><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /></>;
}
