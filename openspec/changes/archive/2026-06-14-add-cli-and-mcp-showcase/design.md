## Context

The homepage currently has five sections (hero, metrics, comparison, architecture, workflow) that explain Laraskills conceptually. To prove it's a practical developer tool, we need to surface real CLI workflows and MCP integration surfaces directly on the homepage.

Current state:
- Hero section has a single terminal card showing `npx laraskills@beta install`.
- No dedicated CLI showcase.
- Architecture "Retrieval layer" card mentions MCP tools but doesn't detail them.
- All sections use the established pattern: `Section > PageContainer > heading/subtitle > responsive grid`.

Design constraints:
- Reuse existing foundation components (Section, PageContainer, Card, Button).
- Premium dark developer-tool aesthetic (already established).
- Mobile responsive.
- No external UI libraries.
- No heavy animation.
- Keep public branding as "Laraskills" (not "Ecc" or other legacy names).

## Goals / Non-Goals

**Goals:**
- Add a CLI showcase section showing 6 real `npx laraskills` commands in terminal-style cards.
- Add an MCP tools showcase section with cards describing 5 read-only tools.
- Both sections follow the existing homepage section pattern and design system.
- Each CLI command is independently copyable.
- MCP tools section emphasizes read-only, deterministic, local retrieval.

**Non-Goals:**
- Not creating interactive terminals (static display only).
- Not adding integrations/research sections.
- Not creating docs pages.
- Not adding SEO/GEO files.
- Not adding fake metrics or testimonials.
- Not modifying hero, metrics, comparison, architecture, or workflow sections.
- Not renaming MCP tool names — keep real names even if they use legacy `ecc` naming.

## Decisions

### 1. New components vs inline markup
**Decision:** Create two new reusable components — `CliCommandCard` and `McpToolCard` — rather than inlining all markup.

**Rationale:**
- Keeps `page.tsx` manageable (already 200+ lines).
- Components are independently testable.
- Follows the existing pattern (MetricsCard, ArchitectureLayerCard, WorkflowStep are all discrete components).
- If CLI commands or MCP tools data is later externalized to JSON, the component API stays stable.

**Alternatives considered:**
- Inline all markup in `page.tsx` — simpler for a one-off but violates existing component pattern.
- Single generic `SectionCard` with props — too generic; CLI and MCP cards have distinct visual needs (terminal vs description card).

### 2. Data source for CLI commands and MCP tools
**Decision:** Use inline constant arrays in `page.tsx` (same pattern as comparisonBefore, comparisonAfter, architectureLayers, workflowSteps).

**Rationale:**
- Consistent with existing homepage data patterns.
- Low complexity — no JSON file to maintain for what is essentially presentation content.
- If the command list grows or needs localization, data can be moved to a JSON file later without component changes.

**Alternatives considered:**
- JSON data file (like `data/homepage-metrics.json`) — more flexible but adds indirection for a small, stable dataset.
- CMS/data layer — overkill for static marketing content.

### 3. Terminal card visual style
**Decision:** Each CLI command gets its own `CliCommandCard` with:
- Terminal window chrome (traffic light dots) at the top.
- Prompt prefix (`$` in brand-green).
- Command text in monospace.
- Individual copy button.
- Syntax-highlighted color tokens (commands in one color, flags in another, args in a third).

**Rationale:**
- Matches the existing hero terminal card aesthetic.
- Individual copy per command is more useful than a single block.
- Color tokens improve readability without needing a full syntax highlighter library.

### 4. MCP tools card layout
**Decision:** Each MCP tool gets a `McpToolCard` with:
- Tool name in monospace (the exact function name, not a display label).
- Brief description of what the tool does.
- Badge/chip indicating "read-only".

**Rationale:**
- Developers recognize function names like `retrieve_context_bundle` — no need to rename.
- "Read-only" badge reinforces the safety/trust message.
- Consistent with Card component usage across the site.

### 5. Layout for CLI showcase section
**Decision:** 2-column grid on desktop (`lg:grid-cols-2`), 1-column on mobile, displaying 3 pairs of commands. The first card (install) could be slightly larger or have a visual distinction as the getting-started command.

**Rationale:**
- 6 commands in a 2x3 grid gives a clean, scannable layout.
- Single column on mobile avoids horizontal scroll.
- Install command as the first/primary card matches its role as the entry point.

### 6. Layout for MCP showcase section
**Decision:** 3-column grid on desktop (`lg:grid-cols-3`), 2-column on tablet (`sm:grid-cols-2`), 1-column on mobile. The 5 tools fit: 3 on top row, 2 on bottom row (centered).

**Rationale:**
- 3-column allows 5 tools to display compactly without excessive vertical space.
- 2-column on tablet avoids cramped cards.

### 7. Section ordering and visual rhythm
**Decision:** CLI showcase first (above MCP), matching the "CLI first, then MCP integration" narrative flow. Both sections keep the alternating dark/light pattern — CLI on `variant="default"`, MCP on `variant="dark"`.

**Rationale:**
- CLI is the primary interface — users install via CLI, then discover MCP.
- Alternating backgrounds maintain the existing visual rhythm.

### 8. Package/command name verification
**Decision:** Add an internal `// TODO: verify <x>` comment in the CLI commands data array for the `npx laraskills@beta` package name and each subcommand name. These are non-user-visible — they serve as implementation notes to verify against the real npm package before production deploy.

**Rationale:**
- The proposal explicitly requires verifying final npm package/CLI command names before production.
- Internal TODOs are the right mechanism — tracked in code, visible to developers, removable once verified.
- No user-visible warnings about the package name.

## Risks / Trade-offs

- **[Risk] npm package name mismatch**: If the CLI ships under a different package name or command prefix than `npx laraskills`, all command displays become inaccurate.
  - **Mitigation**: Internal TODO comments flag each command for pre-production verification; update the package name in one place (the data array) if needed.
- **[Risk] MCP tool names change**: If the real project renames `ecc`-suffixed tools to `laraskills`-prefixed tools, the public UI names will be outdated.
  - **Mitigation**: Use the real tool names at implementation time; treat name changes as a separate follow-up task (avoid speculation).
- **[Risk] Too many sections on homepage**: Adding two more sections below the workflow section makes the homepage longer, potentially reducing engagement with lower sections.
  - **Mitigation**: Both sections are visually scannable (cards, not prose); users can quickly see what's relevant. Acceptable for a marketing landing page.
- **[Risk] Copy button saturation**: Every CLI card has a copy button — 6 copy buttons on one page may feel noisy.
  - **Mitigation**: Use a consistent, compact copy button (text-only or icon-only, matching the hero card pattern). The utility outweighs the repetition.

## Open Questions

1. Should the CLI showcase use tabs/pagination to show 3 commands at a time, or show all 6 in a scrollable grid? (Decision in this doc: show all 6 in a grid — simpler, scannable.)
2. Should `npx laraskills doctor` be included or saved for a future "troubleshooting" section? (Decision in this doc: include it — it's a real, useful command that demonstrates the tool's completeness.)
