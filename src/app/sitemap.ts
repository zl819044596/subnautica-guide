import { MetadataRoute } from "next";
import { creatures } from "@/data/creatures";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://subnautica.getfitai.io";

  const routes = [
    "",
    "/map",
    "/creatures",
    "/crafting",
    "/ask-ai",
  ];

  const creaturePages = creatures.map((c) => `/creatures/${c.slug}`);

  const allPages = [...routes, ...creaturePages];

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "daily" : "weekly",
    priority: page === "" ? 1.0 : 0.8,
  }));
}
