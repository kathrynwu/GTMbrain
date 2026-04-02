---
name: b2b-prospecting
description: |
  Use when someone wants to define a B2B ICP, choose the right buyer, pick
  signals, and build a prospect list for software-company or company-buyer
  outbound.
---

# B2B Prospecting

Use this skill when the user is asking about:

- B2B or software-company prospecting
- ICP definition for company-buyer motions
- buyer selection
- trigger-based prospecting
- how to avoid noisy junior-title replies

## Read first

1. `modules/b2b-prospecting/README.md`
2. `modules/b2b-prospecting/PLAYBOOK.md`
3. `modules/b2b-prospecting/LEAD-SOURCES.md`
4. `modules/openmart-prospecting/STANDARD-PRACTICE.md`

## Workflow

1. Identify:
   - ICP
   - company type
   - buyer
   - signal
   - list source
2. If the request is still fuzzy, ask for:
   - company type
   - target buyer title
   - must-have filters
   - why-now signal
3. Place the request inside:
   - `Source`
   - `Merge`
   - `Qualify`
   - `Enrich`
   - `Segment`
   - `Prioritize`
   - `Route`
   - `Handoff`
   - `Review`
4. Decide the motion:
   - `A` build the B2B company list now
   - `B` tighten the buyer or signal rules first
   - `C` route to `b2b-enriching` if the list is already approved

## Output shape

Default to giving:

- one-sentence ICP
- `RECOMMENDATION: Choose X because ...`
- buyer rule
- signal rule
- source rule
- reject logic
- current workflow stage
- recommended motion: `A`, `B`, or `C`
- next module path
- `Reply with A, B, or C.`

## Rules

- do not mix this with local-business shell prospecting
- avoid junior or entry-level buyers as the default
- if the account is right but the person is wrong, reroute rather than discard
- prefer `Apollo` for software-company prospecting
- make signals product-specific
- treat polite interest without authority as noise, not traction
- end with `Reply with A, B, or C.` when giving next-step options
