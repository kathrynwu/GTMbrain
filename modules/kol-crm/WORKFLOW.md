# KOL CRM Workflow

This module tracks one primary object: an influencer record.

The record moves through a simple partnership pipeline.

## Core states

### `Not Contacted`
Record exists, but no outreach has happened yet.

### `Contacted`
An outreach attempt has been made.

### `Replied`
The influencer replied. This is the first high-signal state.

### `In Negotiation`
Pricing, terms, or fit are being discussed.

### `Partnered`
The collaboration is live or agreed.

### `Closed`
The opportunity is done, paused, or not moving forward.

## Expected transitions

```text
Not Contacted -> Contacted -> Replied -> In Negotiation -> Partnered
                                                 \
                                                  -> Closed
Contacted --------------------------------------> Closed
```

`Closed` is terminal for v1.

## Workflow rules

- Every record should have an owner.
- `status` should always be explicit, never inferred from empty fields.
- `pricing` is optional until a real quote exists.
- `last_contact` should change when outreach or negotiation updates happen.
- A builder can add more fields, but the status model should remain readable.

## High-signal views

- all influencers
- needs first outreach
- replied
- has pricing
- in negotiation
- partnered

## What not to bake into v1

- automatic state transitions
- deliverability logic
- email sending
- negotiation automation
