# Test Cases

Use this file to sanity-check whether Claude Code and Codex are routing into
the right module and giving answers in the right shape.

## Launch-priority prompts

These are the first three prompts the repo should answer cleanly.

### 1. Local-business prospecting

Prompt:

`I need a local-business prospect list for med spas in Phoenix. Help me choose the right filters and tell me what to do next.`

Expected route:

- [`openmart-prospecting`](./modules/openmart-prospecting/)

Good answer should include:

- one-sentence ICP
- local-business filter logic
- reject logic
- next step should usually point to
  [`local-list-enriching`](./modules/local-list-enriching/)

### 2. B2B prospecting

Prompt:

`I sell data to Series A and Series B SaaS companies. Help me target the right buyer and signals.`

Expected route:

- [`b2b-prospecting`](./modules/b2b-prospecting/)

Good answer should include:

- buyer rule
- signal rule
- warning against junior-title noise
- next step should usually point to
  [`b2b-enriching`](./modules/b2b-enriching/)

### 3. Outbound diagnosis

Prompt:

`My open rate is 42% but response rate is 0.3%. Tell me what is wrong and what I should change next.`

Expected route:

- [`local-emailing`](./modules/local-emailing/)

Good answer should include:

- diagnosis that segment and buyer are likely wrong
- recommendation to rewrite the campaign rather than tweak one line
- reminder that polite replies from the wrong buyer are noise

## Additional prompts

### 4. Enrichment handoff

Prompt:

`I already have approved B2B rows. What fields do I need before CRM sync and outbound?`

Expected route:

- [`b2b-enriching`](./modules/b2b-enriching/)

Good answer should include:

- sequencing-ready row shape
- call-ready row shape
- reroute rule if the account is right but the buyer is wrong

### 5. SEO decision

Prompt:

`This page has 1800 impressions, 0.8% CTR, and average position 5.9. Should I improve the page or make a new one?`

Expected route:

- [`seo`](./modules/seo/)

Good answer should include:

- CTR versus position diagnosis
- improve-versus-new-page recommendation
- next-step page changes
