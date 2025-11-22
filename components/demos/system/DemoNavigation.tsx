import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

interface DemoNavigationProps {
  previousDemo?: NavLink;
  nextDemo?: NavLink;
  subRoutes?: NavLink[];
}

export function DemoNavigation({
  previousDemo,
  nextDemo,
  subRoutes,
}: DemoNavigationProps) {
  return (
    <section className="py-16 sm:py-20 border-t border-gray-200">
      <Container>
        {subRoutes && subRoutes.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Explore More
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {subRoutes.map((route, idx) => (
                <Link key={idx} href={route.href}>
                  <Button variant="outline">
                    {route.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between items-center max-w-4xl mx-auto">
          {previousDemo ? (
            <Link href={previousDemo.href}>
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>{previousDemo.label}</span>
              </Button>
            </Link>
          ) : (
            <div></div>
          )}

          {nextDemo ? (
            <Link href={nextDemo.href}>
              <Button variant="primary" className="flex items-center space-x-2">
                <span>{nextDemo.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </Container>
    </section>
  );
}
