import { Lock, ExternalLink, CheckCircle2 } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Demos | Ethraeon Systems',
  description: 'Request access to our private demo hub showcasing 60+ interactive constitutional AI demonstrations.',
};

export default function Demos() {
  const publicDemos = [
    {
      title: 'Constitutional Bias Detection',
      description: 'Real-time bias detection across AI outputs with constitutional rule enforcement',
      features: ['Multi-model comparison', 'Rule violation highlighting', 'Audit trail generation'],
      url: '/demos/bias-detection'
    },
    {
      title: 'Policy Drift Monitor',
      description: 'Track behavioral changes across model versions and detect policy violations',
      features: ['Version comparison', 'Drift scoring', 'Automated alerting'],
      url: '/demos/drift-monitor'
    },
    {
      title: 'EDG Explorer',
      description: 'Navigate evidential decision graphs showing AI reasoning chains',
      features: ['Interactive graph visualization', 'Cryptographic verification', 'Regulatory export'],
      url: '/demos/edg-explorer'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Experience Constitutional AI
            </h1>
            <p className="text-xl text-blue-100 mb-10">
              Request access to our private demo hub with 60+ interactive demonstrations
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Request Demo Access
            </Button>
          </div>
        </Container>
      </section>

      {/* Public Demos Section */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Public Demonstrations</h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
              Explore these sample demonstrations showcasing core Ethraeon capabilities
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {publicDemos.map((demo, index) => (
              <Card key={index} hover>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{demo.title}</h3>
                <p className="text-gray-600 mb-6">{demo.description}</p>
                <ul className="space-y-2 mb-6">
                  {demo.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={demo.url}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                >
                  Launch demo <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Private Demo Hub CTA */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Private Demo Hub</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  Get exclusive access to 60+ interactive demonstrations covering healthcare,
                  finance, legal, and enterprise AI governance scenarios
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 mb-2">Constitutional Enforcement</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>" Policy compilation sandbox</li>
                      <li>" Real-time constraint testing</li>
                      <li>" Multi-model comparison</li>
                    </ul>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 mb-2">Evidential Tracing</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>" Decision graph exploration</li>
                      <li>" Cryptographic verification</li>
                      <li>" Regulatory report generation</li>
                    </ul>
                  </div>
                </div>
                <Button href="/contact" variant="primary" size="lg">
                  Request Access
                </Button>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}
