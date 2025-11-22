import { Metadata } from 'next';
import { Shield } from 'lucide-react';
import { DemoPageLayout } from '@/components/demos/system/DemoPageLayout';
import { DemoHero } from '@/components/demos/system/DemoHero';
import { DemoVideoSection } from '@/components/demos/system/DemoVideoSection';
import { DemoFeaturesGrid } from '@/components/demos/system/DemoFeaturesGrid';
import { DemoUsageSection } from '@/components/demos/system/DemoUsageSection';
import { DemoNavigation } from '@/components/demos/system/DemoNavigation';

export const metadata: Metadata = {
  title: 'Trinity - Harmonic Validation | ETHRAEON',
  description: 'Three-AI consensus voting with cryptographic audit trails. 2-of-3 agreement for high-stakes decisions.',
};

export default function TrinityDemoPage() {
  return (
    <DemoPageLayout>
      <DemoHero
        title="Trinity"
        tagline="Harmonic Validation"
        duration="18 seconds"
        icon={Shield}
        iconColor="text-orange-600"
        iconBg="bg-orange-100"
        problemStatement="AI makes mistakes. One AI says 'yes,' another says 'no.' Who's right?"
        whenToShow="4th minute or closing - the 'wow, this is serious' moment"
      />

      <DemoVideoSection
        title="Trinity"
        audioUrl="/assets/demos/audio/trinity.m4a"
        script="This is Trinity—harmonic validation. Three AI systems evaluate the same request independently. If 2-of-3 agree, we proceed. If not, we escalate to human review. Every decision is cryptographically logged. You can audit any AI output, forever."
        visualDescription={[
          'Three AI systems validating the same request',
          'Consensus voting mechanism (2-of-3 agreement required)',
          'Constitutional proof generation (Merkle tree hash)',
          'Audit trail with cryptographic verification',
        ]}
      />

      <DemoFeaturesGrid
        features={[
          'Three AI systems validating the same request',
          'Consensus voting mechanism (2-of-3)',
          'Constitutional proof generation (Merkle tree)',
          'Audit trail with cryptographic verification',
        ]}
      />

      <DemoUsageSection
        whenToShow="4th minute or closing"
        targetAudience={[
          'Compliance officers',
          'Risk management teams',
          'Executive decision-makers',
        ]}
        useCases={[
          'Compliance demonstrations',
          'Audit trail explanations',
          'High-stakes decision validation',
        ]}
      />

      <DemoNavigation
        previousDemo={{
          label: 'Previous: Lyra',
          href: '/demos/lyra',
        }}
        subRoutes={[
          { label: 'Consensus Voting', href: '/demos/trinity/consensus' },
          { label: 'Validation Process', href: '/demos/trinity/validation' },
          { label: 'Audit Trail', href: '/demos/trinity/audit' },
        ]}
      />
    </DemoPageLayout>
  );
}
