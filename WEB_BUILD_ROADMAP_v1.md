# WEB_BUILD_ROADMAP_v1

**Generated**: 2025-01-19
**Agent**: CCT_Web_Prime
**Purpose**: Prioritized build order for ethraeon.ai implementation

---

## Build Priority Matrix

### Tier 1: Foundation (Complete)
**Status**: ✓ Operational
**Purpose**: Core pages and infrastructure
**Dependencies**: None

- [x] Home page (/)
- [x] Demos index (/demos)
- [x] Ethos page (/ethos)
- [x] Legal page (/legal)
- [x] Navigation component
- [x] Footer component
- [x] Basic UI components (Button, Card, Container)
- [x] Route constants
- [x] Demo configuration
- [x] CSS utilities

---

### Tier 2: Core Library (Next Priority)
**Status**: ⧗ Ready to begin
**Purpose**: Unblock all demo development
**Dependencies**: Tier 1 complete
**Estimated Duration**: 1-2 hours

#### 2.1 Type Definitions
**Why First**: All subsequent code depends on these types

```
Priority Order:
1. lib/types/common.ts           # Base types (5 min)
2. lib/types/api.ts              # API response types (10 min)
3. lib/types/demo.ts             # Demo-specific types (15 min)
4. lib/types/constitutional.ts   # CF types (10 min)
5. lib/types/edg.ts              # EDG/Witness types (10 min)
6. lib/types/tracelet.ts         # Tracelet types (5 min)
```

**Critical Types**:
```typescript
// lib/types/demo.ts (excerpt)
export interface Demo {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'beta' | 'coming-soon';
}

export interface DemoState {
  status: 'idle' | 'loading' | 'success' | 'error';
  data: unknown | null;
  error: Error | null;
}
```

#### 2.2 API Client
**Why Second**: Enables all demo API communication

```
Priority Order:
1. lib/api/client.ts             # Base API client (20 min)
2. lib/api/demos.ts              # Demo wrapper (10 min)
```

**Critical Functionality**:
- Base HTTP methods (GET, POST, PUT, DELETE)
- Error handling
- Type-safe responses
- Mock mode for development

#### 2.3 Utilities
**Why Third**: Support components and demos

```
Priority Order:
1. lib/utils/formatting.ts       # String/data formatting (10 min)
2. lib/utils/validation.ts       # Input validation (10 min)
3. lib/utils/date.ts             # Date utilities (5 min)
```

#### 2.4 Custom Hooks
**Why Fourth**: Enable demo state management

```
Priority Order:
1. lib/hooks/useDemo.ts          # Demo state management (15 min)
2. lib/hooks/useAPI.ts           # API call hook (10 min)
3. lib/hooks/useLocalStorage.ts  # Local storage (5 min)
```

**Total Tier 2 Time**: ~2 hours

---

### Tier 3: Shared UI Components
**Status**: ⧗ Waiting for Tier 2
**Purpose**: Reusable components for all demos
**Dependencies**: Tier 2 types complete
**Estimated Duration**: 2-3 hours

#### 3.1 Essential UI Primitives
**Why First**: Required by all demos

```
Priority Order:
1. components/ui/Badge.tsx       # Status badges (10 min)
2. components/ui/Alert.tsx       # Alert messages (15 min)
3. components/ui/Modal.tsx       # Modal dialogs (20 min)
4. components/ui/Tabs.tsx        # Tab navigation (20 min)
5. components/ui/Input.tsx       # Form inputs (15 min)
6. components/ui/Select.tsx      # Dropdowns (15 min)
7. components/ui/CodeBlock.tsx   # Code display (20 min)
8. components/ui/Terminal.tsx    # Terminal output (25 min)
```

#### 3.2 Shared Components
**Why Second**: Common patterns across demos

```
Priority Order:
1. components/shared/PageHeader.tsx       # Page headers (10 min)
2. components/shared/DemoCard.tsx         # Demo preview (15 min)
3. components/shared/LoadingState.tsx     # Loading states (10 min)
4. components/shared/ErrorState.tsx       # Error states (10 min)
5. components/shared/EmptyState.tsx       # Empty states (10 min)
```

#### 3.3 Layout Components
**Why Third**: Demo-specific layouts

```
Priority Order:
1. components/layout/Sidebar.tsx          # Demo sidebar (20 min)
2. components/layout/Breadcrumbs.tsx      # Navigation breadcrumbs (15 min)
3. components/demos/DemoNav.tsx           # Demo sub-navigation (20 min)
4. components/demos/DemoLayout.tsx        # Wrapper layout (15 min)
```

**Total Tier 3 Time**: ~4 hours

---

### Tier 4: First Demo - Constitutional Shell
**Status**: ⧗ Waiting for Tier 3
**Purpose**: Complete first working demo
**Dependencies**: Tier 2 + Tier 3 complete
**Estimated Duration**: 4-6 hours

