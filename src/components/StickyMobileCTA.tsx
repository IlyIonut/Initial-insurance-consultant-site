import Link from "next/link";
import { SITE } from "@/lib/site";

export function StickyMobileCTA() {
  if (!SITE.phoneRaw) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-blue-100 bg-white/95 px-3 py-2 shadow-2xl backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-2 text-xs font-extrabold">
        <a href={`tel:${SITE.phoneRaw}`} className="rounded-2xl bg-blue-50 px-3 py-3 text-center text-blue-800">
          Sună
        </a>
        <a href={`https://wa.me/${SITE.phoneRaw}`} className="rounded-2xl bg-emerald-600 px-3 py-3 text-center text-white">
          WhatsApp
        </a>
        <Link href="/contact" className="rounded-2xl bg-blue-700 px-3 py-3 text-center text-white">
          Ofertă
        </Link>
      </div>
    </div>
  );
}
