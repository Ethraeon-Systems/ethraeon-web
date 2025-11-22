# ETHRAEON.AI — Full Site Structure

**Generated**: 2025-01-19
**Agent**: CCT_Web_Prime
**Purpose**: Complete architectural map for ethraeon.ai Next.js application

---

## Directory Structure Overview

```
ethraeon-web/
├── app/                      # Next.js 13+ App Router
│   ├── (public)/            # Public-facing routes
│   │   ├── page.tsx         # Home page
│   │   ├── demos/           # Demonstrations
│   │   ├── ethos/           # Ethics & values
│   │   └── legal/           # Legal information
│   ├── (marketing)/         # Marketing pages (legacy)
│   │   ├── about/
│   │   ├── investors/
│   │   ├── press/
│   │   └── contact/
│   ├── demos/               # Demo routes (detailed below)
│   ├── api/                 # API routes
│   ├── layout.tsx           # Root layout
│   ├── globals.css          # Global styles
│   └── not-found.tsx        # 404 page
├── components/              # React components
│   ├── layout/              # Layout components
│   ├── demos/               # Demo-specific components
│   ├── ui/                  # UI primitives
│   └── shared/              # Shared components
├── lib/                     # Utility libraries
│   ├── api/                 # API clients
│   ├── constants/           # Constants & config
│   ├── types/               # TypeScript types
│   ├── utils/               # Utility functions
│   └── hooks/               # Custom React hooks
├── public/                  # Static assets
│   ├── assets/              # Organized assets
│   │   ├── images/          # Images
│   │   ├── icons/           # Icons & logos
│   │   ├── fonts/           # Custom fonts
│   │   └── documents/       # PDFs, downloadables
│   └── favicon.ico          # Favicon
├── styles/                  # Additional styles (if needed)
└── config/                  # Configuration files
```

---

## 1. App Routes Structure

### Public Routes (`app/`)

#### Core Pages (Phase 3 Active)
```
/                           → app/page.tsx                    [Active]
/demos                      → app/demos/page.tsx              [Active]
/ethos                      → app/ethos/page.tsx              [Active]
/legal                      → app/legal/page.tsx              [Active]
```

#### Marketing Pages (Legacy - Consider Deprecation)
```
/about                      → app/about/page.tsx              [Legacy]
/investors                  → app/investors/page.tsx          [Legacy]
/press                      → app/press/page.tsx              [Legacy]
/contact                    → app/contact/page.tsx            [Legacy]
/overview                   → app/overview/page.tsx           [Legacy]
/blueprint                  → app/blueprint/page.tsx          [Legacy]
/use-cases                  → app/use-cases/page.tsx          [Legacy]
```

#### Future Pages (Planned)
```
/sustainability             → app/sustainability/page.tsx     [Planned]
/speak-up                   → app/speak-up/page.tsx           [Planned]
/accessibility              → app/accessibility/page.tsx      [Planned]
/research                   → app/research/page.tsx           [Planned]
```

---

## 2. Demos Routes Structure

### Demo Index
```
/demos                      → app/demos/page.tsx
```
Lists all 4 demonstrations with:
- Constitutional AI Shell
- Decision Insight Model (DIM)
- Recursive Witness OS
- P13 Predictive Grid (Luigi)

### Individual Demo Routes (To Be Implemented)

#### Constitutional AI Shell
```
/demos/constitutional-shell              → app/demos/constitutional-shell/page.tsx
/demos/constitutional-shell/sandbox      → Interactive terminal sandbox
/demos/constitutional-shell/policy       → Policy compiler viewer
/demos/constitutional-shell/audit        → Audit trail explorer
```

**Components Needed:**
- `components/demos/constitutional-shell/Terminal.tsx`
- `components/demos/constitutional-shell/PolicyCompiler.tsx`
- `components/demos/constitutional-shell/AuditTrail.tsx`
- `components/demos/constitutional-shell/ProviderSelector.tsx`

**API Routes:**
```
POST /api/demos/shell/compile            # Compile policy to constraints
POST /api/demos/shell/query              # Execute governed query
GET  /api/demos/shell/audit/:trace_id    # Get audit trail
```

