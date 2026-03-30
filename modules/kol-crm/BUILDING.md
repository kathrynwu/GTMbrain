# Building On Top Of KOL CRM

The point of this module is to give you a stable workflow contract, not a frozen product.

## Safe extensions

These are good places to customize:

- add fields for your niche or campaign needs
- add saved views and filters
- add platform-specific metadata
- add notes, tags, or campaign links
- add reminders or follow-up queues

## Be careful with these

These change the workflow meaning, so do them deliberately:

- changing the status names
- making `status` implicit instead of explicit
- removing `owner`
- removing `last_contact`
- treating `pricing` as required before negotiation starts

## Extension rule

If you add complexity, keep these invariant:

1. one row = one influencer record
2. status is human-readable
3. the next action is easy to understand
4. imports stay simple

## Suggested next layer

If you want to deepen this template, the next useful additions are:

1. notes and conversation history
2. campaign linkage
3. better views for pricing and follow-up
4. optional outbound helpers

Do not jump straight to a full agent workflow. Earn that later.
