## Why

The homepage integrations section currently renders the correct tool icons, but the UI communicates as a basic logo grid with category cards. It does not visually convey the core message: Laraskills works with the AI coding tools developers already use. A premium "Developer Dock" redesign will make this message immediate, trustworthy, and visually aligned with the rest of the dark technical interface.

## What Changes

- Remove the current `IntegrationCloudItem` (top cloud) and `IntegrationGroupCard` (category cards) from the homepage integrations section
- Replace with a single unified dark glass "Developer Dock" panel showing all 12 tools as premium logo pills
- Change the section eyebrow from "Ecosystem" to "SUPPORTED STACK"
- Update the heading and subtitle to the new copy
- Add a CTA button "View integration docs" linking to `/docs/integrations`
- Preserve the trademark disclaimer line
- Keep existing `data/supported-tools.json` data source and `BrandIcon` component unchanged
- No changes to the `/docs/integrations` page content
- No changes to research/evidence section, CTA section, or any other homepage sections

## Capabilities

### New Capabilities

None — this is a UI redesign of an existing capability, not a new feature.

### Modified Capabilities

- `integrations-and-research-proof`: The supported tools grid section requirements change from a category-card grid with top cloud to a unified Developer Dock panel. Research/evidence and final CTA sub-capabilities remain unchanged.

## Impact

- **app/page.tsx**: Replace the integrations section (lines ~2258-2300) with the new Developer Dock markup; remove `IntegrationCloudItem` and `IntegrationGroupCard` imports
- **components/**: `IntegrationGroupCard.tsx` may become unused and removable; `IntegrationCloudItem.tsx` may become unused and removable
- **data/supported-tools.json**: No changes (tools list stays the same)
- **components/BrandIcon.tsx**: No changes (icon system preserved)
- **lib/integration-icons.tsx**: No changes
- **openspec/specs/integrations-and-research-proof/spec.md**: Requirements for the tools grid section will need a delta spec reflecting the new unified dock design