#### Decision Insight Model (DIM)
```
/demos/dim                              → app/demos/dim/page.tsx
/demos/dim/policy-builder               → Policy creation interface
/demos/dim/conflict-resolver            → Conflict resolution engine demo
/demos/dim/optimizer                    → Constraint optimization visualizer
```

**Components Needed:**
- `components/demos/dim/PolicyBuilder.tsx`
- `components/demos/dim/ConflictVisualizer.tsx`
- `components/demos/dim/OptimizationGraph.tsx`
- `components/demos/dim/ConstraintEditor.tsx`

**API Routes:**
```
POST /api/demos/dim/compile-policy       # Compile natural language to constraints
POST /api/demos/dim/detect-conflicts     # Detect policy conflicts
POST /api/demos/dim/resolve              # Resolve conflicts with priorities
POST /api/demos/dim/optimize             # Optimize constraint execution
```

#### Recursive Witness OS
```
/demos/witness                          → app/demos/witness/page.tsx
/demos/witness/graph-explorer           → EDG navigation interface
/demos/witness/verification             → Cryptographic verification demo
/demos/witness/export                   → Regulatory export tool
```

**Components Needed:**
- `components/demos/witness/EDGGraph.tsx`
- `components/demos/witness/NodeInspector.tsx`
- `components/demos/witness/VerificationPanel.tsx`
- `components/demos/witness/ExportBuilder.tsx`

**API Routes:**
```
POST /api/demos/witness/create-edg       # Create evidential decision graph
GET  /api/demos/witness/edg/:id          # Get EDG by ID
POST /api/demos/witness/verify           # Verify cryptographic integrity
POST /api/demos/witness/export           # Export for regulatory compliance
```

#### P13 Predictive Grid (Luigi)
```
/demos/p13                              → app/demos/p13/page.tsx
/demos/p13/baseline                     → Baseline capture tool
/demos/p13/monitor                      → Drift monitoring dashboard
/demos/p13/analysis                     → Behavioral analysis viewer
```

**Components Needed:**
- `components/demos/p13/BaselineCapture.tsx`
- `components/demos/p13/DriftMonitor.tsx`
- `components/demos/p13/DivergenceChart.tsx`
- `components/demos/p13/AlertPanel.tsx`

**API Routes:**
```
POST /api/demos/p13/capture-baseline     # Capture model baseline
POST /api/demos/p13/test-drift           # Test for behavioral drift
GET  /api/demos/p13/baselines            # List baselines
POST /api/demos/p13/compare              # Compare baseline vs current
```

### Demo Data Routes
```
GET  /api/demos/tracelet/:id             # Get tracelet by ID
POST /api/demos/tracelet/create          # Create new tracelet
GET  /api/demos/examples                 # Get example scenarios
```

---

## 3. Components Library Structure

### Layout Components (`components/layout/`)
```
Navigation.tsx              # Top navigation (current: components/Navigation.tsx)
Footer.tsx                  # Footer (current: components/Footer.tsx)
Sidebar.tsx                 # Sidebar navigation (for demo sections)
Header.tsx                  # Page headers
Breadcrumbs.tsx            # Breadcrumb navigation
```

### UI Primitives (`components/ui/`)
```
Button.tsx                  # Button component [Exists]
Card.tsx                    # Card container [Exists]
Container.tsx               # Content container [Exists]
Badge.tsx                   # Status badges
Alert.tsx                   # Alert messages
Modal.tsx                   # Modal dialogs
Tabs.tsx                    # Tab navigation
Input.tsx                   # Form inputs
Select.tsx                  # Select dropdowns
Tooltip.tsx                 # Tooltips
Spinner.tsx                 # Loading spinner
Progress.tsx                # Progress bars
CodeBlock.tsx               # Code display blocks
Terminal.tsx                # Terminal-style output
```

