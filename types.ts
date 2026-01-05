
export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
  image: string;
  date: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
}

export interface Skill {
  name: string;
  icon: string;
}
