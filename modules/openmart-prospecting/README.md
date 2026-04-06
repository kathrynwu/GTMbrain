# Local Business Prospecting

Define ICPs, build local-business lists, and document repeatable local-business
prospecting workflows.

## Summary

- **Surfaces:** `Playbook`, `Connector`
- **Audience:** growth engineer, RevOps builder, outbound operator
- **Primary action:** read the playbook first
- **Status:** first release

## What this playbook covers

- local-business prospecting specifically
- ICP definition workflow
- query loop for broad-to-tight search
- source choice for local-business motions
- real ICP patterns and approval logic
- list quality rules
- downstream outbound context after the list is clean
- normalized prospect export shape
- thin connector starter for boring API calls

If the motion is software-company or B2B prospecting, use
[`../b2b-prospecting/`](../b2b-prospecting/) instead.

## Included now

- [`PLAYBOOK.md`](./PLAYBOOK.md)
- [`../../docs/STANDARD-PRACTICE.md`](../../docs/STANDARD-PRACTICE.md)
- [`QUERY-RECIPES.md`](./QUERY-RECIPES.md)
- [`INTEGRATIONS.md`](./INTEGRATIONS.md)
- [`schema/prospect.schema.json`](./schema/prospect.schema.json)
- [`sample-data/prospects.csv`](./sample-data/prospects.csv)
- connector starter in [`../../packages/openmart/`](../../packages/openmart/)

## Source playbooks

This playbook is grounded in these Openmart posts:

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

## Try this playbook

If you want the shortest path:

1. Read [`PLAYBOOK.md`](./PLAYBOOK.md).
2. Read [`../../docs/STANDARD-PRACTICE.md`](../../docs/STANDARD-PRACTICE.md)
   for the generic list-ops backbone.
3. Decide whether you want the Openmart UX or the API.
4. If you want the fastest first list, use
   [Openmart sign up](https://app.openmart.com/register).
5. If you want the list inside your own tool, start with the API docs and
   [`../../packages/openmart/`](../../packages/openmart/).
6. Look at [`QUERY-RECIPES.md`](./QUERY-RECIPES.md) and pick the nearest use
   case.
7. Read [`INTEGRATIONS.md`](./INTEGRATIONS.md) if you want to plug Openmart
   into a sales tool or internal enrichment app.
8. Use [`sample-data/prospects.csv`](./sample-data/prospects.csv) as the
   normalized output shape.

## Layering rule

Keep these layers separate:

- [`../../docs/STANDARD-PRACTICE.md`](../../docs/STANDARD-PRACTICE.md) =
  generic prospecting and list-ops mechanics
- [`PLAYBOOK.md`](./PLAYBOOK.md) = local-business judgment, source choice,
  quality rules, and downstream outbound context

## What comes next

The normal next step after this playbook is one of:

- [`../local-list-enriching/`](../local-list-enriching/) if the list is good
  enough to enrich
- [`../local-emailing/`](../local-emailing/) if the list is already clean and
  email-ready
- [`../cold-call/`](../cold-call/) if phone-first outbound is the right motion