### Demo Components (`components/demos/`)
```
constitutional-shell/
├── Terminal.tsx            # Interactive terminal
├── PolicyCompiler.tsx      # Policy compilation viewer
├── AuditTrail.tsx          # Audit trail display
├── ProviderSelector.tsx    # AI provider selection
└── ConstraintViewer.tsx    # Constraint display

dim/
├── PolicyBuilder.tsx       # Policy creation UI
├── ConflictVisualizer.tsx  # Conflict visualization
├── OptimizationGraph.tsx   # Optimization display
├── ConstraintEditor.tsx    # Constraint editing
└── PriorityMatrix.tsx      # Priority management

witness/
├── EDGGraph.tsx            # Decision graph viewer
├── NodeInspector.tsx       # Node detail panel
├── VerificationPanel.tsx   # Crypto verification
├── ExportBuilder.tsx       # Export tool
└── TraceTimeline.tsx       # Temporal trace view

p13/
├── BaselineCapture.tsx     # Baseline creation
├── DriftMonitor.tsx        # Drift monitoring
├── DivergenceChart.tsx     # Divergence visualization
├── AlertPanel.tsx          # Alert management
└── ComparisonView.tsx      # Baseline comparison
```

### Shared Components (`components/shared/`)
```
PageHeader.tsx              # Standard page header
Section.tsx                 # Content sections
FeatureCard.tsx             # Feature display cards
DemoCard.tsx                # Demo preview cards
IconWrapper.tsx             # Icon container
LinkCard.tsx                # Clickable cards
CTASection.tsx              # Call-to-action sections
LoadingState.tsx            # Loading states
ErrorState.tsx              # Error states
EmptyState.tsx              # Empty states
```

---

## 4. Library Structure (`lib/`)

### API Clients (`lib/api/`)
```
client.ts                   # Base API client
demos.ts                    # Demo-specific API calls
constitutional-shell.ts     # Shell demo API
dim.ts                      # DIM demo API
witness.ts                  # Witness OS demo API
p13.ts                      # P13 demo API
```

**Example: `lib/api/client.ts`**
```typescript
export class APIClient {
  constructor(private baseURL: string) {}

  async get<T>(path: string): Promise<T> { ... }
  async post<T>(path: string, data: unknown): Promise<T> { ... }
  async put<T>(path: string, data: unknown): Promise<T> { ... }
  async delete<T>(path: string): Promise<T> { ... }
}

export const apiClient = new APIClient(
  process.env.NEXT_PUBLIC_API_URL || '/api'
);
```

### Constants (`lib/constants/`)
```
routes.ts                   # Route constants
demo-config.ts              # Demo configurations
providers.ts                # AI provider configs
regulatory.ts               # Regulatory framework constants
```

**Example: `lib/constants/routes.ts`**
```typescript
export const ROUTES = {
  HOME: '/',
  DEMOS: '/demos',
  ETHOS: '/ethos',
  LEGAL: '/legal',

  DEMOS_SHELL: '/demos/constitutional-shell',
  DEMOS_DIM: '/demos/dim',
  DEMOS_WITNESS: '/demos/witness',
  DEMOS_P13: '/demos/p13',
} as const;
```

### Types (`lib/types/`)
```
common.ts                   # Common types
demo.ts                     # Demo-related types
constitutional.ts           # Constitutional framework types
edg.ts                      # EDG types
tracelet.ts                 # Tracelet types
api.ts                      # API response types
```

**Example: `lib/types/demo.ts`**
```typescript
export interface Demo {
  id: string;
  title: string;
  description: string;
  slug: string;
  category: DemoCategory;
  status: 'active' | 'beta' | 'coming-soon';
  features: string[];
}

export interface Tracelet {
  id: string;
  timestamp: string;
  operation: string;
  input: unknown;
  output: unknown;
  constraints: Constraint[];
  hash: string;
}
```

### Utilities (`lib/utils/`)
```
formatting.ts               # String/data formatting
validation.ts               # Input validation
crypto.ts                   # Cryptographic utilities
date.ts                     # Date utilities
classnames.ts               # CSS class utilities
```

**Example: `lib/utils/classnames.ts`**
```typescript
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}
```

### Hooks (`lib/hooks/`)
```
useDemo.ts                  # Demo state management
useAPI.ts                   # API call hook
useLocalStorage.ts          # Local storage hook
useDebounce.ts              # Debounce hook
useMediaQuery.ts            # Media query hook
```

