# GTMbrain

Forkable GTM modules for prospecting, enrichment, outbound, SEO, and
lightweight CRM workflows.

This repo is built from real operating experience. It is not a prompt dump and
it is not a generic sales wiki. It is a set of reusable workflow modules:

- playbooks
- templates
- connectors
- repo-local skills for Claude Code and Codex

## What This Repo Is For

Use GTMbrain when you need to:

- build the right prospect list
- enrich the right rows before CRM or outbound
- choose the right buyer
- write short outbound emails or calls
- diagnose whether the bottleneck is outbound or SEO

## Choose Your Path

Start here.

| Job | Start here | Then go to |
| --- | --- | --- |
| local-business prospecting | [`Local Business Prospecting`](./modules/openmart-prospecting/) | [`Local Business Enrichment`](./modules/local-list-enriching/) |
| B2B / software-company prospecting | [`B2B Prospecting`](./modules/b2b-prospecting/) | [`B2B Enrichment`](./modules/b2b-enriching/) |
| local-business outbound email | [`Local Business Emailing`](./modules/local-emailing/) | [`Local Business Cold Calling`](./modules/cold-call/) if phone should run too |
| B2B outbound email | [`B2B Emailing`](./modules/b2b-emailing/) | [`B2B Cold Calling`](./modules/b2b-cold-calling/) if phone should run too |
| local-business cold calling | [`Local Business Cold Calling`](./modules/cold-call/) | [`Local Business Emailing`](./modules/local-emailing/) if email should run too |
| B2B cold calling | [`B2B Cold Calling`](./modules/b2b-cold-calling/) | [`B2B Emailing`](./modules/b2b-emailing/) if email should run too |
| SEO workflow | [`SEO`](./modules/seo/) | page update or supporting page creation |
| routing across modules | [`GTMbrain Router`](./.agents/skills/gtmbrain/SKILL.md) | the recommended module |
| runnable CRM starter | [`KOL CRM Starter`](./modules/kol-crm/) | adapt the template |

## Default Flows

### Local-business path

1. [`Local Business Prospecting`](./modules/openmart-prospecting/)
2. [`Local Business Enrichment`](./modules/local-list-enriching/)
3. [`Local Business Emailing`](./modules/local-emailing/) and/or
   [`Local Business Cold Calling`](./modules/cold-call/)

### B2B / software-company path

1. [`B2B Prospecting`](./modules/b2b-prospecting/)
2. [`B2B Enrichment`](./modules/b2b-enriching/)
3. [`B2B Emailing`](./modules/b2b-emailing/) and/or
   [`B2B Cold Calling`](./modules/b2b-cold-calling/)

### SEO path

1. [`seo`](./modules/seo/)

Reusable operating backbone:

`Source -> Merge -> Qualify -> Enrich -> Segment -> Prioritize -> Route -> Handoff -> Review`

If you want the backbone first, start with
[`modules/openmart-prospecting/STANDARD-PRACTICE.md`](./modules/openmart-prospecting/STANDARD-PRACTICE.md).

## Read In Order

If you are using the repo manually:

1. pick one path from the table above
2. read that module's `README.md`
3. read that module's `PLAYBOOK.md`
4. only then move to the next module in the path

Useful direct links:

- local-business prospecting:
  [`modules/openmart-prospecting/PLAYBOOK.md`](./modules/openmart-prospecting/PLAYBOOK.md)
- local-business enrichment:
  [`modules/local-list-enriching/PLAYBOOK.md`](./modules/local-list-enriching/PLAYBOOK.md)
- B2B prospecting:
  [`modules/b2b-prospecting/PLAYBOOK.md`](./modules/b2b-prospecting/PLAYBOOK.md)
- B2B ICP and discovery:
  [`modules/b2b-prospecting/ICP-AND-DISCOVERY.md`](./modules/b2b-prospecting/ICP-AND-DISCOVERY.md)
- B2B enrichment:
  [`modules/b2b-enriching/PLAYBOOK.md`](./modules/b2b-enriching/PLAYBOOK.md)
