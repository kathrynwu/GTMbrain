# Email Verification

Use this note when the list is moving toward outbound and the question becomes:
"is this contact path safe enough to use?"

## Core rule

Every email should be verified before launch, even if the upstream source marks
it as valid.

Verification is not a nice-to-have.

It protects:

- deliverability
- sender reputation
- campaign efficiency

## What to verify

At minimum:

- whether the email is valid
- whether the domain is real
- whether the mailbox looks reachable

Useful supporting context:

- what the company does
- title
- LinkedIn profile
- whether the row already has another reachable channel

Those fields improve personalization and help route the row if email is weak.

## Verification workflow

1. Start with an approved list, not the raw export.
2. Run first-pass email verification.
3. Remove bad or unsafe emails from the active send list.
4. Keep verification status on the row.
5. If a large share of the file fails, review the source quality before
   scaling.
6. If the file still matters, run a second verification pass with another tool
   or send the rows to manual review.

## Practical rule for weak files

If a meaningful chunk of the list fails verification, do not force the launch.

The likely problem is one of:

- weak source quality
- stale data
- bad merge logic
- wrong segment

At that point, either:

- rerun verification with a stronger verifier
- tighten the source filters
- route the file back for review

## Manual signal enrichment

Sometimes the highest-value signal is not in a normal database.

Examples:

- technology stack
- hiring pattern
- specific operating workflow
- whether the company follows a process tied to conversion

In those cases:

- define a clear research playbook
- research only the cleaned list
- capture the signal in a structured field
- pay for signal quality, not just row count

This can be done manually or with a contractor if the rules are explicit.

## Useful tool categories

- first-pass email verifiers
- stronger second-pass verifiers for borderline lists
- LinkedIn and contact enrichment tools for alternate paths

Representative tools:

- NeverBounce
- ZeroBounce
- MillionVerifier
- Scrubby

## Best-practice rules

- verify every email before sending
- keep verification status visible on the row
- do not enrich the whole raw file just to find a few usable contacts
- if email is weak but LinkedIn is strong, keep the row for LinkedIn instead of
  forcing email
- use the cleaned list for any manual research so time is not wasted on leads
  that will never be contacted

## What not to do

- do not trust source-level "verified" flags blindly
- do not send from a file with obvious verification problems
- do not mix approved and unapproved rows in the same outbound queue
- do not lose the reason why a row failed verification
