// Common TypeScript interfaces
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SocialLink {
  icon: React.ComponentType;
  title: string;
  url: string;
  username: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface EducationItem {
  title: string;
  institution: string;
  year: string;
} 