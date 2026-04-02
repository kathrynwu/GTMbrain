# KOL CRM Template

This directory now includes a runnable browser starter:

- [`index.html`](./index.html)
- [`styles.css`](./styles.css)
- [`app.js`](./app.js)

Open [`index.html`](./index.html) directly in a browser, or serve the folder with
any static file server.

This template is part of the `GTMbrain` repo. It is not a standalone repository.

## Clone and run

```bash
git clone https://github.com/kathrynwu/GTMbrain.git
cd GTMbrain/modules/kol-crm/template
python3 -m http.server 4321
```

Then open `http://localhost:4321`.

The starter is intentionally boring:

- no build step
- no framework
- sample data seeded from the module fixture
- `localStorage` persistence
- CSV import/export
- filter, sort, create, edit, duplicate, delete

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

## What this starter is good for

- proving the workflow works before choosing a stack
- giving contributors a real reference implementation
- letting operators use the CRM immediately, then port it into their own stack later

## Current scope

This is usable now for one operator working locally in the browser.
It is intentionally scoped as a lightweight local starter.

## What to customize next

- add notes or campaign linkage
- add platform-specific metadata
- add reminders or follow-up views
- replace `localStorage` with your own backend once the workflow feels right
