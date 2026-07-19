export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  achievements: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: "completed" | "in-progress" | "concept";
  year: string;
  company?: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
  count: number;
}

export interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  name: string;
  href: string;
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
  description: string;
}

export interface Award {
  title: string;
  organization: string;
  date: string;
  description: string;
}
