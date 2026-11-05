import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  ShieldCheck, 
  Phone, 
  Building2, 
  Lock, 
  Sparkles,
  HelpCircle,
  Clock
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ConsultationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firmType: 'Hedge Fund (Active / Launching)',
    aumBracket: '£50M to £250M',
    primaryNeed: 'The Hedge Fund Launchpad (>50% Clients)',
    name: '',
    role: '',
    company: '',
    email: '',
    phone: '',
    preferredWindow: 'Within next 24 to 48 hours',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const firmTypes = [
    'Hedge Fund (Active / Launching)',
    'Fund Spinout / Day 0 Launch',
    'Private Equity & Credit',
    'Single or Multi Family Office'
  ];

  const primaryNeeds = [
    'The Hedge Fund Launchpad (>50% Clients)',
    'Outsourced CIO & Governance Strategy',
    'Cyber Security & Threat Audit',
    'Disaster Recovery & FCA Data Storage',
    '24/7/365 Mayfair Managed IT Support',
    'Office Relocation & Trading Desk Fit Out'
  ];

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      if (!formData.name || !formData.email || !formData.company) {
        setErrorMsg('Please complete your name, company, and corporate email address.');
        return;
      }
      setErrorMsg('');
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8 text-slate-800">
        
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-950 font-display">Schedule a CIO Consultation</h3>
                <p className="text-xs text-slate-500">Confidential discovery session with a dedicated Corporatec Technology Director</p>
              </div>
            </div>

            {/* Stepper Progress */}
            <div className="flex items-center justify-between mb-6 px-1">
              <div className={`text-xs font-semibold flex items-center gap-1.5 ${step >= 1 ? 'text-blue-700' : 'text-slate-400'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>1</span>
                <span>Profile</span>
              </div>
              <div className={`flex-1 h-0.5 mx-2 ${step >= 2 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
              <div className={`text-xs font-semibold flex items-center gap-1.5 ${step >= 2 ? 'text-blue-700' : 'text-slate-400'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>2</span>
                <span>Requirements</span>
              </div>
              <div className={`flex-1 h-0.5 mx-2 ${step >= 3 ? 'bg-blue-600' : 'bg-slate-200'}`}></div>
              <div className={`text-xs font-semibold flex items-center gap-1.5 ${step >= 3 ? 'text-blue-700' : 'text-slate-400'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-600'}`}>3</span>
                <span>Details</span>
              </div>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 rounded-lg bg-rose-50 border border-rose-300 text-xs text-rose-800">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleNext} className="space-y-4">
              
              {/* STEP 1: Organization Profile */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                      Select Your Organization Type
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {firmTypes.map((type, idx) => (
                        <button
                          type="button"
                          key={idx}
                          onClick={() => setFormData({ ...formData, firmType: type })}
                          className={`p-3 rounded-xl text-left text-xs font-medium border transition-all cursor-pointer ${
                            formData.firmType === type
                              ? 'bg-blue-50 border-blue-600 text-blue-900 font-bold shadow-xs'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                      Target Live Date / Timelines
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Immediate (0 to 30 Days)', '1 to 3 Months', 'Exploratory Review'].map((window, wIdx) => (
                        <button
                          type="button"
                          key={wIdx}
                          onClick={() => setFormData({ ...formData, preferredWindow: window })}
                          className={`p-2.5 rounded-lg text-center text-xs font-medium border transition-all cursor-pointer ${
                            formData.preferredWindow === window
                              ? 'bg-blue-50 border-blue-600 text-blue-900 font-bold'
                              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          {window}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Primary Technical Requirement */}
              {step === 2 && (
                <div className="space-y-4">
                  <label className="block text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wider">
                    Select Your Primary Technology Focus
                  </label>
                  <div className="space-y-2">
                    {primaryNeeds.map((need, nIdx) => (
                      <button
                        type="button"
                        key={nIdx}
                        onClick={() => setFormData({ ...formData, primaryNeed: need })}
                        className={`w-full p-3 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between cursor-pointer ${
                          formData.primaryNeed === need
                            ? 'bg-blue-50 border-blue-600 text-blue-900 font-bold shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                        }`}
                      >
                        <span>{need}</span>
                        {formData.primaryNeed === need && (
                          <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: Executive Contact Details */}
              {step === 3 && (
                <div className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Stephen Doherty"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">Executive Role</label>
                      <input
                        type="text"
                        placeholder="e.g. Chief Operating Officer"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">Firm / Investment Entity *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mayfair Capital LLP"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-700 mb-1">Corporate Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="s.doherty@firm.co.uk"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Direct Telephone</label>
                    <input
                      type="tel"
                      placeholder="+44 20 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Notes / Specific Concerns</label>
                    <textarea
                      rows={2}
                      placeholder="Optional notes regarding office move, Bloomberg connectivity, or launch date..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                ) : (
                  <div className="text-[11px] text-slate-500 flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Protected under mutual NDA</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{step === 3 ? 'Confirm Consultation Request' : 'Proceed to Next Step'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-bold text-slate-950 font-display">
              Consultation Scheduled
            </h3>

            <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.name}</strong>. A dedicated Technology Director from our Mayfair desk has received your request for <strong className="text-slate-900">{formData.company}</strong>.
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-slate-500">Service Focus:</span>
                <span className="text-slate-900 font-semibold">{formData.primaryNeed}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Target Timeframe:</span>
                <span className="text-slate-900 font-semibold">{formData.preferredWindow}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Emergency Desk:</span>
                <span className="text-blue-700 font-mono font-bold">0800 644 5500</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-xl shadow-sm transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
