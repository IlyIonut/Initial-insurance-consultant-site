"use client";
import { useState } from "react";
import Link from "next/link";
import { Icon } from "./Icon";
const options = [["comert-si-servicii", "Comerț și servicii"], ["productie-si-ateliere", "Producție și ateliere"], ["it-si-consultanta", "IT și consultanță"], ["horeca", "HoReCa"], ["cabinete-medicale", "Cabinete medicale"]];
export function IndustryFinder() {
  const [industry, setIndustry] = useState("");
  return <div className="industry-finder"><label htmlFor="industry-quick">Cu ce se ocupă afacerea ta?</label><div><select id="industry-quick" value={industry} onChange={e => setIndustry(e.target.value)}><option value="">Alege domeniul de activitate</option>{options.map(([slug, label]) => <option key={slug} value={slug}>{label}</option>)}</select><Link href={industry ? `/domenii/${industry}` : "/domenii"} className="finder-button" aria-label="Vezi soluțiile pentru domeniul ales"><Icon name="arrow" size={22} /></Link></div></div>;
}
