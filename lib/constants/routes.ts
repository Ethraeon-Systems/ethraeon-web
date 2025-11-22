/**
 * Route Constants for Ethraeon.AI
 * Centralized route definitions for type-safe navigation
 */

export const ROUTES = {
  // Core Pages
  HOME: '/',
  DEMOS: '/demos',
  ETHOS: '/ethos',
  LEGAL: '/legal',

  // Marketing Pages (Legacy)
  ABOUT: '/about',
  INVESTORS: '/investors',
  PRESS: '/press',
  CONTACT: '/contact',
  OVERVIEW: '/overview',
  BLUEPRINT: '/blueprint',
  USE_CASES: '/use-cases',

  // Future Pages
  SUSTAINABILITY: '/sustainability',
  SPEAK_UP: '/speak-up',
  ACCESSIBILITY: '/accessibility',
  RESEARCH: '/research',

  // Demo Routes - Constitutional Shell
  DEMOS_SHELL: '/demos/constitutional-shell',
  DEMOS_SHELL_SANDBOX: '/demos/constitutional-shell/sandbox',
  DEMOS_SHELL_POLICY: '/demos/constitutional-shell/policy',
  DEMOS_SHELL_AUDIT: '/demos/constitutional-shell/audit',

  // Demo Routes - DIM
  DEMOS_DIM: '/demos/dim',
  DEMOS_DIM_POLICY_BUILDER: '/demos/dim/policy-builder',
  DEMOS_DIM_CONFLICT_RESOLVER: '/demos/dim/conflict-resolver',
  DEMOS_DIM_OPTIMIZER: '/demos/dim/optimizer',

  // Demo Routes - Witness OS
  DEMOS_WITNESS: '/demos/witness',
  DEMOS_WITNESS_GRAPH_EXPLORER: '/demos/witness/graph-explorer',
  DEMOS_WITNESS_VERIFICATION: '/demos/witness/verification',
  DEMOS_WITNESS_EXPORT: '/demos/witness/export',

  // Demo Routes - P13
  DEMOS_P13: '/demos/p13',
  DEMOS_P13_BASELINE: '/demos/p13/baseline',
  DEMOS_P13_MONITOR: '/demos/p13/monitor',
  DEMOS_P13_ANALYSIS: '/demos/p13/analysis',

  // Demo Routes - System Infrastructure Demos
  DEMOS_CONSTELLATION: '/demos/constellation',
  DEMOS_CONSTELLATION_LIVE: '/demos/constellation/live',
  DEMOS_CONSTELLATION_SYSTEMS: '/demos/constellation/systems',
  DEMOS_CONSTELLATION_HEALTH: '/demos/constellation/health',

  DEMOS_NEXUS: '/demos/nexus',
  DEMOS_NEXUS_API_BRIDGE: '/demos/nexus/api-bridge',
  DEMOS_NEXUS_SECURITY: '/demos/nexus/security',
  DEMOS_NEXUS_PERFORMANCE: '/demos/nexus/performance',

  DEMOS_LYRA: '/demos/lyra',
  DEMOS_LYRA_ORCHESTRATION: '/demos/lyra/orchestration',
  DEMOS_LYRA_LOAD_BALANCING: '/demos/lyra/load-balancing',
  DEMOS_LYRA_FAILOVER: '/demos/lyra/failover',

  DEMOS_TRINITY: '/demos/trinity',
  DEMOS_TRINITY_CONSENSUS: '/demos/trinity/consensus',
  DEMOS_TRINITY_VALIDATION: '/demos/trinity/validation',
  DEMOS_TRINITY_AUDIT: '/demos/trinity/audit',
} as const;

export const API_ROUTES = {
  // Health & Config
  HEALTH: '/api/health',
  CONFIG: '/api/config',
  EXAMPLES: '/api/examples',

  // Constitutional Shell APIs
  SHELL_COMPILE: '/api/demos/shell/compile',
  SHELL_QUERY: '/api/demos/shell/query',
  SHELL_AUDIT: '/api/demos/shell/audit',
  SHELL_PROVIDERS: '/api/demos/shell/providers',

  // DIM APIs
  DIM_COMPILE_POLICY: '/api/demos/dim/compile-policy',
  DIM_DETECT_CONFLICTS: '/api/demos/dim/detect-conflicts',
  DIM_RESOLVE: '/api/demos/dim/resolve',
  DIM_OPTIMIZE: '/api/demos/dim/optimize',

  // Witness OS APIs
  WITNESS_CREATE_EDG: '/api/demos/witness/create-edg',
  WITNESS_GET_EDG: '/api/demos/witness/edg',
  WITNESS_VERIFY: '/api/demos/witness/verify',
  WITNESS_EXPORT: '/api/demos/witness/export',

  // P13 APIs
  P13_CAPTURE_BASELINE: '/api/demos/p13/capture-baseline',
  P13_TEST_DRIFT: '/api/demos/p13/test-drift',
  P13_BASELINES: '/api/demos/p13/baselines',
  P13_COMPARE: '/api/demos/p13/compare',

  // Tracelet APIs
  TRACELET_GET: '/api/demos/tracelet',
  TRACELET_CREATE: '/api/demos/tracelet/create',
  TRACELET_LIST: '/api/demos/tracelet/list',
} as const;

// Type helper to get route values
export type Route = typeof ROUTES[keyof typeof ROUTES];
export type APIRoute = typeof API_ROUTES[keyof typeof API_ROUTES];
