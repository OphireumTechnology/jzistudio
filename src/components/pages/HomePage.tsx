import React from 'react';
import { CORPORATE_IDENTITY, CORE_SERVICES, AUTHENTIC_PROJECTS, ProjectItem } from '../../data/corporateData';
import { OfficialLogo } from '../brand/JziLogo';
import { BlueprintSlider } from '../home/BlueprintSlider';
import { ArrowRight, Compass, Shield, CheckCircle2, ChevronRight, HardHat, Sparkles, FileDown, Check } from 'lucide-react';

interface HomePageProps {
  onNavigate: (view: string) => void;
  onOpenConsultation: (projectTitle?: string) => void;
  onSelectProject: (project: ProjectItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectProject,
}) => {
  const featuredProjects = AUTHENTIC_PROJECTS.slice(0, 3);

  return (
    <div className="space-y-24 pb-20">
      {/* SECTION A: PREMIUM ARCHITECTURAL HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0B1933] overflow-hidden pt-20">
        {/* Background Image with Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}assets/images/hero_modern_architecture_1794254051474.jpg`}
            alt="JZI Studio Modern Architecture"
            className="w-full h-full object-cover opacity-35 scale-105 animate-in fade-in zoom-in duration-1000"
            referrerPolicy="no-referrer"
          />
          {/* Subtle architectural grid pattern */}
          <div className="absolute inset-0 bg-blueprint-dark opacity-40 pointer-events-none" />
          {/* Measured gradient scrim for WCAG AA readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1933] via-[#0B1933]/70 to-[#0B1933]/90" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 py-16">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded border border-[#C99A3D]/40 bg-[#0B1933]/80 backdrop-blur-sm text-xs font-semibold text-[#DFB86C] uppercase tracking-widest animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C99A3D]" />
            <span>Architects • Engineers • General Contractor</span>
          </div>

          {/* Master Headline */}
          <h1 className="font-['Outfit'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] text-balance">
            WE DESIGN. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFB86C] via-[#C99A3D] to-[#DFB86C]">WE BUILD.</span> WE INSPIRE.
          </h1>

          {/* Supporting Text */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-zinc-300 font-normal leading-relaxed text-balance">
            Transforming ideas into reality through innovative design, quality construction, and professional engineering services across the Philippines.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('projects')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0B1933] bg-[#C99A3D] hover:bg-[#DFB86C] active:scale-95 transition-all rounded shadow-lg shadow-[#C99A3D]/10"
            >
              <span>Explore Our Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onOpenConsultation()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#DFB86C] bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#C99A3D]/50 transition-all rounded"
            >
              <span>Request Consultation</span>
            </button>
          </div>

          {/* Proof Strip */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto border-t border-white/10 text-left text-xs text-zinc-400">
            <div className="space-y-0.5">
              <span className="font-['Outfit'] text-xl sm:text-2xl font-bold text-white block">PCAB</span>
              <span className="text-[11px] text-[#DFB86C]">Credentials: verification pending</span>
            </div>
            <div className="space-y-0.5">
              <span className="font-['Outfit'] text-xl sm:text-2xl font-bold text-white block">Single-Source</span>
              <span className="text-[11px] text-[#DFB86C]">Design & Build Integration</span>
            </div>
            <div className="space-y-0.5">
              <span className="font-['Outfit'] text-xl sm:text-2xl font-bold text-white block">10 Disciplines</span>
              <span className="text-[11px] text-[#DFB86C]">In-House Technical Team</span>
            </div>
            <div className="space-y-0.5">
              <span className="font-['Outfit'] text-xl sm:text-2xl font-bold text-white block">Renewable</span>
              <span className="text-[11px] text-[#DFB86C]">Solar & Civil Infrastructure</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: CORPORATE INTRODUCTION & INTEGRATED CRAFTSMANSHIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-4">
              <OfficialLogo size={78} />
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C99A3D] block">
                  Corporate Introduction
                </span>
                <h2 className="font-['Outfit'] text-2xl sm:text-3xl font-bold text-[#0B1933] tracking-tight">
                  An Integrated Design & General Contracting Standard
                </h2>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              {CORPORATE_IDENTITY.overview}
            </p>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              {CORPORATE_IDENTITY.history}
            </p>

            {/* Core Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-[#F8F6F1] border border-zinc-200 rounded">
                <span className="text-xs font-bold text-[#0B1933] block mb-1">Architectural Ingenuity</span>
                <p className="text-[11px] text-zinc-600">Bespoke spatial design tailored to climate, daylight, and functional flow.</p>
              </div>
              <div className="p-3 bg-[#F8F6F1] border border-zinc-200 rounded">
                <span className="text-xs font-bold text-[#0B1933] block mb-1">Structural Rigor</span>
                <p className="text-[11px] text-zinc-600">NSCP-compliant seismic engineering with strict on-site testing protocols.</p>
              </div>
            </div>

            <div>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B1933] hover:text-[#C99A3D] transition-colors"
              >
                <span>Read Full Corporate Profile & Leadership Message</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Visual Feature */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-zinc-200 shadow-xl bg-zinc-900 group">
              <img
                src={`${import.meta.env.BASE_URL}assets/images/project_residential_villa_1794254055730.jpg`}
                alt="Contemporary Architecture by JZI"
                className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1933] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] tracking-widest uppercase font-bold text-[#DFB86C]">
                  Featured Execution
                </span>
                <h3 className="font-['Outfit'] font-bold text-lg text-white">
                  Contemporary Multi-Storey Residential Villa
                </h3>
                <p className="text-xs text-zinc-300">
                  Precision reinforced concrete structural frame with cantilevered terraces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: CORE SERVICES BENTO */}
      <section className="bg-zinc-50 border-y border-zinc-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C99A3D]">
                Multi-Disciplinary Capabilities
              </span>
              <h2 className="font-['Outfit'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1933] tracking-tight">
                Core Professional Services
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B1933] hover:text-[#C99A3D] transition-colors"
            >
              <span>View All 10 Disciplines</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SERVICES.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg border border-zinc-200 hover:border-[#C99A3D]/60 transition-all shadow-sm hover:shadow-md space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#C99A3D]">{service.number}</span>
                    <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">{service.category}</span>
                  </div>
                  <h3 className="font-['Outfit'] text-base font-bold text-[#0B1933]">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500">
                    {service.applications[0]}
                  </span>
                  <button
                    onClick={() => onNavigate('services')}
                    className="text-xs font-semibold text-[#0B1933] hover:text-[#C99A3D] transition-colors"
                  >
                    Details &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-zinc-500 text-center max-w-2xl mx-auto">
            {CORPORATE_IDENTITY.professionalDisclaimer}
          </p>
        </div>
      </section>

      {/* SECTION D: INTERACTIVE BLUEPRINT TO REALITY SLIDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C99A3D]">
            Engineering & Technology
          </span>
          <h2 className="font-['Outfit'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1933] tracking-tight">
            From Blueprint to As-Built Reality
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600">
            Interactive demonstration of our design-build discipline: coordinating structural calculation, BIM CAD alignment, and actual on-site execution.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <BlueprintSlider imageSrc={`${import.meta.env.BASE_URL}assets/images/hero_modern_architecture_1794254051474.jpg`} />
        </div>
      </section>

      {/* SECTION E: FEATURED PROJECTS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C99A3D]">
              Verified Portfolio
            </span>
            <h2 className="font-['Outfit'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1933] tracking-tight">
              Featured Work
            </h2>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B1933] hover:text-[#C99A3D] transition-colors"
          >
            <span>Explore Complete Gallery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="bg-white rounded-lg border border-zinc-200 overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 sm:h-56 overflow-hidden bg-zinc-900">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B1933]/90 text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border border-[#C99A3D]/40">
                    {project.categoryLabel}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 text-zinc-900 text-[10px] font-semibold px-2 py-0.5 rounded shadow">
                    {project.status}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[11px] text-[#C99A3D] font-semibold block">{project.location}</span>
                  <h3 className="font-['Outfit'] font-bold text-base text-[#0B1933] group-hover:text-[#C99A3D] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
                <span>{project.role}</span>
                <span className="font-semibold text-[#0B1933] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Inspect &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION F: CALLOUT ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-[#0B1933] border border-[#C99A3D]/40 p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#DFB86C]">
              Start Your Project With JZI
            </span>
            <h2 className="font-['Outfit'] text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to Design and Build Your Next Project?
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Whether you are planning a luxury residential residence, a multi-store commercial fit-out, or regional civil infrastructure, our licensed engineers and project managers are prepared to review your parameters.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onOpenConsultation()}
                className="inline-flex items-center gap-2 px-8 py-3 text-xs font-bold uppercase tracking-wider text-[#0B1933] bg-[#C99A3D] hover:bg-[#DFB86C] active:scale-95 transition-all rounded shadow-md"
              >
                <span>Request Project Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION G: OFFICIAL COMPANY PROFILE 2026 DOWNLOAD & REVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 bg-white border border-zinc-200 rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <OfficialLogo size={90} />
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C99A3D]">
                Official Corporate Document
              </span>
              <h3 className="font-['Outfit'] font-bold text-xl text-[#0B1933]">
                JZI Company Profile 2026 Edition
              </h3>
              <p className="text-xs text-zinc-600 max-w-lg leading-relaxed">
                40-page comprehensive dossier detailing corporate charter, licensed architectural and engineering methodologies, verified project accomplishments, heavy equipment registry, and PCAB credentials.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('about')}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-zinc-700 bg-zinc-100 hover:bg-zinc-200 rounded transition-colors"
            >
              <span>Explore Profile</span>
            </button>
            <button
              onClick={() => onOpenConsultation('Request Official 40-Page Company Profile PDF')}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B1933] bg-[#C99A3D] hover:bg-[#DFB86C] rounded transition-all shadow"
            >
              <FileDown className="w-4 h-4" />
              <span>Request Full PDF</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
