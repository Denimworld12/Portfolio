
import React, { useEffect, useState } from 'react';
import { fetchRepos } from '../services/githubService';
import { GithubRepo } from '../types';
import { Github, Star, GitBranch, Code2, Terminal } from 'lucide-react';

export const GitHubRepos: React.FC = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRepos('Denimworld12').then(data => {
      setRepos(data);
      setLoading(false);
    });
  }, []);

  return (
    <section id="github" className="py-24 bg-base-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-black flex items-center gap-4 tracking-tighter italic">
              <Terminal className="text-primary" /> REPOs <span className="text-primary">SPOTLIGHT</span>
            </h2>
            <p className="text-base-content/60 mt-2 font-medium">Direct live stream of my most active open-source projects.</p>
          </div>
          <a href="https://github.com/Denimworld12" target="_blank" className="btn btn-primary rounded-full px-8">
            <Github size={18} /> Explore GitHub
          </a>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-48 bg-base-200 animate-pulse rounded-2xl"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map(repo => (
              <a 
                key={repo.id} 
                href={repo.html_url} 
                target="_blank" 
                className="group p-8 bg-base-200/40 rounded-3xl border border-base-content/5 hover:border-primary/50 hover:bg-base-100 transition-all duration-500 shadow-sm hover:shadow-2xl"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-content transition-all duration-300">
                    <i className="fas fa-code-branch text-xl"></i>
                  </div>
                  <div className="flex gap-4 text-xs font-mono text-base-content/40 bg-base-300 px-3 py-1 rounded-full">
                    <span className="flex items-center gap-1 font-bold text-primary"><Star size={14} className="fill-primary" /> {repo.stargazers_count}</span>
                  </div>
                </div>
                <h3 className="text-xl font-black truncate group-hover:text-primary transition-colors">{repo.name}</h3>
                <p className="text-sm text-base-content/60 mt-3 line-clamp-2 leading-relaxed">{repo.description || "Experimental repository focusing on modern tech stacks and clean code architecture."}</p>
                <div className="mt-8 flex items-center justify-between">
                  <span className="badge badge-primary badge-outline font-bold text-[10px] uppercase tracking-widest">{repo.language || "Engine"}</span>
                  <span className="text-[10px] uppercase font-black opacity-30 italic">Rev: {new Date(repo.updated_at).toLocaleDateString()}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
