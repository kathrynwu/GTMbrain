# Deliverability

Use this note when the question is not just "what should the email say?" but
"how do we send it without burning the setup?"

## Core rule

Protect the main domain.

Outbound should run from separate sending domains or inboxes that are set up for
campaign volume, not from the company's primary operating inbox.

## Inbox setup basics

Before volume goes out:

- configure SPF
- configure DKIM
- configure DMARC
- create the sending inboxes
- warm them up before real campaigns

The setup matters as much as the copy.

## Warm-up rules

- start with low daily volume
- warm inboxes gradually
- do not jump to high volume on a fresh setup
- scale only after the inboxes are stable

## Sending-platform rules

Use a sequencing platform when:

- touches need to be scheduled consistently
- multiple inboxes are involved
- follow-ups need to be tracked
- the team wants one view of sends, replies, and meetings

Representative platforms:

- Apollo
- Outreach
- Reply
- Lemlist
- Snov

## Parallel-channel rule

Email does not need to work alone.

If the row also has a good LinkedIn path, it is often better to run email and
LinkedIn in parallel instead of forcing one channel to do all the work.

This is especially useful when:

- the segment responds better to multi-touch visibility
- the email is verified but still cold
- the rep has enough context to personalize both touches

## List prerequisites before send

Do not send until the row has:

- a usable email
- verification status
- what the company does
- enough context to personalize credibly

Helpful extras:

- LinkedIn profile
- title
- company type
- company size

If the row lacks these basics, route it back for enrichment.

## Best-practice rules

- separate sending setup from the main company domain
- authenticate every sending domain correctly
- warm inboxes before campaign volume
- keep volume conservative at first
- use short, high-signal copy
- prefer a smaller clean list over a large risky list
- pair email with LinkedIn when the segment supports it

## Metrics that matter

- open rate
- response rate
- booked meetings

Open rate alone is not enough.

## What not to do

- do not send cold campaigns from the main operating domain
- do not scale volume on a fresh inbox
- do not use unverifed or weak emails just to increase list size
- do not treat deliverability as a separate team problem after the copy is
  written
