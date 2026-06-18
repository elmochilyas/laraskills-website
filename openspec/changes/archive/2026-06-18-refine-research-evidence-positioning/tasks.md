## 1. Rewrite research section copy in app/page.tsx

- [x] 1.1 Replace eyebrow text from "Evidence" to "VALIDATION"
- [x] 1.2 Replace heading from "Research & evidence" to "Tested in controlled Laravel scenarios"
- [x] 1.3 Replace subtitle/lead paragraph with: "Laraskills was evaluated across isolated OpenCode runs to compare baseline agent behavior with required Laravel context."
- [x] 1.4 Replace the 4-card metric grid with a single compact evidence text line: "9 isolated runs · 3 Laravel scenarios · 100% checks passed · 2/3 required-context wins"
- [x] 1.5 Add the honest study-limitation note after the evidence line: "Early validation, not a universal benchmark. Results depend on task complexity, agent choice, and configuration."
- [x] 1.6 Replace CTA button label from "Read the research" to "Read the study →"
- [x] 1.7 Ensure CTA href remains `/research`

## 2. Restructure research section layout in app/page.tsx

- [x] 2.1 Remove the `grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4` metric grid structure and its 4 stat card children
- [x] 2.2 Add a single compact glass card container (`backdrop-blur`, dark background, subtle border) to hold the evidence line, honest note, and CTA
- [x] 2.3 Arrange card content in reading order: eyebrow → heading → subtitle → evidence line → honest note → CTA
- [x] 2.4 Ensure the card stacks cleanly on mobile (full width, natural top-to-bottom flow)
- [x] 2.5 Ensure the section uses `variant="elevated"` on the Section wrapper (keep existing)

## 3. Verify consistency and run checks

- [x] 3.1 Confirm `/research` page still exists and the CTA link resolves correctly
- [x] 3.2 Confirm no changes to header, footer, or sitemap research links
- [x] 3.3 Run build: `npm run build` to verify no compilation errors
- [x] 3.4 Run lint: `npm run lint` to verify no lint errors

## 4. Design iteration: lab-report card UI improvement

- [x] 4.1 Add radial red/purple glow behind the card for premium feel
- [x] 4.2 Add top bar with "CONTROLLED STUDY" label and "early validation" status chip
- [x] 4.3 Add "OpenCode attribution test" subtitle in top bar (hidden on mobile)
- [x] 4.4 Replace single text line with 2-column layout: left = explanation + honest note, right = metric tiles
- [x] 4.5 Display metrics as 4 compact mini tiles in a 2x2 grid (9, 3, 100%, 2/3)
- [x] 4.6 Use restrained typography: numbers at text-lg, labels at text-[11px]
- [x] 4.7 Add border separator between card body and CTA
- [x] 4.8 Use small ghost-style CTA button matching other section patterns
- [x] 4.9 Reduce section header bottom margin (mb-10 → mb-8)
- [x] 4.10 Mobile: single column stack, no overflow, full-width card
- [x] 4.11 Verify content honesty: no benchmark claim, no exaggeration, no fake data
- [x] 4.12 Verify no changes to unrelated sections
- [x] 4.13 Run lint: `npm run lint`
- [x] 4.14 Run build: `npm run build -- --webpack`

## 5. Design iteration: research dossier asymmetric panel

- [x] 5.1 Replace symmetric 2-column layout with asymmetric md:grid-cols-3 (left col-span-2, right col-span-1)
- [x] 5.2 Add "CONTROLLED ATTRIBUTION STUDY" label in accent color on left panel
- [x] 5.3 Add dossier title: "Required context improved consistency in early Laravel tasks."
- [x] 5.4 Add short explanation paragraph on left side
- [x] 5.5 Add 3 pill chips: "OpenCode runs", "Laravel tasks", "Reproducible checks"
- [x] 5.6 Highlight 2/3 as main result on right side (text-4xl sm:text-5xl)
- [x] 5.7 Show 9, 3, 100% as compact supporting metric rows on right side
- [x] 5.8 Replace separate CTA section with bottom strip: limitation dot + text + CTA button
- [x] 5.9 Use stronger border (border-white/[0.12]) and top line (via-white/[0.12])
- [x] 5.10 Widen card from max-w-3xl to max-w-4xl
- [x] 5.11 Mobile: single vertical column stack (summary → highlighted result → metrics → limitation + CTA)
- [x] 5.12 Verify no claims of "always outperforms", "benchmark", or fake data
- [x] 5.13 Run lint: `npm run lint`
- [x] 5.14 Run build: `npm run build -- --webpack`

## 6. FINAL: Remove standalone validation section, add inline note in final CTA

- [x] 6.1 Remove the entire standalone validation Section (lines ~2402–2455 in app/page.tsx) including:
  - Section wrapper with variant="elevated" and py-16 md:py-24 spacing
  - Glass card with backdrop-blur and border
  - Eyebrow ("VALIDATION"), heading, subtitle
  - Metric chips (9, 3, 100%, 2/3)
  - Closing }), and the empty line between integrations and final CTA
- [x] 6.2 Add inline credibility `<p>` inside final CTA, after subtitle and before terminal Card:
  - Text: `Early validation: 9 isolated OpenCode runs across 3 Laravel scenarios. Read the study →`
  - Styling: `text-xs text-text-muted`
  - Link: `<a>` tag with `text-accent` color, `hover:underline`, `href="/research"`
  - Non-breaking space before arrow
- [x] 6.3 Verify no standalone validation section remains on homepage
- [x] 6.4 Update OpenSpec artifacts (proposal, design, spec, tasks) to match final direction
- [x] 6.5 Run lint: `npm run lint`
- [x] 6.6 Run build: `npm run build -- --webpack`
- [ ] 6.7 Archive change when user approves
