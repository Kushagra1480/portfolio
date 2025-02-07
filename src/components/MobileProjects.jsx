import React from 'react';

const MobileProjectCard = ({ imageUrl, title, description, links, stack }) => {
  return (
    <div className="bg-slate-900/95 border-b border-blue-900/50">
      {/* Header with small image */}
      <div className="relative h-24">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-10" />
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 z-20 p-3 flex flex-col justify-end">
          <div className="text-[10px] text-cyan-400 font-mono flex justify-between items-center">
            <span>PROJECT_ID::{title.toUpperCase().replace(' ', '_')}</span>
            <span>STATUS::ACTIVE</span>
          </div>
          <h2 className="text-lg text-slate-100 font-mono">{title}</h2>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 space-y-3">
        {/* Description */}
        <div>
          <div className="text-[10px] text-cyan-400 font-mono mb-1">MISSION_BRIEF</div>
          <p className="text-sm text-slate-300">{description}</p>
        </div>

        {/* Tech Stack */}
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

        {/* Actions */}
        <div className="grid grid-cols-2 gap-2">
          <a
            href={links[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-slate-800 border border-blue-900/50 text-[10px] font-mono text-center"
          >
            <div className="text-cyan-400">SOURCE_CODE</div>
            <div className="text-slate-400 mt-0.5">ACCESS::GITHUB</div>
          </a>

          {links[1] ? (
            <a
              href={links[1]}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-blue-950 border border-blue-900/50 text-[10px] font-mono text-center"
            >
              <div className="text-cyan-400">DEPLOYMENT</div>
              <div className="text-slate-400 mt-0.5">STATUS::LIVE</div>
            </a>
          ) : (
            <div
              className="px-3 py-2 bg-slate-800/50 border border-slate-700/50 text-[10px] font-mono text-center"
            >
              <div className="text-slate-500">DEPLOYMENT</div>
              <div className="text-slate-600 mt-0.5">STATUS::PENDING</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MobileProjects = ({ projects }) => {
  return (
    <div className="lg:hidden">
      {/* Projects Header */}
      <div className="bg-slate-900/95 px-3 py-2 border-b border-blue-900/50">
        <div className="flex justify-between items-center text-[10px] font-mono">
          <span className="text-cyan-400">MISSION_LOGS::ACTIVE</span>
          <span className="text-slate-400">TOTAL::{projects.length}</span>
        </div>
      </div>

      {/* Projects List */}
      <div className="divide-y divide-blue-900/50">
        {projects.map((project, index) => (
          <MobileProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default MobileProjects;