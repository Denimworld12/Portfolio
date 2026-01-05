
import React from 'react';
import { Project, Skill } from './types';

export const THEMES = [
  "cupcake", "dark", "light", "bumblebee", "emerald", "corporate", "synthwave", 
  "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", 
  "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", 
  "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"
];

export const SKILL_CATEGORIES = {
  frontend: [
    { name: "React.js", icon: "fab fa-react", color: "text-[#61DAFB]" },
    { name: "Next.js", icon: "fas fa-caret-up", color: "text-black" },
    { name: "JavaScript", icon: "fab fa-js", color: "text-[#F7DF1E]" },
    { name: "TypeScript", icon: "fas fa-code", color: "text-[#3178C6]" },
    { name: "HTML5", icon: "fab fa-html5", color: "text-[#E34F26]" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "text-[#1572B6]" },
    { name: "Tailwind CSS", icon: "fas fa-wind", color: "text-[#38B2AC]" },
    { name: "Redux", icon: "fas fa-layer-group", color: "text-[#764ABC]" },
    { name: "Chart.js", icon: "fas fa-chart-line", color: "text-[#FF6384]" },
  ],
  backend: [
    { name: "Node.js", icon: "fab fa-node-js", color: "text-[#339933]" },
    { name: "Express.js", icon: "fas fa-server", color: "text-[#000000]" },
    { name: "MongoDB", icon: "fas fa-leaf", color: "text-[#47A248]" },
    { name: "PostgreSQL", icon: "fas fa-database", color: "text-[#4169E1]" },
    { name: "Supabase", icon: "fas fa-bolt", color: "text-[#3ECF8E]" },
    { name: "REST APIs", icon: "fas fa-exchange-alt", color: "text-[#FF6C37]" },
    { name: "SQL", icon: "fas fa-table", color: "text-[#4479A1]" },
    { name: "Socket.io", icon: "fas fa-plug", color: "text-[#010101]" },
  ],
  tools: [
    { name: "Git", icon: "fab fa-git-alt", color: "text-[#F05032]" },
    { name: "GitHub", icon: "fab fa-github", color: "text-[#181717]" },
    { name: "Postman", icon: "fas fa-rocket", color: "text-[#FF6C37]" },
    { name: "Docker", icon: "fab fa-docker", color: "text-[#2496ED]" },
    { name: "Firebase", icon: "fas fa-fire", color: "text-[#FFCA28]" },
    { name: "Figma", icon: "fab fa-figma", color: "text-[#F24E1E]" },
    { name: "VS Code", icon: "fas fa-code", color: "text-[#007ACC]" },
    { name: "Vercel", icon: "fas fa-play", color: "text-black" },
  ]
};

export const PROJECTS: Project[] = [
  {
    title: "Mitrata - Social Platform",
    description: "Built comprehensive social networking platform with real-time messaging using Socket.io and PostgreSQL via Supabase.",
    link: "https://social-media-eight-mu-88.vercel.app",
    tags: ["React", "Socket.io", "mongoDb", "responsive"],
    image: "/image.png",
    date: "Dec 2024"
  },
  {
    title: "Agriculture Assistant",
    description: "Full-stack web platform helping 100+ farmers make data-driven decisions by integrating real-time pricing.",
    link: "https://agriculture-assitant-2-using-react.vercel.app",
    tags: ["React", "API Integration", "Node.js"],
    image: "/agriculture.png",
    date: "Jan 2024"
  },
  {
    title: "FREE AI-POWERED PERSONAL TRAINING",
    description: "AI-powered personalized workout plans created by our AI trainer Easy-to-use, effective workout planner.",
    link: "https://plan-fit.netlify.app",
    tags: ["MERN", "AI"],
    image: "/planfit.png",
    date: "July 2025"
  },
  {
    title: "Trading-Mitra",
    description: "Full-stack trading platform using MERN stack with live market data streams and portfolio tracking.",
    link: "https://zerodha-stock-trading-platform.vercel.app",
    tags: ["MongoDB", "Express", "React", "Node"],
    image: "tradingMitra.png",
    date: "May 2025"
  },
  
];
