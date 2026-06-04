# API Surfaces

ETHRAEON exposes surfaces via Cloudflare Workers on the canonical account.

## Public Surfaces

| Surface | URL | Type | Auth |
|---------|-----|------|------|
| Enterprise front door | https://ethraeon.ai | CF Pages | Public |
| Technical playground | https://ethraeon.systems | CF Worker | Public |
| Research library | https://papers.ethraeon.ai | CF Pages | Public |
| Proof runtime | https://test-eqt.ethraeon.ai | CF Worker | Public |
| Systems navigation | https://constellation.ethraeon.ai | CF Pages | Public |
| Contact intake | https://contact.ethraeon.ai | CF Worker | Public |
| Rylin's Faith demo | https://ethraeon.ai/rylins-faith/ | CF Pages | Public |

## Gated Surfaces

| Surface | URL | Auth |
|---------|-----|------|
| VESPER cockpit | https://vesper.ethraeon.ai | Admin key (X-Admin-Key header) |
| Investor data room | https://ethraeon.ai/dataroom/ | NDA / request access |

## Worker Endpoints

| Worker | Route | Method | Notes |
|--------|-------|--------|-------|
| ethraeon-contact-worker | contact.ethraeon.ai/* | POST | HMAC-signed intake |
| ethraeon-vesper | vesper.ethraeon.ai/* | GET + POST | Admin key required |
| ethraeon-site-systems | ethraeon.systems/* | GET | Public |
| ethraeon-papers | papers.ethraeon.ai/* | GET | Public |
| vbm-intake | — | POST | VBM responses |

## No Unauthenticated Write Surfaces

All write surfaces require authenticated context (admin key, HMAC signature, or Stripe webhook verification).
