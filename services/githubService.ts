
import { GithubRepo } from '../types';

export const fetchRepos = async (username: string): Promise<GithubRepo[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    if (!response.ok) throw new Error('Failed to fetch repos');
    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
};
