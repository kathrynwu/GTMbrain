---
name: local-list-enriching
description: |
  Use when someone wants to enrich a local-business list, map Openmart data into
  a CRM or internal enrichment tool, decide which fields to preserve, or design
  an approval-first enrichment flow for local-business outbound.
---

# Local Business Enrichment

Use this skill when the user is asking about:

- enriching local-business lists
- filling CRM records with better business data
- adding decision-maker or company fields
- building an internal enrichment job
- avoiding junk enrichment and wasted credits

If the motion is software-company or B2B enrichment, route to `b2b-enriching`
instead.

## Read first

1. `modules/local-list-enriching/README.md`
2. `modules/local-list-enriching/PLAYBOOK.md`
3. `modules/local-list-enriching/FIELD-MAPPING.md`
4. `modules/local-list-enriching/FILTERS.md`
5. `modules/local-list-enriching/EMAIL-VERIFICATION.md`
6. `modules/openmart-prospecting/STANDARD-PRACTICE.md`
7. `modules/openmart-prospecting/INTEGRATIONS.md`
8. `modules/openmart-prospecting/PLAYBOOK.md`
9. `modules/openmart-prospecting/SELLING-LOCAL-BUSINESSES.md`

If the question touches data shape:

10. `modules/local-list-enriching/schema/enriched-prospect.schema.json`
11. `modules/local-list-enriching/sample-data/enriched-prospects.csv`
12. `modules/openmart-prospecting/schema/prospect.schema.json`
13. `modules/openmart-prospecting/sample-data/prospects.csv`

If the question touches implementation:

14. `packages/openmart/README.md`
15. `packages/openmart/client.example.js`

## Workflow

1. Ask what the target system is:
   - CRM
   - outbound tool
   - internal admin tool
2. Ask what the user actually wants to enrich:
   - owner name
   - general manager
   - decision-maker email
   - personal email
   - technology context
3. Separate:
   - search data
   - approval logic
   - enrichment data
   - CRM sync fields
4. Place this step inside the broader operating sequence:
   - `Source`
   - `Merge`
   - `Qualify`
   - `Enrich`
   - `Segment`
   - `Prioritize`
   - `Route`
   - `Handoff`
   - `Review`
5. Apply the first-pass filters before enrichment:
   - number of locations
   - has website
   - Google review rating if relevant
   - technology signals if relevant
6. Recommend enriching approved rows first, not the entire raw list.
7. Decide the motion:
   - `A` enrich approved rows now
   - `B` tighten filters first
   - `C` route the row back for human review
8. Preserve the workflow fields that make the list usable later.

## What to preserve

- `source_query`
- fit score
- routing status
- rejection reason
- Openmart or source IDs

High-priority enrichment fields:

- owner name
- general manager
- decision-maker email
- personal email
- technology context

Without those, enriched data becomes harder to trust.

## Working definitions

- `unqualified` means the lead should not be contacted
- if a row is already unqualified, default to stopping enrichment rather than
  pushing it downstream

## Output shape

Default to giving:

- target system
- `RECOMMENDATION: Choose X because ...`
- recommended motion: `A`, `B`, or `C`
- current workflow stage
- input fields
- enrichment fields
- approval gate
- sync rule
- notes on what not to automate yet
- `Reply with A, B, or C.`

## Rules

- do not enrich everything by default
- if the motion is software-company enrichment rather than local-business
  enrichment, route to `modules/b2b-enriching/`
- use the broader list-ops system as context, not just one row in isolation
- treat `unqualified` as a stop signal for normal outbound prep
- verification status should stay visible if email is part of the next motion
- do not use enrichment as an excuse for mass email
- enrich the personal contact path, not just the company shell
- use location count, website presence, reviews, and tech signals to filter first
- explain why each field matters to the outbound workflow
- keep the integration inspectable
- prefer explicit routing over hidden scoring
- end with `Reply with A, B, or C.` when giving next-step options
