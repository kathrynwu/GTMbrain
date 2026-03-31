# GTMbrain Assistant Guide

Use this file when working inside `GTMbrain`.

The repo should be usable as a question-answering workspace after clone, not just
as a pile of files.

If a repo-local skill in `.agents/skills/` clearly matches the user's question,
load it and follow it.

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

### `openmart-prospecting`

Job:

- define ICPs
- build local-business prospect lists
- normalize data before CRM handoff
- optionally enrich approved rows with Openmart APIs

Read in this order:

1. `modules/openmart-prospecting/README.md`
2. `modules/openmart-prospecting/PLAYBOOK.md`
3. `modules/openmart-prospecting/QUERY-RECIPES.md`
4. `modules/openmart-prospecting/INTEGRATIONS.md`
5. `modules/openmart-prospecting/SELLING-LOCAL-BUSINESSES.md`
6. `modules/openmart-prospecting/schema/prospect.schema.json`
7. `packages/openmart/`

### `local-emailing`

Job:

- write short local-business outbound emails
- choose personalization fields that are real
- decide when email-first beats call-first

Read in this order:

1. `modules/local-emailing/README.md`
2. `modules/local-emailing/PLAYBOOK.md`
3. `modules/local-emailing/EXAMPLES.md`
4. `modules/openmart-prospecting/SELLING-LOCAL-BUSINESSES.md`

## Current Repo Skills

Use these when the question matches:

- `.agents/skills/openmart-prospecting/`
- `.agents/skills/local-list-enriching/`
- `.agents/skills/local-emailing/`
- `.agents/skills/local-cold-calling/`

For `local-cold-calling`, use the repo's 3-step framework:

1. build credibility
2. build value
3. book the meeting

If the user has not specified the segment well enough, ask for location,
industry, buyer, pain point, and phone quality before writing a script.

For `local-emailing`, use the repo's short-email, value-first framework:

1. ask for segment, buyer, and offer if missing
2. prefer `2-3` sentence emails
3. keep subject lines personalized
4. lead with help before pushing the meeting

For `local-list-enriching`, ask what contact path the user actually needs:

1. owner name
2. general manager
3. decision-maker email
4. personal email
5. technology context

Filter with location count, website presence, review quality, and technology
signals before recommending deeper enrichment.

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
