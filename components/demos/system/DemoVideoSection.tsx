import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import { Play } from 'lucide-react';

interface DemoVideoSectionProps {
  title: string;
  audioUrl?: string;
  script: string;
  visualDescription: string[];
}

export function DemoVideoSection({
  title,
  audioUrl,
  script,
  visualDescription,
}: DemoVideoSectionProps) {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <Container>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Live Demo
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gray-900 p-0 overflow-hidden">
              {audioUrl ? (
                <div className="flex flex-col items-center justify-center aspect-video bg-gradient-to-br from-gray-800 to-gray-900 p-8">
                  <Play className="w-16 h-16 text-white mb-6" />
                  <audio controls className="w-full max-w-md">
                    <source src={audioUrl} type="audio/mp4" />
                    Your browser does not support the audio tag.
                  </audio>
                  <p className="text-sm text-gray-400 mt-4 text-center">
                    Audio narration • {title}
                  </p>
                </div>
              ) : (
                <div className="flex items-center justify-center aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
                  <p className="text-gray-400">Demo visualization coming soon</p>
                </div>
              )}
            </Card>

            <div className="space-y-6">
              <Card>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Demo Script
                </h3>
                <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
                  &quot;{script}&quot;
                </blockquote>
              </Card>

              <Card>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What the viewer sees
                </h3>
                <ul className="space-y-2">
                  {visualDescription.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
