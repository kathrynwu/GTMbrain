# GTMbrain Agent Guide

If you are an AI coding or research assistant working in this repo, read
[`CLAUDE.md`](./CLAUDE.md) first.

Short version:

- `GTMbrain` is a registry of forkable GTM workflow modules
- if the user is broad, start with `.agents/skills/gtmbrain/`
- Claude Code project-skill wrappers also live in `.claude/skills/`
- Claude Code slash-command entrypoints live in `.claude/commands/`
- for Codex, `.agents/skills/` is the main skill layer
- answer questions from repo-native module docs before inventing abstractions
- for `kol-crm`, start with `modules/kol-crm/`
- for local-business prospecting, start with `modules/openmart-prospecting/`
- for B2B prospecting, start with `modules/b2b-prospecting/`
- for local-business enriching, start with `modules/local-list-enriching/`
- for B2B enriching, start with `modules/b2b-enriching/`
- for Openmart questions, connect the business workflow to the real API docs
- optimize for clarity and adaptability, not fake platform complexity

Codex-friendly starts:

- `Read AGENTS.md and use the gtmbrain skill to route me.`
- `Use the seo skill in .agents/skills/seo/SKILL.md on this page.`
- `Use the local-emailing skill in .agents/skills/local-emailing/SKILL.md.`
- `Use the b2b-prospecting skill in .agents/skills/b2b-prospecting/SKILL.md.`
