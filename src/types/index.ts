export interface Service {
  id: number;
  title: string;
  icon: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  pricing: string;
  timeline: string;
  experience: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

export interface Achievement {
  metric: string;
  description: string;
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  achievements: string[];
  metrics: {
    [key: string]: string;
  };
  githubUrl?: string;
  liveUrl?: string;
  status: "completed" | "in-progress" | "concept";
  year: string;
  company?: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface Skill {
  name: string;
  category: string;
  proficiency: number;
  projects: number;
}

export interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  color: string;
}

export interface ContactInfo {
  label: string;
  value: string;
  icon: string;
  href?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: "work" | "education" | "activity";
}

export interface AboutSkill {
  name: string;
  category: string;
  proficiency: number;
  icon: string;
  description: string;
}

export interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: string;
}
