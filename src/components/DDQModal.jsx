import React, { useState } from 'react';
import { 
  X, 
  FileText, 
  Download, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  Building2, 
  ArrowRight,
  FileCheck
} from 'lucide-react';
import { verifiedCertifications } from '../data/companyData';

export default function DDQModal({ isOpen, onClose }) {
  const [downloaded, setDownloaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    firm: '',
    email: '',
    agreeNda: true
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.firm) return;
    setDownloaded(true);
  };

  const handleReset = () => {
    setDownloaded(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-8 text-slate-800">
        
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!downloaded ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950 font-display">Institutional DDQ &amp; Compliance Pack</h3>
                <p className="text-xs text-slate-500">Audited operational due diligence pack for investment allocators</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 mb-5 leading-relaxed">
              Provides hedge fund COOs and institutional allocators with verified architecture documentation, SLA schedules, disaster recovery failover benchmarks, and accredited certification seals.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 mb-5 space-y-2 text-xs">
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Included in This Dossier:
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>ISO 27001:2022 &amp; ISO 9001 British Assessment Bureau Statement of Applicability</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Cyber Essentials Plus Technical Verification &amp; Vulnerability Audit Scope</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>Disaster Recovery &amp; Business Continuity Architecture (Under 15m RTO / RPO)</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>FCA Compliant Trade Archival &amp; Redundant UK Data Center Infrastructure</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Stephen Doherty"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Fund / Institution Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mayfair Partners"
                    value={formData.firm}
                    onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Corporate Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="s.doherty@fund.co.uk"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-3 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Access Institutional Due Diligence Pack</span>
                </button>
              </div>
              <div className="text-[10px] text-center text-slate-500">
                Commercial In Confidence • Protected by standard institutional mutual NDA guidelines
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <h3 className="text-lg font-bold text-slate-950 font-display mb-1">
              Dossier Generated Successfully
            </h3>
            <p className="text-xs text-slate-600 max-w-sm mx-auto mb-5 leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. The Corporatec Institutional ODD Pack has been dispatched to <strong className="text-blue-700">{formData.email}</strong>.
            </p>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-left max-w-sm mx-auto mb-5 text-xs text-slate-700 space-y-1">
              <div><strong className="text-slate-500">Recipient:</strong> {formData.firm}</div>
              <div><strong className="text-slate-500">Document:</strong> Corporatec Institutional ODD Dossier</div>
              <div><strong className="text-slate-500">Classification:</strong> Confidential / Investor Due Diligence</div>
            </div>

            <button
              onClick={handleReset}
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
