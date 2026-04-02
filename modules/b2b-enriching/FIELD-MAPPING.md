# B2B Enriching Field Mapping

Use this as the stable handoff shape between approved B2B rows and outbound.

## Sequencing-ready row

At minimum:

- `company_name`
- `contact_name`
- `title`
- `email`
- `phone`
- `linkedin_profile`
- `company_type`
- `business_size`
- `what_company_does`
- `company_summary_line`
- `company_context_line`
- `verification_status`
- `buyer_fit`
- `notes`

## Call-ready row

Use the same core shape.

Calling still needs:

- email
- phone
- company details
- one-line company summary
- one-line context
- buyer title
- enough context that the rep can start immediately

If phone quality is weak, do not mark the row call-ready just because the rest
of the row looks good.
