import type { Metadata } from "next";
import { SITE } from "./site";
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const displayTitle = `${title} | ${SITE.name}`;
  return { title:{absolute:displayTitle}, description, alternates:{canonical:path}, openGraph:{title:displayTitle,description,url:SITE.url+path,siteName:SITE.name,type:"website",locale:"ro_RO",images:[{url:`${SITE.url}/og`,width:1200,height:630,alt:`${SITE.name} — asigurări pentru firme și persoane fizice`}]}, twitter:{card:"summary_large_image",title:displayTitle,description,images:[`${SITE.url}/og`]} };
}
