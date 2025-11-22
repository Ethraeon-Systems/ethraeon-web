# ETHRAEON.AI — Demos Route Map

**Generated**: 2025-01-19
**Agent**: CCT_Web_Prime
**Purpose**: Comprehensive route mapping for demonstration interfaces

---

## Visual Route Hierarchy

```
┌─────────────────────────────────────────────────────────────────┐
│                        ETHRAEON.AI                               │
│                          Home (/)                                │
└────────────────────────┬────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Demos Index (/demos)                          │
│                                                                   │
│  [Constitutional Shell]  [DIM]  [Witness OS]  [P13 Grid]        │
└─────┬─────────────────┬─────────────────┬────────────┬──────────┘
      │                 │                 │            │
      │                 │                 │            │
      ▼                 ▼                 ▼            ▼
┌─────────────┐  ┌─────────────┐  ┌───────────┐  ┌─────────────┐
│ Shell Main  │  │  DIM Main   │  │ Witness   │  │  P13 Main   │
│             │  │             │  │   Main    │  │             │
└──┬──┬───┬───┘  └──┬──┬───┬───┘  └─┬──┬──┬──┘  └──┬──┬───┬───┘
   │  │   │         │  │   │        │  │  │        │  │   │
   ▼  ▼   ▼         ▼  ▼   ▼        ▼  ▼  ▼        ▼  ▼   ▼
```

---

## Route Structure

### 1. Constitutional AI Shell Routes

#### Main Landing
```
Route:      /demos/constitutional-shell
File:       app/demos/constitutional-shell/page.tsx
Purpose:    Overview and introduction to the Constitutional AI Shell
Layout:     Hero + Features + Sub-navigation
```

**Content Sections:**
- Hero: "Multi-Provider AI Governance in Real-Time"
- Key Features grid (4 features)
- Interactive navigation to sub-demos
- Live demo preview

**Sub-Routes:**

##### Sandbox
```
Route:      /demos/constitutional-shell/sandbox
File:       app/demos/constitutional-shell/sandbox/page.tsx
Component:  <ConstitutionalShellSandbox />
Purpose:    Interactive terminal for executing governed AI queries
```

**Features:**
- Terminal emulator interface
- Provider selection (OpenAI, Anthropic, Google, Local)
- Policy loader dropdown
- Real-time constraint enforcement visualization
- Audit trail generation

**API Integration:**
```typescript
POST /api/demos/shell/query
Request: {
  query: string;
  provider: 'openai' | 'anthropic' | 'google' | 'local';
  policy: string;
}
Response: {
  output: string;
  constraints_applied: Constraint[];
  audit_trail_id: string;
  execution_time_ms: number;
}
```

##### Policy Compiler
```
Route:      /demos/constitutional-shell/policy
File:       app/demos/constitutional-shell/policy/page.tsx
Component:  <PolicyCompilerViewer />
Purpose:    Visualize natural language policy compilation to constraints
```

**Features:**
- Natural language policy input
- Compilation visualization (stages: Parse → Analyze → Compile → Validate)
- Generated constraint output
- Syntax highlighting for constraint code
- Downloadable compiled policy

**API Integration:**
```typescript
POST /api/demos/shell/compile
Request: {
  policy_text: string;
  target_format: 'json' | 'yaml' | 'constraint_dsl';
}
Response: {
  compiled_constraints: Constraint[];
  compilation_stages: Stage[];
  warnings: string[];
  execution_graph: Graph;
}
```

##### Audit Trail Explorer
```
Route:      /demos/constitutional-shell/audit
File:       app/demos/constitutional-shell/audit/page.tsx
Component:  <AuditTrailExplorer />
Purpose:    Inspect cryptographic audit trails from executed queries
```

**Features:**
- Audit trail search/filter
- Timeline visualization
- Node-by-node inspection
- Cryptographic hash verification
- Export to regulatory formats (HIPAA, FINRA, EU AI Act)

**API Integration:**
```typescript
GET /api/demos/shell/audit/:trace_id
Response: {
  trace_id: string;
  timestamp: string;
  query: string;
  provider: string;
  constraints: Constraint[];
  execution_trace: TraceNode[];
  hash_chain: string[];
  verification_status: 'verified' | 'failed';
}
```

---

### 2. Decision Insight Model (DIM) Routes

#### Main Landing
```
Route:      /demos/dim
File:       app/demos/dim/page.tsx
Purpose:    Overview of policy conflict resolution engine
Layout:     Hero + Conflict Resolution Flow + Sub-navigation
```

**Content Sections:**
- Hero: "Policy Conflict Resolution & Constraint Optimization"
- How DIM Works: 3-step flow (Compile → Detect → Resolve)
- Example scenarios
- Interactive navigation to sub-demos