- local-business outbound email:
  [`modules/local-emailing/PLAYBOOK.md`](./modules/local-emailing/PLAYBOOK.md)
- local-business reporting:
  [`modules/local-emailing/REPORTING.md`](./modules/local-emailing/REPORTING.md)
- B2B outbound email:
  [`modules/b2b-emailing/PLAYBOOK.md`](./modules/b2b-emailing/PLAYBOOK.md)
- B2B reporting:
  [`modules/b2b-emailing/REPORTING.md`](./modules/b2b-emailing/REPORTING.md)
- local-business cold calling:
  [`modules/cold-call/PLAYBOOK.md`](./modules/cold-call/PLAYBOOK.md)
- B2B cold calling:
  [`modules/b2b-cold-calling/PLAYBOOK.md`](./modules/b2b-cold-calling/PLAYBOOK.md)
- SEO:
  [`modules/seo/PLAYBOOK.md`](./modules/seo/PLAYBOOK.md)
- assistant QA prompts:
  [`TEST-CASES.md`](./TEST-CASES.md)

If you want the runnable starter:

```bash
git clone https://github.com/kathrynwu/GTMbrain.git
cd GTMbrain/modules/kol-crm/template
python3 -m http.server 4321
```

Then open `http://localhost:4321`.

## Use With Claude Code Or Codex

### Claude Code

Claude Code can use:

- project skills in [`.claude/skills/`](./.claude/skills/)
- slash commands in [`.claude/commands/`](./.claude/commands/)

Good slash-command starts:

- `/gtmbrain`
- `/openmart-prospecting` for local-business prospecting
- `/b2b-prospecting`
- `/local-list-enriching`
- `/b2b-enriching`
- `/local-emailing`
- `/b2b-emailing`
- `/local-cold-calling`
- `/b2b-cold-calling`
- `/seo`

Good natural-language starts:

- `I need a local-business prospect list for med spas in Phoenix.`
- `I need a B2B list for VP Sales at Series B SaaS companies.`
- `I already have approved rows. What should I enrich before CRM sync?`
- `Should this local segment be email-first or call-first?`
- `Should this B2B segment be email-first or call-first?`
- `This page has impressions. Should I improve it or make a new page?`

### Codex

Codex should start with:

1. [`AGENTS.md`](./AGENTS.md)
2. [`CLAUDE.md`](./CLAUDE.md)
3. [`gtmbrain`](./.agents/skills/gtmbrain/SKILL.md)

Canonical repo skills live in [`.agents/skills/`](./.agents/skills/):

- [`GTMbrain Router`](./.agents/skills/gtmbrain/SKILL.md)
- [`Local Business Prospecting`](./.agents/skills/openmart-prospecting/SKILL.md)
- [`B2B Prospecting`](./.agents/skills/b2b-prospecting/SKILL.md)
- [`Local Business Enrichment`](./.agents/skills/local-list-enriching/SKILL.md)
- [`B2B Enrichment`](./.agents/skills/b2b-enriching/SKILL.md)
- [`Local Business Emailing`](./.agents/skills/local-emailing/SKILL.md)
- [`B2B Emailing`](./.agents/skills/b2b-emailing/SKILL.md)
- [`Local Business Cold Calling`](./.agents/skills/local-cold-calling/SKILL.md)
- [`B2B Cold Calling`](./.agents/skills/b2b-cold-calling/SKILL.md)
- [`SEO`](./.agents/skills/seo/SKILL.md)

Why there seem to be duplicate `SKILL.md` files:

- `.agents/skills/.../SKILL.md` is the canonical repo-native skill
- `.claude/skills/.../SKILL.md` is a thin Claude Code wrapper
- repeated `PLAYBOOK.md` names across modules are intentional convention

## Core Modules

