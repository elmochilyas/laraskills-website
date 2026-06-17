## Context

The homepage "Works with your Laravel AI stack" section renders 12 supported tools across a top cloud and 3 category group cards. The icon system went through three iterations:

1. **Initial (rejected)**: Monogram letter badges for tools without real icons
2. **Second (rejected)**: Generic category glyphs (terminal, editor, assistant shapes)
3. **Final (accepted)**: Verified real brand icons for all 12 tools via `@lobehub/icons` (10 tools) and documented inline SVG paths (2 tools), with no fallback system, no cadre wrapper, and consistent 22px sizing

## Goals / Non-Goals

**Goals:**
- All 12 tools render with a verified real brand icon
- No fallback system exists (no letter badges, no generic glyphs) — every tool has a real icon
- Brand colors are preserved for lobehub Color variants
- Mono-only lobehub icons render white on the container background
- Icons render directly in the pill/card container — no inner cadre/wrapper
- Consistent 22px visual size across all icons
- Top cloud and group cards use the same `BrandIcon` component and registry
- VS Code uses the correct official icon (sourced from Microsoft VS Code brand SVG)
- `@lobehub/icons` is the primary icon source; inline SVG paths are the documented last resort
- Fallback systems (`simple-icons` wrapper, `glyphs`, `_gen.js`) are deleted — they are dead code

**Non-Goals:**
- No redesign of the overall integrations section layout
- No new npm dependencies (only `@lobehub/icons` which was already installed)
- No fetching icons from the network
- No invented custom SVG logos
- No letter badges, monograms, or initials
- No implied partnership or endorsement language
- No changes to MCP section, hero, research section, or CTA section
- No analytics, SEO, or deployment changes

## Decisions

### Decision 1: Use `@lobehub/icons` as the primary icon source
- **Choice**: Source brand icons from the installed `@lobehub/icons` package. Use the `.Color` export where available (hardcoded brand-colored SVG fills — render as-is). Use the base (Mono) export where no Color variant exists (use `fill="currentColor"` with CSS `color: #fff` for white-on-dark).
- **Rationale**: Lobehub provides production-quality SVG components for popular AI/LLM tools. Ten of the twelve supported tools have a lobehub entry. No network requests needed — rendered server-side.
- **Alternatives considered**:
  - `simple-icons` npm package: only covers 6 of 12 tools, missing many we need; generates a large dependency
  - CDN-sourced SVGs: requires network requests, unreliable for static generation
  - Manual SVG files: adds maintenance burden, no auto-updates

### Decision 2: Inline SVG paths for tools without lobehub entries
- **Choice**: For VS Code and Zed (no lobehub entry), use a documented inline SVG path in the registry with a brief source note. VS Code path sourced from Microsoft's official VS Code brand SVG (Wikimedia Commons, CC0/public domain). Zed path sourced from the former `simple-icons` entry.
- **Rationale**: Only 2 of 12 tools need this treatment. Inlining avoids a dependency on the full `simple-icons` package just for two paths. The source is documented for transparency.
- **Alternatives considered**:
  - Keeping `simple-icons` dependency: adds weight for just 1 path (Zed; VS Code is not in simple-icons)
  - Installing a separate icon package for each missing tool: over-engineered

### Decision 3: No fallback system
- **Choice**: Every tool must have a verified real icon. There is no fallback path in `BrandIcon` — if `iconKey` is missing or the key is not in the registry, `BrandIcon` returns null.
- **Rationale**: All 12 tools now have entries in the registry. A fallback system (letter badges, generic glyphs) would be dead code that never executes. Removing it keeps the codebase clean and makes missing icons a compile-time concern (TypeScript catches missing keys in the registry).
- **Alternatives considered**:
  - Letter badge fallback: dishonest, looks like a placeholder
  - Generic category glyphs: visually quieter than real icons, but still looks incomplete
  - Silent return null: clean but risky if new tools are added without registry entries

### Decision 4: No inner icon cadre
- **Choice**: Render icons directly in the pill/card container without a `h-8 w-8 rounded-lg` wrapper div. The pill's padding (`px-4 py-2`) and the gap between icon and text (`gap-2.5`) handle spacing.
- **Rationale**: The cadre created a cramped, double-box appearance. Removing it makes the section feel more premium and intentional — the icon appears to belong in the pill rather than being trapped in a tiny square.
- **Alternatives considered**:
  - Keep the cadre but make it slightly larger: still creates a double-box effect
  - Make the cadre pill-shaped to match the pill: over-engineered, still redundant

### Decision 5: Unified BrandIcon component
- **Choice**: Both `IntegrationCloudItem` (top cloud) and `IntegrationGroupCard` (group cards) render tools exclusively through `BrandIcon`. `BrandIcon` handles all icon source dispatching (lobehub Color, lobehub Mono, inline SVG).
- **Rationale**: Single source of truth for icon rendering. Adding a new icon source or changing sizing only requires editing one file. Eliminates the inconsistent component branching that existed before.
- **Alternatives considered**: Separate renderers per icon source type — duplicates logic.

## Risks / Trade-offs

- **Lobehub icon availability**: If lobehub removes or renames an icon component, the registry will need updating. Mitigation: pin `@lobehub/icons` version and test on upgrade.
- **Brand color changes**: Color variants have hardcoded brand colors in SVG. If a tool updates its brand palette, the lobehub package must update first. Mitigation: keep lobehub reasonably up to date.
- **VS Code trademark**: Using the official VS Code icon on a third-party site is permitted under Microsoft's brand guidelines for referencing the product. The trademark disclaimer remains on the page.
- **No fallback for new tools**: If a new tool is added to `supported-tools.json` without a corresponding registry entry, it will render without an icon (BrandIcon returns null). This is intentional — it forces explicit icon assignment for every tool.
