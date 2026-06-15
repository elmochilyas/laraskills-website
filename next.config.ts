import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_SITE_URL) {
  console.warn(
    "\n⚠️  WARNING: NEXT_PUBLIC_SITE_URL is not set.\n" +
      "   Set it in your Vercel project settings before deploying to production.\n" +
      "   Example: https://yourdomain.com\n"
  );
}

export default nextConfig;
