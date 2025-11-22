import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import { Clock, Users, Target } from 'lucide-react';

interface DemoUsageSectionProps {
  whenToShow: string;
  targetAudience?: string[];
  useCases?: string[];
}

export function DemoUsageSection({
  whenToShow,
  targetAudience,
  useCases,
}: DemoUsageSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          When to Use This Demo
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card>
            <Clock className="w-8 h-8 text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Best Timing
            </h3>
            <p className="text-gray-700">{whenToShow}</p>
          </Card>

          {targetAudience && targetAudience.length > 0 && (
            <Card>
              <Users className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Target Audience
              </h3>
              <ul className="space-y-1">
                {targetAudience.map((audience, idx) => (
                  <li key={idx} className="text-sm text-gray-700">
                    • {audience}
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {useCases && useCases.length > 0 && (
            <Card>
              <Target className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Use Cases
              </h3>
              <ul className="space-y-1">
                {useCases.map((useCase, idx) => (
                  <li key={idx} className="text-sm text-gray-700">
                    • {useCase}
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>
      </Container>
    </section>
  );
}
