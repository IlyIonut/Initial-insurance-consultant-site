import { Icon } from "./Icon";
export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  return <div className="faq-list">{items.map(item => <details key={item.question} className="faq-item"><summary>{item.question}<span className="faq-plus"><Icon name="plus" size={19} /></span></summary><p>{item.answer}</p></details>)}</div>;
}
