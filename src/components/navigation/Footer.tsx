import React from 'react';
import { JziLogo } from '../brand/JziLogo';
import { CORPORATE_IDENTITY } from '../../data/corporateData';
import { MapPin, Phone, Mail, Clock, Shield, ArrowUp, FileDown } from 'lucide-react';
import { PROFILE_URL, PROFILE_FILE_NAME } from '../brand/CompanyProfileActions';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAdmin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1933] text-zinc-300 border-t border-[#C99A3D]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Corporate Brand */}
          <div className="space-y-5">
            <div className="space-y-3">
              <JziLogo size={110} />
              <div>
                <span className="font-['Outfit'] font-bold text-white tracking-wide text-base block">
                  JZI STUDIO & CONSTRUCTION
                </span>
                <span className="text-[10px] tracking-widest text-[#C99A3D] font-medium uppercase block">
                  SERVICES INC.
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Architects • Engineers • General Contractor
            </p>

            <p className="text-xs text-zinc-300 italic border-l-2 border-[#C99A3D] pl-3 py-0.5">
              "{CORPORATE_IDENTITY.primaryTagline}"
              <br />
              <span className="text-zinc-400 text-[11px] not-italic">
                {CORPORATE_IDENTITY.secondaryTagline}
              </span>
            </p>

            {/* Compact Company Profile Download Link */}
            <div className="pt-1">
              <a
                href={PROFILE_URL}
                download={PROFILE_FILE_NAME}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#DFB86C] hover:text-white transition-colors border border-[#C99A3D]/40 hover:border-[#DFB86C] bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded"
                title="Download Company Profile 2026 PDF"
                aria-label="Download JZI Studio Company Profile 2026 PDF"
              >
                <FileDown className="w-3.5 h-3.5 text-[#C99A3D]" />
                <span>Company Profile 2026 (PDF)</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Corporate Directory
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#DFB86C] transition-colors"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#DFB86C] transition-colors"
                >
                  About Us & Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#DFB86C] transition-colors"
                >
                  Design & Engineering Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-[#DFB86C] transition-colors"
                >
                  Project Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('infrastructure')}
                  className="hover:text-[#DFB86C] transition-colors"
                >
                  Infrastructure & Renewable Energy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('equipment')}
                  className="hover:text-[#DFB86C] transition-colors"
                >
                  Heavy Equipment Fleet
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('credentials')}
                  className="hover:text-[#DFB86C] transition-colors"
                >
                  Credentials & PCAB Licenses
                </button>
              </li>
              <li className="pt-1">
                <a
                  href={PROFILE_URL}
                  download={PROFILE_FILE_NAME}
                  className="hover:text-[#DFB86C] transition-colors inline-flex items-center gap-1.5 text-zinc-300 font-medium"
                >
                  <FileDown className="w-3 h-3 text-[#C99A3D]" />
                  <span>Company Profile 2026 (PDF)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Logistics */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Project Offices & Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#C99A3D] shrink-0 mt-0.5" />
                <span>{CORPORATE_IDENTITY.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#C99A3D] shrink-0" />
                <a href="tel:+639778292851" className="hover:underline">{CORPORATE_IDENTITY.contact.phone}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#C99A3D] shrink-0" />
                <a href="mailto:jziarchitectural@gmail.com" className="hover:underline">{CORPORATE_IDENTITY.contact.email}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-3.5 h-3.5 text-[#C99A3D] shrink-0 mt-0.5" />
                <span>{CORPORATE_IDENTITY.contact.hours}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Professional Notice & Staff Login */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Compliance & Safety
            </h4>
            <p className="text-[11px] text-zinc-400 leading-relaxed bg-white/5 p-3 rounded border border-white/5">
              {CORPORATE_IDENTITY.professionalDisclaimer}
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-[#DFB86C] transition-colors py-1 px-2.5 rounded border border-white/10 hover:border-[#C99A3D]/40"
              >
                <Shield className="w-3.5 h-3.5 text-[#C99A3D]" />
                <span>Authorized Staff Portal</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} JZI Studio & Construction Services Inc. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('credentials')}
              className="hover:text-zinc-300 transition-colors"
            >
              PCAB & SEC Compliance
            </button>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-[#DFB86C] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
