# GTMbrain

Forkable GTM modules for internal tooling.

`GTMbrain` is a registry of GTM workflow modules. Each module can include one or more of:

- `Template`: a runnable starter inside the repo that you can fork or clone and adapt
- `Playbook`: the operating judgment behind the workflow
- `Connector`: a thin package for an external service
- `Skill`: optional agent wrapper, only when the workflow is stable

The first serious module is `KOL CRM`.

## Why trust this

`GTMbrain` comes from operating experience building Openmart (YC W24) and spending a lot of time inside GTM, outbound, prospecting, and sales-tool workflows.

The goal is not to publish abstract growth theory. The goal is to capture workflow shapes that are actually useful to builders.

## Why this repo exists

Most GTM repos fall into one of three bad buckets:

- random docs
- random prompts
- random automations

This repo is trying to be more useful than that.

The unit of value is a **module**. A builder should land here, understand the workflow in one line, and know exactly what to do next:

- fork or clone the repo
- start in the right module
- read it
- call it
- maybe run it through an agent later

## Start here

If you only look at one thing, start with:

- [`modules/kol-crm/`](./modules/kol-crm/)

That is the first complete module shape:

- template-first
- sample data included
- schema included
- workflow contract included
- extension guide included
- runnable browser starter included
- clear workflow states
- easy to understand without platform context

## Quick start

Clone the repo:

```bash
git clone https://github.com/kathrynwu/GTMbrain.git
cd GTMbrain
```

Try the CRM starter:

```bash
cd modules/kol-crm/template
python3 -m http.server 4321
```

Then open `http://localhost:4321`.

If you do not want to run a local server, you can also open
[`modules/kol-crm/template/index.html`](./modules/kol-crm/template/index.html)
directly in a browser.

## What "forkable" means here

`kol-crm` is not a standalone repo yet. It lives inside `GTMbrain`.

So the clear action is:

1. fork or clone `GTMbrain`
2. start in [`modules/kol-crm/`](./modules/kol-crm/)
3. run the starter in [`modules/kol-crm/template/`](./modules/kol-crm/template/)
4. adapt the workflow, schema, and UI to your own stack

## Module catalog

| Module | Job | Surfaces | Primary action | Status |
|--------|-----|----------|----------------|--------|
| [`kol-crm`](./modules/kol-crm/) | Track influencer sourcing, outreach, pricing, owner, and status | `Template` | Fork repo, start here | First release |
| [`openmart-prospecting`](./modules/openmart-prospecting/) | Define ICPs, build lists, and document prospecting workflows | `Playbook`, `Connector` | Read playbook | Coming next |
| [`seo`](./modules/seo/) | Capture repeatable SEO workflow judgment and briefs | `Playbook` | Read playbook | Planned |
| [`cold-call`](./modules/cold-call/) | Capture scripts, review criteria, and outbound heuristics | `Playbook` | Read playbook | Planned |

## Repo shape

```text
modules/
  kol-crm/
  openmart-prospecting/
  seo/
  cold-call/
packages/
  openmart/
```

## Principles

- Templates first. The repo should be useful to a human before it is useful to an agent.
- Playbooks hold the judgment. Skills come later.
- Connectors should stay boring.
- Do not build a fake platform before the modules earn it.
- Design for stealability. The reaction should be: "I want that workflow shape."

## KOL CRM v1

The first release is intentionally narrow:

- YouTube + Twitter influencer tracking
- import CSV
- export CSV
- local-first browser starter
- pricing and last-contact tracking
- owner and status workflow
- sample data

This is usable today as a single-operator local CRM starter.

It is not yet:

- a multi-user product
- a synced backend
- an email-sending system
- a polished SaaS app

Core states:

- `Not Contacted`
- `Contacted`
- `Replied`
- `In Negotiation`
- `Partnered`
- `Closed`

## What is not here yet

- polished website marketing
- generic agent marketplace framing
- full connector platform
- automated outreach product

## Contributing

The right way to add to `GTMbrain` is not "add more stuff."

The right way is:

1. Define one clear GTM workflow.
2. Decide whether it should start as a `Template`, `Playbook`, `Connector`, or some mix.
3. Make it legible enough that another builder can use it without a meeting.

## Current state

This repo is still early. The goal right now is simple:

- make the registry shape obvious
- make `KOL CRM` real enough to clone and adapt
- add thinner follow-on modules without overbuilding
