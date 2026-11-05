import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  Send,
  Building2,
  ExternalLink,
  Headphones
} from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    firm: '',
    email: '',
    phone: '',
    inquiryType: 'Outsourced CIO and Strategy',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 uppercase tracking-widest font-mono">
          Contact and Operations Desk
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 font-display leading-tight">
          Request a Consultation or Contact Our Engineering Desk.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Based in Mayfair and operating across London's financial district, our senior technology directors are available to discuss your fund's requirements under strict confidentiality.
        </p>
      </div>

      {/* Grid: Left Contact Info / Right Interactive Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Hotlines & Offices */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Priority Support Desk */}
          <div className="rounded-2xl p-6 border border-emerald-200 bg-emerald-50/70 shadow-sm space-y-3">
            <div className="text-xs font-bold text-emerald-800 uppercase font-mono tracking-wider">
              24/7/365 Emergency Support Hotline
            </div>
            <div className="text-2xl font-extrabold text-slate-950 font-mono-metric">
              <a href="tel:08006445500" className="hover:text-emerald-700 transition-colors">
                0800 644 5500
              </a>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              For active alternative investment clients experiencing mission critical disruptions, trading system incidents, or emergency escalation.
            </p>
          </div>

          {/* Offices List */}
          <div className="rounded-2xl p-6 border border-slate-200 bg-white shadow-sm space-y-5">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono text-blue-700">
              Corporate Locations
            </h3>

            <div className="space-y-4 text-xs text-slate-600">
              
              {/* Mayfair */}
              <div className="border-b border-slate-100 pb-4 space-y-1">
                <strong className="text-slate-950 text-sm flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>Mayfair Operations Hub</span>
                </strong>
                <div className="text-slate-600 pl-5">
                  18 Conduit Street, Mayfair, London, W1S 2XN
                </div>
                <div className="text-[11px] text-slate-500 pl-5 pt-1">
                  Direct Line: <a href="tel:02074092999" className="text-slate-800 font-semibold hover:text-blue-600 font-mono">020 7409 2999</a>
                </div>
              </div>

              {/* Hitchin */}
              <div className="space-y-1">
                <strong className="text-slate-950 text-sm flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>Registered Office and Administration</span>
                </strong>
                <div className="text-slate-600 pl-5">
                  First Floor Offices, 99 Bancroft, Hitchin, Hertfordshire, SG5 1NQ
                </div>
                <div className="text-[11px] text-slate-500 pl-5 pt-1">
                  General Enquiries: <a href="tel:08451307185" className="text-slate-800 font-semibold hover:text-blue-600 font-mono">0845 130 7185</a>
                </div>
              </div>

            </div>
          </div>

          {/* Direct Inboxes */}
          <div className="rounded-2xl p-6 border border-slate-200 bg-white shadow-sm space-y-3 text-xs">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono text-blue-700">
              Electronic Inquiries
            </h3>
            <div className="space-y-2 text-slate-600">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">General Enquiries:</span>
                <a href="mailto:info@corporatec.co.uk" className="text-blue-600 hover:underline font-mono font-medium">info@corporatec.co.uk</a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Executive Desk:</span>
                <a href="mailto:contact@corporatec.co.uk" className="text-blue-600 hover:underline font-mono font-medium">contact@corporatec.co.uk</a>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive Consultation & Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl p-6 sm:p-8 border border-slate-200 bg-white shadow-xl">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-950 font-display mb-1">
                    Send an Executive Inquiry
                  </h3>
                  <p className="text-xs text-slate-500">
                    All communications are handled with institutional discretion under standard mutual NDA guidelines.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Stephen Doherty"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Role / Executive Title</label>
                    <input
                      type="text"
                      placeholder="e.g. Chief Operating Officer"
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Firm / Investment Entity *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mayfair Capital LLP"
                      value={formData.firm}
                      onChange={(e) => setFormData({ ...formData, firm: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
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
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Contact Phone</label>
                    <input
                      type="tel"
                      placeholder="020 7409 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-700 mb-1">Nature of Inquiry</label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600"
                    >
                      <option value="The Hedge Fund Launchpad (>50% Clients)">The Hedge Fund Launchpad (&gt;50% Clients)</option>
                      <option value="Outsourced CIO and Strategy">Outsourced CIO and Strategy</option>
                      <option value="Cyber Security and Threat Audit">Cyber Security and Threat Audit</option>
                      <option value="Disaster Recovery and FCA Archival">Disaster Recovery and FCA Archival</option>
                      <option value="24/7 Mayfair Managed IT Support">24/7 Mayfair Managed IT Support</option>
                      <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">Brief Overview of Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your fund's timeline, current systems, or key operational objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-600 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {submitting ? (
                      <span>Dispatching Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Confidential Consultation Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-950 font-display mb-2">
                  Inquiry Dispatched Successfully
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your inquiry for <strong className="text-slate-900">{formData.firm}</strong> regarding <strong className="text-blue-700">{formData.inquiryType}</strong> has been forwarded directly to our senior directors.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-6 py-2.5 rounded-xl border border-slate-300 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
