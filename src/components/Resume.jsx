import React from 'react';

const SectionHeader = ({ title }) => (
  <div className="relative mb-6">
    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-8 bg-cyan-500" />
    <h2 className="text-xl font-mono pl-4 text-slate-200">
      <span className="text-xs text-cyan-400 block">SYSTEM_MODULE</span>
      {title.toUpperCase()}
    </h2>
    <div className="mt-2 h-px bg-gradient-to-r from-cyan-500/50 via-slate-700 to-transparent" />
  </div>
);

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-900 relative print:bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI0My4zIiB2aWV3Qm94PSIwIDAgNTAgNDMuMyI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWEzNjVkIiBzdHJva2Utd2lkdGg9IjAuNSIgZD0iTTI1IDBMNTAgMTQuNHYyOC44TDI1IDQzLjNMMCwyOC44VjE0LjR6Ii8+PC9zdmc+')] opacity-5" />

      {/* Header */}
      <div className="relative mb-8 text-center">
        <div className="text-xs text-cyan-400 font-mono mb-1">OPERATOR_PROFILE</div>
        <h1 className="text-3xl font-bold text-slate-100 font-mono">KUSHAGRA_KARTIK</h1>
        <p className="text-cyan-400 font-mono mt-1">SOFTWARE_ENGINEER</p>
        <div className="mt-3 flex flex-wrap justify-center gap-4 text-sm text-slate-400 font-mono">
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 bg-cyan-400" />
            kushagrakartik1480@gmail.com
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 bg-cyan-400" />
            (602)-218 1122
          </div>
          <div className="flex items-center gap-1">
            <span className="w-1 h-1 bg-cyan-400" />
            linkedin.com/in/kushagra-kartik
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-8">
        <SectionHeader title="Education" />
        <div className="space-y-4">
          {[
            {
              degree: "Master of Science in Software Engineering",
              school: "Arizona State University",
              date: "Aug 2023 - May 2025 (Expected)",
              gpa: "3.78/4.0"
            },
            {
              degree: "Bachelor of Science in Information Technology",
              school: "Netaji Subhas University of Technology",
              date: "Aug 2019 - May 2023",
              gpa: "7.54/10.0"
            }
          ].map((edu, index) => (
            <div key={index} className="relative pl-4 border-l border-blue-900/50">
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-500/50 to-transparent" />
              <h3 className="text-lg font-medium text-slate-200">{edu.degree}</h3>
              <p className="text-slate-400 font-mono text-sm">{edu.school}</p>
              <div className="flex items-center gap-4 mt-1 text-xs">
                <span className="text-cyan-400 font-mono">{edu.date}</span>
                <span className="text-slate-400 font-mono">GPA: {edu.gpa}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <SectionHeader title="Experience" />
        <div className="relative pl-4 border-l border-blue-900/50">
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-500/50 to-transparent" />
          <h3 className="text-lg font-medium text-slate-200">Web Developer</h3>
          <p className="text-slate-400 font-mono text-sm">WP Carey Seidman Research Institute</p>
          <p className="text-cyan-400 font-mono text-xs mb-2">Jan 2024 - Present</p>
          <ul className="space-y-2">
            {[
              "Led complete redesign and overhaul of NCI SouthWest website (ncisouthwest.org), modernizing user interface and improving functionality",
              "Achieved 80% reduction in load times for Job Growth section through implementation of database indexing and optimization techniques",
              "Developed automated data extraction pipeline from Bureau of Labor Statistics using SQL and Python"
            ].map((point, index) => (
              <li key={index} className="flex gap-2 text-slate-300 text-sm">
                <span className="text-cyan-400 mt-1.5">›</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className="mb-8">
        <SectionHeader title="Projects" />
        <div className="relative pl-4 border-l border-blue-900/50">
          <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-500/50 to-transparent" />
          <h3 className="text-lg font-medium text-slate-200">Agile Metrics</h3>
          <a href="#" className="text-cyan-400 font-mono text-xs hover:text-cyan-300">GITHUB_REPOSITORY</a>
          <ul className="space-y-2 mt-2">
            {[
              "Architected full-stack application using ReactJS and Java Spring Boot for Taiga project metrics analysis",
              "Implemented microservices architecture using Docker and established CI/CD pipeline via GitHub Actions",
              "Successfully deployed application on AWS, integrating Taiga REST API for data extraction"
            ].map((point, index) => (
              <li key={index} className="flex gap-2 text-slate-300 text-sm">
                <span className="text-cyan-400 mt-1.5">›</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div>
        <SectionHeader title="Skills" />
        <div className="flex flex-wrap gap-2">
          {[
            "React", "Node.js", "Tailwind CSS", "Python", "SQL", "Docker", "Git"
          ].map((skill, index) => (
            <div 
              key={index}
              className="px-3 py-1 bg-blue-950/50 border border-blue-900/50 text-cyan-400 text-sm font-mono hover:border-cyan-500/50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-cyan-400" />
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Print Styles */}
      <style type="text/css" media="print">{`
        * {
          color: black !important;
          border-color: #ccc !important;
          background: white !important;
        }
        .bg-gradient-to-r, .bg-gradient-to-b {
          background: none !important;
        }
      `}</style>
    </div>
  );
};

export default Resume;