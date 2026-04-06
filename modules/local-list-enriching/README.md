# Local SMB Enrichment

Capture local SMB enrichment logic, approval-first filters, and CRM-ready
field mapping.

Use this when you sell to local SMBs.

## Summary

- **Surface:** `Playbook`
- **Audience:** growth engineer, RevOps builder, outbound operator
- **Primary action:** read the playbook
- **Status:** first release

## Start here

- [`../../docs/STANDARD-PRACTICE.md`](../../docs/STANDARD-PRACTICE.md)
- [`PLAYBOOK.md`](./PLAYBOOK.md)
- [`FIELD-MAPPING.md`](./FIELD-MAPPING.md)

## Focus

- enrich approved local SMB rows, not the full raw list
- find owner, general manager, and decision-maker contact paths
- keep enrichment inspectable
- preserve workflow fields before CRM sync
- filter with business quality signals before spending credits

## What this playbook covers

- local SMB enrichment specifically
- what fields matter most for local SMB outbound
- how to filter based on location count, website, reviews, and tech signals
- how email verification should gate outbound readiness
- how to separate raw search data from enriched decision-maker data
- how to sync approved rows into CRM or an internal tool without losing context

If a software company is selling to another software company, use
[`../b2b-enriching/`](../b2b-enriching/) instead.

## Source material

- internal Openmart outbound and enrichment guidance
- patterns from Openmart customers using enrichment inside Clay, CRM, and sales
  tools

## What comes next

The normal next step after this playbook is:

- [`../local-emailing/`](../local-emailing/) if the row is email-ready
- [`../cold-call/`](../cold-call/) if the row is phone-ready
- back to review if the row still lacks a clear contact path
