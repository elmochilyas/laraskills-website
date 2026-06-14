## 1. Root Layout Metadata

- [x] 1.1 Add `metadataBase` to root layout pointing to production URL
- [x] 1.2 Add `twitter:card` and `twitter:site` to root layout metadata
- [x] 1.3 Add `robots` metadata to root layout (index, follow)

## 2. Per-Page Metadata

- [x] 2.1 Root layout default serves as homepage metadata (page is `"use client"` — cannot export static metadata)
- [x] 2.2 Add `metadata` export to `app/docs/page.tsx` with docs overview title, description, OG, Twitter
- [x] 2.3 Add `metadata` export to `app/docs/getting-started/page.tsx`
- [x] 2.4 Add `metadata` export to `app/docs/installation/page.tsx`
- [x] 2.5 Add `metadata` export to `app/docs/cli/page.tsx`
- [x] 2.6 Add `metadata` export to `app/docs/mcp/page.tsx`
- [x] 2.7 Add `metadata` export to `app/docs/opencode-setup/page.tsx`
- [x] 2.8 Add `metadata` export to `app/docs/integrations/page.tsx`
- [x] 2.9 Add `metadata` export to `app/docs/skills/page.tsx`
- [x] 2.10 Add `metadata` export to `app/glossary/page.tsx`
- [x] 2.11 Add `metadata` export to `app/research/page.tsx`

## 3. AI-Discovery Files

- [x] 3.1 Create `app/sitemap.ts` with all public page routes and proper `lastmod`/`changefreq`
- [x] 3.2 Create `app/robots.ts` allowing all crawlers with sitemap reference
- [x] 3.3 Create `public/llms.txt` with site summary and key page URLs (Laraskills branding only)
- [x] 3.4 Create `public/humans.txt` with project title and attribution

## 4. JSON-LD Structured Data

- [x] 4.1 Add `WebSite` JSON-LD `<script>` to homepage
- [x] 4.2 Add `WebPage` JSON-LD `<script>` to research page
- [x] 4.3 Add `WebPage` JSON-LD `<script>` to glossary page

## 5. Verification

- [x] 5.1 Run `npm run build` and verify no metadata-related errors
- [x] 5.2 Verify `/sitemap.xml` appears in build route output
- [x] 5.3 Verify `/robots.txt` appears in build route output
- [x] 5.4 Verify `public/llms.txt` and `public/humans.txt` exist and are accessible
- [x] 5.5 Build generates all pages without metadata errors (dev tools check deferred to runtime)
