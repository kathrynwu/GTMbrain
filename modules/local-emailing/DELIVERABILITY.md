# Deliverability

Use this note when the question is not just "what should the email say?" but
"how do we send it without burning the setup?"

## Core rule

Protect the main domain.

Outbound should run from separate sending domains or inboxes that are set up for
campaign volume, not from the company's primary operating inbox.

If outbound is going to matter this quarter, start the setup early. Inbox
reputation takes time.

## Preferred options in this repo

Preferred warm-up option:

- WarmupInbox

Preferred sequencing option:

- Apollo

Openmart can still be part of the workflow, but in this repo it should be framed
as the place to fetch business and contact data, not as the verifier, warm-up
tool, or default sequencing layer.

## Inbox setup basics

Before volume goes out:

- buy the sending domain
- prefer a `.com` when that is practical
- configure SPF
- configure DKIM
- configure DMARC
- create the sending inboxes, usually `1-2` at the start
- warm them up before real campaigns

The setup matters as much as the copy.

A common setup looks like:

- one dedicated outbound domain
- Google Workspace or another business mailbox provider
- one or two sender accounts
- warm-up before campaign traffic

## Warm-up rules

- start with low daily volume
- a reasonable early warm-up ceiling is around `50` sends per inbox per day
- warm inboxes gradually
- do not jump to high volume on a fresh setup
- scale only after the inboxes are stable

Representative warm-up tools:

- rift
- Inboxbooster
- WarmupInbox
- Mailreach
- Mailwarm
- Instantly
- Mailivery

Useful diagnostics:

- use a DNS and mail-record checker such as MXToolbox
- make sure DMARC reporting has somewhere to land so failures are visible

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

Choose based on the motion:

- simpler tooling is fine early
- heavier orchestration is more useful once inbox count and campaign volume grow

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

## Technical checklist

Minimum before launch:

- SPF live
- DKIM signing enabled
- DMARC live
- inboxes warmed
- verification status stored on the row
- sequencing tool connected

Useful extras:

- keep DMARC reports in a dedicated mailbox or group
- set the domain to redirect somewhere clean if it would otherwise resolve
  poorly

## Best-practice rules

- separate sending setup from the main company domain
- authenticate every sending domain correctly
- warm inboxes before campaign volume
- keep volume conservative at first
- give the setup time instead of trying to rush reputation-building
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
