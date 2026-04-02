# B2B Enriching Playbook

Use this playbook after you already have an approved B2B list.

The goal is not to enrich every possible person on the account.

The goal is to:

- confirm the right buyer
- find a usable contact path
- preserve enough context for outbound
- avoid pushing weak rows downstream

## Core rules

- enrich approved rows, not raw exports
- prioritize the buyer with authority
- if the contact is wrong, reroute to the right person
- keep verification visible if email is part of the next motion
- keep company context visible so the rep does not start cold

## What to enrich

High-priority fields:

- contact name
- title
- email
- phone
- LinkedIn profile
- what the company does
- company type
- business size
- one-line company summary
- one-line context for outreach
- verification status
- buyer-fit note

## Buyer rule

Do not confuse engagement with buying power.

Common mistake:

- junior contact replies politely
- team treats that as traction
- no meeting converts because authority is missing

The enrichment fix is:

- move up to the buyer who can actually decide
- preserve the account context
- keep the old note as learning, not as the active owner

## Verification and routing

At minimum, keep these visible:

- email status
- phone quality
- LinkedIn path

If email is weak:

- route to call or LinkedIn if those paths are stronger

If phone is weak:

- do not pretend the row is call-ready

## Exit criteria

This module is done when:

- the buyer is clear
- the contact path is clear
- context is preserved
- the row can move into:
  - sequencing
  - calling
  - CRM
