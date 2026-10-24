import { FAQ } from "./FAQ";
import { EditorialNote } from "./EditorialNote";
import type { FAQItem } from "@/lib/faq-content";
export function QuestionSection({ items }: { items: FAQItem[] }) {
  return <section className="section faq-section"><div className="shell faq-layout"><div><p className="eyebrow">ÎNTREBĂRI FRECVENTE</p><h2>Răspunsuri înainte<br />de următorul pas.</h2><EditorialNote /></div><FAQ items={items} /></div></section>;
}
