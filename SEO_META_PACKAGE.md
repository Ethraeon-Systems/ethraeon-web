# SEO_META_PACKAGE

**Generated**: 2025-01-19
**Agent**: CCT_Web_Prime
**Purpose**: Complete SEO metadata for ethraeon.ai

---

## Table of Contents

1. [Site-Wide Configuration](#site-wide-configuration)
2. [Page-Specific Metadata](#page-specific-metadata)
3. [Open Graph Images](#open-graph-images)
4. [Schema.org Markup](#schemaorg-markup)
5. [Sitemap](#sitemap)
6. [robots.txt](#robotstxt)

---

## Site-Wide Configuration

### Root Layout Metadata

**File**: `app/layout.tsx`

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://ethraeon.ai'),
  title: {
    default: 'Ethraeon Systems | Constitutional AI for Accountable Orchestration',
    template: '%s | Ethraeon Systems',
  },
  description: 'Governance-first AI framework for organizations that need constitutional controls, auditability, and human alignment. Built by ingombrante®.',
  keywords: [
    'constitutional AI',
    'AI governance',
    'accountable AI',
    'AI orchestration',
    'policy compliance',
    'AI audit trails',
    'HIPAA AI',
    'FINRA AI compliance',
    'EU AI Act',
    'explainable AI',
    'multi-provider AI',
    'Ethraeon Systems',
    'ingombrante',
  ],
  authors: [{ name: 'Ethraeon Systems', url: 'https://ethraeon.ai' }],
  creator: 'Ethraeon Systems',
  publisher: 'Ethraeon Systems',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ethraeon.ai',
    siteName: 'Ethraeon Systems',
    title: 'Ethraeon Systems | Constitutional AI for Accountable Orchestration',
    description: 'Governance-first AI framework for organizations that need constitutional controls, auditability, and human alignment.',
    images: [
      {
        url: '/assets/images/og/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Ethraeon Systems - Constitutional AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ethraeon Systems | Constitutional AI',
    description: 'Governance-first AI for accountable orchestration',
    images: ['/assets/images/og/og-default.png'],
    creator: '@ethraeon',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};
```

---

## Page-Specific Metadata

### Home Page

**File**: `app/page.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Ethraeon Systems | Constitutional AI for Accountable Orchestration',
  description: 'Building AI systems that can be trusted by diverse humans, cultures, and communities. Governance-first framework with policy compilation, evidential tracing, and cross-provider controls.',
  openGraph: {
    title: 'Ethraeon Systems | Constitutional AI',
    description: 'Building AI systems that can be trusted by diverse humans, cultures, and communities.',
    url: 'https://ethraeon.ai',
    images: [
      {
        url: '/assets/images/og/og-home.png',
        width: 1200,
        height: 630,
        alt: 'Ethraeon Systems - Governance-first AI',
      },
    ],
  },
  alternates: {
    canonical: 'https://ethraeon.ai',
  },
};
```

### Demos Index

**File**: `app/demos/page.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Demos | Ethraeon Systems',
  description: 'Explore working demonstrations of constitutional AI governance in action. Interactive demos of Constitutional AI Shell, DIM, Recursive Witness OS, and P13 Predictive Grid.',
  keywords: [
    'AI demos',
    'constitutional AI demonstrations',
    'AI policy enforcement',
    'AI audit trails demo',
    'governance AI playground',
  ],
  openGraph: {
    title: 'Working Demonstrations | Ethraeon Systems',
    description: 'Explore constitutional AI governance through interactive demos',
    url: 'https://ethraeon.ai/demos',
    images: [
      {
        url: '/assets/images/og/og-demos.png',
        width: 1200,
        height: 630,
        alt: 'Ethraeon Demonstrations',
      },
    ],
  },
  alternates: {
    canonical: 'https://ethraeon.ai/demos',
  },
};
```

### Ethos Page

**File**: `app/ethos/page.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Ethos | Ethraeon Systems',
  description: 'Our commitment to building AI systems that can be trusted by diverse humans, cultures, and communities. Pro-Love Statement and Humanitas ante Machinam principle.',
  keywords: [
    'AI ethics',
    'humanitas ante machinam',
    'pro-love statement',
    'AI accountability',
    'human sovereignty',
    'ethical AI',
  ],
  openGraph: {
    title: 'Our Ethos | Ethraeon Systems',
    description: 'Building systems that can be trusted by diverse humans, cultures, and communities',
    url: 'https://ethraeon.ai/ethos',
    images: [
      {
        url: '/assets/images/og/og-ethos.png',
        width: 1200,
        height: 630,
        alt: 'Ethraeon Ethos - Humanitas ante Machinam',
      },
    ],
  },
  alternates: {
    canonical: 'https://ethraeon.ai/ethos',
  },
};
```

### Legal Page

**File**: `app/legal/page.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Legal | Ethraeon Systems',
  description: 'Legal information, terms of service, and intellectual property notices for Ethraeon Systems and ingombrante® technologies.',
  keywords: [
    'ingombrante trademark',
    'constitutional AI IP',
    'AI framework licensing',
    'Ethraeon legal',
  ],
  openGraph: {
    title: 'Legal | Ethraeon Systems',
    description: 'Terms, policies, and intellectual property information',
    url: 'https://ethraeon.ai/legal',
  },
  alternates: {
    canonical: 'https://ethraeon.ai/legal',
  },
  robots: {
    index: true,
    follow: false, // Don't follow external links on legal page
  },
};
```

### Constitutional AI Shell Demo

**File**: `app/demos/constitutional-shell/page.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Constitutional AI Shell | Ethraeon Demos',
  description: 'Interactive command-line interface demonstrating real-time policy enforcement across multiple AI providers with cryptographic audit trail generation.',
  keywords: [
    'AI terminal',
    'multi-provider AI governance',
    'policy enforcement demo',
    'AI audit trail',
    'HIPAA AI demo',
  ],
  openGraph: {
    title: 'Constitutional AI Shell | Ethraeon Demos',
    description: 'Multi-provider AI governance in real-time',
    url: 'https://ethraeon.ai/demos/constitutional-shell',
    images: [
      {
        url: '/assets/images/demos/shell-preview.png',
        width: 1200,
        height: 630,
        alt: 'Constitutional AI Shell Demo',
      },
    ],
  },
  alternates: {
    canonical: 'https://ethraeon.ai/demos/constitutional-shell',
  },
};
```

### DIM Demo

**File**: `app/demos/dim/page.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Decision Insight Model (DIM) | Ethraeon Demos',
  description: 'Policy conflict resolution engine demonstrating how constitutional constraints are compiled, optimized, and enforced at runtime.',
  keywords: [
    'policy conflict resolution',
    'constraint optimization',
    'AI policy compiler',
    'decision insight model',
  ],
  openGraph: {
    title: 'Decision Insight Model | Ethraeon Demos',
    description: 'Policy conflict resolution and constraint optimization',
    url: 'https://ethraeon.ai/demos/dim',
    images: [
      {
        url: '/assets/images/demos/dim-preview.png',
        width: 1200,
        height: 630,
        alt: 'DIM Demo',
      },
    ],
  },
  alternates: {
    canonical: 'https://ethraeon.ai/demos/dim',
  },
};
```

### Witness OS Demo

**File**: `app/demos/witness/page.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Recursive Witness OS | Ethraeon Demos',
  description: 'Evidential decision graph explorer with cryptographic verification, demonstrating complete audit trails for regulatory compliance.',
  keywords: [
    'evidential decision graphs',
    'EDG',
    'cryptographic verification',
    'AI audit compliance',
    'regulatory AI trails',
    'HIPAA audit trail',
    'FINRA compliance',
  ],
  openGraph: {
    title: 'Recursive Witness OS | Ethraeon Demos',
    description: 'Cryptographic audit trails for AI accountability',
    url: 'https://ethraeon.ai/demos/witness',
    images: [
      {
        url: '/assets/images/demos/witness-preview.png',
        width: 1200,
        height: 630,
        alt: 'Witness OS Demo',
      },
    ],
  },
  alternates: {
    canonical: 'https://ethraeon.ai/demos/witness',
  },
};
```

### P13 Demo

**File**: `app/demos/p13/page.tsx`

```typescript
export const metadata: Metadata = {
  title: 'P13 Predictive Grid (Luigi) | Ethraeon Demos',
  description: 'Behavioral drift detection system monitoring AI model changes and triggering constitutional rollback when thresholds are exceeded.',
  keywords: [
    'AI drift detection',
    'model behavioral monitoring',
    'constitutional rollback',
    'P13 predictive grid',
    'Luigi AI monitoring',
  ],
  openGraph: {
    title: 'P13 Predictive Grid | Ethraeon Demos',
    description: 'Behavioral drift detection and constitutional rollback',
    url: 'https://ethraeon.ai/demos/p13',
    images: [
      {
        url: '/assets/images/demos/p13-preview.png',
        width: 1200,
        height: 630,
        alt: 'P13 Predictive Grid Demo',
      },
    ],
  },
  alternates: {
    canonical: 'https://ethraeon.ai/demos/p13',
  },
};
```

---

## Open Graph Images

### Image Specifications

**Dimensions**: 1200px × 630px (Facebook/Twitter recommended)
**Format**: PNG or JPEG
**File Size**: < 1MB
**Color Mode**: RGB

### Required Images

```
public/assets/images/og/
├── og-default.png          # Default OG image (1200×630)
├── og-home.png            # Home page specific
├── og-demos.png           # Demos index
├── og-ethos.png           # Ethos page
└── demos/
    ├── shell-preview.png  # Constitutional Shell
    ├── dim-preview.png    # DIM
    ├── witness-preview.png # Witness OS
    └── p13-preview.png    # P13
