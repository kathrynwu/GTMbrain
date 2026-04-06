---
name: b2b-emailing
description: |
  Use when someone wants a short B2B outbound email plan, subject lines,
  first-touch copy, follow-ups, personalization fields, or guidance on buyer
  fit, sequencing, and when email should beat calling.
---

# B2B Emailing

Use this skill when the user is asking about:

- short B2B outbound email plans
- first-touch email copy
- follow-up sequences
- personalization logic
- email-first versus call-first decisions
- how better list quality should change B2B outbound email
- how buyer fit should change B2B outbound email

## Read first

1. `modules/b2b-emailing/PLAYBOOK.md`
2. `modules/b2b-emailing/README.md`
3. `modules/b2b-prospecting/PLAYBOOK.md`
4. `modules/b2b-enriching/FIELD-MAPPING.md`

## Workflow

1. Identify:
   - segment
   - buyer
   - problem
   - why now
   - upfront offer
2. If the segment is still fuzzy, ask for:
   - company type
   - buyer title
   - why-now trigger
   - what benefit you can offer first
   - what personalization fields are actually available
3. Check whether the list has enough signal for email personalization.
4. Make sure the buyer has real authority or clearly owns the KPI.
5. Decide the motion:
   - `A` email-first now
   - `B` enrich the list first
   - `C` call-first
6. Write short, plain outbound copy.

## Output shape

Default to giving:

- target segment summary
- `RECOMMENDATION: Choose X because ...`
- recommended motion: `A`, `B`, or `C`
- personalization fields to use
- 3 subject lines
- one first-touch email
- 2-3 short follow-ups
- CTA
- success metrics
- `Reply with A, B, or C.`

## Rules

- keep emails very short, usually `2-3` sentences
- use plain language
- lead with the problem solved and the work removed, not generic benefit copy
- do not invent fake personalization
- tie the message to the actual segment and buyer
- prefer `ZeroBounce` for verification
- prefer `WarmupInbox` for warm-up
- prefer `Apollo` for sequencing
- if the user has not chosen a pattern, default by segment:
  - B2B software -> trigger-based opener
  - enterprise or legacy -> observation plus proof
  - trust-heavy sale -> credibility plus curiosity
- strong credibility means recognizable proof, market reputation, fundraising,
  or some other believable trust signal such as school, prior employers, or
  founder background
- polite interest from a non-buyer is not success; reroute to the right buyer
- if open rate is below `40%`, check deliverability and data quality first
- if opens are acceptable but response rate is below `0.5%`, fix segment and
  buyer first, then rewrite the campaign
- treat response rate around `2%` or higher as a keep-or-scale signal
- end with `Reply with A, B, or C.` when giving next-step options
