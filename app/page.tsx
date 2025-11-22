import Link from 'next/link';
import { Shield, GitBranch, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <Container className="relative py-24 sm:py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              Ethraeon Systems
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-200 mb-4">
              Governance-first AI for accountable orchestration
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
              Building systems that can be trusted by diverse humans, cultures, and communities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/demos" variant="secondary" size="lg">
                Explore Demos
              </Button>
              <Button href="/ethos" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                Read the Ethos
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* What Ethraeon Is */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              What Ethraeon Is
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A constitutional AI framework for organizations that need governance, auditability, and human alignment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Policy Compilation</h3>
                <p className="text-gray-600">
                  Transform natural language governance rules into executable constraints that enforce behavior across any AI model
                </p>
              </div>
            </Card>

            <Card hover>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <GitBranch className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Evidential Tracing</h3>
                <p className="text-gray-600">
                  Every decision documented in immutable audit trails with cryptographic integrity for regulatory compliance
                </p>
              </div>
            </Card>

            <Card hover>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-Provider Governance</h3>
                <p className="text-gray-600">
                  Same constitutional rules enforced consistently across OpenAI, Anthropic, Google, and local models
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Why Governance-First */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why Governance-First
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI systems need accountability built into infrastructure, not added as an afterthought
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary-600 mb-4">01</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Regulatory Requirements</h3>
              <p className="text-gray-600">
                EU AI Act, HIPAA, FINRA, and other regulations mandate explainability, auditability, and human oversight.
                Governance-first systems meet these requirements by design.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary-600 mb-4">02</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Operational Trust</h3>
              <p className="text-gray-600">
                Organizations deploying AI in healthcare, finance, or legal contexts need systems that document
                every decision, detect behavioral drift, and maintain constitutional compliance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-4xl font-bold text-primary-600 mb-4">03</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Human Sovereignty</h3>
              <p className="text-gray-600">
                AI should augment human decision-making, not replace it. Constitutional frameworks ensure
                humans remain in control with clear accountability for AI-assisted outcomes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What's Live Today */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              What's Live Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working demonstrations of constitutional AI in action
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card hover>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Constitutional AI Shell</h3>
              <p className="text-gray-600 mb-6">
                Interactive command-line interface demonstrating real-time policy enforcement across multiple AI providers
                with audit trail generation
              </p>
              <Link href="/demos#constitutional-shell" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Explore demo <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Card>

            <Card hover>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Decision Insight Model (DIM)</h3>
              <p className="text-gray-600 mb-6">
                Policy conflict resolution engine showing how constitutional constraints are compiled, optimized,
                and enforced at runtime
              </p>
              <Link href="/demos#dim" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Explore demo <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Card>

            <Card hover>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Recursive Witness OS</h3>
              <p className="text-gray-600 mb-6">
                Evidential decision graph explorer with cryptographic verification, demonstrating complete audit trails
                for regulatory compliance
              </p>
              <Link href="/demos#witness-os" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Explore demo <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Card>

            <Card hover>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">P13 Predictive Grid (Luigi)</h3>
              <p className="text-gray-600 mb-6">
                Behavioral drift detection system monitoring AI model changes and triggering constitutional
                rollback when thresholds are exceeded
              </p>
              <Link href="/demos#p13-luigi" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Explore demo <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Experience Ethraeon
            </h2>
            <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
              Explore working demonstrations of constitutional AI governance or learn about our approach
              to building systems that can be trusted
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/demos" variant="secondary" size="lg">
                View Demos
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
