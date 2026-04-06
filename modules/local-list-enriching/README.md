# Local Business Enrichment

Capture local-business enrichment logic, approval-first filters, and CRM-ready
field mapping.

## Summary

- **Surface:** `Playbook`
- **Audience:** growth engineer, RevOps builder, outbound operator
- **Primary action:** read the playbook
- **Status:** first release

## Start here

- [`../openmart-prospecting/STANDARD-PRACTICE.md`](../openmart-prospecting/STANDARD-PRACTICE.md)
- [`PLAYBOOK.md`](./PLAYBOOK.md)
- [`FIELD-MAPPING.md`](./FIELD-MAPPING.md)
- [`FILTERS.md`](./FILTERS.md)
- [`EMAIL-VERIFICATION.md`](./EMAIL-VERIFICATION.md)

## Focus

- enrich approved local-business rows, not the full raw list
- find owner, general manager, and decision-maker contact paths
- keep enrichment inspectable
- preserve workflow fields before CRM sync
- filter with business quality signals before spending credits

## What this playbook covers

- local-business enrichment specifically
- what fields matter most for local-business outbound
- how to filter based on location count, website, reviews, and tech signals
- how email verification should gate outbound readiness
- how to separate raw search data from enriched decision-maker data
- how to sync approved rows into CRM or an internal tool without losing context

If the motion is software-company or B2B enrichment, use
[`../b2b-enriching/`](../b2b-enriching/) instead.

## Source material

- internal Openmart outbound and enrichment guidance
- patterns from Openmart customers using enrichment inside Clay, CRM, and sales tools

## What comes next

The normal next step after this playbook is:

- [`../local-emailing/`](../local-emailing/) if the row is email-ready
- [`../cold-call/`](../cold-call/) if the row is phone-ready
- back to review if the row still lacks a clear contact path
