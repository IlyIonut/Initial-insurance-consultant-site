"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { Icon } from "./Icon";
import { Brand } from "./Brand";
const links = [{ href: "/asigurari-firme", label: "Pentru firme" }, { href: "/domenii", label: "Domenii de activitate" }, { href: "/persoane-fizice", label: "Persoane fizice" }, { href: "/ghiduri", label: "Ghiduri utile" }];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  useEffect(() => { function key(event: KeyboardEvent) { if (event.key === "Escape") setOpen(false); } window.addEventListener("keydown", key); return () => window.removeEventListener("keydown", key); }, []);
  return <><div className="topbar"><div className="shell topbar-inner"><span><span className="status-dot" />Cluj & Bihor <span className="topbar-separator">/</span> Disponibil și online</span><Link href="/contact?motiv=analiza">Ai deja polițe? Le analizăm împreună <span aria-hidden="true">↗</span></Link></div></div>
    <header className="site-header"><div className="shell nav-inner"><Link href="/" className="brand" aria-label={`${SITE.name} — pagina principală`} onClick={() => setOpen(false)}><Brand /></Link>
      <nav className="desktop-nav" aria-label="Navigație principală">{links.map(l => <Link key={l.href} href={l.href} className={pathname?.startsWith(l.href) ? "active" : ""} aria-current={pathname?.startsWith(l.href) ? "page" : undefined}>{l.label}</Link>)}</nav>
      <Link href="/contact" className="button button-primary nav-cta">Hai să discutăm <Icon name="diagonal" size={16} /></Link><button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Închide meniul" : "Deschide meniul"}><Icon name={open ? "close" : "menu"} /></button></div>
    {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Navigație mobilă">{links.map(l => <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}<Icon name="arrow" size={20} /></Link>)}<Link href="/despre" onClick={() => setOpen(false)}>Cum lucrăm<Icon name="arrow" size={20} /></Link><Link href="/contact" className="button button-primary" onClick={() => setOpen(false)}>Hai să discutăm <Icon name="diagonal" size={18} /></Link><p>Asigurări pentru afacerea ta, pentru tine și familia ta.</p></nav>}</header></>;
}
