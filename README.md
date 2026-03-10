# Portfolio

A personal portfolio website built with Next.js, featuring a distinctive dark aesthetic with medical imaging projects showcase.

## Features

- **Hero Section** - Animated introduction with typing effects
- **About** - Personal bio and background
- **Skills** - Technical expertise showcase
- **Projects** - Medical imaging visualizations (Pneumonia detection, TB visualization)
- **Contact** - Contact form and social links
- **Theme Switching** - Light/Dark mode toggle
- **Mobile Responsive** - Fully responsive with hamburger menu
- **Animations** - Scroll-triggered reveal animations

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules + CSS Variables
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist (Next.js font)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── components/       # React components
│   ├── About.tsx
│   ├── AnimatedSection.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── MobileMenu.tsx
│   ├── Navigation.tsx
│   ├── ProjectCard.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── ThemeProvider.tsx
├── hooks/            # Custom React hooks
│   ├── useIntersectionObserver.ts
│   ├── useTheme.ts
│   └── useTypingEffect.ts
├── types/            # TypeScript type definitions
│   └── portfolio.ts
├── globals.css       # Global styles
├── layout.tsx        # Root layout
└── page.tsx          # Home page

public/
└── images/           # Project images
    ├── pneumonia.png
    └── tb_viz.png
```

## Customization

- Edit `app/components/Hero.tsx` to update the hero section
- Modify `app/components/Projects.tsx` to add/remove projects
- Update CSS variables in `app/globals.css` for theming
- Edit `app/components/About.tsx`, `Skills.tsx`, and `Contact.tsx` as needed

## License

MIT
