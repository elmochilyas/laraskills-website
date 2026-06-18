## Context

The current Footer component (`components/Footer.tsx`) already has some visual treatment — a gradient top border, subtle glow, brand logo with GitHub icon, link columns with accent lines, and a bottom bar. However, spacing feels loose (large gaps, excessive padding), the brand block lacks hierarchy, the GitHub icon is a small 32px box, and link column headings could be tighter. The footer needs visual refinement to match the premium dark aesthetic established on the rest of the homepage.

## Goals / Non-Goals

**Goals:**
- Tighter, more intentional spacing throughout the footer
- Refined top border — softer gradient transition from the final CTA section
- Stronger brand block with clearer visual hierarchy
- Better link column headings with accent treatment and refined hover states
- More prominent GitHub/connect action
- Clean bottom-row layout (copyright left, back-to-top right on desktop)
- Responsive stacking on mobile that preserves all functionality

**Non-Goals:**
- No content or copy changes — all links, labels, and text preserved
- No structural changes to the component (same grid, same link data)
- No changes to other homepage sections or the final CTA
- No new dependencies or external libraries
- No analytics, tracking, or metrics added
- No SEO, metadata, routing, or deployment changes

## Decisions

1. **Spacing: reduce vertical padding from `py-14`/`lg:py-18` to `py-12`/`lg:py-16`; reduce grid gap from `gap-10` to `gap-8`**
   - The current `py-14`/`lg:py-18` with `gap-10` creates more breathing room than needed for a footer. Tightening by one step keeps the premium feel while making the footer feel more intentional and less empty.
   - *Alternative considered:* removing padding entirely — rejected because the footer needs visual separation from content.

2. **Top border: keep the gradient-to-transparent approach but make the brand color stop more visible at center**
   - Currently `from-transparent via-brand/15 to-transparent`. Bumping to `via-brand/20` makes the divider more intentional without becoming harsh.
   - *Alternative considered:* a solid 1px border — rejected because the gradient approach better matches the dark aesthetic.

3. **Brand block: reduce description max-width from `max-w-xs` to `max-w-64` for tighter text measure; increase GitHub button to `h-9 w-9` with an icon-only label for accessibility**
   - A narrower text measure reads better for short descriptions. The larger GitHub button makes it a clearer callout without being distracting.
   - *Alternative considered:* adding a "Star on GitHub" badge — rejected because it would add fake metrics (no real-time star count API specified).

4. **Link column headings: keep the accent line approach but use a `h-0.5 w-4` line (slightly thicker and longer) with `brand/50` opacity**
   - A slightly thicker accent line creates a stronger visual anchor for the column. The update from `h-px w-3 brand/40` to `h-0.5 w-4 brand/50` is minimal but effective.
   - *Alternative considered:* using a dot/indicator instead of a line — rejected in favor of consistency with the existing pattern.

5. **Link hover: change from `hover:text-brand` to `hover:text-white` with a subtle `hover:translate-x-1`**
   - Using white on hover (instead of brand red) keeps the accent color reserved for headings/accents, reducing overuse of red. The larger translate offset adds a more satisfying micro-interaction.
   - *Alternative considered:* keeping `hover:text-brand` — rejected to avoid overusing the red accent across too many elements.

6. **Connect/GitHub link: render as an inline link with the ↗ arrow, matching other external link styling; increase font weight**
   - The current Connect column renders GitHub as a plain link. Making it look like a proper external link with `font-medium` and the existing arrow icon makes it more discoverable.
   - *Alternative considered:* a GitHub button in the Connect column — rejected because the brand block already has a GitHub icon button, making a second one redundant.

7. **Bottom row: use `justify-between` with left-aligned copyright and right-aligned back-to-top; on mobile, stack centered**
   - This matches standard premium-footer layout conventions. The current `justify-center` on mobile is fine; desktop should be `justify-between` rather than the current `justify-center` approach.
   - *Alternative considered:* keeping centered on all viewports — rejected because left-copyright/right-back-to-top is a more polished convention.

8. **Background transition: ensure the footer uses `bg-bg` (matches page background) rather than `bg-bg-alt`, since the final CTA section should transition smoothly into the same background**
   - If the final CTA has its own card/background, the footer should match the page background so it appears as a seamless continuation.
   - *Alternative considered:* adding a gradient transition section — rejected as unnecessary complexity.

## Risks / Trade-offs

- [Subtlety risk] Spacing reductions might make the footer feel cramped on very small viewports. Mitigation: test on 320px–480px widths and ensure minimum touch targets (44px) are maintained.
- [Consistency risk] Changing link hover behavior from brand-red to white creates a pattern difference from other sections using `hover:text-brand`. Mitigation: accept this as intentional — footer hover states should be quieter than hero/section hovers.
- [Color risk] Reducing red usage in the footer might make it feel disconnected from the brand. Mitigation: keep the red accent for column heading lines and the back-to-top hover state.
