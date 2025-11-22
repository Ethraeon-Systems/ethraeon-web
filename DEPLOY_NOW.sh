#!/bin/bash
# ETHRAEON WEB DEPLOYMENT SCRIPT
# Generated: 2025-11-22T22:20:00-07:00
# Purpose: One-command deployment for morning deadline

set -e  # Exit on any error

echo "⟁ ETHRAEON Deployment Script"
echo "=============================="
echo ""

# Navigate to project directory
cd "$(dirname "$0")"
echo "✓ Working directory: $(pwd)"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "⚠️  node_modules not found. Running npm install..."
    npm install
    echo "✓ Dependencies installed"
    echo ""
fi

# Build the project
echo "🔨 Building production bundle..."
npm run build

if [ $? -eq 0 ]; then
    echo "✓ Build successful"
    echo ""
else
    echo "❌ Build failed. Check errors above."
    exit 1
fi

# Check for deployment configuration
echo "🔍 Checking deployment configuration..."

if [ -f "vercel.json" ] || command -v vercel &> /dev/null; then
    echo "✓ Vercel detected"
    echo ""
    echo "📤 Deploying to Vercel..."

    if command -v vercel &> /dev/null; then
        vercel --prod
        echo ""
        echo "✓ Deployed to Vercel"
    else
        echo "⚠️  Vercel CLI not installed. Install with: npm i -g vercel"
        echo "   Then run: vercel --prod"
    fi

elif [ -f "netlify.toml" ]; then
    echo "✓ Netlify detected"
    echo ""
    echo "📤 Deploying to Netlify..."

    if command -v netlify &> /dev/null; then
        netlify deploy --prod
        echo ""
        echo "✓ Deployed to Netlify"
    else
        echo "⚠️  Netlify CLI not installed. Install with: npm i -g netlify-cli"
        echo "   Then run: netlify deploy --prod"
    fi

else
    echo "⚠️  No deployment configuration found (vercel.json or netlify.toml)"
    echo ""
    echo "📋 MANUAL DEPLOYMENT OPTIONS:"
    echo ""
    echo "Option 1: Vercel"
    echo "  npm i -g vercel"
    echo "  vercel --prod"
    echo ""
    echo "Option 2: Netlify"
    echo "  npm i -g netlify-cli"
    echo "  netlify deploy --prod"
    echo ""
    echo "Option 3: Manual Upload"
    echo "  Upload .next/ directory to your hosting provider"
    echo ""
fi

echo ""
echo "=============================="
echo "⟁ Deployment script complete"
echo ""
echo "NEXT STEPS:"
echo "1. Verify deployment at: https://ethraeon.ai/demos"
echo "2. Test all 4 demo pages load correctly"
echo "3. Check browser console for errors"
echo ""
echo "For the good of all concerned."
