import React, { useState, useEffect } from 'react';
import { JziLogo } from '../brand/JziLogo';
import { JZI_CONTACT } from '../../data/corporateData';
import { Menu, X, Shield, PhoneCall, Phone, Mail, FileDown, Clock } from 'lucide-react';
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
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg">
      {/* 1. UPPER UTILITY BAR — Compact Luxury Top Row (Hidden on mobile phones, visible from tablet up) */}
      <div className="hidden md:block bg-[#071124] border-b border-white/10 text-zinc-300 text-[11px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          {/* Left: Document Download & Primary Contact Info */}
          <div className="flex items-center gap-4 lg:gap-5 min-w-0">
            {/* Download Company Profile Action */}
            <a
              href={PROFILE_URL}
              download={PROFILE_FILE_NAME}
              className="inline-flex items-center gap-1.5 text-[#DFB86C] hover:text-white font-semibold transition-colors shrink-0"
              title="Download JZI Studio Official Company Profile 2026 (PDF)"
            >
              <FileDown className="w-3.5 h-3.5 text-[#C99A3D] shrink-0" />
              <span>Download Company Profile (PDF)</span>
            </a>

            <span className="text-[#C99A3D]/40 select-none">|</span>

            {/* Official Telephone */}
            <a
              href={JZI_CONTACT.phoneLink}
              className="inline-flex items-center gap-1.5 hover:text-[#DFB86C] transition-colors shrink-0"
              title={`Call JZI Office: ${JZI_CONTACT.phone}`}
            >
              <Phone className="w-3 h-3 text-[#C99A3D] shrink-0" />
              <span className="font-mono">{JZI_CONTACT.phone}</span>
            </a>

            <span className="text-[#C99A3D]/40 select-none hidden lg:inline">|</span>

            {/* Official Email */}
            <a
              href={JZI_CONTACT.emailLink}
              className="hidden lg:inline-flex items-center gap-1.5 hover:text-[#DFB86C] transition-colors truncate"
              title={`Email JZI Office: ${JZI_CONTACT.email}`}
            >
              <Mail className="w-3 h-3 text-[#C99A3D] shrink-0" />
              <span className="truncate">{JZI_CONTACT.email}</span>
            </a>
          </div>

          {/* Right: Hours & Staff Portal Access */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden xl:flex items-center gap-1.5 text-zinc-400">
              <Clock className="w-3 h-3 text-[#C99A3D] shrink-0" />
              <span>Mon–Sat: 8:00 AM – 6:00 PM</span>
            </div>

            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded border border-white/10 hover:border-[#C99A3D]/50 text-zinc-300 hover:text-[#DFB86C] bg-white/5 hover:bg-white/10 transition-colors font-medium text-[11px]"
              title="Staff Portal (Authentication Required)"
              aria-label="Staff Portal Access"
            >
              <Shield className="w-3 h-3 text-[#C99A3D]" />
              <span>Authorized Staff</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div
        className={`bg-[#0B1933] border-b border-[#C99A3D]/25 transition-all duration-300 ${
          isScrolled ? 'py-2.5 sm:py-3 shadow-xl backdrop-blur-md bg-[#0B1933]/98' : 'py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Lockup: Logo + Company Name */}
            <button
              onClick={() => handleLinkClick('home')}
              className="flex min-w-0 items-center gap-2.5 sm:gap-3.5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A3D] shrink-0"
              aria-label="Go to homepage"
            >
              {/* Desktop Official Logo (62px) */}
              <div className="hidden md:block shrink-0">
                <JziLogo size={62} />
              </div>
              {/* Mobile Official Logo (44px) */}
              <div className="block md:hidden shrink-0">
                <JziLogo size={44} />
              </div>
              <div className="flex min-w-0 flex-col">
                <span className="font-['Outfit'] font-bold text-white tracking-wider text-xs sm:text-sm lg:text-base leading-tight truncate">
                  JZI STUDIO & CONSTRUCTION
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-widest text-[#C99A3D] font-medium uppercase hidden sm:block">
                  Architects • Engineers • General Contractor
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links (>= 1200px / xl) */}
            <nav className="hidden xl:flex items-center gap-3.5 2xl:gap-5 shrink-0" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = currentView === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`text-[11px] 2xl:text-xs font-semibold tracking-wider uppercase transition-colors whitespace-nowrap py-1 relative ${
                      isActive
                        ? 'text-[#DFB86C]'
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

            {/* Right Action Area */}
            <div className="flex items-center gap-2.5 shrink-0">
              {/* Gold Request Consultation Button (Full desktop view >= 1200px) */}
              <button
                onClick={onOpenConsultation}
                className="hidden xl:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0B1933] bg-gradient-to-r from-[#DFB86C] via-[#C99A3D] to-[#DFB86C] hover:brightness-110 active:scale-95 transition-all rounded shadow-md whitespace-nowrap shrink-0"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Request Consultation</span>
              </button>

              {/* Tablet Quick Consultation Button (768px - 1199px) */}
              <button
                onClick={onOpenConsultation}
                className="hidden sm:inline-flex xl:hidden px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0B1933] bg-[#C99A3D] hover:bg-[#DFB86C] active:scale-95 transition-all rounded shadow whitespace-nowrap"
              >
                Consult
              </button>

              {/* Hamburger Button (< 1200px) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden inline-flex items-center justify-center p-2 text-zinc-300 hover:text-white rounded border border-white/10 hover:border-[#C99A3D]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C99A3D]"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#C99A3D]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. RESPONSIVE MOBILE / TABLET MENU DRAWER (< 1200px) */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B1933] border-b border-[#C99A3D]/30 px-4 pt-3 pb-6 shadow-2xl max-h-[calc(100vh-80px)] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {/* 8 Full Navigation Links */}
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left text-xs font-semibold tracking-wider uppercase py-2.5 px-3 rounded transition-colors ${
                  currentView === link.id
                    ? 'bg-[#C99A3D]/20 text-[#DFB86C]'
                    : 'text-zinc-200 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Action Group */}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              {/* Primary Consultation Button */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider text-[#0B1933] bg-gradient-to-r from-[#DFB86C] via-[#C99A3D] to-[#DFB86C] hover:brightness-105 rounded shadow flex items-center justify-center gap-2 transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Request Project Consultation</span>
              </button>

              {/* Download Company Profile Action */}
              <a
                href={PROFILE_URL}
                download={PROFILE_FILE_NAME}
                className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-[#DFB86C] hover:text-white bg-white/5 hover:bg-white/10 border border-[#C99A3D]/40 rounded flex items-center justify-center gap-2 transition-colors"
                aria-label="Download JZI Studio Company Profile 2026 PDF"
              >
                <FileDown className="w-3.5 h-3.5 text-[#C99A3D]" />
                <span>Download Company Profile 2026 (PDF)</span>
              </a>

              {/* Direct Tap-to-Call Link */}
              <a
                href={JZI_CONTACT.phoneLink}
                className="w-full py-2 text-center text-xs text-zinc-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded flex items-center justify-center gap-2 transition-colors font-mono"
              >
                <Phone className="w-3 h-3 text-[#C99A3D]" />
                <span>Call {JZI_CONTACT.phone}</span>
              </a>

              {/* Direct Mailto Link */}
              <a
                href={JZI_CONTACT.emailLink}
                className="w-full py-2 text-center text-xs text-zinc-300 hover:text-[#DFB86C] flex items-center justify-center gap-2 transition-colors"
              >
                <Mail className="w-3 h-3 text-[#C99A3D]" />
                <span>{JZI_CONTACT.email}</span>
              </a>

              {/* Staff Portal Link */}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="w-full py-2 text-center text-xs text-zinc-400 hover:text-white flex items-center justify-center gap-1.5 pt-1"
              >
                <Shield className="w-3 h-3 text-[#C99A3D]" />
                <span>Authorized Staff Portal</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
