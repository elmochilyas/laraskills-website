## 1. Design Tokens & Base Layout

- [x] 1.1 Define color tokens, font stack, and spacing in `app/globals.css` using Tailwind v4 `@theme`
- [x] 1.2 Add base html/body styles (full height, dark background, light text, subtle grid background)
- [x] 1.3 Create `components/PageContainer.tsx` with responsive centered layout
- [x] 1.4 Add default metadata (title, description, open graph) in `app/layout.tsx`

## 2. Reusable UI Components

- [x] 2.1 Create `components/Button.tsx` with `variant` (primary/secondary/ghost) and `size` (sm/md/lg) props, supporting both `<button>` and `<a>` rendering
- [x] 2.2 Create `components/Section.tsx` with vertical padding and optional `variant` for dark background
- [x] 2.3 Create `components/Card.tsx` with border, rounded corners, and padding

## 3. Structural Components

- [x] 3.1 Create `components/Header.tsx` with brand name link and navigation links (Home, Docs, Skills, MCP, Research, GitHub)
- [x] 3.2 Create `components/Footer.tsx` with short Laraskills description and links (Docs, GitHub, MCP, Research)

## 4. Layout Integration

- [x] 4.1 Integrate Header and Footer into `app/layout.tsx` with sticky footer behavior
- [x] 4.2 Update `app/page.tsx` to use PageContainer, Section, and Button — remove `create-next-app` placeholder markup

## 5. Verification

- [x] 5.1 Run `npm run lint` — zero errors
- [x] 5.2 Run `npx next build --webpack` — builds successfully
- [x] 5.3 Visual verification — verify Header, Footer, and homepage render correctly (manual)
