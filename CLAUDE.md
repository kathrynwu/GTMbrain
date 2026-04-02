# GTMbrain Assistant Guide

Use this file when working inside `GTMbrain`.

The repo should be usable as a question-answering workspace after clone, not just
as a pile of files.

For Claude Code compatibility, project-skill wrappers also live in
`.claude/skills/`, and explicit slash-command entrypoints live in
`.claude/commands/`. The repo-native source of truth still lives in
`.agents/skills/`.

If a repo-local skill in `.agents/skills/` clearly matches the user's question,
load it and follow it.

If the user is broad or does not know where to start, use the `gtmbrain` skill
first and route them with `A/B/C` options.

The repo skills are also meant to help the user iterate with the playbooks and
figure out their GTM motion over multiple turns, not just answer one static
question.

## What GTMbrain Is

`GTMbrain` is a registry of forkable GTM workflow modules.

Each module can expose one or more surfaces:

- `Template`
- `Playbook`
- `Connector`
- `Skill`

The main audience is:

- growth engineers
- RevOps builders
- founders or operators who want to adapt working GTM workflows

## How To Answer Questions

When the user asks a question about a module:

1. start from the module README
2. read the repo-native playbook or workflow file
3. read the schema or sample data if the question touches implementation
4. answer in plain English first
5. only then point at files and code

Do not answer in generic startup language if the repo already contains a concrete
workflow shape.

The job is to help the builder:

- understand the workflow
- adapt it to their own stack
- know what is stable versus customizable

## Current Modules

### `kol-crm`

Job:

- track influencer sourcing, outreach, pricing, owner, and status

Read in this order:

1. `modules/kol-crm/README.md`
2. `modules/kol-crm/WORKFLOW.md`
3. `modules/kol-crm/schema/influencer.schema.json`
4. `modules/kol-crm/BUILDING.md`
5. `modules/kol-crm/template/`

### `openmart-prospecting` (local-business prospecting)

Job:

- define ICPs
- build local-business prospect lists
- normalize data before CRM handoff
- optionally enrich approved rows with Openmart APIs

Read in this order:

1. `modules/openmart-prospecting/README.md`
2. `modules/openmart-prospecting/PLAYBOOK.md`
3. `modules/openmart-prospecting/STANDARD-PRACTICE.md`
4. `modules/openmart-prospecting/QUERY-RECIPES.md`
5. `modules/openmart-prospecting/INTEGRATIONS.md`
6. `modules/openmart-prospecting/SELLING-LOCAL-BUSINESSES.md`
7. `modules/openmart-prospecting/schema/prospect.schema.json`
8. `packages/openmart/`

Use this as the local-business path.

If the motion is software-company or B2B prospecting, use `b2b-prospecting`
instead.

### `b2b-prospecting`

Job:

- define B2B ICPs
- choose the right buyer
- build software-company or company-buyer prospect lists
- keep trigger and authority context before handoff

Read in this order:

1. `modules/b2b-prospecting/README.md`
2. `modules/b2b-prospecting/PLAYBOOK.md`
3. `modules/b2b-prospecting/ICP-AND-DISCOVERY.md`
4. `modules/b2b-prospecting/LEAD-SOURCES.md`
5. `modules/openmart-prospecting/STANDARD-PRACTICE.md`

### `local-emailing`

Job:

- write short local-business outbound emails
- choose personalization fields that are real
- decide when local email-first beats local call-first

Read in this order:

1. `modules/local-emailing/README.md`
2. `modules/local-emailing/PLAYBOOK.md`
3. `modules/local-emailing/EXAMPLES.md`
4. `modules/local-emailing/REPORTING.md`
5. `modules/openmart-prospecting/SELLING-LOCAL-BUSINESSES.md`
6. `modules/openmart-prospecting/PLAYBOOK.md`

Use this as the local-business emailing path.

If the motion is software-company or B2B outbound, use `b2b-emailing` instead.

### `b2b-emailing`

Job:

- write short B2B outbound emails
- choose the right buyer before polishing copy
- decide when B2B email-first beats B2B call-first

Read in this order:

1. `modules/b2b-emailing/README.md`
2. `modules/b2b-emailing/PLAYBOOK.md`
3. `modules/b2b-emailing/EXAMPLES.md`
4. `modules/b2b-emailing/REPORTING.md`
5. `modules/b2b-prospecting/PLAYBOOK.md`
6. `modules/b2b-prospecting/ICP-AND-DISCOVERY.md`