```

### Image Design Guidelines

**Template Structure**:
```
┌─────────────────────────────────────────────┐
│  [ETHRAEON Logo]                            │
│                                             │
│         [Main Heading]                      │
│         [Tagline/Description]               │
│                                             │
│         [Visual Element/Screenshot]         │
│                                             │
│  Humanitas ante Machinam                    │
│  ethraeon.ai                                │
└─────────────────────────────────────────────┘
```

**Color Palette** (from brand):
- Primary: #1e5288 (blue-600)
- Secondary: #7c3aed (purple-600)
- Background: #0a0a14 (primary-950) or white
- Accent: #e94560 (accent-500)

---

## Schema.org Markup

### Organization Schema

**File**: `app/layout.tsx` (add to head)

```typescript
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ethraeon Systems',
  alternateName: 'ingombrante',
  url: 'https://ethraeon.ai',
  logo: 'https://ethraeon.ai/assets/icons/logo/ethraeon-logo.svg',
  description: 'Constitutional AI framework for governance-first, accountable orchestration',
  foundingDate: '2024',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  sameAs: [
    // Add social media URLs when available
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'General Inquiries',
      email: 'hello@ethraeon.systems',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'Legal',
      email: 'legal@ethraeon.systems',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'Ethics',
      email: 'ethics@ethraeon.systems',
    },
  ],
};

