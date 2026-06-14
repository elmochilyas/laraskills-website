## 1. Metrics Data File

- [x] 1.1 Create `data/homepage-metrics.json` with all 7 metrics: label, value, optional description
- [x] 1.2 Add a `TODO` comment noting the file is a static placeholder for future generated data

## 2. Metrics Card Component

- [x] 2.1 Create `components/MetricsCard.tsx`: displays a single metric value (large number) with label
- [x] 2.2 Accept props for `value`, `label`, optional `description`
- [x] 2.3 Style with muted label, prominent value, subtle border, matching dark theme

## 3. Metrics Section in Homepage

- [x] 3.1 Add metrics section in `app/page.tsx` after hero, using Section + PageContainer
- [x] 3.2 Import metrics data from `data/homepage-metrics.json`
- [x] 3.3 Render responsive grid of MetricsCard components (4 cols desktop, 2 tablet, 1 mobile)
- [x] 3.4 Add section heading: "By the numbers" or similar

## 4. Comparison Component

- [x] 4.1 Create `components/ComparisonTable.tsx`: two-column comparison layout
- [x] 4.2 Accept two arrays of items (generic agent vs Laraskills), each with label + icon indicator
- [x] 4.3 Style generic agent column with muted/dark background, Laraskills column with brand accent border
- [x] 4.4 Responsive: side-by-side on desktop, stacked on mobile

## 5. Comparison Section in Homepage

- [x] 5.1 Add comparison section in `app/page.tsx` below metrics, using Section + PageContainer
- [x] 5.2 Add section heading: "Generic coding agent vs Laraskills" or similar
- [x] 5.3 Render ComparisonTable with the 4 comparison items on each side

## 6. Architecture Layer Card Component

- [x] 6.1 Create `components/ArchitectureLayerCard.tsx`: numbered card for one layer
- [x] 6.2 Accept props: `number`, `title`, `items` (string array)
- [x] 6.3 Style with layer number badge, title, bullet list of contents

## 7. Architecture Section in Homepage

- [x] 7.1 Add architecture section in `app/page.tsx` below comparison, using Section + PageContainer
- [x] 7.2 Add section heading: "Three-layer architecture" or similar
- [x] 7.3 Render three ArchitectureLayerCards in a responsive grid (3 cols desktop, stacked mobile)
- [x] 7.4 Hard-code layer data: Operating, Intelligence, Retrieval with correct item lists

## 8. Workflow Step and Arrow Components

- [x] 8.1 Create `components/WorkflowStep.tsx`: compact card with step number, label, description
- [x] 8.2 Create `components/WorkflowArrow.tsx`: visual connector (arrow/chevron) between steps
- [x] 8.3 Accept props for direction (horizontal vs vertical) to support responsive layout

## 9. Workflow Section in Homepage

- [x] 9.1 Add workflow section in `app/page.tsx` below architecture, using Section + PageContainer
- [x] 9.2 Add section heading: "Agent workflow" or similar
- [x] 9.3 Render horizontal step flow with arrows on desktop, vertical on mobile
- [x] 9.4 Steps: Developer task → Domain routing → Knowledge retrieval → Skill workflow → Agent implementation → Validation checklist

## 10. Verification & Cleanup

- [x] 10.1 Run `npm run lint` — zero errors
- [x] 10.2 Run `npm run build` or `npm run build:webpack` — builds successfully
- [x] 10.3 Visual verification — confirm all four sections render correctly at desktop and mobile widths (manual)
- [x] 10.4 Verify all sections use existing Section/PageContainer wrappers
- [x] 10.5 Verify no external UI libraries were added
