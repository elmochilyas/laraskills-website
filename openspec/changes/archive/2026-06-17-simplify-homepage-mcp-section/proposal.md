## Why

The homepage MCP section (`McpProtocolSection.tsx`) overloads the landing page with fine-grained technical detail: full tool cards with input/output schemas, a terminal connection panel, and a pipeline visualization. This density harms first-impression UX — visitors should grasp the value of Laraskills MCP in seconds, not study tool signatures. All detailed MCP reference information already has a home in `/docs/mcp` and the public `/mcp` page.

## What Changes

- Simplify the homepage MCP section from a full tool registry + pipeline + terminal panel into a compact, visual value section (eyebrow, heading, short paragraph, 3 value cards, flow diagram, CTA to `/mcp`).
- Move all detailed tool documentation (I/O examples, connection notes, full descriptions) into `/docs/mcp`, enhancing the existing page.
- Redirect the homepage MCP CTA to the existing `/mcp` public page.
- Remove the `McpProtocolSection` component; replace with a new simplified `McpSection` component.
- The `McpToolCard` component remains shared between `/mcp` and `/docs/mcp`.

## Capabilities

### New Capabilities
- `mcp-section`: Simplified homepage MCP value section with eyebrow + heading + paragraph + 3 value cards (Read-only, Local retrieval, Deterministic context) + flow diagram + CTA

### Modified Capabilities
- `mcp-showcase`: Replace requirement for "5 tool cards on homepage" with simplified value-oriented section; move tool-card detail requirement to `/docs/mcp`
- `docs-core-pages`: Enhance `/docs/mcp` requirements to include input/output examples, connection/setup notes, and expanded tool descriptions with badges

## Impact

- **Components**: Remove `McpProtocolSection.tsx` (248 lines). Create new `McpSection.tsx` (~80 lines).
- **Pages**: Modify `app/page.tsx` to reference new `McpSection` instead of `McpProtocolSection`. Enhance `app/docs/mcp/page.tsx` with tool I/O details and connection notes.
- **Specs**: Create delta spec for `mcp-showcase` and `docs-core-pages`.
- **No impact** on: public `/mcp` page, header/footer navigation, glossary references, sitemap, or other homepage sections.
