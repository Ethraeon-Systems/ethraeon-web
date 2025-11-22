import Container from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { LucideIcon } from 'lucide-react';

interface DemoHeroProps {
  title: string;
  tagline: string;
  duration: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  problemStatement: string;
  whenToShow?: string;
}

export function DemoHero({
  title,
  tagline,
  duration,
  icon: Icon,
  iconColor,
  iconBg,
  problemStatement,
  whenToShow,
}: DemoHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 sm:py-24">
      <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }}></div>

      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`w-20 h-20 ${iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
            <Icon className={`w-10 h-10 ${iconColor}`} />
          </div>

          <Badge variant="outline" className="mb-4 text-blue-400 border-blue-400">
            System Infrastructure Demo • {duration}
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>

          <p className="text-2xl text-gray-300 mb-8">
            {tagline}
          </p>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <p className="text-sm font-medium text-blue-300 mb-2">
              Problem
            </p>
            <p className="text-lg text-gray-200">
              {problemStatement}
            </p>
          </div>

          {whenToShow && (
            <div className="mt-6">
              <p className="text-sm text-gray-400">
                <span className="font-medium text-gray-300">Best timing:</span> {whenToShow}
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
