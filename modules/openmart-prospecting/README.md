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
- list quality rules
- normalized prospect export shape
- sample prospect output
- thin connector starter for boring API calls

## Included now

- [`PLAYBOOK.md`](./PLAYBOOK.md)
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
2. Decide whether you want the Openmart UX or the API.
3. If you want the fastest first list, use [Openmart sign up](https://app.openmart.com/register).
4. If you want the list inside your own tool, start with the API docs and [`../../packages/openmart/`](../../packages/openmart/).
5. Look at [`QUERY-RECIPES.md`](./QUERY-RECIPES.md) and pick the nearest use case.
6. Read [`INTEGRATIONS.md`](./INTEGRATIONS.md) if you want to plug Openmart into a sales tool or internal enrichment app.
7. Read [`SELLING-LOCAL-BUSINESSES.md`](./SELLING-LOCAL-BUSINESSES.md) if the goal is outbound to local businesses.
8. Use [`sample-data/prospects.csv`](./sample-data/prospects.csv) as the normalized output shape.

## Notes

This module is playbook-first on purpose.

The hard part in prospecting is usually not the fetch call. It is the judgment:

- what counts as a good ICP
- when a query is too broad or too narrow
- what should be rejected before it hits the CRM
- how the cleaned list should flow into local-business selling

The connector exists to support that workflow, not replace it.
