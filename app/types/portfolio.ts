export interface Project {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  sourceUrl: string;
  image?: string;
}

export interface Skill {
  name: string;
  description: string;
}
