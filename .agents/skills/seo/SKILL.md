---
name: seo
description: |
  Use when someone wants an SEO workflow, keyword prioritization, page-brief
  guidance, CTR versus position diagnosis, internal-linking advice, refresh
  rules, or help deciding whether to improve an existing page or create a new
  one.
---

# SEO

Use this skill when the user is asking about:

- SEO workflow
- keyword prioritization
- GSC impressions and queries
- CTR versus position diagnosis
- whether to improve a page or create a new page
- page structure
- internal linking
- refresh rules

## Read first

1. `modules/seo/README.md`
2. `modules/seo/PLAYBOOK.md`
3. `modules/seo/EXAMPLES.md`
4. `README.md`

## Workflow

1. Identify:
   - target page or query
   - main keyword or keyword cluster
   - current impressions
   - CTR
   - average position
   - product use case or buyer intent
2. If the input is still fuzzy, ask for:
   - page URL or page type
   - target query
   - impressions
   - CTR
   - average position
   - product or ICP the page should attract
3. Diagnose the main bottleneck first:
   - `low CTR`
   - `low position`
4. Decide the motion:
   - `A` improve the existing page now
   - `B` create a supporting or new page
   - `C` hold SEO expansion and fix ICP, product fit, or another channel bottleneck first
5. Recommend the keyword cluster and page structure.
6. Add internal-linking, refresh, and CTA guidance.

## Output shape

Default to giving:

- page or query summary
- `RECOMMENDATION: Choose X because ...`
- recommended motion: `A`, `B`, or `C`
- main keyword cluster
- what to fix first
- suggested page sections
- internal links to add
- refresh actions
- metrics to watch
- `Reply with A, B, or C.`

## Rules

- start from GSC traction, not blank keyword brainstorming
- diagnose `CTR` versus `position` before recommending changes
- use Semrush to validate volume and intent
- if the top results are mostly tutorials or blogs, treat that as blog intent
- do not chase high-volume keywords that are not ICP-fit
- prefer improving pages that already have impressions before creating too much new content
- each page section should help rank, qualify traffic, or convert
- use plain English
- end with `Reply with A, B, or C.` when giving next-step options
