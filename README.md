# GTMbrain

**Forkable GTM modules for builders working on prospecting, enrichment,
outbound, SEO, and lightweight CRM workflows.**

Built from real operating experience around Openmart, B2B outbound, and
local-business GTM.
This repo is not a prompt dump. It is a set of reusable workflow modules:
playbooks, templates, connectors, and repo-local skills you can clone and
adapt.

---

## Categories

| Category | What It Does | Included Modules | Repo Skills |
|----------|---------------|------------------|-------------|
| **CRM Starter** | Gives you a runnable starter for a simple GTM workflow app | [`kol-crm`](./modules/kol-crm/) | routed by [`gtmbrain`](./.agents/skills/gtmbrain/SKILL.md) |
| **Local List Ops** | Defines ICPs, builds local-business lists, and enriches approved rows | [`openmart-prospecting`](./modules/openmart-prospecting/), [`local-list-enriching`](./modules/local-list-enriching/) | [`openmart-prospecting`](./.agents/skills/openmart-prospecting/SKILL.md), [`local-list-enriching`](./.agents/skills/local-list-enriching/SKILL.md) |
| **B2B List Ops** | Defines B2B ICPs, chooses the right buyer, and enriches approved B2B rows | [`b2b-prospecting`](./modules/b2b-prospecting/), [`b2b-enriching`](./modules/b2b-enriching/) | [`b2b-prospecting`](./.agents/skills/b2b-prospecting/SKILL.md), [`b2b-enriching`](./.agents/skills/b2b-enriching/SKILL.md) |
| **Outbound Ops** | Turns clean rows into short emails and practical cold-call workflows | [`local-emailing`](./modules/local-emailing/), [`cold-call`](./modules/cold-call/) | [`local-emailing`](./.agents/skills/local-emailing/SKILL.md), [`local-cold-calling`](./.agents/skills/local-cold-calling/SKILL.md) |
| **SEO Ops** | Improves pages that already show traction and helps choose the next page action | [`seo`](./modules/seo/) | [`seo`](./.agents/skills/seo/SKILL.md) |
| **Routing** | Helps you choose the right module and iterate on the GTM motion | repo root + module docs | [`gtmbrain`](./.agents/skills/gtmbrain/SKILL.md) |

---

## Quick Start

The general pattern is:

```bash
# 1. Clone the repo
git clone https://github.com/kathrynwu/GTMbrain.git
cd GTMbrain

# 2. Pick a module
cd modules/seo
# or modules/openmart-prospecting
# or modules/b2b-prospecting
# or modules/b2b-enriching
# or modules/local-emailing
# or modules/cold-call

# 3. Read the module README and playbook
```

If you want the runnable starter:

```bash
cd modules/kol-crm/template
python3 -m http.server 4321
```

Then open `http://localhost:4321`.

Fast starts:

- want a local-business prospect list:
  - [`modules/openmart-prospecting/PLAYBOOK.md`](./modules/openmart-prospecting/PLAYBOOK.md)
  - if you want the broader reusable process:
    - [`modules/openmart-prospecting/STANDARD-PRACTICE.md`](./modules/openmart-prospecting/STANDARD-PRACTICE.md)
- want a B2B prospect list:
  - [`modules/b2b-prospecting/PLAYBOOK.md`](./modules/b2b-prospecting/PLAYBOOK.md)
- already have approved local rows and need contacts:
  - [`modules/local-list-enriching/PLAYBOOK.md`](./modules/local-list-enriching/PLAYBOOK.md)
- already have approved B2B rows and need contacts:
  - [`modules/b2b-enriching/PLAYBOOK.md`](./modules/b2b-enriching/PLAYBOOK.md)
- need outbound copy:
  - [`modules/local-emailing/PLAYBOOK.md`](./modules/local-emailing/PLAYBOOK.md)
- need call scripts and objection handling:
  - [`modules/cold-call/PLAYBOOK.md`](./modules/cold-call/PLAYBOOK.md)
