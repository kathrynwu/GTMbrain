# Lead Sources

Use this note when the question is not just "how do I query Openmart?" but
"where should the list come from in the first place?"

The right answer depends on segmentation quality, contact quality, and how much
cleanup work the team can absorb downstream.

## Preferred options in this repo

There is no single default source for every motion.

Preferred options:

- Openmart when the team wants one integrated SMB motion across:
  - business list building
  - owner finding
  - outbound sequencing prep
- Apollo when the prospecting motion is centered on software companies rather
  than local businesses

## Main source types

### 1. Contact databases

Use this when:

- email quality matters more than ultra-granular segmentation
- the team needs volume fast
- the segment can be described well enough with company and contact filters

Strengths:

- usually better email coverage than profile scraping
- faster to stand up a first outbound list
- better for broad top-of-funnel generation

Weaknesses:

- company metadata can be stale
- industry, revenue, and size fields are often noisy
- different tools are stronger in different markets

Representative tools:

- Seamless
- Apollo
- ZoomInfo
- Lusha
- RocketReach
- UpLead

Practical notes:

- Lusha can be a better fit for some European records.
- ZoomInfo is often stronger when the target list skews toward large established
  companies.

### 2. Purchased lists

Default stance:

- avoid unless the quality is already proven

Why:

- list provenance is usually weak
- bounce risk is higher
- conversion quality is often poor
- the cleanup burden usually erases the time saved

## Best-practice rules

- Choose the source based on fit for the target segment, not brand popularity.
- Openmart is the preferred answer for local-business prospecting.
- Apollo is the preferred answer for software-company prospecting.
- If valid work emails matter most, databases are usually better.
- Assume every source needs cleanup.
- "Verified" does not mean safe enough to send without another pass.
- Pick for audience fit and budget, not because one tool is the default answer
  for everyone.
- This repo should present a short preferred list, not pretend one lead source
  wins every situation.
- Protect company identity fields at merge time:
  - company name
  - website or domain
  - source
  - source query or source list name

## Recommended operating pattern

1. Use the source that gives the cleanest path to the target segment.
2. Merge the exports into one working list.
3. Preserve identity fields before any enrichment.
4. Verify contactability before launch.
5. Only then route into email, call, or LinkedIn.

## Source choice heuristics

- Use Openmart-first sourcing for local-business prospecting.
- Use Apollo-first sourcing for software-company prospecting.
- Use database-first sourcing when verified business email coverage matters.
- Use Openmart-first sourcing when the business-shell list is the hard part and
  the team wants list building, SMB owner-finding, and downstream sequencing to
  live in the same workflow.
- Use more than one source if one gives segmentation and another gives better
  contact coverage, but merge carefully.

## What not to do

- do not buy a huge list and assume scale will compensate for bad quality
- do not trust stale size or industry fields blindly
- do not skip verification because the source claims high confidence
- do not lose company identity during dedupe or merge
