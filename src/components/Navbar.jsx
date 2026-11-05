import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  ShieldCheck, 
  Menu, 
  X, 
  Calendar, 
  ExternalLink,
  ArrowRight,
  Headphones
} from 'lucide-react';

export default function Navbar({ currentPage, setCurrentPage, onOpenConsultation }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [clientPortalModal, setClientPortalModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Why Corporatec', id: 'why-us' },
    { name: 'Services', id: 'services' },
    { name: 'Technology', id: 'technology' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (sectionId) => {
    setMobileMenuOpen(false);
    
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (setCurrentPage) {
      setCurrentPage(sectionId);
    }
  };

  return (
    <>
      {/* 1. Top Utility Strip */}
      <div className="bg-slate-50/90 border-b border-slate-200/70 text-[11px] text-slate-500 py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3 sm:gap-5 whitespace-nowrap overflow-hidden">
            <span className="text-slate-600 font-medium">
              <strong className="text-slate-900 font-semibold">Mayfair Hub:</strong> 18 Conduit Street, London
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="hidden sm:flex items-center gap-1.5 text-slate-600">
              <Phone className="w-3 h-3 text-blue-700" />
              <span>Emergency 24/7:</span>
              <a href="tel:08006445500" className="text-blue-700 font-mono font-bold hover:underline">0800 644 5500</a>
            </span>
            <span className="hidden xl:inline text-slate-300">•</span>
            <span className="hidden xl:flex items-center gap-1.5 text-slate-600">
              <span>Mayfair Direct:</span>
              <a href="tel:02074092999" className="text-slate-800 hover:text-blue-700 font-mono font-semibold">020 7409 2999</a>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 whitespace-nowrap">
            <span className="hidden md:flex items-center gap-1.5 text-slate-600 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>ISO 27001 &amp; Cyber Essentials Plus Certified</span>
            </span>
            <span className="hidden md:inline text-slate-300">•</span>
            <button
              onClick={() => setClientPortalModal(true)}
              className="text-blue-700 hover:text-blue-800 font-semibold flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Client Portal</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>

      {/* 2. Main Executive Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/90 py-3' 
          : 'bg-white border-b border-slate-200 py-3.5 sm:py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4">
          
          {/* Official Organization Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center flex-shrink-0 group"
          >
            <img 
              src="/corporatec-official-logo.png" 
              alt="Corporatec (UK) Ltd" 
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]" 
            />
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="whitespace-nowrap px-3.5 py-2 rounded-lg text-xs xl:text-sm font-medium text-slate-600 hover:text-blue-700 hover:bg-slate-50 transition-all duration-150 cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Right Header Action Button */}
          <div className="hidden sm:flex items-center flex-shrink-0">
            <button
              onClick={onOpenConsultation}
              className="whitespace-nowrap bg-blue-700 hover:bg-blue-800 text-white text-xs xl:text-sm font-semibold px-5 sm:px-6 py-2.5 rounded-xl shadow-xs hover:shadow transition-all duration-200 active:scale-[0.98] flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Request Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenConsultation && onOpenConsultation(); }}
                className="w-full bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Consultation</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Client Portal Modal */}
      {clientPortalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 border border-slate-200 shadow-2xl relative">
            <button 
              onClick={() => setClientPortalModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950 font-display">Client Support Portal</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Access Corporatec's dedicated client ticketing and network health platform.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a 
                  href="https://support.corporatec.co.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-3 px-4 rounded-xl flex items-center justify-between transition-colors shadow-sm"
                >
                  <span>Launch IT Service Management Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600">
                  <div className="font-semibold text-slate-900 mb-0.5">Urgent Mission Critical Escalation?</div>
                  <div>Dial our 24/7 Mayfair desk directly at <a href="tel:08006445500" className="text-blue-700 font-mono font-bold hover:underline">0800 644 5500</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
