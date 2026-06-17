## 1. Create simplified McpSection component

- [x] 1.1 Create `components/McpSection.tsx` with Section + PageContainer, eyebrow "MCP LAYER", heading "Local Laravel context for AI coding agents", and 2-line paragraph
- [x] 1.2 Add 3 compact value cards (Read-only / Local retrieval / Deterministic context) with icons and one-line explanations
- [x] 1.3 Add 4-step horizontal flow diagram: Agent request → Laraskills MCP → Knowledge graph → Context bundle
- [x] 1.4 Add CTA button "Explore MCP docs" linking to `/mcp`
- [x] 1.5 Ensure responsive layout: horizontal row on desktop, stacked on mobile

## 2. Remove old McpProtocolSection

- [x] 2.1 Remove `<McpProtocolSection />` import and usage from `app/page.tsx`
- [x] 2.2 Delete `components/McpProtocolSection.tsx`
- [x] 2.3 Insert `<McpSection />` at the same position in `app/page.tsx`
- [x] 2.4 Verify no remaining references to `McpProtocolSection` anywhere in the codebase

## 3. Enhance /docs/mcp page with tool I/O details

- [x] 3.1 Add input/output signatures to the existing tool data array in `app/docs/mcp/page.tsx`
- [x] 3.2 Add READ-ONLY, LOCAL, DETERMINISTIC badge display per tool (using existing badge pattern)
- [x] 3.3 Add connection/setup notes section explaining local transport, read-only mode, and 5 exposed tools
- [x] 3.4 Update `McpToolCard` component to accept optional I/O and badge props

## 4. Verify and clean up

- [x] 4.1 Run `npm run build` to verify no broken imports or type errors
- [x] 4.2 Manually verify homepage `/` renders simplified MCP section correctly
- [x] 4.3 Manually verify `/docs/mcp` shows enhanced tool details
- [x] 4.4 Manually verify `/mcp` page is unchanged and homepage CTA links to it correctly
- [x] 4.5 Verify responsive layout at desktop, tablet, and mobile viewport widths
