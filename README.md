# Distild Landing Page

This is the highly minimalist, ultra-fast landing page for the **Distild** enterprise AI transformation consultancy.

## Tech Stack
- Next.js (App Router)
- Tailwind CSS (v4)
- TypeScript
- Inter Font (Google Fonts)

## Design System
- **Theme:** Strict dark-mode dominant (Deep slates and blacks).
- **Typography:** `Inter` for high-end scannability.
- **Accents:** Emerald (`#10b981`) and Electric Blue (`#3b82f6`).

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment (Static Export)

The site is optimized for zero-cost static deployment on Vercel or Cloudflare Pages. 

### Vercel
Push the repository to GitHub and import it into Vercel. Vercel automatically detects the Next.js framework and configures the build settings.

### Cloudflare Pages
1. Connect your GitHub repository to Cloudflare Pages.
2. Set the framework preset to `Next.js`.
3. Set the build command to `npm run build`.
4. Deploy.

*Note: For fully static exports, you may need to add `output: "export"` to your `next.config.ts` depending on your exact routing setup, though Vercel and Cloudflare Pages typically handle Next.js App Router seamlessly without it.*

## Content
- **Enterprise Proof:** The case studies in the `EnterpriseProof.tsx` component are currently mocked and should be updated with actual data from Bobby Mojab's CV.
