## Why

The homepage research/evidence section currently gives disproportionate visual importance to a small early validation study (9 runs, 3 scenarios). While the results are credible and should remain, the section reads as if this study is Laraskills' primary differentiator — when in fact the product's core value is structured Laravel-specific context (skills, rules, knowledge units, retrieval, MCP, validation). The layout (large stat grid, prominent numbers) visually competes with stronger differentiators like the architecture and workflow sections. This reframing makes the homepage more honest and focused.

## What Changes

- Remove the standalone validation section/ribbon/card from the homepage entirely.
- Add a tiny inline credibility note inside the final CTA section, below the subtitle.
- The note reads: `Early validation: 9 isolated OpenCode runs across 3 Laravel scenarios. Read the study →`
- The `Read the study →` text links to `/research`.
- The note uses small muted text with a slightly brighter accent link.
- No card, no border box, no metric chips, no dashboard, no ribbon around the note.
- Detailed evidence stays on `/research` only.
- Homepage flow becomes: integrations section → final CTA (with inline note) → footer.

## Capabilities

### New Capabilities

*(none)*

### Modified Capabilities

- `integrations-and-research-proof`: Remove the standalone research section from the homepage. The evidence now exists as a single inline text line inside the final CTA section. The dedicated research description section is removed from the homepage; detailed evidence is deferred to `/research`.

## Impact

- **`app/page.tsx`**: Remove ~53 lines of JSX (Section wrapper + ribbon markup). Add ~5 lines for the inline note inside the final CTA section.
- **Spec file**: Delta spec updated to reflect removal of standalone research section.
- **Research page** (`/research`): no changes — link still resolves correctly.
- No changes to styling system, data files, or other homepage sections.
