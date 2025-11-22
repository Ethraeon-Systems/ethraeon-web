import Link from 'next/link';
import { Scale, Shield, FileText, Mail } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Legal | Ethraeon Systems',
  description: 'Legal information, terms of service, and intellectual property notices for Ethraeon Systems.',
};

export default function Legal() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Scale className="w-8 h-8" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Legal
            </h1>
            <p className="text-xl text-blue-100">
              Terms, policies, and intellectual property information
            </p>
          </div>
        </Container>
      </section>

      {/* Entity Information */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="text-center py-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ethraeon Systems
                </h2>
                <p className="text-xl text-gray-600 mb-2">
                  Trading as <span className="font-semibold">ingombrante®</span>
                </p>
                <p className="text-gray-600">
                  Constitutional AI Technology
                </p>
              </div>
            </Card>

            <div className="prose prose-lg mx-auto text-gray-600 mb-12">
              <p>
                This page provides legal information regarding the use of Ethraeon Systems'
                technologies, services, and intellectual property. By accessing our website
                or using our services, you acknowledge these terms.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Legal Sections */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Intellectual Property */}
            <Card>
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Intellectual Property</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  <strong>ingombrante®</strong> is a registered trademark of Ethraeon Systems.
                </p>
                <p>
                  All constitutional AI frameworks, architectural designs, implementation methodologies,
                  and related documentation are proprietary to Ethraeon Systems unless explicitly
                  stated otherwise.
                </p>
                <p>
                  The following technologies and frameworks are proprietary intellectual property:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Constitutional Framework (CF) architecture</li>
                  <li>Evidential Decision Graphs (EDG)</li>
                  <li>TRINITY orchestration system</li>
                  <li>CIPHER memory architecture</li>
                  <li>Decision Insight Model (DIM)</li>
                  <li>Recursive Witness OS</li>
                  <li>P13 Predictive Grid</li>
                  <li>Tracelet format and implementation</li>
                </ul>
              </div>
            </Card>

            {/* Terms of Service */}
            <Card>
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Terms of Service</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-600">
                <h3 className="text-xl font-semibold text-gray-900">Website Access</h3>
                <p>
                  This website is provided for informational purposes regarding Ethraeon Systems'
                  technologies and services. Access to demonstration materials does not constitute
                  a license to use or implement the underlying technologies.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6">Service Agreements</h3>
                <p>
                  Use of Ethraeon Systems' technologies and services requires a separate written
                  agreement. Contact us for licensing and partnership inquiries.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6">Prohibited Uses</h3>
                <p>
                  Consistent with our <Link href="/ethos" className="text-primary-600 hover:text-primary-700">Pro-Love Statement</Link>,
                  we do not license our technologies for purposes that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Target or harm protected groups</li>
                  <li>Enable campaigns of harassment or organized malice</li>
                  <li>Facilitate hate speech, dehumanization, or incitement to violence</li>
                  <li>Undermine human dignity or sovereignty</li>
                </ul>
              </div>
            </Card>

            {/* Privacy */}
            <Card>
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Privacy</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  This website does not collect personal data beyond standard web server logs
                  (IP addresses, user agents, timestamps) required for security and operational purposes.
                </p>
                <p>
                  We do not use tracking cookies, analytics services, or third-party data collection tools.
                </p>
                <p>
                  For questions about data handling in our services, contact{' '}
                  <a href="mailto:legal@ethraeon.systems" className="text-primary-600 hover:text-primary-700">
                    legal@ethraeon.systems
                  </a>
                </p>
              </div>
            </Card>

            {/* Disclaimer */}
            <Card>
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Disclaimer</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  The information on this website is provided "as is" without warranties of any kind.
                  Ethraeon Systems makes no representations regarding the completeness, accuracy,
                  or suitability of any information presented.
                </p>
                <p>
                  Demonstrations and technical examples are for illustrative purposes only and
                  do not constitute production-ready implementations or guarantees of specific
                  performance characteristics.
                </p>
              </div>
            </Card>

            {/* Regulatory Compliance */}
            <Card>
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Scale className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Regulatory Compliance</h2>
                </div>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>
                  Ethraeon Systems' constitutional AI frameworks are designed to support compliance
                  with various regulatory requirements, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>HIPAA (Health Insurance Portability and Accountability Act)</li>
                  <li>FINRA (Financial Industry Regulatory Authority) requirements</li>
                  <li>EU AI Act provisions</li>
                  <li>GDPR (General Data Protection Regulation) principles</li>
                </ul>
                <p>
                  Specific compliance implementations depend on deployment context and require
                  appropriate configuration and operational procedures.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Mail className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Legal Inquiries
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              For licensing, partnership, or legal questions
            </p>
            <a
              href="mailto:legal@ethraeon.systems"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              legal@ethraeon.systems
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
