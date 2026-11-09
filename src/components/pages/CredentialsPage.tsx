import React, { useState } from 'react';
import { CORPORATE_CREDENTIALS, CredentialItem, CORPORATE_IDENTITY } from '../../data/corporateData';
import { OfficialLogo } from '../brand/JziLogo';
import { ShieldCheck, FileCheck, CheckCircle2, Lock, ExternalLink, X, Building, Award } from 'lucide-react';

export const CredentialsPage: React.FC = () => {
  const [selectedCredential, setSelectedCredential] = useState<CredentialItem | null>(null);

  return (
    <div className="pt-24 pb-20 space-y-16">
      {/* Header */}
      <section className="bg-[#0B1933] text-white py-16 border-b border-[#C99A3D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center max-w-3xl">
          <div className="flex justify-center mb-1">
            <OfficialLogo size={60} />
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#C99A3D]/40 bg-white/5 text-[11px] font-semibold text-[#DFB86C] uppercase tracking-widest">
            <span>Corporate Compliance & Accreditations (PDF p. 34)</span>
          </div>
          <h1 className="font-['Outfit'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Licenses, Permits & Credentials
          </h1>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Documented regulatory authority filings confirming lawful operation, PCAB general contracting classification, SEC corporate charter, and occupational safety approval in the Republic of the Philippines.
          </p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C99A3D]">
            Official Filings
          </span>
          <h2 className="font-['Outfit'] text-2xl sm:text-3xl font-bold text-[#0B1933]">
            Verified Corporate Regulatory Documents
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600">
            Click on any credential to inspect the verified filing parameters and regulatory scope note.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORPORATE_CREDENTIALS.map((cred) => (
            <div
              key={cred.id}
              onClick={() => setSelectedCredential(cred)}
              className="bg-white rounded-lg border border-zinc-200 p-6 hover:border-[#C99A3D] transition-all shadow-sm hover:shadow-lg cursor-pointer space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded bg-[#F8F6F1] border border-zinc-200 flex items-center justify-center text-[#C99A3D]">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 rounded border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{cred.verificationStatus}</span>
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest block">
                    {cred.category}
                  </span>
                  <h3 className="font-['Outfit'] font-bold text-base text-[#0B1933] mt-0.5">
                    {cred.title}
                  </h3>
                </div>

                <div className="p-3 bg-zinc-50 border border-zinc-100 rounded text-xs space-y-1">
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase font-bold">Issuing Authority</span>
                    <span className="font-semibold text-zinc-800">{cred.issuingAuthority}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase font-bold">Filing Identification</span>
                    <span className="font-mono text-zinc-700">{cred.registrationNumberMasked}</span>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed">
                  {cred.scopeNote}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-[#0B1933] hover:text-[#C99A3D]">
                <span>Inspect Certificate Scope</span>
                <span>&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 bg-[#0B1933] text-white rounded-xl border border-[#C99A3D]/40 space-y-3">
          <div className="flex items-center gap-2 text-[#DFB86C]">
            <ShieldCheck className="w-5 h-5" />
            <h4 className="font-['Outfit'] font-bold text-sm uppercase tracking-wider">
              Verification & Public Disclosure Standards
            </h4>
          </div>
          <p className="text-xs text-zinc-300 leading-relaxed">
            In accordance with Republic Act No. 4566 (Contractor's License Law) and SEC reporting mandates, full original certified true copies of all municipal licenses, PCAB accreditation boards, and tax clearances are available to bona fide project owners, bidding authorities, and lending institutions upon mutual non-disclosure execution.
          </p>
          <p className="text-[11px] text-zinc-400 italic">
            {CORPORATE_IDENTITY.professionalDisclaimer}
          </p>
        </div>
      </section>

      {/* Document Detail Modal */}
      {selectedCredential && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl overflow-hidden border border-zinc-200">
            {/* Modal Header */}
            <div className="bg-[#0B1933] px-6 py-4 flex items-center justify-between border-b border-[#C99A3D]/30">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#DFB86C]" />
                <h4 className="font-['Outfit'] font-bold text-white text-base">
                  Authorized Credential Preview
                </h4>
              </div>
              <button
                onClick={() => setSelectedCredential(null)}
                className="p-1 text-zinc-400 hover:text-white"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4 text-xs">
              <div className="p-4 bg-[#F8F6F1] border border-zinc-200 rounded text-center space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C99A3D] block">
                  Official Document Charter
                </span>
                <h5 className="font-['Outfit'] font-bold text-lg text-[#0B1933]">
                  {selectedCredential.title}
                </h5>
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-full">
                  Status: {selectedCredential.verificationStatus}
                </span>
              </div>

              <div className="space-y-2 text-zinc-700">
                <div className="flex justify-between border-b pb-1.5">
                  <span className="text-zinc-500">Issuing Entity:</span>
                  <span className="font-semibold text-zinc-900">{selectedCredential.issuingAuthority}</span>
                </div>
                <div className="flex justify-between border-b pb-1.5">
                  <span className="text-zinc-500">Classification:</span>
                  <span className="font-semibold text-zinc-900">{selectedCredential.category}</span>
                </div>
                <div className="flex justify-between border-b pb-1.5">
                  <span className="text-zinc-500">Masked Filing ID:</span>
                  <span className="font-mono text-zinc-900">{selectedCredential.registrationNumberMasked}</span>
                </div>
                <div className="pt-2">
                  <span className="text-zinc-500 block mb-1 font-semibold">Authorized Operating Scope:</span>
                  <p className="p-2.5 bg-zinc-50 border rounded text-zinc-800 leading-relaxed">
                    {selectedCredential.scopeNote}
                  </p>
                </div>
              </div>

              <div className="p-3 bg-zinc-50 rounded border text-[11px] text-zinc-500">
                For tender qualification packages, request certified documents via the authorized staff portal or through formal project inquiry submission.
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedCredential(null)}
                  className="px-4 py-2 text-xs font-semibold bg-[#0B1933] text-white rounded hover:bg-zinc-800"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
