# Portfolio Website Implementation Plan

## Overview

Transform the existing Next.js 16 project into a premium, minimalist portfolio website following the design reference in `context.html`. The design embodies **luxury/refined minimalism** with editorial typography influences.

---

## Design Direction

### Aesthetic: Luxury Refined Minimalism with Editorial Flair

- **Tone**: Sophisticated, confident, understated elegance
- **Differentiation**: The mix-blend-difference navigation, typing animation hero, and gallery-style asymmetric project layout create memorable visual impact
- **Philosophy**: "Less but better" - every element serves a purpose, generous whitespace, precise typography

### Key Design Elements from Reference

1. **Typography System**
   - Display: Playfair Display (serif, italic for accents)
   - Body: Inter with font-feature-settings (cv11, ss01)
   - Letter-spacing: -0.03em for headings
   - Massive hero typography: 13vw/9vw fluid scaling

2. **Color Palette**
   - Light mode: White (#ffffff) background, neutral-900 text
   - Dark mode: neutral-950 background, neutral-200 text
   - Accents: neutral-400, neutral-500 for secondary text
   - Selection: Inverted (black on white, white on black)

3. **Motion Design**
   - Fade-up entrance animations with cubic-bezier easing
   - Typing cursor animation (1.2s blink)
   - Image reveal on hover (clip-path animation)
   - Smooth 700ms theme transitions

4. **Spatial Composition**
   - Max-width: 1400px container
   - Generous padding: px-6 md:px-12
   - Section spacing: py-32 md:py-48
   - 12-column grid for projects

---

## Architecture

### Component Structure

```
app/
├── layout.tsx          # Root layout with fonts, theme provider
├── page.tsx            # Main page composing all sections
├── globals.css         # Global styles, CSS variables, animations
├── components/
│   ├── Navigation.tsx  # Fixed nav with mix-blend-difference
│   ├── MobileMenu.tsx  # Full-screen mobile navigation
│   ├── Hero.tsx        # Hero section with typing effect
│   ├── Projects.tsx    # Gallery-style project showcase
│   ├── ProjectCard.tsx # Individual project card
│   ├── About.tsx       # Two-column about section
│   ├── Skills.tsx      # Technical stack grid
│   ├── Contact.tsx     # Contact CTA section
│   └── Footer.tsx      # Minimal footer
├── hooks/
│   ├── useTypingEffect.ts   # Typing animation hook
│   ├── useIntersectionObserver.ts  # Scroll animations
│   └── useTheme.ts    # Dark/light mode management
└── lib/
    └── utils.ts       # Utility functions
```

### Data Structure

```typescript
// types/portfolio.ts
interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  sourceUrl: string;
  image?: string;
}

interface Skill {
  name: string;
  description: string;
}
```

---

## Implementation Tasks

### Phase 1: Foundation Setup

#### Task 1.1: Typography Configuration

- Replace Geist fonts with Playfair Display + Inter
- Configure font-feature-settings for Inter
- Set up CSS variables for font families
- Implement letter-spacing for headings

#### Task 1.2: Global Styles

- Define CSS custom properties for colors
- Implement dark mode color scheme
- Add premium scrollbar styling
- Create selection highlight styles
- Define animation keyframes (fade-up, blink, image-reveal)

#### Task 1.3: Theme Provider

- Create theme context with localStorage persistence
- Implement system preference detection
- Add smooth transition between themes

### Phase 2: Core Components

#### Task 2.1: Navigation Component

- Fixed positioning with mix-blend-difference
- Desktop menu with horizontal links
- Theme toggle button
- Mobile menu button (hamburger)
- Scroll behavior (hide on scroll down, show on scroll up)

#### Task 2.2: Mobile Menu Component

- Full-screen overlay
- Centered large typography links
- Close button
- Smooth opacity transitions
- Body scroll lock when open

#### Task 2.3: Hero Section

- Massive fluid typography (13vw → 9vw)
- Typing effect with rotating phrases
- Italic serif accent text
- CTA button with border styling
- Fade-up entrance animation

### Phase 3: Content Sections

#### Task 3.1: Projects Section

- 12-column grid layout
- Alternating left/right image positions
- Large project numbers (01, 02, 03)
- Hover scale effect on images
- Technology tags
- Live demo and source code links

#### Task 3.2: About Section

- Two-column layout (1/3 label, 2/3 content)
- Large statement text with serif accents
- Supporting paragraph grid
- Border-top divider

#### Task 3.3: Skills Section

- 4-column grid (2 on mobile)
- Animated line on hover
- Skill name and description
- Border-top divider

#### Task 3.4: Contact Section

- Large centered CTA text (8vw → 6vw)
- Email link with mailto
- Social links (LinkedIn, Twitter)
- Decorative dot separators

#### Task 3.5: Footer

- Copyright and location
- Minimal styling
- Border-top divider

### Phase 4: Interactions & Animations

#### Task 4.1: Scroll Animations

- Intersection Observer for fade-up elements
- Threshold: 0.1
- Unobserve after animation
- Staggered delays for grouped elements

#### Task 4.2: Typing Effect Hook

- Configurable phrases array
- Variable typing/deleting speeds
- Pause at end of phrase
- Loop through phrases

#### Task 4.3: Hover Effects

- Project image scale on hover
- Link underline animations
- Button background transitions
- Skill line color transitions

### Phase 5: Polish & Optimization

#### Task 5.1: Responsive Design

- Mobile-first approach
- Breakpoints: md (768px), lg (1024px)
- Typography scaling
- Grid adjustments
- Navigation visibility

#### Task 5.2: Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Focus states
- Reduced motion support
- Color contrast verification

#### Task 5.3: Performance

- Font loading optimization
- Animation performance (transform/opacity)
- Image optimization
- Component code splitting

---

## Technical Specifications

### Dependencies (Existing)

- Next.js 16.1.6
- React 19.2.3
- Tailwind CSS 4
- TypeScript 5

### Additional Setup Required

- Google Fonts integration (next/font/google)
- No additional npm packages needed

### CSS Architecture

```css
/* globals.css structure */
@import "tailwindcss";

/* CSS Custom Properties */
:root { ... }

/* Theme Configuration */
@theme inline { ... }

/* Dark Mode */
@media (prefers-color-scheme: dark) { ... }

/* Animation Keyframes */
@keyframes fade-up { ... }
@keyframes blink { ... }
@keyframes image-reveal { ... }

/* Custom Utility Classes */
.fade-up { ... }
.typing-cursor { ... }
.serif { ... }

/* Premium Scrollbar */
::-webkit-scrollbar { ... }

/* Selection Styling */
::selection { ... }
```

---

## File Implementation Order

1. `app/globals.css` - Foundation styles
2. `app/layout.tsx` - Font configuration, theme setup
3. `app/hooks/useTheme.ts` - Theme management
4. `app/hooks/useTypingEffect.ts` - Typing animation
5. `app/hooks/useIntersectionObserver.ts` - Scroll animations
6. `app/components/Navigation.tsx` - Navigation
7. `app/components/MobileMenu.tsx` - Mobile menu
8. `app/components/Hero.tsx` - Hero section
9. `app/components/ProjectCard.tsx` - Project card
10. `app/components/Projects.tsx` - Projects section
11. `app/components/About.tsx` - About section
12. `app/components/Skills.tsx` - Skills section
13. `app/components/Contact.tsx` - Contact section
14. `app/components/Footer.tsx` - Footer
15. `app/page.tsx` - Main page composition

---

## Visual Reference Summary

### Hero Section

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│     Creative                                                │
│              Developer                                      │
│     & ██████████▌                                           │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│  Helping brands thrive...        [View Projects]            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Project Card Layout

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  01          ┌──────────────────┐    E-Commerce Dashboard   │
│              │                  │    ─────────────────────   │
│              │   Project Image  │    Description text...     │
│              │                  │    REACT | TAILWIND | D3   │
│              └──────────────────┘    Live Demo | Source     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Skills Grid

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Technical Stack                                            │
│                                                             │
│  ───────────────  ───────────────  ───────────────  ─────── │
│  HTML/CSS         JavaScript       React            Node.js │
│  Semantic         ES6+ & TS        Next.js          Backend │
│                                                             │
│  ───────────────  ───────────────  ───────────────  ─────── │
│  PostgreSQL       Cloud            Design           Tools   │
│  Database         AWS              Figma            Git     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Success Criteria

- [ ] Pixel-perfect implementation of design reference
- [ ] Smooth 60fps animations
- [ ] Dark/light mode working with localStorage persistence
- [ ] Mobile-responsive across all breakpoints
- [ ] Typing animation cycling through phrases
- [ ] Scroll-triggered fade-up animations
- [ ] Accessible navigation and interactive elements
- [ ] Fast initial load with optimized fonts
- [ ] Premium visual polish matching luxury aesthetic

---

## Next Steps

After plan approval, switch to **Orchestrator mode** to coordinate implementation across multiple specialized modes:

1. Code mode for component development
2. Debug mode for troubleshooting
3. Ask mode for documentation
