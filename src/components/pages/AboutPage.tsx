import React, { useState } from 'react';
import { CORPORATE_IDENTITY } from '../../data/corporateData';
import { JziLogo } from '../brand/JziLogo';
import { Shield, Target, Compass, Award, HeartHandshake, Leaf, Lock, CheckCircle2 } from 'lucide-react';

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
    </div>
  );
};
