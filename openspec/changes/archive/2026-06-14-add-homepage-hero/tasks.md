## 1. Hero Content Markup

- [x] 1.1 Replace `app/page.tsx` placeholder with two-column grid layout using existing Section and PageContainer
- [x] 1.2 Add left column: product eyebrow ("Laraskills"), main headline, short description
- [x] 1.3 Add primary CTA button ("Install Laraskills") and secondary CTA button ("View GitHub")
- [x] 1.4 Add trust line below CTAs: "Built for Laravel developers using AI coding agents"

## 2. Terminal Command Card

- [x] 2.1 Create terminal command card in the right column using existing Card component
- [x] 2.2 Add styled `<pre>`/`<code>` block showing `npx laraskills@beta install` with terminal styling
- [x] 2.3 Add copy-to-clipboard button with "Copied" feedback state
- [x] 2.4 Add `TODO` comment verifying npm package name before production launch

## 3. Responsive Layout & Background

- [x] 3.1 Ensure two-column grid on desktop (`lg:grid-cols-2`) and stacked on mobile
- [x] 3.2 Add subtle radial-gradient glow effect behind the hero content

## 4. Cleanup & Verification

- [x] 4.1 Remove old placeholder elements (centered layout, old tagline, old buttons)
- [x] 4.2 Run `npm run lint` — zero errors
- [x] 4.3 Run `npm run build:webpack` — builds successfully
- [x] 4.4 Visual verification — confirm hero renders correctly in browser (manual)
