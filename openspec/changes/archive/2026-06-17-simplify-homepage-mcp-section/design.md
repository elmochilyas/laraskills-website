## Context

The homepage renders an elaborate `McpProtocolSection` (248 lines) with full tool cards (name, description, input/output schemas, badges), a terminal connection panel, and an agent-request pipeline visualization. This level of detail belongs on a technical reference page, not a landing page where first impressions matter.

Both `/mcp` (public landing) and `/docs/mcp` (technical docs) already exist and contain tool listings. `/mcp` has a hero, read-only explanation, tool cards, and CTA to setup guide. `/docs/mcp` has tool cards with descriptions, read-only principle card, and deterministic retrieval card.

## Goals / Non-Goals

**Goals:**
- Replace the detailed `McpProtocolSection` with a compact, visual `McpSection` that communicates MCP value in 5 seconds
- Move all technical MCP detail (I/O schemas, connection notes, expanded descriptions) into `/docs/mcp`
- Point homepage CTA to `/mcp` (already exists)
- Keep the existing `McpToolCard` component shared between `/mcp` and `/docs/mcp`

**Non-Goals:**
- Redesigning other homepage sections
- Creating a new `/mcp` page (already exists)
- Removing MCP detail from the site entirely
- Changing header/footer navigation
- Changing sitemap or glossary references

## Decisions

1. **New `McpSection` component replaces `McpProtocolSection`**
   - Old: 248 lines, ToolCard sub-component with I/O schemas, pipeline with 4 steps, terminal connection panel, branded grid background
   - New: ~80 lines, Section + PageContainer, eyebrow "MCP LAYER", heading "Local Laravel context for AI coding agents", 3 inline value badges (Read-only / Local retrieval / Deterministic context), simple 4-step flow, CTA button to `/mcp`
   - Rationale: Separates concern — homepage explains "what" and "why", not "how each tool works"

2. **Homepage CTA points to `/mcp` (not `/docs/mcp`)**
   - `/mcp` already exists as a public-facing landing page with hero, tool overview, and "MCP setup guide" CTA
   - This creates a clean funnel: homepage → `/mcp` (public overview) → `/docs/mcp` (technical setup)

3. **`/docs/mcp` enhancement is additive**
   - Existing content (tool names, descriptions, read-only cards) stays as-is
   - New sections added: input/output signatures per tool, connection/status notes, expanded "read-only/local/deterministic" explanation
   - Uses existing `McpToolCard` component; no new shared components needed

4. **Flow diagram replaces pipeline visualization**
   - Old: 4-step vertical pipeline with numbered steps, glow effects, label descriptions
   - New: 4-step horizontal flow: Agent request → Laraskills MCP → Knowledge graph → Context bundle
   - Arrow connectors instead of vertical timeline. Smaller footprint. Fits in a single row on desktop.

5. **Value badges replace tool cards on homepage**
   - Old: 5 full tool cards with name, description, I/O signatures, 2-3 badges each
   - New: 3 compact cards (Read-only / Local retrieval / Deterministic context) with icon, label, 1-line explanation

## Risks / Trade-offs

- **[Risk] Users wanting quick MCP tool reference from homepage now need an extra click** → Mitigation: CTA is prominent and `/mcp` page loads fast; `/mcp` navigation already exists in Header
- **[Risk] Over-simplification loses developer interest** → Mitigation: the 3 value badges and flow diagram are still technically specific enough to communicate the architecture
- **[Risk] Existing `mcp-showcase` spec conflicts** → Mitigation: delta spec clearly documents the change in requirements
