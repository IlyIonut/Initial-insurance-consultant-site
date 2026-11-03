"use client";
import { useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
const options = [["/domenii/comert-si-servicii", "Comerț și servicii"], ["/domenii/productie-si-ateliere", "Producție și ateliere"], ["/domenii/it-si-consultanta", "IT și consultanță"], ["/domenii/horeca", "HoReCa"], ["/domenii/cabinete-medicale", "Cabinete medicale"], ["/asigurari-firme/agricole", "Agricultură"]];
export function IndustryFinder() {
  const [industry, setIndustry] = useState("");
  return <div className="industry-finder"><label htmlFor="industry-quick">Cu ce se ocupă afacerea ta?</label><div><select id="industry-quick" value={industry} onChange={e => setIndustry(e.target.value)}><option value="">Alege domeniul de activitate</option>{options.map(([href, label]) => <option key={href} value={href}>{label}</option>)}</select><Link href={industry || "/domenii"} className="finder-button" aria-label="Vezi soluțiile pentru domeniul ales"><Icon name="arrow" size={22} /></Link></div></div>;
}
