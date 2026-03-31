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

1. `modules/openmart-prospecting/SELLING-LOCAL-BUSINESSES.md`
2. `modules/openmart-prospecting/PLAYBOOK.md`
3. `modules/openmart-prospecting/INTEGRATIONS.md`

## Workflow

1. Identify:
   - segment
   - buyer
   - problem
   - why now
2. Check whether the list has enough signal for email personalization.
3. Recommend email-first only when the segment and data quality support it.
4. Write short, plain outbound copy.

## Output shape

Default to giving:

- target segment summary
- personalization fields to use
- 3 subject lines
- one first-touch email
- 2 short follow-ups
- CTA
- success metrics

## Rules

- keep emails short
- use plain language
- do not invent fake personalization
- tie the message to the actual segment and data available
- optimize for reply and meeting rates, not just opens

## Important

The repo does not yet have a dedicated local-email module.

So this skill should use the existing local-business selling guidance plus the
user's segment and enrichment context, rather than pretending there is already a
finished email doctrine in the repo.
