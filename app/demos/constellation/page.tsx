import { Metadata } from 'next';
import { Network } from 'lucide-react';
import { DemoPageLayout } from '@/components/demos/system/DemoPageLayout';
import { DemoHero } from '@/components/demos/system/DemoHero';
import { DemoVideoSection } from '@/components/demos/system/DemoVideoSection';
import { DemoFeaturesGrid } from '@/components/demos/system/DemoFeaturesGrid';
import { DemoUsageSection } from '@/components/demos/system/DemoUsageSection';
import { DemoNavigation } from '@/components/demos/system/DemoNavigation';

export const metadata: Metadata = {
  title: 'Constellation - System Overview | ETHRAEON',
  description: 'Real-time system topology and health monitoring. See all connected AI systems and their constitutional compliance status.',
};

export default function ConstellationDemoPage() {
  return (
    <DemoPageLayout>
      <DemoHero
        title="Constellation"
        tagline="System Overview - Real-Time Topology"
        duration="23 seconds"
        icon={Network}
        iconColor="text-blue-600"
        iconBg="bg-blue-100"
        problemStatement="Organizations can't see what AI systems they have running or how they connect."
        whenToShow="First 30 seconds of conversation - establishes visual credibility"
      />

      <DemoVideoSection
        title="Constellation"
        audioUrl="/assets/demos/audio/constellation.m4a"
        script="This is Constellation—ETHRAEON's system overview. You're seeing a real-time map of our AI infrastructure. Each node is a system. Green means constitutionally compliant. This topology changes live as systems connect, disconnect, or violate rules. No other AI platform shows you this."
        visualDescription={[
          'Cosmic visualization of connected systems',
          'Real-time topology map showing ETHRAEON ↔ ARCANUM ↔ KAIROS',
          'System health indicators (green = operational, amber = warning, red = alert)',
          'Constitutional compliance status overlay',
        ]}
      />

      <DemoFeaturesGrid
        features={[
          'Cosmic visualization of connected systems',
          'Real-time topology map',
          'System health indicators (green/amber/red)',
          'Constitutional compliance status overlay',
        ]}
      />

      <DemoUsageSection
        whenToShow="First 30 seconds of conversation"
        targetAudience={[
          'Technical decision-makers',
          'Enterprise architects',
          'AI governance teams',
        ]}
        useCases={[
          'Investor pitch intro',
          'Cold email video',
          'Conference presentation opener',
        ]}
      />

      <DemoNavigation
        nextDemo={{
          label: 'Next: Nexus',
          href: '/demos/nexus',
        }}
        subRoutes={[
          { label: 'Live Topology', href: '/demos/constellation/live' },
          { label: 'System Registry', href: '/demos/constellation/systems' },
          { label: 'Health Dashboard', href: '/demos/constellation/health' },
        ]}
      />
    </DemoPageLayout>
  );
}
