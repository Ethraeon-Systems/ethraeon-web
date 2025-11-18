import Link from 'next/link';
import { Shield, Network, GitBranch, Building2, Heart, Scale, Palette, Lock, ArrowRight } from 'lucide-react';
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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              The Constitutional Field for AI Governance
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Enforce human-defined policies across any AI model. Vendor-agnostic. Auditable. Portable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Request Demo Access
              </Button>
              <Button href="/blueprint" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                Read the Blueprint
              </Button>
            </div>
            <div className="mt-12 text-sm text-gray-400">
              Trusted by leading investors in AI governance and enterprise AI
            </div>
          </div>
        </Container>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              AI Systems Lack Cross-Model Governance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Current AI systems operate in isolation, creating critical gaps in governance and accountability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <GitBranch className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">No Consistency</h3>
                <p className="text-gray-600">
                  Model behavior changes without notice. No cross-provider governance framework exists.
                </p>
              </div>
            </Card>

            <Card hover>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Network className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">No Provenance</h3>
                <p className="text-gray-600">
                  No vendor-independent audit trail. Decision history locked in proprietary systems.
                </p>
              </div>
            </Card>

            <Card hover>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Lock className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">No Enforcement</h3>
                <p className="text-gray-600">
                  Policies exist but aren't executable. No mechanism to constrain AI behavior consistently.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Solution Section */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Ethraeon: The Constitutional Field
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A governance substrate that compiles policies into executable constraints across any AI model
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Constitutional Field */}
            <div className="flex flex-col">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Constitutional Field (CF)</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Policy compilation engine that transforms natural language governance rules into executable
                constraints. Supports versioning, conflict resolution, and rollback.
              </p>
              <Link href="/blueprint#cf" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Evidential Decision Graph */}
            <div className="flex flex-col">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Network className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Evidential Decision Graph (EDG)</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                Vendor-independent decision trace with cryptographic integrity. Enables cross-model comparison,
                drift detection, and regulatory export (HIPAA, FINRA, EU AI Act).
              </p>
              <Link href="/blueprint#edg" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Trinity Governance Function */}
            <div className="flex flex-col">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <GitBranch className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trinity Governance Function (TGF)</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                3-body harmonic orchestration ensuring all AI outputs pass through constitutional constraints.
                Provides perception, constraint, and expression layers with feedback loop.
              </p>
              <Link href="/blueprint#tgf" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Built for Critical Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ethraeon provides governance infrastructure for industries where AI compliance is non-negotiable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Financial Services */}
            <Card hover>
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Financial Services</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  FINRA and SEC compliance for trading algorithms, investment advice AI, and risk management systems.
                </p>
                <Link href="/use-cases#financial" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                  View case study <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </Card>

            {/* Healthcare */}
            <Card hover>
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  HIPAA compliance, patient safety enforcement, and FDA approval support for medical AI diagnostics.
                </p>
                <Link href="/use-cases#healthcare" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                  View case study <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </Card>

            {/* Legal */}
            <Card hover>
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Attorney-client privilege protection, case law consistency, and litigation support AI governance.
                </p>
                <Link href="/use-cases#legal" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                  View case study <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </Card>

            {/* Government */}
            <Card hover>
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Government & Defense</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Transparency, accountability, security clearance enforcement for public sector AI deployments.
                </p>
                <Link href="/use-cases#government" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                  View case study <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </Card>

            {/* Creative Studios */}
            <Card hover>
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Creative Studios</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  IP protection, authorship tracing, and style constitution enforcement for generative AI tools.
                </p>
                <Link href="/use-cases#creative" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                  View case study <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </Card>

            {/* Enterprise */}
            <Card hover>
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-gray-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise AI</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Multi-cloud AI deployments, vendor diversification, and enterprise-wide governance frameworks.
                </p>
                <Link href="/use-cases#enterprise" className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center">
                  View case study <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
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
              Request access to our private Demo Hub with 60+ interactive demonstrations showcasing
              constitutional AI governance in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Request Demo Access
              </Button>
              <Button href="/overview" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