**Example: `lib/hooks/useDemo.ts`**
```typescript
export function useDemo(demoId: string) {
  const [state, setState] = useState<DemoState>('idle');
  const [data, setData] = useState<unknown>(null);
  const [error, setError] = useState<Error | null>(null);

  // ... implementation

  return { state, data, error, run, reset };
}
```

---

## 5. API Routes Structure (`app/api/`)

### Demo APIs

#### Constitutional Shell APIs
```
app/api/demos/shell/
├── compile/route.ts        # POST - Compile policy
├── query/route.ts          # POST - Execute query
├── audit/[id]/route.ts     # GET - Get audit trail
└── providers/route.ts      # GET - List providers
```

#### DIM APIs
```
app/api/demos/dim/
├── compile-policy/route.ts # POST - Compile policy
├── detect-conflicts/route.ts # POST - Detect conflicts
├── resolve/route.ts        # POST - Resolve conflicts
└── optimize/route.ts       # POST - Optimize constraints
```

#### Witness OS APIs
```
app/api/demos/witness/
├── create-edg/route.ts     # POST - Create EDG
├── edg/[id]/route.ts       # GET - Get EDG
├── verify/route.ts         # POST - Verify integrity
└── export/route.ts         # POST - Export for compliance
```

#### P13 APIs
```
app/api/demos/p13/
├── capture-baseline/route.ts # POST - Capture baseline
├── test-drift/route.ts     # POST - Test drift
├── baselines/route.ts      # GET - List baselines
└── compare/route.ts        # POST - Compare baselines
```

### Tracelet APIs
```
app/api/demos/tracelet/
├── [id]/route.ts           # GET - Get tracelet by ID
├── create/route.ts         # POST - Create tracelet
└── list/route.ts           # GET - List tracelets
```

### Utility APIs
```
app/api/
├── health/route.ts         # GET - Health check
├── examples/route.ts       # GET - Get example scenarios
└── config/route.ts         # GET - Get demo configurations
```

---

## 6. Public Assets Structure (`public/assets/`)

### Images (`public/assets/images/`)
```
images/
├── hero/                   # Hero section images
│   ├── hero-gradient.png
│   └── hero-abstract.png
├── demos/                  # Demo screenshots
│   ├── shell-preview.png
│   ├── dim-preview.png
│   ├── witness-preview.png
│   └── p13-preview.png
├── diagrams/               # Technical diagrams
│   ├── cf-architecture.svg
│   ├── edg-flow.svg
│   └── trinity-diagram.svg
└── og/                     # Open Graph images
    └── og-default.png
```

### Icons (`public/assets/icons/`)
```
icons/
├── logo/                   # Logo variations
│   ├── ethraeon-logo.svg
│   ├── ethraeon-icon.svg
│   ├── ingombrante-logo.svg
│   └── favicon.ico
├── ui/                     # UI icons (if not using lucide-react)
└── tech/                   # Technology icons
    ├── openai.svg
    ├── anthropic.svg
    └── google.svg
```

### Fonts (`public/assets/fonts/`)
```
fonts/
├── SpaceGrotesk/           # Primary font family
│   ├── SpaceGrotesk-Regular.woff2
│   ├── SpaceGrotesk-Medium.woff2
│   ├── SpaceGrotesk-SemiBold.woff2
│   └── SpaceGrotesk-Bold.woff2
├── Inter/                  # Secondary font family
│   ├── Inter-Regular.woff2
│   ├── Inter-Medium.woff2
│   ├── Inter-SemiBold.woff2
│   └── Inter-Bold.woff2
└── FiraCode/               # Monospace font
    ├── FiraCode-Regular.woff2
    └── FiraCode-Medium.woff2
```

### Documents (`public/assets/documents/`)
```
documents/
├── whitepapers/            # Technical whitepapers
│   └── constitutional-ai-whitepaper.pdf
├── guides/                 # User guides
├── legal/                  # Legal documents
│   ├── terms-of-service.pdf
│   └── privacy-policy.pdf
└── press/                  # Press materials
    └── ethraeon-press-kit.zip
```

---

## 7. Route Map for Demos (Complete)

