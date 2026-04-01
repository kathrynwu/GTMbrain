# GTMbrain

Forkable GTM modules for internal tooling.

`GTMbrain` is a repo of GTM workflow modules. Each module can include one or more of:

- `Template`: something you can run and adapt
- `Playbook`: the workflow and judgment behind it
- `Connector`: a simple package for an outside service
- `Skill`: an assistant wrapper for using the module step by step

## Why trust this

`GTMbrain` comes from operating experience building Openmart (YC W24) and spending a lot of time inside GTM, outbound, prospecting, and sales-tool workflows.

The goal is not to publish vague growth advice. The goal is to capture workflows that are actually useful to builders.

## Why this repo exists

Most GTM repos fall into one of three buckets:

- random docs
- random prompts
- random automations

This repo is trying to be more practical than that.

The basic unit here is a **module**. You should be able to land here, understand what a module does, and know what to do next:

- fork or clone the repo
- start in the right module
- read it
- call it
- maybe run it through an agent later

## Start here

Pick the module that matches your bottleneck:

- [`modules/kol-crm/`](./modules/kol-crm/) if you want a local CRM starter for influencer workflows
- [`modules/openmart-prospecting/`](./modules/openmart-prospecting/) if you want to build a local-business prospect list
- [`modules/local-list-enriching/`](./modules/local-list-enriching/) if you already have a list and need better owner or decision-maker data
- [`modules/local-emailing/`](./modules/local-emailing/) if you want short local-business outbound email playbooks
- [`modules/seo/`](./modules/seo/) if you want a repeatable SEO workflow for keywords, page improvement, and refresh rules
- [`modules/cold-call/`](./modules/cold-call/) if you want cold-call frameworks, objections, and review notes

## Quick start

Clone the repo:

```bash
git clone https://github.com/kathrynwu/GTMbrain.git
cd GTMbrain
```

Then choose one path:

### Run the CRM starter

```bash
cd modules/kol-crm/template
python3 -m http.server 4321
```

Then open `http://localhost:4321`.

If you do not want to run a local server, you can also open
[`modules/kol-crm/template/index.html`](./modules/kol-crm/template/index.html)
directly in a browser.

### Read a playbook module

Start with one of these:

- [`modules/openmart-prospecting/PLAYBOOK.md`](./modules/openmart-prospecting/PLAYBOOK.md)
- [`modules/local-list-enriching/PLAYBOOK.md`](./modules/local-list-enriching/PLAYBOOK.md)
- [`modules/local-emailing/PLAYBOOK.md`](./modules/local-emailing/PLAYBOOK.md)
- [`modules/seo/PLAYBOOK.md`](./modules/seo/PLAYBOOK.md)
- [`modules/cold-call/PLAYBOOK.md`](./modules/cold-call/PLAYBOOK.md)

## Ask Questions After Clone

This repo is meant to work well with an AI assistant after you clone it.

If you use Claude Code, Codex, or a similar repo-aware assistant:

- start at the repo root
- let it read [`CLAUDE.md`](./CLAUDE.md)
- ask concrete workflow questions, not just coding questions

Good examples:

- "How should I adapt `kol-crm` for my own influencer workflow?"
- "What parts of `kol-crm` are stable versus safe to customize?"
- "How should I use `openmart-prospecting` to build a local-business prospect list?"
- "How do I move Openmart data into my CRM or internal enrichment tool?"
- "How should I enrich approved rows before sending them into my CRM?"
- "Which Openmart endpoint fits search versus decision-maker enrichment?"
- "What should my outbound flow look like after I have a clean local-business list?"
- "How should I decide whether to improve an existing SEO page or create a new one?"
- "What should I fix first when impressions exist but CTR is low?"
- "Help me iterate on the playbooks and figure out my GTM motion."

The repo should answer those questions from its own module docs, not just from generic GTM advice.

Repo-local skills live in [`.agents/skills/`](/Users/kathrynwu/Work/GTMbrain/.agents/skills):

- `gtmbrain`
- `openmart-prospecting`
- `local-list-enriching`
- `local-emailing`
- `seo`
- `local-cold-calling`

