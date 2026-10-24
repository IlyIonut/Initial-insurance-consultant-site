import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { businessSolutions, industries, solutionHref } from "@/lib/business-content";
import { guides } from "@/lib/guides";
export default function sitemap():MetadataRoute.Sitemap {
 const paths=["/","/asigurari-firme","/domenii","/persoane-fizice","/ghiduri","/contact","/despre","/asigurare-rca","/asigurare-casco","/asigurare-locuinta","/asigurare-calatorie","/asigurare-sanatate","/asigurare-viata","/asigurare-raspundere-civila","/asigurare-accidente","/ghid-rca","/ghid-rca/ce-acopera-rca","/ghid-rca/cum-cumperi-rca","/ghid-rca/bonus-malus","/ghid-rca/accident-si-daune","/blog/ce-acte-rca","/confidentialitate","/cookies","/termeni-si-conditii",...businessSolutions.map(s=>solutionHref(s.slug)),...industries.map(x=>`/domenii/${x.slug}`),...guides.map(g=>`/ghiduri/${g.slug}`)];
 return paths.map(path=>({url:SITE.url+(path==="/"?"/":path),lastModified:new Date("2026-10-25T00:00:00Z"),changeFrequency:path==="/"?"monthly":"yearly",priority:path==="/"?1:path==="/asigurari-firme"?.9:path.startsWith("/asigurari-firme/")?.8:.6}));
}
