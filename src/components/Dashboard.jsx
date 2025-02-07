import React from 'react';
import GitHubActivityChart from './GitHubFeed';

const HexProgress = ({ progress, size = 100 }) => {
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.4;
  
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
      <path 
        d={`M${centerX},${centerY-radius} 
            L${centerX+radius*0.866},${centerY-radius*0.5}
            L${centerX+radius*0.866},${centerY+radius*0.5}
            L${centerX},${centerY+radius}
            L${centerX-radius*0.866},${centerY+radius*0.5}
            L${centerX-radius*0.866},${centerY-radius*0.5}Z`}
        fill="none"
        stroke="#1e3a8a"
        strokeWidth="2"
      />
      <circle 
        cx={centerX} 
        cy={centerY} 
        r={radius * 0.8}
        fill="none"
        stroke="url(#progressGrad)"
        strokeWidth="2"
        strokeDasharray={`${2 * Math.PI * radius * 0.8 * progress / 100} ${2 * Math.PI * radius * 0.8}`}
        transform={`rotate(-90 ${centerX} ${centerY})`}
      />
      <text
        x={centerX}
        y={centerY}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#e2e8f0"
        fontSize={size * 0.2}
      >
        {progress}%
      </text>
    </svg>
  );
};

const DashboardCard = ({ title, children, className = '' }) => (
  <div className={`bg-slate-900/90 rounded-none p-4 border border-blue-900/50 relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-transparent" />
    <div className="absolute inset-0 bg-[url('#hexGrid')]" style={{ opacity: 0.1 }} />
    <h2 className="text-cyan-400 font-medium mb-3 flex items-center gap-2 relative">
      <span className="absolute -left-4 w-2 h-full bg-cyan-500/50" />
      {title}
    </h2>
    <div className="relative">
      {children}
    </div>
  </div>
);

const activityData = [
  { name: 'Mon', commits: 4, issues: 2 },
  { name: 'Tue', commits: 3, issues: 5 },
  { name: 'Wed', commits: 7, issues: 3 },
  { name: 'Thu', commits: 5, issues: 1 },
  { name: 'Fri', commits: 6, issues: 4 },
  { name: 'Sat', commits: 2, issues: 2 },
  { name: 'Sun', commits: 8, issues: 3 },
];

const currentTasks = [
  { name: 'Graduate Capstone', progress: 45 },
  { name: 'Kotlin/Spring Boot', progress: 30 },
  { name: 'Portfolio Updates', progress: 80 },
  { name: 'Bench Press Goal', progress: 65 },
];

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 p-4 text-slate-300 bg-slate-950">
      <DashboardCard title="SYSTEM STATUS" className="lg:col-span-2">
  <div className="grid grid-cols-2 gap-4 mb-4">
    <div className="space-y-1">
      <div className="text-xs text-cyan-400">ACTIVE REPOSITORIES</div>
      <div className="text-2xl font-mono">03</div>
    </div>
    <div className="space-y-1">
      <div className="text-xs text-cyan-400">WEEKLY COMMITS</div>
      <div className="text-2xl font-mono">10</div>
    </div>
  </div>
  
  {/* Replace the old chart with the new GitHubActivityChart */}
  <GitHubActivityChart />
</DashboardCard>

      <DashboardCard title="LEARNING PROTOCOLS" className="lg:row-span-2">
        <div className="space-y-6">
          <div className="relative">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-cyan-400">Kotlin Fundamentals</span>
              <span className="font-mono text-xs">STAGE 2/4</span>
            </div>
            <div className="space-y-2">
              <div className="w-full bg-slate-800 h-1">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500"
                  style={{ width: "50%" }}
                />
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a href="#" className="bg-blue-950/50 border border-blue-900/50 p-2 hover:border-cyan-500/50 transition-colors">
                  <div className="text-cyan-400">Current: Object-Oriented Programming</div>
                  <div className="text-slate-400">Kotlin Official Docs</div>
                </a>
                <a href="#" className="bg-blue-950/50 border border-blue-900/50 p-2 hover:border-cyan-500/50 transition-colors">
                  <div className="text-cyan-400">Next: Coroutines</div>
                  <div className="text-slate-400">Roman Elizarov's Guide</div>
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-cyan-400">Spring Boot Mastery</span>
              <span className="font-mono text-xs">STAGE 1/3</span>
            </div>
            <div className="space-y-2">
              <div className="w-full bg-slate-800 h-1">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500"
                  style={{ width: "30%" }}
                />
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <a href="#" className="bg-blue-950/50 border border-blue-900/50 p-2 hover:border-cyan-500/50 transition-colors">
                  <div className="text-cyan-400">Current: Dependency Injection</div>
                  <div className="text-slate-400">Spring.io Guides</div>
                </a>
                <a href="#" className="bg-blue-950/50 border border-blue-900/50 p-2 hover:border-cyan-500/50 transition-colors">
                  <div className="text-cyan-400">Next: REST APIs</div>
                  <div className="text-slate-400">Baeldung Tutorials</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </DashboardCard>

      <DashboardCard title="READING PROTOCOL">
        <div className="flex items-center gap-4">
          <HexProgress progress={75} size={80} />
          <div className="flex-1">
            <div className="text-cyan-400 text-sm mb-1">Frankenstein</div>
            <div className="text-xs text-slate-400">Mary Shelley, 1818</div>
            <div className="mt-3 flex items-center gap-2 text-xs">
              <div className="bg-blue-950/50 border border-blue-900/50 px-2 py-1">
                <span className="text-cyan-400">PG:</span> 155/207
              </div>
              <div className="bg-blue-950/50 border border-blue-900/50 px-2 py-1">
                <span className="text-cyan-400">CH:</span> 12/24
              </div>
            </div>
            <div className="mt-2 w-full h-px bg-gradient-to-r from-transparent via-cyan-800/50 to-transparent" />
            <div className="mt-2 text-xs text-slate-400">Last session: 2.5 hours ago</div>
          </div>
        </div>
      </DashboardCard>

      <DashboardCard title="SKILLS ACQUISITION">
        <div className="flex flex-wrap gap-2">
          {['Kotlin', 'Spring Boot', 'Digital Art'].map(skill => (
            <div 
              key={skill}
              className="px-3 py-1 bg-blue-950 border border-blue-800 text-cyan-400 text-sm flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-cyan-400"></span>
              {skill}
            </div>
          ))}
        </div>
      </DashboardCard>

      <DashboardCard title="AUDIO MODULE">
        <div className="flex items-center gap-4 bg-blue-950/30 p-3">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-cyan-800 flex items-center justify-center">
            <div className="w-3 h-3 bg-cyan-400 animate-pulse" />
          </div>
          <div>
            <div className="text-cyan-400">City Girl</div>
            <div className="text-xs text-slate-400">Latest Discovery</div>
            <div className="mt-2 flex gap-2">
              <div className="w-20 h-1 bg-cyan-400" />
              <div className="w-32 h-1 bg-slate-700" />
            </div>
          </div>
        </div>
      </DashboardCard>
    </div>
  );
};

export default Dashboard;
