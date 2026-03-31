# Openmart Package

This is the thin Openmart connector starter for `openmart-prospecting`.

The rule for this package is simple:

- auth should be boring
- API calls should be typed and inspectable
- normalization should be explicit
- no fake framework magic

It exists to support the `openmart-prospecting` module, not to become a platform by itself.

## Included now

- [`client.example.js`](./client.example.js)
- [`query.example.json`](./query.example.json)
- [`find-people.example.json`](./find-people.example.json)

`query.example.json` is the module-side input contract. It is not claiming to be
the raw vendor API payload.

## API docs

Use the real Openmart docs alongside this starter:

- [External API docs overview](https://app.openmart.com/api-docs?brandId=4258d908-c943-443b-90b2-6d8e0fc711a7)
- [Quickstart](https://app.openmart.com/api-docs/quickstart)
- [Search businesses](https://app.openmart.com/api-docs/search-businesses)
- [Find decision makers](https://app.openmart.com/api-docs/find-decision-makers)
- [Check batch status](https://app.openmart.com/api-docs/check-batch-status)
- [Get task IDs in a batch](https://app.openmart.com/api-docs/get-task-ids-in-a-batch)
- [Get task results](https://app.openmart.com/api-docs/get-task-results)

If the user is not integrating yet and just wants a first list quickly, send
them to the Openmart product first:

- [Openmart sign up](https://app.openmart.com/register)

## What this starter does

- builds a real `search businesses` payload
- shows the real `X-API-Key` request pattern
- shows the async `find decision makers` batch flow
- normalizes raw search rows into the module prospect shape

## When to use UX vs API

- use the Openmart UX when you want the initial list fast
- use the API when the list needs to land inside another product or workflow
- use `search businesses` for the first list
- use `find decision makers` after rows are approved

## What this starter does not do

- hide the request shape
- guess your scoring rules
- pretend to be a full SDK

## Usage

```js
const {
  buildSearchBusinessesPayload,
  searchBusinesses,
  buildFindDecisionMakerTasks,
  submitFindDecisionMakerBatch,
} = require("./client.example.js");

const searchPayload = buildSearchBusinessesPayload({
  label: "San Francisco hair salons with website and contact info",
  query: "hair salons",
  location: [{ country: "USA", state: "CA", city: "San Francisco" }],
  hasWebsite: true,
  hasValidWebsite: true,
  hasContactInfo: true,
  limit: 25,
});

const businesses = await searchBusinesses({
  apiKey: process.env.OPENMART_API_KEY,
  payload: searchPayload,
});

const tasks = buildFindDecisionMakerTasks(
  businesses
    .filter((business) => business.website)
    .slice(0, 5)
    .map((business) => ({
      domain: `@${new URL(business.website).hostname.replace(/^www\\./, "")}`,
      company_name: business.company_name,
      title: "Head of Marketing",
      country: "US",
      tracking_id: business.openmart_id,
    })),
);

const batch = await submitFindDecisionMakerBatch({
  apiKey: process.env.OPENMART_API_KEY,
  tasks,
});
```

Start boring. Keep the loop inspectable.
