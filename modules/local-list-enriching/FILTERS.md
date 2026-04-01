# Local List Enriching Filters

These are the first filters to apply before deeper enrichment.

## Primary filters

- location count
- has website
- Google review rating
- technology signals

## Typical use

### Location count

Use this when:

- you only want single-location SMBs
- you want to exclude larger multi-location chains
- you want to focus on owner-operated businesses

### Website presence

Use this when:

- the motion depends on digital maturity
- you want to exclude businesses with no usable web presence
- you need a clean domain for later contact and tech checks

### Google review rating

Use this when:

- reputation quality matters to the offer
- you want to separate stronger operators from weak ones
- you need a lightweight quality signal before outreach

### Technology signals

Use this when:

- the pitch depends on the current stack
- you want to route prospects by tool usage
- you want to build a Clay or CRM enrichment workflow around stack fit

## Rule

Use these filters to reduce waste before enrichment.

Do not stack every filter up front unless the segment is already proven.

If a row is already marked `unqualified`, stop here.

`Unqualified` means the lead should not be contacted, so it should not move into
the normal enrichment queue.
