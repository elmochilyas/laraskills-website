# CLI Showcase — Capability Specification

## Purpose

The CLI showcase proves Laraskills is a practical developer tool by displaying real `npx laraskills` commands in terminal-style cards. Visitors see the exact commands they can run — from installation to advanced usage — building trust and reducing the learning curve.

## Requirements

### Requirement: CLI showcase section displays 6 Laraskills commands

The system SHALL display a CLI showcase section on the homepage showing 6 practical `npx laraskills` commands in terminal-style cards.

#### Scenario: Section renders with heading and subtitle
- **WHEN** the CLI showcase section is rendered
- **THEN** it SHALL display a section heading and a descriptive subtitle below it

#### Scenario: Section renders 6 command cards
- **WHEN** the CLI showcase section is rendered
- **THEN** it SHALL display exactly 6 terminal-style command cards

#### Scenario: Cards display the install command
- **WHEN** a CLI command card for `install` is rendered
- **THEN** it SHALL display `npx laraskills@beta install` with a terminal prompt prefix

#### Scenario: Cards display the retrieve command
- **WHEN** a CLI command card for `retrieve` is rendered
- **THEN** it SHALL display `npx laraskills retrieve "Optimize an N+1 query" --mode compact` with a terminal prompt prefix

#### Scenario: Cards display the search command
- **WHEN** a CLI command card for `search` is rendered
- **THEN** it SHALL display `npx laraskills search "Policies versus Gates"` with a terminal prompt prefix

#### Scenario: Cards display the get command
- **WHEN** a CLI command card for `get` is rendered
- **THEN** it SHALL display `npx laraskills get security-identity-engineering/authentication/sanctum-spa-authentication` with a terminal prompt prefix

#### Scenario: Cards display the validate command
- **WHEN** a CLI command card for `validate` is rendered
- **THEN** it SHALL display `npx laraskills validate` with a terminal prompt prefix

#### Scenario: Cards display the doctor command
- **WHEN** a CLI command card for `doctor` is rendered
- **THEN** it SHALL display `npx laraskills doctor` with a terminal prompt prefix

### Requirement: CLI cards have terminal-window styling

Each CLI command card SHALL use a terminal-window visual style matching the existing hero section terminal card design.

#### Scenario: Card has terminal chrome
- **WHEN** a CLI command card is rendered
- **THEN** it SHALL display traffic-light dots (red, yellow, green) at the top

#### Scenario: Card shows prompt prefix
- **WHEN** a CLI command card is rendered
- **THEN** the command SHALL be prefixed by a `$` prompt symbol in a distinct color (e.g., green)

#### Scenario: Command text is monospace
- **WHEN** a CLI command card is rendered
- **THEN** the command text SHALL be displayed in a monospace font

### Requirement: Each CLI command is independently copyable

Each CLI command card SHALL include a copy button that copies only that card's command to the clipboard.

#### Scenario: Copy button exists on each card
- **WHEN** a CLI command card is rendered
- **THEN** it SHALL include a button to copy the command text

#### Scenario: Clicking copy copies the command text
- **WHEN** the user clicks the copy button on a CLI command card
- **THEN** the card's command text SHALL be copied to the clipboard

#### Scenario: Copied feedback is shown
- **WHEN** the user clicks the copy button
- **THEN** the button SHALL temporarily show a "Copied" or checkmark indicator for at least 1.5 seconds before reverting

### Requirement: CLI command card includes usage label

Each CLI command card SHALL display a short label indicating what the command does (e.g., "Install Laraskills", "Retrieve context", "Search knowledge").

#### Scenario: Card displays usage label
- **WHEN** a CLI command card is rendered
- **THEN** it SHALL display a short, human-readable label above or near the command

### Requirement: CLI cards use responsive grid layout

The CLI command cards SHALL be arranged in a responsive grid.

#### Scenario: Desktop shows 2-column grid
- **WHEN** the CLI showcase section is rendered on a viewport at least 1024px wide
- **THEN** the cards SHALL display in a 2-column grid (3 rows of 2 cards)

#### Scenario: Mobile shows single column
- **WHEN** the CLI showcase section is rendered on a viewport narrower than 1024px
- **THEN** the cards SHALL display in a single column

### Requirement: Internal TODO comments verify command names

The implementation SHALL include internal `// TODO` comments to verify the final npm package name and subcommand names before production deployment. These comments SHALL NOT be visible to end users.

#### Scenario: TODO flags package name for verification
- **WHEN** the CLI commands data array is defined
- **THEN** it SHALL include a `// TODO: verify package name` or equivalent comment near the package name

#### Scenario: TODO flags subcommand names for verification
- **WHEN** the CLI commands data is defined
- **THEN** it SHALL include a `// TODO: verify subcommand names` or equivalent comment

#### Scenario: No user-visible package warnings
- **WHEN** the CLI showcase section is rendered
- **THEN** NO user-visible warnings, notices, or disclaimers about the package name SHALL appear
