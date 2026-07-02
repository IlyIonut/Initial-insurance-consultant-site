import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <p className="text-lg font-bold">{SITE.name}</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">{SITE.description}</p>
        </div>
        <div>
          <p className="font-semibold">Persoane fizice</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            <Link href="/asigurare-rca" className="hover:text-white">Asigurare RCA</Link>
            <Link href="/asigurare-casco" className="hover:text-white">Asigurare CASCO</Link>
            <Link href="/asigurare-locuinta" className="hover:text-white">Asigurare locuință</Link>
            <Link href="/asigurare-calatorie" className="hover:text-white">Asigurare călătorie</Link>
            <Link href="/asigurare-sanatate" className="hover:text-white">Asigurare sănătate</Link>
            <Link href="/asigurare-viata" className="hover:text-white">Asigurare viață</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold">Ghiduri și firme</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            <Link href="/ghid-rca" className="hover:text-white">Ghid RCA</Link>
            <Link href="/asigurari-firme" className="hover:text-white">Asigurări firme</Link>
            <Link href="/asigurare-raspundere-civila" className="hover:text-white">Răspundere civilă</Link>
            <Link href="/asigurare-accidente" className="hover:text-white">Accidente</Link>
            <Link href="/confidentialitate" className="hover:text-white">Confidențialitate</Link>
            <Link href="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            <a href={`tel:${SITE.phoneRaw}`} className="hover:text-white">{SITE.phoneDisplay}</a>
            <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
            <p>{SITE.company}</p>
            <Link href="/contact" className="hover:text-white">Cere ofertă</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-5 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {SITE.name}. Informațiile de pe site au caracter general și nu înlocuiesc condițiile contractuale ale asigurătorilor.
      </div>
    </footer>
  );
}
