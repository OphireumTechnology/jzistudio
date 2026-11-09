import React from 'react';

export interface OfficialLogoProps {
  size?: number | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSubtitle?: boolean;
  variant?: string;
}

export function OfficialLogo({
  size = 68,
  className = '',
  showSubtitle = false,
}: OfficialLogoProps) {
  // Map preset size strings to specified pixel diameters
  const pixelSize =
    typeof size === 'number'
      ? size
      : size === 'sm'
      ? 48 // 44–52px for mobile header
      : size === 'md'
      ? 68 // 64–72px for desktop header
      : size === 'lg'
      ? 88
      : size === 'xl'
      ? 120 // 100–130px for footer & branding showcases
      : 68;

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Circular Metallic-Gold JZI Logo (Approved Corporate Asset) */}
      <img
        src={`${import.meta.env.BASE_URL}branding/jzi-official-logo.png`}
        alt="JZI Studio & Construction Services Inc. Official Logo"
        width={pixelSize}
        height={pixelSize}
        className="object-contain shrink-0 rounded-full transition-transform duration-300 hover:scale-102"
        style={{ width: `${pixelSize}px`, height: `${pixelSize}px` }}
        decoding="async"
      />

      {showSubtitle && (
        <div className="flex flex-col text-left">
          <span className="font-['Outfit'] font-bold tracking-tight text-white leading-none text-base">
            JZI STUDIO & CONSTRUCTION
          </span>
          <span className="font-['Plus_Jakarta_Sans'] text-[10px] tracking-widest text-[#C99A3D] font-semibold uppercase mt-0.5">
            Architects • Engineers • General Contractor
          </span>
        </div>
      )}
    </div>
  );
}

// Re-export as JziLogo for backward compatibility across all existing imports
export const JziLogo = OfficialLogo;
