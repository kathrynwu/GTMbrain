# GTMbrain

Forkable GTM playbooks for local-business prospecting, B2B outbound, SEO, and
a small starter app.

This repo is built from real workflows. It is meant to be iterative:

`prospecting -> enrichment -> outbound or SEO -> reporting -> repeat`

The goal is not just to produce lists or copy.

The goal is to help you think through and write a clear GTM strategy.

If you do not know where to start, use the
[`GTMbrain Router`](./.agents/skills/gtmbrain/SKILL.md).

## Quick Start

```bash
git clone https://github.com/kathrynwu/GTMbrain.git
cd GTMbrain
```

Then either:

- open the playbook you need from the table below
- or start with [`GTMbrain Router`](./.agents/skills/gtmbrain/SKILL.md)

## Start Here

| Motion | Start | Then |
| --- | --- | --- |
| local-business prospecting | [`Local Business Prospecting`](./modules/openmart-prospecting/) | [`Local Business Enrichment`](./modules/local-list-enriching/) |
| B2B / software-company prospecting | [`B2B Prospecting`](./modules/b2b-prospecting/) | [`B2B Enrichment`](./modules/b2b-enriching/) |
| local-business outbound | [`Local Business Emailing`](./modules/local-emailing/) | [`Local Business Cold Calling`](./modules/cold-call/) |
| B2B outbound | [`B2B Emailing`](./modules/b2b-emailing/) | [`B2B Cold Calling`](./modules/b2b-cold-calling/) |
| SEO | [`SEO`](./modules/seo/) | improve page or create supporting page |
| starter app | [`KOL CRM Starter`](./modules/kol-crm/) | adapt the template |
| broad GTM question | [`GTMbrain Router`](./.agents/skills/gtmbrain/SKILL.md) | the recommended playbook |

## How To Iterate

1. Pick one path.
2. Read that playbook's `README.md`, then `PLAYBOOK.md`.
3. Produce one clean output:
   an approved list, enriched rows, an email sequence, a call script, or a
   page plan.
4. Move to the next playbook only after the handoff is clean.
5. Use the measurement and review sections in the playbook to decide whether to
   keep, pause, rewrite, or scale.
6. Repeat weekly.

## What Each Playbook Should Produce

Each playbook should leave you with one clearer part of your GTM strategy.

| Playbook | Output |
| --- | --- |
| Local Business Prospecting | ICP, target segment, filters, reject rules, approved-row standard |
| B2B Prospecting | ICP, buyer hierarchy, trigger rules, qualification lens |
| Local Business Enrichment | outbound-ready row standard, required fields, CRM handoff shape |
| B2B Enrichment | buyer rerouting rules, sequencing-ready row, call-ready row |
| Local Business Emailing | channel choice, message angle, sequence structure, response standards |
| B2B Emailing | buyer-fit messaging, credibility angle, sequence structure, keep/pause/rewrite rules |
| Local Business Cold Calling | call-first logic, opener, qualification flow, objection handling |
| B2B Cold Calling | buyer-first calling logic, opener, qualification flow, meeting-booking motion |
| SEO | page strategy, improve-vs-new-page decision, keyword direction |

If the output is still vague, the playbook has not done its job yet.

Reusable backbone:

`Source -> Merge -> Qualify -> Enrich -> Segment -> Prioritize -> Route -> Handoff -> Review`

Start with the backbone here if needed:
[`docs/STANDARD-PRACTICE.md`](./docs/STANDARD-PRACTICE.md)

## Playbook Map

### Local-business path

- [`Local Business Prospecting`](./modules/openmart-prospecting/)
- [`Local Business Enrichment`](./modules/local-list-enriching/)
- [`Local Business Emailing`](./modules/local-emailing/)
- [`Local Business Cold Calling`](./modules/cold-call/)

### B2B path

- [`B2B Prospecting`](./modules/b2b-prospecting/)
- [`B2B Enrichment`](./modules/b2b-enriching/)
- [`B2B Emailing`](./modules/b2b-emailing/)
- [`B2B Cold Calling`](./modules/b2b-cold-calling/)

### Other

- [`SEO`](./modules/seo/)
- [`KOL CRM Starter`](./modules/kol-crm/)

## Use With Claude Code Or Codex

### Claude Code

Good starts:

- `/gtmbrain`
- `/openmart-prospecting`
- `/b2b-prospecting`
- `/local-emailing`
- `/b2b-emailing`
- `/seo`

Natural-language starts:

- `I need a local-business prospect list for med spas in Phoenix.`
- `I need a B2B list for VP Sales at Series B SaaS companies.`
- `My open rate is fine but response rate is weak. What should I change?`
- `This page has impressions. Should I improve it or make a new page?`

### Codex

Start with:

1. [`AGENTS.md`](./AGENTS.md)
2. [`CLAUDE.md`](./CLAUDE.md)
3. [`GTMbrain Router`](./.agents/skills/gtmbrain/SKILL.md)

Canonical repo skills live in [`.agents/skills/`](./.agents/skills/).
Claude wrappers live in [`.claude/skills/`](./.claude/skills/) and
[`.claude/commands/`](./.claude/commands/).

## Key Docs

- shared prospecting backbone:
  [`docs/STANDARD-PRACTICE.md`](./docs/STANDARD-PRACTICE.md)
- local-business outbound playbook:
  [`modules/local-emailing/PLAYBOOK.md`](./modules/local-emailing/PLAYBOOK.md)
- B2B outbound playbook:
  [`modules/b2b-emailing/PLAYBOOK.md`](./modules/b2b-emailing/PLAYBOOK.md)
- B2B prospecting playbook:
  [`modules/b2b-prospecting/PLAYBOOK.md`](./modules/b2b-prospecting/PLAYBOOK.md)
- assistant prompt pack:
  [`TEST-CASES.md`](./TEST-CASES.md)

If you want to run the starter app:

```bash
cd GTMbrain/modules/kol-crm/template
python3 -m http.server 4321
```

Then open `http://localhost:4321`.

## Repo Layout

- `modules/` = where the playbooks live on disk
- `docs/` = shared operating backbones and cross-playbook references
- `.agents/skills/` = canonical repo-native skills
- `.claude/skills/` and `.claude/commands/` = Claude Code wrappers
- `packages/openmart/` = thin Openmart connector starter
- `scripts/validate-modules.js` = validator

## Contributing

Keep changes narrow and reusable.

1. Define one clear workflow.
2. Decide whether it belongs in a `Template`, `Playbook`, or `Connector`.
3. Make it usable without a meeting.

Validate changes with
[`scripts/validate-modules.js`](./scripts/validate-modules.js).
