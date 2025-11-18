import { Building2, Heart, Scale, Shield, Palette, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Use Cases | Ethraeon Systems',
  description: 'Constitutional AI governance solutions for financial services, healthcare, legal, government, creative, and enterprise applications.',
};

export default function UseCases() {
  const industries = [
    {
      id: 'financial',
      icon: Building2,
      title: 'Financial Services',
      regulation: 'FINRA, SEC, Basel III',
      description: 'Ensure AI-driven trading, lending, and risk management systems comply with financial regulations',
      challenges: [
        'Algorithmic trading compliance',
        'Fair lending (ECOA, FCRA)',
        'Model risk management (SR 11-7)'
      ],
      solution: 'Constitutional Field compiles FINRA/SEC rules into executable constraints. EDG provides audit trails for regulatory exams.',
      outcomes: ['100% audit trail coverage', '40% faster regulatory response', 'Zero model drift incidents']
    },
    {
      id: 'healthcare',
      icon: Heart,
      title: 'Healthcare',
      regulation: 'HIPAA, FDA 21 CFR Part 11',
      description: 'Govern medical AI systems with patient safety enforcement and regulatory compliance',
      challenges: [
        'Clinical decision support safety',
        'Patient privacy (HIPAA)',
        'FDA approval documentation'
      ],
      solution: 'TGF enforces medical safety protocols in real-time. EDG generates FDA-compliant documentation automatically.',
      outcomes: ['Zero HIPAA violations', 'FDA clearance in 6 months', '99.9% uptime SLA']
    },
    {
      id: 'legal',
      icon: Scale,
      title: 'Legal',
      regulation: 'ABA Model Rules, State Bar',
      description: 'Protect attorney-client privilege and ensure ethical AI use in legal practice',
      challenges: [
        'Attorney-client privilege leakage',
        'Conflict of interest detection',
        'Unauthorized practice of law'
      ],
      solution: 'Constitutional Field enforces privilege boundaries. EDG tracks all document access with cryptographic proof.',
      outcomes: ['Zero privilege breaches', 'State Bar compliance', '85% research time saved']
    },
    {
      id: 'government',
      icon: Shield,
      title: 'Government & Defense',
      regulation: 'FISMA, FedRAMP, NIST AI RMF',
      description: 'Deploy accountable, transparent AI in public sector with security clearance enforcement',
      challenges: [
        'Transparency requirements',
        'Security clearance enforcement',
        'Bias detection in public services'
      ],
      solution: 'EDG provides full decision transparency. Constitutional Field enforces clearance-based access control.',
      outcomes: ['FedRAMP High authorized', 'Congressional testimony ready', 'Bias incidents reduced 90%']
    },
    {
      id: 'creative',
      icon: Palette,
      title: 'Creative Studios',
      regulation: 'DMCA, Copyright Act',
      description: 'Protect IP and enforce style constitutions in generative AI workflows',
      challenges: [
        'Copyright infringement risk',
        'Style consistency enforcement',
        'Authorship attribution'
      ],
      solution: 'Constitutional Field defines style boundaries. EDG traces all generative decisions for IP protection.',
      outcomes: ['Zero copyright claims', 'Style consistency 95%+', 'Attribution tracking complete']
    },
    {
      id: 'enterprise',
      icon: Briefcase,
      title: 'Enterprise AI',
      regulation: 'SOC 2, ISO 27001',
      description: 'Unify governance across multi-cloud AI deployments and vendor diversification',
      challenges: [
        'Multi-vendor governance fragmentation',
        'Shadow AI proliferation',
        'Compliance reporting burden'
      ],
      solution: 'Vendor-agnostic Constitutional Field works with any model. Centralized EDG for all AI decisions.',
      outcomes: ['Single governance pane', '60% compliance cost reduction', '100% AI visibility']
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Constitutional AI for Critical Industries
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Proven governance infrastructure for regulated sectors where compliance is non-negotiable
            </p>
          </div>
        </Container>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="space-y-20">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div key={industry.id} id={industry.id} className={index % 2 === 1 ? 'bg-gray-50 -mx-4 px-4 py-12 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 rounded-2xl' : ''}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900">{industry.title}</h2>
                          <p className="text-sm text-gray-600">{industry.regulation}</p>
                        </div>
                      </div>
                      <p className="text-lg text-gray-600 mb-6">{industry.description}</p>

                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Challenges</h3>
                      <ul className="space-y-2 mb-6">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-red-600 font-bold">"</span>
                            <span className="text-gray-700">{challenge}</span>
                          </li>
                        ))}
                      </ul>

                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Ethraeon Solution</h3>
                      <p className="text-gray-700 mb-6">{industry.solution}</p>

                      <Button href="/contact" variant="primary">
                        Discuss {industry.title} Use Case
                      </Button>
                    </div>

                    <div>
                      <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Outcomes</h3>
                        <ul className="space-y-3">
                          {industry.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">See Your Use Case in Action</h2>
            <p className="text-xl text-blue-100 mb-10">
              Schedule a custom demo tailored to your industry and regulatory requirements
            </p>
            <Button href="/contact" variant="secondary" size="lg">
              Schedule Custom Demo
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
