---
name: gtmbrain
description: |
  Use when someone cloned GTMbrain and does not know where to start, wants a
  recommendation across modules, or needs an A/B/C choice between CRM,
  prospecting, enrichment, emailing, SEO, and cold calling workflows.
---

# GTMbrain Router

Use this skill when the user is asking broad questions like:

- where should I start
- which module should I use
- what should I do next
- should I use the CRM, Openmart, enrichment, emailing, or cold calling
- should I focus on SEO or outbound first
- help me figure out my GTM motion
- help me iterate on the playbooks

## Read first

1. `README.md`
2. `CLAUDE.md`

Then route into the matching module:

- `modules/kol-crm/`
- `modules/openmart-prospecting/`
- `modules/local-list-enriching/`
- `modules/local-emailing/`
- `modules/seo/`
- `modules/cold-call/`

## Workflow

1. Identify the job:
   - build a CRM
   - build a local-business list
   - enrich approved rows
   - write outbound emails
   - improve search pages or keyword workflow
   - write or review cold-call scripts
2. If the user is still broad, recommend one of:
   - `A` start with `kol-crm` if they need a working starter they can adapt now
   - `B` start with `openmart-prospecting` if they need better local-business lists
   - `C` start with `local-list-enriching` if they already have a list and need owner, manager, or decision-maker data
3. If the user is asking about outbound after the list is clean:
   - `A` `local-emailing`
   - `B` `cold-call`
   - `C` both, if they want a blended motion
4. If the user is asking about organic traffic or content:
   - `A` `seo` if they need keyword workflow, page structure, or page refresh rules
   - `B` `openmart-prospecting` if they still do not know the ICP or use case they should write for
   - `C` `local-emailing` if traffic is not the current bottleneck and they need outbound now
5. Route them to the smallest module that solves the current bottleneck.
6. If the user is still figuring out the motion, use the modules as iterative
   playbooks:
   - list building
   - enrichment
   - SEO
   - emailing
   - calling
   until the GTM motion is clearer.

## Output shape

Default to giving:

- current bottleneck
- `RECOMMENDATION: Choose X because ...`
- `A/B/C` choices
- the exact module path to open
- one sentence on why that module is the right next step
- how to iterate with the next playbook
- `Reply with A, B, or C.`

## Rules

- always recommend one option
- keep the choice set to `A/B/C`
- end with `Reply with A, B, or C.`
- route to the smallest useful module, not the broadest one
- do not dump the whole repo tree if one module is enough
