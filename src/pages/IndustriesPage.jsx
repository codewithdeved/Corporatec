import React from 'react';
import { 
  TrendingUp, 
  Rocket, 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  FileText, 
  Building2, 
  Lock 
} from 'lucide-react';
import { industrySectors } from '../data/companyData';

export default function IndustriesPage({ onOpenConsultation, onOpenDDQ }) {
  const iconMap = {
    TrendingUp: TrendingUp,
    Rocket: Rocket,
    Briefcase: Briefcase,
    ShieldCheck: ShieldCheck
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-16 text-slate-800 bg-white">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-widest font-mono">
          Sector Specialization
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display leading-tight">
          Tailored for the Unique Pressures of Alternative Asset Management.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Standard enterprise IT models fail in financial trading environments. A minute of downtime during volatile market conditions or a failed allocator due diligence review can cost millions.
        </p>
      </div>

      {/* 4 Sectors Deep Dive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {industrySectors.map((sector) => {
          const IconComp = iconMap[sector.icon] || TrendingUp;

          return (
            <div key={sector.id} className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-5 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-medium">
                    {sector.profile.split(',')[0]}
                  </span>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-950 font-display mb-1">
                    {sector.name}
                  </h2>
                  <p className="text-xs text-slate-500 font-mono">
                    {sector.profile}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs space-y-1">
                  <span className="text-[11px] font-bold text-rose-800 uppercase tracking-wider block font-mono">
                    Core Operational Vulnerability:
                  </span>
                  <p className="text-slate-700 leading-relaxed">
                    {sector.painPoints}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs space-y-1">
                  <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block font-mono">
                    How Corporatec Solves It:
                  </span>
                  <p className="text-slate-700 leading-relaxed">
                    {sector.howWeSolve}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-slate-50 hover:bg-slate-100 text-slate-800 hover:text-slate-950 text-xs font-semibold py-2.5 rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-blue-600" />
                  <span>Consult with Sector Director</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Regulatory Resilience Section */}
      <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 space-y-6">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-widest font-mono">
            Regulatory &amp; Operational Due Diligence (ODD)
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
            Built for FCA Record Keeping &amp; Institutional Governance
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Institutional allocators and family offices perform rigorous Operational Due Diligence (ODD) before investing. Corporatec ensures your infrastructure and storage protocols satisfy investor due diligence requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-xs">
          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="text-blue-700 font-bold font-mono text-xs">FCA Compliant Data Storage</div>
            <p className="text-slate-600 leading-relaxed">
              Strict immutable archival of electronic communications and trading records, meeting Financial Conduct Authority regulatory record keeping guidelines.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="text-emerald-700 font-bold font-mono text-xs">24/7/365 Disaster Recovery</div>
            <p className="text-slate-600 leading-relaxed">
              Geographically dispersed UK high security data centres with high availability remote access storage and rapid recovery failover.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="text-sky-700 font-bold font-mono text-xs">ISO 27001 Annual Audits</div>
            <p className="text-slate-600 leading-relaxed">
              Comprehensive third party surveillance audits verifying physical comms security, access governance, and encrypted multi datacenter replication.
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-wrap gap-4 items-center">
          <button
            onClick={onOpenDDQ}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-6 py-3 rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <FileText className="w-4 h-4" />
            <span>Request Institutional DDQ Summary</span>
          </button>
          <button
            onClick={onOpenConsultation}
            className="bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold px-5 py-3 rounded-xl border border-slate-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <Calendar className="w-4 h-4 text-blue-600" />
            <span>Schedule an ODD Readiness Review</span>
          </button>
        </div>
      </div>

    </div>
  );
}
