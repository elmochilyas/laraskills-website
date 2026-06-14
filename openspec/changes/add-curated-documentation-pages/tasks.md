## 1. Docs Layout

- [x] 1.1 Create `components/DocsSidebar.tsx` with navigation links and responsive collapse behavior
- [x] 1.2 Create `app/docs/layout.tsx` with sidebar alongside child content
- [x] 1.3 Verify docs layout renders Header and Footer from root layout

## 2. Docs Index Page

- [x] 2.1 Create `app/docs/page.tsx` with Laraskills overview and links to all docs pages

## 3. Docs Content Pages

- [x] 3.1 Create `app/docs/getting-started/page.tsx` with install command and next steps
- [x] 3.2 Create `app/docs/installation/page.tsx` with npm, update, and doctor commands
- [x] 3.3 Create `app/docs/cli/page.tsx` documenting install, retrieve, search, get, validate, doctor
- [x] 3.4 Create `app/docs/mcp/page.tsx` explaining read-only deterministic retrieval and 5 MCP tools
- [x] 3.5 Create `app/docs/opencode-setup/page.tsx` with conceptual guide and MCP config placeholder
- [x] 3.6 Create `app/docs/integrations/page.tsx` with supported coding agents and editors
- [x] 3.7 Create `app/docs/skills/page.tsx` with high-level skills overview and categories

## 4. Glossary Page

- [x] 4.1 Create `app/glossary/page.tsx` with definitions for all 9 Laraskills terms

## 5. Navigation Updates

- [x] 5.1 Update Header to add Glossary (`/glossary`) link
- [x] 5.2 Update Header active-link logic for nested `/docs/*` route highlighting
- [x] 5.3 Update Footer to add Glossary (`/glossary`) link

## 6. Verification

- [x] 6.1 Verify all 10 new routes resolve without 404 errors (build test — confirmed all routes in output)
- [x] 6.2 Verify internal links between docs pages are not broken
- [x] 6.3 Verify mobile responsiveness of docs sidebar
- [x] 6.4 Run lint, build, and fix any issues
- [x] 6.5 Verify existing pages (homepage, research) remain unchanged (confirmed in build output)
