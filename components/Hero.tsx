
import React from 'react';
import { Github, Linkedin, ExternalLink, ArrowDownCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="min-h-[90vh] flex flex-col items-center justify-center relative px-6 py-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-[100px] -z-10 animate-pulse delay-700"></div>

      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-12">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-primary/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <img 
            src="/front.jpeg" 
            alt="Nikhil Gupta" 
            className="w-full h-full object-cover scale-110"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-primary font-mono tracking-widest mb-4">HELLO, I'M</h2>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-base-content to-primary">
            Nikhil Gupta
          </h1>
          <p className="text-lg md:text-xl text-base-content/70 leading-relaxed mb-8 max-w-2xl">
            Passionate <span className="text-primary font-semibold">Full Stack Developer</span> and Computer Science student. 
            I build scalable MERN applications, AI-powered systems, and real-time platforms. 
            Always curious and ready for freelance opportunities.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <a href="https://github.com/Denimworld12" className="btn btn-primary shadow-lg shadow-primary/30">View Projects</a>
            <div className="flex gap-2">
              <a href="https://github.com/Denimworld12" target="_blank" className="btn btn-ghost btn-circle border border-base-content/10">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/nikhilgupta795" target="_blank" className="btn btn-ghost btn-circle border border-base-content/10">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <a href="#skills"><ArrowDownCircle className="text-primary/50" size={32} /></a>
      </div>
    </section>
  );
};
