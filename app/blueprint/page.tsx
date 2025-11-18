import { Shield, Network, GitBranch, Code, Database, Cpu, Lock, CheckCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Technical Blueprint | Ethraeon Systems',
  description: 'Deep dive into Ethraeon\'s Constitutional Field, Evidential Decision Graph, and Trinity Governance Function—the three proprietary mechanisms powering cross-model AI governance.',
};

export default function Blueprint() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white py-20 sm:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Technical Blueprint
            </h1>
            <p className="text-xl text-primary-100">
              A deep dive into Ethraeon's proprietary mechanisms: Constitutional Field, Evidential Decision Graph,
              and Trinity Governance Function.
            </p>
          </div>
        </Container>
      </section>

      {/* Architecture Overview */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">System Architecture</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6 mb-12">
              <p>
                Ethraeon operates as a <strong>governance substrate</strong> between your applications and AI models.
                Unlike traditional wrappers or middleware, Ethraeon provides constitutional enforcement at the
                infrastructure level.
              </p>
            </div>

            <Card className="bg-gray-50 p-8">
              <div className="space-y-6 font-mono text-sm">
                <div className="flex items-center space-x-4">
                  <div className="text-gray-400 w-32">Application</div>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>
                <div className="flex items-center space-x-4 pl-8">
                  <div className="text-primary-600 font-semibold w-32">↓ Trinity Governance Function</div>
                </div>
                <div className="flex items-center space-x-4 pl-16">
                  <div className="text-gray-600 w-32">Perception Layer</div>
                  <div className="text-gray-400">→ Multi-model intake</div>
                </div>
                <div className="flex items-center space-x-4 pl-8">
                  <div className="text-primary-600 font-semibold w-32">↓ Constitutional Field</div>
                </div>
                <div className="flex items-center space-x-4 pl-16">
                  <div className="text-gray-600 w-32">Constraint Layer</div>
                  <div className="text-gray-400">→ Policy enforcement</div>
                </div>
                <div className="flex items-center space-x-4 pl-8">
                  <div className="text-gray-400 w-32">↓ AI Models</div>
                  <div className="text-gray-400">→ GPT | Claude | Gemini | Llama</div>
                </div>
                <div className="flex items-center space-x-4 pl-8">
                  <div className="text-primary-600 font-semibold w-32">↓ Evidential Decision Graph</div>
                </div>
                <div className="flex items-center space-x-4 pl-16">
                  <div className="text-gray-600 w-32">Expression Layer</div>
                  <div className="text-gray-400">→ Governed output + audit trail</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-gray-400 w-32">Application</div>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Constitutional Field */}
      <section id="cf" className="py-20 sm:py-24 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Constitutional Field (CF)</h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="text-xl font-semibold text-gray-900">
                The policy compilation engine that transforms governance rules into executable constraints.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8">How It Works</h3>
              <ol className="space-y-4">
                <li>
                  <strong>Policy Ingestion:</strong> Natural language policies entered via UI or API (e.g., "Never reveal
                  personal health information").
                </li>
                <li>
                  <strong>Parsing & Analysis:</strong> NLP pipeline extracts intent, entities, and constraint types.
                </li>
                <li>
                  <strong>Constraint Generation:</strong> Compiler generates executable TypeScript/Python functions that
                  validate inputs and outputs.
                </li>
                <li>
                  <strong>Conflict Resolution:</strong> Priority-based resolution when policies contradict. Explicit override
                  mechanisms.
                </li>
                <li>
                  <strong>Versioning:</strong> Git-like version control for constitutions. Rollback to previous versions on
                  demand.
                </li>
              </ol>

              <h3 className="text-2xl font-bold text-gray-900 mt-8">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
                <Card>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Model-Agnostic</div>
                      <div className="text-sm text-gray-600">
                        Constraints apply uniformly across GPT, Claude, Gemini, Llama, and future models.
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Human-Readable</div>
                      <div className="text-sm text-gray-600">
                        Policies written in plain English, not code. Legal teams can author directly.
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Real-Time Enforcement</div>
                      <div className="text-sm text-gray-600">
                        Constraints evaluated at inference time. No post-hoc filtering.
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Composable</div>
                      <div className="text-sm text-gray-600">
                        Inherit base constitutions, layer industry-specific policies on top.
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Evidential Decision Graph */}
      <section id="edg" className="py-20 sm:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                <Network className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Evidential Decision Graph (EDG)</h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="text-xl font-semibold text-gray-900">
                Vendor-independent audit trail with cryptographic integrity and cross-model comparison.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8">Graph Structure</h3>
              <p>
                Every AI decision creates an immutable node in the EDG. Each node contains:
              </p>

              <div className="not-prose">
                <Card className="bg-gray-50 p-6 font-mono text-sm space-y-2">
                  <div><span className="text-primary-600">id:</span> UUID</div>
                  <div><span className="text-primary-600">timestamp:</span> ISO 8601</div>
                  <div><span className="text-primary-600">model_metadata:</span> {`{ provider, model_id, version }`}</div>
                  <div><span className="text-primary-600">constitution_id:</span> Reference to applied constitution</div>
                  <div><span className="text-primary-600">input_hash:</span> SHA-256 of input</div>
                  <div><span className="text-primary-600">output_hash:</span> SHA-256 of output</div>
                  <div><span className="text-primary-600">constraints_evaluated:</span> Array of constraint IDs</div>
                  <div><span className="text-primary-600">constraints_passed:</span> Array</div>
                  <div><span className="text-primary-600">constraints_failed:</span> Array</div>
                  <div><span className="text-primary-600">drift_score:</span> Float (0.0 to 1.0)</div>
                  <div><span className="text-primary-600">parent_node:</span> Reference to previous decision</div>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8">Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mt-6">
                <Card>
                  <div className="flex items-start space-x-3">
                    <Database className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Cryptographic Integrity</div>
                      <div className="text-sm text-gray-600">
                        SHA-256 hashing ensures tamper-evidence. Nodes cannot be altered post-creation.
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start space-x-3">
                    <GitBranch className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Cross-Model Comparison</div>
                      <div className="text-sm text-gray-600">
                        Compare GPT-4 vs Claude vs Gemini on same input with same constitution.
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start space-x-3">
                    <Cpu className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Drift Detection</div>
                      <div className="text-sm text-gray-600">
                        Automatically flag behavioral changes when model updates diverge from baseline.
                      </div>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start space-x-3">
                    <Lock className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Regulatory Export</div>
                      <div className="text-sm text-gray-600">
                        Export audit trails in HIPAA, FINRA, EU AI Act formats for compliance.
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trinity Governance Function */}
      <section id="tgf" className="py-20 sm:py-24 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center">
                <GitBranch className="w-8 h-8 text-primary-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900">Trinity Governance Function (TGF)</h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="text-xl font-semibold text-gray-900">
                3-body harmonic orchestration ensuring all AI outputs pass through constitutional constraints.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mt-8">Three-Body Harmonic</h3>
              <p>
                TGF implements a feedback loop between three layers, creating a stable governance orbit:
              </p>

              <div className="space-y-6 not-prose mt-8">
                <Card className="border-l-4 border-l-primary-500">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary-600">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Perception Layer</h4>
                      <p className="text-gray-600">
                        Multi-model intake and normalization. Accepts requests from any AI provider in their native format,
                        translates to universal representation.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="border-l-4 border-l-primary-500">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary-600">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Constraint Layer</h4>
                      <p className="text-gray-600">
                        Constitutional enforcement. Evaluates input/output against compiled constraints from CF. Rejects
                        or modifies outputs that violate policies.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="border-l-4 border-l-primary-500">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary-600">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Expression Layer</h4>
                      <p className="text-gray-600">
                        Governed output delivery and EDG logging. Records decision to audit trail, calculates drift score,
                        returns constrained output to application.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mt-8">Feedback Loop</h3>
              <p>
                Expression layer feeds back to Perception layer, enabling drift detection. When current behavior diverges
                from baseline by more than threshold (configurable), automatic adjudication triggers.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Technical Stack */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Technical Stack</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Backend</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Node.js 20.x + TypeScript 5.x</li>
                  <li>• Express.js (API layer)</li>
                  <li>• PostgreSQL 15 (relational data)</li>
                  <li>• Neo4j 5.x (EDG storage)</li>
                  <li>• Redis (session + cache)</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• React 18 + TypeScript</li>
                  <li>• Next.js 14 (web surface)</li>
                  <li>• Vite (demo hub)</li>
                  <li>• Tailwind CSS (styling)</li>
                  <li>• D3.js, Cytoscape (visualizations)</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Integrations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• OpenAI GPT-4</li>
                  <li>• Anthropic Claude</li>
                  <li>• Google Gemini</li>
                  <li>• Meta Llama (via Ollama)</li>
                  <li>• Extensible adapter pattern</li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Security</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Auth0 (authentication)</li>
                  <li>• JWT (session tokens)</li>
                  <li>• SHA-256 (integrity hashing)</li>
                  <li>• TLS 1.3 (transport)</li>
                  <li>• UFW + fail2ban (firewall)</li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-primary-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Experience the Architecture</h2>
            <p className="text-xl text-primary-100 mb-10">
              See constitutional AI governance in action with 60+ interactive demos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/demos" variant="secondary" size="lg">
                View Public Demos
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                Request Full Access
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
