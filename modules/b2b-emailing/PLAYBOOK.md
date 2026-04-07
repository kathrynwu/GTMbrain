# B2B Emailing Playbook

Use this playbook when the motion is software-company or B2B outbound and the
list is clear enough to send short, relevant emails.

If the motion is local-business outbound, use
[`../local-emailing/`](../local-emailing/).

The goal is not to blast a generic campaign.

The goal is to:

- solve a visible workflow problem
- tie the message to the right buyer
- start a real conversation
- create a clean handoff to a meeting or follow-up call

## Core rules

- keep the cold email very short, usually `2-3` sentences
- keep the subject line short and relevant
- lead with the problem solved, not abstract benefit language
- do not fake personalization
- optimize for replies and meetings, not vanity open rates

Useful defaults:

- stay under about `50` words when possible
- subject lines often work best in the `2-4` word range
- assume the buyer will skim this on a phone first

## What buyers care about

Common B2B outcomes in this repo:

- pipeline efficiency
- time saved
- better connect quality
- cleaner data and fewer bounced emails
- faster response time for KPI owners

If the email does not clearly connect to one of those, it is probably weak.

## Before you write

Know:

- the segment
- the buyer
- the problem you think they have
- the why-now trigger
- the personalization fields you actually have
- the upfront offer

Make sure the buyer can actually move the deal.

Examples:

- software-company motions often need `VP`, `Director`, `Head`, or the owner
  of the KPI
- in this repo, strong default buyers are RevOps, SalesOps, GTM Engineering, or
  Salesforce Admin
- Head of Sales can matter, but is usually secondary unless they clearly own
  the problem
- junior replies can create noise without conversion
- customer-facing workflow tools should often go to the person who owns the
  outcome KPI, not a random ops title

If you target the wrong person, you can get polite replies with no buying
authority. That is noise, not traction.

Pressure-test the account before scaling the sequence:

- `Budget`: do they already spend money or resources on the problem
- `Authority`: is the buyer actually part of the decision path
- `Needs`: is the pain real enough to justify change
- `Timing`: is there a live reason they would move now

If the list is weak, fix the list before writing more copy.

If the inbox setup is weak, fix that before scaling the campaign.

## Repo-native example: data vendor -> mid-market SaaS RevOps

Use this example when the product improves SMB data quality, enrichment, TAM
mapping, or outbound workflow speed.

Senior roles:

- Head of Revenue Operations
- Head of Sales Operations
- VP Revenue Operations

Junior roles:

- RevOps analyst
- SalesOps analyst
- SDR manager

Special case:

- Salesforce Administrator can be a real buyer when they truly own the system
  and workflow decision path

Message logic:

- write the real campaign to the senior buyer or true system owner
- use junior replies to learn vocabulary and pain, not to declare victory
- if only junior titles respond, pressure-test whether the buyer is wrong

Strong senior angle:

- less manual cleanup
- better routed-account quality
- better connect rates and rep productivity

Weak junior angle:

- generic curiosity about the tool
- workflow interest with no buying path

## Default B2B patterns

Use these as the default pattern choices unless there is a strong reason to do
something else.

- B2B software: trigger-based opener
- enterprise or legacy: observation plus proof
- trust-heavy sale: credibility plus curiosity before the direct ask

Why:

- B2B buyers often have clearer live signals such as hiring, expansion,
  funding, CRM changes, team build-out, or workflow changes
- larger accounts usually need a more credible frame tied to a visible
  operational burden and one proof point

## Problem solved beats benefits

The strongest B2B messages in this repo describe:

- the exact work being removed
- the workflow problem being fixed
- one result that matters

That is usually stronger than generic language about efficiency or growth.

## Personalization rules

Good personalization:

- company name
- buyer name
- title
- relevant trigger
- current tooling if known
- one real business observation

Strong personalization usually means:

- a real trigger
- real company context
- one detail that changes the message

Strong credibility usually means:

- recognizable customers
- a believable reputation signal
- fundraising or market proof
- founder or personal credibility when stronger logos do not exist yet
- school, prior employers, or another believable background signal when that is
  the strongest proof available

Bad personalization:

- fake flattery
- generic filler
- made-up observations

