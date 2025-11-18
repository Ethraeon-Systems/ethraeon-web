import { Shield, Network, GitBranch, TrendingUp, Users, Globe, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Overview | Ethraeon Systems',
  description: 'Comprehensive overview of Ethraeon\'s Constitutional AI governance platform, addressing the critical challenges in cross-model AI governance.',
};

export default function Overview() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 sm:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              The Future of AI Governance
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ethraeon provides the missing infrastructure for vendor-independent AI governance,
              enabling organizations to enforce policies consistently across any AI model.
            </p>
          </div>
        </Container>
      </section>

      {/* Problem Statement */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Problem</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                Organizations deploying AI systems face a critical challenge: <strong>no cross-model governance framework exists</strong>.
                Each AI provider operates in isolation, creating three fundamental gaps:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 not-prose">
                <Card>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                      <GitBranch className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Behavioral Drift</h3>
                    <p className="text-sm text-gray-600">
                      Models change without notice. GPT-4 behaves differently in January vs July. No mechanism to detect or prevent drift.
                    </p>
                  </div>
                </Card>

                <Card>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <Network className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Vendor Lock-In</h3>
                    <p className="text-sm text-gray-600">
                      Decision history trapped in proprietary systems. Switching providers means losing all audit trails and institutional knowledge.
                    </p>
                  </div>
                </Card>

                <Card>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                      <Shield className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Policy Gap</h3>
                    <p className="text-sm text-gray-600">
                      Governance policies exist as documents, not executable code. No way to enforce constraints programmatically across providers.
                    </p>
                  </div>
                </Card>
              </div>

              <p>
                For regulated industries—financial services, healthcare, legal, government—this gap is
                <strong> not just inconvenient; it's existential</strong>. FINRA, HIPAA, EU AI Act, and other regulations
                require auditable, consistent AI behavior. Current solutions can't deliver.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Solution Overview */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Solution</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                <strong>Ethraeon is the Constitutional Field</strong>—a governance substrate that sits between
                your applications and any AI model. It provides three proprietary mechanisms:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
              <Card hover>
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Constitutional Field</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Compiles natural language policies into executable constraints. Version control for governance.
                    Rollback when needed.
                  </p>
                  <Button href="/blueprint#cf" variant="ghost" className="self-start">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </Card>

              <Card hover>
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Network className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Evidential Decision Graph</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    Vendor-independent audit trail with cryptographic integrity. Export for HIPAA, FINRA, EU AI Act compliance.
                  </p>
                  <Button href="/blueprint#edg" variant="ghost" className="self-start">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </Card>

              <Card hover>
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <GitBranch className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Trinity Governance Function</h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    3-body harmonic ensuring all outputs pass through constitutional constraints. Automatic drift detection.
                  </p>
                  <Button href="/blueprint#tgf" variant="ghost" className="self-start">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Market Opportunity</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                The AI governance market is exploding. Enterprise AI spending reached <strong>$154B in 2024</strong> and
                is projected to hit <strong>$500B by 2028</strong>. Yet governance infrastructure remains fragmented.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <Card>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">$45B</div>
                  <div className="text-sm text-gray-600">AI Governance Market by 2028</div>
                </div>
              </Card>

              <Card>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">87%</div>
                  <div className="text-sm text-gray-600">Enterprises using multiple AI providers</div>
                </div>
              </Card>

              <Card>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">92%</div>
                  <div className="text-sm text-gray-600">CIOs cite governance as top AI concern</div>
                </div>
              </Card>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6 mt-8">
              <p>
                <strong>Regulatory pressure is accelerating adoption:</strong>
              </p>
              <ul className="space-y-2">
                <li><strong>EU AI Act (2024):</strong> Mandatory risk assessments and audit trails for high-risk AI systems</li>
                <li><strong>FINRA/SEC (2023-2024):</strong> Increased scrutiny of AI-driven trading and investment advice</li>
                <li><strong>HIPAA (ongoing):</strong> Patient data protection requirements for medical AI</li>
                <li><strong>Executive Order 14110 (2023):</strong> US federal AI safety standards</li>
              </ul>
              <p>
                Ethraeon is positioned as the <strong>infrastructure layer</strong> for this emerging regulatory regime.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Ethraeon */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-primary-50 to-primary-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why Ethraeon?</h2>

            <div className="space-y-8">
              <Card>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Vendor-Agnostic by Design</h3>
                    <p className="text-gray-600">
                      Works with GPT, Claude, Gemini, Llama, and future models. One governance layer for all AI providers.
                      Switch vendors without losing audit history.
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Network className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Proprietary IP</h3>
                    <p className="text-gray-600">
                      Three patentable mechanisms (CF, EDG, TGF) provide defensible competitive moats. First-mover advantage
                      in cross-model governance.
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Built for Regulated Industries</h3>
                    <p className="text-gray-600">
                      Native support for FINRA, HIPAA, EU AI Act compliance. Export audit trails in regulatory formats.
                      Legal and technical validation built-in.
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Founder-Led Innovation</h3>
                    <p className="text-gray-600">
                      Created by S. Jason Prohaska, combining expertise in constitutional design, software architecture,
                      and AI systems. Deeply technical, philosophically grounded.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-gray-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Learn More?</h2>
            <p className="text-xl text-gray-300 mb-10">
              Explore our technical blueprint or request access to the full Demo Hub with 60+ interactive demonstrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/blueprint" variant="secondary" size="lg">
                View Technical Blueprint
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                Request Demo Access
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
