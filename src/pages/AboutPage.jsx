import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Users, 
  MapPin, 
  CheckCircle2, 
  ArrowRight, 
  Calendar,
  Lock,
  Layers,
  FileCheck
} from 'lucide-react';
import { companyInfo, verifiedCertifications, clientTestimonials } from '../data/companyData';

export default function AboutPage({ onOpenConsultation, onOpenDDQ }) {
  return (
    <div className="space-y-0 text-slate-800 bg-white">
      
      {/* 1. Header Banner */}
      <section className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-8 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-widest font-mono">
              About Corporatec (UK) Ltd
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 font-display leading-tight">
              Over 25 Years of Dedicated Technology Leadership in London's Financial Sector.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Corporatec (UK) Ltd provides complete outsourced technology lifecycle support, infrastructure engineering, and governance strategy tailored exclusively for hedge funds, fund management, and private equity firms.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Heritage Section: Clean Light Section with Mayfair Photo */}
      <section className="bg-white py-20 px-4 sm:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-sm text-slate-700 leading-relaxed">
              <div className="text-xs font-bold text-blue-700 uppercase tracking-widest font-mono">
                Our Proven Pedigree
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 font-display">
                The Alternative Investment IT Specialist Since 2000
              </h2>
              <p>
                Established in 2000 and operating as Corporatec (UK) Limited (Company No: 08656863), we have dedicated our entire organizational history to solving the mission critical technology challenges of alternative investment managers.
              </p>
              <p>
                The IT needs of hedge funds and financial traders are both highly specific and business critical. Reliable and up to date technology is the lifeblood of a successful trading operation. Getting it right demands specialist knowledge that standard enterprise IT providers simply do not possess.
              </p>
              <p>
                We combine the depth of an elite specialist practice with the responsiveness and agility of an in house team, without executive overhead. Our consultants and systems engineers are dedicated to leaving you free to focus on investment performance, confident that your technology and compliance needs are in safe, professional hands.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1 font-display">Longevity Over Profits</strong>
                  <span className="text-xs text-slate-600">We prioritize long term client relationships and satisfaction over transactional margins.</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <strong className="text-slate-900 block mb-1 font-display">Unlimited Tier 1 Capacity</strong>
                  <span className="text-xs text-slate-600">We provide resources at every level and make them available in an unlimited, responsive capacity.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative bg-white">
                <img 
                  src="/assets/images/mayfair-london.jpg" 
                  alt="Mayfair London Corporate Location" 
                  className="w-full h-80 object-cover object-center" 
                />
                <div className="p-6 bg-slate-50 border-t border-slate-200 text-slate-700 space-y-3 text-xs">
                  <div className="font-mono text-blue-700 font-bold uppercase text-[11px]">Corporate Transparency</div>
                  <div className="space-y-2 text-slate-600">
                    <div className="flex justify-between border-b border-slate-200 pb-1.5">
                      <span>Entity Name:</span>
                      <strong className="text-slate-900">Corporatec (UK) Limited</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-1.5">
                      <span>Company Registration:</span>
                      <strong className="text-slate-900 font-mono">{companyInfo.companyNumber}</strong>
                    </div>
                    <div className="flex justify-between border-b border-slate-200 pb-1.5">
                      <span>VAT Registration:</span>
                      <strong className="text-slate-900 font-mono">{companyInfo.vatNumber}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Accreditations:</span>
                      <strong className="text-emerald-700 font-semibold">ISO 27001, ISO 9001, CE+</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. The 8 Corporatec Key Operating Principles */}
      <section className="bg-slate-50 py-16 px-4 sm:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-bold text-blue-700 uppercase tracking-widest font-mono">
              Key Facts &amp; Operational Philosophy
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-display">
              Built Specifically for Alternative Investment Demands
            </h2>
            <p className="text-sm text-slate-600">
              Our core operating standards developed over 25 years serving London alternative investment managers and financial traders.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-slate-900 text-sm">Industry Insight</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We have industry insight and understanding and can provide the precise level of attention you require.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-slate-900 text-sm">Longevity Over Profits</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We value client longevity and satisfaction over short term profits, building enduring partnerships.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-slate-900 text-sm">Niche Focus Excellence</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Operating strictly in a specialized niche market means that we consistently maintain the highest levels of service.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-slate-900 text-sm">Unlimited Capacity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We provide resources at every level and make them available to your firm in an unlimited capacity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-slate-900 text-sm">Beyond Basic Maintenance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We create deep strategic relationships that extend far beyond a basic vendor maintenance agreement.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-slate-900 text-sm">Fund &amp; PE Specialization</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our clients are predominantly in the fund management and private equity sector with extreme dependency on technology.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-slate-900 text-sm">Timely &amp; Transparent</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We create a highly accessible and responsive IT department providing services in a timely and transparent manner.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-slate-900 text-sm">Prime West End Hub</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our West End office is in a prime location and underlines our commitment to rapid onsite response times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership & Executive Governance */}
      <section className="bg-white py-20 px-4 sm:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-bold text-blue-700 uppercase tracking-widest font-mono">
              Leadership &amp; Executive Governance
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-display">
              Experienced Directors Guiding Institutional Standards
            </h2>
            <p className="text-xs text-slate-500">
              Meet the executive leadership overseeing Corporatec's technical infrastructure and institutional partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyInfo.leadership.map((leader, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-7 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 font-bold font-display text-xl">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950 font-display">{leader.name}</h3>
                    <p className="text-xs font-semibold text-blue-700">{leader.role}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Verified Client Testimonials */}
      <section className="bg-slate-50 py-20 px-4 sm:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-bold text-blue-700 uppercase tracking-widest font-mono">
              Client Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-display">
              What Our Clients Say
            </h2>
            <p className="text-sm text-slate-600">
              Verified testimonials from Chief Operating Officers, Founding Partners, and Operations Managers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTestimonials.map((t) => (
              <div 
                key={t.id} 
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700">
                    <Award className="w-5 h-5" />
                  </div>
                  <blockquote className="text-sm sm:text-base font-normal text-slate-800 leading-relaxed italic">
                    "{t.quote}"
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-1">
                  <div className="text-base font-bold text-slate-950 font-display">
                    {t.author}
                  </div>
                  <div className="text-xs font-semibold text-blue-700">
                    {t.role}
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    {t.type} • {t.context}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Geographic Office Footprint */}
      <section className="bg-white py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-bold text-blue-700 uppercase tracking-widest font-mono">
              Dual Office Footprint
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-display">
              Prime Mayfair Hub &amp; Central Administration
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyInfo.offices.map((office, oIdx) => (
              <div key={oIdx} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>{office.type}</span>
                  </span>
                  {office.isPrimary && (
                    <span className="text-[10px] bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded font-mono font-bold">
                      Operations HQ
                    </span>
                  )}
                </div>
                <div className="text-base font-bold text-slate-900">
                  {office.address}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {office.purpose}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 text-center">
            <button
              onClick={onOpenConsultation}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-8 py-4 rounded-xl shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule an Executive Consultation</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
