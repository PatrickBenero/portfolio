# Patrick Benero A — Developer Portfolio

Premium, production-ready portfolio built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Shadcn UI**.

Designed for software engineering internship recruiting — minimal, fast, and memorable.

## Features

- **10 sections**: Hero, About, Skills, Projects, Certifications, Education, GitHub, Journey, Contact, Footer
- **Dark / light mode** with system preference support
- **Command palette** (`⌘K` / `Ctrl+K`) with search and quick actions
- **Keyboard shortcuts** — section jumps (`1–9`), resume (`⌘⇧R`), contact (`⌘⇧C`)
- **Scroll & reading progress** indicators
- **Custom cursor**, loading animation, back-to-top
- **GitHub API integration** — stats, repos, languages, contribution chart
- **Visitor counter** API route
- **Project search & filtering**
- **SEO**: metadata, Open Graph, Twitter cards, JSON-LD, sitemap, robots.txt, web manifest
- **Optimized images** via `next/image` (AVIF/WebP, lazy loading, blur placeholders)

## Tech Stack

| Layer      | Technology                |
| ---------- | ------------------------- |
| Framework  | Next.js 15 (App Router)   |
| Language   | TypeScript                |
| Styling    | Tailwind CSS v4           |
| Animation  | Framer Motion, GSAP-ready |
| UI         | Shadcn UI + Radix         |
| Icons      | Lucide React              |
| Fonts      | Geist (Vercel)            |
| Deployment | Vercel                    |

## Getting Started

### Prerequisites

- Node.js 18.18+ (20+ recommended)
- npm, yarn, or pnpm

### Install & Run

```bash
# Clone the repository
git clone https://github.com/PatrickBenero/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
portfolio/
├── public/
│   ├── resume/              # Resume PDF (downloadable)
│   ├── projects/            # Project preview assets
│   └── certifications/      # Issuer logos
├── src/
│   ├── app/
│   │   ├── api/github/      # GitHub stats proxy
│   │   ├── api/visitor/     # Visitor counter
│   │   ├── layout.tsx       # Root layout + SEO
│   │   ├── page.tsx         # Home page
│   │   ├── manifest.ts      # PWA manifest
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── animations/      # Scroll reveal utilities
│   │   ├── layout/          # Navbar, footer, cursor, etc.
│   │   ├── sections/        # Page sections
│   │   └── ui/              # Shadcn UI components
│   ├── data/site-data.ts    # All portfolio content
│   └── hooks/               # API & scroll hooks
└── vercel.json
```

## Customization

All content lives in **`src/data/site-data.ts`**. Update:

- Contact info, social links, resume path
- Professional summary and skills
- Projects (add GitHub repo URLs and live demo links)
- Certifications and education
- SEO keywords and site URL

## License

Private portfolio — © Patrick Benero A. All rights reserved.
