# Building On Top Of Local Business Prospecting

The point of this module is to preserve prospecting judgment in a way that is
easy to port into scripts, connectors, or CRM handoffs later.

## Safe extensions

These are good places to customize:

- vertical-specific query recipes
- custom fit signals
- richer scoring fields
- CRM-specific routing metadata
- enrichment after export

## Be careful with these

These change the workflow meaning, so do them deliberately:

- removing `source_query`
- hiding why a row was rejected
- replacing human-readable fit scoring with opaque math
- mixing search output and CRM state into one unclear field

## Extension rule

If you add complexity, keep these invariant:

1. one row = one prospect
2. the source query stays visible
3. fit scoring stays explainable
4. CRM handoff is explicit

## Suggested next layer

If you want to deepen this module, the next useful additions are:

1. query history and notes
2. saved ICP presets
3. CRM routing scripts
4. enrichment after approval

Do not jump straight to a giant connector platform. Keep the loop inspectable.
