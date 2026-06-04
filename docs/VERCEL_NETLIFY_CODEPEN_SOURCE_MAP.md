# Source Reservoir Map: Vercel / Netlify / CodePen

These are historical source reservoirs. Not active execution buses unless live-proven.

## Vercel

Vercel projects contain staging/prebuild examples of ETHRAEON systems built during early 2025 development.

Known content:
- Early ethraeon.ai primary domain staging
- Rylin's Faith pre-build (Next.js, staging only)
- ATLAS-6 engine examples
- ethraeon.systems staging builds
- Early web frame prototypes

**Status**: Historical source reservoir. Current production is served by Cloudflare Workers and Cloudflare Pages (not Vercel). Vercel projects are staging environments, not canonical production.

## Netlify

Netlify projects contain earlier deployment experiments (pre-Cloudflare migration).

**Status**: Historical source reservoir. All production runs on Cloudflare.

## CodePen

CodePen contains:
- **GENTHOS Legal Interface Engine** — built, indexed, handles legal setup tooling
- Bias-benchmark engine (BiasWatch) — Rust+Py
- Various governance demo previews
- Interface lab experiments

**Status**: Source material for public demos. Items cataloged in SYSTEMS_CATALOG.md. Public-safe items linked from [ethraeon.systems](https://ethraeon.systems) where appropriate.

## Status by System

| System | Vercel | Netlify | CodePen | Action |
|--------|--------|---------|---------|--------|
| Rylin's Faith | Pre-build present | No | No | Live on Cloudflare Pages |
| ATLAS-6 | Examples present | No | No | Documented, not deployed blindly |
| ethraeon.systems staging | Staging present | No | No | Live on Cloudflare Workers |
| GENTHOS Legal | No | No | Present | Indexed in systems catalog |
| BiasWatch | No | No | Present | Indexed, not deployed blindly |
| Primary domain (early) | Staging present | Early builds | No | Live on Cloudflare Pages |

## Principle

No stale prebuilds are deployed blindly. All production runs on sovereign metal (VPS) + Cloudflare edge. Source reservoirs are used to improve documentation and public system map, not to re-deploy stale code.
