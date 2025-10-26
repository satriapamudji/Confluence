# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Lumina Sanctuary is a luxury residential development marketing website built with Next.js 13, showcasing the fictional "Confluence @ Hougang" property. This is an educational student project created with bolt.new framework, configured for static site generation and deployment to Netlify.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build (generates static export in /out directory)
npm run build

# Start production server (note: not compatible with static export mode)
npm start

# Run ESLint (currently disabled during builds)
npm run lint
```

## Architecture Overview

### Static Export Configuration
- The project is configured for **static HTML export** via `next.config.js` (`output: 'export'`)
- Images are unoptimized for static hosting compatibility
- All routes are pre-rendered at build time
- No server-side features (API routes, ISR, SSR) are available

### Technology Stack
- **Framework**: Next.js 13.5.11 with App Router
- **Language**: TypeScript 5.2.2 with strict mode
- **Styling**: Tailwind CSS 3.3.3 with CSS variables for theming
- **UI Components**: Shadcn/ui (Radix UI primitives + Tailwind)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React

### Directory Structure

```
app/                          # Next.js App Router
├── layout.tsx               # Root layout with Navigation, ThemeProvider, Toaster
├── globals.css              # Tailwind directives + CSS custom properties
├── page.tsx                 # Home/landing page
├── residences/page.tsx      # Unit types and floorplan gallery
├── location/page.tsx        # Location amenities and transit info
└── register/page.tsx        # Interest registration form

components/                   # Feature components
├── navigation.tsx           # Header with scroll detection, responsive menu
├── register-interest.tsx    # Registration form with React Hook Form
├── location-preview.tsx     # Amenities grid display
├── unit-layout.tsx          # Unit specifications component
├── video-player-modal.tsx   # Video modal with controls
└── ui/                      # 50+ Shadcn/ui components (Button, Card, Dialog, etc.)

public/                       # Static assets
├── website_video.mp4        # Hero video (6MB)
├── plan_type[a-f].png       # Unit floorplans (6 types)
├── *.jpg                    # Hero, location, amenity images
└── lumina_brochure.pdf      # Marketing brochure
```

### Import Aliases
Path aliases are configured in `tsconfig.json` and `components.json`:
- `@/components` - React components
- `@/components/ui` - Shadcn/ui components
- `@/lib` - Utility functions
- `@/hooks` - Custom React hooks

Always use these aliases instead of relative imports.

### Component Patterns

**Client vs Server Components**:
- Most components use `"use client"` directive due to interactivity (state, events)
- Layout and page files are Server Components by default
- Client components: Navigation (scroll state), RegisterInterest (forms), VideoPlayerModal (state)

**Shadcn/ui Usage**:
- Components are installed locally in `components/ui/`
- Import components from `@/components/ui/*`
- Styled with Tailwind using CSS variables from `globals.css`
- To add new components: `npx shadcn-ui@latest add <component-name>`

### Styling System

**Tailwind Configuration**:
- Theme colors defined as CSS custom properties (HSL values)
- Dark mode via class strategy (`.dark` class on `<html>`)
- Custom animations for accordions and UI transitions
- Responsive breakpoints: `sm:640px`, `md:768px`, `lg:1024px`

**CSS Variables** (in `globals.css`):
- Semantic color tokens: `--background`, `--foreground`, `--primary`, `--secondary`, etc.
- Chart colors: `--chart-1` through `--chart-5`
- Use `cn()` utility from `@/lib/utils` to merge Tailwind classes

### Key Features

**Navigation Component** (`components/navigation.tsx`):
- Scroll-based background blur effect
- Mobile hamburger menu with Sheet component
- Active route highlighting
- Theme toggle button

**Pages**:
- **Home** (`app/page.tsx`): Hero section with video, features grid, location preview, CTAs
- **Residences** (`app/residences/page.tsx`): Unit types showcase with floorplan carousel
- **Location** (`app/location/page.tsx`): Interactive amenities map and transit options
- **Register** (`app/register/page.tsx`): Interest registration with form validation

**Form Handling**:
- React Hook Form for state management
- Zod schemas for validation
- Sonner toast notifications for feedback
- Form components from Shadcn/ui (Input, Select, Textarea, Button)

### Static Assets

**Videos**:
- Hero video in `public/website_video.mp4` (6MB MP4)
- Played via HTML5 video element with autoplay/loop/muted

**Images**:
- Next.js Image component configured with `unoptimized: true`
- Floorplans: `plan_typea.png` through `plan_typef.png`
- Site plan: `site_plan.jpg`
- Amenity and location images: Various JPGs in `/public`

**Documents**:
- Marketing brochure: `lumina_brochure.pdf`
- OG image for social sharing: `og-image.jpg`

### Deployment

**Static Export**:
- Build generates static files in `/out` directory
- Deployed to Netlify at `luminasanctuary.netlify.app`
- No server-side runtime required
- All metadata configured in `app/layout.tsx` for SEO

**Build Process**:
1. TypeScript compilation
2. Tailwind CSS processing via PostCSS
3. Next.js static page generation
4. Asset optimization (disabled for images)
5. Output to `/out` directory

### Type Safety

**TypeScript Configuration**:
- Strict mode enabled
- ES5 target for broad compatibility
- Path aliases for clean imports
- Next.js types auto-generated in `.next/types`

**Common Types**:
- Page components: Accept no props (static generation)
- Metadata exports: Use `Metadata` type from `next`
- Form schemas: Define with Zod, infer types with `z.infer<>`

### Development Notes

- ESLint is disabled during builds (`ignoreDuringBuilds: true`)
- No test suite is currently configured
- Dark mode defaults to light, system preference disabled
- All pages are statically generated at build time
- Theme controlled via `next-themes` with class strategy

### Fair Use Context

This is an educational project created for learning purposes. All assets and content are used under fair use for educational purposes per Singapore Copyright Act 2021. Not affiliated with any real property development or commercial entity.
