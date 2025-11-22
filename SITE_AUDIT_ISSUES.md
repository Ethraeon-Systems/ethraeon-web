# SITE_AUDIT_ISSUES

**Generated**: 2025-01-19
**Agent**: CCT_Web_Prime
**Purpose**: Identify broken links and missing assets

---

## Broken Links Audit

### Internal Links (Dead Routes)

#### From Home Page (`app/page.tsx`)

**Line 150-152**: Link to Constitutional Shell anchor
```tsx
<Link href="/demos#constitutional-shell" ...>
```
**Status**: ⚠️ Anchor works BUT no standalone route
**Issue**: Clicking redirects to `/demos` with anchor, but `/demos/constitutional-shell` doesn't exist
**Fix**: Create `/demos/constitutional-shell/page.tsx`

**Line 161-163**: Link to DIM anchor
```tsx
<Link href="/demos#dim" ...>
```
**Status**: ⚠️ Same issue as above
**Fix**: Create `/demos/dim/page.tsx`

**Line 172-174**: Link to Witness OS anchor
```tsx
<Link href="/demos#witness-os" ...>
```
**Status**: ⚠️ Same issue
**Fix**: Create `/demos/witness/page.tsx`

**Line 183-185**: Link to P13 anchor
```tsx
<Link href="/demos#p13-luigi" ...>
```
**Status**: ⚠️ Same issue
**Fix**: Create `/demos/p13/page.tsx`

#### From Demos Page (`app/demos/page.tsx`)

**Line 27-28**: Demo URL
```tsx
demoUrl: '#constitutional-shell',
docsUrl: '#docs-shell'
```
**Status**: ❌ Broken - anchor-only links
**Issue**: Should link to full routes, not just anchors
**Fix**: Update to proper routes:
```tsx
demoUrl: '/demos/constitutional-shell',
docsUrl: '/demos/constitutional-shell#technical-notes'
```

**Lines 43-44, 59-60, 75-76**: Same issue for all 4 demos
**Fix**: Update all `demoUrl` and `docsUrl` in demo configuration

#### From Ethos Page (`app/ethos/page.tsx`)

**Line 167**: Link to Legal
```tsx
<Link href="/legal" ...>
```
**Status**: ✓ Working (page exists)

**Line 178**: Link to Sustainability
```tsx
<Link href="/sustainability" ...>
```
**Status**: ❌ 404 - Page doesn't exist
**Fix**: Create `/app/sustainability/page.tsx` or remove link

**Line 189**: Link to Speak Up
```tsx
<Link href="/speak-up" ...>
```
**Status**: ❌ 404 - Page doesn't exist
**Fix**: Create `/app/speak-up/page.tsx` or remove link

#### From Navigation (`components/Navigation.tsx`)

**Lines 8-13**: Nav links
```tsx
{ href: '/', label: 'Home' },        // ✓ Works
{ href: '/demos', label: 'Demos' },  // ✓ Works
{ href: '/ethos', label: 'Ethos' },  // ✓ Works
{ href: '/legal', label: 'Legal' },  // ✓ Works
```
**Status**: All working

---

## Missing Assets Audit

### Images

#### From Home Page

**Line 12**: Grid SVG background
```tsx
<div className="absolute inset-0 bg-[url('/grid.svg')]...">
```
**Status**: ❌ Missing file
**Expected Path**: `/public/grid.svg`
**Fix**: Create grid.svg pattern or use alternative background

#### Existing SVGs in Public
```
public/
├── file.svg        ✓ Exists (not used)
├── globe.svg       ✓ Exists (not used)
├── next.svg        ✓ Exists (Next.js default)
├── vercel.svg      ✓ Exists (Next.js default)
└── window.svg      ✓ Exists (not used)
```

### Missing Asset Directories

**From SEO_META_PACKAGE.md requirements**:

```
public/assets/images/og/
├── og-default.png          ❌ Missing (1200×630)
├── og-home.png            ❌ Missing (1200×630)
├── og-demos.png           ❌ Missing (1200×630)
├── og-ethos.png           ❌ Missing (1200×630)
└── demos/
    ├── shell-preview.png  ❌ Missing (1200×630)
    ├── dim-preview.png    ❌ Missing (1200×630)
    ├── witness-preview.png ❌ Missing (1200×630)
    └── p13-preview.png    ❌ Missing (1200×630)
```

