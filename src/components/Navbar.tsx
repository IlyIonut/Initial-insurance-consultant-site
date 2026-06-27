import Link from "next/link";
import { SITE } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";

const links = [
  { href: "/asigurare-rca", label: "RCA" },
  { href: "/asigurare-casco", label: "CASCO" },
  { href: "/asigurare-locuinta", label: "Locuință" },
  { href: "/blog/ce-acte-rca", label: "Ghiduri" },
  { href: "/#asistent-ai", label: "Asistent AI" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-bold text-slate-950">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-950 text-white">A</span>
          <span className="leading-tight">{SITE.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 hover:text-slate-950">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/contact">Cere ofertă</ButtonLink>
        </div>

        <details className="group relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm [&::-webkit-details-marker]:hidden">
            Meniu
            <span className="flex h-5 w-5 flex-col justify-center gap-1">
              <span className="block h-0.5 w-5 rounded-full bg-slate-800"></span>
              <span className="block h-0.5 w-5 rounded-full bg-slate-800"></span>
              <span className="block h-0.5 w-5 rounded-full bg-slate-800"></span>
            </span>
          </summary>

          <div className="absolute right-0 mt-3 w-64 rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">
            <nav className="grid gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-2xl bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-slate-800"
              >
                Cere ofertă
              </Link>
              <Link
                href={`https://wa.me/${SITE.phoneRaw}`}
                className="rounded-2xl border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700 hover:bg-slate-100"
              >
                WhatsApp
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
