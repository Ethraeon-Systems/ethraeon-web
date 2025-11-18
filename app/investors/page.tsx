import { TrendingUp, Target, Rocket, Shield, CheckCircle2, Download } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Investors | Ethraeon Systems',
  description: 'Investment opportunity in constitutional AI governance infrastructure for the $200B+ AI compliance market.',
};

export default function Investors() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              Seed Round Open
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Invest in the Constitutional Substrate for AI
            </h1>
            <p className="text-xl text-blue-100 mb-10">
              Infrastructure-layer opportunity in the $200B+ AI governance market
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="secondary" size="lg">
                Request Investment Materials
              </Button>
              <Button href="#deck" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                Download Deck
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Market Opportunity */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Opportunity</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI governance is transitioning from optional to mandatory. Ethraeon provides the infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">$200B+</div>
              <p className="text-lg text-gray-900 font-medium mb-2">Market Size by 2030</p>
              <p className="text-sm text-gray-600">AI governance and compliance infrastructure</p>
            </Card>

            <Card className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">85%</div>
              <p className="text-lg text-gray-900 font-medium mb-2">Enterprises Need Governance</p>
              <p className="text-sm text-gray-600">Fortune 1000 deploying production AI</p>
            </Card>

            <Card className="text-center">
              <div className="text-5xl font-bold text-indigo-600 mb-2">12+</div>
              <p className="text-lg text-gray-900 font-medium mb-2">Major Regulations</p>
              <p className="text-sm text-gray-600">EU AI Act, US EO, industry mandates</p>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Ethraeon Wins</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Shield className="w-5 h-5 text-blue-600 mr-2" />
                  Infrastructure Play
                </h4>
                <p className="text-gray-700 text-sm">
                  Not a point solution. Constitutional Field is substrate-level infrastructure
                  that every AI deployment will need. Network effects and vendor lock-in
                  protection create defensible moat.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Target className="w-5 h-5 text-purple-600 mr-2" />
                  Vendor Agnostic
                </h4>
                <p className="text-gray-700 text-sm">
                  Works with any AI model (OpenAI, Anthropic, Google, Meta, open-source).
                  Captures value as AI market fragments, not as it consolidates.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Rocket className="w-5 h-5 text-indigo-600 mr-2" />
                  First-Mover Advantage
                </h4>
                <p className="text-gray-700 text-sm">
                  Only vendor-independent constitutional AI platform with production deployments.
                  3-year technical lead in policy compilation and evidential tracing.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 text-pink-600 mr-2" />
                  Revenue Model
                </h4>
                <p className="text-gray-700 text-sm">
                  Usage-based pricing tied to AI inference volume. Scales with customer success.
                  Enterprise contracts with Fortune 500 anchor customers.
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      {/* Traction */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Traction</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Product</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Constitutional Field compiler (production)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Evidential Decision Graph (beta)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">60+ demo implementations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">3 regulatory frameworks supported</span>
                  </li>
                </ul>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pipeline</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Fortune 500 pilot engagements</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Healthcare AI compliance POCs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Financial services regulatory trials</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Government agency evaluations</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Materials Section */}
      <section id="deck" className="py-20 sm:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Investment Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card hover className="text-center">
                <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Investor Deck</h3>
                <p className="text-gray-600 mb-6">
                  Complete overview of market, product, traction, and financial projections
                </p>
                <Button href="/materials/investor-deck.pdf" variant="primary">
                  Download PDF
                </Button>
              </Card>

              <Card hover className="text-center">
                <Download className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Blueprint</h3>
                <p className="text-gray-600 mb-6">
                  Deep dive into Constitutional Field, EDG, and TGF architecture
                </p>
                <Button href="/blueprint" variant="primary">
                  View Blueprint
                </Button>
              </Card>
            </div>

            <Card className="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 text-center">
              <p className="text-lg text-gray-900 mb-4">
                For full data room access and cap table details
              </p>
              <Button href="/contact" variant="primary" size="lg">
                Schedule Investor Call
              </Button>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Cap Table</h2>
            <p className="text-xl text-blue-100 mb-10">
              Invest in the infrastructure layer for constitutional AI governance
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Investment Team
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
