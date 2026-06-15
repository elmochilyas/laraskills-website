## Why

The Laraskills website has no documented deployment configuration or environment setup for Vercel. The README states "Vercel-ready" but there is no `vercel.json`, no documented environment variables, no deployment checklist, and no guidance for what to verify post-deploy. This creates risk of silent failures (missing env vars, incorrect build settings, broken routes) when deploying to production.

## What Changes

- Add `vercel.json` with framework-preset configuration and build overrides
- Document `NEXT_PUBLIC_SITE_URL` as the required environment variable
- Update README with a dedicated deployment section (Vercel env setup, local dev commands, production build, post-deploy checklist)
- Add production-canonical metadata to ensure correct `og:url` and canonical links once `NEXT_PUBLIC_SITE_URL` is set
- Create a launch checklist document to verify all routes, metadata, and special files post-deployment

## Capabilities

### New Capabilities
- `vercel-deployment`: Vercel deployment configuration, environment variable documentation, and production build setup

### Modified Capabilities
<!-- No existing capability specs require requirement-level changes.
     The build process and deployment mechanism are ops-layer concerns,
     not changes to existing feature requirements. -->

## Impact

- **Files added**: `vercel.json`, `launch-checklist.md`
- **Files modified**: `next.config.ts` (add `NEXT_PUBLIC_SITE_URL` usage), `README.md` (expand deployment section), `app/layout.tsx` (canonical URL from env var)
- **Dependencies**: None new
- **Systems**: Vercel (production deployment); no local dev workflow changes
