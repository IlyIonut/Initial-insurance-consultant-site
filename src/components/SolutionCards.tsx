import Link from "next/link";
import { businessSolutions, solutionHref, type BusinessSolution } from "@/lib/business-content";
import { Icon } from "./Icon";
export function SolutionCards({ solutions = businessSolutions }: { solutions?: BusinessSolution[] }) {
  return <div className="solutions-grid">{solutions.map((s, i) => <Link href={solutionHref(s.slug)} key={s.slug} className={`solution-card accent-${s.color}`}><div className="solution-top"><span className="icon-tile"><Icon name={s.icon} size={27} /></span><span className="card-number">0{i + 1}</span></div><h3>{s.name}</h3><p>{s.description}</p><span className="card-link">Descoperă protecția <Icon name="arrow" size={19} /></span></Link>)}</div>;
}
