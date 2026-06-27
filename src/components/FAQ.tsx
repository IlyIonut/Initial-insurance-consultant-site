export function FAQ({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <details key={item.question} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <summary className="cursor-pointer list-none font-semibold text-slate-950">
            {item.question}
            <span className="float-right text-slate-400 group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 text-sm leading-6 text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