- need SEO workflow:
  - [`modules/seo/PLAYBOOK.md`](./modules/seo/PLAYBOOK.md)

---

## One Real Flow

If you do not know how the modules fit together, the default GTMbrain motion is:

1. choose the prospecting path:
   - [`openmart-prospecting`](./modules/openmart-prospecting/) for local-business lists
   - [`b2b-prospecting`](./modules/b2b-prospecting/) for software-company or B2B lists
2. choose the enrichment path:
   - [`local-list-enriching`](./modules/local-list-enriching/) for approved local rows
   - [`b2b-enriching`](./modules/b2b-enriching/) for approved B2B rows
3. use [`local-emailing`](./modules/local-emailing/) or
   [`cold-call`](./modules/cold-call/) depending on the contact path
4. use [`seo`](./modules/seo/) if the bottleneck is organic acquisition instead
   of outbound

The reusable backbone is:

`Source -> Merge -> Qualify -> Enrich -> Segment -> Prioritize -> Route -> Handoff -> Review`

If you want that operating model directly, start here:

- [`modules/openmart-prospecting/STANDARD-PRACTICE.md`](./modules/openmart-prospecting/STANDARD-PRACTICE.md)

---

## How This Works with Claude Code and Codex

This repo is meant to work well with a repo-aware assistant after clone.

The general pattern is:

1. start at the repo root
2. let the assistant read [`CLAUDE.md`](./CLAUDE.md)
3. ask a concrete workflow question
4. let the matching module skill and playbook do the routing

For Claude Code, there are two usable entry paths.

**1. Natural-language path**

Claude Code can auto-load matching project skills from
[`./.claude/skills/`](./.claude/skills/) when the request is clear enough.

Example prompts:

- "I have approved local-business rows. What should I enrich before CRM sync?"
- "I need a B2B list for VP Sales at Series B SaaS companies."
- "Should I improve this SEO page or create a new one?"
- "Write a short outbound email for roofers in Phoenix."

**2. Explicit slash-command path**

If the user wants a direct entrypoint, Claude Code can use the slash commands in
[`./.claude/commands/`](./.claude/commands/):

- `/gtmbrain`
- `/openmart-prospecting`
- `/b2b-prospecting`
- `/local-list-enriching`
- `/b2b-enriching`
- `/local-emailing`
- `/seo`
- `/local-cold-calling`

So the split is:

- `.claude/skills/` for automatic project-skill loading
- `.claude/commands/` for explicit slash-command entrypoints

Repo-native source-of-truth skills still live in
[`.agents/skills/`](./.agents/skills/):

- [`gtmbrain`](./.agents/skills/gtmbrain/SKILL.md)
- [`openmart-prospecting`](./.agents/skills/openmart-prospecting/SKILL.md)
- [`b2b-prospecting`](./.agents/skills/b2b-prospecting/SKILL.md)
- [`local-list-enriching`](./.agents/skills/local-list-enriching/SKILL.md)
- [`b2b-enriching`](./.agents/skills/b2b-enriching/SKILL.md)
- [`local-emailing`](./.agents/skills/local-emailing/SKILL.md)
- [`seo`](./.agents/skills/seo/SKILL.md)
- [`local-cold-calling`](./.agents/skills/local-cold-calling/SKILL.md)

The `.claude/skills/` files are thin Claude Code wrappers around those
repo-native skills. The workflow logic still lives in the module playbooks and
the canonical skills under `.agents/skills/`.

Why there seem to be duplicate `SKILL.md` files:

- `.agents/skills/.../SKILL.md` is the canonical repo-native skill
- `.claude/skills/.../SKILL.md` is a thin Claude Code wrapper around that skill
- repeated `PLAYBOOK.md` filenames across modules are intentional convention,
  not duplicate content

If you do not know where to start, use
[`gtmbrain`](./.agents/skills/gtmbrain/SKILL.md) first. It routes you with
`A/B/C` options.

