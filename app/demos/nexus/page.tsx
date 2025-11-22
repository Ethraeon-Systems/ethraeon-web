import { Metadata } from 'next';
import { Zap } from 'lucide-react';
import { DemoPageLayout } from '@/components/demos/system/DemoPageLayout';
import { DemoHero } from '@/components/demos/system/DemoHero';
import { DemoVideoSection } from '@/components/demos/system/DemoVideoSection';
import { DemoFeaturesGrid } from '@/components/demos/system/DemoFeaturesGrid';
import { DemoUsageSection } from '@/components/demos/system/DemoUsageSection';
import { DemoNavigation } from '@/components/demos/system/DemoNavigation';

export const metadata: Metadata = {
  title: 'Nexus - Cross-System Bridge | ETHRAEON',
  description: 'Constitutional enforcement layer for AI-to-AI communication. Sub-50ms latency with complete rule checking.',
};

export default function NexusDemoPage() {
  return (
    <DemoPageLayout>
      <DemoHero
        title="Nexus"
        tagline="Cross-System Bridge"
        duration="20 seconds"
        icon={Zap}
        iconColor="text-purple-600"
        iconBg="bg-purple-100"
        problemStatement="Different AI systems (ChatGPT, Claude, Ollama) can't talk to each other without custom code."
        whenToShow="2nd minute - after understanding what you're building"
      />

      <DemoVideoSection
        title="Nexus"
        audioUrl="/assets/demos/audio/nexus.m4a"
        script="This is Nexus—our cross-system bridge. Watch: ARCANUM sends a signal to KAIROS. Nexus intercepts it, checks constitutional rules, and either allows or blocks the exchange. This happens in under 50 milliseconds. That's faster than a human blink."
        visualDescription={[
          'REST/gRPC/WebSocket API endpoints',
          'Live packet exchange between ARCANUM and KAIROS',
          'Constitutional enforcement layer intercepting requests',
          'mTLS security visualization',
        ]}
      />

      <DemoFeaturesGrid
        features={[
          'REST/gRPC/WebSocket API endpoints',
          'Live packet exchange visualization',
          'Constitutional enforcement layer',
          'mTLS security visualization',
          'Sub-50ms latency metrics',
        ]}
      />

      <DemoUsageSection
        whenToShow="2nd minute of conversation"
        targetAudience={[
          'Technical architects',
          'Security teams',
          'Integration engineers',
        ]}
        useCases={[
          'Technical deep-dives',
          'Partner technical evaluation',
          'API demonstration',
        ]}
      />

      <DemoNavigation
        previousDemo={{
          label: 'Previous: Constellation',
          href: '/demos/constellation',
        }}
        nextDemo={{
          label: 'Next: Lyra',
          href: '/demos/lyra',
        }}
        subRoutes={[
          { label: 'API Bridge', href: '/demos/nexus/api-bridge' },
          { label: 'Security Layer', href: '/demos/nexus/security' },
          { label: 'Performance Metrics', href: '/demos/nexus/performance' },
        ]}
      />
    </DemoPageLayout>
  );
}
