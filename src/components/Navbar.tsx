"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { SITE } from "@/lib/site";
import { Icon } from "./Icon";
import { Brand } from "./Brand";
const links = [{ href: "/asigurari-firme", label: "Pentru firme" }, { href: "/domenii", label: "Domenii de activitate" }, { href: "/persoane-fizice", label: "Persoane fizice" }, { href: "/ghiduri", label: "Ghiduri utile" }];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    if (open) dialog.current?.showModal();
    else dialog.current?.close();
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 951px)");
    const resize = () => { if (media.matches) setOpen(false); };
    media.addEventListener("change", resize);
    return () => media.removeEventListener("change", resize);
  }, []);
  const active = (href: string) => pathname?.startsWith(href);
  return <><div className="topbar"><div className="shell topbar-inner"><span>Pentru clienți din toată România</span><span>Asigurări pentru firme și persoane fizice</span></div></div>
    <header className="site-header"><div className="shell nav-inner">
      <Link href="/" className="brand" aria-label={`${SITE.name} Business & Personal — pagina principală`}><Brand /></Link>
      <nav className="desktop-nav" aria-label="Navigație principală">{links.map(link => <Link key={link.href} href={link.href} className={active(link.href) ? "active" : ""} aria-current={active(link.href) ? "page" : undefined}>{link.label}</Link>)}</nav>
      <a className="nav-phone" href={`tel:+${SITE.phoneRaw}`} aria-label={`Sună la ${SITE.phoneDisplay}`}>{SITE.phoneDisplay}</a>
      <Link href="/contact" className="button button-primary nav-cta">Cere o ofertă</Link>
      <a className="mobile-call" href={`tel:+${SITE.phoneRaw}`} aria-label={`Sună la ${SITE.phoneDisplay}`}><Icon name="phone" size={20} /></a>
      <button className="menu-toggle" type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="mobile-navigation" aria-label="Deschide meniul"><Icon name="menu" /></button>
    </div></header>
    <dialog ref={dialog} id="mobile-navigation" className="mobile-menu" aria-labelledby="mobile-menu-title" onCancel={() => setOpen(false)} onClose={() => setOpen(false)}>
      <div className="mobile-menu-heading"><h2 id="mobile-menu-title">Meniu {SITE.name}</h2><button type="button" className="menu-close" onClick={() => setOpen(false)} aria-label="Închide meniul"><Icon name="close" /></button></div>
      <nav className="mobile-nav" aria-label="Navigație mobilă">{links.map(link => <Link key={link.href} href={link.href} aria-current={active(link.href) ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}<Link href="/despre" onClick={() => setOpen(false)}>Cum lucrăm</Link><Link href="/contact" className="button button-primary" onClick={() => setOpen(false)}>Cere o ofertă</Link><p>Asigurări pentru afacerea ta, pentru tine și familia ta.</p></nav>
    </dialog>
  </>;
}
