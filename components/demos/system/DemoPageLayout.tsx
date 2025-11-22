import { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface DemoPageLayoutProps {
  children: ReactNode;
}

export function DemoPageLayout({ children }: DemoPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