Low-credibility email usually means:

- too long
- no recognizable proof
- no trust signal

## Example patterns

These are pattern examples, not scripts to spray unchanged.

### Pattern 1: Trigger-based opener

Good when the account shows a live signal such as hiring, expansion, or a new
initiative.

Subject: `{company_name} hiring`

Body:

`Hi {name}, noticed {company_name} is hiring for {role}. Have you already solved for {outcome}? We helped {peer_company} improve {kpi} in {timeframe}. Worth checking whether that is relevant for you too?`

### Pattern 2: Observation plus relief

Good when one visible account fact already implies the operational pain.

Subject: `{short_observation}`

Body:

`Hi {name}, saw that {observation}. I imagine {operational_burden} is creating extra manual work. We help teams remove {specific_work_removed}, which usually leads to {specific_result}. Open to a quick compare?`

### Pattern 3: Credibility-first opener

Use this when the sale needs more trust before a direct ask will land.

Body:

`Hi {name}, I spend a lot of time talking with teams dealing with {problem}, and I wanted to learn how your team handles it today. Open to a quick virtual coffee sometime next week?`

This works best when you can support it with:

- recognizable customers
- strong market reputation
- fundraising or equivalent proof
- founder credibility when customer proof is still early
- personal background when that is the strongest available trust signal

## Follow-up cadence

Default cadence:

- first touch
- follow-up 1
- follow-up 2
- follow-up 3

That is usually `3-4` total touches.

Each follow-up should stay short and should not repeat the entire first email.

Good follow-up moves:

- reframe the value
- add a different proof point
- make the CTA smaller
- close the loop if there is no fit

Bad follow-up moves:

- repeating the first email with no new reason to reply
- adding more product detail each time
- turning the later touches into long explanations

## Channel choice

Use this rule:

- `A` email-first when the list has enough signal for real personalization
- `B` enrich-first when the list is missing fit, buyer, or context data
- `C` call-first when urgency is high and phone quality is strong

Practical defaults:

- email-first when verified email and usable context are already present
- call-first for high-urgency segments where the buyer can be reached by phone
- LinkedIn can run in parallel when the title path is strong

## Deliverability setup

Treat deliverability as part of the playbook, not a separate ops footnote.

Preferred tools in this repo:

- verification: `ZeroBounce`
- warm-up: `WarmupInbox`
- sequencing: `Apollo`

Before volume goes out:

- buy the sending domain
- prefer a `.com` when practical
- configure SPF
- configure DKIM
- configure DMARC
- create the sending inboxes, usually `1-2` at the start
- warm them up before real campaigns

Warm-up rules:

- start with low daily volume
- a reasonable early ceiling is around `50` sends per inbox per day
- warm inboxes gradually
- do not jump to high volume on a fresh setup

Do not send until the row has:

- a usable email
- verification status
- what the company does
- enough context to personalize credibly
- the right buyer

If the row also has a good LinkedIn path, it is often better to run email and
LinkedIn in parallel instead of forcing one channel to do all the work.

## What good looks like

- subject line feels written for one company
- body is `2-3` sentences
- the buyer actually owns the outcome
- the message names the bottleneck being removed
- proof is specific enough to feel credible
- the CTA is small

## What bad looks like

- long email
- generic SaaS language
- no trigger
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

Do not over-read reply volume by itself.

Polite interest without authority is not the same as pipeline progress.

## Weekly review loop

Review the campaign in this order:

1. open rate
2. response rate
3. meetings
4. pipeline
5. segment notes
6. customer notes

Count a response as positive only when the buyer:

- asks for a meeting
- asks for more information with real intent
- forwards internally to the right person
- confirms the pain is real and wants a follow-up

Do not count this as positive:

- polite interest with no authority
- curiosity from a junior title
- vague replies that do not move the process forward

## Customer notes

Customer notes should capture what you actually heard:

- buyer title
- whether they have purchase authority
- exact objections
- current tool or vendor
- current process
- what part of the process is hardest
- how long the problem has existed
- how it affects their goals
- what they have already tried
- why now
- other decision-makers involved
- timeline or urgency

Do not reduce the note to your own biased summary.
