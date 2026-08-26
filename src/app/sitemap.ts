import type { MetadataRoute } from "next";
import { site } from "@/config/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/pl`,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { pl: `${site.url}/pl`, ru: `${site.url}/ru` } },
    },
    {
      url: `${site.url}/ru`,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { pl: `${site.url}/pl`, ru: `${site.url}/ru` } },
    },
    {
      url: `${site.url}/pl/polityka-prywatnosci`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/ru/polityka-prywatnosci`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
