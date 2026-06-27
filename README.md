# BendLogic Site

Marketing site for **BendLogic** — a conduit bending calculator for field electricians.

Built with [Next.js](https://nextjs.org) (App Router), TypeScript, Tailwind CSS v4, and Framer Motion. Deployed on Vercel.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Structure

- `app/` — routes (`/`, `/privacy`, `/terms`) and global styles
- `components/` — UI sections (Hero, Features, Tools, CTA, Footer) and shared pieces
- `public/` — image assets (hero mockup, store badges)

## Deploy

Pushes to `main` deploy automatically once the repo is linked to a Vercel project.
The custom domain `bendlogic.app` is configured in the Vercel dashboard (DNS pointed at Vercel).
