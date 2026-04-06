# KOL CRM

Track influencer sourcing, outreach, pricing, owner, and status.

## Summary

- **Surface:** `Template`
- **Audience:** founder, growth operator, partnerships owner, RevOps builder
- **Primary action:** fork or clone `GTMbrain`, then adapt this starter to your
  own influencer pipeline
- **Status:** first release

## What this starter covers

- YouTube + Twitter influencer tracking
- import CSV
- manual add flow
- pricing tracking
- last-contact tracking
- owner assignment
- status pipeline

## Core workflow

1. source influencers
2. import or add them
3. qualify them by niche and reach
4. track contact status
5. track pricing and follow-up
6. move them toward partnership or close them out

## Status model

- `Not Contacted`
- `Contacted`
- `Replied`
- `In Negotiation`
- `Partnered`
- `Closed`

## Included now

- metadata file: [`module.json`](./module.json)
- [`schema/influencer.schema.json`](./schema/influencer.schema.json)
- [`WORKFLOW.md`](./WORKFLOW.md)
- [`sample-data/influencers.csv`](./sample-data/influencers.csv)
- [`template/`](./template/)
- runnable starter inside [`template/index.html`](./template/index.html)

## Try it locally

This starter lives inside `GTMbrain`, so the action is to fork or clone the
repo, then start here.

From your machine:

```bash
git clone https://github.com/kathrynwu/GTMbrain.git
cd GTMbrain/modules/kol-crm/template
python3 -m http.server 4321
```

Then open `http://localhost:4321`.

You can also open [`template/index.html`](./template/index.html) directly in a
browser if you want the fastest path.

## Not included yet

- sending email
- deliverability logic
- auto-negotiation
- agent wrapper

## Notes

This starter is template-first on purpose. The job is to make the workflow easy
to copy before layering on more automation.

Today this is usable as a single-user local CRM starter. It is not yet a synced
team product.

If you describe this starter publicly, the clean wording is:

> Fork or clone `GTMbrain`, then start with `modules/kol-crm/`.

## Safe extensions

These are good places to customize:

- add fields for your niche or campaign needs
- add saved views and filters
- add platform-specific metadata
- add notes, tags, or campaign links
- add reminders or follow-up queues

Be careful with:

- changing the status names
- making `status` implicit instead of explicit
- removing `owner`
- removing `last_contact`
- treating `pricing` as required before negotiation starts

If you add complexity, keep these invariant:

1. one row = one influencer record
2. status is human-readable
3. the next action is easy to understand
4. imports stay simple

## Build on top of this

If you want to adapt this CRM, start in this order:

1. Read [`WORKFLOW.md`](./WORKFLOW.md) to understand the status logic.
2. Read [`schema/influencer.schema.json`](./schema/influencer.schema.json) to
   see the required record shape.
3. Use [`sample-data/influencers.csv`](./sample-data/influencers.csv) as your
   first import fixture.
4. Open [`template/index.html`](./template/index.html) to see the reference
   implementation.

The important thing is not the exact UI. It is the workflow contract.
