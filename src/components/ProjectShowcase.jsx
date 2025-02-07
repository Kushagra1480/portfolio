import React, {useState} from "react"
import codevisUrl from '../assets/codevis.png'
import jrunUrl from '../assets/jrun.png'
import ohackUrl from '../assets/ohack.png'
import cleverUrl from '../assets/clever.png'


const HexBorder = ({ children }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur" />
    <div className="relative">
      {children}
    </div>
  </div>
);

const ProjectCard = ({ imageUrl, title, description, links, stack }) => {
  return (
    <HexBorder>
      <div className="relative bg-slate-900/90 border border-blue-900/50 group">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-16 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
        <div className="absolute top-0 left-0 w-px h-16 bg-gradient-to-b from-cyan-500 to-transparent" />
        
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          {/* Header with small image */}
          <div className="relative h-32">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-10" />
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover filter brightness-50"
            />
            <div className="absolute inset-0 z-20 p-4 flex flex-col justify-end">
              <div className="text-xs text-cyan-400 font-mono">PROJECT_NAME</div>
              <h2 className="text-lg font-bold text-slate-100">{title}</h2>
              <div className="text-[10px] font-mono text-slate-400 mt-1">
                ID::{title.toUpperCase().replace(' ', '_')}
              </div>
            </div>
          </div>

          {/* Content section */}
          <div className="p-3 space-y-3">
            {/* Description */}
            <div>
              <div className="text-[10px] text-cyan-400 font-mono mb-1">MISSION_BRIEF</div>
              <p className="text-xs text-slate-300">{description}</p>
            </div>

            {/* Tech Stack - Horizontal scroll for mobile */}
            <div>
              <div className="text-[10px] text-cyan-400 font-mono mb-1">TECH_STACK</div>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {stack.map((tech, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 px-2 py-1 bg-blue-950/50 border border-blue-900/50 text-cyan-400 text-[10px] font-mono"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            {/* Actions - Stacked for mobile */}
            <div className="flex flex-col gap-2">
              <a
                href={links[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-3 py-2 bg-slate-800 border border-blue-900/50 text-cyan-400 text-xs font-mono hover:border-cyan-500/50 hover:text-cyan-300 transition-colors flex items-center justify-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 bg-cyan-400 group-hover:bg-cyan-300" />
                SOURCE_CODE
              </a>

              {links[1] ? (
                <a
                  href={links[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-3 py-2 bg-blue-950 border border-blue-900/50 text-cyan-400 text-xs font-mono hover:border-cyan-500/50 hover:text-cyan-300 transition-colors flex items-center justify-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-cyan-400 group-hover:bg-cyan-300" />
                  DEPLOY_SITE
                </a>
              ) : (
                <button
                  disabled
                  className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-500 text-xs font-mono cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-slate-500" />
                  DEPLOY_PENDING
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original design */}
        <div className="hidden lg:block">
          {/* Image section */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-64 object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500"
            />
            <div className="absolute top-2 right-2 bg-slate-900/90 px-2 py-1 text-xs font-mono text-cyan-400 border border-blue-900/50">
              PROJECT_ID::{title.toUpperCase().replace(' ', '_')}
            </div>
          </div>

          {/* Content section */}
          <div className="p-4 space-y-4">
            <div className="space-y-1">
              <div className="text-xs text-cyan-400 font-mono">PROJECT_NAME</div>
              <h2 className="text-xl font-bold text-slate-100">{title}</h2>
            </div>

            <div className="space-y-1">
              <div className="text-xs text-cyan-400 font-mono">MISSION_BRIEF</div>
              <p className="text-sm text-slate-300">{description}</p>
            </div>

            <div className="space-y-2">
              <div className="text-xs text-cyan-400 font-mono">TECH_STACK</div>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech, index) => (
                  <div 
                    key={index}
                    className="px-2 py-1 bg-blue-950/50 border border-blue-900/50 text-cyan-400 text-xs font-mono"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <a
                href={links[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-slate-800 border border-blue-900/50 text-cyan-400 text-sm font-mono hover:border-cyan-500/50 hover:text-cyan-300 transition-colors flex items-center justify-center gap-2 group"
              >
                <span className="w-2 h-2 bg-cyan-400 group-hover:bg-cyan-300" />
                SOURCE_CODE
              </a>

              {links[1] ? (
                <a
                  href={links[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-blue-950 border border-blue-900/50 text-cyan-400 text-sm font-mono hover:border-cyan-500/50 hover:text-cyan-300 transition-colors flex items-center justify-center gap-2 group"
                >
                  <span className="w-2 h-2 bg-cyan-400 group-hover:bg-cyan-300" />
                  DEPLOY_SITE
                </a>
              ) : (
                <button
                  disabled
                  className="flex-1 px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-500 text-sm font-mono cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <span className="w-2 h-2 bg-slate-500" />
                  DEPLOY_PENDING
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </HexBorder>
  );
};
  
  export const ProjectShowcase = () => {
    return (
      <div className="relative p-4">
        <div className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-2">
          <div className="w-2 h-8 bg-cyan-500" />
          <div>
            <div className="text-xs text-cyan-400 font-mono">SYSTEM</div>
            PROJECT_ARCHIVES
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          <ProjectCard
            imageUrl={codevisUrl}
            title="CodeVis"
            description="A graphing tool that converts natural language to various types of diagrams using AI."
            links={[
              'https://github.com/Kushagra1480/sunhacks',
              'https://sunhacks-xi.vercel.app/',
            ]}
            stack={['React', 'Flask', 'Langchain']}
          />
          <ProjectCard
            imageUrl={jrunUrl}
            title="Job Runner"
            description="A CLI tool for ease your SWE job hunt, displays new job listings and saves applications."
            links={[
              'https://github.com/Kushagra1480/Job-Runner'
            ]}
            stack={['Python', 'Rich', 'PostgreSQL']}
          />
          <ProjectCard
            imageUrl={ohackUrl}
            title="Intake Management Platform"
            description="Built a platform for the Nature's Edge Wildlife and Reptile Rescue NPO during Opportunity Hack 2024."
            links={[
              'https://github.com/2024-Arizona-Opportunity-Hack/SPARKS-Nature-sEdgeWildlife-Nature-sEdgeWildlifeandReptileRescueDigitalTransformation'
            ]}
            stack={['React', 'Fast API', 'PostgreSQL']}
          />
          <ProjectCard
            imageUrl={cleverUrl}
            title="Agile Metrics"
            description="A tool for measuring software process agility based on certain metrics using data from Taiga."
            links={[
              'https://github.com/SER516-Clever/SER516-Team-Clever'
            ]}
            stack={['React', 'Fast API', 'Spring Boot', 'Docker']}
          />
        </div>
      </div>
    );
  };