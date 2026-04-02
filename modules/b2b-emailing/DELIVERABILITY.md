# B2B Deliverability

Use this note when the question is not just "what should the email say?" but
"how do we send it without burning the setup?"

## Core rule

Protect the main domain.

Outbound should run from separate sending domains or inboxes that are set up for
campaign volume, not from the company's primary operating inbox.

## Preferred options in this repo

Preferred verifier:

- ZeroBounce

Preferred warm-up option:

- WarmupInbox

Preferred sequencing option:

- Apollo

## Inbox setup basics

Before volume goes out:

- buy the sending domain
- prefer a `.com` when practical
- configure SPF
- configure DKIM
- configure DMARC
- create the sending inboxes, usually `1-2` at the start
- warm them up before real campaigns

## Warm-up rules

- start with low daily volume
- a reasonable early warm-up ceiling is around `50` sends per inbox per day
- warm inboxes gradually
- do not jump to high volume on a fresh setup

Useful diagnostics:

- use a DNS and mail-record checker such as MXToolbox

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

## List prerequisites before send

Do not send until the row has:

- a usable email
- verification status
- what the company does
- enough context to personalize credibly
- the right buyer

Helpful extras:

- LinkedIn profile
- title
- company type
- company size

## Metrics that matter

- open rate
- response rate
- booked meetings

Useful diagnostics:

- bounce rate above `5%` usually means re-verify emails and purge weak or role
  accounts
- open rate below `25%` usually means inbox-placement or list-health problems
- positive replies below `5%` usually means re-segmentation or stronger signals
- opt-outs above `2%` usually means the copy or segment is too broad
