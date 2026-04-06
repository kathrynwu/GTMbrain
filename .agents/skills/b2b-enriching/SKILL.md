---
name: b2b-enriching
description: |
  Use when someone wants to enrich an approved B2B list with the right buyer,
  contact path, and outbound context before sequencing, calling, or CRM handoff.
---

# B2B Enriching

Use this skill when the user is asking about:

- enriching B2B rows
- finding the right buyer
- deciding whether a row is sequencing-ready or call-ready
- preserving context before CRM or outbound handoff

## Read first

1. `modules/b2b-enriching/README.md`
2. `modules/b2b-enriching/PLAYBOOK.md`
3. `modules/b2b-enriching/FIELD-MAPPING.md`
4. `modules/b2b-prospecting/PLAYBOOK.md`
5. `modules/local-list-enriching/PLAYBOOK.md`

## Workflow

1. Ask what the target system is:
   - CRM
   - sequencing tool
   - calling workflow
2. Ask what needs to be enriched:
   - buyer
   - email
   - phone
   - LinkedIn
   - context
3. Separate:
   - approved company row
   - buyer fit
   - contact path
   - handoff fields
4. Decide the motion:
   - `A` enrich approved rows now
   - `B` reroute to a stronger buyer
   - `C` tighten approval rules first

## Output shape

Default to giving:

- target system
- `RECOMMENDATION: Choose X because ...`
- recommended motion: `A`, `B`, or `C`
- fields to enrich
- handoff shape
- what to preserve
- next module path
- `Reply with A, B, or C.`

## Rules

- enrich approved rows, not raw exports
- right buyer matters more than reply volume
- keep verification status visible if email is part of the next motion
- keep enough context that the rep can start immediately
- if the contact is wrong, reroute to the right buyer
- end with `Reply with A, B, or C.` when giving next-step options
