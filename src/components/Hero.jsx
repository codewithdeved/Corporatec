import React from 'react';
import { ArrowRight, Calendar, MapPin, Phone } from 'lucide-react';

export default function Hero({ onOpenConsultation }) {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative bg-white pt-14 pb-20 lg:pt-20 lg:pb-24 overflow-hidden border-b border-slate-200/80">
      
      {/* Subtle Ambient Light Texture */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-slate-50/70 via-transparent to-transparent pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): Editorial Typographic Authority */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.65rem] font-black text-slate-950 font-display leading-[1.06] tracking-tight">
              Outsourced CIO Services for{' '}
              <span className="text-blue-700">Hedge Funds.</span>
            </h1>

            {/* Authentic Tagline */}
            <div className="text-xl sm:text-2xl font-serif italic text-slate-500 font-normal">
              "Design, Integrate, Succeed..."
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              For over 25 years, Corporatec has delivered specialized IT infrastructure, cybersecurity, disaster recovery, and strategic technology consultancy tailored to the rigorous demands of London's financial trading sector.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation || scrollToContact}
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm px-7 py-4 rounded-xl shadow-xs hover:shadow-md transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={scrollToServices}
                className="bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm px-7 py-4 rounded-xl transition-all duration-200 border border-slate-300 hover:border-slate-400 cursor-pointer shadow-2xs active:scale-[0.98] text-center"
              >
                <span>Explore Client Services</span>
              </button>
            </div>

            {/* Reassurance text */}
            <div className="text-xs text-slate-500 pt-1">
              Trusted by London hedge funds and alternative investment managers since 2000.
            </div>

          </div>

          {/* Right Column (5 cols): Visual Asset with Mayfair Operational Anchor */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Main Architectural Image Container */}
              <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl bg-slate-100 aspect-[4/3] sm:aspect-[16/11]">
                <img 
                  src="/assets/images/london-architecture.jpg" 
                  alt="London Financial District Architecture" 
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Gentle Gradient Scrim for contrast at the base */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                {/* Overlaid Inset Text inside Image */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-mono uppercase tracking-widest text-blue-200 font-semibold mb-1">
                    London Operations
                  </div>
                  <div className="text-base sm:text-lg font-bold font-display leading-tight">
                    Mayfair Hub • 18 Conduit Street
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Sub 30 minute onsite response to West End &amp; City funds
                  </div>
                </div>
              </div>

              {/* Sub-card anchored below the image */}
              <div className="mt-4 bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200 flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                    Emergency Desk 24/7/365
                  </div>
                  <div className="text-sm sm:text-base font-bold font-mono text-slate-900">
                    <a href="tel:08006445500" className="hover:text-blue-700 transition-colors">
                      0800 644 5500
                    </a>
                  </div>
                </div>

                <div className="text-right space-y-0.5 border-l border-slate-200 pl-4">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                    Mayfair Direct Line
                  </div>
                  <div className="text-sm sm:text-base font-bold font-mono text-slate-900">
                    <a href="tel:02074092999" className="hover:text-blue-700 transition-colors">
                      020 7409 2999
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Metric Strip with Hairline Dividers */}
        <div className="mt-16 pt-10 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-0 text-center">
          <div className="sm:pr-6 sm:border-r sm:border-slate-200/80 space-y-1">
            <div className="text-3xl font-extrabold text-slate-950 font-display tracking-tight">25+ Years</div>
            <div className="text-xs text-slate-500 font-medium">Financial Sector Pedigree</div>
          </div>
          <div className="sm:px-6 sm:border-r sm:border-slate-200/80 space-y-1">
            <div className="text-3xl font-extrabold text-slate-950 font-display tracking-tight">&gt;50% of Clients</div>
            <div className="text-xs text-slate-500 font-medium">Partnered at Fund Launch</div>
          </div>
          <div className="sm:pl-6 space-y-1">
            <div className="text-3xl font-extrabold text-slate-950 font-display tracking-tight">Mayfair &amp; City</div>
            <div className="text-xs text-slate-500 font-medium">Onsite West End Rapid Dispatch</div>
          </div>
        </div>

      </div>

    </section>
  );
}
