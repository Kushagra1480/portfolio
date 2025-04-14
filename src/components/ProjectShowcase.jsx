import React, {useState} from "react"
import codevisUrl from '../assets/codevis.png'
import jrunUrl from '../assets/jrun.png'
import ohackUrl from '../assets/ohack.png'
import cleverUrl from '../assets/clever.png'

import jg1url from '../assets/jg-1.png'
import jg2url from '../assets/jg-2.png'
import jg3url from '../assets/jg-3.png'
import jg5url from '../assets/jg-5.png'

import ca1url from '../assets/ca-1.png'
import ca2url from '../assets/ca-2.png'
import ca3url from '../assets/ca-3.png'
import ca4url from '../assets/ca-4.png'

import cd2url from '../assets/cd-2.png'
import cd3url from '../assets/cd-3.png'

import wv1url from '../assets/wv-1.png'



const ExpandedProjectCard = ({
  title,
  description,
  imageUrl,
  technologies,
  links,
  onClose,
}) => {
  const [selectedImage, setSelectedImage] = useState(imageUrl[0])
  const thumbnails = imageUrl

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm">
      <div className="w-full max-w-4xl border border-cyan-500/30 bg-slate-900/90 text-cyan-50 font-mono">
        <div className="relative">
          {/* Close button */}
          <button
            className="absolute top-2 right-2 z-10 p-1 bg-slate-900/80 border border-cyan-500/30 hover:bg-cyan-900/30 text-cyan-400 rounded"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <span className="sr-only">Close</span>
          </button>

          {/* Main image */}
          <div className="w-full h-[300px] md:h-[400px] relative border-b border-cyan-500/30 overflow-hidden">
            <img src={selectedImage} alt={title} className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4">
              <h2 className="text-2xl font-bold tracking-tight text-white">
                <span className="text-cyan-400">::</span> {title}
              </h2>
            </div>
          </div>

          {/* Thumbnail images */}
          <div className="grid grid-cols-4 gap-2 p-2 bg-slate-950 border-b border-cyan-500/30">
            {thumbnails.map((thumb, index) => (
              <button
                key={index}
                className={`relative h-16 md:h-20 w-full overflow-hidden border ${
                  selectedImage === thumb ? "border-cyan-400" : "border-cyan-500/20 hover:border-cyan-500/50"
                }`}
                onClick={() => setSelectedImage(thumb)}
              >
                <img src={thumb} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {/* Project description */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <div className="w-1 h-5 bg-cyan-400 mr-2"></div>
              <h3 className="text-cyan-400 font-bold">PROJECT_DETAILS</h3>
            </div>
            <p className="text-cyan-100 text-sm leading-relaxed">{description}</p>
          </div>

          {/* Technologies used */}
          <div className="mb-6">
            <div className="flex items-center mb-3">
              <div className="w-1 h-5 bg-cyan-400 mr-2"></div>
              <h3 className="text-cyan-400 font-bold">TECH_STACK</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-cyan-900/40 text-cyan-300 border border-cyan-500/30 px-2 py-1 text-xs rounded">
                  <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full mr-1.5"></span>
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="flex items-center mb-3">
              <div className="w-1 h-5 bg-cyan-400 mr-2"></div>
              <h3 className="text-cyan-400 font-bold">ACCESS_POINTS</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <a
                href={links[0]}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-cyan-500/30 bg-slate-800/60 text-cyan-300 hover:bg-cyan-900/30 hover:text-cyan-100 py-2 px-4 rounded flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>SOURCE_CODE</span>
              </a>
              {links[1] && (
                <a
                  href={links[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-cyan-500/30 bg-slate-800/60 text-cyan-300 hover:bg-cyan-900/30 hover:text-cyan-100 py-2 px-4 rounded flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  <span>LIVE_DEMO</span>
                </a>
              )}
            </div>
          </div>

          {/* Terminal footer */}
          <div className="mt-6 text-cyan-500/70 text-xs flex items-center">
            <div className="flex-1 border-t border-cyan-500/20"></div>
            <div className="px-4">PROJECT_ID::{title.toUpperCase().replace(' ', '_')}</div>
            <div className="flex-1 border-t border-cyan-500/20"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const HexBorder = ({ children, onClick }) => (
  <div className="relative group cursor-pointer" onClick={onClick}>
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur" />
    <div className="relative">
      {children}
    </div>
  </div>
);

const ProjectCard = ({ imageUrl, title, description, links, stack, onClick }) => {
  return (
    <HexBorder onClick={onClick}>
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
                onClick={(e) => e.stopPropagation()}
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
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="w-1.5 h-1.5 bg-cyan-400 group-hover:bg-cyan-300" />
                  DEPLOY_SITE
                </a>
              ) : (
                <button
                  disabled
                  className="w-full px-3 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-500 text-xs font-mono cursor-not-allowed flex items-center justify-center gap-2"
                  onClick={(e) => e.stopPropagation()}
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
            <div className="absolute inset-0 via-transparent to-transparent z-10" />
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-96 object-cover filter brightness-75 group-hover:brightness-100 transition-all duration-500"
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
            {links[0] ? (
                <a
                  href={links[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-slate-800 border border-blue-900/50 text-cyan-400 text-sm font-mono hover:border-cyan-500/50 hover:text-cyan-300 transition-colors flex items-center justify-center gap-2 group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="w-2 h-2 bg-cyan-400 group-hover:bg-cyan-300" />
                  SOURCE_CODE
                </a>
              ) : (
                <button
                  disabled
                  className="flex-1 px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-500 text-sm font-mono cursor-not-allowed flex items-center justify-center gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="w-2 h-2 bg-slate-500" />
                  CLASSIFIED
                </button>
              )}

              {links[1] ? (
                <a
                  href={links[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-blue-950 border border-blue-900/50 text-cyan-400 text-sm font-mono hover:border-cyan-500/50 hover:text-cyan-300 transition-colors flex items-center justify-center gap-2 group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="w-2 h-2 bg-cyan-400 group-hover:bg-cyan-300" />
                  DEPLOY_SITE
                </a>
              ) : (
                <button
                  disabled
                  className="flex-1 px-4 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-500 text-sm font-mono cursor-not-allowed flex items-center justify-center gap-2"
                  onClick={(e) => e.stopPropagation()}
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
  const [expandedProject, setExpandedProject] = useState(null);
  
  const projects = [
    {
      imageUrl: [jg1url, jg2url, jg3url, jg5url],
      title: "Job Growth",
      description: "Visualizing trends in employment from the BLS at the WP Carey Seidman Research Institute",
      links: [
        '',
        'https://dev-azsmart.ws.asu.edu/jg-charts-historical/',
      ],
      stack: ['Javascript', 'D3.js', 'PHP', 'CSS', 'Datatables', 'SQL', 'Python'],
    },
    {
      imageUrl: [ca1url, ca2url, ca3url, ca4url],
      title: "CAssess",
      description: "A platform that provides students with agile process metrics on their course projects",
      links: [
        '',
        ''
      ],
      stack: ['Vue', 'Typescript', 'Chart.js', 'Springboot', 'Flask', 'Python', 'Docker', 'SQL'],
    },
    {
      imageUrl: [ohackUrl],
      title: "2D/ 3D Rendering in the Web",
      description: "A tutorial website elaborating on graphics rendering in the web",
      links: [
        'https://ser-421.vercel.app/webgl',
        'https://github.com/KirtanSoni/2D-3D-in-Web'
      ],
      stack: ['Vue', 'Javascript', 'WebGL', 'ThreeJS', 'BabylonJS'],
    },
    {
      imageUrl: [codevisUrl, cd2url, cd3url],
      title: "CodeVis",
      description: "A graphing tool that converts natural language to various types of diagrams using AI.",
      links: [
        'https://github.com/Kushagra1480/sunhacks',
        'https://sunhacks-xi.vercel.app/',
      ],
      stack: ['React', 'Javascript', 'Flask', 'Langchain'],
    },
    {
      imageUrl: [wv1url],
      title: "Word Weave",
      description: "LLM Word Search Game",
      links: [
        'https://words-weave.com/',
        ''
      ],
      stack: ['React', 'Javascript', 'Golang', 'Python', 'SQlite'],
    },
    {
      imageUrl: [jrunUrl],
      title: "Job Runner",
      description: "A CLI tool for ease your SWE job hunt, displays new job listings and saves applications.",
      links: [
        'https://github.com/Kushagra1480/Job-Runner'
      ],
      stack: ['Python', 'Rich', 'PostgreSQL'],
    },
    {
      imageUrl: [ohackUrl],
      title: "Intake Management Platform",
      description: "Built a platform for the Nature's Edge Wildlife and Reptile Rescue NPO during Opportunity Hack 2024.",
      links: [
        'https://github.com/2024-Arizona-Opportunity-Hack/SPARKS-Nature-sEdgeWildlife-Nature-sEdgeWildlifeandReptileRescueDigitalTransformation'
      ],
      stack: ['React', 'Fast API', 'PostgreSQL'],
    },
    {
      imageUrl: [cleverUrl],
      title: "Agile Metrics",
      description: "A tool for measuring software process agility based on certain metrics using data from Taiga.",
      links: [
        'https://github.com/SER516-Clever/SER516-Team-Clever'
      ],
      stack: ['React', 'Fast API', 'Spring Boot', 'Docker'],
    },
  ];

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
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          links={project.links}
          stack={project.stack}
          imageUrl={project.imageUrl[0]}
          onClick={() => setExpandedProject(project)}
        />
      ))}
      </div>
      
      {/* Modal for expanded project */}
      {expandedProject && (
        <ExpandedProjectCard
          title={expandedProject.title}
          description={expandedProject.description}
          imageUrl={expandedProject.imageUrl}
          technologies={expandedProject.stack}
          links={expandedProject.links}
          onClose={() => setExpandedProject(null)}
        />
      )}
    </div>
  );
};