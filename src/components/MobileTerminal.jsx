import React, { useState } from 'react';
import avatarUrl from '../assets/avatartion.png';
import codevisUrl from '../assets/codevis.png'
import MobileProjects from './MobileProjects'
import StatusAlert from './StatusAlert'
import SkillsInterface from './SkillBar';

const MobileTerminal = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const projects = [
    {
      imageUrl: codevisUrl,
      title: "CodeVis",
      description: "A graphing tool that converts natural language to various types of diagrams using AI.",
      links: [
        'https://github.com/Kushagra1480/sunhacks',
        'https://sunhacks-xi.vercel.app/',
      ],
      stack: ['React', 'Flask', 'Langchain']
    },
    {
      imageUrl: codevisUrl,
      title: "Job Runner",
      description: "A CLI tool for ease your SWE job hunt, displays new job listings and saves applications.",
      links: [
        'https://github.com/Kushagra1480/Job-Runner',
        'https://sunhacks-xi.vercel.app/',
      ],
      stack: ['Python', 'Rich', 'PostgreSQL']
    },
    {
      imageUrl: codevisUrl,
      title: "Intake Management Platform",
      description: "Built a platform for the Nature's Edge Wildlife and Reptile Rescue NPO during Opportunity Hack 2024.",
      links: [
        'https://github.com/2024-Arizona-Opportunity-Hack/SPARKS-Nature-sEdgeWildlife-Nature-sEdgeWildlifeandReptileRescueDigitalTransformation',
        'https://sunhacks-xi.vercel.app/',
      ],
      stack: ['React', 'Fast API', 'PostgreSQL']
    },
    {
      imageUrl: codevisUrl,
      title: "Agile Metrics",
      description: "A tool for measuring software process agility based on certain metrics using data from Taiga.",
      links: [
        'https://github.com/SER516-Clever/SER516-Team-Clever',
        'https://sunhacks-xi.vercel.app/',
      ],
      stack: ['React', 'Fast API', 'Spring Boot', 'Docker']
    }
  ];

  return (
    <div className="lg:hidden">
      {/* Status Bar */}
      <StatusAlert isMobile={true} />
      <div className="bg-slate-900/95 px-3 py-1 border-b border-blue-900/50">
        <div className="flex justify-between items-center text-[10px] font-mono">
          <div className="text-cyan-400">TERMINAL_OS::v2.5.0</div>
          <div className="text-slate-400">{new Date().toLocaleTimeString()}</div>
        </div>
      </div>

      {/* Main Terminal */}
      <div className="bg-slate-900/95 border-b border-blue-900/50">
        {/* Quick Stats Row */}
        <div className="flex items-center gap-3 p-3 border-b border-blue-900/50">
          <div className="relative">
            <img 
              src={avatarUrl}
              alt="avatar"
              className="w-16 h-16 border border-cyan-500/50 object-cover"
            />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-400 animate-pulse" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="text-[10px] text-cyan-400 font-mono">BRIDGE_LINK::ACTIVE</div>
            <div className="text-lg text-slate-100 font-mono truncate">KUSHAGRA_KARTIK</div>
            <div className="flex gap-2 mt-1">
              <div className="px-1.5 py-0.5 bg-blue-950/50 border border-blue-900/50 text-cyan-400 text-[10px] font-mono">
                SIGNAL::87%
              </div>
              <div className="px-1.5 py-0.5 bg-blue-950/50 border border-blue-900/50 text-cyan-400 text-[10px] font-mono">
                CHIRAL::OK
              </div>
            </div>
          </div>
        </div>

        {/* Location Ping */}
        <div className="px-3 py-2 border-b border-blue-900/50">
          <div className="flex justify-between text-[10px] font-mono">
            <span className="text-cyan-400">LOCATION_PING</span>
            <span className="text-slate-400">LAST_UPDATE::2MIN</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-1.5 h-1.5 bg-cyan-400 animate-pulse" />
            <div className="text-sm text-slate-300 font-mono">TEMPE_AZ :: 33.4255° N, 111.9400° W</div>
          </div>
        </div>

        {/* Quick Access Panel */}
        <div className="p-3">
          <div className="text-[10px] text-cyan-400 font-mono mb-2">QUICK_ACCESS::DATA</div>
          <div className="grid grid-cols-2 gap-2">
            <button 
              onClick={() => window.open('/resume', '_blank')}
              className="px-3 py-2 bg-slate-800 border border-blue-900/50 text-left"
            >
              <div className="text-[10px] text-cyan-400 font-mono">DOWNLOAD_PKG</div>
              <div className="text-sm text-slate-300 font-mono">RESUME.pdf</div>
              <div className="text-[10px] text-slate-500 font-mono mt-1">SIZE::2.4MB</div>
            </button>
            
            <button 
              onClick={() => window.open('https://github.com/yourusername', '_blank')}
              className="px-3 py-2 bg-slate-800 border border-blue-900/50 text-left"
            >
              <div className="text-[10px] text-cyan-400 font-mono">ACCESS_REPO</div>
              <div className="text-sm text-slate-300 font-mono">GitHub</div>
              <div className="text-[10px] text-slate-500 font-mono mt-1">STATUS::ACTIVE</div>
            </button>
          </div>
        </div>

        {/* System Stats */}
        <div className="p-3 border-t border-blue-900/50">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between w-full text-[10px] font-mono mb-2"
          >
            <span className="text-cyan-400">SYSTEM_METRICS</span>
            <span className="text-slate-400">{isExpanded ? 'COLLAPSE' : 'EXPAND'}</span>
          </button>
          
          {isExpanded && (
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div>
                <div className="text-[10px] text-slate-400 font-mono">PROJECTS</div>
                <div className="text-sm text-slate-300 font-mono">07</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-mono">COMMITS</div>
                <div className="text-sm text-slate-300 font-mono">238</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-mono">LANGUAGES</div>
                <div className="text-sm text-slate-300 font-mono">05</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-400 font-mono">UPTIME</div>
                <div className="text-sm text-slate-300 font-mono">98.2%</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <SkillsInterface isMobile={true} />
      <MobileProjects projects={projects} />
    </div>
  );
};

export default MobileTerminal;