/**
 * Demo Configuration
 * Metadata and configuration for all demonstration interfaces
 */

import { ROUTES, API_ROUTES } from './routes';

export interface DemoMetadata {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  iconColor: string;
  iconBg: string;
  color: 'blue' | 'purple' | 'green' | 'orange';
  status: 'active' | 'beta' | 'coming-soon';
  features: string[];
  routes: {
    main: string;
    [key: string]: string;
  };
  api: {
    [key: string]: string;
  };
  nav: Array<{
    path: string;
    label: string;
    icon: string;
  }>;
}

export const DEMO_METADATA: Record<string, DemoMetadata> = {
  'constitutional-shell': {
    id: 'constitutional-shell',
    title: 'Constitutional AI Shell',
    slug: 'constitutional-shell',
    description: 'Interactive command-line interface demonstrating real-time policy enforcement across multiple AI providers with audit trail generation',
    icon: 'Terminal',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
    color: 'blue',
    status: 'active',
    features: [
      'Multi-provider governance (OpenAI, Anthropic, Google)',
      'Real-time constraint enforcement',
      'Cryptographic audit trail generation',
      'Policy compilation and validation',
    ],
    routes: {
      main: ROUTES.DEMOS_SHELL,
      sandbox: ROUTES.DEMOS_SHELL_SANDBOX,
      policy: ROUTES.DEMOS_SHELL_POLICY,
      audit: ROUTES.DEMOS_SHELL_AUDIT,
    },
    api: {
      compile: API_ROUTES.SHELL_COMPILE,
      query: API_ROUTES.SHELL_QUERY,
      audit: API_ROUTES.SHELL_AUDIT,
      providers: API_ROUTES.SHELL_PROVIDERS,
    },
    nav: [
      {
        path: ROUTES.DEMOS_SHELL_SANDBOX,
        label: 'Sandbox',
        icon: 'Terminal',
      },
      {
        path: ROUTES.DEMOS_SHELL_POLICY,
        label: 'Policy Compiler',
        icon: 'FileCode',
      },
      {
        path: ROUTES.DEMOS_SHELL_AUDIT,
        label: 'Audit Trail',
        icon: 'Eye',
      },
    ],
  },

  'dim': {
    id: 'dim',
    title: 'Decision Insight Model (DIM)',
    slug: 'dim',
    description: 'Policy conflict resolution engine showing how constitutional constraints are compiled, optimized, and enforced at runtime',
    icon: 'Brain',
    iconColor: 'text-purple-600',
    iconBg: 'bg-purple-100',
    color: 'purple',
    status: 'active',
    features: [
      'Policy conflict detection and resolution',
      'Constraint optimization algorithms',
      'Runtime enforcement visualization',
      'Priority-based arbitration',
    ],
    routes: {
      main: ROUTES.DEMOS_DIM,
      policyBuilder: ROUTES.DEMOS_DIM_POLICY_BUILDER,
      conflictResolver: ROUTES.DEMOS_DIM_CONFLICT_RESOLVER,
      optimizer: ROUTES.DEMOS_DIM_OPTIMIZER,
    },
    api: {
      compilePolicy: API_ROUTES.DIM_COMPILE_POLICY,
      detectConflicts: API_ROUTES.DIM_DETECT_CONFLICTS,
      resolve: API_ROUTES.DIM_RESOLVE,
      optimize: API_ROUTES.DIM_OPTIMIZE,
    },
    nav: [
      {
        path: ROUTES.DEMOS_DIM_POLICY_BUILDER,
        label: 'Policy Builder',
        icon: 'Plus',
      },
      {
        path: ROUTES.DEMOS_DIM_CONFLICT_RESOLVER,
        label: 'Conflict Resolver',
        icon: 'AlertTriangle',
      },
      {
        path: ROUTES.DEMOS_DIM_OPTIMIZER,
        label: 'Optimizer',
        icon: 'Zap',
      },
    ],
  },

  'witness': {
    id: 'witness',
    title: 'Recursive Witness OS',
    slug: 'witness',
    description: 'Evidential decision graph explorer with cryptographic verification, demonstrating complete audit trails for regulatory compliance',
    icon: 'Eye',
    iconColor: 'text-green-600',
    iconBg: 'bg-green-100',
    color: 'green',
    status: 'active',
    features: [
      'Interactive decision graph navigation',
      'Cryptographic integrity verification',
      'Regulatory export (HIPAA, FINRA, EU AI Act)',
      'Temporal trace analysis',
    ],
    routes: {
      main: ROUTES.DEMOS_WITNESS,
      graphExplorer: ROUTES.DEMOS_WITNESS_GRAPH_EXPLORER,
      verification: ROUTES.DEMOS_WITNESS_VERIFICATION,
      export: ROUTES.DEMOS_WITNESS_EXPORT,
    },
    api: {
      createEDG: API_ROUTES.WITNESS_CREATE_EDG,
      getEDG: API_ROUTES.WITNESS_GET_EDG,
      verify: API_ROUTES.WITNESS_VERIFY,
      export: API_ROUTES.WITNESS_EXPORT,
    },
    nav: [
      {
        path: ROUTES.DEMOS_WITNESS_GRAPH_EXPLORER,
        label: 'Graph Explorer',
        icon: 'Network',
      },
      {
        path: ROUTES.DEMOS_WITNESS_VERIFICATION,
        label: 'Verification',
        icon: 'Shield',
      },
      {
        path: ROUTES.DEMOS_WITNESS_EXPORT,
        label: 'Export',
        icon: 'Download',
      },
    ],
  },

  'p13': {
    id: 'p13-luigi',
    title: 'P13 Predictive Grid (Luigi)',
    slug: 'p13',
    description: 'Behavioral drift detection system monitoring AI model changes and triggering constitutional rollback when thresholds are exceeded',
    icon: 'Grid',
    iconColor: 'text-orange-600',
    iconBg: 'bg-orange-100',
    color: 'orange',
    status: 'active',
    features: [
      'Baseline behavioral fingerprinting',
      'Real-time drift scoring',
      'Automatic threshold-based alerting',
      'Constitutional rollback simulation',
    ],
    routes: {
      main: ROUTES.DEMOS_P13,
      baseline: ROUTES.DEMOS_P13_BASELINE,
      monitor: ROUTES.DEMOS_P13_MONITOR,
      analysis: ROUTES.DEMOS_P13_ANALYSIS,
    },
    api: {
      captureBaseline: API_ROUTES.P13_CAPTURE_BASELINE,
      testDrift: API_ROUTES.P13_TEST_DRIFT,
      baselines: API_ROUTES.P13_BASELINES,
      compare: API_ROUTES.P13_COMPARE,
    },
    nav: [
      {
        path: ROUTES.DEMOS_P13_BASELINE,
        label: 'Baseline Capture',
        icon: 'Camera',
      },
      {
        path: ROUTES.DEMOS_P13_MONITOR,
        label: 'Drift Monitor',
        icon: 'Activity',
      },
      {
        path: ROUTES.DEMOS_P13_ANALYSIS,
        label: 'Analysis',
        icon: 'BarChart',
      },
    ],
  },
};

// Array of all demos for iteration
export const DEMOS = Object.values(DEMO_METADATA);

// Helper to get demo by ID
export function getDemoById(id: string): DemoMetadata | undefined {
  return DEMO_METADATA[id];
}

// Helper to get demo by slug
export function getDemoBySlug(slug: string): DemoMetadata | undefined {
  return DEMOS.find((demo) => demo.slug === slug);
}

// Helper to get active demos only
export function getActiveDemos(): DemoMetadata[] {
  return DEMOS.filter((demo) => demo.status === 'active');
}
