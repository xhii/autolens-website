# AutoLens Website

Simple website for handling password reset functionality for the AutoLens mobile app.

## Setup

1. Copy `.env.local.example` to `.env.local`
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`

## Deploy to Vercel

1. Push this folder to a GitHub repository
2. Connect to Vercel and import the project
3. Set environment variables in Vercel dashboard
4. Add custom domain (autolens.net) in Vercel settings

## Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anon key

## Pages

- `/` - Landing page
- `/reset-password` - Password reset form (handles Supabase reset tokens)
- `/reset-success` - Success confirmation page

## After Deployment

1. Update Supabase Site URL to your Vercel domain
2. Test the complete password reset flow