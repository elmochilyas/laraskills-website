## Why

The homepage "Works with your Laravel AI stack" section renders 12 supported tools but the icons were inconsistent: missing tools had no visible icon, some logos were wrong (VS Code), the icon cadre created a cramped appearance, and the section looked unintentional rather than premium.

## What Changes

- Evaluate `@lobehub/icons` (popular AI/LLM brand SVG collection, already installed) as the primary icon source
- For each of the 12 tools, determine if `@lobehub/icons` has a Color (brand-colored fills) or Mono (currentColor-based) variant
- For tools without a lobehub entry, use a verified inline SVG path with documented source (e.g., VS Code official path from Microsoft's brand SVG, Microsoft CC0 on Wikimedia Commons)
- Remove the `simple-icons` npm dependency and generated wrapper — paths that were sourced from it are inlined directly
- Remove the inner icon cadre (`h-8 w-8 rounded-lg` background wrapper) — let icons render directly in their pill/card container
- Increase icon size from 20px (inside cadre) to 22px (direct render)
- Fix VS Code to use the correct official blue ribbon icon path with `#007ACC` brand color
- Remove all fallback systems: no letter badges, no monograms, no generic category glyphs
- Unify rendering: top cloud pills and group cards use the same `BrandIcon` component with the same registry
- Ensure icon source choice does not imply official partnership or endorsement — trademark disclaimer text remains
- No redesign of the overall integrations section layout
- No new npm dependencies (uses already-installed `@lobehub/icons`)
- No fetching icons from the network

## Capabilities

### New Capabilities
- `icon-system-improvements`: Consistent icon rendering for all 12 supported tools using verified real brand icons from `@lobehub/icons` (Color variants with preserved brand colors where available, Mono variants where not) and documented inline SVG paths for remaining tools. Icons render directly inside pill/card containers without a cramped inner cadre, at 22px visual size.

### Modified Capabilities
- `integrations-and-research-proof`: Update the supported-tools rendering section to use the new icon system. The tool grid requirement remains the same but icon presentation changes from inconsistent/variable to uniform/premium for all tools.

## Impact

- `lib/integration-icons.tsx` — created as the single icon registry mapping all 12 tools to lobehub Color/Mono components or inline SVG paths
- `components/BrandIcon.tsx` — rewritten to render icons directly without cadre; dispatches to lobehub Color/Mono or SVG render path
- `components/IntegrationCloudItem.tsx` — unified use of BrandIcon; removed fallbackIcon prop
- `components/IntegrationGroupCard.tsx` — unified use of BrandIcon; removed fallbackIcon prop
- `data/supported-tools.json` — all tools use `icon` key (no `fallbackIcon` entries remain)
- `app/page.tsx` — simplified type annotation; removed fallbackIcon passthrough
- `lib/simple-icons.ts` — deleted (no longer needed)
- `lib/_gen.js` — deleted (no longer needed)
- `lib/glyphs.ts` — deleted (no longer needed)
- `package.json` — removed `simple-icons` dependency
- No new dependencies — relies on already-installed `@lobehub/icons`
- No new pages, analytics, or deployment changes

## Acceptance Criteria

- All 12 tools render with a verified real icon in both the top cloud and group cards
- VS Code uses the correct official blue ribbon icon (not brackets, not a letter)
- No letter badges, monograms, or generic category glyphs remain anywhere
- No fake or manually redrawn logos are used
- Brand colors are preserved for lobehub Color variants
- Icon containers do not create a double-box/cramped effect — icons render directly
- Lint and build pass cleanly
