export const companyInfo = {
  name: "Corporatec (UK) Ltd",
  tagline: "Outsourced CIO & Mission Critical IT for Investment Firms",
  shortDesc: "Over 25 years delivering institutional grade IT infrastructure, regulatory compliance, and rapid Mayfair onsite support for London hedge funds and alternative asset managers.",
  founded: "Over 25 years of continuous service",
  companyNumber: "08656863",
  vatNumber: "171923308",
  leadership: [
    {
      name: "Vas Proud",
      role: "Managing Director & Founder",
      bio: "Over 25 years directing IT strategy, high availability infrastructure, financial trading systems, and strategic technology investments for London alternative investment firms."
    },
    {
      name: "Gemma O'Connell",
      role: "Business Operations Director",
      bio: "Executive leader overseeing operational governance, institutional client experience, organizational scaling, and strategic B2B partnerships across London and East Anglia."
    },
    {
      name: "Chris Robb",
      role: "Head of Technology",
      bio: "Senior technical leader directing infrastructure architecture, systems integration, and proactive network monitoring across alternative investment client environments."
    },
    {
      name: "Cara Ewbank",
      role: "Service Desk Manager",
      bio: "Operations manager leading the 24/7/365 helpdesk, SLA compliance monitoring, and rapid West End onsite engineer dispatch."
    }
  ],
  offices: [
    {
      type: "Mayfair Operations Hub",
      address: "18 Conduit Street, Mayfair, London, W1S 2XN",
      city: "London",
      purpose: "Engineering headquarters providing rapid onsite dispatch under 30 minutes to West End and City investment firms.",
      isPrimary: true
    },
    {
      type: "Registered Office & Administration",
      address: "First Floor Offices, 99 Bancroft, Hitchin, Hertfordshire, SG5 1NQ",
      city: "Hitchin",
      purpose: "Corporate governance, central financial operations, and service desk operations.",
      isPrimary: false
    }
  ],
  contacts: {
    supportHotline: "0800 644 5500",
    salesInquiries: "0845 130 7185",
    mayfairDirect: "020 7409 2999",
    emailGeneral: "info@corporatec.co.uk",
    emailContact: "contact@corporatec.co.uk"
  },
  metrics: [
    { label: "Sector Pedigree", value: "25+ Yrs", detail: "Serving London's alternative investment community" },
    { label: "Fund Launch Track Record", value: "50%+", detail: "Of our active client roster partnered with us at startup" },
    { label: "Support Availability", value: "24/7/365", detail: "Continuous monitoring and SLA backed engineer dispatch" },
    { label: "Security & Governance", value: "Tier 1", detail: "ISO 27001, Cyber Essentials Plus & FCA Compliant" }
  ]
};

export const verifiedCertifications = [
  {
    id: "iso-27001",
    name: "ISO 27001:2022",
    title: "Information Security Management",
    issuer: "British Assessment Bureau",
    badge: "/assets/certs/iso-27001.svg",
    description: "Certified adherence to international best practices for managing financial data security, cyber threats, and risk mitigation.",
    auditScope: "Comprehensive IT Infrastructure, Outsourced CIO & Data Management"
  },
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    title: "Quality Management System",
    issuer: "British Assessment Bureau",
    badge: "/assets/certs/iso-9001.svg",
    description: "Rigorous quality assurance controls guaranteeing consistent service delivery, SLA adherence, and proactive maintenance.",
    verificationUrl: "https://clients.britishassessment.com/verify.asp"
  },
  {
    id: "cyber-essentials-plus",
    name: "Cyber Essentials Plus",
    title: "National Cyber Security Centre Audited",
    issuer: "IASME / NCSC",
    badge: "/assets/certs/cyber-essentials-plus.svg",
    description: "Independently audited hands on technical verification against cyber threats, ransomware, and credential compromise.",
    auditScope: "Rigorous external vulnerability and multi vector penetration audit"
  },
  {
    id: "fca-compliant-storage",
    name: "FCA Compliant Data Storage",
    title: "Regulatory Compliant Archival & DR",
    issuer: "UK Regulatory Standard Architecture",
    badge: "/assets/certs/fca-compliant.svg",
    description: "High availability remote access storage, immutable email archival, and disaster recovery engineered to support FCA record keeping guidelines.",
    auditScope: "Geographically dispersed UK high security data centres with 24x7x365 recovery"
  }
];

