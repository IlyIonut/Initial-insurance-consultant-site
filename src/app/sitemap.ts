import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/asigurare-rca",
    "/asigurare-casco",
    "/asigurare-locuinta",
    "/asigurare-calatorie",
    "/asigurare-sanatate",
    "/asigurare-viata",
    "/asigurari-firme",
    "/asigurare-raspundere-civila",
    "/asigurare-accidente",
    "/ghid-rca",
    "/ghid-rca/ce-acopera-rca",
    "/ghid-rca/cum-cumperi-rca",
    "/ghid-rca/bonus-malus",
    "/ghid-rca/accident-si-daune",
    "/contact",
    "/blog/ce-acte-rca",
    "/confidentialitate",
    "/cookies",
  ];

  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes("ghid") || route.includes("blog") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route.includes("asigurare") || route.includes("asigurari") ? 0.9 : 0.8,
  }));
}
