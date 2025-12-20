
import { ReactNode } from 'react';

export type Category = 'all' | 'canvas' | 'python' | 'n8n';

export interface Project {
  id: number;
  title: string;
  category: Exclude<Category, 'all'>;
  description: string;
  tech: string[];
  icon: ReactNode;
  color: string;
  demoUrl?: string;
  videoUrl?: string;
  settingsUrl?: string;
}

export interface Skill {
  name: string;
  level: string;
}
