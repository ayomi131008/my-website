# AY Creative Designs

Next.js 15 (App Router) portfolio site.

## Run locally
    npm install
    cp .env.example .env.local
    npm run dev

## Deploy to Vercel
1. Push this folder to a GitHub repo and import it at vercel.com/new (framework auto-detected as Next.js).
2. Add the environment variables from `.env.example` in Project Settings > Environment Variables.
3. Contact form uses Resend (resend.com): verify your sending domain, create an API key, set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.
4. Set `NEXT_PUBLIC_SITE_URL` to your live domain (used for SEO, sitemap and social previews).

## Replace placeholders
- Copy, services, prices and email: `lib/data.js`
- Project covers are placeholder shapes from `components/Art.js`. To use real images, put files in `public/work/` and swap `<Art />` for `next/image` in `components/PortfolioGrid.js` and `app/page.js`.
