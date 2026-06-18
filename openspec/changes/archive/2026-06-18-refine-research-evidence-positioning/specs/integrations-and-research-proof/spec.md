## REMOVED Requirements

### Requirement: Standalone research section on homepage

The system SHALL NOT display a dedicated research/evidence section on the homepage.

#### Scenario: No standalone validation section
- **WHEN** the homepage is rendered
- **THEN** there SHALL NOT be a dedicated research/evidence/validation section with its own `Section` wrapper, heading, eyebrow, card, ribbon, or metric display

**Reason**: The study (9 runs, 3 scenarios) is too small to merit standalone homepage real estate. Detailed evidence is deferred to `/research`.

#### Scenario: No stat cards, grids, or panels for evidence
- **WHEN** the homepage is rendered
- **THEN** study metrics SHALL NOT appear as stat cards, metric tiles, dashboard panels, ribbons, or any other visually prominent format

#### Scenario: No inflated claims
- **WHEN** the homepage is inspected
- **THEN** it SHALL NOT claim Laraskills always outperforms generic agents, SHALL NOT call the study a benchmark, and SHALL use honest transparent language

### Requirement: Inline credibility note inside final CTA section

The system SHALL display a small inline credibility note inside the final CTA section ("Ready to ship better Laravel code?") as a quiet footnote.

#### Scenario: Inline note appears after subtitle and before terminal card
- **WHEN** the final CTA section is rendered
- **THEN** a small `<p>` element SHALL appear after the section subtitle and before the terminal command card
- **THEN** the note SHALL read: "Early validation: 9 isolated OpenCode runs across 3 Laravel scenarios. Read the study →"
- **THEN** the "Read the study →" portion SHALL be an `<a>` element linking to `/research`
- **THEN** the note SHALL use `text-xs text-text-muted` styling
- **THEN** the link SHALL use the accent color (`text-accent`)

#### Scenario: Note is visually quiet
- **WHEN** the inline note is rendered
- **THEN** it SHALL NOT be wrapped in any card, border, background, icon, or chip
- **THEN** it SHALL NOT be rendered inside a `Section` wrapper or any standalone section container
- **THEN** it SHALL be a plain text footnote within the final CTA section's content flow
