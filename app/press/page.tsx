import { Newspaper, Download, Mail, ExternalLink } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Press | Ethraeon Systems',
  description: 'Press releases, media kit, and press contact for Ethraeon Systems constitutional AI platform.',
};

export default function Press() {
  const pressReleases = [
    {
      date: '2025-11-18',
      title: 'Ethraeon Systems Launches Constitutional AI Governance Platform',
      excerpt: 'First vendor-independent substrate for AI policy enforcement and evidential decision tracing goes live with Fortune 500 pilot deployments.',
      url: '/press/launch-announcement'
    },
    {
      date: '2025-10-15',
      title: 'Constitutional Field Achieves HIPAA Compliance Certification',
      excerpt: 'Healthcare AI governance framework receives certification for patient data protection and medical decision auditability.',
      url: '/press/hipaa-certification'
    },
    {
      date: '2025-09-22',
      title: 'Ethraeon Partners with Major Financial Institution for AI Compliance',
      excerpt: 'Leading bank deploys Constitutional Field for FINRA and SEC compliance across trading algorithms and lending AI systems.',
      url: '/press/financial-partnership'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <Newspaper className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Press & Media
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Latest news, press releases, and media resources for Ethraeon Systems
            </p>
          </div>
        </Container>
      </section>

      {/* Press Releases */}
      <section className="py-20 sm:py-24">
        <Container>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Press Releases</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {pressReleases.map((release, index) => (
              <Card key={index} hover>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="text-sm text-gray-600 mb-2">
                      {new Date(release.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{release.title}</h3>
                    <p className="text-gray-700 mb-4">{release.excerpt}</p>
                    <a
                      href={release.url}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                    >
                      Read full release <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Media Kit */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Media Kit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="text-center">
                <Download className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Brand Assets</h3>
                <p className="text-gray-600 mb-6">
                  Logos, color palette, typography guidelines, and brand usage policies
                </p>
                <Button href="/media/brand-assets.zip" variant="primary">
                  Download Assets
                </Button>
              </Card>

              <Card className="text-center">
                <Download className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Company Fact Sheet</h3>
                <p className="text-gray-600 mb-6">
                  Company overview, key facts, executive bios, and boilerplate text
                </p>
                <Button href="/media/fact-sheet.pdf" variant="primary">
                  Download PDF
                </Button>
              </Card>

              <Card className="text-center">
                <Download className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Product Screenshots</h3>
                <p className="text-gray-600 mb-6">
                  High-resolution product screenshots and demo interface captures
                </p>
                <Button href="/media/screenshots.zip" variant="primary">
                  Download Images
                </Button>
              </Card>

              <Card className="text-center">
                <Download className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Whitepaper</h3>
                <p className="text-gray-600 mb-6">
                  In-depth technical documentation of Constitutional AI architecture
                </p>
                <Button href="/blueprint" variant="primary">
                  View Blueprint
                </Button>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Press Contact */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 text-center">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Press Inquiries</h2>
              <p className="text-lg text-gray-700 mb-8">
                For media inquiries, interview requests, or press coverage opportunities
              </p>
              <div className="space-y-3 text-gray-700 mb-8">
                <p>
                  <strong>Press Contact:</strong> S. Jason Prohaska
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:press@ethraeon.com" className="text-blue-600 hover:text-blue-700">
                    press@ethraeon.com
                  </a>
                </p>
                <p>
                  <strong>Response Time:</strong> Within 24 hours
                </p>
              </div>
              <Button href="/contact" variant="primary" size="lg">
                Submit Press Inquiry
              </Button>
            </Card>
          </div>
        </Container>
      </section>

      {/* Boilerplate */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Ethraeon Systems</h2>
            <Card>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ethraeon Systems develops constitutional AI governance infrastructure that ensures artificial
                intelligence systems remain aligned with human values and societal rules. The company's platform
                provides vendor-independent policy enforcement, evidential decision tracing, and real-time
                constitutional compliance across any AI model.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ethraeon's Constitutional Field compiles natural language policies into executable constraints,
                while the Evidential Decision Graph provides cryptographic provenance for regulatory compliance.
                The Trinity Governance Function orchestrates constitutional checks in real-time, ensuring AI
                outputs pass through predefined ethical and legal boundaries.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Founded by S. Jason Prohaska, Ethraeon serves regulated industries including healthcare,
                financial services, legal, government, and enterprise AI deployments. The platform supports
                HIPAA, FINRA, SEC, FDA, and EU AI Act compliance requirements.
              </p>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}
