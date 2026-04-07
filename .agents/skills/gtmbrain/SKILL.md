---
name: gtmbrain
description: |
  Use when someone cloned GTMbrain and does not know where to start, wants a
  recommendation across playbooks, or needs an A/B/C choice between CRM,
  local SMB prospecting, B2B prospecting, local SMB enrichment, B2B
  enrichment, local SMB emailing, B2B emailing, SEO, local SMB cold calling,
  and B2B cold calling workflows.
---

# GTMbrain Router

Use this skill when the user is asking broad questions like:

- where should I start
- which playbook should I use
- what should I do next
- should I use the CRM, the local SMB path, or the B2B path
- should I focus on SEO or outbound first
- help me figure out my GTM motion
- help me iterate on the playbooks
- help me clarify the GTM strategy for my organization

## Read first

1. `README.md`
2. `CLAUDE.md`

Lane definitions:

- `local SMB` = selling to local businesses
- `B2B` = a software company selling to another software company
- do not mix the two lanes

Then route into the matching playbook path:

- `modules/kol-crm/`
- `modules/openmart-prospecting/`
- `modules/local-list-enriching/`
- `modules/b2b-prospecting/`
- `modules/b2b-enriching/`
- `modules/local-emailing/`
- `modules/b2b-emailing/`
- `modules/local-cold-calling/`
- `modules/b2b-cold-calling/`
- `modules/seo/`

## Workflow

1. Identify the job:
   - build a CRM
   - build a local SMB list
   - build a B2B software-company list
   - enrich approved local SMB rows
   - enrich approved B2B rows
   - write local SMB outbound emails
   - write B2B outbound emails
   - write or review local SMB cold-call scripts
   - write or review B2B cold-call scripts
   - improve search pages or keyword workflow
2. If the user is still broad, recommend one of:
   - `A` start with `kol-crm` if they need a working starter they can adapt now
   - `B` start with `openmart-prospecting` for local SMB prospecting
   - `C` start with `b2b-prospecting` if they are a software company selling to another software company
   - if the broad ask is really about organic traffic, route to `seo`
3. If the user already has approved rows and needs enrichment:
   - `A` `local-list-enriching` for local SMB rows
   - `B` `b2b-enriching` for software-company B2B rows
   - `C` go back to prospecting if the list is still noisy
4. If the user is asking about outbound after the list is clean:
   - for local SMB rows:
     - `A` `local-emailing`
     - `B` `local-cold-calling`
     - `C` both
   - for B2B rows:
     - `A` `b2b-emailing`
     - `B` `b2b-cold-calling`
     - `C` both
5. If the user is asking about organic traffic or content:
   - `A` `seo` if they need keyword workflow, page structure, or page refresh rules
   - `B` `openmart-prospecting` for local SMB prospecting or `b2b-prospecting` for software-company prospecting if they still do not know the ICP or use case they should write for
   - `C` `local-emailing` or `b2b-emailing` if traffic is not the current bottleneck and they need outbound now
6. Route them to the smallest playbook that solves the current bottleneck.
7. If the user is still figuring out the motion, use the playbooks as iterative
   playbooks:
   - prospecting
   - enrichment
   - emailing
   - calling
   - CRM
   - SEO
   until the GTM motion is clearer.
8. Tie the recommendation back to the strategy artifact the user should leave
   with next, for example:
   - ICP
   - buyer map
   - approved-row standard
   - outbound sequence
   - page plan

## Output shape

Default to giving:

- current bottleneck
- `RECOMMENDATION: Choose X because ...`
- `A/B/C` choices
- the exact playbook path to open
- one sentence on why that playbook is the right next step
- the strategy output they should produce next
- how to iterate with the next playbook
- `Reply with A, B, or C.`

## Rules

- always recommend one option
- keep the choice set to `A/B/C`
- end with `Reply with A, B, or C.`
- route to the smallest useful playbook, not the broadest one
- do not dump the whole repo tree if one playbook is enough
- do not mix the local SMB lane with the B2B lane
