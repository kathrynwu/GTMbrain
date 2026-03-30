# KOL CRM Template

This directory is the placeholder for the forkable template implementation.

For v1, the important thing is the workflow contract:

- one record per influencer
- explicit status states
- pricing and last-contact fields
- owner assignment
- import-friendly shape

The actual UI or storage layer can vary. The workflow should not.

## Minimum template contract

Any implementation should expose:

- one main influencer table or collection
- filter by platform
- filter by status
- filter by owner
- filter by whether pricing exists
- sortable follower count
- sortable pricing
- CSV import path

## Recommended views

1. all influencers
2. by platform
3. replied
4. in negotiation
5. has pricing
6. partnered

## Recommended detail fields

- name
- handle
- platform
- follower count
- niche
- owner
- status
- pricing
- last contact

## Implementation note

Keep the template implementation boring.

The workflow clarity matters more than the framework. A builder should be able to port this to Airtable, Notion, Supabase, Rails, Next.js, or a spreadsheet-backed tool without losing the shape.
