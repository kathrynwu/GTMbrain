# Openmart Prospecting Query Recipes

Use these as workflow shapes, not universal laws.

The point is to make the search loop legible.

Before choosing a recipe, collect:

- location range
- industry or business type
- must-have filters
- obvious rejection rules

## Recipe 1: Geographic Seed Query

Use when:

- you know the market
- you know the city or state
- you need to prove there is enough inventory

Inputs:

- geography
- broad category
- 1-2 required contact signals

Example shape:

> Home service businesses in Dallas with a website and phone number.

Good first move:

- inspect whether the category is too broad before exporting

## Recipe 2: Category Tightening Query

Use when:

- the broad results contain too many adjacent businesses
- you need a cleaner list before handoff

Inputs:

- geography
- primary category
- subcategory or business type
- one quality signal

Example shape:

> Roofing companies in Dallas with a working website.

Good first move:

- compare the first 20 rows against the seed query

## Recipe 3: Adjacency Expansion Query

Use when:

- the clean list is too small
- the core category is right but too narrow

Inputs:

- original ICP
- one adjacent category
- same geography

Example shape:

> Expand from roofing to roofing + gutter + siding in the same metro.

Good first move:

- label the expanded query separately so `source_query` stays truthful

## Recipe 4: Contactability Filter Query

Use when:

- raw fit is okay
- outreach feasibility is the real bottleneck

Inputs:

- base ICP
- website present
- phone present
- owner name present if relevant

Example shape:

> Texas dental practices with a website, phone, and visible owner/operator data.

Good first move:

- treat missing contact fields as explicit reject reasons

## Recipe 5: CRM Handoff Query

Use when:

- you are done searching
- you need a smaller batch for outbound

Inputs:

- a stable query
- review owner
- a fit threshold

Example rule:

- export only rows scored `4` or `5`
- mark them `Approved`
- then route them into the CRM

## Notes

If a recipe starts feeling too custom, split it into:

- core ICP
- filter rule
- rejection rule

That makes it easier to port into code later.
