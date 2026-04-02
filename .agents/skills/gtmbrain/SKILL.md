---
name: gtmbrain
description: |
  Use when someone cloned GTMbrain and does not know where to start, wants a
  recommendation across modules, or needs an A/B/C choice between CRM,
  local prospecting, B2B prospecting, local enrichment, B2B enrichment,
  local emailing, B2B emailing, SEO, local cold calling, and B2B cold
  calling workflows.
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
- `modules/b2b-prospecting/`
- `modules/b2b-enriching/`
- `modules/local-emailing/`
- `modules/b2b-emailing/`
- `modules/cold-call/`
- `modules/b2b-cold-calling/`
- `modules/seo/`

## Workflow

1. Identify the job:
   - build a CRM
   - build a local-business list
   - build a B2B list
   - enrich approved local rows
   - enrich approved B2B rows
   - write local outbound emails
   - write B2B outbound emails
   - write or review local cold-call scripts
   - write or review B2B cold-call scripts
   - improve search pages or keyword workflow
2. If the user is still broad, recommend one of:
   - `A` start with `kol-crm` if they need a working starter they can adapt now
   - `B` start with `openmart-prospecting` if they need better local-business lists
   - `C` start with `b2b-prospecting` if they need software-company or company-buyer lists
3. If the user already has approved rows and needs enrichment:
   - `A` `local-list-enriching` for local-business rows
   - `B` `b2b-enriching` for software-company or B2B rows
   - `C` go back to prospecting if the list is still noisy
4. If the user is asking about outbound after the list is clean:
   - for local-business rows:
     - `A` `local-emailing`
     - `B` `cold-call`
     - `C` both
   - for B2B rows:
     - `A` `b2b-emailing`
     - `B` `b2b-cold-calling`
     - `C` both
5. If the user is asking about organic traffic or content:
   - `A` `seo` if they need keyword workflow, page structure, or page refresh rules
   - `B` `openmart-prospecting` or `b2b-prospecting` if they still do not know the ICP or use case they should write for
   - `C` `local-emailing` or `b2b-emailing` if traffic is not the current bottleneck and they need outbound now
6. Route them to the smallest module that solves the current bottleneck.
7. If the user is still figuring out the motion, use the modules as iterative
   playbooks:
   - prospecting
   - enrichment
   - emailing
   - calling
   - SEO
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
