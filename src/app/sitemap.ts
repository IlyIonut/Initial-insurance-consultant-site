import type { MetadataRoute } from "next";
import { insuranceTypes, SITE } from "@/lib/site";
import { businessSolutions, industries, solutionHref } from "@/lib/business-content";

// Keep real revision dates rather than refreshing every URL on every build.
const contentRevision = new Date("2026-10-29T00:00:00Z");
const searchLaunchRevision = new Date("2026-11-02T00:00:00Z");
const searchRevision = new Date("2026-11-13T00:00:00Z");
const productPaths = [
  ...insuranceTypes.map(product => product.href),
  ...businessSolutions.map(solution => solutionHref(solution.slug)),
];
const searchPaths = new Set([
  "/", "/zone-deservite", "/asigurari-firme", "/persoane-fizice", "/domenii", "/contact", "/ghiduri",
  ...productPaths,
]);
const unchangedPaths = new Set(["/confidentialitate", "/cookies", "/termeni-si-conditii"]);

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/", "/zone-deservite", "/asigurari-firme", "/domenii", "/persoane-fizice", "/ghiduri", "/contact", "/despre",
    ...productPaths, "/confidentialitate", "/cookies", "/termeni-si-conditii",
    ...industries.map(industry => `/domenii/${industry.slug}`),
  ];
  return paths.map(path => ({
    url: SITE.url + (path === "/" ? "/" : path),
    lastModified: searchPaths.has(path) || path.startsWith("/domenii/") ? searchRevision
      : unchangedPaths.has(path) ? contentRevision : searchLaunchRevision,
  }));
}
