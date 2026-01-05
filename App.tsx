
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsScroller } from './components/SkillsScroller';
import { ProjectCard } from './components/ProjectCard';
import { GitHubRepos } from './components/GitHubRepos';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { PROJECTS } from './constants';
import { Heart, Github, Linkedin, MessageCircle, Briefcase } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content selection:bg-primary selection:text-primary-content transition-colors duration-300">
      <Navbar />
      
      <main>
        {/* Landing/Hero Section */}
        <Hero />

        {/* Skills Scroller Sections (Frontend, Backend, Tools) */}
        <SkillsScroller />

        {/* Projects Grid Section */}
        <section id="projects" className="py-24 bg-base-100 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20 space-y-4">
              <div className="badge badge-primary py-3 px-4 font-black tracking-[0.2em] mb-4">SHOWCASE</div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">Engineering <span className="text-primary">Impact</span></h2>
              <p className="max-w-3xl mx-auto text-base-content/60 text-lg md:text-xl font-medium leading-relaxed">
                From real-time communication protocols to AI-driven agricultural solutions, here's how I translate logic into value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {PROJECTS.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Resume Spotlight Section */}
        <ResumeSection />

        {/* Freelance CTA Banner */}
        <section className="bg-primary text-primary-content py-20 relative">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
          <div className="container mx-auto px-6 text-center space-y-8 relative z-10">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full animate-bounce">
                <Briefcase size={48} />
              </div>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">Ready for <span className="italic underline decoration-secondary decoration-8">New Challenges</span></h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto font-medium">
              "Building the future of the web, one component at a time. Looking for full-time roles and high-impact freelance projects."
            </p>
            <div className="pt-6 flex flex-wrap justify-center gap-4">
              <a href="#contact" className="btn btn-lg btn-secondary rounded-full px-12 shadow-2xl hover:scale-105 transition-transform border-none">
                Start a Conversation
              </a>
              
            </div>
          </div>
        </section>

        {/* GitHub Feed Section */}
        <GitHubRepos />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Simple Footer */}
      <footer className="footer footer-center p-12 bg-base-300 text-base-content rounded border-t border-base-content/10">
        <nav className="grid grid-flow-col gap-8 font-black uppercase text-xs tracking-widest">
          <a href="#about" className="link link-hover hover:text-primary transition-colors">Origins</a>
          <a href="#skills" className="link link-hover hover:text-primary transition-colors">Stack</a>
          <a href="#projects" className="link link-hover hover:text-primary transition-colors">Work</a>
          <a href="#resume" className="link link-hover hover:text-primary transition-colors">CV</a>
        </nav> 
        <nav>
          <div className="grid grid-flow-col gap-6">
            <a href="https://github.com/Denimworld12" target="_blank" className="hover:text-primary transition-all hover:scale-125"><Github size={28}/></a>
            <a href="https://linkedin.com/in/nikhilgupta795" target="_blank" className="hover:text-primary transition-all hover:scale-125"><Linkedin size={28}/></a>
          </div>
        </nav> 
        <aside className="mt-6">
          <div className="badge badge-outline gap-2 font-bold px-4 py-3">
            Handcrafted with <Heart size={16} className="text-error fill-error" /> by Nikhil Gupta
          </div>
          <p className="text-[10px] opacity-40 uppercase tracking-[0.3em] mt-4 font-black">© 2025 ALL RIGHTS RESERVED • BASED IN KALYAN, MH</p>
        </aside>
      </footer>
    </div>
  );
};

export default App;
