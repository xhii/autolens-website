# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js website for the AutoLens mobile app, specifically focused on handling password reset functionality. The site is deployed on Vercel and integrates with Supabase for authentication services.

## Architecture

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with global styles in `styles/globals.css`
- **Database/Auth**: Supabase with client configuration in `lib/supabase.ts`
- **Deployment**: Vercel with custom rewrites configured in `vercel.json`
- **Pages Structure**: Uses Next.js Pages Router (not App Router)

### Key Components

- `pages/_app.tsx` - Main app wrapper with global CSS imports
- `lib/supabase.ts` - Supabase client configuration with implicit auth flow
- `vercel.json` - Contains rewrites for track map storage routing to Supabase storage

### Page Structure

- `/` - Landing page (`pages/index.tsx`)
- `/reset-password` - Password reset form handling Supabase reset tokens
- `/reset-success` - Success confirmation page
- `/location/[id]` - Dynamic location pages
- `/racetrack/[id]` - Dynamic racetrack pages
- `/api/reset-password.ts` - API endpoint for password reset functionality

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Environment Setup

Required environment variables (create `.env.local` from `.env.local.example`):
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key

## TypeScript Configuration

- Uses strict TypeScript configuration with path aliases (`@/*` maps to root)
- Configured for Next.js with JSX preserve mode
- Includes all `.ts` and `.tsx` files, excludes `node_modules`

## Supabase Integration

The Supabase client is configured with:
- Implicit auth flow for seamless authentication
- Session detection in URL for handling auth redirects
- Used primarily for password reset functionality

## Deployment Notes

- Deployed on Vercel with custom domain (autolens.net)
- Vercel rewrites configured to proxy track map requests to Supabase storage
- Environment variables must be set in Vercel dashboard
- Supabase Site URL should be updated to match Vercel domain after deployment
