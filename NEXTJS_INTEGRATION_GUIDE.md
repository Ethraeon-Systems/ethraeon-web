# NEXTJS_INTEGRATION_GUIDE

**Generated**: 2025-01-19
**Agent**: CCT_Web_Prime
**Purpose**: Step-by-step guide for integrating demo code into ethraeon-web

---

## Table of Contents

1. [Project Structure Overview](#project-structure-overview)
2. [Adding a New Demo Route](#adding-a-new-demo-route)
3. [Creating Demo Components](#creating-demo-components)
4. [Setting Up API Routes](#setting-up-api-routes)
5. [Integration Checklist](#integration-checklist)
6. [Common Patterns](#common-patterns)
7. [Troubleshooting](#troubleshooting)

---

## Project Structure Overview

```
ethraeon-web/
├── app/                    # Next.js App Router
│   ├── demos/             # All demo routes go here
│   │   ├── page.tsx       # Demos index (exists)
│   │   └── [demo-name]/   # Individual demo directory
│   └── api/               # API routes
│       └── demos/         # Demo API endpoints
├── components/
│   ├── demos/             # Demo-specific components
│   ├── ui/                # Shared UI components
│   └── shared/            # Shared feature components
└── lib/
    ├── api/               # API client code
    ├── constants/         # Configuration (routes, demo-config)
    ├── types/             # TypeScript definitions
    └── utils/             # Utility functions
```

---

## Adding a New Demo Route

### Step 1: Create Route Directory

**Example**: Adding Constitutional AI Shell demo

```bash
# Navigate to demos directory
cd app/demos

# Create demo directory structure
mkdir -p constitutional-shell/{sandbox,policy,audit}
```

### Step 2: Create Main Demo Page

**File**: `app/demos/constitutional-shell/page.tsx`

```typescript
import Link from 'next/link';
import { Terminal } from 'lucide-react';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import DemoNav from '@/components/demos/DemoNav';

export const metadata = {
  title: 'Constitutional AI Shell | Ethraeon Demos',
  description: 'Interactive terminal for governed AI queries across multiple providers',
};

export default function ConstitutionalShellDemo() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Terminal className="w-8 h-8" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Constitutional AI Shell
            </h1>
            <p className="text-xl text-blue-100">
              Multi-provider AI governance in real-time
            </p>
          </div>
        </Container>
      </section>

      {/* Navigation */}
      <DemoNav demoId="constitutional-shell" />

      {/* Content Section */}
      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Card>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Overview
              </h2>
              <p className="text-gray-600 mb-6">
                The Constitutional AI Shell demonstrates real-time policy
                enforcement across multiple AI providers...
              </p>

              {/* Sub-demo cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Link href="/demos/constitutional-shell/sandbox">
                  <Card hover>
                    <h3 className="text-xl font-semibold mb-2">Sandbox</h3>
                    <p className="text-gray-600 text-sm">
                      Interactive terminal for executing governed queries
                    </p>
                  </Card>
                </Link>
                {/* More sub-demo cards... */}
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}
```

### Step 3: Create Sub-Route Pages

**File**: `app/demos/constitutional-shell/sandbox/page.tsx`

```typescript
'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import DemoNav from '@/components/demos/DemoNav';
import Terminal from '@/components/demos/constitutional-shell/Terminal';
import { useDemo } from '@/lib/hooks/useDemo';

export default function SandboxPage() {
  const [query, setQuery] = useState('');
  const { state, data, error, run } = useDemo('constitutional-shell');

  const handleSubmit = async (query: string) => {
    await run({
      endpoint: '/api/demos/shell/query',
      data: {
        query,
        provider: 'anthropic',
        policy: 'hipaa_v2.4',
      },
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <DemoNav demoId="constitutional-shell" />

      <section className="py-20">
        <Container>
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Interactive Sandbox
            </h1>

            <Terminal
              onSubmit={handleSubmit}
              state={state}
              output={data}
              error={error}
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
```

---

## Creating Demo Components

### Component File Structure

```
components/demos/constitutional-shell/
├── Terminal.tsx           # Main terminal UI
├── PolicyCompiler.tsx     # Policy compilation viewer
├── AuditTrail.tsx         # Audit trail display
└── ProviderSelector.tsx   # Provider selection UI
```

### Component Template

**File**: `components/demos/constitutional-shell/Terminal.tsx`

```typescript
'use client';

import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils/classnames';

interface TerminalProps {
  onSubmit: (query: string) => Promise<void>;
  state: 'idle' | 'loading' | 'success' | 'error';
  output: any;
  error: Error | null;
}

export default function Terminal({ onSubmit, state, output, error }: TerminalProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ type: 'input' | 'output', content: string }>>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add input to history
    setHistory(prev => [...prev, { type: 'input', content: input }]);

    // Submit query
    await onSubmit(input);

    // Clear input
    setInput('');
  };

  // Add output to history when available
  useEffect(() => {
    if (state === 'success' && output) {
      setHistory(prev => [...prev, { type: 'output', content: output.result }]);
    }
  }, [state, output]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
      {/* Terminal Output */}
      <div
        ref={terminalRef}
        className="min-h-[400px] max-h-[600px] overflow-y-auto mb-4"
      >
        {history.map((entry, idx) => (
          <div key={idx} className={cn(
            'mb-2',
            entry.type === 'input' ? 'text-green-400' : 'text-gray-300'
          )}>
            {entry.type === 'input' && '$ '}
            {entry.content}
          </div>
        ))}

        {state === 'loading' && (
          <div className="text-gray-500 animate-pulse">Processing...</div>
        )}

        {error && (
          <div className="text-red-400">Error: {error.message}</div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex items-center">
        <span className="text-green-400 mr-2">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={state === 'loading'}
          className="flex-1 bg-transparent text-green-400 outline-none placeholder-gray-600"
          placeholder="Enter your query..."
        />
      </form>
    </div>
  );
}
```

---

## Setting Up API Routes

### API Route Structure

```
app/api/demos/
├── shell/
│   ├── compile/route.ts
│   ├── query/route.ts
│   ├── audit/[id]/route.ts
│   └── providers/route.ts
├── dim/
│   ├── compile-policy/route.ts
│   ├── detect-conflicts/route.ts
│   └── resolve/route.ts
└── witness/
    ├── create-edg/route.ts
    └── verify/route.ts
```

### API Route Template

**File**: `app/api/demos/shell/query/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';

// Mock data for demo
const MOCK_RESPONSES = {
  hipaa_v2.4: {
    result: 'Treatment recommendation: Consider metformin as first-line therapy...',
    constraints_applied: [
      { id: 'c001', type: 'privacy', status: 'enforced' },
      { id: 'c002', type: 'clinical_accuracy', status: 'enforced' },
    ],
    audit_trail_id: 'trace_2025_001',
    execution_time_ms: 234,
  },
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { query, provider, policy } = body;

    // Validate input
    if (!query || !provider || !policy) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Return mock response
    const response = MOCK_RESPONSES[policy as keyof typeof MOCK_RESPONSES];

    if (!response) {
      return NextResponse.json(
        { error: 'Unknown policy' },
        { status: 404 }
      );
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Enable CORS if needed
export const config = {
  api: {
    bodyParser: true,
  },
};
```

---

## Integration Checklist

### Pre-Integration
- [ ] Read WEB_BUILD_ROADMAP_v1.md for build order
- [ ] Ensure Tier 2 (Core Library) is complete
- [ ] Verify all types are defined

### Route Integration
- [ ] Create demo directory in `app/demos/`
- [ ] Add main `page.tsx` with metadata
- [ ] Create sub-route directories
- [ ] Add sub-route `page.tsx` files
- [ ] Update `lib/constants/demo-config.ts` if needed

### Component Integration
- [ ] Create demo component directory
- [ ] Build components using existing UI primitives
- [ ] Test components in isolation first
- [ ] Add TypeScript types for all props

### API Integration
- [ ] Create API route directory
- [ ] Implement route handlers with mock data
- [ ] Test API routes with curl/Postman
- [ ] Document API request/response format

### Testing
- [ ] Test all routes load without errors
- [ ] Verify navigation between sub-routes
- [ ] Test API calls from components
- [ ] Check responsive behavior (mobile/desktop)
- [ ] Verify no console errors

### Documentation
- [ ] Update DEMOS_ROUTE_MAP.md if routes change
- [ ] Add component JSDoc comments
- [ ] Document any new utilities/hooks

---

## Common Patterns

### Pattern 1: Demo State Management

```typescript
'use client';

import { useDemo } from '@/lib/hooks/useDemo';

export default function DemoPage() {
  const { state, data, error, run, reset } = useDemo('demo-id');

  const handleAction = async () => {
    await run({
      endpoint: '/api/demos/demo-id/action',
      data: { /* payload */ },
    });
  };

  return (
    <div>
      {state === 'loading' && <LoadingState />}
      {state === 'error' && <ErrorState error={error} />}
      {state === 'success' && <SuccessView data={data} />}
    </div>
  );
}
```

### Pattern 2: Reusable Demo Layout

```typescript
import DemoLayout from '@/components/demos/DemoLayout';

export default function DemoPage() {
  return (
    <DemoLayout
      demoId="constitutional-shell"
      title="Interactive Sandbox"
      breadcrumbs={['Demos', 'Constitutional Shell', 'Sandbox']}
    >
      {/* Page content */}
    </DemoLayout>
  );
}
```

### Pattern 3: Type-Safe API Calls

```typescript
import { apiClient } from '@/lib/api/client';
import type { QueryRequest, QueryResponse } from '@/lib/types/demo';

const response = await apiClient.post<QueryResponse>(
  '/api/demos/shell/query',
  {
    query: 'Example query',
    provider: 'anthropic',
    policy: 'hipaa_v2.4',
  } as QueryRequest
);
```

### Pattern 4: Error Handling

```typescript
try {
  const result = await apiClient.post('/api/demos/...', data);
  // Handle success
} catch (error) {
  if (error instanceof APIError) {
    // Handle API error
    console.error('API Error:', error.message, error.status);
  } else {
    // Handle other errors
    console.error('Unexpected error:', error);
  }
}
```

---

## Troubleshooting

### Issue: "Module not found" errors

**Cause**: Incorrect import path or missing file

**Solution**:
```typescript
// ❌ Wrong
import Button from 'components/ui/Button';

// ✅ Correct (using @/ alias)
import Button from '@/components/ui/Button';
```

**Verify** `tsconfig.json` has path aliases:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Issue: "useState" errors in route files

**Cause**: Using client hooks in server components

**Solution**: Add `'use client';` directive at top of file
```typescript
'use client';

import { useState } from 'react';
// ... rest of component
```

### Issue: API routes return 404

**Cause**: Incorrect route structure or missing `route.ts`

**Solution**:
- Ensure file is named `route.ts` (not `route.tsx`)
- Verify directory structure matches URL path
- Check export syntax: `export async function POST(request) { ... }`

### Issue: Type errors with demo configuration

**Cause**: Missing type definitions

**Solution**:
```typescript
// Add types to lib/types/demo.ts
export interface DemoMetadata {
  id: string;
  title: string;
  // ... other fields
}

// Use in demo-config.ts
import type { DemoMetadata } from '@/lib/types/demo';

export const DEMO_METADATA: Record<string, DemoMetadata> = {
  // ...
};
```

### Issue: Components not re-rendering

**Cause**: Missing dependency in useEffect

**Solution**:
```typescript
// ❌ Wrong
useEffect(() => {
  if (data) {
    setHistory([...history, data]);
  }
}, []); // Missing 'data' dependency

// ✅ Correct
useEffect(() => {
  if (data) {
    setHistory([...history, data]);
  }
}, [data]); // Include all dependencies
```

### Issue: Build fails with CSS errors

**Cause**: Incorrect Tailwind class or missing globals.css import

**Solution**:
1. Check `app/layout.tsx` imports `./globals.css`
2. Verify Tailwind classes are spelled correctly
3. Ensure `tailwind.config.ts` includes all content paths

### Issue: Demo navigation not highlighting active route

**Cause**: Incorrect pathname comparison

**Solution**:
```typescript
'use client';

import { usePathname } from 'next/navigation';

export default function DemoNav() {
  const pathname = usePathname();

  return (
    <nav>
      {navItems.map(item => (
        <Link
          key={item.path}
          href={item.path}
          className={pathname === item.path ? 'active' : ''}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
```

---

## Quick Reference

### File Naming Conventions
- **Route pages**: `page.tsx` (must be exact)
- **API routes**: `route.ts` (must be exact, not .tsx)
- **Components**: PascalCase (e.g., `Terminal.tsx`)
- **Utilities**: camelCase (e.g., `formatting.ts`)
- **Types**: camelCase (e.g., `demo.ts`)

### Import Order (Convention)
```typescript
// 1. React imports
import { useState, useEffect } from 'react';

// 2. Next.js imports
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// 3. Third-party libraries
import { Terminal } from 'lucide-react';

// 4. Internal components
import Button from '@/components/ui/Button';
import Terminal from '@/components/demos/constitutional-shell/Terminal';

// 5. Internal utilities/hooks
import { useDemo } from '@/lib/hooks/useDemo';
import { cn } from '@/lib/utils/classnames';

// 6. Types
import type { DemoState } from '@/lib/types/demo';

// 7. Constants
import { ROUTES } from '@/lib/constants/routes';
```

### Common Commands
```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Run production server
npm start

# Type check
npx tsc --noEmit

# Lint
npm run lint
```

---

**Generated by**: CCT_Web_Prime
**Status**: Ready for integration
**Next**: Begin with WEB_BUILD_ROADMAP_v1.md Tier 2
