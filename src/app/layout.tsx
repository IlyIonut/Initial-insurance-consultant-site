import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SITE } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} | Asigurări pentru firme și persoane fizice`, template: `%s | ${SITE.name}` },
  description: SITE.description, alternates: { canonical: "/" },
  openGraph: { title: `${SITE.name} | Asigurări pentru firme și persoane fizice`, description: SITE.description, url: SITE.url, siteName: SITE.name, locale: "ro_RO", type: "website", images: [{ url: "/og", width: 1200, height: 630, alt: `${SITE.name} — Asigurări pentru firme și persoane fizice din România` }] },
  twitter: { card: "summary_large_image", title: `${SITE.name} | Asigurări pentru firme și persoane fizice`, description: SITE.description, images: ["/og"] },
  robots: { index: process.env.VERCEL_ENV !== "preview", follow: true },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "16x16 32x32 48x48 64x64" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#164cf5" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: `${SITE.url}/`,
        ...(SITE.operatorName ? { legalName: SITE.operatorName } : {}),
        ...(SITE.registration ? { identifier: { "@type": "PropertyValue", name: "Înregistrare profesională", value: SITE.registration } } : {}),
        logo: { "@type": "ImageObject", url: `${SITE.url}/brand/ilyasig-symbol-512.png`, width: 512, height: 512 },
        description: SITE.description,
        ...(SITE.phoneRaw ? { telephone: `+${SITE.phoneRaw}` } : {}),
        email: SITE.email,
        areaServed: [{ "@type": "Country", name: "România" }, ...SITE.seoAreas.map(name => ({ "@type": "AdministrativeArea", name: `${name}, România` }))],
        knowsAbout: ["Asigurări pentru IMM-uri", "Asigurări de bunuri", "Răspundere civilă", "Flote auto", "Asigurări de sănătate", "Asigurări pentru persoane fizice"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        name: SITE.name,
        url: `${SITE.url}/`,
        inLanguage: "ro-RO",
        publisher: { "@id": `${SITE.url}/#organization` },
      },
    ],
  };
  return <html lang="ro"><body><a className="skip-link" href="#continut">Sari la conținut</a><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /><Navbar /><div id="continut" tabIndex={-1}>{children}</div><Footer /></body></html>;
}
