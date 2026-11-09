import React, { useState } from 'react';
import { CORE_SERVICES, ServiceItem, CORPORATE_IDENTITY } from '../../data/corporateData';
import { OfficialLogo } from '../brand/JziLogo';
import { ArrowRight, Check, Compass, Layers, Zap, Cpu, Droplets, Palette, FileSpreadsheet, CheckCircle2, Building2, Hammer, ShieldCheck } from 'lucide-react';

interface ServicesPageProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Design', 'Engineering', 'Construction', 'Management'];

  const filteredServices = activeCategory === 'All'
    ? CORE_SERVICES
    : CORE_SERVICES.filter((s) => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5 text-[#C99A3D]" />;
      case 'Layers': return <Layers className="w-5 h-5 text-[#C99A3D]" />;
      case 'Zap': return <Zap className="w-5 h-5 text-[#C99A3D]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#C99A3D]" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-[#C99A3D]" />;
      case 'Palette': return <Palette className="w-5 h-5 text-[#C99A3D]" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5 text-[#C99A3D]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-5 h-5 text-[#C99A3D]" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-[#C99A3D]" />;
      case 'Hammer': return <Hammer className="w-5 h-5 text-[#C99A3D]" />;
      default: return <Building2 className="w-5 h-5 text-[#C99A3D]" />;
    }
  };

  return (
    <div className="pt-24 pb-20 space-y-16">
      {/* Header */}
      <section className="bg-[#0B1933] text-white py-16 border-b border-[#C99A3D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          <div className="flex justify-center mb-1">
            <OfficialLogo size={60} />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#C99A3D]/40 bg-white/5 text-[11px] font-semibold text-[#DFB86C] uppercase tracking-widest">
            <span>Official Capabilities Directory</span>
          </div>
          <h1 className="font-['Outfit'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Comprehensive Design & Construction Services
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Ten integrated professional disciplines delivering end-to-end design, code compliance, structural engineering, and general contracting across the Philippines.
          </p>
        </div>
      </section>

      {/* Mandatory Disclaimer Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 bg-[#F8F6F1] border-l-4 border-[#C99A3D] rounded-r flex items-start gap-3 shadow-sm">
          <ShieldCheck className="w-5 h-5 text-[#C99A3D] shrink-0 mt-0.5" />
          <div className="text-xs text-zinc-700">
            <strong className="text-[#0B1933] block mb-0.5 font-bold uppercase tracking-wider text-[11px]">
              Regulatory Qualification & Authorization Condition
            </strong>
            <p>{CORPORATE_IDENTITY.professionalDisclaimer}</p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all ${
                activeCategory === cat
                  ? 'bg-[#0B1933] text-white shadow-md'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900'
              }`}
            >
              {cat === 'All' ? 'All 10 Disciplines' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Service Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg border border-zinc-200 p-6 sm:p-8 hover:border-[#C99A3D]/60 transition-all shadow-sm hover:shadow-md flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#F8F6F1] border border-zinc-200 flex items-center justify-center">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-[#C99A3D]">Service {service.number}</span>
                      <h3 className="font-['Outfit'] text-lg font-bold text-[#0B1933]">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-zinc-100 text-zinc-700 rounded">
                    {service.category}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Applications & Deliverables */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-zinc-100 text-xs">
                  <div>
                    <span className="text-zinc-500 block text-[11px] font-bold uppercase tracking-wider mb-1.5">
                      Typical Applications
                    </span>
                    <ul className="space-y-1 text-zinc-700">
                      {service.applications.map((app, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="text-[#C99A3D]">›</span>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-zinc-500 block text-[11px] font-bold uppercase tracking-wider mb-1.5">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1 text-zinc-700">
                      {service.deliverables.map((del, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-[#C99A3D]" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-xs text-zinc-500">
                  Integrated with licensed project management
                </span>
                <button
                  onClick={() => onOpenConsultation(service.title)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0B1933] bg-[#C99A3D] hover:bg-[#DFB86C] rounded transition-all"
                >
                  <span>Inquire for Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
