---
name: local-list-enriching
description: |
  Use when someone wants to enrich a local-business list, map Openmart data into
  a CRM or internal enrichment tool, decide which fields to preserve, or design
  an approval-first enrichment flow for local-business outbound.
---

# Local List Enriching

Use this skill when the user is asking about:

- enriching local-business lists
- filling CRM records with better business data
- adding decision-maker or company fields
- building an internal enrichment job
- avoiding junk enrichment and wasted credits

## Read first

1. `modules/openmart-prospecting/INTEGRATIONS.md`
2. `modules/openmart-prospecting/PLAYBOOK.md`
3. `modules/openmart-prospecting/SELLING-LOCAL-BUSINESSES.md`

If the question touches data shape:

4. `modules/openmart-prospecting/schema/prospect.schema.json`
5. `modules/openmart-prospecting/sample-data/prospects.csv`

If the question touches implementation:

6. `packages/openmart/README.md`
7. `packages/openmart/client.example.js`

## Workflow

1. Ask what the target system is:
   - CRM
   - outbound tool
   - internal admin tool
2. Separate:
   - search data
   - approval logic
   - enrichment data
   - CRM sync fields
3. Recommend enriching approved rows first, not the entire raw list.
4. Preserve the workflow fields that make the list usable later.

## What to preserve

- `source_query`
- fit score
- routing status
- rejection reason
- Openmart or source IDs

Without those, enriched data becomes harder to trust.

## Output shape

Default to giving:

- target system
- input fields
- enrichment fields
- approval gate
- sync rule
- notes on what not to automate yet

## Rules

- do not enrich everything by default
- explain why each field matters to the outbound workflow
- keep the integration inspectable
- prefer explicit routing over hidden scoring
