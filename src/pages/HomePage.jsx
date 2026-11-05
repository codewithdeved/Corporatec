import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  Lock, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Send,
  Globe2,
  Cpu,
  Database,
  Rocket,
  Briefcase
} from 'lucide-react';
import Hero from '../components/Hero';
import { verifiedCertifications } from '../data/companyData';

export default function HomePage({ onOpenConsultation }) {
  const [contactForm, setContactForm] = useState({
    name: '',
    firm: '',
    email: '',
    phone: '',
    service: 'Consultancy and Outsourced CIO',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const coreServices = [
    {
      title: "Consultancy & Outsourced CIO",
      icon: Briefcase,
      description: "To enable you to meet your strategic and operational goals, you need to be armed with the right technology. Our highly experienced consultants offer independent, impartial guidance on turnkey solutions, systems integration, office relocation, security, and office fit out."
    },
    {
      title: "Business Startup (Fund Launchpad)",
      icon: Rocket,
      description: "If you are setting up a new hedge fund, Corporatec will help you get started quickly and smoothly. More than 50% of our clients are business startups. We handle telecommunications, office buildout, equipment deployment, and internet based services."
    },
    {
      title: "Disaster Recovery",
      icon: Server,
      description: "80 percent of businesses without a well structured recovery plan are forced to shut down within 12 months of a flood or fire. We enable dependable 24/7/365 recovery, high availability remote access storage, and geographically dispersed UK high security data centres."
    },
    {
      title: "Cyber Security",
      icon: Lock,
      description: "Corporatec has an in depth understanding of the threats and commercial vulnerabilities facing the financial industry. We monitor your networks, hardware, and systems 24/7/365, combining multiple layers of protection and rigorous security audits."
    },
    {
      title: "24/7 Managed IT Support",
      icon: Clock,
      description: "A complete technology support service keeping your operations running at optimal effectiveness 24/7/365, including proactive remote system monitoring and rapid onsite technician dispatch from our Mayfair West End hub."
    }
  ];

  const techPillars = [
    {
      title: "Infrastructure",
      tagline: "Performance, Resilience, Security",
      icon: Cpu,
      description: "A well designed infrastructure is essential if your business systems are to perform optimally at all times. Corporatec specializes in the design, development, and installation of IT infrastructures specific to the hedge fund industry to meet all availability and performance needs."
    },
    {
      title: "Vendor Neutral",
      tagline: "Free from vendor limitations",
      icon: ShieldCheck,
      description: "Corporatec is vendor independent. This means we guide you through the complexities of available technology and provide impartial advice based strictly on your fund's needs and budget, with focus entirely on you rather than a supplier."
    },
    {
      title: "Global Workforce",
      tagline: "Control from everywhere",
      icon: Globe2,
      description: "The ability to move people across borders and time zones has never been more important. We enable secure remote access to your business critical information and applications, allowing you to control investment operations from any location in the world."
    },
    {
      title: "Systems Monitoring",
      tagline: "Real time monitoring and alerting",
      icon: Database,
      description: "Our real time monitoring and alerting platform is built using industry standard technology and in house software. Operating independently of your infrastructure, we perform regular checks to provide proactive warnings and deep awareness."
    }
  ];

  const keyFacts = [
    "We have industry insight and understanding and provide the level of attention you require.",
    "We value client longevity and satisfaction over profits.",
    "Operating in a niche market means that we maintain the highest levels of service.",
    "We provide resources at every level and make them available in an unlimited capacity.",
    "We create relationships beyond a basic maintenance agreement.",
    "More than 50% of our clients partnered with us at business startup.",
    "Our West End office in Mayfair is in a prime location and underlines our commitment to rapid response times."
  ];

  return (
    <div className="space-y-0 text-slate-800 bg-white">
      
      {/* 1. Hero Section */}
      <Hero onOpenConsultation={onOpenConsultation} />

      {/* 2. Who We Are Section */}
      <section id="about" className="py-24 lg:py-32 bg-slate-50/60 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="space-y-2">
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-widest font-mono">
              About Corporatec
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight">
              Who We Are
            </h2>
            <div className="text-lg sm:text-xl font-serif italic text-slate-500 font-normal">
              "Technology Solutions for Alternative Investment firms..."
            </div>
          </div>

          <div className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            <p>
              Established in 2000, Corporatec (UK) Ltd provides outsourced CIO services for hedge funds and investment firms in London.
            </p>
            <p>
              We specialise in IT solutions, including disaster recovery, data backup, consultancy and support. Our experienced team ensures a seamless setup of world class operations tailored to the needs of alternative investment firms.
            </p>
          </div>

          {/* 4 Clean Accreditation Seals */}
          <div className="pt-8 border-t border-slate-200/80 max-w-4xl mx-auto">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-8 font-mono">
              Independently Audited Institutional Accreditations
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6 items-stretch">
              {verifiedCertifications.map((cert) => (
                <div 
                  key={cert.id} 
                  className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col items-center text-center justify-between space-y-4 hover:border-slate-300 hover:shadow-xs transition-all duration-200"
                >
                  <img 
                    src={cert.badge} 
                    alt={cert.name} 
                    className="w-14 h-14 object-contain"
                  />
                  <div>
                    <div className="text-xs font-bold text-slate-900 leading-snug">{cert.name}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{cert.issuer}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 mt-7 max-w-2xl mx-auto leading-relaxed">
              Committed to excellence, we are accredited by the British Assessment Bureau and adhere to the rigorous controls of ISO 9001 and ISO 27001, operating under the security standards of Cyber Essentials Plus.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Why Corporatec Section */}
      <section id="why-us" className="py-24 lg:py-32 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-widest font-mono">
              Proven London Pedigree
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight">
              Why Corporatec
            </h2>
            <div className="text-lg sm:text-xl font-serif italic text-slate-500 font-normal">
              "Over 25 years experience in the financial trading sector..."
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Left: Our Approach */}
            <div className="bg-slate-50/70 p-8 sm:p-11 rounded-3xl border border-slate-200/90 shadow-2xs space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-950 font-display mb-5">
                  Our Approach
                </h3>
                
                <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  <p>
                    The IT needs of hedge funds and financial traders are both highly specific and business critical. Reliable and up to date technology is the lifeblood of a successful operation.
                  </p>
                  <p>
                    Getting it right demands specialist knowledge. In a competitive niche market where IT providers come and go, Corporatec brings over 25 years of continuous experience serving the financial trading sector.
                  </p>
                  <p>
                    We have the longevity and depth of professional experience you can rely on to drive your business forward. We combine the expertise of a specialist provider with the flexibility and responsiveness of an in house team without the overhead.
                  </p>
                  <p>
                    Our highly qualified engineers and consultants are committed to maximizing your productivity and leaving you free to focus on managing your investments, confident that your technology needs are in safe, professional hands.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Key Facts */}
            <div className="bg-slate-50/70 p-8 sm:p-11 rounded-3xl border border-slate-200/90 shadow-2xs space-y-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-950 font-display mb-5">
                  Key Facts
                </h3>

                <ul className="space-y-4">
                  {keyFacts.map((fact, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-sm sm:text-base text-slate-700 leading-snug">
                      <CheckCircle2 className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* Verified Client Endorsement - Quiet, Prestigious Social Proof */}
          <div className="bg-slate-50/70 p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-2xs max-w-4xl mx-auto text-center space-y-4">
            <p className="text-base sm:text-lg font-serif italic text-slate-700 leading-relaxed">
              "Corporatec have helped us develop our IT strategy and infrastructure since we launched. Their solution is cost effective and the team is stable and understands our business requirements. They are available when needed and always accommodate project work and upgrades at a time that suits us."
            </p>
            <div className="pt-2">
              <div className="text-sm font-bold text-slate-950 font-display">Stephen Doherty</div>
              <div className="text-xs text-slate-500">Chief Operating Officer</div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Client Services Section */}
      <section id="services" className="py-24 lg:py-32 bg-slate-50/60 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-widest font-mono">
              Core Offerings
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight">
              Explore Our Client Services
            </h2>
            <div className="text-lg sm:text-xl font-serif italic text-slate-500 font-normal">
              "Consult, Design, Implement..."
            </div>
            <p className="text-sm sm:text-base text-slate-600 font-normal max-w-xl mx-auto mt-2">
              Specialist technology management with FCA compliant data storage and 24/7/365 dedicated engineering support.
            </p>
          </div>

          {/* Clean 5 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
            {coreServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-8 sm:p-9 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-950 font-display leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={onOpenConsultation}
                      className="text-xs font-semibold text-blue-700 hover:text-blue-800 flex items-center gap-1.5 cursor-pointer group transition-colors"
                    >
                      <span>Request Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Technology Section */}
      <section id="technology" className="py-24 lg:py-32 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-widest font-mono">
              Systems & Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight">
              Technology
            </h2>
            <div className="text-lg sm:text-xl font-serif italic text-slate-500 font-normal">
              "Infrastructure to meet all of your security, availability and performance needs..."
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-8">
            {techPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50/70 p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 space-y-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-blue-700 shadow-2xs">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-950 font-display">
                      {pillar.title}
                    </h3>
                    <div className="text-xs font-serif italic text-slate-500 mt-0.5">
                      "{pillar.tagline}"
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. Contact Us Section */}
      <section id="contact" className="py-24 lg:py-32 bg-slate-50/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <div className="text-xs font-semibold text-blue-700 uppercase tracking-widest font-mono">
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight">
              Contact Us
            </h2>
            <div className="text-lg sm:text-xl font-serif italic text-slate-500 font-normal">
              "Corporatec (UK) Ltd"
            </div>
            <p className="text-sm text-slate-600 mt-1">
              Based in Mayfair and operating across London's financial district.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Office Locations & Hotlines */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Emergency Hotline */}
              <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-2">
                <div className="text-xs font-bold text-blue-700 uppercase font-mono tracking-wider">
                  24/7/365 Emergency Support Hotline
                </div>
                <div className="text-2xl font-bold text-slate-950 font-mono">
                  <a href="tel:08006445500" className="hover:text-blue-700 transition-colors">
                    0800 644 5500
                  </a>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  For active alternative investment clients experiencing mission critical disruptions or trading system escalation.
                </p>
              </div>

              {/* Corporate Locations */}
              <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-6">
                
                {/* Mayfair */}
                <div className="border-b border-slate-100 pb-5 space-y-1.5">
                  <strong className="text-slate-950 text-sm flex items-center gap-1.5 font-semibold">
                    <MapPin className="w-4 h-4 text-blue-700" />
                    <span>Mayfair Operations Hub</span>
                  </strong>
                  <div className="text-xs text-slate-600 pl-5 leading-relaxed">
                    18 Conduit Street, Mayfair, London, W1S 2XN
                  </div>
                  <div className="text-xs text-slate-500 pl-5 pt-1">
                    Direct Line: <a href="tel:02074092999" className="text-slate-800 font-semibold hover:text-blue-700 font-mono">020 7409 2999</a>
                  </div>
                </div>

                {/* Hitchin */}
                <div className="border-b border-slate-100 pb-5 space-y-1.5">
                  <strong className="text-slate-950 text-sm flex items-center gap-1.5 font-semibold">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span>Registered Office</span>
                  </strong>
                  <div className="text-xs text-slate-600 pl-5 leading-relaxed">
                    First Floor Offices, 99 Bancroft, Hitchin, Hertfordshire, SG5 1NQ
                  </div>
                  <div className="text-xs text-slate-500 pl-5 pt-1">
                    General Enquiries: <a href="tel:08451307185" className="text-slate-800 font-semibold hover:text-blue-700 font-mono">0845 130 7185</a>
                  </div>
                </div>

                {/* Direct Inboxes */}
                <div className="space-y-1 text-xs text-slate-600">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">General Enquiries:</span>
                    <a href="mailto:info@corporatec.co.uk" className="text-blue-700 font-mono font-medium hover:underline">info@corporatec.co.uk</a>
                  </div>
                </div>

              </div>

            </div>

            {/* Right: Clean Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-11 rounded-3xl border border-slate-200/90 shadow-sm">
                
                {!submitted ? (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-950 font-display mb-1">
                        Send an Enquiry
                      </h3>
                      <p className="text-xs text-slate-500">
                        Our senior team is available to discuss your fund's technology requirements in confidence.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Stephen Doherty"
                          value={contactForm.name}
                          onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                          className="w-full bg-slate-50/80 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5">Investment Firm *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Mayfair Capital"
                          value={contactForm.firm}
                          onChange={(e) => setContactForm({ ...contactForm, firm: e.target.value })}
                          className="w-full bg-slate-50/80 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5">Corporate Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="name@firm.co.uk"
                          value={contactForm.email}
                          onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                          className="w-full bg-slate-50/80 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5">Contact Phone</label>
                        <input
                          type="tel"
                          placeholder="020 7409 0000"
                          value={contactForm.phone}
                          onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                          className="w-full bg-slate-50/80 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">Service Required</label>
                      <select
                        value={contactForm.service}
                        onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                        className="w-full bg-slate-50/80 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all"
                      >
                        <option value="Consultancy and Outsourced CIO">Consultancy &amp; Outsourced CIO</option>
                        <option value="Business Startup (Fund Launchpad)">Business Startup (Fund Launchpad)</option>
                        <option value="Disaster Recovery">Disaster Recovery</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="24/7 Managed IT Support">24/7 Managed IT Support</option>
                        <option value="General Corporate Enquiry">General Corporate Enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1.5">Message</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your requirements or timeline..."
                        value={contactForm.message}
                        onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                        className="w-full bg-slate-50/80 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:bg-white focus:outline-none focus:border-blue-700 focus:ring-1 focus:ring-blue-700 transition-all resize-none"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs py-4 rounded-xl shadow-xs hover:shadow transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {submitting ? (
                          <span>Sending Enquiry...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Submit Enquiry</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-950 font-display mb-2">
                      Enquiry Received
                    </h3>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto mb-6 leading-relaxed">
                      Thank you, <strong className="text-slate-900">{contactForm.name}</strong>. Your enquiry for <strong className="text-slate-900">{contactForm.firm}</strong> has been received by our senior team.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-6 py-2.5 rounded-xl border border-slate-300 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
