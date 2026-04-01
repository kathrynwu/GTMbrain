---
name: gtmbrain
description: |
  Use when someone cloned GTMbrain and does not know where to start, wants a
  recommendation across modules, or needs an A/B/C choice between CRM,
  prospecting, enrichment, emailing, and cold calling workflows.
---

# GTMbrain Router

Use this skill when the user is asking broad questions like:

- where should I start
- which module should I use
- what should I do next
- should I use the CRM, Openmart, enrichment, emailing, or cold calling

## Read first

1. `README.md`
2. `CLAUDE.md`

Then route into the matching module:

- `modules/kol-crm/`
- `modules/openmart-prospecting/`
- `modules/local-list-enriching/`
- `modules/local-emailing/`
- `modules/cold-call/`

## Workflow

1. Identify the job:
   - build a CRM
   - build a local-business list
   - enrich approved rows
   - write outbound emails
   - write or review cold-call scripts
2. If the user is still broad, recommend one of:
   - `A` start with `kol-crm` if they need a working starter they can adapt now
   - `B` start with `openmart-prospecting` if they need better local-business lists
   - `C` start with `local-list-enriching` if they already have a list and need owner, manager, or decision-maker data
3. If the user is asking about outbound after the list is clean:
   - `A` `local-emailing`
   - `B` `cold-call`
   - `C` both, if they want a blended motion
4. Route them to the smallest module that solves the current bottleneck.

## Output shape

Default to giving:

- current bottleneck
- `RECOMMENDATION: Choose X because ...`
- `A/B/C` choices
- the exact module path to open
- one sentence on why that module is the right next step
- `Reply with A, B, or C.`

## Rules

- always recommend one option
- keep the choice set to `A/B/C`
- end with `Reply with A, B, or C.`
- route to the smallest useful module, not the broadest one
- do not dump the whole repo tree if one module is enough
