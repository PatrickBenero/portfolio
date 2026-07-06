export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  author: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  resumePath: string;
  keywords: string[];
}

export interface NavLink {
  href: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  architecture: string;
  engineeringDecisions: string[];
  features: string[];
  challenges: string[];
  lessons: string[];
  githubUrl: string;
  liveUrl: string | null;
  image: string;
  gradient: string;
  tags: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
  color: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  logo: string;
  color: string;
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  description: string;
  highlights: string[];
}

export type JourneyType = "learning" | "engineering" | "opensource";

export interface JourneyEntry {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: JourneyType;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "Github" | "Linkedin" | "Mail";
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at?: string;
}

export interface GitHubUser {
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string | null;
}

export interface GitHubStats {
  user: GitHubUser | null;
  repos: GitHubRepo[];
  languages: Record<string, number>;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface VisitorCount {
  count: number;
}
