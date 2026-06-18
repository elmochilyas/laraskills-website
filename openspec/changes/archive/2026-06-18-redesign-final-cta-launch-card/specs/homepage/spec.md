## ADDED Requirements

### Requirement: Final CTA section renders as a compact premium launch card

The system SHALL render the final call-to-action section at the bottom of the homepage as a single compact dark "launch card" containing the heading, subtitle, terminal command, action buttons, and a validation footnote.

#### Scenario: Launch card is centered with max-width constraint
- **WHEN** the final CTA section is rendered
- **THEN** its content SHALL be wrapped in a single centered Card with a max-width between 900px and 1000px

#### Scenario: Launch card uses glass-morphism dark aesthetic
- **WHEN** the final CTA card is rendered
- **THEN** it SHALL use a semi-transparent dark background (`bg-black/40` or equivalent), a subtle border, and a soft red/purple glow effect

#### Scenario: Launch card has rounded corners
- **WHEN** the final CTA card is rendered
- **THEN** it SHALL have rounded corners matching the existing Card component

#### Scenario: Card displays heading and subtitle
- **WHEN** the final CTA card is rendered
- **THEN** it SHALL display the heading "Ready to ship better Laravel code?" and the subtitle "Install Laraskills and give your coding agent Laravel-specific context in seconds."

#### Scenario: Terminal block has polished appearance
- **WHEN** the final CTA card is rendered
- **THEN** the terminal block SHALL have a compact terminal card with a small top bar containing three colored dots and a `TERMINAL` label, a dark-but-not-pure-black background (e.g., `bg-zinc-900`), and a readable command row

#### Scenario: Terminal displays the npm install command
- **WHEN** the final CTA card is rendered
- **THEN** the terminal block SHALL display `npm install --save-dev laraskills` as the install command

#### Scenario: Primary action button is inside the card
- **WHEN** the final CTA card is rendered
- **THEN** it SHALL include a primary Button labeled "Install Laraskills" visibly positioned within the card

#### Scenario: Secondary action button is inside the card
- **WHEN** the final CTA card is rendered
- **THEN** it SHALL include a secondary Button labeled "View GitHub" clearly clickable and positioned alongside the primary button

#### Scenario: Validation note appears as inline footnote
- **WHEN** the final CTA card is rendered
- **THEN** it SHALL display a small validation note: "Early validation: 9 isolated OpenCode runs across 3 Laravel scenarios. Read the study →" where "Read the study →" links to `/research`

#### Scenario: Validation note is small and quiet
- **WHEN** the final CTA card is rendered
- **THEN** the validation note SHALL use small muted text that does not compete with the CTA heading, buttons, or terminal

#### Scenario: Card stacks cleanly on mobile
- **WHEN** the final CTA card is rendered on a viewport narrower than 640px
- **THEN** all elements SHALL stack vertically without horizontal overflow

## MODIFIED Requirements

### Requirement: All sections reuse existing layout components

The existing requirement is modified to exclude the final CTA section from the Section/PageContainer pattern, since it now uses a Card-based layout.

**FROM:**
The system SHALL wrap all content sections in the existing `Section` and `PageContainer` components for consistent layout.

**TO:**
The system SHALL wrap all content sections (except the final CTA section) in the existing `Section` and `PageContainer` components for consistent layout. The final CTA section SHALL use a Card-based layout as specified in its own requirement.

#### Scenario: (Modified) Each content section uses Section as wrapper
- **WHEN** any content section on the homepage is rendered, except the final CTA section
- **THEN** it SHALL use the `Section` component as the outer wrapper with consistent vertical padding

#### Scenario: (Modified) Each content section uses PageContainer for content width
- **WHEN** any content section on the homepage is rendered, except the final CTA section
- **THEN** its content SHALL be wrapped in `PageContainer` for consistent max-width and padding
