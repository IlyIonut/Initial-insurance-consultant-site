import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata("Cookies și stocarea în browser", "Ce folosește IlyAsig în browser, cum funcționează formularul și cum poți gestiona cookies. Fără analiză de marketing integrată.", "/cookies");
export default function CookiesPage() {
  return <main><section className="page-hero"><div className="shell"><Breadcrumbs items={[{label:"Cookies și stocarea în browser",href:"/cookies"}]}/><h1>Cookies și stocarea în browser.</h1><p className="lead">Informații despre funcționarea site-ului. Versiunea din 25 octombrie 2026.</p></div></section><section className="section"><article className="shell prose">
<h2>Ce folosește aplicația</h2><p>Codul IlyAsig nu instalează cookies de publicitate sau analiză de marketing și nu salvează cererile în localStorage ori sessionStorage. Fonturile și imaginile sunt servite din fișierele site-ului. Nu sunt integrate hărți, clipuri sau instrumente de urmărire de la alte site-uri.</p><p>Câmpurile și identificatorul sunt ținute în memoria paginii pentru completare și reîncercare, nu într-o arhivă permanentă în browser. Browserul poate avea funcții proprii de completare și restaurare, gestionate din setările lui.</p>
<h2>Găzduire</h2><p>Vercel poate aplica mecanisme strict necesare de securitate, distribuire a traficului ori acces. Aplicația nu le folosește pentru reclame. Datele tehnice și jurnalele sunt descrise în <Link href="/confidentialitate">informarea de confidențialitate</Link>.</p>
<h2>Control și schimbări</h2><p>Poți inspecta, șterge și limita cookies din browser. Blocarea mecanismelor necesare poate afecta funcționarea. În această versiune nu există cookies opționale IlyAsig care să necesite panou de acord.</p><p>Dacă se adaugă tehnologii opționale, informarea trebuie actualizată și ele nu trebuie activate înainte de acordul valabil, unde legea îl cere. Descărcarea cererii produce un fișier numai la acțiunea ta; emailul folosește aplicația aleasă de tine.</p><p>Vezi <Link href="/termeni-si-conditii">termenii și condițiile</Link>.</p>
</article></section></main>;
}