Good questions:

- "How should I use `openmart-prospecting` for my ICP?"
- "How should I use `b2b-prospecting` for VP and Director buyers?"
- "What should I enrich before pushing rows into the CRM?"
- "Should I start with email or cold call for this segment?"
- "Should I improve this SEO page or create a new one?"
- "Help me iterate on the playbooks and figure out my GTM motion."

Good slash-command starts in Claude Code:

```text
/gtmbrain I sell to local businesses and do not know whether to start with prospecting, SEO, or outbound.
/gtmbrain I sell to software companies and need to know whether to start with b2b prospecting, enrichment, or outbound.
/seo This page has 1800 impressions, 0.8% CTR, and avg position 5.9. What should I do?
/local-emailing Write a first-touch email for plumbers in Dallas.
/b2b-prospecting Help me define the right buyer and filters for Series B SaaS companies.
```

**Codex path**

Codex does not need the Claude wrapper layer. The Codex-native path in this
repo is:

- start at [`AGENTS.md`](./AGENTS.md)
- let Codex read [`CLAUDE.md`](./CLAUDE.md) for the full routing rules
- use the canonical repo skills in [`.agents/skills/`](./.agents/skills/)
- then read the matching module docs

For Codex, the reliable entrypoint is the repo-native skill layer:

- [`gtmbrain`](./.agents/skills/gtmbrain/SKILL.md)
- [`openmart-prospecting`](./.agents/skills/openmart-prospecting/SKILL.md)
- [`b2b-prospecting`](./.agents/skills/b2b-prospecting/SKILL.md)
- [`local-list-enriching`](./.agents/skills/local-list-enriching/SKILL.md)
- [`b2b-enriching`](./.agents/skills/b2b-enriching/SKILL.md)
- [`local-emailing`](./.agents/skills/local-emailing/SKILL.md)
- [`seo`](./.agents/skills/seo/SKILL.md)
- [`local-cold-calling`](./.agents/skills/local-cold-calling/SKILL.md)

Good Codex starts:

```text
Read AGENTS.md and use the gtmbrain skill to route me.
Use the seo skill in .agents/skills/seo/SKILL.md on this page.
Use the local-emailing skill to write a first-touch email for med spas in Miami.
Use the openmart-prospecting skill to help me define the right ICP and filters.
Use the b2b-prospecting skill to help me target the right VP or Director buyers.
```

---

## What Makes GTMbrain Different

This repo is built around a few strong constraints:

- it is module-first, not prompt-first
- the playbook holds the judgment
- the skill is there to help navigate the workflow, not replace it
- the workflows are narrow enough to steal and adapt
- the repo tries to stay practical instead of pretending to be a giant platform

In plain English:

- not random docs
- not random prompts
- not random automations

The goal is to capture workflow shapes that another builder can actually use.

---

## Repository Structure

```text
GTMbrain/
├── README.md
├── CLAUDE.md
├── AGENTS.md
├── DESIGN.md
├── .agents/
│   └── skills/
│       ├── gtmbrain/
│       ├── b2b-prospecting/
│       ├── b2b-enriching/
│       ├── openmart-prospecting/
│       ├── local-list-enriching/
│       ├── local-emailing/
│       ├── seo/
│       └── local-cold-calling/
├── .claude/
│   ├── skills/
│   │   ├── gtmbrain/
│   │   ├── b2b-prospecting/
│   │   ├── b2b-enriching/
│   │   ├── openmart-prospecting/
│   │   ├── local-list-enriching/
│   │   ├── local-emailing/
│   │   ├── seo/
│   │   └── local-cold-calling/
│   └── commands/
│       ├── gtmbrain.md
│       ├── b2b-prospecting.md
│       ├── b2b-enriching.md
│       ├── openmart-prospecting.md
│       ├── local-list-enriching.md
│       ├── local-emailing.md
│       ├── seo.md
│       └── local-cold-calling.md
├── modules/
│   ├── kol-crm/
│   ├── b2b-prospecting/
│   ├── b2b-enriching/
│   ├── openmart-prospecting/
│   ├── local-list-enriching/
│   ├── local-emailing/
│   ├── seo/
│   └── cold-call/
├── packages/
│   └── openmart/
└── scripts/
    └── validate-modules.js
```

