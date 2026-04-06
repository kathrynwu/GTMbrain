# GTMbrain

Forkable GTM playbooks for two separate GTM motions, plus SEO and a small
starter app.

- `Local SMB` = you sell to local businesses.
- `B2B` = a software company sells to another software company.

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

## What You Get

By iterating through GTMbrain with Codex or Claude, you should leave with:

- a clear GTM strategy for one lane:
  local SMB or software-to-software B2B
- a campaign-ready output:
  target segment, prospecting rules, enrichment requirements, outreach copy,
  and review metrics
- concrete next actions:
  what to build this week, what to send next, and what to change if the
  campaign is weak

This repo is for both:

- beginners who need structure, prompts, and a clear workflow
- sales professionals who need a repeatable process and actionable campaign
  assets

## Quick Start

```bash
git clone https://github.com/kathrynwu/GTMbrain.git
cd GTMbrain
```

Then open the repo in Codex or Claude Code.

### Fastest Skill Shortcuts

If you are using Claude Code, you can start with slash commands:

- `/gtmbrain`
- `/openmart-prospecting`
- `/local-list-enriching`
- `/local-emailing`
- `/local-cold-calling`
- `/b2b-prospecting`
- `/b2b-enriching`
- `/b2b-emailing`
- `/b2b-cold-calling`
- `/seo`

If you are using Codex, start with direct prompts:

- `Read AGENTS.md and use the gtmbrain skill to route me.`
- `Use the openmart-prospecting skill in .agents/skills/openmart-prospecting/SKILL.md.`
- `Use the local-list-enriching skill in .agents/skills/local-list-enriching/SKILL.md.`
- `Use the local-emailing skill in .agents/skills/local-emailing/SKILL.md.`
- `Use the b2b-prospecting skill in .agents/skills/b2b-prospecting/SKILL.md.`

### Concrete Example

Example: you work at a local advertising agency and want to outbound to med
spas in Phoenix.

1. Say:
   `Read AGENTS.md and use the gtmbrain skill to route me. I work at a local advertising agency and want to sell to med spas in Phoenix.`
2. Then say:
   `Use the openmart-prospecting skill. Help me define the ICP, geography, filters, reject rules, and approved-row standard for Phoenix med spas.`
3. Then say:
   `Use the local-list-enriching skill. Tell me what owner, manager, email, phone, website, and qualification fields I need before outreach.`
4. Then say:
   `Use the local-emailing skill. Draft a local SMB outbound campaign for these approved med spa leads, including subject lines, first-touch, follow-ups, CTA, and weekly review metrics.`
5. Iterate with follow-ups like:
   `Rewrite this for owners instead of front-desk staff.`
   `Make the first-touch less agency-sounding.`
   `Tighten the offer and CTA.`
   `Should this stay email-first or switch to calling?`

The agent should walk you through the modules step by step.

By the end of this pass, you should have:

- target segment, geography, and buyer
- approved-row standard for prospecting
- enrichment requirements before outreach
- a ready-to-send email sequence
- weekly review metrics and next actions

If you want a one-line starter prompt, use:

- `Use GTMbrain's local SMB prospecting, enrichment, and emailing modules to help me build a complete local SMB outbound plan step by step.`
- `Use GTMbrain's B2B prospecting, enrichment, and emailing modules to help me build a complete software-to-software B2B outbound plan step by step.`

## Start Here

Pick one lane first.

Do not mix the local SMB lane with the B2B lane.

If you are not sure which lane you are in, start with
[`GTMbrain Router`](./.agents/skills/gtmbrain/SKILL.md).

### Local SMB lane

Use this lane when you sell to local SMBs such as med spas, roofers, dentists,
restaurants, and other local operators.

| If you need... | Open |
| --- | --- |
| a local SMB prospect list | [`modules/openmart-prospecting/`](./modules/openmart-prospecting/) |
| local SMB enrichment | [`modules/local-list-enriching/`](./modules/local-list-enriching/) |
| local SMB outbound | [`modules/local-emailing/`](./modules/local-emailing/) or [`modules/cold-call/`](./modules/cold-call/) |

### B2B lane

Use this lane when a software company is selling to another software company.

| If you need... | Open |
| --- | --- |
| a B2B prospect list | [`modules/b2b-prospecting/`](./modules/b2b-prospecting/) |
| B2B enrichment | [`modules/b2b-enriching/`](./modules/b2b-enriching/) |
| B2B outbound | [`modules/b2b-emailing/`](./modules/b2b-emailing/) or [`modules/b2b-cold-calling/`](./modules/b2b-cold-calling/) |

### Other

| If you need... | Open |
| --- | --- |
| help choosing where to start | [`GTMbrain Router`](./.agents/skills/gtmbrain/SKILL.md) |
| SEO workflow | [`modules/seo/`](./modules/seo/) |
| a starter CRM app | [`modules/kol-crm/`](./modules/kol-crm/) |

## How To Iterate

1. Pick one lane and one path.
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
