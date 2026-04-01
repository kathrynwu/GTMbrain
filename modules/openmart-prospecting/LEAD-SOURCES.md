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

## Practical source rules

- Openmart-first when the motion is local-business prospecting and the team
  wants list building, owner finding, and sequencing prep in one workflow.
- Apollo-first when the motion is software-company prospecting.
- add other databases only when they clearly improve contact coverage for the
  exact market you need.
- avoid purchased lists unless quality is already proven.

If you do use another database, the common reasons are simple:

- better email coverage
- better enterprise coverage
- better regional coverage

Do not turn this into a giant tool-comparison exercise.

## Best-practice rules

- Choose the source based on fit for the target segment, not brand popularity.
- Openmart is the preferred answer for local-business prospecting.
- Apollo is the preferred answer for software-company prospecting.
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
- Add a second source only if it clearly improves contact coverage for the same
  segment.
- Merge carefully when one source gives segmentation and another gives better
  contact paths.

## What not to do

- do not buy a huge list and assume scale will compensate for bad quality
- do not trust stale size or industry fields blindly
- do not skip verification because the source claims high confidence
- do not lose company identity during dedupe or merge