---

## Module Catalog

| Module | What It Does | Surfaces | Primary Action | Status |
|--------|---------------|----------|----------------|--------|
| [`kol-crm`](./modules/kol-crm/) | Tracks influencer sourcing, outreach, pricing, owner, and status | `Template` | Run and adapt | First release |
| [`openmart-prospecting`](./modules/openmart-prospecting/) | Defines ICPs, builds local-business lists, and documents repeatable local prospecting workflows | `Playbook`, `Connector` | Read playbook | First release |
| [`b2b-prospecting`](./modules/b2b-prospecting/) | Defines B2B ICPs, chooses the right buyer, and builds B2B prospect lists | `Playbook` | Read playbook | First release |
| [`local-list-enriching`](./modules/local-list-enriching/) | Captures approval-first enrichment logic, field mapping, and CRM sync rules | `Playbook` | Read playbook | First release |
| [`b2b-enriching`](./modules/b2b-enriching/) | Enriches approved B2B rows with the right buyer, contact path, and handoff shape | `Playbook` | Read playbook | First release |
| [`local-emailing`](./modules/local-emailing/) | Captures short outbound email strategy, buyer-fit rules, and follow-up cadence | `Playbook` | Read playbook | First release |
| [`seo`](./modules/seo/) | Captures repeatable SEO workflow judgment for page prioritization, keyword choice, and on-page improvement | `Playbook` | Read playbook | First release |
| [`cold-call`](./modules/cold-call/) | Captures scripts, review criteria, objection handling, and outbound heuristics | `Playbook` | Read playbook | First release |

---

## What Each Module Gives You Today

### `kol-crm`

- local-first browser starter
- import and export CSV
- pricing and last-contact tracking
- owner and status workflow
- sample data

### `openmart-prospecting`

- local-business ICP workflow
- broad-to-tight query loop
- approval and rejection logic
- Openmart connector starter
- sample prospect shape

### `b2b-prospecting`

- B2B ICP workflow
- right-buyer rules
- trigger-based prioritization
- Apollo-first source guidance
- cleaner handoff into B2B enrichment

### `local-list-enriching`

- field mapping for CRM sync
- filtering rules before enrichment
- owner, manager, and decision-maker enrichment logic
- sample enriched row shape

### `b2b-enriching`

- right-buyer enrichment rules
- sequencing-ready and call-ready field shapes
- rerouting from noisy contacts to real buyers
- context preservation before outbound or CRM handoff

### `local-emailing`

- short outbound email playbooks
- value-first email examples
- follow-up cadence
- subject-line patterns

### `seo`

- GSC to Semrush workflow
- CTR versus position diagnosis
- keyword quality rules
- page structure guidance
- internal linking and refresh rules
- example outputs

### `cold-call`

- 3-step cold-call framework
- first-touch and follow-up call structure
- objection library
- gatekeeper handling
- review rubric

---

## Not Here Yet

- multi-user backend
- email sending
- polished website marketing
- full connector platform

---

## Contributing

The right move is not "add more stuff."

The right move is:

1. define one clear GTM workflow
2. decide whether it should start as a `Template`, `Playbook`, `Connector`, or some mix
3. make it clear enough that another builder can use it without a meeting

Module contracts are validated in CI by
[`scripts/validate-modules.js`](./scripts/validate-modules.js).

If you want to request a new module or report what worked:

- open a `Module request`
- or open `Workflow feedback`

---

## Current State

This repo is still early.

Right now the goal is:

- make the registry shape obvious
- make each core module useful enough to try right away
- let people use skills and playbooks together to figure out their GTM motion
- add thinner follow-on modules without overbuilding
