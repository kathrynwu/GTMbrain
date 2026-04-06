# GTMbrain

Forkable GTM playbooks for local-business prospecting, B2B outbound, SEO, and
a small starter app.

This repo is meant to be cloned into Codex or Claude Code so you can iterate
toward a clear GTM plan.

`prospecting -> enrichment -> outbound or SEO -> reporting -> repeat`

## Read This First

There are two kinds of docs in this repo:

| If you are... | Read | Why |
| --- | --- | --- |
| you or your teammate | `README.md`, then the module `README.md` and `PLAYBOOK.md` | these are the playbooks and outputs |
| Codex or Claude | `AGENTS.md`, `CLAUDE.md`, `.agents/skills/`, `.claude/` | these are routing and instruction files for the AI |

You usually do not need to read `AGENTS.md` or `CLAUDE.md` yourself.

Tell Codex or Claude to read them for you.

## Quick Start

```bash
git clone https://github.com/kathrynwu/GTMbrain.git
cd GTMbrain
```

Then open the repo in Codex or Claude Code.

Example, if you want to create a B2B emailing strategy doc:

1. Say:
   `Read AGENTS.md and use the gtmbrain skill to route me for a B2B emailing strategy doc.`
2. Then say:
   `Use the b2b-prospecting skill first. Help me define the ICP, buyer, pain hypothesis, and why-now trigger.`
3. Then say:
   `Use the b2b-enriching skill. Tell me what account fields, contact fields, and personalization fields I need before outreach.`
4. Then say:
   `Use the b2b-emailing skill. Draft a B2B emailing strategy doc with an A/B/C recommendation, subject lines, first-touch, follow-ups, deliverability notes, and reporting metrics.`
5. Iterate with follow-ups like:
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

| If you need... | Open |
| --- | --- |
| help choosing where to start | [`GTMbrain Router`](./.agents/skills/gtmbrain/SKILL.md) |
| a local-business prospect list | [`modules/openmart-prospecting/`](./modules/openmart-prospecting/) |
| a B2B prospect list | [`modules/b2b-prospecting/`](./modules/b2b-prospecting/) |
| local-business enrichment | [`modules/local-list-enriching/`](./modules/local-list-enriching/) |
| B2B enrichment | [`modules/b2b-enriching/`](./modules/b2b-enriching/) |
| local-business outbound | [`modules/local-emailing/`](./modules/local-emailing/) or [`modules/cold-call/`](./modules/cold-call/) |
| B2B outbound | [`modules/b2b-emailing/`](./modules/b2b-emailing/) or [`modules/b2b-cold-calling/`](./modules/b2b-cold-calling/) |
| SEO workflow | [`modules/seo/`](./modules/seo/) |
| a starter CRM app | [`modules/kol-crm/`](./modules/kol-crm/) |

## How To Iterate

1. Pick one path.
2. Read that module's `README.md`, then `PLAYBOOK.md`.
3. Produce one clear output:
   an approved list, enriched rows, an email sequence, a call script, or a
   page plan.
4. Move to the next module only after the handoff is clean.
5. Repeat weekly.

If you want the shared prospecting backbone first, read
[`docs/STANDARD-PRACTICE.md`](./docs/STANDARD-PRACTICE.md).

## What Is Where

- `modules/` = playbooks you and the AI work through together
- `docs/` = shared GTM backbones and references
- `AGENTS.md`, `CLAUDE.md`, `.agents/skills/`, `.claude/` = AI-only routing and instruction files
- `packages/openmart/` = thin Openmart connector starter

If you want to run the starter app:

```bash
cd GTMbrain/modules/kol-crm/template
python3 -m http.server 4321
```

Then open `http://localhost:4321`.
