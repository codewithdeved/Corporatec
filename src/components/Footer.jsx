import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight, 
  Lock, 
  FileCheck, 
  ExternalLink
} from 'lucide-react';

export default function Footer({ onOpenConsultation }) {
  const currentYear = new Date().getFullYear();

  const handleNav = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 text-sm">
      
      {/* Upper Accreditations Strip */}
      <div className="border-b border-slate-200 bg-white py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-slate-900 font-bold text-sm">Independently Audited Accreditations</div>
              <div className="text-xs text-slate-500">Committed to institutional standards for alternative investment firms</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium">
              <FileCheck className="w-4 h-4 text-blue-700" />
              <span>ISO 27001</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium">
              <FileCheck className="w-4 h-4 text-blue-700" />
              <span>ISO 9001</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium">
              <Lock className="w-4 h-4 text-blue-700" />
              <span>Cyber Essentials Plus</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-blue-700" />
              <span>FCA Compliant Storage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="cursor-pointer" onClick={() => handleNav('home')}>
            <img 
              src="/corporatec-official-logo.png" 
              alt="Corporatec (UK) Ltd" 
              className="h-10 sm:h-11 w-auto object-contain" 
            />
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Established in 2000, Corporatec provides complete outsourced CIO services, IT solutions, cybersecurity, disaster recovery, data backup, consultancy and support for hedge funds and investment firms in London.
          </p>
          <div className="pt-1">
            <a 
              href="https://www.linkedin.com/company/corporatec-uk/about/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-blue-700 hover:text-blue-800 font-medium"
            >
              <span>Follow Corporatec on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div>
          <h4 className="text-slate-900 font-bold text-xs tracking-wider uppercase mb-4 font-mono">
            Client Services
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <button onClick={() => handleNav('services')} className="hover:text-blue-700 transition-colors cursor-pointer text-slate-600">
                Consultancy &amp; Outsourced CIO
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('services')} className="hover:text-blue-700 transition-colors cursor-pointer text-slate-600">
                Business Startup (Fund Launchpad)
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('services')} className="hover:text-blue-700 transition-colors cursor-pointer text-slate-600">
                Disaster Recovery &amp; Continuity
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('services')} className="hover:text-blue-700 transition-colors cursor-pointer text-slate-600">
                Cyber Security &amp; Audits
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('services')} className="hover:text-blue-700 transition-colors cursor-pointer text-slate-600">
                24/7 Managed IT Support
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3: Navigation */}
        <div>
          <h4 className="text-slate-900 font-bold text-xs tracking-wider uppercase mb-4 font-mono">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <button onClick={() => handleNav('home')} className="hover:text-blue-700 transition-colors cursor-pointer text-slate-600">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('about')} className="hover:text-blue-700 transition-colors cursor-pointer text-slate-600">
                Who We Are
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('why-us')} className="hover:text-blue-700 transition-colors cursor-pointer text-slate-600">
                Why Corporatec
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('services')} className="hover:text-blue-700 transition-colors cursor-pointer text-slate-600">
                Client Services
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('technology')} className="hover:text-blue-700 transition-colors cursor-pointer text-slate-600">
                Technology
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('contact')} className="hover:text-blue-700 transition-colors cursor-pointer text-slate-600">
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Offices & Hotlines */}
        <div className="space-y-3 text-xs">
          <h4 className="text-slate-900 font-bold text-xs tracking-wider uppercase mb-4 font-mono">
            Offices &amp; Hotlines
          </h4>
          
          <div className="space-y-1">
            <div className="font-semibold text-slate-900">Mayfair Operations Hub:</div>
            <div className="text-slate-500">18 Conduit Street, Mayfair, London, W1S 2XN</div>
            <div>Direct Line: <a href="tel:02074092999" className="text-blue-700 font-mono">020 7409 2999</a></div>
          </div>

          <div className="space-y-1 pt-2">
            <div className="font-semibold text-slate-900">Registered Office:</div>
            <div className="text-slate-500">First Floor Offices, 99 Bancroft, Hitchin, SG5 1NQ</div>
            <div>General Enquiries: <a href="tel:08451307185" className="text-blue-700 font-mono">0845 130 7185</a></div>
          </div>

          <div className="pt-2 text-slate-500">
            <div>Support Hotline: <a href="tel:08006445500" className="text-blue-700 font-mono font-bold">0800 644 5500</a></div>
            <div>Email: <a href="mailto:info@corporatec.co.uk" className="text-blue-700 font-mono">info@corporatec.co.uk</a></div>
          </div>
        </div>

      </div>

      {/* Bottom Legal Strip */}
      <div className="border-t border-slate-200 py-6 px-4 sm:px-8 text-xs text-slate-500 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            &copy; {currentYear} Corporatec (UK) Ltd. Registered in England &amp; Wales. Company Number: 08656863. VAT Number: 171923308.
          </div>
          <div>
            Redesigned Concept Engineered for Corporatec (UK) Ltd by Vibeans Solutions
          </div>
        </div>
      </div>

    </footer>
  );
}
