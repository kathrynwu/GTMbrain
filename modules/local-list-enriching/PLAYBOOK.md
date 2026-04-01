# Local List Enriching Playbook

Use this playbook after you already have a decent local-business list.

For the broader operating model around this step, read
[`../openmart-prospecting/STANDARD-PRACTICE.md`](../openmart-prospecting/STANDARD-PRACTICE.md).

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

## Filter before enrichment

Before you enrich, check:

- number of locations
- whether the business has a website
- Google review rating if relevant
- technology signals if relevant

If the row fails obvious fit or quality filters, reject it before you spend
more time or credits.

## Approval-first workflow

1. build or import the raw list
2. score or review the row
3. approve only the rows worth working
4. enrich the contact path
5. sync the enriched row to CRM or outbound tooling

This is the whole game.

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

## What good looks like

- fewer rows, better rows
- clear owner or manager path
- inspectable field mapping
- explicit approval gate before enrichment
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