### Demo Navigation Flow

```
[Home /]
    │
    └──> [Demos Index /demos]
            │
            ├──> [Constitutional AI Shell /demos/constitutional-shell]
            │       ├──> Sandbox (/demos/constitutional-shell/sandbox)
            │       ├──> Policy Compiler (/demos/constitutional-shell/policy)
            │       └──> Audit Trail (/demos/constitutional-shell/audit)
            │
            ├──> [Decision Insight Model /demos/dim]
            │       ├──> Policy Builder (/demos/dim/policy-builder)
            │       ├──> Conflict Resolver (/demos/dim/conflict-resolver)
            │       └──> Optimizer (/demos/dim/optimizer)
            │
            ├──> [Recursive Witness OS /demos/witness]
            │       ├──> Graph Explorer (/demos/witness/graph-explorer)
            │       ├──> Verification (/demos/witness/verification)
            │       └──> Export Tool (/demos/witness/export)
            │
            └──> [P13 Predictive Grid /demos/p13]
                    ├──> Baseline Capture (/demos/p13/baseline)
                    ├──> Drift Monitor (/demos/p13/monitor)
                    └──> Analysis (/demos/p13/analysis)
```

### Demo Metadata

```typescript
// lib/constants/demo-config.ts
export const DEMO_METADATA = {
  'constitutional-shell': {
    id: 'constitutional-shell',
    title: 'Constitutional AI Shell',
    slug: 'constitutional-shell',
    description: 'Interactive command-line interface for multi-provider governance',
    icon: 'Terminal',
    color: 'blue',
    status: 'active',
    routes: {
      main: '/demos/constitutional-shell',
      sandbox: '/demos/constitutional-shell/sandbox',
      policy: '/demos/constitutional-shell/policy',
      audit: '/demos/constitutional-shell/audit',
    },
    api: {
      compile: '/api/demos/shell/compile',
      query: '/api/demos/shell/query',
      audit: '/api/demos/shell/audit',
    },
  },
  'dim': {
    id: 'dim',
    title: 'Decision Insight Model',
    slug: 'dim',
    description: 'Policy conflict resolution and constraint optimization',
    icon: 'Brain',
    color: 'purple',
    status: 'active',
    routes: {
      main: '/demos/dim',
      policyBuilder: '/demos/dim/policy-builder',
      conflictResolver: '/demos/dim/conflict-resolver',
      optimizer: '/demos/dim/optimizer',
    },
    api: {
      compilePolicy: '/api/demos/dim/compile-policy',
      detectConflicts: '/api/demos/dim/detect-conflicts',
      resolve: '/api/demos/dim/resolve',
      optimize: '/api/demos/dim/optimize',
    },
  },
  'witness': {
    id: 'witness',
    title: 'Recursive Witness OS',
    slug: 'witness',
    description: 'Evidential decision graphs with cryptographic verification',
    icon: 'Eye',
    color: 'green',
    status: 'active',
    routes: {
      main: '/demos/witness',
      graphExplorer: '/demos/witness/graph-explorer',
      verification: '/demos/witness/verification',
      export: '/demos/witness/export',
    },
    api: {
      createEDG: '/api/demos/witness/create-edg',
      getEDG: '/api/demos/witness/edg',
      verify: '/api/demos/witness/verify',
      export: '/api/demos/witness/export',
    },
  },
  'p13': {
    id: 'p13',
    title: 'P13 Predictive Grid (Luigi)',
    slug: 'p13',
    description: 'Behavioral drift detection and constitutional rollback',
    icon: 'Grid',
    color: 'orange',
    status: 'active',
    routes: {
      main: '/demos/p13',
      baseline: '/demos/p13/baseline',
      monitor: '/demos/p13/monitor',
      analysis: '/demos/p13/analysis',
    },
    api: {
      captureBaseline: '/api/demos/p13/capture-baseline',
      testDrift: '/api/demos/p13/test-drift',
      baselines: '/api/demos/p13/baselines',
      compare: '/api/demos/p13/compare',
    },
  },
} as const;
```

---

## 8. Implementation Priority

