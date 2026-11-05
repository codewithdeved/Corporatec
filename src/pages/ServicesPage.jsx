import React, { useState } from 'react';
import { 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Server, 
  Lock, 
  Building2, 
  Headphones, 
  FileText,
  ChevronRight
} from 'lucide-react';
import { coreServices } from '../data/companyData';

export default function ServicesPage({ onOpenConsultation, onOpenDDQ }) {
  const [selectedService, setSelectedService] = useState('all');

  const filteredServices = selectedService === 'all' 
    ? coreServices 
    : coreServices.filter(s => s.id === selectedService);

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-16 text-slate-800 bg-white">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-widest font-mono">
          Specialist Service Offerings
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display leading-tight">
          Complete Outsourced Technology Lifecycle Support.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          From turnkey fund launch architectures to around the clock Mayfair engineer dispatch, our services are engineered specifically for alternative investment firms with zero tolerance for downtime.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
        <button
          onClick={() => setSelectedService('all')}
          className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
            selectedService === 'all'
              ? 'bg-blue-600 text-white font-bold shadow-sm'
              : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
          }`}
        >
          All Offerings ({coreServices.length})
        </button>

        {coreServices.map((s) => (
          <button
            key={s.id}
            onClick={() => setSelectedService(s.id)}
            className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
              selectedService === s.id
                ? 'bg-blue-600 text-white font-bold shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
            }`}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* The Hedge Fund Launchpad Featured Section */}
      {(selectedService === 'all' || selectedService === 'fund-launchpad') && (
        <div id="fund-launchpad" className="bg-blue-50/70 rounded-3xl p-8 sm:p-10 border border-blue-200 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-bold text-blue-800 uppercase tracking-widest font-mono">
              Turnkey Launchpad: Over 50% of Clients Partnered at Startup
            </div>
            <div className="text-xs font-mono text-slate-700 font-semibold">
              Target Timeline: 21 to 30 Days to Live Trading
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
              The Hedge Fund Launchpad: From Incorporation to Live Trading
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-3xl">
              Setting up an alternative investment manager in London requires managing landlord permissions, structured cabling, multi screen trading monitors, low latency market feeds (Bloomberg / Refinitiv), immutable FCA email archives, and investor due diligence questionnaires. Corporatec delivers complete turnkey launch services so founders can focus strictly on capital raising and portfolio strategies.
            </p>
          </div>

          {/* 4 Phase Roadmap */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
              <div className="text-blue-700 font-mono text-xs font-bold">Phase 1: Days 1 to 7</div>
              <div className="text-slate-900 text-xs font-bold">Premises &amp; Comms Cabling</div>
              <p className="text-[11px] text-slate-600">Trading floor Cat6a cabling, server cabinet cooling, dual leased line procurement.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
              <div className="text-blue-700 font-mono text-xs font-bold">Phase 2: Days 8 to 15</div>
              <div className="text-slate-900 text-xs font-bold">Zero Trust Cloud &amp; Identity</div>
              <p className="text-[11px] text-slate-600">Microsoft 365 E5 security, hardware MFA tokens, encrypted virtual desktops.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
              <div className="text-blue-700 font-mono text-xs font-bold">Phase 3: Days 16 to 22</div>
              <div className="text-slate-900 text-xs font-bold">Trading Desk &amp; Feeds</div>
              <p className="text-[11px] text-slate-600">Bloomberg Professional terminal feeds, execution venue connectivity, trading workstations.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1.5">
              <div className="text-blue-700 font-mono text-xs font-bold">Phase 4: Days 23 to 30</div>
              <div className="text-slate-900 text-xs font-bold">FCA Archival &amp; ODD Sign Off</div>
              <p className="text-[11px] text-slate-600">Immutable trade email storage, penetration test audit, investor DDQ verification.</p>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <button
              onClick={onOpenConsultation}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-5 py-3 rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Discuss a New Fund Launch</span>
            </button>
            <button
              onClick={onOpenDDQ}
              className="bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold px-4 py-3 rounded-xl border border-slate-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <FileText className="w-4 h-4 text-emerald-600" />
              <span>Request Launchpad Checklist</span>
            </button>
          </div>
        </div>
      )}

      {/* Services Detailed Cards */}
      <div className="space-y-10">
        {filteredServices.map((service) => (
          <div 
            key={service.id}
            id={service.id}
            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Core Info */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
                      {service.title}
                    </h2>
                    <p className="text-xs font-semibold text-blue-700">{service.tagline}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.shortDesc}
                </p>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono">
                    Scope of Deliverables:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {service.deliverables.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column: SLA & Target Audience Box */}
              <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-4 text-xs">
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                    Ideal Audience:
                  </span>
                  <div className="text-slate-800 font-medium">
                    {service.audience}
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-3">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                    Service Level Guarantee (SLA):
                  </span>
                  <div className="text-emerald-700 font-mono font-bold">
                    {service.sla}
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4 flex flex-col gap-2">
                  <button
                    onClick={onOpenConsultation}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Inquire About {service.title}</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center space-y-4">
        <h3 className="text-xl font-bold text-slate-950 font-display">
          Need a Tailored Service Level Agreement for Your Firm?
        </h3>
        <p className="text-xs text-slate-600 max-w-xl mx-auto">
          We customize IT roadmaps and support agreements to align with your specific trading hours, headcount, and investor requirements.
        </p>
        <button
          onClick={onOpenConsultation}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Request Custom SLA Proposal</span>
        </button>
      </div>

    </div>
  );
}
