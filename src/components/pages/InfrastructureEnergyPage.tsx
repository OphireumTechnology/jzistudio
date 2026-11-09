import React from 'react';
import { OfficialLogo } from '../brand/JziLogo';
import { Sun, Plane, Truck, Waves, Droplet, Building, ShieldCheck, ArrowRight, Check } from 'lucide-react';

interface InfrastructureEnergyPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export const InfrastructureEnergyPage: React.FC<InfrastructureEnergyPageProps> = ({
  onOpenConsultation,
}) => {
  const sections = [
    {
      id: 'solar',
      title: 'Solar & Renewable Clean Energy',
      icon: <Sun className="w-5 h-5 text-[#C99A3D]" />,
      lead: 'Utility-scale ground mount solar farms, commercial rooftop PV arrays, and substation interconnections.',
      capabilities: [
        'Photovoltaic ground-mount structural pile driving & torque tube installation',
        'Inverter station housing, transformer switchyards & MV/HV grid tie-ins',
        'All-weather perimeter patrol roads & engineered stormwater retention basins',
        'Full compliance with Philippine Department of Energy (DOE) & grid codes'
      ],
      accomplishment: 'Civil partner for large-scale utility solar installations mounting over 35,000 PV modules across Luzon.'
    },
    {
      id: 'aviation',
      title: 'Airport & Aviation Civil Infrastructure',
      icon: <Plane className="w-5 h-5 text-[#C99A3D]" />,
      lead: 'Runway surface reconstruction, high-bearing asphalt paving, and airfield drainage.',
      capabilities: [
        'Laser-guided sub-base grading conforming to stringent civil aviation slope limits',
        'High-density asphalt overlays engineered to withstand thermal cycles & jet blast',
        'Apron concrete slab pouring, joint sealing, and airfield stormwater channels',
        'Rapid mobilization protocols tailored to active airfield security operational windows'
      ],
      accomplishment: 'Execution of critical runway rehabilitation and pavement resurfacing contracts in regional airfields.'
    },
    {
      id: 'roads',
      title: 'Roads & Heavy Highway Infrastructure',
      icon: <Truck className="w-5 h-5 text-[#C99A3D]" />,
      lead: 'Heavy-duty asphalt and Portland cement concrete pavement (PCCP) for national corridors.',
      capabilities: [
        'Mass earthworks, subgrade stabilization, and aggregate base course compaction',
        'Slipform concrete paving and heavy dual-lane asphalt hot-mix application',
        'Highway slope stabilization, retaining crib walls, and reinforced soil revetment',
        'High-output production utilizing modern tandem rollers, pavers, and dump fleet'
      ],
      accomplishment: 'Multi-kilometer arterial access roadways serving industrial zones, regional bypasses, and logistics parks.'
    },
    {
      id: 'flood-control',
      title: 'Flood Control & Riverbank Revetment',
      icon: <Waves className="w-5 h-5 text-[#C99A3D]" />,
      lead: 'Structural dikes, reinforced concrete retaining walls, and gabion mattress protection.',
      capabilities: [
        'River dredging, desilting, and channel realignment using tracked excavator fleet',
        'Sheet pile driving and reinforced concrete floodwall construction',
        'Geotextile-lined rock revetment and gabion mattress placement along high-velocity river bends',
        'Engineered box culverts and automated sluice control gates'
      ],
      accomplishment: 'Constructed over 4.2 kilometers of flood mitigation dikes safeguarding river basin communities through multiple major typhoons.'
    },
    {
      id: 'irrigation',
      title: 'Irrigation & Agricultural Water Resources',
      icon: <Droplet className="w-5 h-5 text-[#C99A3D]" />,
      lead: 'Reinforced concrete irrigation canals, diversion dams, and pump distribution stations.',
      capabilities: [
        'Trapezoidal and rectangular concrete-lined irrigation canal construction',
        'Intake weir structures, headgates, and distribution turnout boxes',
        'Agricultural dewatering pump stations and reinforced siphon crossings',
        'Sustainable water conveyance preventing seepage loss and enhancing crop yields'
      ],
      accomplishment: 'Engineered regional irrigation canal networks delivering reliable year-round gravity irrigation to agrarian provinces.'
    },
    {
      id: 'public-buildings',
      title: 'Public & Institutional Edifices',
      icon: <Building className="w-5 h-5 text-[#C99A3D]" />,
      lead: 'Municipal civic centers, institutional training facilities, and multi-purpose complexes.',
      capabilities: [
        'Seismic-resistant reinforced concrete structural frames with high occupant load capacity',
        'Complete MEPFS engineering, life safety systems, and accessibility law (BP 344) compliance',
        'Energy-efficient architectural envelopes utilizing natural daylight and passive ventilation',
        'Rigorous public tender execution adhering strictly to COA and government procurement codes'
      ],
      accomplishment: 'Turnkey delivery of public facilities built to endure decades of community service and disaster shelter operations.'
    }
  ];

  return (
    <div className="pt-24 pb-20 space-y-16">
      {/* Header */}
      <section className="bg-[#0B1933] text-white py-16 border-b border-[#C99A3D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          <div className="flex justify-center mb-1">
            <OfficialLogo size={60} />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#C99A3D]/40 bg-white/5 text-[11px] font-semibold text-[#DFB86C] uppercase tracking-widest">
            <span>Specialized Civil & Energy Capabilities</span>
          </div>
          <h1 className="font-['Outfit'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Infrastructure & Renewable Energy
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Executing high-impact civil engineering, heavy earthworks, flood mitigation, airport paving, and utility-scale solar arrays supporting national progress.
          </p>
        </div>
      </section>

      {/* Hero Visual Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-xl overflow-hidden border border-zinc-200 shadow-xl bg-zinc-900">
          <img
            src="/assets/images/project_infrastructure_solar_1794254055468.jpg"
            alt="Utility Solar Farm & Infrastructure"
            className="w-full h-72 sm:h-96 md:h-[420px] object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1933] via-[#0B1933]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white max-w-2xl space-y-2">
            <span className="text-[10px] tracking-widest font-bold uppercase text-[#DFB86C] bg-[#0B1933]/80 px-2.5 py-1 rounded border border-[#C99A3D]/40 inline-block">
              Utility Solar & Civil Array Integration
            </span>
            <h2 className="font-['Outfit'] text-xl sm:text-2xl font-bold text-white">
              Deploying Engineering Discipline at Utility Scale
            </h2>
            <p className="text-xs text-zinc-300 leading-relaxed hidden sm:block">
              From site contouring and geotechnical pile driving to high-voltage intertie civil enclosures, JZI combines heavy fleet power with exacting technical standards.
            </p>
          </div>
        </div>
      </section>

      {/* The 6 Capabilities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C99A3D]">
            Engineering Divisions
          </span>
          <h2 className="font-['Outfit'] text-2xl sm:text-3xl font-bold text-[#0B1933]">
            Six Pillars of Civil & Environmental Infrastructure
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600">
            Backed by heavy excavation machinery, licensed site superintendents, and certified quality assurance testing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((sec) => (
            <div
              key={sec.id}
              className="bg-white rounded-lg border border-zinc-200 p-6 hover:border-[#C99A3D]/60 transition-all shadow-sm hover:shadow-md flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#F8F6F1] border border-zinc-200 flex items-center justify-center">
                    {sec.icon}
                  </div>
                  <h3 className="font-['Outfit'] text-base font-bold text-[#0B1933]">
                    {sec.title}
                  </h3>
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed">
                  {sec.lead}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-zinc-100">
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider block">
                    Technical Scope:
                  </span>
                  <ul className="space-y-1 text-xs text-zinc-700">
                    {sec.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px]">
                        <span className="text-[#C99A3D] font-bold">›</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-100 space-y-3">
                <div className="p-2.5 bg-[#F8F6F1] rounded border border-zinc-200 text-[11px] text-zinc-700">
                  <span className="font-semibold text-[#0B1933] block mb-0.5">Verified Record:</span>
                  <span>{sec.accomplishment}</span>
                </div>

                <button
                  onClick={() => onOpenConsultation(sec.title)}
                  className="w-full text-center py-2 text-xs font-bold uppercase tracking-wider text-[#0B1933] bg-[#C99A3D] hover:bg-[#DFB86C] rounded transition-all"
                >
                  Consult on {sec.title.split(' ')[0]} Works
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Equipment Synergy Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 bg-[#0B1933] text-white rounded-xl border border-[#C99A3D]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-[10px] tracking-widest text-[#DFB86C] uppercase font-bold">
              Heavy Machinery Deployment
            </span>
            <h3 className="font-['Outfit'] text-lg sm:text-xl font-bold">
              Supported by JZI's Dedicated Equipment Fleet
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Our civil contracts are empowered by hydraulic excavators, compaction rollers, heavy haulers, and robotic survey stations ensuring rapid site preparation and exact grading tolerances.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation('Civil Infrastructure Consultation')}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0B1933] bg-[#C99A3D] hover:bg-[#DFB86C] rounded transition-all shrink-0 shadow-md"
          >
            Inquire Infrastructure Contract
          </button>
        </div>
      </section>
    </div>
  );
};
