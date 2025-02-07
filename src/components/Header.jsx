import React from "react";
import MapComponent from "./Map";
import avatarUrl from '../assets/avatartion.png'
import StatusAlert from './StatusAlert'
import SkillsInterface from './SkillBar'

const HexPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse">
        <path 
          d="M25 0L50 14.4v28.8L25 43.4L0 28.8V14.4z" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hexagons)" />
  </svg>
);

const GlowingBorder = ({ children }) => (
  <div className="relative group">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20 group-hover:opacity-40 transition duration-500 blur-sm" />
    {children}
  </div>
);

const LinkButton = ({ href, children, className = "" }) => (
  <GlowingBorder>
    <a
      href={href}
      className={`relative block px-3 py-2 bg-slate-900/90 text-cyan-400 hover:text-cyan-300 font-mono text-xs lg:text-sm border border-blue-900/50 hover:border-cyan-500/50 transition-colors ${className}`}
      target="_blank" rel="noopener noreferrer"
    >
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-transparent opacity-50" />
      {children}
    </a>
  </GlowingBorder>
);

export const Header = () => {
  return (
    <div className="p-2 lg:p-4 w-full max-w-7xl mx-auto">
      <StatusAlert isMobile={false} />
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 border border-blue-900/50">
        <HexPattern />
        
        {/* Mobile Layout */}
        <div className="block lg:hidden">
          {/* Header Status Bar */}
          <div className="flex justify-between items-center px-3 py-1 text-[10px] font-mono border-b border-blue-900/50">
            <div className="text-cyan-400">SYSTEM_STATUS::ONLINE</div>
            <div className="text-slate-400">ID::DEV_4872</div>
          </div>

          {/* Compact Profile Section */}
          <div className="relative p-3">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-2xl" />
            
            {/* Profile Header */}
            <div className="flex items-start gap-3">
              <GlowingBorder>
                <div className="relative">
                  <img 
                    src={avatarUrl}
                    alt="avatar"
                    className="w-24 h-24 border-2 border-cyan-500/50 object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-full h-full border-2 border-blue-500/30" />
                </div>
              </GlowingBorder>
              
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-cyan-400 font-mono">DEVELOPER</div>
                <h1 className="text-xl font-bold text-slate-100 font-mono truncate">
                  KUSHAGRA_KARTIK
                  <span className="animate-pulse">_</span>
                </h1>
                <div className="mt-2 flex flex-wrap gap-2">
                  <div className="px-2 py-1 bg-blue-950/50 border border-blue-900/50 text-cyan-400 text-[10px] font-mono">
                    SOFTWARE_ENGINEER
                  </div>
                  <div className="px-2 py-1 bg-blue-950/50 border border-blue-900/50 text-cyan-400 text-[10px] font-mono">
                    FULL_STACK
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons - Horizontal Scroll */}
            <div className="mt-3 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <LinkButton href="https://drive.google.com/file/d/1icqMdZlcepgDdxU_jUc2C33GZTs_0LWU/view?usp=drive_link" className="whitespace-nowrap">
                <span className="font-mono">{">"} RESUME.pdf</span>
              </LinkButton>
              <LinkButton href="https://www.linkedin.com/in/kushagra-kartik/" className="whitespace-nowrap">
                <span className="font-mono">{">"} CONNECT.linkedin</span>
              </LinkButton>
              <LinkButton href="https://github.com/Kushagra1480" className="whitespace-nowrap">
                <span className="font-mono">{">"} SOURCE.github</span>
              </LinkButton>
            </div>
          </div>

          {/* Compact Map Section */}
          <div className="relative px-3 pb-3">
            <div className="flex justify-between items-center mb-2">
              <div className="text-[10px] text-cyan-400 font-mono">CURRENT_LOCATION</div>
              <div className="text-[10px] text-slate-400 font-mono">SIGNAL_STRENGTH::87%</div>
            </div>
            <GlowingBorder>
              <div className="relative bg-slate-900/90 p-1">
                <div className="h-36">
                  <MapComponent />
                </div>
                <div className="absolute bottom-2 right-2 bg-slate-900/90 px-2 py-1 text-[10px] text-cyan-400 font-mono border border-blue-900/50">
                  TEMPE_AZ :: 33.4255° N, 111.9400° W
                </div>
              </div>
            </GlowingBorder>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-8">
          {/* Profile Section */}
          <div className="p-6 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-2xl" />
            <GlowingBorder>
              <div className="relative">
                <img 
                  src={avatarUrl}
                  alt="avatar"
                  className="w-48 h-48 border-2 border-cyan-500/50 object-cover"
                />
                <div className="absolute -bottom-2 -right-2 w-full h-full border-2 border-blue-500/30" />
              </div>
            </GlowingBorder>
            
            <div className="mt-6 space-y-4">
              <div className="space-y-1">
                <div className="text-xs text-cyan-400 font-mono">DEVELOPER</div>
                <h1 className="text-4xl font-bold text-slate-100 font-mono">
                  KUSHAGRA_KARTIK
                  <span className="animate-pulse">_</span>
                </h1>
              </div>
              
              <div className="pt-4 space-y-2">
                <LinkButton href="https://drive.google.com/file/d/1icqMdZlcepgDdxU_jUc2C33GZTs_0LWU/view?usp=drive_link">
                  <span className="font-mono">{">"} RESUME.pdf</span>
                </LinkButton>
                <LinkButton href="https://www.linkedin.com/in/kushagra-kartik/">
                  <span className="font-mono">{">"} CONNECT.linkedin</span>
                </LinkButton>
                <LinkButton href="https://github.com/Kushagra1480">
                  <span className="font-mono">{">"} SOURCE.github</span>
                </LinkButton>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="relative p-6">
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/10 blur-2xl" />
            <div className="text-xs text-cyan-400 font-mono mb-2">CURRENT_LOCATION</div>
            <GlowingBorder>
              <div className="relative bg-slate-900/90 p-1">
                <MapComponent />
                <div className="absolute bottom-2 right-2 bg-slate-900/90 px-2 py-1 text-xs text-cyan-400 font-mono border border-blue-900/50">
                  TEMPE_AZ :: 33.4255° N, 111.9400° W
                </div>
              </div>
            </GlowingBorder>
          </div>
        </div>
        <div className="border-t border-blue-900/50">
          <SkillsInterface isMobile={false} />
        </div>
      </div>
    </div>
  );
};

export default Header;