// Work page types
export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
  link?: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  level: number;
  icon?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  gpa?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  link?: string;
}

// Component types
export interface ProfileCardProps {
  avatarUrl: string;
  iconUrl: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  onContactClick?: () => void;
}

export interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: 'words' | 'characters';
  direction?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export interface RotatingTextProps {
  texts: string[];
  staggerFrom?: 'first' | 'last';
  initial?: any;
  animate?: any;
  exit?: any;
  staggerDuration?: number;
  rotationInterval?: number;
}

export interface GooeyNavItem {
  icon: React.ReactNode;
  href: string;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  particleCount?: number;
  particleDistances?: number[];
  particleR?: number;
  activeIndex?: number;
  animationTime?: number;
  timeVariance?: number;
  colors?: number[];
  onTabChange?: (index: number) => void;
} 