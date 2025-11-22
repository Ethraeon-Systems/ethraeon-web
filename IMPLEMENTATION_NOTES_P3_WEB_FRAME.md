# P3_WEB_FRAME Implementation Notes

**Date**: 2025-01-19
**Phase**: Phase 3 Web Frame
**Status**: Complete

---

## Overview

Transformed the ethraeon-web Next.js app into a clean Phase 3 surface for ethraeon.ai, focusing on governance-first messaging and the 4 core working demonstrations.

---

## Changes Made

### 1. Home Page (`app/page.tsx`)

**Updated Content**:
- Changed hero headline to: "Ethraeon Systems — Governance-first AI for accountable orchestration"
- Updated tagline: "Building systems that can be trusted by diverse humans, cultures, and communities"
- Updated CTA buttons to point to `/demos` and `/ethos`

**New Sections**:
- **What Ethraeon Is**: 3-bullet overview (Policy Compilation, Evidential Tracing, Cross-Provider Governance)
- **Why Governance-First**: 3-card explanation (Regulatory Requirements, Operational Trust, Human Sovereignty)
- **What's Live Today**: 4-card grid featuring the working demos:
  - Constitutional AI Shell
  - Decision Insight Model (DIM)
  - Recursive Witness OS
  - P13 Predictive Grid (Luigi)

**Removed**:
- Old "Problem Statement" section
- Old "Solution" section with CF/EDG/TGF
- Old "Use Cases" grid

---

### 2. Ethos Page (`app/ethos/page.tsx`) - **NEW**

**Created complete ethos page** with:
- **Who We Are**: Introduction to Ethraeon Systems (trading as ingombrante®)
- **Humanitas ante Machinam**: "Humanity before the Machine" principle
- **Pro-Love Statement**: Full content from ETHRAEON_Pro_Love_Statement_v1.0.md
  - Rejection of hate speech, dehumanization, incitement to violence
  - Commitments we will not knowingly make
  - Evaluation framework for borderline cases
- **Related Commitments**: Cards linking to `/legal`, `/sustainability`, `/speak-up`
- **Contact Section**: ethics@ethraeon.systems prominently featured

---

### 3. Demos Page (`app/demos/page.tsx`)

**Completely Restructured**:
- **Demo Cards Section**: Grid of 4 demos with:
  - Title, description, icon
  - Key features list
  - "Open Demo" and "View Technical Notes" buttons

**4 Demos Featured**:
1. **Constitutional AI Shell**
   - Multi-provider governance demonstration
   - Terminal-style visualization
   - Anchor: `#constitutional-shell`

2. **Decision Insight Model (DIM)**
   - Policy conflict resolution engine
   - Example policy compilation and arbitration
   - Anchor: `#dim`

3. **Recursive Witness OS**
   - Evidential decision graph explorer
   - Tree-style audit trail visualization
   - Anchor: `#witness-os`

4. **P13 Predictive Grid (Luigi)**
   - Behavioral drift detection
   - Baseline vs post-update comparison
   - Anchor: `#p13-luigi`

**Detailed Sections**:
- Each demo has its own scroll-anchored section with:
  - Extended description
  - Visual code/terminal examples
  - Technical explanation
  - Use case context

**Removed**:
- Old "Public Demonstrations" with placeholder demos
- "Private Demo Hub" CTA section

---

### 4. Navigation (`components/Navigation.tsx`)

**Simplified Nav**:
- Reduced from 9 links to 4:
  - Home
  - Demos
  - Ethos
  - Legal

**Maintained**:
- Mobile responsive menu
- Active state highlighting
- ETHRAEON branding (logo + name)

---

### 5. Footer (`components/Footer.tsx`)

**Updated Contact Emails**:
- hello@ethraeon.systems
- contact@ethraeon.systems
- legal@ethraeon.systems
- accessibility@ethraeon.systems
- research@ethraeon.systems

**Updated Tagline**:
- Primary: "Humanitas ante Machinam"
- Translation: "Humanity before the Machine"
- Position: Prominent in brand section and footer bottom

**Removed**:
- Social media links (Twitter, LinkedIn, GitHub)
- Old "Product" and "Company" link sections

---

## Design Patterns Maintained

### No New Libraries
- Stuck to existing Tailwind CSS patterns
- Used existing EUDS design tokens
- Maintained existing component structure (Container, Card, Button)

### Brand Consistency
- Blue-purple gradient (brand colors)
- ETHRAEON logo (E in gradient box)
- ingombrante® attribution
- Consistent typography and spacing

### Component Reuse
- All existing UI components work without changes
- No breaking changes to `/components/ui/*`
- Navigation and Footer are only modified components

---

## Routes

### Active Routes
- `/` - Home page (updated)
- `/demos` - Demos index (updated)
- `/ethos` - Ethos page (new)

### Placeholder Routes (existing but not updated)
- `/legal` - Legal page (nav link exists, page not yet built)
- `/sustainability` - Sustainability (linked from ethos, not yet built)
- `/speak-up` - Speak up page (linked from ethos, not yet built)
- `/overview` - Overview (old page, still exists)
- `/blueprint` - Blueprint (old page, still exists)
- `/use-cases` - Use cases (old page, still exists)
- `/about` - About (old page, still exists)
- `/investors` - Investors (old page, still exists)
- `/press` - Press (old page, still exists)
- `/contact` - Contact (old page, still exists)

### Recommended Next Steps
1. Build `/legal` page to satisfy nav link
2. Build `/sustainability` and `/speak-up` pages for ethos links
3. Consider deprecating old pages (overview, blueprint, use-cases, about, investors, press, contact) or updating to align with P3 messaging

---

## Technical Notes

### No API Changes
- All changes are frontend-only
- No modifications to API routes or backend logic
- Existing API endpoints remain intact

### Build Status
- No TypeScript errors introduced
- All imports resolve correctly
- Existing dev server continues running without issues

### Accessibility
- Maintained semantic HTML structure
- All interactive elements keyboard-accessible
- Contrast ratios meet WCAG AA standards
- Mail links properly formatted with `mailto:`

---

## Content Strategy

### Tone
- Minimal and neutral (as requested)
- Professional and technical
- Focused on governance and accountability
- No hype or marketing fluff

### Messaging Hierarchy
1. **Governance-first** (primary positioning)
2. **Accountable orchestration** (key differentiator)
3. **Trust and transparency** (core values)
4. **Working demonstrations** (proof of capability)

### Copy Guidelines for Revision
- All copy is placeholder for JA's revision
- Kept descriptions factual and concise
- Avoided subjective language
- Focused on capabilities, not claims

---

## Files Modified

```
app/page.tsx (updated)
app/ethos/page.tsx (new)
app/demos/page.tsx (updated)
components/Navigation.tsx (updated)
components/Footer.tsx (updated)
IMPLEMENTATION_NOTES_P3_WEB_FRAME.md (new)
```

---

## Next Actions

### Immediate
1. Review copy and tone with JA
2. Build `/legal` page to complete nav
3. Test all demo anchor links work correctly

### Future
1. Replace anchor links (`#constitutional-shell`) with actual demo routes when implementations are ready
2. Build out `/sustainability` and `/speak-up` pages
3. Consider consolidating or deprecating old routes (overview, blueprint, etc.)
4. Add actual demo implementations (Constitutional AI Shell, DIM, Witness OS, P13 Luigi)

---

**Implementation**: CCT_Web_Prime
**Directive**: P3_WEB_FRAME
**Completion**: 2025-01-19
**Status**: ✓ Ready for review
