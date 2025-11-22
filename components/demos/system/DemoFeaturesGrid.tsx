import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import { CheckCircle2 } from 'lucide-react';

interface Feature {
  title: string;
  description?: string;
}

interface DemoFeaturesGridProps {
  features: (string | Feature)[];
}

export function DemoFeaturesGrid({ features }: DemoFeaturesGridProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Key Features
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, idx) => {
            const featureText = typeof feature === 'string' ? feature : feature.title;
            const featureDesc = typeof feature === 'object' ? feature.description : null;

            return (
              <Card key={idx} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">{featureText}</p>
                  {featureDesc && (
                    <p className="text-sm text-gray-600 mt-1">{featureDesc}</p>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
