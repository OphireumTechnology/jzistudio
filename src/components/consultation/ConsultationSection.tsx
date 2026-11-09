import React, { useState } from 'react';
import { InquirySubmission, CORPORATE_IDENTITY, JZI_CONTACT } from '../../data/corporateData';
import { OfficialLogo } from '../brand/JziLogo';
import { CheckCircle2, AlertCircle, FileUp, Send, Search, PhoneCall, ShieldCheck, Copy, Check } from 'lucide-react';

interface ConsultationSectionProps {
  initialProjectType?: string;
  onInquirySubmitted?: (inquiry: InquirySubmission) => void;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  initialProjectType = '',
  onInquirySubmitted,
}) => {
  const [activeTab, setActiveTab] = useState<'submit' | 'lookup'>('submit');

  // Form State
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [projectType, setProjectType] = useState(initialProjectType || 'Residential Construction');
  const [projectLocation, setProjectLocation] = useState('');
  const [lotArea, setLotArea] = useState('');
  const [estimatedFloorArea, setEstimatedFloorArea] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [targetTimeline, setTargetTimeline] = useState('1 to 3 Months');
  const [projectDescription, setProjectDescription] = useState('');
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [privacyConsent, setPrivacyConsent] = useState(false);

  // Status & Validation States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReceipt, setSubmittedReceipt] = useState<InquirySubmission | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);

  // Status Lookup State
  const [lookupCode, setLookupCode] = useState('');
  const [lookupResult, setLookupResult] = useState<InquirySubmission | null | 'not_found'>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!contactNumber.trim()) {
      newErrors.contactNumber = 'Contact Number is required';
    } else if (contactNumber.trim().length < 7) {
      newErrors.contactNumber = 'Please provide a complete contact number';
    }
    if (!projectLocation.trim()) newErrors.projectLocation = 'Project Location is required';
    if (!projectDescription.trim() || projectDescription.trim().length < 20) {
      newErrors.projectDescription = 'Please provide at least 20 characters describing your project requirements';
    }
    if (!privacyConsent) {
      newErrors.privacyConsent = 'You must acknowledge the privacy consent to submit an inquiry';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 15 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, file: 'File exceeds 15MB limit. Please provide a smaller PDF or drawing.' }));
        return;
      }
      setUploadedFileName(file.name);
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.file;
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    const subject = encodeURIComponent('JZI Project Consultation: ' + projectType);
    const body = encodeURIComponent(`Name: ${fullName}\nCompany: ${companyName}\nEmail: ${email}\nPhone: ${contactNumber}\nProject: ${projectType}\nLocation: ${projectLocation}\nLot Area: ${lotArea}\nFloor Area: ${estimatedFloorArea}\nBudget: ${budgetRange}\nTimeline: ${targetTimeline}\nDescription: ${projectDescription}\n\nPlease attach drawings manually in your email application.`);
    window.location.href = `mailto:jziarchitectural@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setLookupResult('not_found');
  };

  return (
    <section id="consultation-section" className="py-20 bg-[#F8F6F1] border-t border-zinc-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div role="status" className="mb-6 rounded border border-amber-300 bg-amber-50 p-4 text-sm text-amber-950">Online inquiry opens your email application; please send the prepared message and attach drawings manually. Automated status tracking is not available. Contact JZI at {CORPORATE_IDENTITY.contact.email} or {CORPORATE_IDENTITY.contact.phone}.</div>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="flex justify-center mb-1">
            <OfficialLogo size={56} />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C99A3D]">
            Official Project Inquiry & Consultation
          </span>
          <h2 className="font-['Outfit'] text-2xl sm:text-3xl font-bold text-[#0B1933] tracking-tight">
            Consult With Our Architects & Engineers
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            Submit your project parameters for comprehensive architectural feasibility, structural engineering review, and preliminary cost projection.
          </p>

          {/* Mode Switcher */}
          <div className="inline-flex p-1 bg-white border border-zinc-200 rounded-lg shadow-sm mt-2">
            <button
              onClick={() => setActiveTab('submit')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
                activeTab === 'submit'
                  ? 'bg-[#0B1933] text-white shadow'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Email Project Inquiry
            </button>
            <button
              onClick={() => setActiveTab('lookup')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
                activeTab === 'lookup'
                  ? 'bg-[#0B1933] text-white shadow'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Status Tracking Unavailable
            </button>
          </div>
        </div>

        {/* TAB 1: SUBMISSION FORM */}
        {activeTab === 'submit' && (
          <div className="bg-white rounded-lg shadow-md border border-zinc-200 p-6 sm:p-10">
            {submittedReceipt ? (
              /* Success Confirmation Card */
              <div className="space-y-6 text-center max-w-xl mx-auto py-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-[#C99A3D]/10 text-[#C99A3D] rounded-full flex items-center justify-center mx-auto border border-[#C99A3D]/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-['Outfit'] text-xl font-bold text-[#0B1933]">
                    Inquiry Successfully Registered
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Your project details have been recorded in the JZI engineering queue. Our senior project architect and estimator will review your parameters and contact you within 24 to 48 business hours.
                  </p>
                </div>

                {/* Reference ID Banner */}
                <div className="p-4 bg-[#0B1933] text-white rounded-lg flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#C99A3D] font-semibold block">
                      Official Inquiry Reference Number
                    </span>
                    <span className="font-mono text-base font-bold text-white tracking-wider">
                      {submittedReceipt.referenceNo}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopyCode(submittedReceipt.referenceNo)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-xs font-medium rounded transition-colors"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5 text-[#DFB86C]" />}
                    <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
                  </button>
                </div>

                <div className="p-4 bg-zinc-50 border border-zinc-200 rounded text-left text-xs space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Client:</span>
                    <span className="font-medium text-zinc-900">{submittedReceipt.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Project Type:</span>
                    <span className="font-medium text-zinc-900">{submittedReceipt.projectType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Target Location:</span>
                    <span className="font-medium text-zinc-900">{submittedReceipt.projectLocation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Submission Date:</span>
                    <span className="font-medium text-zinc-900">
                      {new Date(submittedReceipt.submittedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSubmittedReceipt(null)}
                  className="px-5 py-2 text-xs font-semibold text-[#0B1933] bg-[#C99A3D] hover:bg-[#DFB86C] rounded transition-all shadow"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Client Identification */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-800 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Engr. Juan Dela Cruz"
                      className={`w-full px-3.5 py-2 text-xs rounded border ${
                        errors.fullName ? 'border-red-500 bg-red-50/50' : 'border-zinc-300 focus:border-[#C99A3D]'
                      } focus:outline-none transition-colors`}
                    />
                    {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-800 mb-1">
                      Company / Organization <span className="text-zinc-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Ayala Land / Private Development"
                      className="w-full px-3.5 py-2 text-xs rounded border border-zinc-300 focus:border-[#C99A3D] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-800 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="client@domain.com"
                      className={`w-full px-3.5 py-2 text-xs rounded border ${
                        errors.email ? 'border-red-500 bg-red-50/50' : 'border-zinc-300 focus:border-[#C99A3D]'
                      } focus:outline-none transition-colors`}
                    />
                    {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-800 mb-1">
                      Contact / Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={contactNumber}
                      onChange={(e) => setContactNumber(e.target.value)}
                      placeholder="+63 977 829 2851"
                      className={`w-full px-3.5 py-2 text-xs rounded border ${
                        errors.contactNumber ? 'border-red-500 bg-red-50/50' : 'border-zinc-300 focus:border-[#C99A3D]'
                      } focus:outline-none transition-colors`}
                    />
                    {errors.contactNumber && <p className="text-[11px] text-red-500 mt-1">{errors.contactNumber}</p>}
                  </div>
                </div>

                {/* Project Parameters */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-zinc-100">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-800 mb-1">
                      Project Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded border border-zinc-300 focus:border-[#C99A3D] focus:outline-none transition-colors bg-white"
                    >
                      <option value="Residential Construction">Residential Construction (Custom Villa / Duplex)</option>
                      <option value="Commercial & Restaurant Fit-Out">Commercial & Restaurant Fit-Out</option>
                      <option value="Civil Infrastructure & Paving">Civil Infrastructure & Paving (Road/Runway)</option>
                      <option value="Renewable Energy & Solar">Renewable Energy & Solar Farm</option>
                      <option value="Renovation & Retrofitting">Renovation & Structural Retrofitting</option>
                      <option value="Architectural & Engineering Design Only">Architectural & Engineering Design Only</option>
                      <option value="Project Management & Quantity Surveying">Project Management & Quantity Surveying</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-800 mb-1">
                      Project Location (City / Province) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={projectLocation}
                      onChange={(e) => setProjectLocation(e.target.value)}
                      placeholder="e.g. Nuvali, Santa Rosa, Laguna"
                      className={`w-full px-3.5 py-2 text-xs rounded border ${
                        errors.projectLocation ? 'border-red-500 bg-red-50/50' : 'border-zinc-300 focus:border-[#C99A3D]'
                      } focus:outline-none transition-colors`}
                    />
                    {errors.projectLocation && <p className="text-[11px] text-red-500 mt-1">{errors.projectLocation}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-800 mb-1">
                      Target Timeline
                    </label>
                    <select
                      value={targetTimeline}
                      onChange={(e) => setTargetTimeline(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded border border-zinc-300 focus:border-[#C99A3D] focus:outline-none transition-colors bg-white"
                    >
                      <option value="Immediate Mobilization (< 30 Days)">Immediate Mobilization (&lt; 30 Days)</option>
                      <option value="1 to 3 Months">1 to 3 Months</option>
                      <option value="3 to 6 Months">3 to 6 Months</option>
                      <option value="Planning & Feasibility Phase">Planning & Feasibility Phase</option>
                    </select>
                  </div>
                </div>

                {/* Dimensional & Budget Estimates */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-800 mb-1">
                      Lot Area <span className="text-zinc-400 font-normal">(sq.m)</span>
                    </label>
                    <input
                      type="text"
                      value={lotArea}
                      onChange={(e) => setLotArea(e.target.value)}
                      placeholder="e.g. 500 sq.m"
                      className="w-full px-3.5 py-2 text-xs rounded border border-zinc-300 focus:border-[#C99A3D] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-800 mb-1">
                      Estimated Floor Area <span className="text-zinc-400 font-normal">(sq.m)</span>
                    </label>
                    <input
                      type="text"
                      value={estimatedFloorArea}
                      onChange={(e) => setEstimatedFloorArea(e.target.value)}
                      placeholder="e.g. 380 sq.m"
                      className="w-full px-3.5 py-2 text-xs rounded border border-zinc-300 focus:border-[#C99A3D] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-800 mb-1">
                      Budget Range <span className="text-zinc-400 font-normal">(Optional)</span>
                    </label>
                    <select
                      value={budgetRange}
                      onChange={(e) => setBudgetRange(e.target.value)}
                      className="w-full px-3.5 py-2 text-xs rounded border border-zinc-300 focus:border-[#C99A3D] focus:outline-none transition-colors bg-white"
                    >
                      <option value="">Select Estimated Range</option>
                      <option value="₱3M – ₱8M">₱3M – ₱8M (Fit-Out / Minor Renovation)</option>
                      <option value="₱8M – ₱20M">₱8M – ₱20M (Medium Residence / Commercial)</option>
                      <option value="₱20M – ₱50M">₱20M – ₱50M (Luxury Residence / Multi-Unit)</option>
                      <option value="₱50M+">₱50M+ (Institutional / Infrastructure / Solar)</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-800 mb-1">
                    Project Description & Specific Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder="Describe your site conditions, aesthetic preferences, special equipment needs, or structural expectations..."
                    className={`w-full px-3.5 py-2.5 text-xs rounded border ${
                      errors.projectDescription ? 'border-red-500 bg-red-50/50' : 'border-zinc-300 focus:border-[#C99A3D]'
                    } focus:outline-none transition-colors`}
                  />
                  {errors.projectDescription && (
                    <p className="text-[11px] text-red-500 mt-1">{errors.projectDescription}</p>
                  )}
                </div>

                {/* Document Upload & Privacy Consent */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center pt-2 border-t border-zinc-100">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-800 mb-1">
                      Attach Lot Plan or Architectural Concept <span className="text-zinc-400 font-normal">(Optional, max 15MB)</span>
                    </label>
                    <label className="flex items-center gap-2 px-3 py-2 bg-zinc-50 border border-zinc-300 rounded cursor-pointer hover:bg-zinc-100 transition-colors">
                      <FileUp className="w-4 h-4 text-[#C99A3D]" />
                      <span className="text-xs text-zinc-600 truncate">
                        {uploadedFileName || 'Choose file (.pdf, .dwg, .jpg, .png)'}
                      </span>
                      <input
                        type="file"
                        accept=".pdf,.dwg,.jpg,.jpeg,.png"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                    {errors.file && <p className="text-[11px] text-red-500 mt-1">{errors.file}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={privacyConsent}
                        onChange={(e) => setPrivacyConsent(e.target.checked)}
                        className="mt-0.5 rounded border-zinc-300 text-[#0B1933] focus:ring-[#C99A3D]"
                      />
                      <span className="text-[11px] text-zinc-600 leading-tight">
                        I hereby authorize JZI Studio & Construction Services Inc. to process these technical parameters exclusively for project feasibility assessment and quotation in compliance with RA 10173 (Data Privacy Act).
                      </span>
                    </label>
                    {errors.privacyConsent && (
                      <p className="text-[11px] text-red-500">{errors.privacyConsent}</p>
                    )}
                  </div>
                </div>

                {/* Form Action Button */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <ShieldCheck className="w-4 h-4 text-[#C99A3D]" />
                    <span>Direct engineering dispatch • Zero third-party broker fees</span>
                  </div>

                  <button
                    type="submit"
                    disabled={false}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 text-xs font-bold uppercase tracking-wider text-[#0B1933] bg-gradient-to-r from-[#DFB86C] via-[#C99A3D] to-[#DFB86C] hover:brightness-105 active:scale-95 disabled:opacity-50 transition-all rounded shadow-md"
                  >
                    {isSubmitting ? (
                      <span>Validating Parameters...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Prepare Email Inquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* TAB 2: INQUIRY LOOKUP & STATUS TRACKER */}
        {activeTab === 'lookup' && (
          <div className="bg-white rounded-lg shadow-md border border-zinc-200 p-6 sm:p-10 max-w-xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h3 className="font-['Outfit'] font-bold text-lg text-[#0B1933]">
                Track Project Inquiry Status
              </h3>
              <p className="text-xs text-zinc-600">
                Enter your official JZI reference code (e.g. <span className="font-mono text-[#0B1933]">JZI-2026-XXXX</span>) issued upon inquiry registration.
              </p>
            </div>

            <form onSubmit={handleLookup} className="flex gap-2">
              <input
                type="text"
                value={lookupCode}
                onChange={(e) => setLookupCode(e.target.value)}
                placeholder="Enter Reference (e.g. JZI-2026-8801)"
                className="flex-1 px-4 py-2.5 text-xs font-mono uppercase rounded border border-zinc-300 focus:border-[#C99A3D] focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B1933] bg-[#C99A3D] hover:bg-[#DFB86C] rounded transition-all"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Search</span>
              </button>
            </form>

            {/* Lookup Results */}
            {lookupResult === 'not_found' && (
              <div className="p-4 bg-amber-50 border border-amber-200 rounded text-center text-xs text-amber-800 space-y-1">
                <AlertCircle className="w-5 h-5 mx-auto text-amber-600 mb-1" />
                <p className="text-[11px] text-amber-700">
                  Please verify your reference number or contact our project office at{' '}
                  <a href={JZI_CONTACT.phoneLink} className="font-semibold underline font-mono hover:text-[#0B1933]">
                    {JZI_CONTACT.phone}
                  </a>{' '}
                  or via email at{' '}
                  <a href={JZI_CONTACT.emailLink} className="font-semibold underline hover:text-[#0B1933]">
                    {JZI_CONTACT.email}
                  </a>.
                </p>
              </div>
            )}

            {lookupResult && lookupResult !== 'not_found' && (
              <div className="p-5 bg-zinc-50 border border-zinc-200 rounded-lg space-y-4 animate-in fade-in">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
                  <div>
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-semibold">Reference</span>
                    <span className="font-mono font-bold text-sm text-[#0B1933]">{lookupResult.referenceNo}</span>
                  </div>
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded ${
                    lookupResult.status === 'Scheduled Site Visit'
                      ? 'bg-emerald-100 text-emerald-800'
                      : lookupResult.status === 'In Review'
                      ? 'bg-blue-100 text-blue-800'
                      : lookupResult.status === 'Quoted'
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    Status: {lookupResult.status}
                  </span>
                </div>

                <div className="text-xs space-y-2 text-zinc-700">
                  <div>
                    <strong className="text-zinc-900">Client:</strong> {lookupResult.fullName}
                  </div>
                  <div>
                    <strong className="text-zinc-900">Project Type:</strong> {lookupResult.projectType}
                  </div>
                  <div>
                    <strong className="text-zinc-900">Target Location:</strong> {lookupResult.projectLocation}
                  </div>
                  {lookupResult.notes && (
                    <div className="p-2.5 bg-white border border-zinc-200 rounded text-xs text-zinc-800">
                      <strong className="block text-[#0B1933] mb-0.5">Engineering Office Update:</strong>
                      {lookupResult.notes}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
