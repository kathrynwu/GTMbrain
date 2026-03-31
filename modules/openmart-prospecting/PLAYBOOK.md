# Openmart Prospecting Playbook

This module tracks one primary object: a prospect row.

## Source material

This playbook is a repo-native distillation of:

- [How to build a high-quality SMB prospect list](https://www.openmart.com/blogs/how-to-build-a-high-quality-smb-prospect-list)
- [How to sell to local business? (Part 1)](https://www.openmart.com/blogs/how-to-sell-to-local-business)
- [How to sell to local businesses? (Part 2)](https://www.openmart.com/blogs/how-to-sell-to-local-businesses-part-2)

The goal is not "run a search."

The goal is to turn a rough ICP into a list that is clean enough to route into a
CRM or outbound workflow without a human cleanup project later.

## Inputs

You should have these before you start:

- target geography or location range
- target category, industry, or business type
- 2-4 fit signals
- 2-3 rejection rules
- owner for review or CRM handoff

If you are helping someone interactively and these are missing, ask for them
before proposing a query.

## Workflow

### 1. Define the ICP in plain English

Write the target in one sentence first.

Good intake questions:

- what location range are you targeting?
- what industry or business type do you want?
- what should definitely be filtered in or out?

Example shape:

> Owner-operated roofing companies in Texas with a working website and visible
> phone number.

If you cannot write that sentence clearly, your query is probably not ready.

### 2. Start broad

Your first query should prove the market exists, not perfectly filter the market.

Good broad constraints:

- geography
- category
- one or two strong fit signals

Bad first-query behavior:

- stacking ten filters immediately
- trying to encode every edge case up front
- assuming the first result set is already clean

### 3. Inspect the first page before exporting anything

Look at the first 20-25 rows and ask:

- are these actually the businesses I want?
- are the obvious rejects showing up?
- is the category too wide?
- is the geography too wide?
- are required contact signals missing?

Do not export 2,000 rows before doing this check.

### 4. Tighten or widen with one change at a time

If the query is too broad:

- add one stronger fit signal
- narrow the category
- narrow the geography

If the query is too narrow:

- widen geography first
- relax one fit signal
- expand to an adjacent category

Do not change five things at once or you lose the learning loop.

### 5. Export and normalize

Once the first page looks right, export into a stable row shape.

At minimum each row should preserve:

- company name
- website
- city
- state
- category
- source query
- fit score
- routing status

Use [`schema/prospect.schema.json`](./schema/prospect.schema.json) as the stable
shape.

### 6. Score before CRM handoff

Not every exported row should go straight into the CRM.

Use a light score:

- `5`: ideal fit, send now
- `4`: strong fit, send now
- `3`: maybe, review
- `2`: weak, reject unless list is thin
- `1`: reject

If you cannot explain why a row got a `4` or `5`, your score is fake.

### 7. Route explicitly

Use an explicit routing status:

- `To Review`
- `Approved`
- `Rejected`
- `Sent to CRM`

This matters because list-building and CRM handoff are not the same job.

## List quality rules

- One row should represent one business.
- `source_query` should always be preserved.
- Reject rows with missing core contact signals when those signals are part of the ICP.
- Keep fit scoring human-readable.
- Add notes when a row is borderline instead of pretending the score explains everything.

## High-signal views

- latest export
- approved for CRM
- rejected
- missing website
- missing phone
- fit score 4-5

## Stop conditions

Stop iterating the query when:

- the first page mostly matches your ICP
- rejects are explainable rather than random
- the export shape is stable
- the next bottleneck is outreach, not search quality

At that point, move into the outbound playbooks, not more list fiddling.

## What not to bake into v1

- magical auto-scoring
- hidden rejection logic
- giant enrichment pipelines
- full outbound automation
- agent wrappers before the human workflow is stable

## What happens after this module

Once the list is clean, the next operating questions come from the local-business
sales playbooks:

- which segments are worth high call volume
- when email-first beats call-first
- which metrics matter more than opens and clicks
- how to structure a repeatable call-to-demo process
