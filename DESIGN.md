# Design System — GTMbrain

## Product Context
- **What this is:** A registry of forkable GTM workflow modules.
- **Who it's for:** Growth engineers and RevOps-style builders.
- **Project type:** Repo homepage and catalog, not a SaaS marketing site and not an app dashboard.

## Aesthetic Direction
- **Direction:** Technical field guide
- **Decoration level:** Intentional and restrained
- **Mood:** Curated, sharp, operator-friendly. It should feel worth stealing from, not merely available.

## Typography
- **Display/Hero:** `Cabinet Grotesk`
- **Body:** `Instrument Sans`
- **UI/Labels:** `Instrument Sans` semibold
- **Data/Badges/Metadata:** `IBM Plex Mono`
- **Code:** `IBM Plex Mono`

## Color
- **Approach:** Restrained
- **Primary:** `#155EEF`
- **Accent:** `#16C7B7`
- **Signal:** `#F59E0B`
- **Ink:** `#101828`
- **Steel:** `#475467`
- **Mist:** `#D0D5DD`
- **Paper:** `#FCFCF9`
- **Canvas:** `#F4F4EF`
- **Semantic:** success `#12B76A`, error `#D92D20`

## Spacing
- **Base unit:** `4px`
- **Density:** Comfortable-compact
- **Rule:** Favor scan speed over spaciousness. This is a catalog, not an airy brand deck.

## Layout
- **Approach:** Hybrid catalog
- **Homepage order:**
  1. Repo thesis
  2. Featured module
  3. Module grid
  4. Surface explanation
  5. Contribution / release cadence
- **Grid:** Strong hero up top, browseable registry below
- **Border radius:** Use a small hierarchy, not one bubbly radius everywhere

## Motion
- **Approach:** Minimal-functional
- **Use for:** Hover states, filter transitions, featured-module emphasis
- **Avoid:** Decorative choreography and generic SaaS animation

## Component Rules

### Homepage
- Treat the first screen like a poster plus featured module, not a generic feature grid.
- One strong headline, one supporting sentence, one primary action.
- The first real thing to fork should be visible above the fold.

### Module Cards
- Every card must show:
  - module name
  - one-line job
  - surface badges
  - primary action
- Cards earn their existence. Do not use decorative card grids.

### Surface Badges
- Use explicit badges: `Template`, `Playbook`, `Connector`, `Skill`
- `Template` should read as the default action for mature modules.
- `Skill` is optional and should never dominate the visual hierarchy.

### Copy
- Short, assertive, and legible.
- Explain what a module lets the user do, not abstract vision language.
- Avoid generic AI/product copy.

## Anti-Patterns
- No purple/blue-to-purple startup gradients
- No centered-everything SaaS hero
- No icon-in-colored-circle 3-column feature grid
- No marketplace clutter
- No “AI agent repo” visual framing as the main identity

## Working Principle
Design for **stealability**.

A builder should land on GTMbrain and think:
"I want that workflow shape."

Not:
"Interesting concept."
