## Context

The homepage integrations section currently renders a tool cloud (`IntegrationCloudItem`) followed by three category cards (`IntegrationGroupCard`) — "Terminal & CLI", "Editor & IDE", "AI Assistants". Each card lists a subset of tools. The new design replaces this with a single unified "Developer Dock" panel: all 12 tools in premium logo pills, no categories, no descriptions, no diagram. The section eyebrow, heading, subtitle, and CTA all change.

## Goals / Non-Goals

**Goals:**
- Replace the category-card + cloud layout with a single dark glass dock panel
- Display all 12 supported tools as consistent logo pills with real icons
- Use new copy: eyebrow "SUPPORTED STACK", heading "Works with the tools you already trust", new subtitle and bottom value sentence
- Add "View integration docs" CTA linking to `/docs/integrations`
- Preserve existing icon system (`BrandIcon`, `@lobehub/icons`, inline SVGs)
- Keep `data/supported-tools.json` as the single source of truth
- Keep trademark disclaimer line
- Clean responsive wrapping on desktop and mobile
- Subtle hover lift/glow on pills, no heavy animation
- Section should look good as a standalone screenshot

**Non-Goals:**
- No changes to the `/docs/integrations` page
- No changes to research/evidence section, CTA section, or other homepage sections
- No changes to `lib/integration-icons.tsx` or `components/BrandIcon.tsx`
- No letter badges, fake logos, or custom official-looking logos
- No carousel, auto-scrolling, or tooltips
- No new UI libraries
- No analytics or metrics
- No changes to `data/supported-tools.json` structure
- No removal of `IntegrationCloudItem` or `IntegrationGroupCard` if they are used elsewhere on the site (verify first)

## Decisions

**Decision 1: Replace markup inline in `app/page.tsx` rather than create a new component**
- Rationale: The Developer Dock is a one-off section on the homepage. Creating a separate `DeveloperDock` component is reasonable if the markup is complex, but inline Section + PageContainer keeps changes localized and consistent with other homepage sections. If the dock markup exceeds ~80 lines, extract it to `components/DeveloperDock.tsx` for maintainability.

**Decision 2: Keep `data/supported-tools.json` as the loop source**
- Rationale: Avoids duplicating the tool list. The JSON already has all 12 tools with icon keys. The dock can iterate `allTools` directly.
- Alternative considered: Hard-coding the list — rejected because it would diverge from the data file.

**Decision 3: Glass panel effect via Tailwind utilities, not a separate CSS file**
- Rationale: `backdrop-blur`, `bg-black/40`, `border border-white/[0.06]`, and `shadow-2xl` are sufficient to achieve the dark glass look. A radial gradient overlay for the red/purple glow adds the premium feel without external dependencies.

**Decision 4: Pill styling uses existing `BrandIcon` at 22px + text label**
- Rationale: The icon system is already correct. Each pill is a flex row with `BrandIcon` + tool name, wrapped in a rounded-full container with a dark translucent background, soft border, and `group` hover effects.

**Decision 5: Remove `IntegrationGroupCard` and `IntegrationCloudItem` imports if unused elsewhere**
- Rationale: If these components are only used in the homepage integrations section, they become dead code. Verify via grep before deleting.

## Risks / Trade-offs

- **Risk: Tool logos may not render at 22px in the pill context** → Mitigation: `BrandIcon` already handles the 22px sizing; test in the new layout to ensure no clipping or distortion.
- **Risk: The glass panel may look too tall on mobile** → Mitigation: Use tighter padding on small viewports and allow pills to wrap naturally with `flex-wrap justify-center`.
- **Risk: Removing category cards removes contextual descriptions** → Mitigation: The new subtitle and value sentence replace that context; `/docs/integrations` retains full details.
- **Risk: Trademark disclaimer may be missed** → Mitigation: Keep the `<p className="mt-10 text-center text-[11px] text-text-dim/50">` line from the current section.
