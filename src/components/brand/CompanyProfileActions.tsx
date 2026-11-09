import React from 'react';
import { FileDown, FileText } from 'lucide-react';

export const PROFILE_URL = `${import.meta.env.BASE_URL}documents/JZI-Studio-Company-Profile-2026.pdf`;
export const PROFILE_FILE_NAME = 'JZI-Studio-Company-Profile-2026.pdf';

interface CompanyProfileActionsProps {
  className?: string;
  variant?: 'default' | 'stacked' | 'hero' | 'compact';
  showSecondaryLabel?: boolean;
}

export function CompanyProfileActions({
  className = '',
  variant = 'default',
  showSecondaryLabel = false,
}: CompanyProfileActionsProps) {
  if (variant === 'hero') {
    return (
      <div className={`flex flex-col sm:flex-row items-center gap-3 ${className}`}>
        <a
          href={PROFILE_URL}
          download={PROFILE_FILE_NAME}
          className="group inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#DFB86C] via-[#C99A3D] to-[#DFB86C] px-6 py-3.5 text-left text-[#0B1933] font-bold shadow-lg shadow-[#C99A3D]/20 transition-all duration-300 hover:brightness-110 active:scale-[0.98] border border-[#DFB86C]/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]"
          aria-label="Download JZI Studio Company Profile 2026 PDF"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded bg-[#0B1933]/15 text-[#0B1933] transition-transform duration-300 group-hover:translate-y-0.5">
            <FileDown size={20} aria-hidden="true" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-wider font-extrabold text-[#0B1933]">
              Download Company Profile 2026
            </span>
            <span className="text-[10px] text-[#0B1933]/80 font-medium tracking-wide">
              Official Company Profile • 2026 • PDF
            </span>
          </div>
        </a>

        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[#C99A3D] bg-[#0B1933]/60 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-[#DFB86C] backdrop-blur-sm transition-all duration-300 hover:bg-[#C99A3D]/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]"
          aria-label="View JZI Studio Company Profile 2026 PDF in new tab"
        >
          <FileText size={18} aria-hidden="true" />
          <span>View PDF</span>
        </a>
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`space-y-3 ${className}`}>
        <a
          href={PROFILE_URL}
          download={PROFILE_FILE_NAME}
          className="group flex w-full items-center justify-between gap-3 rounded-lg bg-[#C99A3D] px-5 py-3.5 text-left font-semibold text-[#0B1933] shadow-md transition-all duration-300 hover:bg-[#DFB86C] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]"
          aria-label="Download JZI Studio Company Profile 2026 PDF"
        >
          <div className="flex items-center gap-3">
            <FileDown size={20} className="shrink-0 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-wider">
                Download Company Profile
              </span>
              <span className="text-[10px] font-normal text-[#0B1933]/80">
                Official Company Profile • 2026 • PDF
              </span>
            </div>
          </div>
        </a>

        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#C99A3D] bg-transparent px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#C99A3D] transition-colors hover:bg-[#C99A3D]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]"
          aria-label="View JZI Studio Company Profile 2026 PDF in new tab"
        >
          <FileText size={18} aria-hidden="true" />
          <span>View PDF (40 Pages)</span>
        </a>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={PROFILE_URL}
        download={PROFILE_FILE_NAME}
        className="inline-flex items-center gap-2 rounded-lg bg-[#C99A3D] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#0B1933] shadow transition-all duration-300 hover:bg-[#DFB86C] hover:shadow-[#C99A3D]/20 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]"
        aria-label="Download JZI Studio Company Profile 2026 PDF"
      >
        <FileDown size={18} aria-hidden="true" />
        <div className="flex flex-col text-left">
          <span>Download Company Profile</span>
          {showSecondaryLabel && (
            <span className="text-[9px] font-normal lowercase tracking-normal text-[#0B1933]/80">
              official company profile • 2026 • pdf
            </span>
          )}
        </div>
      </a>

      <a
        href={PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-[#C99A3D] bg-transparent px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#C99A3D] transition-colors hover:bg-[#C99A3D]/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]"
        aria-label="View JZI Studio Company Profile 2026 PDF in new tab"
      >
        <FileText size={18} aria-hidden="true" />
        <span>View PDF</span>
      </a>
    </div>
  );
}

export default CompanyProfileActions;
