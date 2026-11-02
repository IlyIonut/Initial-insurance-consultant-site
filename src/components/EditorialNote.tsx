import Link from "next/link";
import { SITE } from "@/lib/site";

export function EditorialNote() {
  return <p className="editorial-note">Conținut revizuit la <time dateTime="2026-10-25">25 octombrie 2026</time>. Informații generale; acoperirea se verifică în lege și în documentele produsului aplicabil. Pentru clarificări: <Link href="/despre#identitate-profesionala">{SITE.consultantName ? `${SITE.consultantName} — identitate și contact` : "identitate profesională și contact"}</Link>.</p>;
}
