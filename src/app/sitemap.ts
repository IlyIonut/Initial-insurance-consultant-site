import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { businessSolutions, industries, solutionHref } from "@/lib/business-content";

// Keep real revision dates rather than refreshing every URL on every build.
const contentRevision = new Date("2026-10-29T00:00:00Z");
const searchLaunchRevision = new Date("2026-11-02T00:00:00Z");
const brandRevision = new Date("2026-11-03T00:00:00Z");
const agricultureRevision = new Date("2026-11-03T00:00:00Z");
const agriculturePaths = new Set(["/asigurari-firme/agricole", "/asigurari-firme", "/domenii", "/ghiduri", "/contact"]);
const unchangedPaths = new Set(["/domenii", "/contact", "/confidentialitate", "/cookies", "/termeni-si-conditii"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/asigurari-firme", "/domenii", "/persoane-fizice", "/ghiduri", "/contact", "/despre",
    "/asigurare-rca", "/asigurare-casco", "/asigurare-locuinta", "/asigurare-calatorie", "/asigurare-sanatate",
    "/asigurare-viata", "/asigurare-raspundere-civila", "/asigurare-accidente", "/confidentialitate", "/cookies", "/termeni-si-conditii",
    ...businessSolutions.map(solution => solutionHref(solution.slug)),
    ...industries.map(industry => `/domenii/${industry.slug}`),
  ];
  return paths.map(path => ({
    url: SITE.url + (path === "/" ? "/" : path),
    lastModified: agriculturePaths.has(path) ? agricultureRevision : path === "/" ? brandRevision : unchangedPaths.has(path) || path.startsWith("/domenii/") ? contentRevision : searchLaunchRevision,
  }));
}