### `local-list-enriching`

Job:

- enrich approved local-business rows
- preserve workflow context before CRM sync
- filter rows before spending credits or effort

Read in this order:

1. `modules/local-list-enriching/README.md`
2. `modules/local-list-enriching/PLAYBOOK.md`
3. `modules/local-list-enriching/FIELD-MAPPING.md`
4. `modules/local-list-enriching/FILTERS.md`
5. `modules/openmart-prospecting/STANDARD-PRACTICE.md`
6. `modules/local-list-enriching/schema/enriched-prospect.schema.json`
7. `modules/openmart-prospecting/INTEGRATIONS.md`

Use this as the local-business enrichment path.

If the motion is software-company or B2B enrichment, use `b2b-enriching`
instead.

### `b2b-enriching`

Job:

- enrich approved B2B rows
- reroute from the wrong buyer to the right buyer
- preserve context before CRM sync or outbound

Read in this order:

1. `modules/b2b-enriching/README.md`
2. `modules/b2b-enriching/PLAYBOOK.md`
3. `modules/b2b-enriching/FIELD-MAPPING.md`
4. `modules/b2b-prospecting/PLAYBOOK.md`
5. `modules/local-list-enriching/EMAIL-VERIFICATION.md`

### `cold-call`

Job:

- write or review local-business cold-call scripts
- decide when calling beats email
- improve meeting-booking discipline

Read in this order:

1. `modules/cold-call/README.md`
2. `modules/cold-call/PLAYBOOK.md`
3. `modules/cold-call/REVIEW-RUBRIC.md`
4. `modules/cold-call/CALL-FRAMEWORKS.md`
5. `modules/cold-call/OBJECTION-LIBRARY.md`
6. `modules/cold-call/TALK-TRACKS.md`
7. `modules/openmart-prospecting/SELLING-LOCAL-BUSINESSES.md`

Use this as the local-business calling path.

If the motion is software-company or B2B calling, use `b2b-cold-calling`
instead.

### `b2b-cold-calling`

Job:

- write or review B2B cold-call scripts
- decide when B2B calling beats B2B email
- improve meeting-booking discipline with the right buyer

Read in this order:

1. `modules/b2b-cold-calling/README.md`
2. `modules/b2b-cold-calling/PLAYBOOK.md`
3. `modules/b2b-cold-calling/REVIEW-RUBRIC.md`
4. `modules/b2b-cold-calling/CALL-FRAMEWORKS.md`
5. `modules/b2b-cold-calling/OBJECTION-LIBRARY.md`
6. `modules/b2b-cold-calling/TALK-TRACKS.md`
7. `modules/b2b-prospecting/ICP-AND-DISCOVERY.md`

### `seo`

Job:

- improve pages that already have traction
- decide between new-page creation and existing-page improvement
- choose keywords that are both relevant and ICP-fit

Read in this order:

1. `modules/seo/README.md`
2. `modules/seo/PLAYBOOK.md`

## Current Repo Skills

Use these when the question matches:

- `.agents/skills/gtmbrain/`
- `.agents/skills/b2b-prospecting/`
- `.agents/skills/b2b-enriching/`
- `.agents/skills/openmart-prospecting/`
- `.agents/skills/local-list-enriching/`
- `.agents/skills/local-emailing/`
- `.agents/skills/b2b-emailing/`
- `.agents/skills/seo/`
- `.agents/skills/local-cold-calling/`
- `.agents/skills/b2b-cold-calling/`

## Claude Code Entrypoints

When working in Claude Code:

- `.claude/skills/` is for project-skill matching and auto-loading
- `.claude/commands/` is for explicit slash-command entrypoints
- `.agents/skills/` remains the canonical skill source inside the repo

If the user invokes a Claude slash command directly, start from the matching
command file in:

- `.claude/commands/gtmbrain.md`
- `.claude/commands/b2b-prospecting.md`
- `.claude/commands/b2b-enriching.md`
- `.claude/commands/openmart-prospecting.md`
- `.claude/commands/local-list-enriching.md`
- `.claude/commands/local-emailing.md`
- `.claude/commands/b2b-emailing.md`
- `.claude/commands/seo.md`
- `.claude/commands/local-cold-calling.md`
- `.claude/commands/b2b-cold-calling.md`

