# Confluence @ Hougang

A luxury residential development marketing website showcasing the fictional "Confluence @ Hougang" property in District 19. Built with Next.js 16, TypeScript, and Tailwind CSS.

This educational student project demonstrates modern web development practices for property marketing, utilizing Next.js App Router with static site generation. Initial framework created with [bolt.new](https://bolt.new).

## Live Demo

🔗 [https://confluence-hg.netlify.app](https://confluence-hg.netlify.app)

## Tech Stack

- **Framework**: Next.js 16.0.0 with App Router
- **Language**: TypeScript 5.2.2 (strict mode)
- **Styling**: Tailwind CSS 3.3.3
- **UI Components**: Shadcn/ui (Radix UI + Tailwind)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Deployment**: Netlify (static export)

## Features

- **Static Site Generation**: Optimized for performance with pre-rendered pages
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Components**: Video modals, carousels, and registration forms
- **Form Validation**: Client-side validation with Zod schemas
- **Dark Mode Support**: Theme switching capability (currently defaults to light)
- **SEO Optimized**: Comprehensive metadata and Open Graph tags

## Project Structure

```
app/                          # Next.js App Router
├── layout.tsx               # Root layout with navigation and theme provider
├── globals.css              # Tailwind directives and CSS custom properties
├── page.tsx                 # Home/landing page
├── residences/page.tsx      # Unit types and floorplan gallery
├── location/page.tsx        # Location amenities and transit info
└── register/page.tsx        # Interest registration form

components/                   # React components
├── navigation.tsx           # Header with scroll detection
├── register-interest.tsx    # Registration form
├── location-preview.tsx     # Amenities grid
├── unit-layout.tsx          # Unit specifications
├── video-player-modal.tsx   # Video modal component
└── ui/                      # Shadcn/ui components (50+ components)

public/                       # Static assets
├── website_video.mp4        # Hero video
├── plan_type[a-f].png       # Unit floorplans
└── lumina_brochure.pdf      # Marketing brochure
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/luminasanctuary-main.git
cd luminasanctuary-main

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized static build
npm run build

# Output will be in the /out directory
```

## Development Commands

```bash
npm run dev    # Start development server (http://localhost:3000)
npm run build  # Generate static export in /out directory
npm run start  # Start production server (not compatible with static export)
npm run lint   # Run ESLint (currently disabled during builds)
```

## Configuration

### Static Export
The project is configured for static HTML export via `next.config.js`:
- `output: 'export'` - Generates static HTML files
- `images: { unoptimized: true }` - Disables image optimization for static hosting
- No server-side features (API routes, ISR, SSR)

### Import Aliases
Path aliases configured in `tsconfig.json`:
- `@/components` - React components
- `@/components/ui` - Shadcn/ui components
- `@/lib` - Utility functions
- `@/hooks` - Custom React hooks

## Key Pages

1. **Home** (`/`) - Hero section with video, quick facts, features grid, location preview
2. **Residences** (`/residences`) - Unit types showcase with interactive floorplan carousel
3. **Location** (`/location`) - Interactive amenities map and transit connectivity information
4. **Register** (`/register`) - Interest registration form with validation

## Fair Use Statement

This project and its assets may contain copyrighted material, the use of which is made for educational purposes only. 

This constitutes 'fair use' under Division 2 — Fair Use and Division 3 — Education and Educational Institutions of the Singapore Copyright Act 2021, which permits fair use of copyrighted works for purposes such as education and research. This project is:

- Created solely for educational purposes
- Not affiliated with any of the referenced properties or companies 
- Not intended for commercial use or distribution
- A student exercise in marketing, utilizing web development and design for marketing materials