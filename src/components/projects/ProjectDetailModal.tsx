import React from 'react';
import { ProjectItem } from '../../data/corporateData';
import { OfficialLogo } from '../brand/JziLogo';
import { X, MapPin, Building, Calendar, Layers, ShieldCheck, ArrowRight } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onConsult: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onConsult,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden border border-zinc-200">
        {/* Header Bar */}
        <div className="bg-[#0B1933] px-6 py-4 flex items-center justify-between border-b border-[#C99A3D]/30">
          <div className="flex items-center gap-3">
            <OfficialLogo size={42} />
            <div>
              <span className="text-[10px] tracking-widest text-[#C99A3D] font-semibold uppercase block">
                {project.categoryLabel}
              </span>
              <h3 className="font-['Outfit'] font-bold text-white text-lg sm:text-xl">
                {project.title}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6">
          {/* Main Visual */}
          <div className="relative h-64 sm:h-80 w-full rounded-md overflow-hidden bg-zinc-900 border border-zinc-200">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-3 right-3 bg-[#0B1933]/90 text-white text-[11px] font-semibold px-2.5 py-1 rounded border border-[#C99A3D]/40">
              Status: {project.status}
            </div>
          </div>

          {/* Key Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-md bg-[#F8F6F1] border border-zinc-200 text-xs">
            <div>
              <span className="text-zinc-600 block text-[10px] uppercase tracking-wider font-semibold">Location</span>
              <span className="font-semibold text-zinc-900 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3 h-3 text-[#C99A3D]" />
                {project.location}
              </span>
            </div>
            {project.lotArea && (
              <div>
                <span className="text-zinc-600 block text-[10px] uppercase tracking-wider font-semibold">Lot Area</span>
                <span className="font-semibold text-zinc-900 mt-0.5 block">{project.lotArea}</span>
              </div>
            )}
            {project.floorArea && (
              <div>
                <span className="text-zinc-600 block text-[10px] uppercase tracking-wider font-semibold">Floor Area</span>
                <span className="font-semibold text-zinc-900 mt-0.5 block">{project.floorArea}</span>
              </div>
            )}
            <div>
              <span className="text-zinc-600 block text-[10px] uppercase tracking-wider font-semibold">Company Role</span>
              <span className="font-semibold text-zinc-900 mt-0.5 block">{project.role}</span>
            </div>
          </div>

          {/* Description & Scope */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1933]">
              Project Overview & Structural System
            </h4>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
              {project.description}
            </p>
            {project.constructionSystem && (
              <div className="p-3 bg-zinc-50 border border-zinc-200 rounded text-xs text-zinc-700">
                <strong className="text-zinc-900 block mb-0.5">Construction System:</strong>
                {project.constructionSystem}
              </div>
            )}
          </div>

          {/* Project Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1933]">
              Engineering & Execution Highlights
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-700">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2 bg-zinc-50 p-2.5 rounded border border-zinc-100">
                  <span className="text-[#C99A3D] font-bold">›</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Relationship Transparency Note */}
          <div className="p-3 bg-[#0B1933]/5 border-l-2 border-[#C99A3D] rounded-r text-xs text-zinc-700 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C99A3D] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#0B1933] block">Verified Source Profile Disclosure:</span>
              <span>{project.verifiedRelationship}</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-zinc-50 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-zinc-200">
          <span className="text-xs text-zinc-600">
            Reference: {project.id} • JZI Official Portfolio
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2 text-xs font-medium text-zinc-700 hover:bg-zinc-200 rounded transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onConsult(project.title);
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0B1933] bg-[#C99A3D] hover:bg-[#DFB86C] rounded shadow transition-all"
            >
              <span>Consult on Similar Build</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
