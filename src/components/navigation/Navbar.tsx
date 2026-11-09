import React, { useState, useEffect } from 'react';
import { JziLogo } from '../brand/JziLogo';
import { JZI_CONTACT } from '../../data/corporateData';
import { Menu, X, Shield, PhoneCall, Phone, Mail, FileDown } from 'lucide-react';
import { PROFILE_URL, PROFILE_FILE_NAME } from '../brand/CompanyProfileActions';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenConsultation: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenConsultation,
  onOpenAdmin,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'infrastructure', label: 'Infrastructure & Energy' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'credentials', label: 'Credentials' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B1933]/95 backdrop-blur-md border-b border-[#C99A3D]/30 shadow-lg py-3'
          : 'bg-[#0B1933] border-b border-white/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Single element Brand lockup */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A3D]"
            aria-label="Go to homepage"
          >
            {/* Desktop Official Logo (64–72px, set to 68px) */}
            <div className="hidden md:block shrink-0">
              <JziLogo size={68} />
            </div>
            {/* Mobile Official Logo (44–52px, set to 48px) */}
            <div className="block md:hidden shrink-0">
              <JziLogo size={48} />
            </div>
            <div className="flex flex-col">
              <span className="font-['Outfit'] font-bold text-white tracking-wider text-sm sm:text-base whitespace-nowrap">
                JZI STUDIO & CONSTRUCTION
              </span>
              <span className="text-[10px] tracking-widest text-[#C99A3D] font-medium uppercase hidden sm:inline-block">
                Architects • Engineers • General Contractor
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Clean single-line text links) */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-xs font-medium tracking-wide uppercase transition-colors whitespace-nowrap shrink-0 py-1 relative ${
                    isActive
                      ? 'text-[#DFB86C] font-semibold'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C99A3D] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Admin Affordance */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            {/* Download Company Profile Action Button */}
            <a
              href={PROFILE_URL}
              download={PROFILE_FILE_NAME}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#DFB86C] hover:text-white bg-[#C99A3D]/10 hover:bg-[#C99A3D]/25 border border-[#C99A3D]/40 hover:border-[#DFB86C] rounded transition-all duration-200 shrink-0"
              title="Download Company Profile"
              aria-label="Download Company Profile PDF"
            >
              <FileDown className="w-3.5 h-3.5 text-[#C99A3D]" />
              <span className="hidden xl:inline">Profile PDF</span>
            </a>

            {/* Functional Phone Call Link */}
            <a
              href={JZI_CONTACT.phoneLink}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:text-[#DFB86C] bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#C99A3D]/40 rounded transition-colors whitespace-nowrap shrink-0"
              title={`Call ${JZI_CONTACT.companyName}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C99A3D]" />
              <span className="font-mono">{JZI_CONTACT.phone}</span>
            </a>

            <button
              onClick={onOpenAdmin}
              title="Staff Portal (Authentication Required)"
              className="p-2 text-zinc-400 hover:text-[#C99A3D] transition-colors rounded border border-white/10 hover:border-[#C99A3D]/40"
              aria-label="Staff Portal Access"
            >
              <Shield className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0B1933] bg-gradient-to-r from-[#DFB86C] via-[#C99A3D] to-[#DFB86C] hover:brightness-110 active:scale-95 transition-all rounded shadow-md whitespace-nowrap shrink-0"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Request Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button & Quick Actions */}
          <div className="flex xl:hidden items-center gap-2">
            <a
              href={PROFILE_URL}
              download={PROFILE_FILE_NAME}
              className="p-2 text-[#DFB86C] hover:text-white rounded border border-[#C99A3D]/40 hover:border-[#DFB86C] bg-white/5 transition-colors"
              title="Download Company Profile"
              aria-label="Download Company Profile"
            >
              <FileDown className="w-4 h-4 text-[#C99A3D]" />
            </a>
            <a
              href={JZI_CONTACT.phoneLink}
              className="p-2 text-[#DFB86C] hover:text-white rounded border border-white/10 hover:border-[#C99A3D]/40"
              title={`Call ${JZI_CONTACT.phone}`}
              aria-label="Call JZI Office"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenConsultation}
              className="sm:hidden px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#0B1933] bg-[#C99A3D] rounded"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#C99A3D]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B1933] border-b border-[#C99A3D]/20 px-4 pt-3 pb-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left text-sm tracking-wide uppercase py-2 px-3 rounded transition-colors ${
                  currentView === link.id
                    ? 'bg-[#C99A3D]/15 text-[#DFB86C] font-semibold'
                    : 'text-zinc-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              {/* Download Company Profile Action */}
              <a
                href={PROFILE_URL}
                download={PROFILE_FILE_NAME}
                className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-[#0B1933] bg-[#C99A3D] hover:bg-[#DFB86C] rounded flex items-center justify-center gap-2 transition-colors shadow"
                aria-label="Download JZI Studio Company Profile 2026 PDF"
              >
                <FileDown className="w-4 h-4 text-[#0B1933]" />
                <span>Download Company Profile 2026</span>
              </a>

              {/* Direct Tap-to-Call Link */}
              <a
                href={JZI_CONTACT.phoneLink}
                className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C99A3D]" />
                <span>Call {JZI_CONTACT.phone}</span>
              </a>

              {/* Direct Mailto Link */}
              <a
                href={JZI_CONTACT.emailLink}
                className="w-full py-2 text-center text-xs text-zinc-300 hover:text-[#DFB86C] flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C99A3D]" />
                <span>{JZI_CONTACT.email}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-[#0B1933] bg-[#C99A3D] hover:bg-[#DFB86C] rounded shadow"
              >
                Request Project Consultation
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="w-full py-2 text-center text-xs text-zinc-400 hover:text-white flex items-center justify-center gap-1.5"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Authorized Staff Portal</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
