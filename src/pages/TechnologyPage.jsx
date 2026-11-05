import React from 'react';
import { 
  Server, 
  ShieldCheck, 
  Globe2, 
  Activity, 
  Cpu, 
  HardDrive, 
  Lock, 
  ArrowRight, 
  Calendar,
  Layers,
  Database,
  Cloud,
  CheckCircle2
} from 'lucide-react';
import { technologyPillars } from '../data/companyData';

export default function TechnologyPage({ onOpenConsultation, onOpenDDQ }) {
  const verifiedTechStack = [
    { category: "Cloud & Virtualization", partners: ["Microsoft Azure", "Amazon Web Services (AWS)", "Microsoft 365 E5", "VMware vSphere"] },
    { category: "Security & Threat Telemetry", partners: ["Fortinet Enterprise Firewalls", "Cisco Systems", "Mimecast Email Security", "WatchGuard", "Duo Multi Factor Auth"] },
    { category: "Continuity & Storage", partners: ["Veeam Cloud Connect", "High Availability UK Tier 3 Data Centres", "Immutable FCA Archival Storage", "NetApp"] },
    { category: "Hardware & Infrastructure", partners: ["Dell Technologies", "HPE Enterprise Servers", "Cat6a/Cat7 High Density Cabling", "APC / Eaton Smart UPS"] }
  ];

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-16 text-slate-800 bg-white">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-widest font-mono">
          Architecture &amp; Capabilities
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display leading-tight">
          Performance, Resilience, and 100% Vendor Neutrality.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          A well designed IT infrastructure is essential if your business systems are to perform optimally at all times. Corporatec specializes in the design, development, and telemetry of IT architectures specific to the hedge fund industry.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {technologyPillars.map((pillar) => (
          <div key={pillar.id} className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                  <Server className="w-5 h-5" />
                </div>
              </div>

              <h2 className="text-xl font-bold text-slate-950 font-display">
                {pillar.title}
              </h2>
              <p className="text-xs font-semibold text-blue-700">
                "{pillar.subtitle}"
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2 font-mono">
                Key Components:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {pillar.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="text-[11px] bg-slate-50 border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* The Vendor Independence Advantage Callout */}
      <div className="bg-blue-50/70 rounded-3xl p-8 sm:p-10 border border-blue-200 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="text-xs font-bold text-blue-800 uppercase tracking-widest font-mono">
              Fiduciary Alignment
            </div>
            <h3 className="text-2xl font-bold text-slate-950 font-display">
              Why 100% Vendor Independence Saves Capital and Eliminates Lock In
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Many IT managed service providers maintain lucrative reseller quotas that incentivize them to push specific proprietary cloud platforms or overpriced hardware appliances. Corporatec is completely vendor independent. We guide you through the complexities of available technology, benchmarking multiple vendors to deliver impartial solutions tailored strictly to your fund's operational needs and budget.
            </p>
          </div>

          <div className="lg:col-span-4 flex items-center justify-start lg:justify-end">
            <button
              onClick={onOpenConsultation}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Request an Infrastructure Audit</span>
            </button>
          </div>
        </div>
      </div>

      {/* Technology Ecosystem Table */}
      <div className="space-y-6">
        <div>
          <div className="text-xs font-bold text-blue-700 uppercase tracking-widest font-mono">
            Supported Technology Ecosystem
          </div>
          <h2 className="text-2xl font-bold text-slate-950 font-display mt-1">
            Enterprise Platforms Engineered for Financial Services
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            We integrate, deploy, and manage tier one technologies with verified security and high availability configurations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verifiedTechStack.map((stack, idx) => (
            <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-3 text-xs">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono border-b border-slate-100 pb-2 text-blue-700">
                {stack.category}
              </h3>
              <ul className="space-y-2 text-slate-700">
                {stack.partners.map((partner, pIdx) => (
                  <li key={pIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{partner}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center space-y-4">
        <h3 className="text-xl font-bold text-slate-950 font-display">
          Ready to Modernize Your Fund's IT Architecture?
        </h3>
        <p className="text-xs text-slate-600 max-w-xl mx-auto">
          Contact our senior systems architects to schedule an independent technical review or cloud migration assessment.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Architecture Review</span>
          </button>
          <button
            onClick={onOpenDDQ}
            className="bg-white hover:bg-slate-100 text-slate-800 font-semibold text-xs px-5 py-3 rounded-xl border border-slate-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Download Security Specifications</span>
          </button>
        </div>
      </div>

    </div>
  );
}
