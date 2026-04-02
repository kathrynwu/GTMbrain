# Local Business Enrichment Field Mapping

Use this as the stable handoff shape between search, enrichment, and CRM sync.

## Input fields

Preserve from the search layer:

- `company_name`
- `website`
- `city`
- `state`
- `category`
- `source_query`
- `fit_score`
- `routing_status`

## Enrichment fields

Add from the enrichment layer:

- `owner_name`
- `general_manager_name`
- `decision_maker_email`
- `personal_email`
- `tech_stack`
- `location_count`
- `google_review_rating`

## Sync rule

Only sync rows when:

- the row passed approval
- at least one real contact path exists
- the row still carries its source and routing context

## Do not lose

Do not drop these when sending to CRM:

- why the row was selected
- where it came from
- whether it is approved or still under review

That context matters more than one extra enrichment field.
