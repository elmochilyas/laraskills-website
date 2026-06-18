## 1. Spacing & Layout Refinement

- [x] 1.1 Reduce footer vertical padding from `py-14`/`lg:py-18` to `py-12`/`lg:py-16`
- [x] 1.2 Reduce grid column gap from `gap-10` to `gap-8`
- [x] 1.3 Change footer background from `bg-bg-alt` to `bg-bg` for seamless CTA transition

## 2. Top Border & Divider

- [x] 2.1 Bump gradient divider opacity from `via-brand/15` to `via-brand/20`
- [x] 2.2 Ensure the glow gradient background remains intact and centered

## 3. Brand Block

- [x] 3.1 Reduce brand description max-width from `max-w-xs` to `max-w-64`
- [x] 3.2 Increase GitHub icon button from `h-8 w-8` to `h-9 w-9` with updated hover states
- [x] 3.3 Adjust brand block spacing (`mt-4`, `mt-5` margins) for tighter vertical rhythm

## 4. Link Column Headings

- [x] 4.1 Update heading accent line from `h-px w-3 brand/40` to `h-0.5 w-4 brand/50`
- [x] 4.2 Update all heading accent lines (Product, Resources, Connect)

## 5. Link Hover States

- [x] 5.1 Change footer link hover color from `hover:text-brand` to `hover:text-white`
- [x] 5.2 Increase hover translation from `hover:translate-x-0.5` to `hover:translate-x-1`
- [x] 5.3 Apply hover changes to all link columns (Product, Resources, Connect)

## 6. Connect Column Polish

- [x] 6.1 Add `font-medium` weight to the GitHub connect link
- [x] 6.2 Ensure the external arrow (↗) is visible and styled consistently
- [x] 6.3 Apply `hover:text-white` to the connect link hover state

## 7. Bottom Row

- [x] 7.1 Change desktop layout from centered to `justify-between` (copyright left, back-to-top right)
- [x] 7.2 Ensure mobile view stacks vertically centered (existing behavior)
- [x] 7.3 Update back-to-top hover to use `hover:text-white` for consistency

## 8. Verification

- [x] 8.1 Verify all existing footer links are preserved and functional
- [x] 8.2 Verify footer is responsive at 320px, 640px, 1024px, and 1440px widths
- [x] 8.3 Verify footer background transitions smoothly from final CTA section
- [x] 8.4 Verify no horizontal overflow occurs on any viewport
- [x] 8.5 Run `npm run build` and `npm run lint` to confirm no regressions
