# Local Emailing Playbook

Use this playbook when the segment is clear enough and the list has enough
signal to send short, relevant outbound emails.

The goal is not to blast a generic campaign.

The goal is to:

- solve a visible workflow problem
- save the buyer time
- offer something useful up front
- start a real conversation
- create a clean handoff to a meeting or follow-up call

## Core rules

- keep the cold email very short, usually `2-3` sentences
- keep the subject line personalized
- lead with something useful, not a hard sell
- lead with the problem solved, not abstract benefit language
- do not fake personalization
- optimize for replies and meetings, not vanity open rates

Useful defaults:

- try to stay under about `50` words when the message still feels complete
- subject lines often work best when they stay in the `2-4` word range
- assume the buyer will skim this on a phone before deciding whether to keep
  reading

Why:

- specific workflow pain is usually more credible than generic ROI talk
- a solved bottleneck is easier to believe than a vague improvement claim

## What buyers care about

Common outcomes in this repo:

- revenue impact
- saving time
- higher response or connect quality
- customer-facing KPI improvement
- concrete help up front

If your email does not clearly connect to one of those, it is probably weak.

## Before you write

Know:

- the segment
- the likely buyer
- the problem you think they have
- the personalization fields you actually have
- the upfront offer

Make sure the buyer is the person who can actually move the deal.

Examples:

- software-company motions often need `VP` or `Director` buyers
- local-business motions often need the owner
- customer-facing workflow tools should often go to the person who owns the
  outcome KPI, not a random ops title

If you target the wrong person, you can get polite replies with no buying
authority. That is noise, not traction.

If the list is weak, fix the list before writing more copy.

If the inbox setup is weak, fix that before scaling the campaign.

Read [`DELIVERABILITY.md`](./DELIVERABILITY.md) when the real bottleneck is:

- sender reputation
- sending-domain setup
- warm-up
- sequencing platform choice
- whether email should run alongside LinkedIn

## The right shape

The best local-business emails in this repo follow a simple pattern:

1. personalized subject line
2. one specific observation or context line
3. one offer that helps them
4. one small CTA

Do not write a long pitch deck in email form.

The scan pattern matters:

- the first line should carry the main point
- each new line should add one thing, not three
- the email should still make sense when skimmed quickly on mobile

## Default pattern by segment

Use these as the default pattern choices unless there is a strong reason to do
something else.

- local SMB: helpful-offer first
- B2B software: trigger-based opener
- enterprise or legacy: observation plus proof

Why:

- local SMB buyers respond better when the first message already feels useful
- B2B software buyers often have clearer intent signals such as hiring,
  expansion, funding, CRM changes, team build-out, or workflow changes
- enterprise and legacy accounts usually need a more credible frame tied to a
  visible operational burden and one proof point

Another useful default:

- when the sale needs more trust, start with credibility and curiosity before a
  direct sell

## Lead with help

The best examples do not open with:

- `can I book time`
- `want a demo`
- `we are the leading platform`

They open with a helpful offer, for example:

- help shoot a popular video and post it to TikTok
- interview the business and feature it in local news
- ask a concrete business question like catering pricing to start a real exchange
- offer a free sample that saves the SMB time

The point is not to be cute.

The point is to give the business a reason to respond before the full sales
conversation starts.

In more credibility-sensitive B2B motions, the first touch can also be lighter:

- ask to grab a virtual coffee
- say you want to learn how they handle the problem today
- avoid sounding like `please buy from me` on touch one

That only works when the message still has a reason to exist:

- credible problem framing
- relevant market context
- a believable trust signal

## Personalization rules

Good personalization:

- business name
- neighborhood or city
- business category
- website quality or missing website
- ratings or review context if relevant
- technology context if relevant
- owner or manager name if you actually have it

Strong personalization usually means:

- real trigger
- real company context
- real business observation
- one detail that actually changes the message

Strong credibility usually means:

- real customer proof
- recognizable logos if you have them
- real reputation
- fundraising or other market proof if relevant
- founder or personal credibility when stronger logos do not exist yet
- school, prior employers, or another believable background signal when that is
  the strongest proof available

Bad personalization:

- fake flattery
- generic filler about how impressive the business is
- made-up observations

Wasted personalization usually means:

- random facts that do not change the pitch
- compliments with no sales relevance
- shallow profile scraping used as filler

Low-credibility email usually means:

- too long
- no recognizable proof
- no trust signal at all

## Follow-up cadence

Default cadence:

- first touch
- follow-up 1
- follow-up 2
- follow-up 3

That is usually `3-4` total touches.

Each follow-up should stay short and should not repeat the entire first email.

If the segment supports it, email does not need to work alone.

Parallel email and LinkedIn is often stronger than forcing one channel to carry
the whole motion.

Good follow-up moves:

- reframe the value
- offer a second helpful angle
- make the CTA smaller
- close the loop if there is no fit

Bad follow-up moves:

- repeating the first email with no new reason to reply
- adding more product detail each time
- turning the later touches into long explanations

## Channel choice

Use this rule:

- `A` email-first when the list has enough signal for real personalization
- `B` enrich-first when the list is missing owner, manager, or fit data
- `C` call-first when urgency is high and phone quality is strong

Practical defaults:

- call-first for reachable phone-heavy local service segments
- email-first when verified email and usable context are already present
- LinkedIn-first for upper-market, newer tech, and title-driven targets

## What good looks like

- subject line feels written for one business
- body is `2-3` sentences
- offer is concrete
- CTA is small
- reply feels easier than ignoring it
- inbox setup is clean enough to send safely
- buyer actually owns the outcome
- the message names the bottleneck being removed

## What bad looks like

- long email
- no useful offer
- generic SaaS language
- no segment signal
- obvious mass-blast feel
- polite replies from people with no authority

## Do not send even if the data is clean

- wrong person
- bad fit
- unqualified lead
- another teammate already owns the account
- no believable use case for the product

If the account looks right but the contact is wrong, reroute to the right buyer
instead of discarding the account.

## Measurement and weekly decisions

The first weekly warning signs are usually:

- open rate
- response rate

Practical thresholds from this repo:

- open rate below `40%` -> check deliverability and data quality first
- response rate below `0.5%` with normal opens -> change segment and buyer, then
  rewrite the campaign fully
- response rate at or above `2%` -> keep or scale the segment

When a campaign underperforms, check all four:

- list quality
- data quality
- segment quality
- deliverability

In practice, segment and data are often the first suspects.

Bad data in this repo usually means:

- bad phone
- bounced email

Do not over-read reply volume by itself.

Polite interest without authority is not the same as pipeline progress.

If replies are decent but meetings stay weak, the most likely explanations are:

- the buyer does not really want this
- the sequence needs more trust and familiarity before a meeting ask converts

In those cases, treat the sequence as a way to get known first, not only as a
direct conversion attempt.
