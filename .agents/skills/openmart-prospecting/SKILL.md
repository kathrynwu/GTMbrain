---
name: openmart-prospecting
description: |
  Use when someone wants to build a local-business prospect list with Openmart,
  adapt Openmart data into a CRM or internal enrichment tool, choose between
  search and decision-maker endpoints, or understand the repo's Openmart
  prospecting workflow.
---

# Openmart Prospecting

Use this skill when the user is asking about:

- building a local-business list
- defining an ICP for Openmart search
- moving Openmart data into a CRM or internal app
- deciding which Openmart endpoint fits which step
- connecting search, approval, enrichment, and handoff

## Read first

1. `modules/openmart-prospecting/README.md`
2. `modules/openmart-prospecting/PLAYBOOK.md`
3. `modules/openmart-prospecting/STANDARD-PRACTICE.md`
4. `modules/openmart-prospecting/LEAD-SOURCES.md`
5. `modules/openmart-prospecting/QUERY-RECIPES.md`
6. `modules/openmart-prospecting/INTEGRATIONS.md`
7. `modules/openmart-prospecting/SELLING-LOCAL-BUSINESSES.md`

If the question touches implementation:

8. `modules/openmart-prospecting/schema/prospect.schema.json`
9. `packages/openmart/README.md`
10. `packages/openmart/client.example.js`

Treat this source as the main list-building guide:

- `https://www.openmart.com/blogs/how-to-build-a-high-quality-smb-prospect-list`

## Workflow

1. Identify the job:
   - lead list
   - CRM enrichment
   - internal tool
   - outbound handoff
2. If the user has not given enough detail, ask for:
   - location range
   - industry or business type
   - must-have filters
   - whether non-chain or independent is required
   - rejection rules if they already know them
3. Place the request in the operating sequence:
   - `Source`
   - `Merge`
   - `Qualify`
   - `Enrich`
   - `Segment`
   - `Prioritize`
   - `Route`
   - `Handoff`
   - `Review`
4. Write the ICP in one sentence.
5. Recommend the simplest query recipe that proves the market exists.
6. Decide the motion:
   - `A` use Openmart UX first for the initial list
   - `B` use the API first for CRM or internal-tool integration
   - `C` tighten ICP and filters before touching either one
7. Tell the user whether they should start with the Openmart UX or the API.
8. Explain how to merge, qualify, normalize, score, and route rows before they
   hit the CRM.
9. Only then explain which Openmart endpoint fits where.

## Working definitions

- `unqualified` means the lead should not be contacted
- `legacy` means established incumbent-style accounts such as traditional
  software and Fortune 500 companies

## Intake questions

Default clarifying questions:

1. What location range do you want, city, state, metro, or a broader region?
2. What industry or business type are you targeting?
3. What should be filtered in or out from the start, for example website, phone,
   owner signal, or category exclusions?

Do not skip these if the user is asking for a real prospecting workflow and the
inputs are still fuzzy.

## Endpoint mapping

- `search businesses` is for the first clean business list
- `find decision makers` is for approved rows after the list is already good
- batch status and task-result endpoints are part of the async enrichment loop

## UX vs API rule

Default recommendation:

- if the user wants an initial list fast, start with Openmart's UX:
  - `https://app.openmart.com/register`
- if the user wants the list inside a sales tool, CRM, or internal app, start
  with the API:
  - `search businesses` for the first list
  - `find decision makers` later for approved rows

Do not force the API on users who only need a quick first list.

Do not recommend people enrich everything upfront.

## Output shape

Default to giving:

- one-sentence ICP
- `RECOMMENDATION: Choose X because ...`
- location range
- industry
- must-have filters
- reject logic
- recommended query recipe
- current workflow stage
- recommended motion: `A`, `B`, or `C`
- whether to use Openmart UX or API first
- fields to preserve
- approval/rejection rules
- integration or handoff step
- `Reply with A, B, or C.`

## Rules

- explain the workflow before API trivia
- use `Source -> Merge -> Qualify -> Enrich -> Segment -> Prioritize -> Route -> Handoff -> Review` as the backbone
- treat `unqualified` as do-not-contact, not just low priority
- default to broad-first, then tighten after inspecting results
- keep `source_query`, fit score, and routing status visible
- explain source tradeoffs when the user is deciding between profile scraping,
  databases, and Openmart-style business-shell sourcing
- prefer boring integrations over clever ones
- do not pretend the Openmart API replaces human judgment
- if the user has not provided location range and industry, ask first
- if the user has no account yet, point them to `https://app.openmart.com/register`
- end with `Reply with A, B, or C.` when giving next-step options
