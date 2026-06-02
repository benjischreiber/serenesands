import type { MetadataRoute } from "next";
import { guideLinks } from "@/lib/seo-content";
import { absoluteUrl, properties } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...properties.map((property) => ({
      url: absoluteUrl(`/${property.slug}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...guideLinks.map((guide) => ({
      url: absoluteUrl(guide.href),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
