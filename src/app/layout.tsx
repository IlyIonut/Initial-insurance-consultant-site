import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SITE } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `Asigurări pentru firme și IMM-uri în Cluj și Bihor | ${SITE.name}`, template: `%s | ${SITE.name}` },
  description: SITE.description, alternates: { canonical: "/" },
  openGraph: { title: `Asigurări care țin pasul cu afacerea ta | ${SITE.name}`, description: SITE.description, url: SITE.url, siteName: SITE.name, locale: "ro_RO", type: "website", images: [{ url: "/images/social-cover.png", width: 1200, height: 630, alt: `${SITE.name} — Business & personal, Cluj și Bihor` }] },
  twitter: { card: "summary_large_image", title: `Asigurări pentru firme și IMM-uri | ${SITE.name}`, description: SITE.description, images: ["/images/social-cover.png"] },
  robots: { index: process.env.VERCEL_ENV !== "preview", follow: true }, icons: { icon: "/icon.svg?v=ilyasig", apple: "/apple-touch-icon.png" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#164cf5" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "InsuranceAgency", "@id": `${SITE.url}/#organization`, name: SITE.name, url: SITE.url, logo: { "@type": "ImageObject", url: `${SITE.url}/brand/ilyasig-logo.svg`, width: 1352, height: 445 }, description: SITE.description, ...(SITE.phoneRaw ? { telephone: `+${SITE.phoneRaw}` } : {}), ...(SITE.email ? { email: SITE.email } : {}), areaServed: [{ "@type": "AdministrativeArea", name: "Cluj, România" }, { "@type": "AdministrativeArea", name: "Bihor, România" }], knowsAbout: ["Asigurări pentru IMM-uri", "Asigurări de bunuri", "Răspundere civilă", "Flote auto", "Asigurări de sănătate", "Asigurări pentru persoane fizice"] };
  return <html lang="ro"><body><a className="skip-link" href="#continut">Sari la conținut</a><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><Navbar /><div id="continut" tabIndex={-1}>{children}</div><Footer /></body></html>;
}
