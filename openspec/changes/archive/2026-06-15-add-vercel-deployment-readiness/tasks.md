## 1. Vercel Configuration

- [x] 1.1 Create `vercel.json` at project root with `{ "framework": "nextjs" }`
- [x] 1.2 Update `next.config.ts` to add env var validation for `NEXT_PUBLIC_SITE_URL` in production builds

## 2. Environment Variable Wiring

- [x] 2.1 Set `metadataBase` in root `app/layout.tsx` using `NEXT_PUBLIC_SITE_URL` when available, falling back to `undefined` in dev
- [x] 2.2 Verify all Open Graph and canonical URLs resolve correctly through `metadataBase`

## 3. Documentation

- [x] 3.1 Expand README deployment section with: local dev command, production build command, Windows Webpack fallback note, Vercel env setup (`NEXT_PUBLIC_SITE_URL`), and reference to launch checklist
- [x] 3.2 Create `launch-checklist.md` at project root with post-deploy verification items for all routes, special files, and metadata

## 4. Verification

- [x] 4.1 Run `npm run build:webpack` locally to confirm the project builds without errors
- [x] 4.2 Run `npm run lint` to confirm no linting violations are introduced
- [x] 4.3 Review all created/modified files for correctness before finalizing