**Sub-Routes:**

##### Policy Builder
```
Route:      /demos/dim/policy-builder
File:       app/demos/dim/policy-builder/page.tsx
Component:  <PolicyBuilder />
Purpose:    Create constitutional policies in natural language
```

**Features:**
- Multi-policy input interface
- Policy templates library
- Real-time validation
- Policy priority assignment
- Stakeholder assignment
- Preview compiled constraints

**API Integration:**
```typescript
POST /api/demos/dim/compile-policy
Request: {
  policies: PolicyInput[];
  priorities: { [policy_id: string]: number };
}
Response: {
  compiled_policies: CompiledPolicy[];
  constraint_graph: ConstraintGraph;
  potential_conflicts: Conflict[];
}
```

##### Conflict Resolver
```
Route:      /demos/dim/conflict-resolver
File:       app/demos/dim/conflict-resolver/page.tsx
Component:  <ConflictResolver />
Purpose:    Detect and resolve policy conflicts using priority-based arbitration
```

**Features:**
- Conflict detection visualization
- Conflict graph display
- Priority matrix
- Resolution strategy selector
- Before/after comparison
- Resolution explanation

**API Integration:**
```typescript
POST /api/demos/dim/detect-conflicts
Request: {
  policies: CompiledPolicy[];
}
Response: {
  conflicts: Conflict[];
  conflict_graph: ConflictGraph;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

POST /api/demos/dim/resolve
Request: {
  conflicts: Conflict[];
  resolution_strategy: 'priority' | 'consensus' | 'stakeholder';
}
Response: {
  resolved_constraints: Constraint[];
  resolution_path: ResolutionStep[];
  trade_offs: TradeOff[];
}
```

##### Constraint Optimizer
```
Route:      /demos/dim/optimizer
File:       app/demos/dim/optimizer/page.tsx
Component:  <ConstraintOptimizer />
Purpose:    Optimize constraint execution for performance
```

**Features:**
- Constraint execution graph
- Optimization algorithm selector
- Performance metrics
- Parallel execution paths
- Bottleneck identification
- Optimized constraint order

**API Integration:**
```typescript
POST /api/demos/dim/optimize
Request: {
  constraints: Constraint[];
  optimization_goal: 'speed' | 'accuracy' | 'balanced';
}
Response: {
  optimized_graph: ExecutionGraph;
  execution_plan: ExecutionPlan;
  performance_improvement: number;
  parallel_branches: number;
}
```

---

### 3. Recursive Witness OS Routes

#### Main Landing
```
Route:      /demos/witness
File:       app/demos/witness/page.tsx
Purpose:    Overview of evidential decision graph system
Layout:     Hero + EDG Visualization + Sub-navigation
```

**Content Sections:**
- Hero: "Cryptographic Audit Trails for AI Accountability"
- What is an EDG: Interactive diagram
- Regulatory compliance features
- Interactive navigation to sub-demos

**Sub-Routes:**

##### Graph Explorer
```
Route:      /demos/witness/graph-explorer
File:       app/demos/witness/graph-explorer/page.tsx
Component:  <EDGGraphExplorer />
Purpose:    Navigate and inspect evidential decision graphs
```

**Features:**
- Interactive EDG visualization (tree/graph layout)
- Node inspection panel
- Edge (causality) display
- Temporal trace navigation
- Zoom/pan/filter controls
- Node search

**API Integration:**
```typescript
POST /api/demos/witness/create-edg
Request: {
  query: string;
  policy: string;
  provider: string;
}
Response: {
  edg_id: string;
  root_node: EDGNode;
  total_nodes: number;
}

GET /api/demos/witness/edg/:id
Response: {
  edg: EDG;
  nodes: EDGNode[];
  edges: EDGEdge[];
  metadata: EDGMetadata;
}
```

##### Verification Panel
```
Route:      /demos/witness/verification
File:       app/demos/witness/verification/page.tsx
Component:  <VerificationPanel />
Purpose:    Verify cryptographic integrity of decision graphs
```

**Features:**
- Hash chain visualization
- Node-by-node verification
- Cryptographic proof display
- Tamper detection
- Verification certificate generation

**API Integration:**
```typescript
POST /api/demos/witness/verify
Request: {
  edg_id: string;
  node_ids?: string[];
}
Response: {
  verification_status: 'verified' | 'tampered' | 'corrupted';
  hash_chain: HashNode[];
  tampered_nodes: string[];
  verification_certificate: string;
}
```

##### Export Builder
```
Route:      /demos/witness/export
File:       app/demos/witness/export/page.tsx
Component:  <ExportBuilder />
Purpose:    Export audit packages for regulatory compliance
```