**Status**: Entire `/public/assets/` directory doesn't exist
**Impact**: High - All Open Graph sharing will show no images
**Priority**: Medium (implement after demos functional)

### Missing Logo Assets

**Expected**:
```
public/assets/icons/logo/
├── ethraeon-logo.svg      ❌ Missing
├── ethraeon-icon.svg      ❌ Missing
├── ingombrante-logo.svg   ❌ Missing
└── favicon.ico            ⚠️ Exists but is default Next.js favicon
```

**Current Logo Implementation**:
- Navigation and Footer use inline gradient div with "E" letter
- No actual logo SVG file
- Works but not scalable/exportable

---

## External Links Audit

### From Footer (`components/Footer.tsx`)

**Lines 7-13**: Email links
```tsx
hello@ethraeon.systems           ✓ Valid format (not verified deliverable)
contact@ethraeon.systems         ✓ Valid format
legal@ethraeon.systems           ✓ Valid format
accessibility@ethraeon.systems   ✓ Valid format
research@ethraeon.systems        ✓ Valid format
```
**Status**: Valid mailto: links (actual email deliverability not tested)

### From Ethos Page

**Line 210**: Ethics email
```tsx
mailto:ethics@ethraeon.systems   ✓ Valid format
```

---

## Route Coverage Analysis

### Existing Routes
```
✓ / (Home)
✓ /demos (Demos index)
✓ /ethos (Ethos page)
✓ /legal (Legal page)
```

### Linked But Missing Routes
```
❌ /demos/constitutional-shell
❌ /demos/constitutional-shell/sandbox
❌ /demos/constitutional-shell/policy
❌ /demos/constitutional-shell/audit
❌ /demos/dim
❌ /demos/dim/policy-builder
❌ /demos/dim/conflict-resolver
❌ /demos/dim/optimizer
❌ /demos/witness
❌ /demos/witness/graph-explorer
❌ /demos/witness/verification
❌ /demos/witness/export
❌ /demos/p13
❌ /demos/p13/baseline
❌ /demos/p13/monitor
❌ /demos/p13/analysis
❌ /sustainability
❌ /speak-up
```

### Legacy Routes (Exist But Not Linked in P3)
```
⚠️ /about
⚠️ /investors
⚠️ /press
⚠️ /contact
⚠️ /overview
⚠️ /blueprint
⚠️ /use-cases
```
**Status**: These routes still exist but are not linked from navigation
**Recommendation**: Either update to P3 style or remove

---

## API Routes Status

### Expected API Routes (Per DEMOS_ROUTE_MAP.md)
```
❌ /api/demos/shell/compile
❌ /api/demos/shell/query
❌ /api/demos/shell/audit/[id]
❌ /api/demos/shell/providers
❌ /api/demos/dim/compile-policy
❌ /api/demos/dim/detect-conflicts
❌ /api/demos/dim/resolve
❌ /api/demos/dim/optimize
❌ /api/demos/witness/create-edg
❌ /api/demos/witness/edg/[id]
❌ /api/demos/witness/verify
❌ /api/demos/witness/export
❌ /api/demos/p13/capture-baseline
❌ /api/demos/p13/test-drift
❌ /api/demos/p13/baselines
❌ /api/demos/p13/compare
❌ /api/demos/tracelet/[id]
❌ /api/demos/tracelet/create
❌ /api/demos/tracelet/list
```

**Status**: No API routes implemented yet
**Note**: This is expected - API routes come after UI routes per WEB_BUILD_ROADMAP_v1.md

---

## CSS/Styling Issues

### Missing Grid Background
**File**: `app/page.tsx` line 12
**Issue**: References `/grid.svg` which doesn't exist
**Impact**: Hero section has no grid background pattern
**Fix Options**:
1. Create grid.svg:
```svg
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="100" height="100" fill="url(#grid)"/>
</svg>
```
2. Use CSS grid background:
```tsx
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" style={{
  backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
  backgroundSize: '20px 20px'
}} />
```

