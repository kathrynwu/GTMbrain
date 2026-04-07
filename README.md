# GTMbrain

Forkable GTM playbooks for two separate GTM motions, plus SEO and a small
starter app.

- `Local SMB` = you sell to local businesses.
- `B2B` = a software company sells to another software company.

This repo is meant to be cloned into Codex or Claude Code so you can iterate
toward a clear GTM plan.

`prospecting -> enrichment -> outbound or SEO -> reporting -> repeat`

You should not need to read the repo end to end yourself.

Clone it, open it in Codex or Claude Code, and let the agent read the repo for
you.

Your job is to pick the lane and paste the right starting prompt.

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

### Start In Claude Code

This repo includes Claude-only slash commands from
[`/.claude/commands/`](./.claude/commands/):

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

### Start In Codex

Codex should use prompts, not slash commands.

In this repo, slash commands live in [`.claude/commands/`](./.claude/commands/),
so they are Claude-specific wrappers.

Use one of these direct prompts in Codex instead:

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

## Copy One Of These Starts

Pick one lane first.

Do not mix the local SMB lane with the B2B lane.

If you are not sure which lane you are in:

- Claude Code: `/gtmbrain`
- Codex: `Read AGENTS.md and use the gtmbrain skill to route me.`

### Local SMB lane

Use this lane when you sell to local SMBs such as med spas, roofers, dentists,
restaurants, and other local operators.

- Prospecting:
  `Use the openmart-prospecting skill. Help me define the ICP, filters, reject rules, and approved-row standard for this local SMB campaign.`
- Enrichment:
  `Use the local-list-enriching skill. Tell me what owner, manager, contact, and qualification fields I need before outreach.`
- Emailing:
  `Use the local-emailing skill. Draft a local SMB outbound campaign for these approved leads.`
- Calling:
  `Use the local-cold-calling skill. Write a local SMB cold-call script for this segment and offer.`

### B2B lane

Use this lane when a software company is selling to another software company.

- Prospecting:
  `Use the b2b-prospecting skill. Help me define the ICP, buyer, trigger rules, and approved-row standard for this B2B motion.`
- Enrichment:
  `Use the b2b-enriching skill. Tell me what company, buyer, contact, and qualification fields I need before outreach.`
- Emailing:
  `Use the b2b-emailing skill. Draft a software-to-software B2B outbound campaign for these approved leads.`
- Calling:
  `Use the b2b-cold-calling skill. Write a B2B cold-call script for this segment and offer.`

### Other

- SEO:
  `Use the seo skill. Help me decide whether to improve this page or create a new one.`
- CRM starter:
  `Read AGENTS.md and help me adapt the KOL CRM starter for my workflow.`

## How To Iterate

1. Pick one lane.
2. Paste one starting prompt.
3. Let Codex or Claude read the repo-native docs and route you.
4. Leave with one clear output:
   an approved list, enriched rows, an email sequence, a call script, or a
   page plan.
5. Repeat weekly.

If you want deeper process, the agent will read the playbooks for you.

## What The Agent Reads

- `modules/` = playbooks and outputs
- `docs/` = shared GTM backbones and references
- `AGENTS.md`, `CLAUDE.md`, `.agents/skills/`, `.claude/` = AI-only routing and instruction files
- `packages/openmart/` = thin Openmart connector starter

If you want to run the starter app:

```bash
cd GTMbrain/modules/kol-crm/template
python3 -m http.server 4321
```

Then open `http://localhost:4321`.
