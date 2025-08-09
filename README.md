<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations, dark/light mode, and SEO best practices. The site showcases projects, skills, and a blog, and is optimized for performance and accessibility.

## Features

- Responsive, mobile-first layout with accessibility best practices[^1][^2]
- Dark/Light mode toggle with preserved preferences[^2][^1]
- Smooth, high-performance animations using Framer Motion (Motion for React)[^3][^4]
- SEO-friendly architecture with metadata, optimized routing, and fast rendering[^5][^1]
- Blog section and project showcases with animated transitions[^4][^3]
- Deployed with modern edge-ready tooling and fast builds[^6][^5]


## Tech Stack

- Framework: Next.js 14 (App Router, advanced routing, data fetching)[^5][^1]
- Styling: Tailwind CSS (utility-first, responsive design)[^7][^2]
- Animations: Framer Motion / Motion for React (declarative animations, gestures)[^3][^4]
- Language: TypeScript
- Deployment: Vercel


## Getting Started

1) Prerequisites

- Node.js 18+
- npm or pnpm or yarn

2) Install dependencies
```bash
npm install
# or
pnpm install
# or
yarn
```

3) Run the development server
```bash
npm run dev
# http://localhost:3000
```

4) Build and start
```bash
npm run build
npm run start
```


## Project Structure

```
src/
  app/                # App Router pages/layouts
  components/         # Reusable UI components
  styles/             # Global styles (Tailwind base, components, utilities)
  lib/                # Utilities, hooks, config
public/
  images/             # Static assets
```


## Key Implementation Details

- App Router-first architecture with nested layouts and route groups for clean navigation and content separation[^1][^6]
- Declarative animations (page transitions, reveal effects) using Motion components and AnimatePresence[^4][^3]
- Utility-first styling via Tailwind for rapid iteration, responsive design, and theme consistency[^2][^7]
- SEO enhancements with structured metadata, social previews, and performant rendering paths[^5][^1]


## Scripts

- dev: Start development server
- build: Production build
- start: Start production server
- lint: Lint codebase

Example package.json snippet:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```


## Customization

- Colors/Theme: Adjust Tailwind config or use CSS variables for themes[^8][^2]
- Animations: Tweak Motion variants, transitions, and gestures per section[^3][^4]
- Content: Update project cards, blog posts, and metadata under src/app and data files


## Performance and SEO

- Optimized routing, data fetching, and incremental static features for speed and freshness[^1][^5]
- Tailwind’s utility classes keep CSS minimal and cache-friendly[^7][^2]
- Motion’s hybrid engine enables smooth transitions without heavy runtime cost[^4][^3]


## Deployment

- Deploy on Vercel for first-class Next.js support, previews, and edge capabilities[^6][^1]
- Configure environment variables and domain settings as needed


## Roadmap

- Add CMS integration for blog/projects
- Improve accessibility test coverage
- Expand animation presets and micro-interactions


## License

MIT

## Acknowledgements

- Next.js team for the App Router and performance improvements[^5][^1]
- Tailwind CSS for a powerful utility-first styling workflow[^2][^7]
- Motion for React for smooth, accessible animations[^3][^4]

<div style="text-align: center">⁂</div>

[^1]: https://nextjs.org/docs

[^2]: https://tailwindcss.com

[^3]: https://motion.dev/docs/react

[^4]: https://motion.dev

[^5]: https://nextjs.org/blog/next-14

[^6]: https://nextjs.org

[^7]: https://www.geeksforgeeks.org/css/introduction-to-tailwind-css/

[^8]: https://tailwindcss.com/blog/tailwindcss-v4

[^9]: https://nextjs.org/blog/next-14-2

[^10]: https://www.geeksforgeeks.org/reactjs/nextjs-14-latest-updates-and-features/

[^11]: https://blog.jobins.jp/must-know-features-in-nextjs-14-top-20-highlights

[^12]: https://nextjs.org/blog

[^13]: https://pagedone.io/blocks/marketing/features

[^14]: https://www.geeksforgeeks.org/reactjs/framer-motion-introduction-and-installation/

[^15]: https://www.descope.com/blog/post/nextjs13-vs-nextjs14

[^16]: https://www.themexpert.com/blog/beginners-guide-to-framer-motion

[^17]: https://www.codemotion.com/magazine/frontend/next-js-14-all-the-innovations/

[^18]: https://tailwindcss.com/plus/ui-blocks/marketing/sections/feature-sections

[^19]: https://tailwindcss.com/plus/ui-blocks/ecommerce/components/product-features

[^20]: https://refine.dev/blog/framer-motion/