// Add to layout
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
/>
```

### Software Application Schema (Demos)

**File**: `app/demos/page.tsx`

```typescript
const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ethraeon Constitutional AI Framework',
  applicationCategory: 'DeveloperApplication',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  operatingSystem: 'Cross-platform',
  description: 'Constitutional AI framework with policy enforcement, audit trails, and multi-provider governance',
  featureList: [
    'Policy Compilation',
    'Evidential Tracing',
    'Cross-Provider Governance',
    'Cryptographic Audit Trails',
    'Behavioral Drift Detection',
  ],
  screenshot: 'https://ethraeon.ai/assets/images/demos/shell-preview.png',
  creator: {
    '@type': 'Organization',
    name: 'Ethraeon Systems',
  },
};
```

### WebPage Schema (Generic Pages)

```typescript
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Page Title',
  description: 'Page description',
  url: 'https://ethraeon.ai/page-url',
  inLanguage: 'en-US',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Ethraeon Systems',
    url: 'https://ethraeon.ai',
  },
  about: {
    '@type': 'Thing',
    name: 'Constitutional AI',
    description: 'AI governance framework',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://ethraeon.ai',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Page Name',
        item: 'https://ethraeon.ai/page-url',
      },
    ],
  },
};
```

---

## Sitemap

### sitemap.xml

**File**: `app/sitemap.ts`

```typescript
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ethraeon.ai';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/demos`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ethos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Demo pages
    {
      url: `${baseUrl}/demos/constitutional-shell`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/demos/constitutional-shell/sandbox`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/demos/constitutional-shell/policy`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/demos/constitutional-shell/audit`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/demos/dim`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/demos/witness`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/demos/p13`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
```

---

## robots.txt

**File**: `app/robots.ts`

```typescript
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/_next/',
        ],
      },
    ],
    sitemap: 'https://ethraeon.ai/sitemap.xml',
  };
}
```

---

## Implementation Checklist

### Phase 1: Core Metadata
- [ ] Update `app/layout.tsx` with site-wide metadata
- [ ] Add Organization schema to layout
- [ ] Create `app/sitemap.ts`
- [ ] Create `app/robots.ts`

### Phase 2: Page Metadata
- [ ] Add metadata to home page
- [ ] Add metadata to demos index
- [ ] Add metadata to ethos page
- [ ] Add metadata to legal page

### Phase 3: Demo Metadata
- [ ] Add metadata to Constitutional Shell pages
- [ ] Add metadata to DIM pages
- [ ] Add metadata to Witness OS pages
- [ ] Add metadata to P13 pages

### Phase 4: Open Graph Images
- [ ] Design OG image template
- [ ] Create og-default.png
- [ ] Create og-home.png
- [ ] Create og-demos.png
- [ ] Create og-ethos.png
- [ ] Create demo preview images (4 images)

### Phase 5: Schema Markup
- [ ] Add Organization schema to layout
- [ ] Add SoftwareApplication schema to demos
- [ ] Add WebPage schema to content pages
- [ ] Add BreadcrumbList schema where appropriate

### Phase 6: Verification
- [ ] Test all metadata with [metatags.io](https://metatags.io)
- [ ] Validate OpenGraph with Facebook Debugger
- [ ] Test Twitter Cards with Twitter Validator
- [ ] Validate Schema.org markup with Google Rich Results Test
- [ ] Check sitemap accessibility
- [ ] Verify robots.txt is working

---

**Generated by**: CCT_Web_Prime
**Status**: Ready for implementation
**Priority**: Implement after Tier 4 (first demo complete)
