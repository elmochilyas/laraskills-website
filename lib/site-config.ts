/* TODO: Set NEXT_PUBLIC_SITE_URL in Vercel environment variables before production launch */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const siteConfig = {
  name: "Laraskills",
  description:
    "Laravel-focused AI coding-agent operating layer and engineering knowledge system.",
  url: siteUrl,
  ogImage: `${siteUrl}/og-image.png`,
} as const;

export function absoluteUrl(path: string) {
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
