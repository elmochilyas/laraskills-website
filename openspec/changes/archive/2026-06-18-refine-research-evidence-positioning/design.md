## Context

The homepage originally had a dedicated research/evidence section with 4 large stat cards (9 runs, 3 scenarios, 100% pass, 2/3 wins). After multiple iterations (compact card → lab-report card → dossier card → proof ribbon), it became clear that *any* standalone validation section gives disproportionate visual weight to a small study (9 runs). The final decision removes the section entirely and folds a tiny mention into the final CTA.

## Goals / Non-Goals

**Goals:**
- Remove the standalone validation section from the homepage.
- Add a single inline credibility note inside the final CTA section (below subtitle, before the terminal card).
- The note must be visually quiet: no card, no border, no large numbers.
- Link to `/research` for readers who want details.
- Keep the homepage flow clean: integrations section → final CTA → footer.

**Non-Goals:**
- No changes to `/research` page.
- No changes to unrelated homepage sections.
- No new pages.
- No exaggeration or fake metrics.

## Decisions

1. **No standalone section** — The study is too small (9 runs, 3 scenarios) to merit its own section. Standalone validation on the homepage would misrepresent its significance.

2. **Inline note in final CTA** — The final CTA section ("Ready to ship better Laravel code?") is the natural place: readers who are already convinced can find the study as a footnote. The note sits between the subtitle and the terminal card.

3. **Visual style: `text-xs text-text-muted`** — Small, muted, secondary. The link uses the accent color to be findable but not loud. No icon, no chip, no background.

4. **Link: plain `<a>` tag** — Not the Button component. Keeps it quiet and secondary. Uses non-breaking space before the arrow to prevent orphan line breaks.

5. **Removing the Section wrapper** — Eliminates the `py-16 md:py-24` padding gap between integrations and final CTA, making the flow tighter.

## Risks / Trade-offs

- **Buried footnote** → Readers might miss the evidence entirely. Mitigation: the link is accent-colored on a dark page — it's findable without being loud.
- **Too quiet** → The note may feel like an afterthought. Mitigation: this is intentional — the study is early and small; treating it as a footnote is honest and builds trust with technical audiences.
