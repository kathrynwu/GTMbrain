# GTMbrain

Forkable GTM modules for local-business prospecting, B2B outbound, SEO, and a
small starter app.

This repo is built from real workflows. It is meant to be iterative:

`prospecting -> enrichment -> outbound or SEO -> reporting -> repeat`

If you do not know where to start, use the
[`GTMbrain Router`](./.agents/skills/gtmbrain/SKILL.md).

## Quick Start

```bash
git clone https://github.com/kathrynwu/GTMbrain.git
cd GTMbrain
```

Then either:

- open the module you need from the table below
- or start with [`GTMbrain Router`](./.agents/skills/gtmbrain/SKILL.md)

Example, if you want to create a B2B emailing strategy doc:

1. Open this repo in Codex or Claude Code.
2. Say:
   `Read AGENTS.md and use the gtmbrain skill to route me for a B2B emailing strategy doc.`
3. Then say:
   `Use the b2b-prospecting skill first. Help me define the ICP, buyer, pain hypothesis, and why-now trigger.`
4. Then say:
   `Use the b2b-enriching skill. Tell me what account fields, contact fields, and personalization fields I need before outreach.`
5. Then say:
   `Use the b2b-emailing skill. Draft a B2B emailing strategy doc with an A/B/C recommendation, subject lines, first-touch, follow-ups, deliverability notes, and reporting metrics.`
6. Iterate with follow-ups like:
   `Rewrite this for RevOps.`
   `Make the first-touch shorter.`
   `Diagnose why reply rate is weak.`
   `Should this stay email-first or switch to calling?`

The agent should walk you through the modules step by step.

The finished strategy doc should contain:

- target segment and buyer
- pain hypothesis and why-now trigger
- list-quality requirements
- personalization rules
- subject-line pattern
- first-touch email
- follow-up cadence
- CTA
- deliverability rules
- reporting plan

If you want a one-line starter prompt, use:

- `Use GTMbrain's B2B prospecting, enrichment, and emailing modules to help me build a complete B2B emailing strategy doc step by step.`

## Start Here

| Motion | Start | Then |
| --- | --- | --- |
| local-business prospecting | [`Local Business Prospecting`](./modules/openmart-prospecting/) | [`Local Business Enrichment`](./modules/local-list-enriching/) |
| B2B / software-company prospecting | [`B2B Prospecting`](./modules/b2b-prospecting/) | [`B2B Enrichment`](./modules/b2b-enriching/) |
| local-business outbound | [`Local Business Emailing`](./modules/local-emailing/) | [`Local Business Cold Calling`](./modules/cold-call/) |
| B2B outbound | [`B2B Emailing`](./modules/b2b-emailing/) | [`B2B Cold Calling`](./modules/b2b-cold-calling/) |
| SEO | [`SEO`](./modules/seo/) | improve page or create supporting page |
| starter app | [`KOL CRM Starter`](./modules/kol-crm/) | adapt the template |
| broad GTM question | [`GTMbrain Router`](./.agents/skills/gtmbrain/SKILL.md) | the recommended module |

## How To Iterate

1. Pick one path.
2. Read that module's `README.md`, then `PLAYBOOK.md`.
3. Produce one clean output:
   an approved list, enriched rows, an email sequence, a call script, or a
   page plan.
4. Move to the next module only after the handoff is clean.
5. Use the reporting docs to decide whether to keep, pause, rewrite, or scale.
6. Repeat weekly.

Reusable backbone:

`Source -> Merge -> Qualify -> Enrich -> Segment -> Prioritize -> Route -> Handoff -> Review`

Start with the backbone here if needed:
[`modules/openmart-prospecting/STANDARD-PRACTICE.md`](./modules/openmart-prospecting/STANDARD-PRACTICE.md)

## Module Map

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

- local-business reporting:
  [`modules/local-emailing/REPORTING.md`](./modules/local-emailing/REPORTING.md)
- B2B reporting:
  [`modules/b2b-emailing/REPORTING.md`](./modules/b2b-emailing/REPORTING.md)
- B2B buyer and discovery pattern:
  [`modules/b2b-prospecting/ICP-AND-DISCOVERY.md`](./modules/b2b-prospecting/ICP-AND-DISCOVERY.md)
- assistant prompt pack:
  [`TEST-CASES.md`](./TEST-CASES.md)

If you want to run the starter app:

```bash
cd GTMbrain/modules/kol-crm/template
python3 -m http.server 4321
```

Then open `http://localhost:4321`.

## Repo Layout

- `modules/` = the actual GTM workflows
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
