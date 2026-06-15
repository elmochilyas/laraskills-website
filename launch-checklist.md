# Launch Checklist

Run through these checks after deploying to Vercel production.

## Routes

- [ ] **Homepage** (`/`) — loads without errors, branding is correct ("Laraskills")
- [ ] **Docs index** (`/docs`) — loads, sidebar navigation works
- [ ] **Docs: CLI** (`/docs/cli`) — loads
- [ ] **Docs: Getting Started** (`/docs/getting-started`) — loads
- [ ] **Docs: Installation** (`/docs/installation`) — loads
- [ ] **Docs: Integrations** (`/docs/integrations`) — loads
- [ ] **Docs: MCP** (`/docs/mcp`) — loads
- [ ] **Docs: OpenCode Setup** (`/docs/opencode-setup`) — loads
- [ ] **Docs: Skills** (`/docs/skills`) — loads
- [ ] **Glossary** (`/glossary`) — loads
- [ ] **Research** (`/research`) — loads

## Special Files

- [ ] **Sitemap** (`/sitemap.xml`) — valid XML, lists all 14 routes
- [ ] **Robots** (`/robots.txt`) — allows crawling, points to sitemap
- [ ] **LLMs** (`/llms.txt`) — exists and is accessible

## Metadata

- [ ] **Canonical URLs** — every page has `<link rel="canonical">` pointing to `https://yourdomain.com/...`
- [ ] **Open Graph `og:url`** — every page has `og:url` with the production domain
- [ ] **Page titles** — every page has a unique, descriptive `<title>`

## Environment

- [ ] `NEXT_PUBLIC_SITE_URL` is set in Vercel project settings
- [ ] `NEXT_PUBLIC_SITE_URL` matches the final production domain (with protocol, no trailing slash)

---

*Remove or update the placeholder `https://yourdomain.com` with the actual production URL once deployed.*
