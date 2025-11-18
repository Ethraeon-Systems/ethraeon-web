import { Target, Users, Zap, Heart } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'About | Ethraeon Systems',
  description: 'Learn about Ethraeon Systems mission to build constitutional AI infrastructure for a human-aligned future.',
};

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Building the Constitutional Substrate for AI
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ethraeon Systems develops vendor-independent governance infrastructure
              ensuring AI systems remain aligned with human values and societal rules.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-xl text-gray-600">
                Make AI systems accountable, auditable, and constitutionally aligned
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                We believe AI's transformative potential can only be realized if systems operate
                within constitutional boundaries defined by humans. Current AI lacks governance
                infrastructurethere's no vendor-independent way to enforce policies, trace decisions,
                or prove compliance.
              </p>
              <p>
                Ethraeon provides the missing substrate: a constitutional field that compiles human
                values into executable constraints, an evidential decision graph that provides cryptographic
                provenance, and a trinity governance function that orchestrates constitutional compliance
                in real-time.
              </p>
              <p>
                Our work enables organizations to deploy AI confidently, knowing every decision is
                auditable, every policy is enforceable, and every system remains aligned with its
                constitutional mandate.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <Container>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Human Alignment</h3>
              <p className="text-gray-600">
                AI systems must serve human values, not replace human judgment
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparency</h3>
              <p className="text-gray-600">
                Every AI decision should be explainable and auditable
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Vendor Independence</h3>
              <p className="text-gray-600">
                Governance should work across any AI model or provider
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Open Standards</h3>
              <p className="text-gray-600">
                Constitutional AI should be built on open, interoperable standards
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Founder Section */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Founded by</h2>
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">S. Jason Prohaska</h3>
                <p className="text-blue-600 font-medium mb-4">Founder & Chief Architect</p>
                <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                  <p>
                    Jason brings two decades of experience in distributed systems, AI safety, and
                    constitutional design. Prior to Ethraeon, he architected governance systems for
                    Fortune 500 enterprises and contributed to open standards for AI accountability.
                  </p>
                  <p>
                    The Constitutional AI framework emerged from Jason's conviction that AI governance
                    requires infrastructurenot just principles. Ethraeon is his life's work: building
                    the substrate that makes human-aligned AI possible at scale.
                  </p>
                </div>
                <p className="text-sm text-gray-600 mt-6">
                  ingombrante© | Constitutional AI Pioneer
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-blue-100 mb-10">
              Help us build the constitutional substrate for AI governance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Get in Touch
              </Button>
              <Button href="/investors" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                Investment Opportunity
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
