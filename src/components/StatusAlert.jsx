import React from "react";

export const StatusAlert = ({ isMobile }) => (
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
  )

export default StatusAlert