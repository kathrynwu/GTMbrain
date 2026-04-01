# Lead Sources

Use this note when the question is not just "how do I query Openmart?" but
"where should the list come from in the first place?"

The right answer depends on segmentation quality, contact quality, and how much
cleanup work the team can absorb downstream.

## Main source types

### 1. Professional-network extraction

Use this when:

- title and company filtering need to be very precise
- the segment is easier to define by role than by business category
- the team also wants a parallel LinkedIn motion

Strengths:

- best segmentation control
- strong title-level targeting
- useful when company attributes in databases are stale

Weaknesses:

- work email quality is often worse than the profile quality
- many profiles use personal or throwaway addresses upstream, so downstream
  email quality can be uneven
- still needs verification before outreach

Representative tools:

- LinkedIn Sales Navigator
- Dripify
- Dux-Soup
- LeadIQ
- Findymail

### 2. Contact databases

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

- Apollo
- ZoomInfo
- Lusha
- RocketReach
- UpLead

### 3. Purchased lists

Default stance:

- avoid unless the quality is already proven

Why:

- list provenance is usually weak
- bounce risk is higher
- conversion quality is often poor
- the cleanup burden usually erases the time saved

## Best-practice rules

- Choose the source based on fit for the target segment, not brand popularity.
- If precise segmentation matters most, profile-first sources can be better.
- If valid work emails matter most, databases are usually better.
- Assume every source needs cleanup.
- "Verified" does not mean safe enough to send without another pass.
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

- Use profile-first sourcing when role precision and LinkedIn context matter.
- Use database-first sourcing when verified business email coverage matters.
- Use Openmart-first sourcing when the business-shell list is the hard part and
  contact enrichment happens later.
- Use more than one source if one gives segmentation and another gives better
  contact coverage, but merge carefully.

## What not to do

- do not buy a huge list and assume scale will compensate for bad quality
- do not trust stale size or industry fields blindly
- do not skip verification because the source claims high confidence
- do not lose company identity during dedupe or merge
