import { Metadata } from 'next';
import { Activity } from 'lucide-react';
import { DemoPageLayout } from '@/components/demos/system/DemoPageLayout';
import { DemoHero } from '@/components/demos/system/DemoHero';
import { DemoVideoSection } from '@/components/demos/system/DemoVideoSection';
import { DemoFeaturesGrid } from '@/components/demos/system/DemoFeaturesGrid';
import { DemoUsageSection } from '@/components/demos/system/DemoUsageSection';
import { DemoNavigation } from '@/components/demos/system/DemoNavigation';

export const metadata: Metadata = {
  title: 'Lyra - Distributed Orchestration | ETHRAEON',
  description: 'Instant failover and load balancing for multi-AI systems. 500ms recovery time with zero downtime.',
};

export default function LyraDemoPage() {
  return (
    <DemoPageLayout>
      <DemoHero
        title="Lyra"
        tagline="Distributed Orchestration"
        duration="22 seconds"
        icon={Activity}
        iconColor="text-green-600"
        iconBg="bg-green-100"
        problemStatement="When you have 5+ AI systems running, they step on each other—duplicate work, conflicting outputs, wasted compute."
        whenToShow="3rd minute - show enterprise-grade reliability"
      />

      <DemoVideoSection
        title="Lyra"
        audioUrl="/assets/demos/audio/lyra.m4a"
        script="This is Lyra—distributed orchestration. Five AI systems running in parallel. Watch: I kill this node. Lyra detects the failure in 500 milliseconds and reroutes all traffic. No requests dropped. No downtime. That's what enterprise AI needs."
        visualDescription={[
          'Distributed task orchestration',
          'Load balancing across multiple AI providers',
          'Failover demonstration (one system goes down, Lyra reroutes instantly)',
          'Constitutional priority queue (high-stakes requests processed first)',
        ]}
      />

      <DemoFeaturesGrid
        features={[
          'Distributed task orchestration',
          'Load balancing across multiple AI providers',
          'Instant failover demonstration',
          'Constitutional priority queue',
          '500ms recovery time',
        ]}
      />

      <DemoUsageSection
        whenToShow="3rd minute of conversation"
        targetAudience={[
          'Enterprise architects',
          'DevOps teams',
          'Infrastructure engineers',
        ]}
        useCases={[
          'Enterprise reliability demos',
          'Failover demonstrations',
          'Scale and performance discussions',
        ]}
      />

      <DemoNavigation
        previousDemo={{
          label: 'Previous: Nexus',
          href: '/demos/nexus',
        }}
        nextDemo={{
          label: 'Next: Trinity',
          href: '/demos/trinity',
        }}
        subRoutes={[
          { label: 'Task Orchestration', href: '/demos/lyra/orchestration' },
          { label: 'Load Balancing', href: '/demos/lyra/load-balancing' },
          { label: 'Failover Demo', href: '/demos/lyra/failover' },
        ]}
      />
    </DemoPageLayout>
  );
}
