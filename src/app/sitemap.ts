import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { businessSolutions, industries, solutionHref } from "@/lib/business-content";

// Keep real revision dates rather than refreshing every URL on every build.
const contentRevision = new Date("2026-10-29T00:00:00Z");
const searchLaunchRevision = new Date("2026-11-02T00:00:00Z");
const agricultureRevision = new Date("2026-11-03T00:00:00Z");
const localSearchRevision = new Date("2026-11-12T00:00:00Z");
const localSearchPaths = new Set([
  "/", "/zone-deservite", "/asigurare-rca", "/asigurare-locuinta", "/asigurare-calatorie", "/asigurari-firme", "/asigurari-firme/agricole", "/persoane-fizice",
]);
const agriculturePaths = new Set(["/domenii", "/ghiduri", "/contact"]);
const unchangedPaths = new Set(["/confidentialitate", "/cookies", "/termeni-si-conditii"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/zone-deservite", "/asigurari-firme", "/domenii", "/persoane-fizice", "/ghiduri", "/contact", "/despre",
    "/asigurare-rca", "/asigurare-casco", "/asigurare-locuinta", "/asigurare-calatorie", "/asigurare-sanatate",
    "/asigurare-viata", "/asigurare-raspundere-civila", "/asigurare-accidente", "/confidentialitate", "/cookies", "/termeni-si-conditii",
    ...businessSolutions.map(solution => solutionHref(solution.slug)),
    ...industries.map(industry => `/domenii/${industry.slug}`),
  ];
  return paths.map(path => ({
    url: SITE.url + (path === "/" ? "/" : path),
    lastModified: localSearchPaths.has(path) ? localSearchRevision
      : agriculturePaths.has(path) ? agricultureRevision
      : unchangedPaths.has(path) || path.startsWith("/domenii/") ? contentRevision : searchLaunchRevision,
  }));
}