export const coreServices = [
  {
    id: "outsourced-cio",
    title: "Virtual CIO & IT Strategy",
    tagline: "Board level technology guidance without the executive overhead.",
    image: "/assets/images/executive-boardroom.jpg",
    shortDesc: "Independent, vendor neutral technology governance, IT roadmap planning, budget optimization, and board reporting tailored for alternative investment managers.",
    deliverables: [
      "Vendor independent technology procurement & budget auditing",
      "Executive IT roadmapping & digital transformation strategy",
      "FCA regulatory IT compliance & due diligence preparation",
      "Disaster recovery & cyber risk governance reporting"
    ],
    audience: "Founders, Managing Partners, and COOs seeking strategic tech leadership.",
    sla: "Dedicated named Virtual CIO with monthly governance reviews"
  },
  {
    id: "fund-launchpad",
    title: "The Hedge Fund Launchpad",
    tagline: "Turnkey IT, infrastructure, and compliance from seed capital to Day 1 live trading.",
    image: "/assets/images/trading-floor.jpg",
    highlightBadge: ">50% of Clients at Launch",
    shortDesc: "Over half of Corporatec's portfolio partnered with us prior to fund launch. We manage every detail: office cabling, Bloomberg terminals, secure cloud architecture, and FCA data storage.",
    deliverables: [
      "Complete comms room, structured cabling, and multi monitor trading desk fit outs",
      "FCA compliant immutable email archival and trade record data storage",
      "Low latency market data connectivity (Bloomberg, Refinitiv, execution venues)",
      "Zero trust identity setup (Microsoft 365, MFA, Conditional Access)"
    ],
    audience: "Newly forming hedge funds, spinouts, and private equity startups.",
    sla: "Complete turnkey deployment delivered in as little as 21 to 30 days"
  },
  {
    id: "disaster-recovery",
    title: "Disaster Recovery & Continuity",
    tagline: "80% of businesses without structured DR fail within 12 months. We eliminate that risk.",
    image: "/assets/images/enterprise-datacenter.jpg",
    shortDesc: "High availability remote access storage, geographically dispersed UK high security data centres, and recovery point objectives under 15 minutes.",
    deliverables: [
      "Geographically dispersed, dual site high security UK data centres",
      "Continuous real time replication with granular point in time recovery",
      "Instant remote desktop failover enabling trading operations from anywhere",
      "Annual simulated failover testing and board ready DR compliance certificates"
    ],
    audience: "Firms with mission critical uptime requirements and strict ODD standards.",
    sla: "Zero data loss target with under 15 minute Recovery Time Objective (RTO)"
  },
  {
    id: "cyber-security",
    title: "Cyber Security & SOC Telemetry",
    tagline: "Multi layered defense and 24/7/365 active threat hunting.",
    image: "/assets/images/london-architecture.jpg",
    shortDesc: "Continuous hardware and network threat monitoring combining industry standard tools and proprietary in house software, certified to ISO 27001 and Cyber Essentials Plus.",
    deliverables: [
      "24/7/365 Security Operations Center (SOC) telemetry and intrusion prevention",
      "Periodic vulnerability assessments and third party penetration testing",
      "Automated employee phishing simulations and security awareness training",
      "FCA and DORA ready incident response playbooks and forensic audits"
    ],
    audience: "Investment managers guarding confidential financial data and investor capital.",
    sla: "15 minute maximum response on high priority security alarms"
  },
  {
    id: "managed-support",
    title: "24/7/365 Managed IT Support",
    tagline: "High touch support combining remote triage and rapid Mayfair onsite response.",
    image: "/assets/images/mayfair-london.jpg",
    shortDesc: "A complete technology support service keeping your operation running at peak performance. We understand that no two funds are identical, tailoring SLAs to your exact trading hours.",
    deliverables: [
      "24/7/365 remote helpdesk staffed by certified senior systems engineers",
      "Rapid onsite West End and Mayfair engineer dispatch with under 30 minute target",
      "Proactive health patching, server updates, and automated preventative maintenance",
      "VIP partner and portfolio manager executive concierge support"
    ],
    audience: "Trading desks, portfolio managers, analysts, and executive teams.",
    sla: "Guaranteed 10 minute response time for critical trading disruptions"
  },
  {
    id: "office-relocation",
    title: "Office Relocation & Fit Out",
    tagline: "Seamless West End office transitions with zero downtime for live trading.",
    image: "/assets/images/executive-boardroom.jpg",
    shortDesc: "From Mayfair townhouse conversions to premier City commercial buildings, we manage architectural telecoms, server room cooling, acoustic comms racks, and uninterrupted trading floor cut overs.",
    deliverables: [
      "Cat6a / Cat7 high density structured cabling and server rack installation",
      "Dual carrier redundant leased lines (1Gbps/10Gbps) and SD WAN failover",
      "Comms room environmental monitoring (temperature, humidity, fire, UPS)",
      "Weekend cut over management ensuring seamless Monday 7:00 AM market readiness"
    ],
    audience: "Expanding funds moving to new offices in Mayfair, St James's, or the City.",
    sla: "Zero trading day downtime guarantee"
  }
];

