import React from 'react';
import { CORPORATE_IDENTITY } from '../../data/corporateData';
import { OfficialLogo } from '../brand/JziLogo';
import { ConsultationSection } from '../consultation/ConsultationSection';
import { MapPin, Phone, Mail, Clock, Shield, PhoneCall, Building2, HardHat } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20 space-y-16">
      {/* Header */}
      <section className="bg-[#0B1933] text-white py-16 border-b border-[#C99A3D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          <div className="flex justify-center mb-1">
            <OfficialLogo size={60} />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#C99A3D]/40 bg-white/5 text-[11px] font-semibold text-[#DFB86C] uppercase tracking-widest">
            <span>Corporate Engineering Offices</span>
          </div>
          <h1 className="font-['Outfit'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Contact JZI Studio & Construction
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Reach our project directors, architectural planners, and licensed structural engineers for new project inquiries, bidding coordination, and site technical assessments.
          </p>
        </div>
      </section>

      {/* Contact Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded bg-[#F8F6F1] flex items-center justify-center text-[#C99A3D] mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-['Outfit'] font-bold text-sm text-[#0B1933]">
              Project Headquarters
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed">
              {CORPORATE_IDENTITY.contact.address}
            </p>
            <span className="text-[11px] text-[#C99A3D] font-semibold block pt-1">
              Serving NCR, Region IV-A & Central Luzon
            </span>
          </div>

          <div className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded bg-[#F8F6F1] flex items-center justify-center text-[#C99A3D] mb-3">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="font-['Outfit'] font-bold text-sm text-[#0B1933]">
              Telephone & Hotline
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed">
              {CORPORATE_IDENTITY.contact.phone}
            </p>
            <span className="text-[11px] text-zinc-400 block pt-1">
              Direct engineering desk
            </span>
          </div>

          <div className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded bg-[#F8F6F1] flex items-center justify-center text-[#C99A3D] mb-3">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="font-['Outfit'] font-bold text-sm text-[#0B1933]">
              Email Correspondence
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed">
              {CORPORATE_IDENTITY.contact.email}
            </p>
            <span className="text-[11px] text-zinc-400 block pt-1">
              Typical response: 24 to 48 hours
            </span>
          </div>

          <div className="bg-white p-6 rounded-lg border border-zinc-200 shadow-sm space-y-2">
            <div className="w-10 h-10 rounded bg-[#F8F6F1] flex items-center justify-center text-[#C99A3D] mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-['Outfit'] font-bold text-sm text-[#0B1933]">
              Operating Hours
            </h4>
            <p className="text-xs text-zinc-600 leading-relaxed">
              {CORPORATE_IDENTITY.contact.hours}
            </p>
            <span className="text-[11px] text-emerald-700 font-medium block pt-1">
              {CORPORATE_IDENTITY.contact.emergencySupport}
            </span>
          </div>
        </div>
      </section>

      {/* Embedded Consultation System */}
      <ConsultationSection />
    </div>
  );
};
