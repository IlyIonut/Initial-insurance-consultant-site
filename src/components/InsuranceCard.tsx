import Link from "next/link";

export function InsuranceCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Link href={href} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-slate-100 text-lg font-bold text-slate-950 group-hover:bg-slate-950 group-hover:text-white">
        {title.slice(0, 1)}
      </div>
      <h3 className="text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      <span className="mt-5 inline-flex text-sm font-semibold text-slate-950">Află mai mult →</span>
    </Link>
  );
}
