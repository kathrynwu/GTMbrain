# Openmart Prospecting

Define ICPs, build lists, and document repeatable prospecting workflows.

## Module summary

- **Surfaces:** `Playbook`, `Connector`
- **Audience:** growth engineer, RevOps builder, outbound operator
- **Primary action:** read the playbook first
- **Status:** first release

## What this module covers

- ICP definition workflow
- query loop for broad-to-tight search
- real ICP patterns and approval logic
- list quality rules
- normalized prospect export shape
- sample prospect output
- thin connector starter for boring API calls

## Included now

- [`PLAYBOOK.md`](./PLAYBOOK.md)
- [`STANDARD-PRACTICE.md`](./STANDARD-PRACTICE.md)
- [`LEAD-SOURCES.md`](./LEAD-SOURCES.md)
- [`QUERY-RECIPES.md`](./QUERY-RECIPES.md)
- [`INTEGRATIONS.md`](./INTEGRATIONS.md)
- [`SELLING-LOCAL-BUSINESSES.md`](./SELLING-LOCAL-BUSINESSES.md)
- [`BUILDING.md`](./BUILDING.md)
- [`schema/prospect.schema.json`](./schema/prospect.schema.json)
- [`sample-data/prospects.csv`](./sample-data/prospects.csv)
- connector starter in [`../../packages/openmart/`](../../packages/openmart/)

## Source playbooks

This module is grounded in these Openmart posts:

- [How to build a high-quality SMB prospect list](https://www.openmart.com/blogs/how-to-build-a-high-quality-smb-prospect-list)
- [How to sell to local business? (Part 1)](https://www.openmart.com/blogs/how-to-sell-to-local-business)
- [How to sell to local businesses? (Part 2)](https://www.openmart.com/blogs/how-to-sell-to-local-businesses-part-2)

The first post is the main list-building source.

The two local-business sales posts are the downstream outbound context for what
happens after a clean prospect list is handed off.

The API docs are here:

- [Openmart external API docs](https://app.openmart.com/api-docs?brandId=4258d908-c943-443b-90b2-6d8e0fc711a7)
- [Quickstart](https://app.openmart.com/api-docs/quickstart)
- [Search businesses](https://app.openmart.com/api-docs/search-businesses)
- [Find decision makers](https://app.openmart.com/api-docs/find-decision-makers)

## Start paths

There are two valid ways to start:

### 1. Use Openmart's UX

Use this when the goal is:

- get an initial local-business list quickly
- validate a segment before building anything
- work directly in the Openmart product first

Start here:

- [Openmart sign up](https://app.openmart.com/register)

### 2. Use the Openmart API

Use this when the goal is:

- push the initial list into another sales tool
- enrich records inside your own CRM or internal app
- automate the search -> approval -> enrichment flow

Start here:

- [Quickstart](https://app.openmart.com/api-docs/quickstart)
- [Search businesses](https://app.openmart.com/api-docs/search-businesses)

## Not included yet

- stable SDK
- CRM sync automation
- agent wrapper

## Try this module

If you want the shortest path:

1. Read [`PLAYBOOK.md`](./PLAYBOOK.md).
2. Read [`STANDARD-PRACTICE.md`](./STANDARD-PRACTICE.md) if you want the
   broader operating model around list ops.
3. Read [`LEAD-SOURCES.md`](./LEAD-SOURCES.md) if the real question is where
   the list should come from and how much cleanup each source creates.
4. Decide whether you want the Openmart UX or the API.
5. If you want the fastest first list, use [Openmart sign up](https://app.openmart.com/register).
6. If you want the list inside your own tool, start with the API docs and [`../../packages/openmart/`](../../packages/openmart/).
7. Look at [`QUERY-RECIPES.md`](./QUERY-RECIPES.md) and pick the nearest use case.
8. Read [`INTEGRATIONS.md`](./INTEGRATIONS.md) if you want to plug Openmart into a sales tool or internal enrichment app.
9. Read [`SELLING-LOCAL-BUSINESSES.md`](./SELLING-LOCAL-BUSINESSES.md) if the goal is outbound to local businesses.
10. Use [`sample-data/prospects.csv`](./sample-data/prospects.csv) as the normalized output shape.

## What comes next

The normal next step after this module is one of:

- [`../local-list-enriching/`](../local-list-enriching/) if the list is good
  enough to enrich
- [`../local-emailing/`](../local-emailing/) if the list is already clean and
  email-ready
- [`../cold-call/`](../cold-call/) if phone-first outbound is the right motion

## Real usage patterns

This module now includes real ICP shapes and filtering logic for:

- SMB SaaS selling into local operators
- marketplaces pulling local supply
- lead gen agencies and outbound teams
- vertical SaaS with stricter niche targeting
- growth teams doing fast geo-based GTM tests

It also captures the common reality:

1. start broad
2. inspect the results
3. tighten non-chain, website, rating, or contactability
4. export
5. QA or enrich

## Notes

This module is playbook-first on purpose.

The hard part in prospecting is usually not the fetch call. It is the judgment:

- what counts as a good ICP
- when a query is too broad or too narrow
- what should be rejected before it hits the CRM
- how the cleaned list should flow into local-business selling

The connector exists to support that workflow, not replace it.
