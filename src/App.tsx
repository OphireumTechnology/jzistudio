import React, { useState } from 'react';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ServicesPage } from './components/pages/ServicesPage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { InfrastructureEnergyPage } from './components/pages/InfrastructureEnergyPage';
import { EquipmentPage } from './components/pages/EquipmentPage';
import { CredentialsPage } from './components/pages/CredentialsPage';
import { ContactPage } from './components/pages/ContactPage';
import { ProjectDetailModal } from './components/projects/ProjectDetailModal';
import { AdminPortalModal } from './components/admin/AdminPortalModal';
import { ConsultationSection } from './components/consultation/ConsultationSection';
import { OfficialLogo } from './components/brand/JziLogo';
import { ProjectItem, AUTHENTIC_PROJECTS, InquirySubmission } from './data/corporateData';
import { X } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationPreFill, setConsultationPreFill] = useState<string>('');
  const [projectsList, setProjectsList] = useState<ProjectItem[]>(AUTHENTIC_PROJECTS);

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (projectOrServiceTitle?: string) => {
    if (projectOrServiceTitle) {
      setConsultationPreFill(projectOrServiceTitle);
    }
    // If already on contact or home, smooth scroll to consultation or open modal
    const section = document.getElementById('consultation-section');
    if (section && (currentView === 'home' || currentView === 'contact')) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsConsultationModalOpen(true);
    }
  };

  const handleInquirySubmitted = (newInquiry: InquirySubmission) => {
    // Optionally trigger a notification
    console.log('Registered inquiry:', newInquiry.referenceNo);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 font-['Plus_Jakarta_Sans'] selection:bg-[#C99A3D]/25 selection:text-[#0B1933]">
      {/* Top Bar Navigation */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onSelectProject={(proj) => setSelectedProject(proj)}
          />
        )}

        {currentView === 'about' && (
          <AboutPage onOpenConsultation={() => handleOpenConsultation()} />
        )}

        {currentView === 'services' && (
          <ServicesPage onOpenConsultation={(svc) => handleOpenConsultation(svc)} />
        )}

        {currentView === 'projects' && (
          <ProjectsPage
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenConsultation={handleOpenConsultation}
          />
        )}

        {currentView === 'infrastructure' && (
          <InfrastructureEnergyPage onOpenConsultation={(topic) => handleOpenConsultation(topic)} />
        )}

        {currentView === 'equipment' && (
          <EquipmentPage onOpenConsultation={(eq) => handleOpenConsultation(eq)} />
        )}

        {currentView === 'credentials' && <CredentialsPage />}

        {currentView === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onConsult={(title) => {
          setSelectedProject(null);
          handleOpenConsultation(`Inquiry based on project: ${title}`);
        }}
      />

      {/* Staff Administrative Portal Modal */}
      <AdminPortalModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onUpdateProjects={(updated) => setProjectsList(updated)}
      />

      {/* Standalone Consultation Modal (when triggered from subpages) */}
      {isConsultationModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden border border-zinc-200">
            <div className="bg-[#0B1933] px-6 py-4 flex items-center justify-between border-b border-[#C99A3D]/30">
              <div className="flex items-center gap-3">
                <OfficialLogo size={42} />
                <div>
                  <span className="text-[10px] tracking-widest text-[#C99A3D] font-semibold uppercase block">
                    JZI Studio & Construction Services Inc.
                  </span>
                  <h3 className="font-['Outfit'] font-bold text-white text-base">
                    Project Consultation & Cost Feasibility
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setIsConsultationModalOpen(false)}
                className="p-1.5 text-zinc-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-[80vh] overflow-y-auto p-4 sm:p-6">
              <ConsultationSection
                initialProjectType={consultationPreFill}
                onInquirySubmitted={(inq) => {
                  handleInquirySubmitted(inq);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
