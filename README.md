# Graceket Landing Page

A marketing site for Graceket, highlighting curated products that automatically fund charitable donations. Built with Next.js, React, TypeScript, and Tailwind CSS to showcase the shopping experience, impact metrics, and frequently asked questions.

## Features
- Hero, product highlights, and impact storytelling tailored for a mission-driven marketplace.
- FAQ accordion, impact badges, and email capture form components.
- Responsive design with Tailwind CSS and modern Next.js app router conventions.

## Tech Stack
- [Next.js 14](https://nextjs.org/) with the App Router
- [React 18](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at http://localhost:3000.
3. **Run linting**
   ```bash
   npm run lint
   ```
4. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure
- `app/` – App Router entry points, global layout, and styles (`globals.css`).
- `components/` – Reusable UI pieces such as `ImpactBadge`, `AccordionItem`, and `EmailCaptureForm` used on the landing page.
- `public/` – Static assets (add as needed).
- Configuration files like `tailwind.config.ts`, `postcss.config.mjs`, and `tsconfig.json` support styling and TypeScript tooling.

## Scripts
- `npm run dev` – Start the local development server.
- `npm run build` – Create an optimized production build.
- `npm run start` – Serve the production build.
- `npm run lint` – Run ESLint checks.

## Environment Variables
No environment variables are required for the current static landing page. Add `.env.local` if you introduce API keys or runtime configuration.
