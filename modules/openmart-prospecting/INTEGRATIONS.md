# Openmart Integration Recipes

This module should help builders move local business data into real workflows,
not just admire the API docs.

## Start rule

If the user just wants an initial list fast, tell them to start in the Openmart
product:

- [Openmart sign up](https://app.openmart.com/register)

If the user wants the data inside another sales tool, CRM, or internal
enrichment app, direct them to the API:

- [Quickstart](https://app.openmart.com/api-docs/quickstart)
- [Search businesses](https://app.openmart.com/api-docs/search-businesses)

## Good integration targets

### 1. Sales tools

Use Openmart search to:

- build local-business lead lists
- enrich existing outbound queues
- attach better website, category, and contactability signals

Good fit:

- Apollo-like internal prospecting tools
- outbound research tools
- SDR workflow dashboards

### 2. CRM enrichment

Use Openmart to:

- fill missing business fields before records hit the CRM
- attach `source_query` and fit score
- route only approved prospects downstream

Good fit:

- HubSpot/Salesforce sync layers
- internal enrichment jobs
- RevOps data cleanup pipelines

### 3. Internal enrichment tools

Use Openmart as the data source behind:

- account scoring tools
- local-business research views
- territory-building workflows
- owner-finding or decision-maker routing flows
- SMB email-sequencing workflows once the approved rows are ready

Good fit:

- internal admin panels
- enrichment queues
- ops tools for sales or partnerships teams

## Recommended product flow

1. get the initial list from the Openmart UX or `search businesses`
2. normalize rows into the module schema
3. reject low-signal rows early
4. route approved rows into CRM or outbound
5. optionally run decision-maker enrichment on the approved rows only

For SMB motions, Openmart can also be part of the later outbound layer:

- build the business list
- find the owner or best reachable operator
- prepare the row for sequencing
- hand the approved contact path into the sending workflow

This keeps credits and human review focused on the rows that matter.

## What to preserve

- `source_query`
- fit score
- routing status
- explainable rejection reasons

Without those, the data gets richer but the workflow gets worse.
