import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/asigurare-rca", "/asigurare-casco", "/asigurare-locuinta", "/contact", "/blog/ce-acte-rca", "/confidentialitate", "/cookies"];

  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route.includes("blog") ? "monthly" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