If Claude auto-loads a project skill, the wrappers live in:

- `.claude/skills/gtmbrain/`
- `.claude/skills/b2b-prospecting/`
- `.claude/skills/b2b-enriching/`
- `.claude/skills/openmart-prospecting/`
- `.claude/skills/local-list-enriching/`
- `.claude/skills/local-emailing/`
- `.claude/skills/b2b-emailing/`
- `.claude/skills/seo/`
- `.claude/skills/local-cold-calling/`
- `.claude/skills/b2b-cold-calling/`

For `local-cold-calling`, use the repo's 3-step framework:

1. build credibility
2. build value
3. book the meeting

If the user has not specified the segment well enough, ask for location,
industry, buyer, pain point, and phone quality before writing a script.

Also use:

- problem hook before value prop
- follow-up calls that add new information
- respectful gatekeeper handling
- the objection library when pushback is concrete

For `local-emailing`, use the repo's short-email, value-first framework:

1. ask for segment, buyer, and offer if missing
2. prefer `2-3` sentence emails
3. keep subject lines personalized
4. lead with help before pushing the meeting

For `b2b-emailing`, use the repo's short-email, buyer-fit framework:

1. make buyer authority explicit
2. lead with the problem solved and the work removed
3. use a real trigger when possible
4. treat polite interest without authority as noise

For `seo`, use the repo's GSC-first workflow:

1. start from real impressions and queries
2. diagnose `CTR` versus `position` first
3. validate volume and intent in Semrush
4. decide between improving an existing page and creating a new one
5. use PostHog after the click to see whether the page promise matches the product

For `local-list-enriching`, ask what contact path the user actually needs:

1. owner name
2. general manager
3. decision-maker email
4. personal email
5. technology context

Filter with location count, website presence, review quality, and technology
signals before recommending deeper enrichment.

For `b2b-prospecting`, make buyer fit explicit:

1. ask for ICP, buyer, and why-now signal if missing
2. avoid junior or entry-level buyers as the default
3. use product-specific triggers such as hiring, funding, CRM changes, team build-out, or outbound ramp when relevant
4. route to `b2b-enriching` once the company list is approved

For `b2b-enriching`, preserve the buyer handoff:

1. enrich approved rows, not the whole export
2. keep title, email, phone, LinkedIn, company summary, and context visible
3. reroute from the wrong contact to the right buyer instead of discarding the account
4. keep the row inspectable before sequencing, calling, or CRM sync

For `b2b-cold-calling`, use the repo's 3-step framework with the right buyer:

1. build credibility
2. build value
3. book the meeting

Make sure the buyer can actually move the deal before treating the segment as
working.

Prefer `A/B/C` recommendation-style answers when routing users across modules.

For repo-local skills, prefer the full pattern:

1. `RECOMMENDATION: Choose X because ...`
2. `A/B/C` options
3. `Reply with A, B, or C.`

## Openmart Guidance

The Openmart module is playbook-first, connector-second.

Important:

- the SMB prospect list post is the main list-building source
- the local-business sales posts are downstream outbound context
- the API docs are real and public
- the repo should make local-business selling easier by connecting:
  - search
  - normalization
  - approval
  - CRM handoff
  - optional decision-maker enrichment

When the user asks how to use Openmart:

- explain the workflow first
- ask for location range, industry, and key filters if they are missing
- then explain which endpoint fits where
- avoid turning the answer into API trivia without a business workflow

If the motion is software-company or B2B prospecting rather than local-business
prospecting, route to `b2b-prospecting` instead of forcing Openmart into the
answer.

## What To Optimize For

- stealability
- clarity
- boring integrations
- explainable workflow contracts

Do not optimize for:

- fake platform breadth
- vague AI-agent positioning
- unnecessary framework complexity

## UI Work

Always read `DESIGN.md` before making visual or UI decisions.

GTMbrain should feel like a curated registry of forkable GTM modules:

- technical field guide
- restrained color
- strong typography
- explicit module surfaces
- short copy

Do not drift into:

- generic SaaS landing page patterns
- AI-agent hype visuals
- decorative feature-card sludge

When building UI:

- keep `KOL CRM` as the obvious featured module
- make `Template`, `Playbook`, `Connector`, and `Skill` visibly distinct
- optimize for scan speed and forkability