### Tailwind Config Coverage
**Status**: ✓ All custom colors defined in `app/globals.css`
**Coverage**:
- Primary colors (950-400): ✓ Defined
- Accent colors (600-400): ✓ Defined
- Gray scale: ✓ Using Tailwind defaults
- Custom fonts: ✓ Loaded via Google Fonts

---

## Component Dependencies

### Missing Components (Referenced but not created)

**From NEXTJS_INTEGRATION_GUIDE.md**:
```
❌ components/demos/DemoNav.tsx
❌ components/demos/DemoLayout.tsx
❌ components/demos/constitutional-shell/Terminal.tsx
❌ components/demos/constitutional-shell/PolicyCompiler.tsx
❌ components/demos/constitutional-shell/AuditTrail.tsx
❌ components/demos/constitutional-shell/ProviderSelector.tsx
(+ 12 more demo components)
```

**From WEB_BUILD_ROADMAP_v1.md Tier 3**:
```
❌ components/ui/Badge.tsx
❌ components/ui/Alert.tsx
❌ components/ui/Modal.tsx
❌ components/ui/Tabs.tsx
❌ components/ui/Input.tsx
❌ components/ui/Select.tsx
❌ components/ui/CodeBlock.tsx
❌ components/ui/Terminal.tsx
(+ 5 more UI primitives)
```

**Status**: Expected - these are in build roadmap
**Note**: All dependencies tracked in WEB_BUILD_ROADMAP_v1.md

---

## Priority Fixes

### Critical (Fix Immediately)
1. **Create grid.svg** or replace with CSS background
   - File: `public/grid.svg`
   - Impact: Visual consistency on home page

### High Priority (Fix Before Demo Launch)
1. **Update demo link URLs** in `lib/constants/demo-config.ts`
   - Change from anchors to full routes
   - Affects: All demo card links

2. **Create placeholder demo routes**
   - Minimum: Main pages for 4 demos
   - Can show "Coming Soon" initially

### Medium Priority (Fix During Development)
1. **Create Open Graph images**
   - Required for social sharing
   - Can use templates/placeholders initially

2. **Decide on /sustainability and /speak-up**
   - Either create pages or remove links from ethos page

3. **Deprecate or update legacy routes**
   - /about, /investors, /press, /contact, /overview, /blueprint, /use-cases
   - Decision needed: Keep, update, or remove?

### Low Priority (Polish Phase)
1. **Create proper logo assets**
   - SVG versions for various contexts
   - Exportable for press/partners

2. **Verify email deliverability**
   - Test all @ethraeon.systems addresses
   - Set up proper MX records if needed

---

## Automated Fixes

### Update Demo Configuration

**File**: `lib/constants/demo-config.ts`

**Current (broken)**:
```typescript
routes: {
  main: '/demos/constitutional-shell',
  sandbox: '/demos/constitutional-shell/sandbox', // These don't exist yet
  // ...
}
```

**Should be** (while routes don't exist):
```typescript
routes: {
  main: '/demos#constitutional-shell', // Use anchor until route exists
  sandbox: '/demos#constitutional-shell', // Same
  // ...
}

// OR create placeholder pages that say "Coming Soon"
```

### Quick Win: Grid Background CSS Fix

**File**: `app/page.tsx` line 12

**Replace**:
```tsx
<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
```

**With**:
```tsx
<div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{
  backgroundImage: `
    linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)
  `,
  backgroundSize: '40px 40px'
}}></div>
```

---

## Summary

### Broken Links: 21 total
- 16 demo routes (expected, in roadmap)
- 2 auxiliary pages (/sustainability, /speak-up)
- 3 anchor-only links (should be full routes)

### Missing Assets: 12 critical
- 1 grid.svg (immediate fix needed)
- 8 Open Graph images (medium priority)
- 3 logo assets (low priority)

### Legacy Routes: 7 pages
- Exist but not linked in P3 navigation
- Decision needed: update, keep, or deprecate

### Next Actions:
1. Fix grid.svg (CSS solution - 2 minutes)
2. Update demo link configuration (10 minutes)
3. Create placeholder demo pages OR keep anchor links (30 minutes)
4. Decide on /sustainability and /speak-up (discussion needed)

---

**Generated by**: CCT_Web_Prime
**Status**: Audit complete
**Recommendation**: Fix grid.svg immediately, defer others to appropriate build phases
