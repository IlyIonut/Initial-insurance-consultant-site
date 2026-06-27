import { SITE } from "@/lib/site";

export function WhatsAppButton({ text = "Bună! Doresc o ofertă de asigurare." }: { text?: string }) {
  const href = `https://wa.me/${SITE.phoneRaw}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-700"
    >
      WhatsApp
    </a>
  );
}
