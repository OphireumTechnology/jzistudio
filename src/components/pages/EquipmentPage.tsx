import React, { useState } from 'react';
import { HEAVY_EQUIPMENT_FLEET, EquipmentItem } from '../../data/corporateData';
import { OfficialLogo } from '../brand/JziLogo';
import { Truck, ShieldCheck, CheckCircle2, Search, ArrowRight, Gauge, Wrench, HardHat } from 'lucide-react';

interface EquipmentPageProps {
  onOpenConsultation: (equipmentName?: string) => void;
}

export const EquipmentPage: React.FC<EquipmentPageProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Earthmoving',
    'Hauling',
    'Lifting',
    'Concreting',
    'Compaction',
    'Power & Dewatering',
  ];

  const filteredFleet = HEAVY_EQUIPMENT_FLEET.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.modelOrType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.typicalUse.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 sm:pt-28 md:pt-36 pb-20 space-y-16">
      {/* Header */}
      <section className="bg-[#0B1933] text-white py-16 border-b border-[#C99A3D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          <div className="flex justify-center mb-1">
            <OfficialLogo size={60} />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#C99A3D]/40 bg-white/5 text-[11px] font-semibold text-[#DFB86C] uppercase tracking-widest">
            <span>Plant & Machinery Inventory (PDF pp. 35–39)</span>
          </div>
          <h1 className="font-['Outfit'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Heavy Equipment & Capabilities
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            High-capacity earthmoving machinery, heavy haulage trucks, mobile cranes, and transit concrete batching support listed in the company profile; current availability requires confirmation.
          </p>
        </div>
      </section>

      {/* Hero Visual Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-xl overflow-hidden border border-zinc-200 shadow-xl bg-zinc-900">
          <img
            src={`${import.meta.env.BASE_URL}assets/images/equipment_fleet_excavators_1794254055633.jpg`}
            alt="JZI Heavy Construction Equipment Fleet"
            className="w-full h-64 sm:h-80 md:h-[380px] object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1933] via-[#0B1933]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white max-w-xl space-y-2">
            <span className="text-[10px] tracking-widest font-bold uppercase text-[#DFB86C] bg-[#0B1933]/80 px-2 py-0.5 rounded border border-[#C99A3D]/40 inline-block">
              Equipment record verification pending
            </span>
            <h2 className="font-['Outfit'] text-xl sm:text-2xl font-bold text-white">
              Direct Machinery Support for Civil & Structural Projects
            </h2>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Equipped with heavy hydraulic crawler excavators, articulated wheel loaders, and precision survey systems.
            </p>
          </div>
        </div>
      </section>

      {/* Inventory & Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0B1933] text-white shadow-sm'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search machinery by name or use..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded border border-zinc-300 focus:border-[#C99A3D] focus:outline-none"
            />
          </div>
        </div>

        {/* Machinery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFleet.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg border border-zinc-200 p-5 hover:border-[#C99A3D]/60 transition-all shadow-sm hover:shadow-md flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                    {item.category}
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-semibold bg-emerald-50 text-emerald-800 rounded border border-emerald-200">
                    {item.status.split('/')[0]}
                  </span>
                </div>

                <h3 className="font-['Outfit'] font-bold text-sm text-[#0B1933]">
                  {item.name}
                </h3>

                <div className="space-y-1.5 text-xs text-zinc-600">
                  <div className="flex items-start gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-[#C99A3D] shrink-0 mt-0.5" />
                    <span><strong>Classification:</strong> {item.modelOrType}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-[#C99A3D] shrink-0 mt-0.5" />
                    <span><strong>Output / Rating:</strong> {item.capacityOrPower}</span>
                  </div>
                </div>

                <p className="text-[11px] text-zinc-500 pt-2 border-t border-zinc-100 leading-relaxed">
                  <strong>Site Function:</strong> {item.typicalUse}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100">
                <button
                  onClick={() => onOpenConsultation(`Equipment Mobilization: ${item.name}`)}
                  className="w-full py-1.5 text-center text-xs font-semibold text-[#0B1933] hover:text-[#C99A3D] border border-zinc-200 hover:border-[#C99A3D] rounded transition-colors"
                >
                  Mobilization Inquiry &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Verification Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 bg-[#F8F6F1] border border-zinc-200 rounded-lg text-xs text-zinc-600 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-[#C99A3D] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#0B1933] block mb-0.5 font-bold">
              Fleet Logistics & Confidentiality Standards
            </strong>
            <p>
              Equipment availability is verified upon contract scheduling. In accordance with corporate security standards, sensitive registration details and asset valuation records are maintained internally under administrative oversight.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
