import React, { useState } from 'react';
import { CORPORATE_IDENTITY, JZI_CONTACT } from '../../data/corporateData';
import { JziLogo } from '../brand/JziLogo';
import { PROFILE_URL, PROFILE_FILE_NAME } from '../brand/CompanyProfileActions';
import { Shield, Target, Compass, Award, HeartHandshake, Leaf, Lock, CheckCircle2, Phone, Mail, ArrowRight, FileDown, FileText } from 'lucide-react';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  const [selectedCoreValue, setSelectedCoreValue] = useState<number>(0);

  return (
    <div className="pt-24 pb-20 space-y-20">
      {/* Hero Header */}
      <section className="bg-[#0B1933] text-white py-16 border-b border-[#C99A3D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          <div className="flex justify-center mb-1">
            <JziLogo size={60} />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#C99A3D]/40 bg-white/5 text-[11px] font-semibold text-[#DFB86C] uppercase tracking-widest">
            <span>Corporate Identity & Leadership</span>
          </div>
          <h1 className="font-['Outfit'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            About JZI Studio & Construction Services Inc.
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Architects • Engineers • General Contractor — Delivering integrated design-and-build excellence across the Republic of the Philippines.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Professional team">
        <div className="rounded-lg border border-[#C99A3D]/30 bg-[#F8F6F1] p-6 sm:p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C99A3D] mb-2">Professional Team</p>
          <h2 className="font-['Outfit'] text-xl sm:text-2xl font-bold text-[#0B1933]">JOHN CHRISTOPHER L. MAAÑO, UAP</h2>
          <p className="text-sm text-zinc-600 mt-1">Architect</p>
        </div>
      </section>

      {/* Overview & Background */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C99A3D]">
                Section 01 — Company Overview & Background
              </span>
              <h2 className="font-['Outfit'] text-2xl sm:text-3xl font-bold text-[#0B1933]">
                Single-Source Mastery from Concept to Turnover
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
              {CORPORATE_IDENTITY.overview}
            </p>

            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
              {CORPORATE_IDENTITY.history}
            </p>

            <div className="p-4 bg-[#F8F6F1] border-l-2 border-[#C99A3D] rounded-r space-y-1">
              <span className="font-semibold text-xs text-[#0B1933] block">Professional Standing & Classification</span>
              <p className="text-xs text-zinc-600">
                Operating with official PCAB accreditation, licensed civil, structural, electrical, and mechanical engineers, and registered architects under PRBOA.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="p-8 bg-[#0B1933] rounded-xl border border-[#C99A3D]/30 shadow-2xl text-center space-y-6 max-w-sm w-full">
              <JziLogo size="xl" variant="gold" className="mx-auto" />
              <div className="space-y-1">
                <span className="font-['Outfit'] font-bold text-white text-lg block">
                  JZI STUDIO & CONSTRUCTION
                </span>
                <span className="text-xs text-[#DFB86C] uppercase tracking-wider block font-semibold">
                  SERVICES INC.
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 italic">
                "{CORPORATE_IDENTITY.secondaryTagline}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO / President Welcome Message */}
      <section className="bg-[#0B1933] text-white py-16 border-y border-[#C99A3D]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#DFB86C]">
            Executive Address
          </span>
          <h2 className="font-['Outfit'] text-2xl sm:text-3xl font-bold tracking-tight text-white">
            CEO & President Welcome Message
          </h2>
          <div className="p-6 sm:p-8 bg-white/5 rounded-xl border border-white/10 relative">
            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed italic">
              {CORPORATE_IDENTITY.ceoMessage}
            </p>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-zinc-400">
              <span className="font-semibold text-white block">Office of the CEO & President</span>
              <span>JZI Studio & Construction Services Inc.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Missions & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C99A3D]">
            Strategic Orientation
          </span>
          <h2 className="font-['Outfit'] text-2xl sm:text-3xl font-bold text-[#0B1933]">
            Our Vision & Future Direction
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600">
            {CORPORATE_IDENTITY.vision}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CORPORATE_IDENTITY.missions.map((mission, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#F8F6F1] rounded-lg border border-zinc-200 space-y-4 hover:border-[#C99A3D]/50 transition-all shadow-sm"
            >
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#0B1933] text-[#DFB86C] text-xs font-mono font-bold rounded">
                <Target className="w-3.5 h-3.5" />
                <span>{mission.code}</span>
              </div>
              <h3 className="font-['Outfit'] text-lg font-bold text-[#0B1933]">
                {mission.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                {mission.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values (The 8 Values) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C99A3D]">
            Corporate Foundation
          </span>
          <h2 className="font-['Outfit'] text-2xl sm:text-3xl font-bold text-[#0B1933]">
            Our Eight Core Corporate Values
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600">
            Principles that govern our engineering drawings, procurement standards, and jobsite safety conduct.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CORPORATE_IDENTITY.coreValues.map((val, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedCoreValue(idx)}
              className={`p-5 rounded-lg border transition-all cursor-pointer space-y-2 ${
                selectedCoreValue === idx
                  ? 'bg-[#0B1933] text-white border-[#C99A3D] shadow-md'
                  : 'bg-white text-zinc-900 border-zinc-200 hover:border-zinc-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-mono text-xs font-bold ${selectedCoreValue === idx ? 'text-[#DFB86C]' : 'text-[#C99A3D]'}`}>
                  0{idx + 1}
                </span>
                <CheckCircle2 className={`w-3.5 h-3.5 ${selectedCoreValue === idx ? 'text-[#DFB86C]' : 'text-zinc-300'}`} />
              </div>
              <h4 className="font-['Outfit'] text-sm font-bold">
                {val.title}
              </h4>
              <p className={`text-xs leading-relaxed ${selectedCoreValue === idx ? 'text-zinc-300' : 'text-zinc-600'}`}>
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 bg-emerald-950/10 border border-emerald-900/20 rounded-xl space-y-4">
          <div className="flex items-center gap-2 text-emerald-800">
            <Leaf className="w-5 h-5 text-emerald-600" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Environmental Stewardship
            </span>
          </div>
          <h3 className="font-['Outfit'] text-xl font-bold text-[#0B1933]">
            Sustainability & Resilient Design Commitment
          </h3>
          <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
            {CORPORATE_IDENTITY.sustainabilityCommitment}
          </p>
          <div className="pt-2 text-xs text-zinc-500">
            {CORPORATE_IDENTITY.professionalDisclaimer}
          </div>
        </div>
      </section>

      {/* Dedicated Company Profile Section: Explore Our Company */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-[#C99A3D]/40 bg-gradient-to-br from-[#0B1933] via-[#0B1933] to-[#122447] p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#C99A3D]/20 border border-[#C99A3D]/50 text-xs font-bold text-[#DFB86C] uppercase tracking-widest">
              <FileDown className="w-3.5 h-3.5" />
              <span>Official Corporate Dossier</span>
            </div>
            <h2 className="font-['Outfit'] text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Explore Our Company
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Discover JZI Studio & Construction Services Inc., our design and construction capabilities, professional services, project portfolio, and company credentials.
            </p>
            <p className="text-[11px] text-zinc-400">
              Official 40-page publication featuring company introduction, welcome message, vision & mission, individual engineering services, constructed project galleries, equipment fleet, and regulatory permits.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-[#C99A3D] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#DFB86C] hover:bg-[#C99A3D]/15 hover:text-white transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]"
              aria-label="View JZI Studio Company Profile 2026 PDF in new tab"
            >
              <FileText size={18} aria-hidden="true" />
              <span>View Company Profile</span>
            </a>

            <a
              href={PROFILE_URL}
              download={PROFILE_FILE_NAME}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#C99A3D] hover:bg-[#DFB86C] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0B1933] shadow-md transition-all duration-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C99A3D]"
              aria-label="Download JZI Studio Company Profile 2026 PDF"
            >
              <FileDown size={18} aria-hidden="true" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </section>

      {/* Corporate Inquiries & Direct Communication */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-[#0B1933] text-white rounded-xl border border-[#C99A3D]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#DFB86C]">
              Direct Corporate Engagement
            </span>
            <h3 className="font-['Outfit'] font-bold text-lg text-white">
              Consult with Our Principal Architects & Engineers
            </h3>
            <p className="text-xs text-zinc-300">
              For commercial bids, joint ventures, or residential development feasibility:
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-semibold">
            <a
              href={JZI_CONTACT.phoneLink}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors"
              title={`Call ${JZI_CONTACT.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C99A3D]" />
              <span className="font-mono">{JZI_CONTACT.phone}</span>
            </a>
            <a
              href={JZI_CONTACT.emailLink}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-colors"
              title={`Email ${JZI_CONTACT.email}`}
            >
              <Mail className="w-3.5 h-3.5 text-[#C99A3D]" />
              <span>{JZI_CONTACT.email}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
