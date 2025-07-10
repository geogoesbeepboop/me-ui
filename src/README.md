# Project Structure

This directory follows Next.js 13+ App Router conventions and best practices for maintainable code.

## Directory Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── work/              # Work/Resume page
│   ├── globals.css        # Global styles (moved to styles/)
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable React components
│   ├── BlurText.tsx
│   ├── GooeyNav.tsx
│   ├── Navigation.tsx
│   ├── ProfileCard.tsx
│   └── RotatingText.tsx
├── backgrounds/           # Background components
│   └── Aurora.tsx
├── styles/               # CSS and style files
│   ├── Aurora.css
│   ├── globals.css
│   ├── GooeyNav.css
│   ├── page.module.css
│   ├── ProfileCard.css
│   └── RotatingText.css
├── types/                # TypeScript type definitions
│   └── index.ts
├── utils/                # Utility functions
│   └── index.ts
├── lib/                  # Library code and constants
│   └── constants.ts
└── hooks/                # Custom React hooks (future use)
```

## Best Practices

### 1. File Organization
- **Pages**: Each route has its own directory in `app/`
- **Components**: Reusable components go in `components/`
- **Styles**: All CSS files are centralized in `styles/`
- **Types**: All TypeScript interfaces are in `types/`
- **Utils**: Common utility functions in `utils/`
- **Constants**: Application constants in `lib/`

### 2. CSS Modules
- Use CSS modules for component-specific styles
- Class names use camelCase for CSS modules compatibility
- Global styles remain in `styles/globals.css`

### 3. TypeScript
- All interfaces are centralized in `types/index.ts`
- Use proper typing for all components and functions
- Export types from a single location for consistency

### 4. Component Structure
- Components are self-contained with their own styles
- Props interfaces are defined in `types/`
- Use proper prop validation and default values

### 5. Import Paths
- Use absolute imports with `@/` alias for better maintainability
- CSS imports point to `styles/` directory
- Component imports use relative paths within the same directory

## Adding New Features

### New Page
1. Create directory in `app/`
2. Add `page.tsx` file
3. Import styles from `styles/` if needed
4. Add to navigation if required

### New Component
1. Create file in `components/`
2. Define props interface in `types/`
3. Add CSS module if needed
4. Export from components index (future)

### New Styles
1. Add CSS file to `styles/`
2. Update imports in components
3. Use camelCase for CSS module class names

## Design System

The project follows a consistent design system defined in `Design.json`:
- Color palette with primary, neutral, and semantic colors
- Typography scale with consistent font sizes and weights
- Spacing scale for consistent layout
- Component patterns for cards, buttons, and layouts

## Performance Considerations

- CSS modules prevent style conflicts
- Centralized types reduce bundle size
- Utility functions are tree-shakeable
- Constants are properly typed and optimized 