
import React from 'react';
import { Project } from '../types';
import { ExternalLink, Calendar } from 'lucide-react';

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-base-content/5 overflow-hidden">
      <figure className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent opacity-60"></div>
        <div className="absolute top-4 right-4 badge badge-primary font-bold shadow-lg">{project.date}</div>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl font-bold group-hover:text-primary transition-colors">
          {project.title}
        </h2>
        <p className="text-base-content/70 text-sm line-clamp-3 mb-4">
          {project.description}
        </p>
         <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="badge badge-primary badge-outline font-black text-[10px] uppercase tracking-widest px-3 py-3 border-opacity-30">
              {tag}
            </span>
          ))}
        </div>
        <div className="card-actions justify-end pt-4 border-t border-base-content/5">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm flex items-center gap-2"
          >
            Explore <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};
