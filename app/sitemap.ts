import type { MetadataRoute } from "next";

/* TODO: Update dates/tuning before production launch */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const routes = [
    { path: "/", changefreq: "monthly" as const, priority: 1.0 },
    { path: "/docs", changefreq: "weekly" as const, priority: 0.9 },
    { path: "/docs/getting-started", changefreq: "monthly" as const, priority: 0.8 },
    { path: "/docs/installation", changefreq: "monthly" as const, priority: 0.8 },
    { path: "/docs/cli", changefreq: "monthly" as const, priority: 0.7 },
    { path: "/docs/mcp", changefreq: "monthly" as const, priority: 0.7 },
    { path: "/docs/opencode-setup", changefreq: "monthly" as const, priority: 0.7 },
    { path: "/docs/integrations", changefreq: "monthly" as const, priority: 0.7 },
    { path: "/docs/skills", changefreq: "monthly" as const, priority: 0.7 },
    { path: "/glossary", changefreq: "monthly" as const, priority: 0.6 },
    { path: "/research", changefreq: "monthly" as const, priority: 0.6 },
  ];

  return routes.map(({ path, changefreq, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: changefreq,
    priority,
  }));
}