**Features:**
- Regulatory framework selector (HIPAA, FINRA, EU AI Act, GDPR)
- Export format selector (PDF, JSON, XML)
- Custom field mapping
- Human-readable report generation
- Machine-verifiable proof export
- Batch export for multiple EDGs

**API Integration:**
```typescript
POST /api/demos/witness/export
Request: {
  edg_ids: string[];
  framework: 'hipaa' | 'finra' | 'eu_ai_act' | 'gdpr';
  format: 'pdf' | 'json' | 'xml';
  include_proofs: boolean;
}
Response: {
  export_package: Blob;
  package_hash: string;
  included_edgs: number;
  export_metadata: ExportMetadata;
}
```

---

### 4. P13 Predictive Grid (Luigi) Routes

#### Main Landing
```
Route:      /demos/p13
File:       app/demos/p13/page.tsx
Purpose:    Overview of behavioral drift detection system
Layout:     Hero + Drift Detection Flow + Sub-navigation
```

**Content Sections:**
- Hero: "Behavioral Drift Detection for Constitutional AI"
- How P13 Works: 4-step flow (Baseline → Monitor → Detect → Rollback)
- Example drift scenarios
- Interactive navigation to sub-demos

**Sub-Routes:**

##### Baseline Capture
```
Route:      /demos/p13/baseline
File:       app/demos/p13/baseline/page.tsx
Component:  <BaselineCapture />
Purpose:    Capture AI model behavioral baselines
```

**Features:**
- Test suite runner
- Baseline capture progress
- Behavioral fingerprint visualization
- Metric configuration
- Baseline comparison
- Export baseline snapshot

**API Integration:**
```typescript
POST /api/demos/p13/capture-baseline
Request: {
  model_id: string;
  provider: string;
  test_suite: TestCase[];
  metrics: string[];
}
Response: {
  baseline_id: string;
  fingerprint: BehavioralFingerprint;
  metrics: Metrics;
  capture_timestamp: string;
}
```

##### Drift Monitor
```
Route:      /demos/p13/monitor
File:       app/demos/p13/monitor/page.tsx
Component:  <DriftMonitor />
Purpose:    Real-time drift monitoring dashboard
```

**Features:**
- Live drift score display
- Metric divergence charts
- Alert threshold configuration
- Historical drift trends
- Alert log
- Rollback trigger

**API Integration:**
```typescript
POST /api/demos/p13/test-drift
Request: {
  baseline_id: string;
  current_model_id: string;
  test_suite: TestCase[];
}
Response: {
  drift_score: number;
  threshold: number;
  status: 'safe' | 'warning' | 'critical';
  divergence_metrics: DivergenceMetric[];
  recommendation: 'continue' | 'investigate' | 'rollback';
}
```

##### Analysis Dashboard
```
Route:      /demos/p13/analysis
File:       app/demos/p13/analysis/page.tsx
Component:  <AnalysisDashboard />
Purpose:    Deep analysis of behavioral divergence
```

**Features:**
- Baseline vs current comparison
- Metric-by-metric breakdown
- Divergence heatmap
- Test case analysis
- Rollback simulation
- Export analysis report

**API Integration:**
```typescript
GET /api/demos/p13/baselines
Response: {
  baselines: Baseline[];
}

POST /api/demos/p13/compare
Request: {
  baseline_id: string;
  comparison_id: string;
  metrics: string[];
}
Response: {
  comparison: Comparison;
  divergence_map: DivergenceMap;
  critical_areas: string[];
  rollback_recommendation: RollbackPlan;
}
```

---

## Demo Navigation Component

### DemoNav Component
```typescript
// components/demos/DemoNav.tsx

interface DemoNavProps {
  demoId: 'constitutional-shell' | 'dim' | 'witness' | 'p13';
  currentPath: string;
}

export function DemoNav({ demoId, currentPath }: DemoNavProps) {
  const navItems = DEMO_METADATA[demoId].nav;

  return (
    <nav className="demo-nav">
      {navItems.map(item => (
        <Link
          key={item.path}
          href={item.path}
          className={currentPath === item.path ? 'active' : ''}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
```

---

## Route Metadata Configuration