### Phase 1: Foundation (Current)
- ✅ Core pages (/, /demos, /ethos, /legal)
- ✅ Navigation and Footer
- ✅ Basic UI components (Button, Card, Container)
- ✅ Demos index page with descriptions

### Phase 2: Demo Infrastructure
- [ ] Create lib/ structure
- [ ] Set up API route handlers (mocked data)
- [ ] Build demo-specific components
- [ ] Implement demo metadata system
- [ ] Create demo navigation components

### Phase 3: Constitutional Shell Demo
- [ ] `/demos/constitutional-shell` pages
- [ ] Terminal component
- [ ] Policy compiler viewer
- [ ] Audit trail display
- [ ] Multi-provider integration

### Phase 4: DIM Demo
- [ ] `/demos/dim` pages
- [ ] Policy builder interface
- [ ] Conflict visualization
- [ ] Optimization graph
- [ ] Constraint editor

### Phase 5: Witness OS Demo
- [ ] `/demos/witness` pages
- [ ] EDG graph component
- [ ] Verification panel
- [ ] Export builder
- [ ] Cryptographic verification

### Phase 6: P13 Demo
- [ ] `/demos/p13` pages
- [ ] Baseline capture tool
- [ ] Drift monitor dashboard
- [ ] Divergence visualization
- [ ] Alert system

### Phase 7: Polish & Production
- [ ] Asset organization
- [ ] Performance optimization
- [ ] SEO metadata
- [ ] Accessibility audit
- [ ] Error boundaries
- [ ] Analytics integration

---

## 9. Next Actions

### Immediate (Next Session)
1. Create `lib/` directory structure
2. Set up `lib/constants/routes.ts`
3. Set up `lib/constants/demo-config.ts`
4. Create `lib/types/` with common types
5. Implement `lib/api/client.ts`

### Short-term (This Week)
1. Build first demo route: `/demos/constitutional-shell`
2. Create demo-specific components
3. Set up API route mocks
4. Implement demo navigation system

### Medium-term (This Sprint)
1. Complete all 4 demo main pages
2. Build interactive components for each demo
3. Integrate API routes with demo UIs
4. Add asset management system

---

## 10. File Structure Summary

```
ethraeon-web/
├── app/                                 # Next.js App Router
│   ├── page.tsx                         [✓] Home
│   ├── layout.tsx                       [✓] Root layout
│   ├── globals.css                      [✓] Global styles
│   ├── demos/
│   │   ├── page.tsx                     [✓] Demos index
│   │   ├── constitutional-shell/        [ ] Shell demo
│   │   ├── dim/                         [ ] DIM demo
│   │   ├── witness/                     [ ] Witness demo
│   │   └── p13/                         [ ] P13 demo
│   ├── ethos/page.tsx                   [✓] Ethos page
│   ├── legal/page.tsx                   [✓] Legal page
│   └── api/
│       └── demos/                       [ ] Demo APIs
├── components/                          # React components
│   ├── layout/                          [~] Layout components
│   │   ├── Navigation.tsx               [✓]
│   │   └── Footer.tsx                   [✓]
│   ├── ui/                              [~] UI primitives
│   │   ├── Button.tsx                   [✓]
│   │   ├── Card.tsx                     [✓]
│   │   └── Container.tsx                [✓]
│   ├── demos/                           [ ] Demo components
│   └── shared/                          [ ] Shared components
├── lib/                                 [ ] Utility libraries
│   ├── api/                             [ ] API clients
│   ├── constants/                       [ ] Constants
│   ├── types/                           [ ] TypeScript types
│   ├── utils/                           [ ] Utilities
│   └── hooks/                           [ ] Custom hooks
├── public/                              [~] Static assets
│   └── assets/                          [ ] Organized assets
│       ├── images/
│       ├── icons/
│       ├── fonts/
│       └── documents/
└── ETHRAEON_AI_FULL_SITE_STRUCTURE.md   [✓] This file

Legend:
[✓] Complete
[~] Partially complete
[ ] Not started
```

---

**Generated by**: CCT_Web_Prime
**Date**: 2025-01-19
**Status**: ✓ Architecture defined, ready for implementation
**Next**: Begin Phase 2 - Demo Infrastructure
