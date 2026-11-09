import React, { useState } from 'react';
import { AUTHENTIC_PROJECTS, ProjectItem } from '../../data/corporateData';
import { OfficialLogo } from '../brand/JziLogo';
import { Search, MapPin, Layers, Building, ShieldCheck, ArrowRight } from 'lucide-react';

interface ProjectsPageProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenConsultation: (projectTitle?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onSelectProject,
  onOpenConsultation,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential Construction' },
    { id: 'commercial', label: 'Commercial & Restaurant Fit-Out' },
    { id: 'infrastructure', label: 'Civil Infrastructure' },
    { id: 'renewable', label: 'Renewable Solar Energy' },
  ];

  const filteredProjects = AUTHENTIC_PROJECTS.filter((proj) => {
    const matchesCategory = activeCategory === 'all' || proj.category === activeCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20 space-y-12">
      {/* Page Header */}
      <section className="bg-[#0B1933] text-white py-16 border-b border-[#C99A3D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          <div className="flex justify-center mb-1">
            <OfficialLogo size={60} />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#C99A3D]/40 bg-white/5 text-[11px] font-semibold text-[#DFB86C] uppercase tracking-widest">
            <span>Project Portfolio (PDF Pages 11–33)</span>
          </div>
          <h1 className="font-['Outfit'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Constructed Realities & Projects
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Project profile materials covering residences, premier restaurant commercial fit-outs, civil aviation runways, flood-control works, and utility-scale solar farms.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#0B1933] text-white shadow-sm'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded border border-zinc-300 focus:border-[#C99A3D] focus:outline-none"
            />
          </div>
        </div>

        {/* Project Results Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-zinc-50 rounded-lg border border-zinc-200">
            <p className="text-xs text-zinc-500">No project records match your current filter parameters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="bg-white rounded-lg border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Photo Container */}
                  <div className="relative h-56 overflow-hidden bg-zinc-900">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B1933]/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-[#C99A3D]/40">
                      {project.categoryLabel}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/95 text-zinc-900 text-[10px] font-semibold px-2 py-0.5 rounded shadow">
                      {project.status}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-1.5 text-[11px] text-[#C99A3D] font-semibold">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="font-['Outfit'] font-bold text-base text-[#0B1933] group-hover:text-[#C99A3D] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-zinc-600 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metadata tags */}
                    <div className="pt-2 flex flex-wrap gap-2 text-[10px] text-zinc-500">
                      {project.floorArea && (
                        <span className="bg-zinc-100 px-2 py-0.5 rounded font-mono">
                          Floor: {project.floorArea}
                        </span>
                      )}
                      {project.lotArea && (
                        <span className="bg-zinc-100 px-2 py-0.5 rounded font-mono">
                          Lot: {project.lotArea}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-5 py-3.5 bg-zinc-50 border-t border-zinc-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-zinc-500 text-[11px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                    <span className="truncate max-w-[170px]">{project.verifiedRelationship}</span>
                  </div>
                  <span className="font-semibold text-[#0B1933] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Details &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Inquiry Trigger Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 bg-[#F8F6F1] border border-zinc-200 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-['Outfit'] font-bold text-sm text-[#0B1933]">
              Need Architectural or Construction Specifications for Your Site?
            </h4>
            <p className="text-xs text-zinc-600">
              Our engineering team provides comprehensive feasibility and structural analysis tailored to your specific lot or commercial space.
            </p>
          </div>
          <button
            onClick={() => onOpenConsultation()}
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B1933] bg-[#C99A3D] hover:bg-[#DFB86C] rounded transition-all shrink-0 shadow"
          >
            Request Consultation
          </button>
        </div>
      </section>
    </div>
  );
};
