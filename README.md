# Laraskills Website

Standalone official website for [Laraskills](https://github.com/elmochilyas/laraskills) — a Laravel-focused AI coding-agent operating layer and engineering knowledge system.

Built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Build

### Production build (Linux / CI)

```bash
npm run build
```

### Windows fallback

Turbopack is not available on Windows (win32). Use the Webpack-based build instead:

```bash
npm run build:webpack
```

## Lint

```bash
npm run lint
```

## Deploy

### Vercel

The project is ready for Vercel deployment.

1. Push to the `main` branch (Vercel auto-deploys when connected).
2. **(Required)** Set `NEXT_PUBLIC_SITE_URL` in Vercel project settings → Environment Variables.
   - Value: your production domain with protocol, e.g., `https://laraskills.com`
   - This sets canonical URLs, Open Graph, and Twitter Card metadata to the correct domain.
3. Trigger a deployment (or push to `main`).

### Post-deploy verification

After deployment, run through the [launch checklist](./launch-checklist.md) to verify all routes, metadata, and special files.
