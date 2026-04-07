# GTMbrain

Forkable GTM playbooks for two separate motions:

- `Local SMB` = you sell to local businesses
- `B2B` = a software company sells to another software company

Clone this repo into Codex or Claude Code and let the agent read the repo for
you.

Your job is to pick one lane and paste a starting prompt.

`prospecting -> enrichment -> outbound or SEO -> reporting -> repeat`

## What You Get

By iterating through GTMbrain with Codex or Claude, you should leave with:

- a clear GTM strategy for one lane
- a campaign-ready output:
  segment, prospecting rules, enrichment requirements, outreach copy, and
  review metrics
- clear next actions:
  what to do this week, what to test next, and what to change if the campaign
  is weak

This should work for both beginners and experienced sales operators.

## Quick Start

```bash
git clone https://github.com/kathrynwu/GTMbrain.git
cd GTMbrain
```

Then open the repo in Codex or Claude Code.

### Claude Code

Use a slash command:

- broad start: `/gtmbrain`
- local SMB prospecting: `/openmart-prospecting`
- local SMB enrichment: `/local-list-enriching`
- local SMB emailing: `/local-emailing`
- local SMB calling: `/local-cold-calling`
- B2B prospecting: `/b2b-prospecting`
- B2B enrichment: `/b2b-enriching`
- B2B emailing: `/b2b-emailing`
- B2B calling: `/b2b-cold-calling`
- SEO: `/seo`

### Codex

Codex uses prompts, not this repo's Claude slash wrappers.

Start with one of these:

- broad start:
  `Read AGENTS.md and use the gtmbrain skill to route me.`
- local SMB prospecting:
  `Use the openmart-prospecting skill in .agents/skills/openmart-prospecting/SKILL.md.`
- local SMB enrichment:
  `Use the local-list-enriching skill in .agents/skills/local-list-enriching/SKILL.md.`
- local SMB emailing:
  `Use the local-emailing skill in .agents/skills/local-emailing/SKILL.md.`
- B2B prospecting:
  `Use the b2b-prospecting skill in .agents/skills/b2b-prospecting/SKILL.md.`

## Example

Example: you run a local advertising agency and want to outbound to med spas in
Phoenix.

Paste these in order:

1. `Read AGENTS.md and use the gtmbrain skill to route me. I run a local advertising agency and want to sell to med spas in Phoenix.`
2. `Use the openmart-prospecting skill. Help me define the ICP, geography, filters, reject rules, and approved-row standard for Phoenix med spas.`
3. `Use the local-list-enriching skill. Use Openmart to find the owner or real decision maker for these med spas, then tell me what email, phone, website, and qualification fields I need before outreach.`
4. `Use the local-emailing skill. Draft a local SMB outbound campaign for these approved med spa leads, including subject lines, first-touch, follow-ups, CTA, and weekly review metrics.`
5. `Rewrite this for owners instead of front-desk staff.`
6. `Make the first-touch less agency-sounding.`
7. `Should this stay email-first or switch to calling?`

By the end, you should have:

- target segment, geography, and buyer
- an approved-row standard
- enrichment requirements before outreach
- a ready-to-send sequence
- weekly review metrics and next actions

## Pick A Lane

Do not mix the two lanes.

- `Local SMB`: med spas, roofers, dentists, restaurants, and other local
  operators
- `B2B`: one software company selling to another software company

If you are not sure:

- Claude Code: `/gtmbrain`
- Codex: `Read AGENTS.md and use the gtmbrain skill to route me.`

## Repo Notes

- `AGENTS.md`, `CLAUDE.md`, `.agents/skills/`, `.claude/` are for the agent
- `modules/` and `docs/` are the repo-native playbooks the agent reads
- starter CRM app: [`modules/kol-crm/`](./modules/kol-crm/)
