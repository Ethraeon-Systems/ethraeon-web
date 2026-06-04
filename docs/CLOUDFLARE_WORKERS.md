# Cloudflare Workers

49 Workers deployed on the canonical Cloudflare account.

## Key Workers

| Worker | Route | Role |
|--------|-------|------|
| ethraeon-vesper | vesper.ethraeon.ai/* | CEO operator cockpit |
| ethraeon-site-systems | ethraeon.systems/* | Developer playground |
| ethraeon-site-corporate | ethraeon.ai/* | Enterprise front door |
| ethraeon-contact-worker | contact.ethraeon.ai/* | Contact intake |
| ethraeon-papers | papers.ethraeon.ai/* | Research library |
| ethraeon-stripe-e2e-test | — | Stripe testing |
| ethraeon-docusign-webhook | — | DocuSign webhooks |
| ethraeon-control-tower | — | Internal monitoring |

## Infrastructure

- **Account**: Canonical Cloudflare account (7dc574860d3a96cc4dcc4f375e190422)
- **Pages Project**: ethraeon-ai (ethraeon.ai apex)
- **D1 Database**: ethraeon-d1-database
- **KV Namespace**: OPS_KV for operator state
- **R2 Bucket**: ethraeon-evidence for evidence storage

## Worker Categories

- 19 deployed/active via recent wrangler
- 49 total on canonical account
- POST-only/webhook workers: 4
- Provider-gated: 4 (Stripe, DocuSign)
- Internal-only: operator cockpit (VESPER)
