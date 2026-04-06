# Standard Practice

This is the reusable operating model behind the more concrete GTM playbooks in
this repo.

The exact weekdays, tools, owners, and upload destinations can change.

The standard practice should stay stable:

1. `Source`
2. `Merge`
3. `Qualify`
4. `Enrich`
5. `Segment`
6. `Prioritize`
7. `Route`
8. `Handoff`
9. `Review`

## Working definitions

### `unqualified`

`Unqualified` means the team should not contact the lead.

That lead can stay in source data for audit or learning, but it should not move
into:

- enrichment queue
- sales handoff
- outbound sequence
- warm intro review

### `legacy`

`Legacy` means an established incumbent-style account, for example:

- traditional software companies
- Fortune 500 or similar established enterprises

This is the opposite of the newer-tech or startup-style bucket in the current
operating model.

## 1. Source

Gather new leads from repeatable top-of-funnel sources on a fixed cadence.

Examples:

- scraping jobs or hiring sites
- manual prospecting
- notebook exports
- previous-week carryover

Rules:

- new leads should enter through a repeatable intake path
- source should always be preserved
- list freshness should be treated as part of source quality

## 2. Merge

Merge all source exports into one working list before downstream work.

Always preserve stable identity fields:

- company name
- website or domain when available
- source
- source query or source notebook

If company identity is lost during merge, the rest of the workflow gets weaker.

## 3. Qualify

Run a lightweight qualification pass immediately after ingest.

Remove obvious bad-fit companies before deeper enrichment.

Qualification should answer:

- is this the right business type
- is this the right company profile
- is this too small to matter
- is this clearly irrelevant

Must-have versus nice-to-have is a useful working pattern:

- if a row misses a must-have, discard it early
- nice-to-haves should influence prioritization, not basic eligibility

## 4. Enrich

Only enrich the fields needed to decide motion or enable contact.

High-value routing enrichments usually include:

- employee count
- software or non-software classification
- LinkedIn presence
- phone quality
- email presence
- owner or decision-maker path
- activity or business-health signals

Do not fully enrich every row upfront.

## 5. Segment

Split the cleaned list into working segments before prioritization.

Typical segment dimensions:

- software vs non-software
- newer tech vs legacy
- upper-market vs SMB
- warm-intro eligible vs not
- cold-callable vs email-only

High-fit software should not sit in the same queue as weak legacy rows.

## 6. Prioritize

Prioritize within segment, not across the entire universe.

Useful prioritization dimensions:

- ICP fit
- size
- contactability
- relationship path
- campaign focus

The goal is not one master rank.

The goal is the right order inside the right motion.

## 7. Route

Assign one primary motion per lead.

Typical routing:

- `warm intro` for high-value accounts with relationship path
- `LinkedIn outbound` for tech and upper-market profiles
- `cold call` for rows with strong phone data
- `cold email` for rows with strong email data

Contact path should determine channel, not habit.

## 8. Handoff

Each outbound motion should get its own clean handoff list.

Every handoff row should preserve:

- company identity
- segment
- priority
- routing reason
- contact path
- owner
- notes if special handling is needed

Do not hand the sales team one giant mixed list without motion-specific
separation.

## 9. Review

Review performance on a fixed weekly cadence and adjust targeting.

Review by channel, not just by total lead count.

Ask:

- how many leads entered each motion
- how many were contacted
- how many replied
- how many booked
- which segments converted
- which segments wasted effort

Reporting should change next week's targeting.

List freshness rule:

- refresh actively worked lists at least every `60` days
- stale SMB lists decay fast enough that old data quietly lowers response rates

## Core rules

- preserve company identity during merges
- qualify before enrichment
- enrich for routing, not completeness
- segment before prioritization
- route before sales handoff
- use contact path to determine channel
- keep channel lists separate
- review weekly and adjust
- refresh the list before blaming copy

## What is specific versus reusable

Specific execution details can change:

- Mondays vs Tuesdays
- Clay, Openmart, Apollo, Heyreach
- one person's name or ownership
- bucket labels
- exact list sizes

The reusable process should stay:

`Source -> Merge -> Qualify -> Enrich -> Segment -> Prioritize -> Route -> Handoff -> Review`

## Still missing definitions to make explicit

Any team running this should define:

- what counts as `software`
- dedupe rules
- required fields at handoff
- ownership by stage
- channel success metrics
- when a lead can move from one channel to another
