import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";
export function ButtonLink({ href, children, variant = "primary", arrow = false }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "whatsapp" | "ghost" | "mint"; arrow?: boolean }) {
  return <Link href={href} className={`button button-${variant}`}>{children}{arrow && <Icon name="diagonal" size={17} />}</Link>;
}
