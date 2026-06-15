## Context

The Laraskills website is a Next.js 16 App Router project with 14 static routes. It currently has no Vercel deployment configuration, no environment variable documentation, and no production build verification process. The project builds successfully with `--webpack` on Windows (Turbopack unsupported on win32), but has never been tested on Vercel's Linux build environment where Turbopack is available.

The README states "Vercel-ready" without substantiation. No `.env` files exist. `next.config.ts` is empty. There is no `vercel.json`.

## Goals / Non-Goals

**Goals:**
- Make the project deployable on Vercel with one push
- Document all required environment variables and their purpose
- Provide a launch checklist for post-deploy verification
- Ensure canonical/metadata URLs respect the production domain once set
- Keep the existing README local-dev-to-production workflow clear

**Non-Goals:**
- Redesigning the website UI or layout
- Adding analytics, tracking, or monitoring
- Creating new content pages or modifying existing copy
- Changing brand identity from "Laraskills"
- Adding ECC or old branding references
- Automatic deployment (CI/CD remains out of scope)
- Fixing visual polish of integrations or research sections

## Decisions

**1. Use `vercel.json` with explicit framework config instead of relying on auto-detection**
- Rationale: Auto-detection works but explicit config documents intent and prevents issues if Next.js detection heuristics change. The config will set `framework: "nextjs"` and leave all other defaults (no custom overrides needed).

**2. Expose `NEXT_PUBLIC_SITE_URL` as the single required env var**
- Rationale: Next.js `NEXT_PUBLIC_*` vars are inlined at build time and available on both server and client. This is the standard approach for production URL configuration. Alternatives considered: hard-coding the domain (rejected — prevents reuse across preview/production deployments). Using `process.env.VERCEL_URL` (rejected — Vercel's generated URL is not the canonical production domain).

**3. Add `metadataBase` to `layout.tsx` using `NEXT_PUBLIC_SITE_URL`**
- Rationale: Next.js `metadataBase` automatically resolves all relative metadata URLs to absolute. Setting it from the env var means `og:url`, canonical links, and other URL-based metadata are correct without per-page changes. This is the idiomatic Next.js approach rather than manual URL construction in each page.

**4. Preserve `build:webpack` as a documented local fallback**
- Rationale: Turbopack is not available on Windows (the developer's primary platform). The `--webpack` flag works reliably. On Vercel (Linux), the default Turbopack build will be used. Documenting both avoids confusion when `npm run build` fails locally.

**5. Create `launch-checklist.md` as a living doc**
- Rationale: A checklist decouples verification from CI. It documents exactly what to check post-deploy: route reachability, metadata correctness, special files (`/sitemap.xml`, `/robots.txt`, `/llms.txt`). This can become a smoke-test script later.

## Risks / Trade-offs

**Turbopack failure on Windows** → Mitigation: Document `build:webpack` as the local fallback. The actual Vercel production build uses Linux where Turbopack works natively.

**Missing env var at build time** → Mitigation: `next.config.ts` will validate that `NEXT_PUBLIC_SITE_URL` is set during production build and fail early with a clear message. Local dev continues without it (optional during development).

**Canonical URLs pointing to wrong domain if env var misconfigured** → Mitigation: The launch checklist includes explicit verification of canonical URLs on every page.

**No staging/preview environment configured** → Trade-off: Not in scope. The config and docs assume a single production deployment. Preview deployments will inherit `NEXT_PUBLIC_SITE_URL` from the production env unless overridden per-preview, which is a Vercel project setting outside this change.
