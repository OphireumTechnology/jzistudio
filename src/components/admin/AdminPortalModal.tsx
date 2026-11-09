import React, { useState, useEffect } from 'react';
import { InquirySubmission, ProjectItem, AUTHENTIC_PROJECTS, CORPORATE_CREDENTIALS, JZI_CONTACT } from '../../data/corporateData';
import { OfficialLogo } from '../brand/JziLogo';
import { X, Lock, Shield, CheckCircle, Clock, FileText, Settings, LogOut, Search, Edit3, Phone, Mail } from 'lucide-react';

interface AdminPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateProjects?: (projects: ProjectItem[]) => void;
}

export const AdminPortalModal: React.FC<AdminPortalModalProps> = ({
  isOpen,
  onClose,
  onUpdateProjects,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [authError, setAuthError] = useState('');
  const [selectedRole, setSelectedRole] = useState<'Super Administrator' | 'Project Manager' | 'Inquiry Reviewer' | 'Content Editor'>('Super Administrator');
  const [activeTab, setActiveTab] = useState<'inquiries' | 'projects' | 'credentials' | 'audit'>('inquiries');

  // Inquiries State
  const [inquiries, setInquiries] = useState<InquirySubmission[]>([]);
  const [inquirySearch, setInquirySearch] = useState('');
  const [selectedInquiry, setSelectedInquiry] = useState<InquirySubmission | null>(null);
  const [noteText, setNoteText] = useState('');

  // Projects State
  const [projectsList, setProjectsList] = useState<ProjectItem[]>(AUTHENTIC_PROJECTS);
  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);

  // Audit Log State
  const [auditLogs, setAuditLogs] = useState<Array<{ id: string; action: string; timestamp: string; user: string }>>([]);


  useEffect(() => {
    if (isOpen) {
      // Legacy local-only submissions are not an authoritative company inbox.
      // Load stored inquiries
      try {
        const stored = JSON.parse(localStorage.getItem('jzi_inquiries') || '[]');
        if (stored.length === 0) {
          // Provide initial sample inquiry from profile if none exist
          const sample: InquirySubmission = {
            id: 'inq-init-1',
            referenceNo: 'JZI-2026-8801',
            fullName: 'Atty. Roberto Dela Cruz',
            companyName: 'Private Commercial Holdings',
            email: 'r.delacruz@sample.ph',
            contactNumber: '+63 917 555 1234',
            projectType: 'Residential Construction',
            projectLocation: 'Tagaytay Highlands, Cavite',
            lotArea: '650 sq.m',
            estimatedFloorArea: '480 sq.m',
            budgetRange: '₱20M – ₱50M',
            targetTimeline: '1 to 3 Months',
            projectDescription: 'Contemporary luxury 3-level residence with infinity pool and seismic bracing.',
            drawingFileName: 'Tagaytay_Lot_Topographic_Survey.pdf',
            status: 'In Review',
            submittedAt: new Date(Date.now() - 3600000 * 24).toISOString(),
            notes: 'Topographic survey examined. Architectural design team preparing initial massing concept.'
          };
          setInquiries([sample]);
          localStorage.setItem('jzi_inquiries', JSON.stringify([sample]));
        } else {
          setInquiries(stored);
        }
      } catch (err) {
        console.error(err);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('Staff access is unavailable until secure server-side authentication is configured.');
  };

  const addAuditLog = (action: string) => {
    setAuditLogs((prev) => [
      {
        id: `log-${Date.now()}`,
        action,
        timestamp: new Date().toLocaleTimeString(),
        user: selectedRole,
      },
      ...prev,
    ]);
  };

  const handleUpdateInquiryStatus = (id: string, newStatus: InquirySubmission['status']) => {
    const updated = inquiries.map((item) =>
      item.id === id ? { ...item, status: newStatus } : item
    );
    setInquiries(updated);
    localStorage.setItem('jzi_inquiries', JSON.stringify(updated));
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status: newStatus });
    }
    addAuditLog(`Updated inquiry status to ${newStatus} for ${id}`);
  };

  const handleSaveNote = (id: string) => {
    if (!noteText.trim()) return;
    const updated = inquiries.map((item) =>
      item.id === id ? { ...item, notes: noteText.trim() } : item
    );
    setInquiries(updated);
    localStorage.setItem('jzi_inquiries', JSON.stringify(updated));
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry({ ...selectedInquiry, notes: noteText.trim() });
    }
    setNoteText('');
    addAuditLog(`Added internal note to inquiry ${id}`);
  };

  const handleSaveProjectEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;
    const updated = projectsList.map((p) => (p.id === editingProject.id ? editingProject : p));
    setProjectsList(updated);
    if (onUpdateProjects) onUpdateProjects(updated);
    addAuditLog(`Modified project record: ${editingProject.title}`);
    setEditingProject(null);
  };

  const filteredInquiries = inquiries.filter((inq) =>
    inq.fullName.toLowerCase().includes(inquirySearch.toLowerCase()) ||
    inq.referenceNo.toLowerCase().includes(inquirySearch.toLowerCase()) ||
    inq.projectType.toLowerCase().includes(inquirySearch.toLowerCase()) ||
    inq.projectLocation.toLowerCase().includes(inquirySearch.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white rounded-lg shadow-2xl overflow-hidden border border-zinc-200 flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="bg-[#0B1933] px-6 py-4 flex items-center justify-between border-b border-[#C99A3D]/30 shrink-0">
          <div className="flex items-center gap-3">
            <OfficialLogo size={44} />
            <div>
              <span className="text-[10px] tracking-widest text-[#C99A3D] font-semibold uppercase block">
                JZI Studio & Construction Services Inc.
              </span>
              <h3 className="font-['Outfit'] font-bold text-white text-base">
                Secure Administrative & Management Portal
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {isAuthenticated && (
              <span className="hidden sm:inline-block text-[11px] text-zinc-300 bg-white/10 px-2.5 py-1 rounded border border-white/10">
                Role: <strong className="text-[#DFB86C]">{selectedRole}</strong>
              </span>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close admin modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        {!isAuthenticated ? (
          /* Authentication Screen */
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto my-auto space-y-6">
            <div className="flex justify-center">
              <OfficialLogo size={80} />
            </div>

            <div className="space-y-1">
              <h4 className="font-['Outfit'] font-bold text-lg text-[#0B1933]">
                Authorized Staff Authentication
              </h4>
              <p className="text-xs text-zinc-600">
                Restricted access for JZI project managers, licensed estimators, and corporate directors.
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  Assigned Administrative Role
                </label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value as any)}
                  className="w-full px-3 py-2 text-xs rounded border border-zinc-300 focus:border-[#C99A3D] focus:outline-none bg-white"
                >
                  <option value="Super Administrator">Super Administrator (Full System Control)</option>
                  <option value="Project Manager">Project Manager (Site & Engineering Dispatch)</option>
                  <option value="Inquiry Reviewer">Inquiry Reviewer (Estimates & Costing)</option>
                  <option value="Content Editor">Content Editor (Portfolio & Announcements)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1">
                  Security Access PIN
                </label>
                <input
                  type="password"
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="Enter authorized PIN (e.g. jzi2026)"
                  className="w-full px-3 py-2 text-xs font-mono rounded border border-zinc-300 focus:border-[#C99A3D] focus:outline-none"
                />
                <span className="text-[10px] text-zinc-600 mt-1 block">
                  Default demonstration authorization PIN: <strong className="font-mono text-zinc-700">jzi2026</strong>
                </span>
              </div>

              {authError && (
                <p className="text-xs text-red-600 bg-red-50 p-2 rounded border border-red-200">
                  {authError}
                </p>
              )}

              <button
                type="submit"
                className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-[#0B1933] bg-[#C99A3D] hover:bg-[#DFB86C] rounded transition-all shadow"
              >
                Authenticate Session
              </button>

              {/* Administrative Contact Configuration Status */}
              <div className="pt-3 border-t border-zinc-200 text-[11px] text-zinc-600 space-y-1.5">
                <span className="font-semibold text-zinc-800 block text-[10px] uppercase tracking-wider">
                  Configured Corporate Dispatch Channels:
                </span>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Official Phone:</span>
                  <a href={JZI_CONTACT.phoneLink} className="font-mono font-semibold text-[#0B1933] hover:underline">
                    {JZI_CONTACT.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500">Official Email:</span>
                  <a href={JZI_CONTACT.emailLink} className="font-semibold text-[#0B1933] hover:underline">
                    {JZI_CONTACT.email}
                  </a>
                </div>
              </div>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Navigation Tabs */}
            <div className="bg-zinc-100 px-6 py-2.5 border-b border-zinc-200 flex items-center justify-between gap-4 overflow-x-auto shrink-0">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('inquiries')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
                    activeTab === 'inquiries'
                      ? 'bg-white text-[#0B1933] shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Inquiry Queue ({inquiries.length})
                </button>
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
                    activeTab === 'projects'
                      ? 'bg-white text-[#0B1933] shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Portfolio Editor ({projectsList.length})
                </button>
                <button
                  onClick={() => setActiveTab('credentials')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
                    activeTab === 'credentials'
                      ? 'bg-white text-[#0B1933] shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Corporate Credentials
                </button>
                <button
                  onClick={() => setActiveTab('audit')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
                    activeTab === 'audit'
                      ? 'bg-white text-[#0B1933] shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Audit Trail
                </button>
              </div>

              <button
                onClick={() => setIsAuthenticated(false)}
                className="text-xs text-zinc-500 hover:text-red-600 inline-flex items-center gap-1 shrink-0"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>

            {/* TAB: INQUIRIES */}
            {activeTab === 'inquiries' && (
              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="relative w-full sm:w-72">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input
                      type="text"
                      value={inquirySearch}
                      onChange={(e) => setInquirySearch(e.target.value)}
                      placeholder="Search inquiries by client, type, or ref..."
                      className="w-full pl-8 pr-3 py-1.5 text-xs rounded border border-zinc-300 focus:border-[#C99A3D] focus:outline-none"
                    />
                  </div>
                  <span className="text-xs text-zinc-500">
                    Showing {filteredInquiries.length} client submissions
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* List Column */}
                  <div className="lg:col-span-1 space-y-2 max-h-[500px] overflow-y-auto pr-1">
                    {filteredInquiries.length === 0 ? (
                      <p className="text-xs text-zinc-500 text-center py-8">No inquiries match criteria</p>
                    ) : (
                      filteredInquiries.map((inq) => (
                        <div
                          key={inq.id}
                          onClick={() => setSelectedInquiry(inq)}
                          className={`p-3 rounded border text-xs cursor-pointer transition-all ${
                            selectedInquiry?.id === inq.id
                              ? 'border-[#C99A3D] bg-[#F8F6F1] shadow-sm'
                              : 'border-zinc-200 hover:border-zinc-300 bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-mono font-bold text-[#0B1933]">{inq.referenceNo}</span>
                            <span className="px-1.5 py-0.5 text-[10px] rounded font-semibold bg-zinc-100 text-zinc-800">
                              {inq.status}
                            </span>
                          </div>
                          <div className="font-semibold text-zinc-900 truncate">{inq.fullName}</div>
                          <div className="text-[11px] text-zinc-500 truncate">{inq.projectType}</div>
                          <div className="text-[10px] text-zinc-400 mt-1">
                            {new Date(inq.submittedAt).toLocaleDateString()}
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Details Column */}
                  <div className="lg:col-span-2 border border-zinc-200 rounded-lg p-5 bg-zinc-50">
                    {selectedInquiry ? (
                      <div className="space-y-4 text-xs">
                        <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                          <div>
                            <span className="font-mono text-sm font-bold text-[#0B1933]">
                              {selectedInquiry.referenceNo}
                            </span>
                            <span className="text-zinc-500 block text-[11px]">
                              Submitted: {new Date(selectedInquiry.submittedAt).toLocaleString()}
                            </span>
                          </div>

                          {/* Status Dropdown */}
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-zinc-700">Status:</span>
                            <select
                              value={selectedInquiry.status}
                              onChange={(e) =>
                                handleUpdateInquiryStatus(selectedInquiry.id, e.target.value as any)
                              }
                              className="px-2.5 py-1 text-xs rounded border border-zinc-300 bg-white font-semibold"
                            >
                              <option value="New">New</option>
                              <option value="In Review">In Review</option>
                              <option value="Quoted">Quoted</option>
                              <option value="Scheduled Site Visit">Scheduled Site Visit</option>
                              <option value="Archived">Archived</option>
                            </select>
                          </div>
                        </div>

                        {/* Client details */}
                        <div className="grid grid-cols-2 gap-3 bg-white p-3.5 rounded border border-zinc-200">
                          <div>
                            <span className="text-zinc-500 block text-[10px] uppercase font-bold">Client Name</span>
                            <span className="font-semibold text-zinc-900">{selectedInquiry.fullName}</span>
                          </div>
                          <div>
                            <span className="text-zinc-500 block text-[10px] uppercase font-bold">Company</span>
                            <span className="font-semibold text-zinc-900">{selectedInquiry.companyName || '—'}</span>
                          </div>
                          <div>
                            <span className="text-zinc-500 block text-[10px] uppercase font-bold">Email</span>
                            <span className="text-zinc-900">{selectedInquiry.email}</span>
                          </div>
                          <div>
                            <span className="text-zinc-500 block text-[10px] uppercase font-bold">Contact</span>
                            <span className="text-zinc-900">{selectedInquiry.contactNumber}</span>
                          </div>
                        </div>

                        {/* Project Specs */}
                        <div className="bg-white p-3.5 rounded border border-zinc-200 space-y-2">
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            <div>
                              <span className="text-zinc-500 block text-[10px]">Project Type</span>
                              <span className="font-semibold text-zinc-900">{selectedInquiry.projectType}</span>
                            </div>
                            <div>
                              <span className="text-zinc-500 block text-[10px]">Target Location</span>
                              <span className="font-semibold text-zinc-900">{selectedInquiry.projectLocation}</span>
                            </div>
                            <div>
                              <span className="text-zinc-500 block text-[10px]">Timeline</span>
                              <span className="font-semibold text-zinc-900">{selectedInquiry.targetTimeline}</span>
                            </div>
                            <div>
                              <span className="text-zinc-500 block text-[10px]">Lot Area</span>
                              <span className="font-semibold text-zinc-900">{selectedInquiry.lotArea || 'Not specified'}</span>
                            </div>
                            <div>
                              <span className="text-zinc-500 block text-[10px]">Estimated Floor</span>
                              <span className="font-semibold text-zinc-900">{selectedInquiry.estimatedFloorArea || 'Not specified'}</span>
                            </div>
                            <div>
                              <span className="text-zinc-500 block text-[10px]">Budget</span>
                              <span className="font-semibold text-zinc-900">{selectedInquiry.budgetRange || 'Flexible'}</span>
                            </div>
                          </div>

                          <div>
                            <span className="text-zinc-500 block text-[10px] uppercase font-bold mb-1">
                              Client Description
                            </span>
                            <p className="p-2 bg-zinc-50 rounded text-zinc-800 leading-relaxed border border-zinc-100">
                              {selectedInquiry.projectDescription}
                            </p>
                          </div>

                          {selectedInquiry.drawingFileName && (
                            <div className="flex items-center gap-2 p-2 bg-blue-50 border border-blue-100 rounded text-blue-900">
                              <FileText className="w-4 h-4 text-blue-600" />
                              <span>Attached Document: <strong>{selectedInquiry.drawingFileName}</strong></span>
                            </div>
                          )}
                        </div>

                        {/* Notes Management */}
                        <div className="space-y-2">
                          <label className="block text-xs font-semibold text-zinc-800">
                            Internal Engineering & Estimating Notes
                          </label>
                          {selectedInquiry.notes && (
                            <div className="p-2.5 bg-amber-50 border border-amber-200 rounded text-amber-900 text-xs">
                              {selectedInquiry.notes}
                            </div>
                          )}
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={noteText}
                              onChange={(e) => setNoteText(e.target.value)}
                              placeholder="Append engineering note or next step..."
                              className="flex-1 px-3 py-1.5 text-xs rounded border border-zinc-300 focus:border-[#C99A3D] focus:outline-none"
                            />
                            <button
                              onClick={() => handleSaveNote(selectedInquiry.id)}
                              className="px-3 py-1.5 text-xs font-semibold bg-[#0B1933] text-white rounded hover:bg-zinc-800"
                            >
                              Add Note
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-16 text-zinc-400">
                        Select an inquiry from the left panel to review technical details
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* TAB: PROJECTS EDITOR */}
            {activeTab === 'projects' && (
              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                    Live Verified Projects Database
                  </h4>
                  <span className="text-xs text-zinc-500">
                    Edits apply to client-side session and portfolio display
                  </span>
                </div>

                <div className="space-y-3">
                  {projectsList.map((project) => (
                    <div
                      key={project.id}
                      className="p-4 bg-white border border-zinc-200 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={project.imageUrl}
                          alt=""
                          className="w-16 h-12 rounded object-cover border border-zinc-200"
                        />
                        <div>
                          <span className="font-semibold text-xs text-zinc-900 block">{project.title}</span>
                          <span className="text-[11px] text-zinc-500">{project.categoryLabel} • {project.location}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-100 font-semibold text-zinc-700">
                          {project.status}
                        </span>
                        <button
                          onClick={() => setEditingProject(project)}
                          className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium border border-zinc-300 hover:border-[#C99A3D] rounded transition-colors"
                        >
                          <Edit3 className="w-3 h-3 text-[#C99A3D]" />
                          <span>Edit</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Edit Project Modal Overlay */}
                {editingProject && (
                  <div className="fixed inset-0 z-60 bg-black/50 flex items-center justify-center p-4">
                    <form
                      onSubmit={handleSaveProjectEdit}
                      className="bg-white rounded-lg p-6 max-w-lg w-full space-y-4 shadow-xl border border-zinc-300"
                    >
                      <div className="flex items-center justify-between border-b pb-2">
                        <h5 className="font-bold text-sm text-[#0B1933]">Edit Project: {editingProject.title}</h5>
                        <button type="button" onClick={() => setEditingProject(null)}>
                          <X className="w-4 h-4 text-zinc-500" />
                        </button>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold mb-1">Project Title</label>
                        <input
                          type="text"
                          value={editingProject.title}
                          onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                          className="w-full px-3 py-1.5 text-xs rounded border border-zinc-300"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold mb-1">Status</label>
                        <select
                          value={editingProject.status}
                          onChange={(e) => setEditingProject({ ...editingProject, status: e.target.value as any })}
                          className="w-full px-3 py-1.5 text-xs rounded border border-zinc-300"
                        >
                          <option value="Completed">Completed</option>
                          <option value="Ongoing">Ongoing</option>
                          <option value="Pre-Construction">Pre-Construction</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold mb-1">Description</label>
                        <textarea
                          rows={3}
                          value={editingProject.description}
                          onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                          className="w-full px-3 py-1.5 text-xs rounded border border-zinc-300"
                        />
                      </div>

                      <div className="flex justify-end gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => setEditingProject(null)}
                          className="px-3 py-1.5 text-xs border rounded"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-4 py-1.5 text-xs font-semibold bg-[#C99A3D] text-[#0B1933] rounded hover:bg-[#DFB86C]"
                        >
                          Save Changes
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            )}

            {/* TAB: CREDENTIALS */}
            {activeTab === 'credentials' && (
              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                  Regulatory Authorities & Licensing Filings
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {CORPORATE_CREDENTIALS.map((cred) => (
                    <div key={cred.id} className="p-4 bg-zinc-50 border border-zinc-200 rounded-lg space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-xs text-[#0B1933]">{cred.title}</span>
                        <span className="px-2 py-0.5 text-[10px] bg-green-100 text-green-800 font-bold rounded">
                          {cred.verificationStatus}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-600">Authority: {cred.issuingAuthority}</p>
                      <p className="text-[11px] text-zinc-500">{cred.scopeNote}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: AUDIT */}
            {activeTab === 'audit' && (
              <div className="flex-1 p-6 overflow-y-auto space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800">
                  Administrative Action Audit Trail
                </h4>
                <div className="border border-zinc-200 rounded-lg overflow-hidden text-xs">
                  <table className="w-full text-left">
                    <thead className="bg-zinc-100 text-zinc-700 border-b border-zinc-200">
                      <tr>
                        <th className="p-2.5">Timestamp</th>
                        <th className="p-2.5">User Role</th>
                        <th className="p-2.5">Action Logged</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 bg-white">
                      {auditLogs.map((log) => (
                        <tr key={log.id}>
                          <td className="p-2.5 font-mono text-[11px] text-zinc-500">{log.timestamp}</td>
                          <td className="p-2.5 font-semibold text-zinc-800">{log.user}</td>
                          <td className="p-2.5 text-zinc-600">{log.action}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
