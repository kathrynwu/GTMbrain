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
- CRM starter: `/gtmbrain`
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

Prefer a skill mention:

- broad start: `$gtmbrain`
- CRM starter: `$gtmbrain`
- local SMB prospecting: `$openmart-prospecting`
- local SMB enrichment: `$local-list-enriching`
- local SMB emailing: `$local-emailing`
- local SMB calling: `$local-cold-calling`
- B2B prospecting: `$b2b-prospecting`
- B2B enrichment: `$b2b-enriching`
- B2B emailing: `$b2b-emailing`
- B2B calling: `$b2b-cold-calling`
- SEO: `$seo`

If `$skill` does not surface in your Codex client, use the same request as a
plain prompt instead.

Example fallback:

- `Use the gtmbrain skill to route me.`
- `Use the openmart-prospecting skill for local SMB prospecting.`
- `Use the local-list-enriching skill for local SMB enrichment.`
- `Use the local-emailing skill for local SMB outbound.`

## Example

Example: you run a local advertising agency and want to outbound to med spas in
Phoenix.

### Claude Code

Paste these in order:

1. `/gtmbrain I run a local advertising agency and want to sell to med spas in Phoenix.`
2. `/openmart-prospecting Help me define the ICP, geography, filters, reject rules, and approved-row standard for Phoenix med spas.`
3. `/local-list-enriching Use Openmart to find the owner or real decision maker for these med spas, then tell me what email, phone, website, and qualification fields I need before outreach.`
4. `/local-emailing Draft a local SMB outbound campaign for these approved med spa leads, including subject lines, first-touch, follow-ups, CTA, and weekly review metrics.`
5. `Rewrite this for owners instead of front-desk staff.`
6. `Make the first-touch less agency-sounding.`
7. `Should this stay email-first or switch to calling?`

### Codex

Paste these in order:

If `$skill` does not surface in your Codex client, replace each line with the
same request as plain text.

1. `$gtmbrain I run a local advertising agency and want to sell to med spas in Phoenix.`
2. `$openmart-prospecting Help me define the ICP, geography, filters, reject rules, and approved-row standard for Phoenix med spas.`
3. `$local-list-enriching Use Openmart to find the owner or real decision maker for these med spas, then tell me what email, phone, website, and qualification fields I need before outreach.`
4. `$local-emailing Draft a local SMB outbound campaign for these approved med spa leads, including subject lines, first-touch, follow-ups, CTA, and weekly review metrics.`
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
- Codex: `$gtmbrain`

## Repo Notes

- `AGENTS.md`, `CLAUDE.md`, `.agents/skills/`, `.claude/` are for the agent
- `modules/` and `docs/` are the repo-native playbooks the agent reads
- starter CRM app: [`modules/kol-crm/`](./modules/kol-crm/)

## Contribute

Founders and GTM operators are welcome to add real examples, winning angles,
reject rules, benchmarks, and workflow improvements.

To get a review from me:

1. make your change on a branch or fork
2. open a pull request against `main`
3. fill in the PR template:
   what changed, which module it affects, and what real-world knowledge you added
4. `CODEOWNERS` should request `@kathrynwu` automatically
5. tag `@kathrynwu` directly too if you want faster review

`SEO` and the `CRM starter` are first versions and ready to test.
