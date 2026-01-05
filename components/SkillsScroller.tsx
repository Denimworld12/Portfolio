
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const SkillItem = ({ skill }: { skill: any }) => (
  <div className="group glass flex items-center gap-3 px-6 py-4 rounded-2xl shadow-sm border border-base-content/10 hover:border-primary/50 transition-all duration-300">
    <i className={`${skill.icon} ${skill.color} text-2xl group-hover:scale-110 transition-transform`}></i>
    <span className="text-lg font-bold tracking-tight">{skill.name}</span>
  </div>
);

export const SkillsScroller: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-base-200/50 overflow-hidden space-y-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase italic">
          Tech <span className="text-primary">Ecosystem</span>
        </h2>
        <div className="w-24 h-2 bg-primary mx-auto mt-4 rounded-full opacity-30"></div>
      </div>

      {/* Frontend Row */}
      <div className="space-y-4">
        <h3 className="container mx-auto px-6 text-xl font-black uppercase text-base-content/40 tracking-widest text-center">Frontend Mastery</h3>
        <div className="relative flex items-center overflow-hidden h-24">
          <div className="infinite-scroll flex gap-8 whitespace-nowrap px-4">
            {[...SKILL_CATEGORIES.frontend, ...SKILL_CATEGORIES.frontend, ...SKILL_CATEGORIES.frontend].map((skill, idx) => (
              <SkillItem key={idx} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      {/* Backend Row (Reverse) */}
      <div className="space-y-4">
        <h3 className="container mx-auto px-6 text-xl font-black uppercase text-base-content/40 tracking-widest text-center">Backend Engineering</h3>
        <div className="relative flex items-center overflow-hidden h-24">
          <div className="infinite-scroll-reverse flex gap-8 whitespace-nowrap px-4">
            {[...SKILL_CATEGORIES.backend, ...SKILL_CATEGORIES.backend, ...SKILL_CATEGORIES.backend].map((skill, idx) => (
              <SkillItem key={idx} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      {/* Tools Row */}
      <div className="space-y-4">
        <h3 className="container mx-auto px-6 text-xl font-black uppercase text-base-content/40 tracking-widest text-center">Tools & DevOps</h3>
        <div className="relative flex items-center overflow-hidden h-24">
          <div className="infinite-scroll flex gap-8 whitespace-nowrap px-4">
            {[...SKILL_CATEGORIES.tools, ...SKILL_CATEGORIES.tools, ...SKILL_CATEGORIES.tools].map((skill, idx) => (
              <SkillItem key={idx} skill={skill} />
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-base-content/40 text-sm font-mono animate-pulse">Hover to pause flow</p>
    </section>
  );
};
