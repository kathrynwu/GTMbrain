# GTMbrain Agent Guide

Read [`CLAUDE.md`](./CLAUDE.md) first.

Use this repo as an iterative GTM system, not a pile of notes.

## Routing

- broad question: start with `.agents/skills/gtmbrain/`
- local-business prospecting: `modules/openmart-prospecting/`
- local-business enrichment: `modules/local-list-enriching/`
- local-business emailing: `modules/local-emailing/`
- local-business calling: `modules/cold-call/`
- B2B prospecting: `modules/b2b-prospecting/`
- B2B enrichment: `modules/b2b-enriching/`
- B2B emailing: `modules/b2b-emailing/`
- B2B calling: `modules/b2b-cold-calling/`
- SEO: `modules/seo/`
- CRM starter: `modules/kol-crm/`

## Rules

- answer from repo-native playbook docs before inventing abstractions
- keep the user moving through a clean loop:
  prospect -> enrich -> email/call -> report -> repeat
- route to the smallest useful playbook, not the whole repo
- keep local-business and B2B paths separate

## Good Codex Starts

- `Read AGENTS.md and use the gtmbrain skill to route me.`
- `Use the local-emailing skill in .agents/skills/local-emailing/SKILL.md.`
- `Use the b2b-prospecting skill in .agents/skills/b2b-prospecting/SKILL.md.`
- `Use the seo skill in .agents/skills/seo/SKILL.md on this page.`
