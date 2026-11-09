import React, { useState, useRef, useCallback } from 'react';
import { Sliders, Layers } from 'lucide-react';

interface BlueprintSliderProps {
  imageSrc: string;
}

export const BlueprintSlider: React.FC<BlueprintSliderProps> = ({ imageSrc }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between text-xs text-zinc-600">
        <span className="flex items-center gap-1.5 font-medium text-[#0B1933]">
          <Layers className="w-3.5 h-3.5 text-[#C99A3D]" />
          <span>Architectural CAD Blueprint</span>
        </span>
        <span className="text-[11px] text-zinc-600 flex items-center gap-1">
          <Sliders className="w-3 h-3 text-[#C99A3D]" />
          <span>Drag slider horizontally to compare</span>
        </span>
        <span className="font-medium text-[#0B1933]">
          Completed As-Built Reality
        </span>
      </div>

      <div
        ref={containerRef}
        className="relative h-72 sm:h-96 md:h-[440px] w-full overflow-hidden rounded-lg border border-zinc-200 select-none shadow-md cursor-ew-resize bg-zinc-900"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Layer 1 (Underneath): As-Built Completed Photographic Reality */}
        <img
          src={imageSrc}
          alt="Completed Architectural Project"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        {/* Layer 2 (Top Layer, Clipped): Technical CAD Blueprint with Grid & Line Overlay */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          {/* Blueprint Styling: Deep Cyan/Navy with Grid and Schematic Wireframe */}
          <div className="relative w-full h-full bg-[#0B2545] bg-blueprint-dark">
            {/* Architectural Drawing Schematic Graphic Overlay */}
            <svg
              className="absolute inset-0 w-full h-full opacity-60 text-cyan-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              {/* Construction Grid Axis lines */}
              <line x1="10%" y1="0" x2="10%" y2="100%" strokeDasharray="4 4" />
              <line x1="30%" y1="0" x2="30%" y2="100%" strokeDasharray="4 4" />
              <line x1="50%" y1="0" x2="50%" y2="100%" strokeDasharray="4 4" />
              <line x1="70%" y1="0" x2="70%" y2="100%" strokeDasharray="4 4" />
              <line x1="90%" y1="0" x2="90%" y2="100%" strokeDasharray="4 4" />

              <line x1="0" y1="20%" x2="100%" y2="20%" strokeDasharray="4 4" />
              <line x1="0" y1="50%" x2="100%" y2="50%" strokeDasharray="4 4" />
              <line x1="0" y1="80%" x2="100%" y2="80%" strokeDasharray="4 4" />

              {/* Structural Cantilever Framing Wireframe */}
              <polygon points="120,80 320,60 380,280 80,260" stroke="#38BDF8" strokeWidth="2" fill="none" />
              <polygon points="320,60 580,90 620,310 380,280" stroke="#38BDF8" strokeWidth="2" fill="none" />
              <line x1="120" y1="80" x2="620" y2="310" stroke="#38BDF8" strokeWidth="1" strokeDasharray="2 2" />

              {/* Elevation Dimensions & Surveyor Markers */}
              <text x="130" y="70" fill="#38BDF8" fontSize="10" fontFamily="monospace">ELEV: +12.450m</text>
              <text x="390" y="270" fill="#38BDF8" fontSize="10" fontFamily="monospace">GRID B-4 // STRUCTURAL SLAB</text>
              <text x="15" y="30" fill="#C99A3D" fontSize="11" fontFamily="monospace" fontWeight="bold">JZI CAD REV. 04 / ARCH-STRUCTURAL COORDINATION</text>
            </svg>

            {/* Faint blueprint silhouette of the actual building */}
            <img
              src={imageSrc}
              alt="Blueprint CAD Base"
              className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-20 filter invert"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Divider Bar */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#C99A3D] shadow-lg pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0B1933] border-2 border-[#C99A3D] flex items-center justify-center shadow-lg text-[#C99A3D]">
            <Sliders className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </div>
  );
};
