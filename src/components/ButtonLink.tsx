import Link from "next/link";
import type { ReactNode } from "react";
export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "whatsapp" | "ghost" | "mint"; arrow?: boolean }) {
  return <Link href={href} className={`button button-${variant}`}>{children}</Link>;
}
