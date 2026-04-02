---
name: local-cold-calling
description: |
  Use when someone wants a local-business cold-calling plan, a call script,
  qualification flow, objection handling, segment advice, or guidance on how
  better list quality should shape local-business calling.
---

# Local Cold Calling

Use this skill when the user is asking about:

- cold calling local businesses
- call scripts
- qualification questions
- objection handling
- call-first versus email-first tradeoffs
- what list quality is needed before calling

## Read first

1. `modules/cold-call/PLAYBOOK.md`
2. `modules/cold-call/REVIEW-RUBRIC.md`
3. `modules/cold-call/CALL-FRAMEWORKS.md`
4. `modules/cold-call/OBJECTION-LIBRARY.md`
5. `modules/cold-call/TALK-TRACKS.md`
6. `modules/cold-call/README.md`
7. `modules/openmart-prospecting/SELLING-LOCAL-BUSINESSES.md`
8. `modules/openmart-prospecting/PLAYBOOK.md`

## Workflow

1. Identify the exact segment:
   - geography
   - business type
   - buyer title
   - pain point
   - offer
2. If the segment is still fuzzy, ask for:
   - location range
   - industry or business type
   - buyer title
   - what pain you think is most urgent
   - whether phone numbers are verified
3. Check whether the list is actually clean enough to call.
4. Decide the motion:
   - `A` call-first now
   - `B` enrich the list first
   - `C` email first, then call responders
5. Use the 3-step framework:
   - build credibility in the first 6 seconds
   - build value by showing business understanding and asking short pain questions
   - book the meeting with a concrete day and time
6. Use the companion assets when needed:
   - first-touch call flow
   - follow-up call flow
   - gatekeeper route
   - objection library
   - talk-track references
7. Write a script that sounds like a human, not an SDR content factory.
8. If the user wants feedback on a script or call, score it with the repo rubric:
   - credibility
   - value
   - close

## Output shape

Default to giving:

- target segment summary
- `RECOMMENDATION: Choose X because ...`
- recommended motion: `A`, `B`, or `C`
- 15-second opener
- 3-5 qualification questions
- value bridge
- likely objections and responses
- follow-up call shape if relevant
- gatekeeper route if relevant
- meeting close
- next steps the prospect should expect
- metrics to track
- review notes if the user asked for critique
- `Reply with A, B, or C.`

## Rules

- if the motion is software-company or B2B calling, route to `b2b-cold-calling`
- if location, industry, or buyer are missing, ask first
- the first 6 seconds matter most
- get to the point immediately and say why you are calling
- sound polished: no awkward pauses, stuttering, filler words, or rambling
- the opener should feel like a firm handshake through the phone
- cold calls should usually stay in the 4-6 minute range
- do not oversell on the cold call
- the goal is qualification plus a booked meeting, not a full pitch
- show you understand the business before pitching the product
- make it clear why the product is meaningfully better, not just cheaper
- push for a specific day and time, ideally same day or within 24 hours
- send the calendar invite and tell the user to get acceptance while still on the phone
- use the problem as the hook before the value prop
- follow-up touches must add new information
- gatekeeper handling should stay respectful, not deceptive
- keep scripts short
- do not write fake bravado or hype
- tie the call plan to the segment and list quality
- track connection, meeting, show, and close rates, not vanity metrics
- end with `Reply with A, B, or C.` when giving next-step options

## Important

This repo's local-cold-calling path should stay local.

Ground answers in the repo's 3-step framework and the user's segment. Do not
pretend there is one universal script for every local-business segment.
