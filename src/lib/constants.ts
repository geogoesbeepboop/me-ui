// Application constants
export const APP_NAME = "George Andrade-Munoz";
export const APP_DESCRIPTION = "Personal portfolio and professional experience";

// Navigation items
export const NAVIGATION_ITEMS = [
  { path: '/', label: 'Home', icon: 'home' },
  { path: '/about', label: 'About', icon: 'user' },
  { path: '/work', label: 'Work', icon: 'briefcase' },
  { path: '/projects', label: 'Projects', icon: 'folder' },
  { path: '/contact', label: 'Contact', icon: 'envelope' },
];

// Design system colors (from Design.json)
export const COLORS = {
  primary: {
    brand: "#2a00d1",
    brandLight: "#4a20f1",
    brandDark: "#1a0091"
  },
  neutral: {
    background: "#000000",
    surface: "#111111",
    surfaceElevated: "#1a1a1a",
    text: "#ffffff",
    textSecondary: "#a0a0a0",
    textTertiary: "#666666",
    border: "#333333",
    divider: "#2a2a2a"
  },
  semantic: {
    highlight: "#2a00d1",
    muted: "#666666"
  }
} as const;

// Typography scale
export const TYPOGRAPHY = {
  scale: 1.25,
  sizes: {
    xl: "2rem",
    lg: "1.5rem",
    md: "1.125rem",
    base: "1rem",
    sm: "0.875rem"
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  lineHeights: {
    tight: 1.2,
    normal: 1.4,
    relaxed: 1.6
  }
} as const;

// Spacing scale
export const SPACING = {
  unit: "0.25rem",
  scale: {
    xs: "0.5rem",
    sm: "0.75rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4rem"
  }
} as const;

// Breakpoints
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
} as const;

// Animation durations
export const ANIMATION = {
  fast: 150,
  normal: 300,
  slow: 500
} as const;

// Social media links
export const SOCIAL_LINKS = {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  email: "mailto:your.email@example.com"
} as const; 