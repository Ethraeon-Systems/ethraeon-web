import Link from 'next/link';
import { Terminal, Brain, Eye, Grid, ExternalLink, FileText, Network, Zap, Activity, Shield } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Demos | Ethraeon Systems',
  description: 'Explore working demonstrations of constitutional AI governance in action.',
};

export default function Demos() {
  const demos = [
    {
      id: 'constitutional-shell',
      title: 'Constitutional AI Shell',
      description: 'Interactive command-line interface demonstrating real-time policy enforcement across multiple AI providers with audit trail generation',
      icon: Terminal,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      features: [
        'Multi-provider governance (OpenAI, Anthropic, Google)',
        'Real-time constraint enforcement',
        'Cryptographic audit trail generation',
        'Policy compilation and validation'
      ],
      demoUrl: '#constitutional-shell',
      docsUrl: '#docs-shell'
    },
    {
      id: 'dim',
      title: 'Decision Insight Model (DIM)',
      description: 'Policy conflict resolution engine showing how constitutional constraints are compiled, optimized, and enforced at runtime',
      icon: Brain,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      features: [
        'Policy conflict detection and resolution',
        'Constraint optimization algorithms',
        'Runtime enforcement visualization',
        'Priority-based arbitration'
      ],
      demoUrl: '#dim',
      docsUrl: '#docs-dim'
    },
    {
      id: 'witness-os',
      title: 'Recursive Witness OS',
      description: 'Evidential decision graph explorer with cryptographic verification, demonstrating complete audit trails for regulatory compliance',
      icon: Eye,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      features: [
        'Interactive decision graph navigation',
        'Cryptographic integrity verification',
        'Regulatory export (HIPAA, FINRA, EU AI Act)',
        'Temporal trace analysis'
      ],
      demoUrl: '#witness-os',
      docsUrl: '#docs-witness'
    },
    {
      id: 'p13-luigi',
      title: 'P13 Predictive Grid (Luigi)',
      description: 'Behavioral drift detection system monitoring AI model changes and triggering constitutional rollback when thresholds are exceeded',
      icon: Grid,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      features: [
        'Baseline behavioral fingerprinting',
        'Real-time drift scoring',
        'Automatic threshold-based alerting',
        'Constitutional rollback simulation'
      ],
      demoUrl: '#p13-luigi',
      docsUrl: '#docs-p13'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Working Demonstrations
            </h1>
            <p className="text-xl text-blue-100 mb-10">
              Explore constitutional AI governance in action through interactive demos
            </p>
          </div>
        </Container>
      </section>

      {/* Demos Grid */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Demonstrations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each demo showcases core capabilities of the Ethraeon constitutional AI framework
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {demos.map((demo) => {
              const Icon = demo.icon;
              return (
                <Card key={demo.id} hover className="flex flex-col h-full">
                  <div className="flex items-start mb-6">
                    <div className={`w-14 h-14 ${demo.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-7 h-7 ${demo.iconColor}`} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{demo.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 flex-grow">
                    {demo.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {demo.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <span className="text-primary-600 mr-2 flex-shrink-0">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4 border-t border-gray-200">
                    <a
                      href={demo.demoUrl}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open Demo
                    </a>
                    <a
                      href={demo.docsUrl}
                      className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Technical Notes
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* System Infrastructure Demos */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">System Infrastructure Demos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how ETHRAEON's core infrastructure enables governance-first AI at scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/demos/constellation">
              <Card hover className="h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Network className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Constellation</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Real-time system topology and health monitoring
                </p>
                <span className="text-sm font-medium text-blue-600">
                  23 seconds →
                </span>
              </Card>
            </Link>

            <Link href="/demos/nexus">
              <Card hover className="h-full">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nexus</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Cross-system bridge with constitutional enforcement
                </p>
                <span className="text-sm font-medium text-purple-600">
                  20 seconds →
                </span>
              </Card>
            </Link>

            <Link href="/demos/lyra">
              <Card hover className="h-full">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Lyra</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Distributed orchestration with instant failover
                </p>
                <span className="text-sm font-medium text-green-600">
                  22 seconds →
                </span>
              </Card>
            </Link>

            <Link href="/demos/trinity">
              <Card hover className="h-full">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Trinity</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Harmonic validation with cryptographic proof
                </p>
                <span className="text-sm font-medium text-orange-600">
                  18 seconds →
                </span>
              </Card>
            </Link>
          </div>
        </Container>
      </section>

      {/* Demo Details Sections */}
      <section id="constitutional-shell" className="py-20 sm:py-24 bg-gray-50 scroll-mt-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Terminal className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Constitutional AI Shell</h2>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-4">
                The Constitutional AI Shell provides a command-line interface for interacting with multiple AI providers
                under unified governance. Watch as natural language policies are compiled into executable constraints
                and enforced in real-time across OpenAI, Anthropic, Google, and local models.
              </p>
              <p className="text-gray-600 mb-6">
                Every interaction generates a cryptographic audit trail showing policy compilation, constraint
                application, and model outputs—providing complete transparency for regulatory compliance.
              </p>
              <div className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                <div className="mb-2">$ ethraeon-shell --policy hipaa_v2.4</div>
                <div className="mb-2 text-gray-500">&gt; Loading constitution: HIPAA Clinical v2.4</div>
                <div className="mb-2 text-gray-500">&gt; Compiling 47 constraints...</div>
                <div className="mb-4 text-gray-500">&gt; ✓ Ready | Providers: [openai, anthropic, google]</div>
                <div className="mb-2">$ query "Recommend treatment for patient with diabetes"</div>
                <div className="mb-2 text-gray-500">&gt; Enforcing privacy constraints...</div>
                <div className="text-gray-500">&gt; ✓ Output validated | Audit trail: trace_2025_001</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="dim" className="py-20 sm:py-24 scroll-mt-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Decision Insight Model (DIM)</h2>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <p className="text-gray-600 mb-4">
                DIM demonstrates how constitutional constraints are compiled from natural language policies, optimized
                for performance, and enforced at runtime. When policies conflict, DIM's arbitration engine resolves
                them based on priority, context, and stakeholder requirements.
              </p>
              <p className="text-gray-600 mb-6">
                Watch as policies like "respect patient privacy" and "enable medical research" are transformed into
                formal logical constraints, then see the optimizer find valid execution paths that satisfy both.
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-600 pl-4">
                  <div className="font-semibold text-gray-900 mb-1">Policy A: "Never disclose PHI outside authorized context"</div>
                  <div className="text-sm text-gray-600">Compiled → constraint_001: require(operator.medical_license) IF context.contains(PHI)</div>
                </div>
                <div className="border-l-4 border-purple-600 pl-4">
                  <div className="font-semibold text-gray-900 mb-1">Policy B: "Enable de-identified research data sharing"</div>
                  <div className="text-sm text-gray-600">Compiled → constraint_002: allow(research_export) IF data.deidentified == true</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="font-semibold text-purple-900 mb-1">✓ Conflict Resolution:</div>
                  <div className="text-sm text-gray-700">Priority: Policy A (privacy) &gt; Policy B (research)</div>
                  <div className="text-sm text-gray-700">Solution: Apply de-identification before research export</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="witness-os" className="py-20 sm:py-24 bg-gray-50 scroll-mt-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Recursive Witness OS</h2>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <p className="text-gray-600 mb-4">
                Recursive Witness provides deep visibility into AI decision-making through evidential decision graphs
                (EDGs). Navigate the complete chain of reasoning from input → constraints → model processing → output,
                with cryptographic verification at every node.
              </p>
              <p className="text-gray-600 mb-6">
                Export audit packages for regulatory compliance (HIPAA, FINRA, EU AI Act) with human-readable
                explanations and machine-verifiable proofs. Perfect for demonstrating AI accountability to auditors
                and regulators.
              </p>
              <div className="bg-green-50 p-6 rounded-lg">
                <div className="font-mono text-sm text-gray-700 space-y-2">
                  <div>┌─ INPUT NODE (2025-01-18 14:23:17)</div>
                  <div>│  User Query: "Recommend diabetes treatment"</div>
                  <div>│  Context: EMR_98234 | Operator: dr_smith_CA_12345</div>
                  <div>│</div>
                  <div>├─ CONSTRAINT CHECKPOINT #1: Privacy</div>
                  <div>│  └─ ✓ PASS (Medical license verified)</div>
                  <div>│</div>
                  <div>├─ CONSTRAINT CHECKPOINT #2: Clinical Accuracy</div>
                  <div>│  └─ ✓ PASS (2 peer-reviewed sources cited)</div>
                  <div>│</div>
                  <div>├─ MODEL REASONING (claude-3-opus)</div>
                  <div>│  └─ Evidence: ADA Standards 2025, ACCORD Study 2010</div>
                  <div>│</div>
                  <div>└─ OUTPUT NODE</div>
                  <div>   └─ ✓ VERIFIED | Hash: 0x4a7b...</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="p13-luigi" className="py-20 sm:py-24 scroll-mt-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                <Grid className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">P13 Predictive Grid (Luigi)</h2>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <p className="text-gray-600 mb-4">
                The P13 Predictive Grid (codename: Luigi) monitors AI model behavior over time, detecting drift when
                providers update models. By capturing behavioral baselines and computing divergence scores, Luigi
                alerts when constitutional compliance degrades—before harm occurs.
              </p>
              <p className="text-gray-600 mb-6">
                Watch as Luigi compares pre-update and post-update model behavior, calculates drift across multiple
                dimensions (accuracy, safety, escalation rates), and triggers automatic rollback when thresholds
                are exceeded.
              </p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm font-semibold text-gray-600 mb-2">BASELINE (Oct 2024)</div>
                    <div className="space-y-1 text-sm text-gray-700">
                      <div>Accuracy: 94.2%</div>
                      <div>Escalation Rate: 12.3%</div>
                      <div>Compliance: 99.8%</div>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border-2 border-orange-300">
                    <div className="text-sm font-semibold text-orange-900 mb-2">POST-UPDATE (Jan 2025)</div>
                    <div className="space-y-1 text-sm text-gray-700">
                      <div>Accuracy: 93.1% <span className="text-red-600">↓ 1.1%</span></div>
                      <div>Escalation Rate: 8.7% <span className="text-red-600">↓ 3.6%</span></div>
                      <div>Compliance: 97.2% <span className="text-red-600">↓ 2.6%</span></div>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 border-l-4 border-red-600 p-4">
                  <div className="font-semibold text-red-900 mb-1">⚠ DRIFT ALERT</div>
                  <div className="text-sm text-gray-700">Divergence Score: 6.8/10 (Threshold: 5.0/10)</div>
                  <div className="text-sm text-gray-700">Action: Automatic rollback to baseline model</div>
                  <div className="text-sm text-gray-700">Revalidation: Required before accepting update</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Build with Ethraeon?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Learn more about our constitutional AI framework and how it can power accountable AI systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Get in Touch
              </Button>
              <Button href="/ethos" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                Read Our Ethos
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