export const technologyPillars = [
  {
    id: "infrastructure",
    title: "Resilient Infrastructure",
    subtitle: "Engineered specifically for low latency, high dependency financial workloads.",
    description: "A well designed infrastructure is essential for peak performance. We design, develop, and install custom IT architectures configured for financial modelling, market feeds, and zero packet loss.",
    techStack: ["Microsoft Azure", "AWS", "VMware vSphere", "Cisco Nexus", "Fortinet Enterprise Firewalls"]
  },
  {
    id: "vendor-neutral",
    title: "100% Vendor Neutrality",
    subtitle: "Impartial guidance free from supplier quotas or software bias.",
    description: "Corporatec is completely independent. When we evaluate hardware, storage, or cloud providers, our focus is strictly on your fund's operational needs, compliance parameters, and budget.",
    techStack: ["Objective TCO Audits", "Multi Vendor Benchmarking", "Direct Hardware Procurement at Cost"]
  },
  {
    id: "global-workforce",
    title: "Borderless Global Access",
    subtitle: "Secure institutional control across international borders and time zones.",
    description: "Moving capital and key decision makers across London, New York, Zurich, and Singapore demands military grade remote access. We deploy zero trust remote environments with hardware backed MFA.",
    techStack: ["Microsoft 365 E5 Security", "Conditional Access Policies", "Global SD WAN", "Encrypted Virtual Desktops"]
  },
  {
    id: "systems-monitoring",
    title: "Proprietary Telemetry & Alerting",
    subtitle: "Independent 24/7 monitoring running outside your local infrastructure.",
    description: "Our platform combines industry standards with proprietary in house software. Because our monitoring engine operates independently of your dependencies, we detect issues before your traders do.",
    techStack: ["In House Monitoring Agent", "Automated Synthetic Transactions", "Instant SMS/PagerDuty Escalation", "Historical Capacity Trends"]
  }
];

export const industrySectors = [
  {
    id: "hedge-funds",
    name: "London Hedge Funds",
    icon: "TrendingUp",
    profile: "Long/Short Equity, Global Macro, Quantitative, Credit & Multi Strategy Funds",
    painPoints: "Extreme sensitivity to millisecond latency, stringent investor due diligence (ODD), and high cost of trading downtime.",
    howWeSolve: "Ultra resilient infrastructure, dedicated Mayfair rapid response engineers, and institutional ISO 27001 data protection."
  },
  {
    id: "startup-funds",
    name: "Fund Launches & Spinouts",
    icon: "Rocket",
    profile: "New alternative investment managers spinning out from tier one investment banks or large funds",
    painPoints: "Need an immediate institutional appearance for seed investors without hiring an expensive internal IT director.",
    howWeSolve: "Our proven Fund Launchpad delivers turnkey comms, trading terminals, compliance data storage, and vCIO leadership in under 30 days."
  },
  {
    id: "private-equity",
    name: "Private Equity & Private Credit",
    icon: "Briefcase",
    profile: "Mid market and large cap PE firms, venture capital funds, and special situations managers",
    painPoints: "High volume of confidential deal documents, multi site portfolio oversight, and M&A cyber due diligence.",
    howWeSolve: "Bank grade data room security, zero trust file permissions, automated backup, and borderless remote access."
  },
  {
    id: "family-offices",
    name: "Single & Multi Family Offices",
    icon: "ShieldCheck",
    profile: "Discreet wealth management institutions operating across London West End and overseas jurisdictions",
    painPoints: "Ultra high requirements for privacy, executive device protection, and discreet white glove technical assistance.",
    howWeSolve: "Confidential concierge support, dedicated VIP response channels, and comprehensive endpoint protection for principals."
  }
];

export const clientTestimonials = [
  {
    id: "stephen-doherty",
    quote: "Corporatec have helped us develop our IT strategy and infrastructure since we launched. Their solution is cost effective and the team is stable and understands our business requirements. They are available when needed and always accommodate project work and upgrades at a time that suits us.",
    author: "Stephen Doherty",
    role: "Chief Operating Officer",
    type: "Alternative Investment Firm (London)",
    context: "Client since initial fund launch"
  },
  {
    id: "nicola-cowman",
    quote: "We have worked with Corporatec for over 14 years. In that time, we have undergone two office moves and a number of significant upgrades which have been completed smoothly and successfully with minimal downtime. The support staff and engineers are a pleasure to work with.",
    author: "Nicola Cowman",
    role: "Operations Manager",
    type: "London Investment Firm",
    context: "Client for over 14 years and two office moves"
  },
  {
    id: "richard-williamson",
    quote: "Working with Corporatec as our strategic technology partner allows our business to stay ahead of our competition in a cost effective manner. Corporatec understand our business goals and provide value rather than just another client vendor relationship.",
    author: "Richard Williamson",
    role: "Founding Partner",
    type: "Fund Management Firm",
    context: "Strategic technology partnership"
  }
];

export const clientTestimonial = clientTestimonials[0];