**Why Constitutional Shell First**:
1. Most straightforward UI (terminal-based)
2. Demonstrates core value proposition
3. Establishes patterns for other demos
4. High visual impact

#### 4.1 Routes
```
Priority Order:
1. app/demos/constitutional-shell/page.tsx           # Main landing (30 min)
2. app/demos/constitutional-shell/sandbox/page.tsx   # Interactive sandbox (1 hour)
3. app/demos/constitutional-shell/policy/page.tsx    # Policy compiler (45 min)
4. app/demos/constitutional-shell/audit/page.tsx     # Audit explorer (45 min)
```

#### 4.2 Components
```
Priority Order:
1. components/demos/constitutional-shell/Terminal.tsx       # Terminal UI (1 hour)
2. components/demos/constitutional-shell/PolicyCompiler.tsx # Compiler (45 min)
3. components/demos/constitutional-shell/AuditTrail.tsx     # Audit display (45 min)
4. components/demos/constitutional-shell/ProviderSelector.tsx # Provider UI (20 min)
```

#### 4.3 API Routes (Mocked)
```
Priority Order:
1. app/api/demos/shell/compile/route.ts   # Policy compilation (20 min)
2. app/api/demos/shell/query/route.ts     # Query execution (25 min)
3. app/api/demos/shell/audit/[id]/route.ts # Audit retrieval (20 min)
4. app/api/demos/shell/providers/route.ts  # Provider list (10 min)
```

**Mock Data Strategy**:
- Use static JSON responses
- Simulate realistic latency (200-500ms)
- Include example scenarios

**Total Tier 4 Time**: ~7 hours

---

### Tier 5: Remaining Demos (Parallel Development)
**Status**: ⧗ Waiting for Tier 4
**Purpose**: Complete all 4 demos
**Dependencies**: Constitutional Shell complete
**Estimated Duration**: 12-16 hours (or 4-6 hours each if parallel)

#### 5.1 DIM (Decision Insight Model)
**Complexity**: Medium
**Unique Challenges**: Conflict visualization, graph rendering

```
Routes (3):
- /demos/dim/page.tsx
- /demos/dim/policy-builder/page.tsx
- /demos/dim/conflict-resolver/page.tsx
- /demos/dim/optimizer/page.tsx

Components (4):
- PolicyBuilder.tsx (1 hour)
- ConflictVisualizer.tsx (1.5 hours) ← Most complex
- OptimizationGraph.tsx (1 hour)
- ConstraintEditor.tsx (45 min)

API Routes (4):
- compile-policy, detect-conflicts, resolve, optimize (1.5 hours total)
```

**Estimated Time**: 6-7 hours

#### 5.2 Witness OS
**Complexity**: High
**Unique Challenges**: Graph visualization, crypto verification

```
Routes (3):
- /demos/witness/page.tsx
- /demos/witness/graph-explorer/page.tsx
- /demos/witness/verification/page.tsx
- /demos/witness/export/page.tsx

Components (4):
- EDGGraph.tsx (2 hours) ← Most complex
- NodeInspector.tsx (45 min)
- VerificationPanel.tsx (1 hour)
- ExportBuilder.tsx (1 hour)

API Routes (4):
- create-edg, edg/[id], verify, export (1.5 hours total)
```

**Estimated Time**: 7-8 hours

#### 5.3 P13 Predictive Grid
**Complexity**: Medium
**Unique Challenges**: Chart visualization, drift scoring

```
Routes (3):
- /demos/p13/page.tsx
- /demos/p13/baseline/page.tsx
- /demos/p13/monitor/page.tsx
- /demos/p13/analysis/page.tsx

Components (4):
- BaselineCapture.tsx (45 min)
- DriftMonitor.tsx (1.5 hours)
- DivergenceChart.tsx (1 hour) ← Chart library integration
- AlertPanel.tsx (45 min)

API Routes (4):
- capture-baseline, test-drift, baselines, compare (1.5 hours total)
```

**Estimated Time**: 6-7 hours

**Total Tier 5 Time**: ~20 hours (or 7 hours if 3 demos in parallel)

---

### Tier 6: Assets & Polish
**Status**: ⧗ Waiting for Tier 5
**Purpose**: Professional finish
**Dependencies**: All demos functional
**Estimated Duration**: 3-4 hours

#### 6.1 Asset Organization
```
Priority Order:
1. public/assets/images/          # Demo screenshots (30 min)
2. public/assets/icons/           # Logo variants (20 min)
3. public/assets/documents/       # Whitepapers/guides (30 min)
```

#### 6.2 SEO & Metadata
```
Priority Order:
1. Add Open Graph images (30 min)
2. Update all page metadata (45 min)
3. Add schema.org markup (30 min)
4. Sitemap generation (15 min)
```

#### 6.3 Performance & Accessibility
```
Priority Order:
1. Image optimization (20 min)
2. Lazy loading implementation (20 min)
3. Accessibility audit (30 min)
4. Error boundaries (20 min)
```

**Total Tier 6 Time**: ~4 hours

---

## Critical Path Analysis

