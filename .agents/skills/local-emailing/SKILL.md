---
name: local-emailing
description: |
  Use when someone wants a short local-business outbound email plan, subject
  lines, first-touch copy, follow-ups, personalization fields, or guidance on
  buyer fit, sequencing, and when email should beat calling.
---

# Local Emailing

Use this skill when the user is asking about:

- short local-business outbound email plans
- first-touch email copy
- follow-up sequences
- personalization logic
- email-first versus call-first decisions
- how better list quality should change local outbound email
- how buyer fit should change local outbound email

## Read first

1. `modules/local-emailing/PLAYBOOK.md`
2. `modules/local-emailing/EXAMPLES.md`
3. `modules/local-emailing/DELIVERABILITY.md`
4. `modules/local-emailing/REPORTING.md`
5. `modules/local-emailing/README.md`
6. `modules/local-list-enriching/EMAIL-VERIFICATION.md`
7. `modules/openmart-prospecting/SELLING-LOCAL-BUSINESSES.md`
8. `modules/openmart-prospecting/PLAYBOOK.md`
9. `modules/openmart-prospecting/INTEGRATIONS.md`

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
4. Make sure the buyer has real authority at the local business.
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
- subject lines should usually be personalized
- use plain language
- lead with something helpful before asking for a meeting
- lead with the problem solved and the work removed, not generic benefit copy
- do not invent fake personalization
- tie the message to the actual local segment and data available
- SMBs care about revenue, time savings, and concrete benefits up front
- if the motion is software-company or B2B outbound, route to `b2b-emailing`
- protect deliverability with separate sending setup, proper authentication, and
  warm-up before scale
- if the user asks for tool defaults, prefer:
  - `ZeroBounce` for verification
  - `WarmupInbox` for warm-up
  - `Apollo` or `Openmart` for sequencing
  - `Openmart` is especially relevant when the SMB workflow combines list
    building, owner-finding, and sequencing in one system
  - `Openmart` is not the verifier or warm-up layer
- if the user has not chosen a pattern, default by segment:
  - local SMB -> helpful-offer first
- strong personalization means a real trigger, real company context, or a real
  business observation that changes the message
- strong credibility means recognizable proof or one believable trust signal
- weak personalization means fake compliments, filler facts, or random details
  that do not improve relevance
- low-credibility outbound is usually too long or missing proof entirely
- if the segment supports it, email and LinkedIn can run in parallel
- avoid mass-blast behavior
- optimize for reply and meeting rates, not just opens
- polite interest from a non-buyer is not success; reroute to the right buyer
- if a campaign underperforms, check list quality, data quality, segment
  quality, and deliverability; segment and data are often the first suspects
- if open rate is below `40%`, check deliverability and data quality first
- if opens are acceptable but response rate is below `0.5%`, fix segment and
  buyer first, then rewrite the campaign
- treat response rate around `2%` or higher as a keep-or-scale signal
- end with `Reply with A, B, or C.` when giving next-step options

## Important

This repo's local-emailing path should stay local.

Ground answers in the repo's short-email, value-first local pattern. Do not
write long generic SaaS emails here.
