import React from "react";

const NavButton = ({ item, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`
      relative p-4 w-full bg-slate-900/95
      ${isActive ? 'text-cyan-400' : 'text-slate-400'}
    `}
  >
    {/* Technical readout lines */}
    <div className="absolute top-0 left-2 w-px h-full bg-blue-900/30" />
    <div className="absolute top-0 right-2 w-px h-full bg-blue-900/30" />

    {/* Selection indicator */}
    {isActive && (
      <div className="absolute left-0 top-0 w-1 h-full bg-cyan-500" />
    )}

    {/* Content */}
    <div className="relative">
      {/* Module ID */}
      <div className="text-[8px] font-mono mb-1 flex justify-between items-center">
        <span>ID::{item.slice(0,3).toUpperCase()}_NAV</span>
        <span className="text-slate-500">{isActive ? 'ACTIVE' : 'STANDBY'}</span>
      </div>

      {/* Module Name */}
      <div className="text-sm font-mono tracking-wider mb-1">
        {item.toUpperCase()}
      </div>

      {/* Status Bar */}
      <div className="flex items-center gap-2 text-[8px]">
        <div className={`w-1 h-1 ${isActive ? 'bg-cyan-400' : 'bg-slate-600'}`} />
        <div className="flex-1 bg-slate-800 h-px">
          <div 
            className={`h-full transition-all duration-300 ${
              isActive ? 'w-full bg-cyan-400' : 'w-2/5 bg-slate-600'
            }`}
          />
        </div>
      </div>
    </div>
  </button>
);

const Navbar = ({ items = [], activeItem = '', setActiveItem }) => {
  if (!items.length) return null;

  return (
    <div className="w-full lg:w-auto">
      {/* System Status */}
      <div className="bg-slate-900/95 border-t border-blue-900/50 px-4 py-1">
        <div className="flex justify-between items-center text-[10px] font-mono">
          <div className="text-cyan-400">NAV_SYSTEM::ACTIVE</div>
          <div className="text-slate-500">
            {`SELECTED_MODULE::${activeItem.toUpperCase()}`}
          </div>
        </div>
      </div>

      {/* Navigation Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px">
        {items.map((item) => (
          <NavButton
            key={item}
            item={item}
            isActive={activeItem === item}
            onClick={() => setActiveItem(item)}
          />
        ))}
      </div>

      {/* Footer Status */}
      <div className="bg-slate-900/95 px-4 py-1 border-t border-blue-900/50">
        <div className="flex justify-between text-[8px] font-mono">
          <span className="text-slate-500">NAV_TIME::{new Date().toLocaleTimeString()}</span>
          <span className="text-cyan-400">NAV_VERSION::2.5.0</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;