# KOL CRM

Track influencer sourcing, outreach, pricing, owner, and status.

## Module summary

- **Surface:** `Template`
- **Audience:** founder, growth operator, partnerships owner, RevOps builder
- **Primary action:** fork the workflow and adapt it to your own influencer pipeline
- **Status:** first release

## What this module covers

- YouTube + Twitter influencer tracking
- import CSV
- manual add flow
- pricing tracking
- last-contact tracking
- owner assignment
- status pipeline

## Core workflow

1. Source influencers.
2. Import or add them.
3. Qualify them by niche and reach.
4. Track contact status.
5. Track pricing and follow-up.
6. Move them toward partnership or close them out.

## Status model

- `Not Contacted`
- `Contacted`
- `Replied`
- `In Negotiation`
- `Partnered`
- `Closed`

## Included now

- [`module.json`](./module.json)
- [`schema/influencer.schema.json`](./schema/influencer.schema.json)
- [`WORKFLOW.md`](./WORKFLOW.md)
- [`BUILDING.md`](./BUILDING.md)
- [`sample-data/influencers.csv`](./sample-data/influencers.csv)
- [`template/`](./template/)

## Not included yet

- sending email
- deliverability logic
- auto-negotiation
- agent wrapper

## Notes

This module is template-first on purpose. The job is to make the workflow easy to copy before layering on more automation.

## Build on top of this

If you want to adapt this CRM, start in this order:

1. Read [`WORKFLOW.md`](./WORKFLOW.md) to understand the status logic.
2. Read [`schema/influencer.schema.json`](./schema/influencer.schema.json) to see the required record shape.
3. Read [`BUILDING.md`](./BUILDING.md) to understand what can change safely.
4. Use [`sample-data/influencers.csv`](./sample-data/influencers.csv) as your first import fixture.

The important thing is not the exact UI. It is the workflow contract.
