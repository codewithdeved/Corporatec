import React from 'react';
import { 
  ShieldCheck, 
  FileCheck, 
  Lock, 
  ExternalLink, 
  Download, 
  CheckCircle2, 
  Calendar,
  Building2,
  Award
} from 'lucide-react';
import { verifiedCertifications } from '../data/companyData';

export default function CompliancePage({ onOpenConsultation, onOpenDDQ }) {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-16 text-slate-800 bg-white">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-widest font-mono">
          Trust &amp; Governance Center
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display leading-tight">
          Independently Audited Institutional Security Standards.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          In alternative asset management, trust is verified through independent technical audits and rigorous compliance controls. Corporatec adheres to the gold standard of UK and international security governance.
        </p>
      </div>

      {/* Certifications Detailed Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {verifiedCertifications.map((cert) => (
          <div key={cert.id} className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-5 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                  Audited &amp; Active
                </span>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-950 font-display mb-1">
                  {cert.name}
                </h2>
                <p className="text-xs font-semibold text-blue-700">
                  {cert.title} • {cert.issuer}
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {cert.description}
              </p>

              {cert.auditScope && (
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-600 space-y-1">
                  <strong className="text-slate-800 block font-mono">Audit Scope:</strong>
                  <span>{cert.auditScope}</span>
                </div>
              )}
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              {cert.verificationUrl ? (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 transition-colors"
                >
                  <span>Verify with British Assessment Bureau</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="text-xs text-slate-500 font-mono">
                  Audited under UK NCSC / IASME Framework
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* DDQ Downloader Banner */}
      <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest font-mono">
              Operational Due Diligence Documentation
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
              Request Corporatec's Complete Institutional DDQ Dossier
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              Includes our formal Statement of Applicability, DR failover test logs, third party penetration test attestations, and ISO 27001 certificate schedules for inclusion in your investor data room.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center items-stretch lg:items-end">
            <button
              onClick={onOpenDDQ}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-6 py-3.5 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Institutional DDQ Pack</span>
            </button>
            <button
              onClick={onOpenConsultation}
              className="bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold px-5 py-3 rounded-xl border border-slate-300 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              <span>Book ODD Technical Briefing</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
