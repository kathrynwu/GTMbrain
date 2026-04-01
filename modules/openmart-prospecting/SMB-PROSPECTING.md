# SMB Prospecting

Use this note for the SMB-specific layer.

Do not use it as the generic prospecting default for every market.

The generic operating model lives in
[`STANDARD-PRACTICE.md`](./STANDARD-PRACTICE.md).

## Why the list matters more than copy

When the list is weak, everything downstream gets worse:

- reps waste time on closed or inactive businesses
- bounce rate rises and hurts sender health
- manual research expands because the row lacks context
- close rate drops because the contact was never the right decision maker

The list is not just prep work.

It is the main leverage point behind scalable outbound.

## What a great SMB prospect row contains

A strong SMB row should contain:

- verified contact path
- correct category, ideally more specific than a broad top-level label
- decision-maker identity:
  - owner
  - general manager
  - or another clearly relevant lead
- geographic context
- business-health context
- enrichment fields that help personalization later

The row should feel like a short briefing, not just a name in a CSV.

## Common raw-list failure modes

Raw SMB lists are risky because they often contain:

- outdated businesses
- wrong vertical tags
- personal emails unrelated to the business
- missing decision-maker titles

## Good owner-finder result

- exact match to the business
- owner, general manager, or another clearly relevant lead
- verified email when email is part of the motion
- usable phone when call is part of the motion
- website and social context if available
- business is active, not just present in a directory

## Weak owner-finder result

- generic inbox only
- unrelated personal email
- contact not clearly tied to the business
- no evidence the business is still active
- broad category match with no confidence in the entity

## Signal priorities for SMB prospecting

- newly opened business
- Google Maps reviews
- Google Maps ratings
- surge in recent Google reviews
- location count
- paid social ads
- updated business hours
- active website or social presence
- live promotions
- owner visible on social media

High-signal shortcut:

- prioritize rows where `signal score >= 7`
- and verified email is true when email is the planned channel

## Two-Hour List Sprint

One practical weekly version of this process:

1. define ICP with must-haves and nice-to-haves
2. pull one source or refresh the base list
3. enrich and verify in Openmart
4. tag high-priority rows
5. segment by vertical, signal, and stage
6. write one hook per segment
7. load to sequencer
8. QA sample sends
9. launch and watch first-hour health
10. document learnings for the next cycle