If you do not know where to start, ask for `gtmbrain` first. It should route you to the right module with `A/B/C` options.

You can use the skills to work through your GTM motion step by step.

That means you can:

- test different prospecting approaches
- figure out what to enrich before sending leads into a CRM
- shape your email sequence
- shape your cold-call playbook
- compare different outbound motions
- keep iterating until the workflow makes sense for your segment

## How to use this repo

The modules live inside one repo right now.

That means:

1. fork or clone `GTMbrain`
2. pick the module you need
3. if it is a `Template`, run it and adapt it
4. if it is a `Playbook`, use it with the skill and iterate on your GTM motion
5. if it is a `Connector`, plug it into your own app or tool

## Module catalog

| Module | Job | Surfaces | Primary action | Status |
|--------|-----|----------|----------------|--------|
| [`kol-crm`](./modules/kol-crm/) | Track influencer sourcing, outreach, pricing, owner, and status | `Template` | Fork repo, start here | First release |
| [`openmart-prospecting`](./modules/openmart-prospecting/) | Define ICPs, build lists, and document prospecting workflows | `Playbook`, `Connector` | Read playbook | First release |
| [`local-list-enriching`](./modules/local-list-enriching/) | Capture approval-first enrichment logic, field mapping, and CRM sync rules | `Playbook` | Read playbook | First release |
| [`local-emailing`](./modules/local-emailing/) | Capture local-business email strategy, subject-line rules, and follow-up cadence | `Playbook` | Read playbook | First release |
| [`seo`](./modules/seo/) | Capture repeatable SEO workflow judgment for page prioritization, keyword choice, and on-page improvement | `Playbook` | Read playbook | First release |
| [`cold-call`](./modules/cold-call/) | Capture scripts, review criteria, and outbound heuristics | `Playbook` | Read playbook | First release |

## Repo shape

```text
modules/
  kol-crm/
  openmart-prospecting/
  local-list-enriching/
  local-emailing/
  seo/
  cold-call/
packages/
  openmart/
```

## Principles

- Start with something a person can use.
- Keep the real workflow in the playbook.
- Keep connectors simple.
- Do not build a big fake platform too early.
- Make the modules easy to copy and adapt.

## What each module gives you today

### `kol-crm`

- YouTube + Twitter influencer tracking
- import CSV
- export CSV
- local-first browser starter
- pricing and last-contact tracking
- owner and status workflow
- sample data

This is usable today as a single-user local CRM starter.

### `openmart-prospecting`

- ICP workflow
- broad-to-tight query loop
- approve and reject logic
- connector starter for the Openmart API
- sample prospect shape

### `local-list-enriching`

- field mapping for CRM sync
- filtering rules before enrichment
- owner / manager / decision-maker enrichment logic
- sample enriched row shape

### `local-emailing`

- short local-business email playbooks
- value-first email examples
- follow-up cadence
- subject-line patterns

### `cold-call`

- 3-step cold-call framework
- first-touch and follow-up call structure
- objection library
- gatekeeper handling
- review rubric

### `seo`

- GSC to Semrush workflow
- CTR versus position diagnosis
- keyword quality rules
- page structure guidance
- internal linking and refresh rules

### Not here yet

- a multi-user backend
- email sending
- polished website marketing
- full connector platform

## Contributing

The right way to add to `GTMbrain` is not "add more stuff."

The right way is:

1. Define one clear GTM workflow.
2. Decide whether it should start as a `Template`, `Playbook`, `Connector`, or some mix.
3. Make it clear enough that another builder can use it without a meeting.

Module contracts are validated in CI by [`scripts/validate-modules.js`](./scripts/validate-modules.js).

If you want to request a new module or report what worked in the real world:

- open a `Module request`
- or open `Workflow feedback`

## Current state

This repo is still early. Right now the goal is:

- make the registry shape obvious
- make each core module useful enough to try right away
- let people use skills and playbooks together to figure out their GTM motion
- add thinner follow-on modules without overbuilding
