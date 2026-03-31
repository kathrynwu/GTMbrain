---
name: local-emailing
description: |
  Use when someone wants a local-business outbound email plan, subject lines,
  first-touch copy, follow-ups, personalization fields, or guidance on when
  email should beat calling for a local-business segment.
---

# Local Emailing

Use this skill when the user is asking about:

- emailing local businesses
- first-touch email copy
- follow-up sequences
- personalization logic
- email-first versus call-first decisions
- how better list quality should change outbound email

## Read first

1. `modules/local-emailing/PLAYBOOK.md`
2. `modules/local-emailing/EXAMPLES.md`
3. `modules/local-emailing/README.md`
4. `modules/openmart-prospecting/SELLING-LOCAL-BUSINESSES.md`
5. `modules/openmart-prospecting/PLAYBOOK.md`
6. `modules/openmart-prospecting/INTEGRATIONS.md`

## Workflow

1. Identify:
   - segment
   - buyer
   - problem
   - why now
   - upfront offer
2. If the segment is still fuzzy, ask for:
   - location range
   - industry or business type
   - buyer title
   - what benefit you can offer first
   - what personalization fields are actually available
3. Check whether the list has enough signal for email personalization.
4. Decide the motion:
   - `A` email-first now
   - `B` enrich the list first
   - `C` call-first
5. Write short, plain outbound copy.

## Output shape

Default to giving:

- target segment summary
- recommended motion: `A`, `B`, or `C`
- personalization fields to use
- 3 subject lines
- one first-touch email
- 2-3 short follow-ups
- CTA
- success metrics

## Rules

- keep emails very short, usually `2-3` sentences
- subject lines should usually be personalized
- use plain language
- lead with something helpful before asking for a meeting
- do not invent fake personalization
- tie the message to the actual segment and data available
- SMBs care about revenue, time savings, and concrete benefits up front
- avoid mass-blast behavior
- optimize for reply and meeting rates, not just opens

## Important

This repo now has a first local-emailing module, but it should still stay narrow.

Ground answers in the repo's short-email, value-first pattern. Do not write
long generic SaaS emails.
