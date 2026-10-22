import Link from "next/link";

export function InsuranceCard({
  title,
  description,
  href,
  icon,
  tag,
}: {
  title: string;
  description: string;
  href: string;
  icon?: string;
  tag?: string;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-[2rem] border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/10"
    >
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-50 transition group-hover:bg-emerald-50" />
      <div className="relative flex items-start justify-between gap-4">
        <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-2xl shadow-inner transition group-hover:scale-105 group-hover:bg-blue-100">
          {icon ?? title.slice(0, 1)}
        </div>
        {tag && (
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
            {tag}
          </span>
        )}
      </div>
      <h3 className="relative mt-5 text-xl font-extrabold text-slate-950">{title}</h3>
      <p className="relative mt-3 text-sm leading-6 text-slate-600">{description}</p>
      <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-blue-700">
        Află mai mult <span className="transition group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