```typescript
// lib/constants/demo-routes.ts

export const DEMO_ROUTES = {
  CONSTITUTIONAL_SHELL: {
    INDEX: '/demos/constitutional-shell',
    SANDBOX: '/demos/constitutional-shell/sandbox',
    POLICY: '/demos/constitutional-shell/policy',
    AUDIT: '/demos/constitutional-shell/audit',
  },
  DIM: {
    INDEX: '/demos/dim',
    POLICY_BUILDER: '/demos/dim/policy-builder',
    CONFLICT_RESOLVER: '/demos/dim/conflict-resolver',
    OPTIMIZER: '/demos/dim/optimizer',
  },
  WITNESS: {
    INDEX: '/demos/witness',
    GRAPH_EXPLORER: '/demos/witness/graph-explorer',
    VERIFICATION: '/demos/witness/verification',
    EXPORT: '/demos/witness/export',
  },
  P13: {
    INDEX: '/demos/p13',
    BASELINE: '/demos/p13/baseline',
    MONITOR: '/demos/p13/monitor',
    ANALYSIS: '/demos/p13/analysis',
  },
} as const;

export const DEMO_NAV_CONFIG = {
  'constitutional-shell': [
    { path: DEMO_ROUTES.CONSTITUTIONAL_SHELL.SANDBOX, label: 'Sandbox', icon: 'Terminal' },
    { path: DEMO_ROUTES.CONSTITUTIONAL_SHELL.POLICY, label: 'Policy Compiler', icon: 'FileCode' },
    { path: DEMO_ROUTES.CONSTITUTIONAL_SHELL.AUDIT, label: 'Audit Trail', icon: 'Eye' },
  ],
  'dim': [
    { path: DEMO_ROUTES.DIM.POLICY_BUILDER, label: 'Policy Builder', icon: 'Plus' },
    { path: DEMO_ROUTES.DIM.CONFLICT_RESOLVER, label: 'Conflict Resolver', icon: 'AlertTriangle' },
    { path: DEMO_ROUTES.DIM.OPTIMIZER, label: 'Optimizer', icon: 'Zap' },
  ],
  'witness': [
    { path: DEMO_ROUTES.WITNESS.GRAPH_EXPLORER, label: 'Graph Explorer', icon: 'Network' },
    { path: DEMO_ROUTES.WITNESS.VERIFICATION, label: 'Verification', icon: 'Shield' },
    { path: DEMO_ROUTES.WITNESS.EXPORT, label: 'Export', icon: 'Download' },
  ],
  'p13': [
    { path: DEMO_ROUTES.P13.BASELINE, label: 'Baseline Capture', icon: 'Camera' },
    { path: DEMO_ROUTES.P13.MONITOR, label: 'Drift Monitor', icon: 'Activity' },
    { path: DEMO_ROUTES.P13.ANALYSIS, label: 'Analysis', icon: 'BarChart' },
  ],
} as const;
```

---

## URL Structure Summary

```
/demos                                    # Demos index (current)
├── /constitutional-shell                 # Shell main
│   ├── /sandbox                          # Interactive terminal
│   ├── /policy                           # Policy compiler
│   └── /audit                            # Audit trail explorer
├── /dim                                  # DIM main
│   ├── /policy-builder                   # Policy creation
│   ├── /conflict-resolver                # Conflict resolution
│   └── /optimizer                        # Constraint optimization
├── /witness                              # Witness main
│   ├── /graph-explorer                   # EDG navigation
│   ├── /verification                     # Crypto verification
│   └── /export                           # Regulatory export
└── /p13                                  # P13 main
    ├── /baseline                         # Baseline capture
    ├── /monitor                          # Drift monitoring
    └── /analysis                         # Behavioral analysis
```

**Total Routes**: 17 (1 index + 4 main + 12 sub-routes)

---

## Implementation Checklist

### Constitutional Shell
- [ ] `/demos/constitutional-shell/page.tsx` - Main landing
- [ ] `/demos/constitutional-shell/sandbox/page.tsx` - Interactive sandbox
- [ ] `/demos/constitutional-shell/policy/page.tsx` - Policy compiler
- [ ] `/demos/constitutional-shell/audit/page.tsx` - Audit trail

### DIM
- [ ] `/demos/dim/page.tsx` - Main landing
- [ ] `/demos/dim/policy-builder/page.tsx` - Policy builder
- [ ] `/demos/dim/conflict-resolver/page.tsx` - Conflict resolver
- [ ] `/demos/dim/optimizer/page.tsx` - Optimizer

### Witness OS
- [ ] `/demos/witness/page.tsx` - Main landing
- [ ] `/demos/witness/graph-explorer/page.tsx` - Graph explorer
- [ ] `/demos/witness/verification/page.tsx` - Verification
- [ ] `/demos/witness/export/page.tsx` - Export builder

### P13
- [ ] `/demos/p13/page.tsx` - Main landing
- [ ] `/demos/p13/baseline/page.tsx` - Baseline capture
- [ ] `/demos/p13/monitor/page.tsx` - Drift monitor
- [ ] `/demos/p13/analysis/page.tsx` - Analysis dashboard

---

**Generated by**: CCT_Web_Prime
**Date**: 2025-01-19
**Status**: ✓ Route map complete and ready for implementation
