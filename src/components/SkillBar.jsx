import React from "react";

const SkillsInterface = ({ isMobile }) => {
  const skills = {
    'CORE_STACK': [
      'Javascript', 'Java', 'Python', 'C++'
    ],
    'DATA_SYSTEMS': [
      'SQL'
    ],
    'DEV_OPS': [
      'Docker', 'AWS', 'CI/CD', 'Git'
    ],
    'FRAMEWORKS': [
      'React', 'Express', 'FastAPI', 'Spring Boot', 'Vue'
    ]
  };

  if (isMobile) {
    return (
      <div className="bg-slate-900/95 p-3 border-b border-blue-900/50">
        <div className="flex justify-between text-[10px] font-mono mb-3">
          <span className="text-cyan-400">SYSTEM_CAPABILITIES</span>
          <span className="text-slate-400">MODULES::ACTIVE</span>
        </div>
        
        <div className="space-y-3">
          {Object.entries(skills).map(([category, techList]) => (
            <div key={category}>
              <div className="text-[10px] text-cyan-400 font-mono mb-1 flex items-center gap-2">
                <div className="w-1 h-1 bg-cyan-400" />
                {category}
              </div>
              <div className="flex flex-wrap gap-2">
                {techList.map((tech) => (
                  <div 
                    key={tech}
                    className="px-2 py-1 bg-blue-950/50 border border-blue-900/50 text-[10px] font-mono text-slate-300"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900/90 p-4 border border-blue-900/50">
      <div className="flex justify-between items-center mb-4">
        <div className="text-xs text-cyan-400 font-mono">SYSTEM_CAPABILITIES</div>
        <div className="text-xs text-slate-400 font-mono">
          TOTAL_MODULES::{Object.values(skills).flat().length}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, techList]) => (
          <div key={category} className="relative">
            <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-cyan-500 to-transparent" />
            <div className="pl-4">
              <div className="text-xs text-cyan-400 font-mono mb-2 flex items-center gap-2">
                <div className="w-1 h-1 bg-cyan-400" />
                {category}
              </div>
              <div className="flex flex-wrap gap-2">
                {techList.map((tech) => (
                  <div 
                    key={tech}
                    className="px-2 py-1 bg-blue-950/50 border border-blue-900/50 text-sm font-mono text-slate-300"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StatusAlert = ({ isMobile }) => (
  <div className={`
    bg-blue-950/50 border border-blue-900/50
    ${isMobile ? 'px-3 py-2' : 'px-4 py-2'}
  `}>
    <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 bg-cyan-400 animate-pulse" />
      <div className={`font-mono ${isMobile ? 'text-xs' : 'text-sm'} text-cyan-400`}>
        BROADCAST::RECRUITMENT_STATUS
      </div>
    </div>
    <div className={`
      ml-3.5 font-mono text-slate-300 mt-1
      ${isMobile ? 'text-xs' : 'text-sm'}
    `}>
      Currently seeking Software Engineering roles for May 2025
    </div>
  </div>
);

export default SkillsInterface