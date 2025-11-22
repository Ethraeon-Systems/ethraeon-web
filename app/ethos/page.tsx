import Link from 'next/link';
import { Heart, Shield, Users, Mail } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Ethos | Ethraeon Systems',
  description: 'Our commitment to building AI systems that can be trusted by diverse humans, cultures, and communities.',
};

export default function Ethos() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Heart className="w-8 h-8" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Our Ethos
            </h1>
            <p className="text-xl text-blue-100">
              Building systems that can be trusted by diverse humans, cultures, and communities
            </p>
          </div>
        </Container>
      </section>

      {/* Who We Are */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-xl text-gray-600">
                Ethraeon Systems, trading as <span className="font-semibold">ingombrante®</span>, builds constitutional AI frameworks
                that prioritize human sovereignty, transparency, and accountable governance.
              </p>
            </div>

            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 mb-12">
              <div className="text-center py-8">
                <p className="text-3xl font-bold text-gray-900 mb-4">
                  Humanitas ante Machinam
                </p>
                <p className="text-xl text-gray-600">
                  Humanity before the Machine
                </p>
              </div>
            </Card>

            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                This principle guides everything we build. AI systems should serve human needs,
                respect human dignity, and remain subordinate to human judgment. Constitutional
                governance ensures this relationship is encoded in infrastructure, not left to
                individual models or providers.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Pro-Love Statement */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Pro-Love Statement</h2>

            <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                ETHRAEON exists to build systems that can be trusted by diverse humans, cultures, and communities.
                This is an act of love on behalf of humanity first.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">×</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700">Hate speech</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">×</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700">Dehumanisation</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold">×</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700">Incitement to violence</p>
                </div>
              </div>
            </div>

            <Card className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">We will not knowingly</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Design systems whose primary purpose is to target or harm protected groups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Provide tooling for campaigns of harassment or organised malice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span>Work with clients or projects that are fundamentally incompatible with this stance</span>
                </li>
              </ul>
            </Card>

            <Card className="bg-blue-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Where borderline cases arise</h3>
              <p className="text-gray-600 mb-4">We will evaluate them through:</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Shield className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Our constitutional frameworks</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Our cultural harmonisation stack</span>
                </li>
                <li className="flex items-start">
                  <Heart className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>And, where needed, external ethical consultation</span>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* Related Commitments */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Related Commitments</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card hover className="text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Framework</h3>
                <p className="text-gray-600 mb-4">
                  Our approach to intellectual property, licensing, and regulatory compliance
                </p>
                <Link href="/legal" className="text-primary-600 font-medium hover:text-primary-700">
                  View Legal →
                </Link>
              </Card>

              <Card hover className="text-center">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
                <p className="text-gray-600 mb-4">
                  Environmental and social responsibility in AI development
                </p>
                <Link href="/sustainability" className="text-primary-600 font-medium hover:text-primary-700">
                  Learn More →
                </Link>
              </Card>

              <Card hover className="text-center">
                <Mail className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Speak Up</h3>
                <p className="text-gray-600 mb-4">
                  Questions or concerns about this statement or our practices
                </p>
                <Link href="/speak-up" className="text-primary-600 font-medium hover:text-primary-700">
                  Contact Ethics →
                </Link>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Mail className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Questions or Concerns?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We welcome dialogue about our ethical commitments and governance practices
            </p>
            <a
              href="mailto:ethics@ethraeon.systems"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              ethics@ethraeon.systems
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
