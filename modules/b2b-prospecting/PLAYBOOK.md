# B2B Prospecting Playbook

Use this playbook when the motion is B2B or software-company prospecting rather
than local-business prospecting.

For the reusable operating backbone, read
[`../../docs/STANDARD-PRACTICE.md`](../../docs/STANDARD-PRACTICE.md).

The goal is not to collect a giant list.

The goal is to:

- define the right company set
- target the right buyer
- prioritize live buying signals
- avoid noisy replies from people who cannot buy

## Before you start

Know:

- the ICP
- the company type
- the likely buyer
- the problem you solve
- what signal would make the account timely right now

If you do not know the buyer, the safest rule in this repo is:

- software-company motions usually start around `VP`, `Director`, `Head`, or
  the owner of the KPI
- junior or entry-level contacts can create reply noise without conversion

If the account is right but the person is wrong, reroute to the right buyer.
Do not discard the whole account.

## Default ICP in this repo

Start from this pattern unless the user gives a better one:

- mid-market, early-growth B2B SaaS
- outbound team scaling from roughly `5` to `20+` reps
- ACV above about `$5K`
- outbound motion already exists
- SMB data quality matters to prospecting performance

Primary buyers:

- Head of Revenue Operations
- Head of Sales Operations
- Head of GTM Engineering
- Salesforce Administrator

Secondary buyer:

- Head of Sales, when they clearly own the problem and the buying path

Common served segments:

- general SMB software
- agencies selling to SMBs
- trades and home-services software
- medical or insurance software for small practices
- restaurant and hospitality software

If the working list is full of junior titles, that is usually a buyer mistake,
not traction.

## Example ICP and pain pattern

Use this concrete pattern when the product is sold to B2B teams that need
better local or SMB data, cleaner enrichment, or faster TAM mapping.

Best-fit companies:

- mid-market, early-growth B2B SaaS companies
- outbound team already exists
- team is scaling from roughly `5` to `20+` reps
- ACV above about `$5K`
- relies on good SMB contact data for prospecting

Common frustration:

- weak SMB coverage
- stale contact data
- too much manual cleanup
- too much work to map the full TAM

Senior roles in this example:

- Head of Revenue Operations
- Head of Sales Operations
- VP Revenue Operations

Junior roles in this example:

- RevOps analyst
- SalesOps analyst
- SDR manager

Potential middle case:

- Salesforce Administrator can be a real buyer when they truly own the workflow
  and tool decision path
- otherwise treat them as a strong influencer, not automatic authority

The strongest pain is not abstract data quality. It is operational damage from
bad data:

- reps calling wrong numbers
- lower connect rates
- fewer demos
- wasted sales time
- higher CAC
- weaker outbound ROI

How to read signal:

- meetings with senior roles are real traction
- polite replies from junior roles are useful discovery, not proof that the ICP
  is working

## Buyer and authority rules

Primary budget or purchase authority usually sits with:

- Head of Revenue Operations
- Head of Sales Operations
- Head of GTM Engineering
- Salesforce Administrator

Influencers often include:

- CRO
- VP Sales
- VP Revenue Operations
- SalesOps or RevOps team members

## What good B2B prospecting looks like

- company fits the ICP
- buyer has authority or clearly owns the KPI
- one visible trigger suggests urgency
- data is good enough to hand off
- the row is usable for enrichment, email, or calling

## Trigger rules

The strongest signals are product-specific.

Examples that often matter for software-company prospecting:

- hiring
- outbound ramp
- CRM migration or cleanup
- team build-out
- funding
- expansion

Use the signal that most directly implies need for the product.

Examples:

- recruiting agency -> hiring
- sales-data workflow -> CRM cleanup or outbound ramp

`High-priority` means:

- there is a real signal they need the product now, or
- there is a warm intro path

## Source rules

`Apollo` is the default starting point for software-company prospecting.

Add another database only when it clearly improves contact coverage for the
exact market you need:

- better enterprise coverage
- better regional coverage
- better contact coverage for the same segment

Do not turn source choice into a giant tool-comparison project.

## Source and filter loop

1. start broad enough to prove the market exists
2. inspect the first page of results
3. tighten by company fit, buyer fit, and signal
4. remove obvious junk
5. preserve source context before handoff

Do not hide weak buyer selection behind high reply volume.

If junior contacts reply with polite interest, that is not proof that the
segment is working.

## Discovery and qualification notes

Useful discovery opener:

`Our process includes two parts: first, a discovery call to see if we're a mutual fit. Next step is a customized demo. Does that sound good?`

Useful questions:

- How are you generating leads today?
- Walk me through the process.
- What is the toughest part of the process for you?
- How long has that been going on?
- How does it affect your goals?
- What goal are you trying to hit?
- What have you done to solve it?
- Why now?
- Are there any other decision-makers involved?
- How quickly are you ready to improve this?

## What to preserve

Always keep:

- company name
- website or domain
- contact name
- buyer title
- source
- source query or list name
- trigger or why-now note
- company summary
- one-line context for outreach

## Wrong-segment warning

Common failure pattern:

- message lots of entry-level or junior people
- get responses
- get no conversion because they do not own the purchase

That is not the ICP working. It is a noisy buyer path.

The fix is:

- choose a better buyer
- tighten the segment
- rewrite the campaign around that buyer

## Handoff rule

This module is done when:

- the company is approved
- the buyer is plausible
- the row has a real why-now signal or clear ICP fit
- the account passes the qualification lens:
  - `Budget`
  - `Authority`
  - `Needs`
  - `Timing`
- the next step is obvious:
  - enrich
  - email
  - call
