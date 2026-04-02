# Local Business Prospecting Playbook

This module tracks one primary object: a prospect row.

## Source material

This playbook is a repo-native distillation of:

- [How to build a high-quality SMB prospect list](https://www.openmart.com/blogs/how-to-build-a-high-quality-smb-prospect-list)
- [How to sell to local business? (Part 1)](https://www.openmart.com/blogs/how-to-sell-to-local-business)
- [How to sell to local businesses? (Part 2)](https://www.openmart.com/blogs/how-to-sell-to-local-businesses-part-2)

The goal is not "run a search."

The goal is to turn a rough ICP into a list that is clean enough to route into a
CRM or outbound workflow without a human cleanup project later.

If you need the broader operating model behind this module, read
[`STANDARD-PRACTICE.md`](./STANDARD-PRACTICE.md).

For SMB-specific quality rules, signals, and owner-finder guidance, read
[`SMB-PROSPECTING.md`](./SMB-PROSPECTING.md).

If the motion is software-company or B2B prospecting, use
[`../b2b-prospecting/`](../b2b-prospecting/) instead.

## Who actually uses this

Real ICP patterns:

- SMB SaaS:
  - POS, payments, and tooling that sell into restaurants, salons, and med spas
  - usually want the owner or operator, not corporate
- Marketplaces:
  - local supply acquisition with high volume and decent accuracy
  - often pull broad first, then filter later
- Lead gen agencies and outbound teams:
  - plumbers, HVAC, dentists, and similar verticals
  - usually care more about contactability than perfect precision
- Vertical SaaS:
  - very specific niches like independent HVAC companies or dental practices
  - much stricter filtering
- Growth teams and scrappy founders:
  - broad geo-based SMB tests
  - messy queries, then iterate fast

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

This module sits inside a bigger system:

- `Source`
- `Merge`
- `Qualify`
- `Enrich`
- `Segment`
- `Prioritize`
- `Route`
- `Handoff`
- `Review`

Inside this module, the main responsibility is:

- define ICP
- run the first clean search
- merge and normalize the list
- qualify obvious bad-fit rows
- preserve enough context for enrichment and outbound later

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

What users usually apply first:

1. location
2. category or keyword
3. size or type filters like independent or non-chain
4. optional qualifiers like website, phone, or active status

Most people start broad, then narrow after seeing the results.

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

Treat export and merge as the point where company identity becomes sacred.

At minimum, preserve:

- company name
- website or domain
- source
- source query

If these are lost, enrichment and outbound get harder to trust later.

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

## Approve and reject logic

Working definition:

- `unqualified` means do not contact the lead
- it should not move into enrichment, CRM handoff, or outbound

Hard rejects:

- chain or franchise
- duplicate listing
- permanently closed or inactive
- no real decision-maker path when that is required

Soft rejects, depending on the motion:

- weak contact info
- no website
- wrong category due to listing noise
- too small, too random, or too weakly matched

If the team calls a row `unqualified`, the default action is:

- reject it from outreach
- keep it only for audit, learning, or source QA if needed

Strong approvals:

- owner or decision maker identified
- direct email or good phone
- business looks real, active, and reachable
- tight ICP match

Gold-standard row:

- owner name
- personal or work email, not just `info@`
- phone number
- website
- clear category match

## List quality rules

- One row should represent one business.
- `source_query` should always be preserved.
- Reject rows with missing core contact signals when those signals are part of the ICP.
- Keep fit scoring human-readable.
- Add notes when a row is borderline instead of pretending the score explains everything.
- The real filter is usually `independent + reachable human`, not just `business exists`.

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

## Standard handoff from this module

The normal exit from this module is not "done."

The normal exit is:

1. clean merged list
2. obvious junk removed
3. stable identity fields preserved
4. fit score and routing status present
5. ready for enrichment, prioritization, or outbound handoff

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

## The actual loop

Most users do this:

1. start broad
2. inspect results
3. realize the data is messy
4. add constraints like non-chain, website, or rating
5. export, QA, and enrich
