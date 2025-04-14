import React, { useState, useEffect } from 'react';

const SystemCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverElement, setHoverElement] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Remove cursor from all interactive elements
    const style = document.createElement('style');
    style.textContent = `
      a, button, [role="button"], [type="button"], [type="submit"], [type="reset"],
      select, input[type="checkbox"], input[type="radio"], input[type="range"],
      input[type="file"], input[type="color"], [onclick], [onmousedown], [onmouseup],
      [contenteditable="true"], [contenteditable=""], [tabindex="0"], [role="link"],
      [role="menuitem"], [role="option"], [role="switch"], [role="tab"] {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.hasAttribute('role') ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isInteractive);
      setHoverElement(isInteractive ? target.tagName.toLowerCase() : '');
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.body.style.cursor = 'none';
    
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousemove', updateHoverState);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousemove', updateHoverState);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isMobile]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <div 
      className="fixed pointer-events-none z-[9999] select-none hidden lg:block"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      {/* Base Cursor */}
      <div className={`
        relative font-mono text-cyan-400
        ${isHovering ? 'scale-125' : 'scale-100'}
        ${isClicking ? 'scale-90' : 'scale-100'}
        transition-transform duration-150
      `}>
        {/* Process ID and Element Type */}
        {isHovering && (
          <>
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap">
              <span className="text-slate-400">&gt;_</span> {hoverElement.toUpperCase()}_INTERACT
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-slate-400 whitespace-nowrap">
              PID::{Math.floor(Math.random() * 9000) + 1000}
            </div>
          </>
        )}

        {/* Cursor Brackets */}
        <div className="relative flex items-center">
          <span className="mr-1">[</span>
          
          {/* Animated Insert */}
          <div className="w-3 h-4 flex items-center justify-center">
            {isHovering ? (
              <div className="w-full h-px bg-cyan-400 animate-[scan_2s_linear_infinite]" />
            ) : (
              <div className="w-px h-3/4 bg-cyan-400 animate-[blink_1s_step-start_infinite]" />
            )}
          </div>
          
          <span className="ml-1">]</span>
        </div>

        {/* Position Coordinates */}
        <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 text-[8px] text-slate-400">
          x:{Math.round(position.x)} y:{Math.round(position.y)}
        </div>
      </div>
    </div>
  );
};

export default SystemCursor;