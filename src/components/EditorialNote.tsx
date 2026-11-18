import Link from "next/link";
import { SITE } from "@/lib/site";

export function EditorialNote() {
  return <p className="editorial-note">Texte actualizate la <time dateTime="2026-11-18">18 noiembrie 2026</time>. Pentru situația ta, verificăm oferta, condițiile poliței și regulile legale aplicabile. Ai întrebări? <Link href="/despre#identitate-profesionala">{SITE.consultantName ? `${SITE.consultantName} — identitate și contact` : "identitate profesională și contact"}</Link>.</p>;
}
