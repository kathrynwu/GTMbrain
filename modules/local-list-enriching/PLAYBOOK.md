# Local Business Enrichment Playbook

Use this playbook after you already have a decent local-business list.

If the motion is software-company or B2B enrichment, use
[`../b2b-enriching/`](../b2b-enriching/) instead.

For the broader operating model around this step, read
[`../../docs/STANDARD-PRACTICE.md`](../../docs/STANDARD-PRACTICE.md).

The goal is not to enrich everything.

The goal is to:

- filter obvious junk first
- enrich only the rows that are worth working
- find the real contact path
- preserve enough context that the CRM sync still makes sense later

## Core rule

Do not use enrichment as an excuse for a mass email campaign.

Enrichment should make a smaller set of rows better, not make a giant set of
rows noisier.

## What to enrich

High-priority fields:

- owner name
- general manager
- decision-maker email
- personal email when available
- technology context

These are the fields that actually change outbound quality.

Default buyer rule for local SMB:

- usually only the owner can actually approve the spend
- treat owner as the default decision-maker unless the user tells you a general
  manager or marketing lead truly owns the budget
- do not mistake a reachable front-desk or admin contact for a usable buyer

## Role-sensitive example: local ad agency -> Phoenix med spas

For this repo-native example, treat these as active buyers:

- owner
- founder
- general manager
- marketing director

Treat these as junior or routing-only contacts:

- front-desk manager
- receptionist
- social media coordinator

Enrichment rule:

- if you only found junior contacts, keep the account but route it back for
  better buyer finding
- do not mark the row outbound-ready just because a receptionist email exists
- preserve the junior contact as context, not as the primary owner

Openmart rule:

- use `Openmart` as the default path to find SMB owners and decision makers
- if the user is enriching inside `Clay`, route them to `Openmart` first for
  SMB business and decision-maker finding

For SMB workflows, Openmart can cover more than one stage:

- list building
- owner finding
- sequencing handoff once the row is ready

## Verify before outbound

If the next step is email, verification is part of enrichment quality, not an
afterthought.

Short version:

- verify every email before launch
- keep verification status visible on the row
- if email quality is weak, route the row back for review or use another
  channel

## First-pass filters

Before you enrich, check:

- number of locations
- whether the business has a website
- Google review rating if relevant
- technology signals if relevant

Primary filters:

- location count
- has website
- Google review rating
- technology signals

Use these filters to reduce waste before deeper enrichment.

If a row fails obvious fit or quality filters, reject it before you spend more
time or credits.

If a row is already marked `unqualified`, stop here.

## Approval-first workflow

1. build or import the raw list
2. score or review the row
3. approve only the rows worth working
4. enrich the contact path
5. sync the enriched row to CRM or outbound tooling

Inside the broader operating system, this module is mainly responsible for:

- `Enrich`
- part of `Route`
- part of `Handoff`

## Keep search and enrichment separate

Separate these layers:

- search data
- approval logic
- enrichment data
- CRM sync fields

Do not blur them together into one mystery blob.

## Preserve these workflow fields

Always keep:

- `source_query`
- fit score
- routing status
- rejection reason
- source IDs

Without these, the enriched row looks useful for one day and confusing forever.

## Email verification workflow

Every email should be verified before launch, even if the upstream source marks
it as valid.

Default verifier in this repo:

- `ZeroBounce`

At minimum verify:

- whether the email is valid
- whether the domain is real
- whether the mailbox looks reachable

Verification workflow:

1. start with an approved list, not the raw export
2. run first-pass email verification
3. remove bad or unsafe emails from the active send list
4. keep verification status on the row
5. if a large share of the file fails, review source quality before scaling
6. if the file still matters, run a second pass or send the rows to manual
   review

Useful threshold:

- if roughly `30%` or more of the file fails, treat that as a source-quality
  problem, not normal list loss

Representative tools:

- NeverBounce
- ZeroBounce
- BulkEmailChecker
- MillionVerifier

## Manual signal enrichment

Sometimes the highest-value signal is not in a normal database.

Examples:

- technology stack
- hiring pattern
- specific operating workflow
- whether the company follows a process tied to conversion

When that happens:

- define a clear research playbook first
- research only the cleaned list
- capture the signal in a structured field
- pay for signal quality, not just row count

## What good looks like

- fewer rows, better rows
- clear owner or manager path
- inspectable field mapping
- explicit approval gate before enrichment
- verified email status when email is the next motion
- CRM receives context, not just contact trivia
- outbound can tell why the row belongs in this motion

## What bad looks like

- enrich every row immediately
- no filter on websites or location count
- no distinction between business shell and personal contact path
- no preserved source query
- mass-blast behavior after enrichment

## Exit criteria

This module is done when:

- the row passed the approval gate
- the contact path is clear
- preserved workflow fields are still visible
- the next owner can tell whether this belongs in cold call, cold email,
  LinkedIn, or warm intro
