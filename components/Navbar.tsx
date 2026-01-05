
import React from 'react';
import { THEMES } from '../constants';
import { Menu, Palmtree, User, Code, FolderOpen, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const changeTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 border-b border-base-content/10 px-4 md:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Menu className="w-5 h-5" />
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#github">GitHub</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold tracking-tighter">NIKHIL<span className="text-primary">.DEV</span></a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 font-medium">
          <li><a href="#about" className="hover:text-primary transition-colors flex items-center gap-1"><User size={18}/> About</a></li>
          <li><a href="#skills" className="hover:text-primary transition-colors flex items-center gap-1"><Code size={18}/> Skills</a></li>
          <li><a href="#projects" className="hover:text-primary transition-colors flex items-center gap-1"><FolderOpen size={18}/> Projects</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors flex items-center gap-1"><Mail size={18}/> Contact</a></li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn">
            <div className="indicator flex items-center gap-1">
              <Palmtree className="w-5 h-5" /> themes
            </div>
          </label>
          <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-64 bg-base-100 shadow-2xl border border-primary/20">
            <div className="card-body">
              <span className="font-bold text-lg">Select Theme</span>
              <div className="grid grid-cols-2 gap-2 h-64 overflow-y-auto pr-1">
                {THEMES.map((theme) => (
                  <button 
                    key={theme} 
                    className="btn btn-xs btn-outline capitalize" 
                    onClick={() => changeTheme(theme)}
                  >
                    {theme}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <a href="mailto:nikhilrakeshg@gmail.com" className="btn btn-primary btn-sm ml-4 hidden md:flex">Contact Me</a>
      </div>
    </div>
  );
};