### Sequential (Single Developer)
```
Tier 1: Complete (0 hours)
Tier 2: 2 hours
Tier 3: 4 hours
Tier 4: 7 hours (Constitutional Shell)
Tier 5: 20 hours (3 remaining demos, sequential)
Tier 6: 4 hours (polish)
─────────────────────
Total: 37 hours (~5 days)
```

### Parallel (Multiple Developers)
```
Tier 1: Complete (0 hours)
Tier 2: 2 hours (1 developer)
Tier 3: 4 hours (1 developer, or 2 hours with 2 devs)
Tier 4: 7 hours (1 developer on Constitutional Shell)
Tier 5: 7 hours (3 developers, 1 per demo)
Tier 6: 4 hours (1 developer)
─────────────────────
Total: 17 hours (~2.5 days with 3 devs)
```

---

## Risk Mitigation

### High-Risk Items
1. **Graph Visualization** (Witness OS EDG)
   - **Risk**: Complex D3.js/React integration
   - **Mitigation**: Use pre-built React graph library (reactflow)
   - **Alternative**: Static SVG with hover states

2. **Chart Integration** (P13 Drift Monitor)
   - **Risk**: Chart.js/Recharts bundle size
   - **Mitigation**: Use lightweight Victory charts
   - **Alternative**: Custom CSS-based charts

3. **Cryptographic Verification** (Witness OS)
   - **Risk**: WebCrypto API complexity
   - **Mitigation**: Mock crypto for demos, use static examples
   - **Alternative**: Show hash chains without live verification

### Medium-Risk Items
1. **Terminal Emulation** (Constitutional Shell)
   - **Risk**: xterm.js integration
   - **Mitigation**: Use simpler terminal UI (styled divs)

2. **Policy Compilation Visualization** (DIM)
   - **Risk**: Real-time parsing display
   - **Mitigation**: Pre-compiled examples with animation

---

## Dependencies Graph

```
Tier 1 (Complete)
    │
    ├──> Tier 2: Core Library (2h)
    │       │
    │       ├──> Tier 3: Shared Components (4h)
    │       │       │
    │       │       ├──> Tier 4: Constitutional Shell (7h)
    │       │       │       │
    │       │       │       ├──> Tier 5a: DIM (6h)
    │       │       │       ├──> Tier 5b: Witness (7h)
    │       │       │       └──> Tier 5c: P13 (6h)
    │       │       │               │
    │       │       │               └──> Tier 6: Polish (4h)
```

---

## What to Build FIRST (Next Session)

### Immediate Actions (Session 1: 2 hours)
```
1. lib/types/common.ts           (5 min)
2. lib/types/api.ts              (10 min)
3. lib/types/demo.ts             (15 min)
4. lib/api/client.ts             (30 min)
5. lib/api/demos.ts              (10 min)
6. lib/utils/formatting.ts       (10 min)
7. lib/hooks/useDemo.ts          (20 min)
8. lib/hooks/useAPI.ts           (15 min)

✓ Core library complete
```

### Follow-Up (Session 2: 4 hours)
```
1. components/ui/Badge.tsx       (10 min)
2. components/ui/Alert.tsx       (15 min)
3. components/ui/Modal.tsx       (20 min)
4. components/ui/Tabs.tsx        (20 min)
5. components/ui/CodeBlock.tsx   (20 min)
6. components/ui/Terminal.tsx    (30 min)
7. components/shared/* (5 files) (55 min)
8. components/demos/DemoNav.tsx  (20 min)
9. components/demos/DemoLayout.tsx (15 min)

✓ Component library complete
```

### Demo Development (Session 3+: 7 hours)
```
1. Constitutional Shell main page (30 min)
2. Terminal component (1 hour)
3. Sandbox route + API (1.5 hours)
4. Policy route + API (1.5 hours)
5. Audit route + API (1.5 hours)
6. Integration testing (30 min)

✓ First working demo complete
```

---

## Success Criteria

### Tier 2 Complete When:
- [ ] All types compile without errors
- [ ] API client successfully makes mock calls
- [ ] Hooks return correct states

### Tier 3 Complete When:
- [ ] All components render in Storybook/isolation
- [ ] Responsive behavior verified
- [ ] Accessibility tests pass

### Tier 4 Complete When:
- [ ] Constitutional Shell fully navigable
- [ ] All 3 sub-routes functional
- [ ] Mock APIs return realistic data
- [ ] Terminal accepts input and displays output

### Tier 5 Complete When:
- [ ] All 4 demos accessible from /demos
- [ ] Each demo has 3 functional sub-routes
- [ ] All API routes return mock data
- [ ] Navigation between demos works

### Tier 6 Complete When:
- [ ] Lighthouse score >90
- [ ] All images optimized
- [ ] SEO metadata complete
- [ ] No console errors

---

**Generated by**: CCT_Web_Prime
**Status**: Ready for Tier 2 implementation
**Next Action**: Begin `lib/types/common.ts`