| Module | What it does | Primary use |
| --- | --- | --- |
| [`KOL CRM Starter`](./modules/kol-crm/) | runnable lightweight CRM starter | run and adapt |
| [`Local Business Prospecting`](./modules/openmart-prospecting/) | local-business ICPs, list building, local prospect workflows | start local prospecting |
| [`Local Business Enrichment`](./modules/local-list-enriching/) | local-business enrichment, filtering, and CRM handoff | enrich approved local rows |
| [`B2B Prospecting`](./modules/b2b-prospecting/) | B2B ICPs, buyer choice, trigger-based list building, and discovery framing | start B2B prospecting |
| [`B2B Enrichment`](./modules/b2b-enriching/) | B2B buyer enrichment and outbound handoff shape | enrich approved B2B rows |
| [`Local Business Emailing`](./modules/local-emailing/) | short local-business outbound email strategy, reporting, and campaign diagnosis | write local outbound emails |
| [`B2B Emailing`](./modules/b2b-emailing/) | short B2B outbound email strategy, reporting, and campaign diagnosis | write B2B outbound emails |
| [`Local Business Cold Calling`](./modules/cold-call/) | local-business scripts, objection handling, and call review rules | write or review local calls |
| [`B2B Cold Calling`](./modules/b2b-cold-calling/) | B2B scripts, objection handling, and call review rules | write or review B2B calls |
| [`SEO`](./modules/seo/) | page diagnosis, keyword choice, and update logic | run SEO workflow |

## Launch Extras

If you are trying to use the repo immediately, these are the fastest supporting
docs after the main playbooks:

- [`modules/local-emailing/REPORTING.md`](./modules/local-emailing/REPORTING.md)
  for weekly local keep, pause, rewrite, or scale decisions
- [`modules/b2b-emailing/REPORTING.md`](./modules/b2b-emailing/REPORTING.md)
  for weekly B2B keep, pause, rewrite, or scale decisions
- [`modules/b2b-prospecting/ICP-AND-DISCOVERY.md`](./modules/b2b-prospecting/ICP-AND-DISCOVERY.md)
  for one concrete B2B buyer and discovery pattern
- [`TEST-CASES.md`](./TEST-CASES.md) for the assistant prompts this repo should
  answer cleanly

## Why GTMbrain Is Different

- it is module-first, not prompt-first
- the playbook holds the judgment
- the skill helps route and reuse the workflow
- the modules are narrow enough to steal and adapt
- the repo is meant to be practical, not platform theater

In plain English:

- not random docs
- not random prompts
- not random automations

## Repository Structure

```text
GTMbrain/
├── README.md
├── CLAUDE.md
├── AGENTS.md
├── DESIGN.md
├── TEST-CASES.md
├── .agents/
│   └── skills/
│       ├── gtmbrain/
│       ├── openmart-prospecting/
│       ├── local-list-enriching/
│       ├── b2b-prospecting/
│       ├── b2b-enriching/
│       ├── local-emailing/
│       ├── b2b-emailing/
│       ├── local-cold-calling/
│       ├── b2b-cold-calling/
│       └── seo/
├── .claude/
│   ├── skills/
│   └── commands/
├── modules/
│   ├── kol-crm/
│   ├── openmart-prospecting/
│   ├── local-list-enriching/
│   ├── b2b-prospecting/
│   ├── b2b-enriching/
│   ├── local-emailing/
│   ├── b2b-emailing/
│   ├── cold-call/
│   ├── b2b-cold-calling/
│   └── seo/
├── packages/
│   └── openmart/
└── scripts/
    └── validate-modules.js
```

## Contributing

The right move is not "add more stuff."

The right move is:

1. define one clear GTM workflow
2. decide whether it should start as a `Template`, `Playbook`, `Connector`, or
   some mix
3. make it clear enough that another builder can use it without a meeting

Module contracts are validated by
[`scripts/validate-modules.js`](./scripts/validate-modules.js).

## Current State

This repo is still early.

Right now the goal is:

- make the entry path obvious
- make each core module usable right away
- let people use skills and playbooks together
- add thinner follow-on modules without overbuilding
