import { SITE } from "@/lib/site";

export function WhatsAppButton({ text = "Bună! Doresc o ofertă de asigurare." }: { text?: string }) {
  if (!SITE.phoneRaw) return null;
  const href = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 hidden rounded-full bg-emerald-600 px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-emerald-700/25 transition hover:-translate-y-0.5 hover:bg-emerald-700 md:inline-flex"
    >
      WhatsApp
    </a>
  );
}
