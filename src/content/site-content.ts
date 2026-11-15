export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  serifAccent: string;
  description: string;
  bullets: string[];
  chips: string[];
  visualType: 'coding' | 'billing' | 'denial' | 'ar' | 'audit' | 'rcm';
  isDark?: boolean;
}

export interface SpecialtyItem {
  id: string;
  name: string;
  code: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  highlight: string;
  specs: string[];
}

export interface AiSystemItem {
  number: string;
  title: string;
  category: string;
  description: string;
  bullets: string[];
  isTealAccent?: boolean;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: string;
  metric: string;
  metricLabel: string;
}

export interface EngagementPlan {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  features: string[];
  idealFor: string;
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SITE_CONTENT = {
  brand: {
    name: 'Crystal Clear One.net LLC',
    shortName: 'Crystal Clear One',
    tagline: 'Clarity. Innovation. Excellence.',
    url: 'https://crystalclearone.net',
    phone: '+1 (XXX) XXX-XXXX [[REAL NUMBER]]',
    email: 'info@crystalclearone.net',
    locations: {
      us: {
        title: 'United States',
        role: 'Client Services & Account Leadership',
        timezone: 'America/New_York',
        city: 'New York, NY',
      },
      india: {
        title: 'India',
        role: 'Delivery Operations & Technology Center',
        timezone: 'Asia/Kolkata',
        city: 'Technology Park, Ahmedabad',
      },
    },
  },

  nav: [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'AI & ML', href: '#ai' },
    { label: 'Compliance', href: '#compliance' },
    { label: 'Medical Writing', href: '#writing' },
    { label: 'FAQ', href: '#faq' },
  ],

  hero: {
    eyebrow: 'Healthcare revenue solutions for US providers',
    titleMain: 'Simplify your medical coding & billing,',
    titleAccent: 'with clarity.',
    lede: 'Professional, reliable and cost-efficient revenue cycle support for hospitals, clinics and physician practices. Certified coders and our own healthcare AI work together, so your claims go out clean and your team gets time back.',
    ctaPrimary: 'Book a Consultation',
    ctaSecondary: 'Explore Services',
    trustNote: 'Credentialed coding team · US client services · India delivery operations',
    badges: ['AAPC · CPC', 'AHIMA · CCS', 'CRC Risk Adjustment', 'CIC Inpatient'],
    floatingCards: [
      {
        id: 'code-chip',
        title: 'ICD-10-CM Validation',
        code: 'E11.22 · N18.31',
        tag: 'Dual-Coded & Verified',
      },
      {
        id: 'claim-status',
        title: 'Claim Status',
        status: '✓ Clean claim',
        sub: 'First-pass adjudication ready',
      },
      {
        id: 'vitals-ecg',
        title: 'Live Engine Telemetry',
        indicator: 'Active Ingest Stream',
        detail: 'HL7 v2 & FHIR R4',
      },
      {
        id: 'turnaround',
        value: '< 24 Hours',
        label: 'Outpatient Turnaround',
        sub: 'Guaranteed SLA adherence',
      },
    ],
  },

  codeSets: [
    'ICD-10-CM',
    'ICD-10-PCS',
    'CPT® Professional',
    'HCPCS Level II',
    'E/M 2024 Guidelines',
    'MS-DRG Inpatient',
    'APR-DRG Ped/Critical',
    'CMS-HCC Model V28',
    'NCCI Edits & PTP',
    'Modifiers -25, -59, -X{EPSU}',
    'CARC / RARC Remits',
    'HL7 v2.8 & FHIR R4',
    'OIG Work Plan Compliance',
  ],

  scrubStatement: {
    words: [
      'Every', 'patient', 'chart', 'tells', 'a', 'story.',
      'Our', 'job', 'is', 'to', 'make', 'sure', 'the', 'claim',
      'tells', 'the', 'same', 'story,',
      'accurately,', 'compliantly', 'and', 'on', 'time,',
      'so', 'your', 'physicians', 'can', 'focus', 'on', 'care',
      'and', 'your', 'revenue', 'stays', 'clear.'
    ],
    highlightIndices: [14, 15, 16, 29, 34, 35], // "tells the same story", "care", "clear"
    signature: 'Crystal Clear One.net LLC · Clarity. Innovation. Excellence.',
  },

  stats: [
    {
      value: 95,
      suffix: '%+',
      label: 'Accuracy Target',
      note: 'Certified dual-pass review [[CONFIRM]]',
    },
    {
      value: 24,
      suffix: 'hr',
      label: 'Outpatient Turnaround',
      note: 'Rapid queue clearing [[CONFIRM]]',
    },
    {
      value: 30,
      suffix: '+',
      label: 'Clinical Specialties',
      note: 'Sub-specialty certified coders [[CONFIRM]]',
    },
    {
      value: 100,
      suffix: '%',
      label: 'Human-Finalized',
      note: 'Every single chart signed by a certified coder',
    },
  ],

  services: [
    {
      id: 'medical-coding',
      number: '01',
      title: 'Medical Coding Services',
      serifAccent: 'with clinical precision',
      description: 'Accurate, compliant diagnosis and procedure coding that captures full acuity without audit exposure. Our AAPC- and AHIMA-certified coders adapt smoothly to your specialty guidelines.',
      bullets: [
        'Outpatient clinic, emergency department, inpatient MS-DRG, and ambulatory surgery',
        'CMS-HCC risk adjustment capture with documented clinical indicators',
        'Rigorous compliance with NCCI edits, modifier logic, and payer-specific LCD/NCD rules',
      ],
      chips: ['ICD-10-CM', 'CPT®', 'HCPCS', 'HCC V28', 'DRG'],
      visualType: 'coding' as const,
      isDark: false,
    },
    {
      id: 'medical-billing',
      number: '02',
      title: 'Medical Billing & Charge Capture',
      serifAccent: 'speeding cash velocity',
      description: 'Prompt electronic claim scrubbing, clean clearinghouse transmission, and rigorous charge capture reconciliation so not a single billable service is missed.',
      bullets: [
        'Daily electronic claim submission with automated clearinghouse error scrubbing',
        'Payment posting (ERA / 835 & manual EOB) within 24 hours of receipt',
        'Patient responsibility statements and friendly, compliant billing support',
      ],
      chips: ['837P / 837I', '835 ERA', 'Clearinghouse Bridge', 'Charge Audits'],
      visualType: 'billing' as const,
      isDark: true,
    },
    {
      id: 'denial-management',
      number: '03',
      title: 'Denial Management & Root-Cause Appeals',
      serifAccent: 'recovering lost revenue',
      description: 'We do not just rework rejected claims—we categorize every CARC/RARC code, isolate operational root causes, and submit clinically substantiated appeals that get paid.',
      bullets: [
        'Systematic triage of timely filing, medical necessity, and prior auth denials',
        'Clinical appeal letters crafted with supporting chart excerpts and guideline references',
        'Feedback loop to clinical and front-desk teams to eliminate recurrent front-end errors',
      ],
      chips: ['CARC / RARC', 'CO-16', 'CO-97', 'CO-197', 'Level 1-3 Appeals'],
      visualType: 'denial' as const,
      isDark: false,
    },
    {
      id: 'accounts-receivable',
      number: '04',
      title: 'A/R Follow-up & Aging Resolution',
      serifAccent: 'driving down days in A/R',
      description: 'Relentless, compliant resolution of 30, 60, 90, and 120+ day balances across commercial payers, Medicare, Medicaid, and Medicare Advantage plans.',
      bullets: [
        'Aggressive payer follow-up via automated API status checks and experienced payer reps',
        'Underpayment identification and contractual allowance auditing',
        'Dedicated legacy A/R cleanup teams that unlock stranded cash in older receivables',
      ],
      chips: ['30-120+ Aging', 'Underpayment Audits', 'Payer Escalations'],
      visualType: 'ar' as const,
      isDark: true,
    },
    {
      id: 'coding-audits',
      number: '05',
      title: 'Coding Audits, QA & Provider Education',
      serifAccent: 'shielding against compliance risk',
      description: 'Independent baseline audits and ongoing quality monitoring to verify coding accuracy, protect against clawbacks, and provide actionable feedback to physicians.',
      bullets: [
        'Pre-bill and post-bill statistical chart sample audits with detailed scorecards',
        'E/M bell-curve distribution profiling compared against national specialty benchmarks',
        'Targeted, non-punitive physician documentation improvement (CDI) recommendations',
      ],
      chips: ['Baseline Audits', 'E/M Bell Curves', 'CDI Feedback', 'OIG Safety'],
      visualType: 'audit' as const,
      isDark: false,
    },
    {
      id: 'revenue-cycle',
      number: '06',
      title: 'End-to-End Revenue Cycle Management',
      serifAccent: 'built around your practice',
      description: 'Full-spectrum RCM orchestration combining certified human talent with intelligent automation from patient scheduling and eligibility verification through to final balance resolution.',
      bullets: [
        'Seamless handoff across intake, authorization, coding, billing, and patient collections',
        'Live executive dashboards providing crystal-clear visibility into every metric',
        'Dedicated US account manager paired with 24/7 offshore production teams',
      ],
      chips: ['Full-Lifecycle', 'Real-Time KPI', 'Dedicated Manager', 'EHR Agnostic'],
      visualType: 'rcm' as const,
      isDark: true,
    },
  ] as ServiceItem[],

  specialtiesTicker: [
    ['CARDIOLOGY', 'ONCOLOGY', 'RADIOLOGY', 'NEUROLOGY', 'ORTHOPEDICS'],
    ['AMBULATORY SURGERY', 'EMERGENCY MEDICINE', 'ANESTHESIA', 'PATHOLOGY'],
    ['PRIMARY CARE', 'INTERNAL MEDICINE', 'PULMONOLOGY', 'NEPHROLOGY'],
  ],

  specialties: [
    {
      id: 'cardiology',
      name: 'Cardiology',
      code: 'CPT 93000-93799',
      description: 'Interventional caths, electrophysiology, echocardiograms, and device checks with modifier precision.',
      icon: 'Activity',
    },
    {
      id: 'orthopedics',
      name: 'Orthopedics & Spine',
      code: 'CPT 20000-29999',
      description: 'Complex arthroplasty, fracture care, spine fusion instrumentation, and DME billing.',
      icon: 'Bone',
    },
    {
      id: 'oncology',
      name: 'Oncology & Infusion',
      code: 'HCPCS J-Codes',
      description: 'Chemotherapy administration, concurrent infusion hierarchies, and biologic waste documentation.',
      icon: 'ShieldAlert',
    },
    {
      id: 'emergency',
      name: 'Emergency Medicine',
      code: 'Level 1-5 Facility & Pro',
      description: 'Critical care timing, bedside ultrasound, laceration repairs, and split-share E/M rules.',
      icon: 'Siren',
    },
    {
      id: 'radiology',
      name: 'Radiology',
      code: 'CPT 70000-79999',
      description: 'Professional vs technical component 26/TC splits, MRI/CT contrast details, and interventional rads.',
      icon: 'Scan',
    },
    {
      id: 'anesthesia',
      name: 'Anesthesia',
      code: 'ASA Base + Time Units',
      description: 'ASA crosswalks, physical status modifiers, concurrency calculation, and pain management injections.',
      icon: 'HeartPulse',
    },
    {
      id: 'primary-care',
      name: 'Primary Care & Internal Med',
      code: 'E/M 99202-99215',
      description: 'Chronic care management (CCM), transitional care (TCM), AWVs, and accurate HCC capture.',
      icon: 'Stethoscope',
    },
    {
      id: 'general-surgery',
      name: 'General & Vascular Surgery',
      code: 'Global Surgical Packages',
      description: 'Operative report parsing, endoscopy unbundling rules, co-surgeon -62, and assistant -80 modifiers.',
      icon: 'Scissors',
    },
  ],

  processSteps: [
    {
      step: '01',
      title: 'Secure Intake & BAA Execution',
      tagline: 'Encrypted, HIPAA-compliant pipeline',
      description: 'We execute a mutual Business Associate Agreement (BAA), establish encrypted VPN or OAuth 2.0 EHR bridge access, and configure your practice guidelines within 48 hours.',
      highlight: 'Full HIPAA compliance with signed BAA and audited access credentials',
      specs: ['Epic', 'Oracle Health / Cerner', 'athenahealth', 'Meditech', 'eClinicalWorks'],
    },
    {
      step: '02',
      title: 'AI Pre-Coding & Clinical Ingestion',
      tagline: 'Intelligent clinical NLP parsing',
      description: 'Our proprietary healthcare NLP engine ingests progress notes, highlights diagnostic indicators, cross-references latest CMS-HCC tables, and flags ambiguous documentation.',
      highlight: 'Pre-screens 100% of charts for missing laterality, specificity, and query opportunities',
      specs: ['CMS-HCC V28 Engine', 'NCCI Logic Check', 'CDI Query Flagging', 'Sub-second Ingest'],
    },
    {
      step: '03',
      title: 'Certified Coder Review & Validation',
      tagline: '100% human accountability',
      description: 'A credentialed coder (CPC, CCS, or CRC) examines the primary chart, validates or refines the AI suggestions, confirms medical necessity, and applies accurate modifiers.',
      highlight: 'AI never files claims autonomously; every code is certified by an experienced human specialist',
      specs: ['AAPC / AHIMA Certified', 'Specialty-Matched Coders', 'Dual-Code Validation'],
    },
    {
      step: '04',
      title: 'Second-Level QA Audit & Scrubbing',
      tagline: 'Rigorous 95%+ accuracy gate',
      description: 'A senior QA auditor samples charts for E/M balance, unbundling traps, and LCD/NCD compliance before transmission, ensuring our client target of 95%+ accuracy is upheld.',
      highlight: 'Zero tolerance for compliance drift, pre-empting payer clawbacks and audits',
      specs: ['Pre-Submission Scrub', 'Statistical Random Sampling', 'Audit Scorecard Logging'],
    },
    {
      step: '05',
      title: 'Delivery & Transparent Reporting',
      tagline: 'Clean claims out, live insights in',
      description: 'Clean claims transmit directly to your clearinghouse or EHR queue. You access live dashboards showing turnaround times, clean-claim rates, and denial trends.',
      highlight: 'Complete visibility into turnaround times, coder notes, and daily production stats',
      specs: ['Sub-24hr Turnaround', 'Live Portal Analytics', 'Weekly RCM Debriefs'],
    },
  ],

  reportingDashboard: {
    url: 'portal.crystalclearone.net/analytics',
    period: 'Current Month · Production Live',
    kpis: [
      { label: 'Clean Claim Rate', value: '97.4%', delta: '+2.1% vs benchmark', trend: 'up' },
      { label: 'Days in A/R (DNFB)', value: '28.2', suffix: 'Days', delta: '-6.4 days YoY', trend: 'down' },
      { label: 'First-Pass Denial Rate', value: '2.8%', delta: '-1.4% reduction', trend: 'down' },
      { label: 'Total Charges Processed', value: '$4.28M', delta: 'Sample period data', trend: 'neutral' },
    ],
    denialReasons: [
      { code: 'CO-16', label: 'Missing / Incomplete Info', pct: 38, count: 42 },
      { code: 'CO-97', label: 'Bundled / Inclusive Charge', pct: 26, count: 29 },
      { code: 'CO-197', label: 'Pre-certification Absent', pct: 21, count: 23 },
      { code: 'CO-11', label: 'Diagnosis Inconsistent', pct: 15, count: 17 },
    ],
  },

  aiDemo: {
    title: 'Watch a clinical note become a claim.',
    subtitle: 'See how our healthcare NLP pre-screens clinical documentation, maps validated ICD-10-CM and CPT® codes, and detects CDI query opportunities before a certified coder reviews it.',
    noteText: '62-year-old male, established patient, seen for follow-up of type 2 diabetes mellitus with diabetic chronic kidney disease. Latest eGFR 52, consistent with CKD stage 3a. History of hypertension, BP 142/88 today; lisinopril dose increased. Continues insulin glargine nightly; A1c 8.1%, up from 7.6%. Reviewed labs, adjusted two prescription medications, discussed renal referral. Medical decision making: moderate. Diabetic retinopathy mentioned in history without status or laterality.',
    steps: [
      {
        id: 1,
        phrase: 'type 2 diabetes mellitus with diabetic chronic kidney disease',
        code: 'E11.22',
        tag: 'HCC 37',
        category: 'Primary Chronic Condition',
        rationale: 'Combination code for T2DM with CKD; triggers HCC risk adjustment category 37.',
      },
      {
        id: 2,
        phrase: 'CKD stage 3a',
        code: 'N18.31',
        tag: 'HCC 329',
        category: 'Secondary Staging',
        rationale: 'Required secondary code to specify stage of CKD; eGFR 52 confirms stage 3a.',
      },
      {
        id: 3,
        phrase: 'hypertension',
        code: 'I12.9',
        tag: 'Guideline',
        category: 'Hypertensive CKD Link',
        rationale: 'ICD-10-CM presumed causal link between hypertension and CKD under Section I.C.9.',
      },
      {
        id: 4,
        phrase: 'insulin glargine',
        code: 'Z79.4',
        tag: 'Status',
        category: 'Long-term Medication',
        rationale: 'Long-term (current) use of insulin for type 2 diabetes mellitus.',
      },
      {
        id: 5,
        phrase: 'established patient / MDM moderate',
        code: '99214',
        tag: 'E/M',
        category: 'Evaluation & Management',
        rationale: 'Office/outpatient visit for established patient; 2 chronic conditions + prescription drug mgmt.',
      },
      {
        id: 6,
        phrase: 'retinopathy without status or laterality',
        code: 'QUERY',
        tag: 'CDI',
        category: 'Documentation Query Flag',
        isQuery: true,
        rationale: 'Clinical documentation improvement flag: query provider for proliferative vs nonproliferative, with/without macular edema, laterality.',
      },
    ],
    disclaimer: 'Sample note written for demonstration. Contains no real patient data. [[Have a certified coder verify the codes and HCC mappings]]',
  },

  aiRail: [
    {
      number: '01',
      title: 'Computer-Assisted Coding (CAC) Engines',
      category: 'Clinical NLP & Ingestion',
      description: 'Domain-trained deep learning models that ingest unstructured physician notes, operative summaries, and discharge notes to extract high-confidence diagnostic and procedure candidates.',
      bullets: [
        'Context-aware entity extraction tuned to ICD-10-CM and CPT® conventions',
        'Automatic cross-referencing with CMS-HCC V28 risk adjustment categories',
        'Human-in-the-loop review cockpit that reduces coder chart search time by 40%',
      ],
      isTealAccent: true,
    },
    {
      number: '02',
      title: 'Denial Prediction & RCM Automation',
      category: 'Predictive Analytics',
      description: 'Machine learning classifiers trained on millions of historical remit patterns to score claim denial probability prior to clearinghouse dispatch.',
      bullets: [
        'Pre-submission CARC/RARC risk scoring highlighting high-risk claims for manual review',
        'Automated clearinghouse error remediation for common demographic and billing discrepancies',
        'Root-cause cluster analysis pinpointing provider documentation drift',
      ],
    },
    {
      number: '03',
      title: 'EHR Integration & Healthcare Data Platforms',
      category: 'Interoperability Engineering',
      description: 'Enterprise-grade pipelines that integrate directly with Epic, Oracle Health/Cerner, athenahealth, and custom electronic health records using modern interoperability standards.',
      bullets: [
        'Bi-directional HL7 v2 and FHIR R4 API connectors for patient and encounter feeds',
        'HIPAA-compliant cloud architecture hosted in SOC 2 Type II Azure & AWS enclaves',
        'Automated scheduling, charge capture, and payment ledger synchronization',
      ],
    },
    {
      number: '04',
      title: 'Population Health & Risk Adjustment Models',
      category: 'Risk Stratification',
      description: 'Algorithms that scan longitudinal patient records to surface suspected uncaptured chronic conditions and support annual wellness visit planning for Value-Based Care.',
      bullets: [
        'Persistent condition persistence tracking across multi-year encounters',
        'ACO and Medicare Advantage RAF score projection and documentation gap alerts',
        'Audit-ready proof trails linking every predicted diagnosis back to clinical notes',
      ],
    },
    {
      number: '05',
      title: 'Intelligent Assistants for Clinicians & Staff',
      category: 'Generative AI Workflows',
      description: 'Secure, fine-tuned LLM assistants that draft clinical appeal letters, translate complex payer medical policies, and summarize dense patient histories for providers.',
      bullets: [
        'Automated drafting of first-level denial appeal letters citing payer clinical policies',
        'Conversational policy lookup across CMS LCD/NCD bulletins and commercial guidelines',
        'Strict zero-retention data privacy guarantees with BAA enforcement',
      ],
    },
    {
      number: '06',
      title: 'Custom Healthcare Portals & Web Applications',
      category: 'Custom Software Development',
      description: 'Bespoke web and mobile applications for hospital systems, medical billing companies, and clinical groups requiring enterprise-grade interfaces and real-time operational telemetry.',
      bullets: [
        'Tailored client billing dashboards with granular role-based access control (RBAC)',
        'Physician query management portals with seamless mobile notification workflows',
        'Full compliance with WCAG 2.1 AA accessibility and US healthcare digital standards',
      ],
    },
  ],

  whyChoose: [
    {
      title: 'Dedicated Support & Account Leadership',
      description: 'Every client is paired with a designated US-based client manager and a dedicated team of certified coders who learn your specific practice nuances and payer preferences.',
      icon: 'Headphones',
      metric: '1:1',
      metricLabel: 'Dedicated Account Pod',
    },
    {
      title: 'Quality-Focused Workflows',
      description: 'A multi-tier QA system where 100% of charts are finalized by certified human specialists and routinely scrubbed by senior auditors to maintain a 95%+ accuracy target.',
      icon: 'ShieldCheck',
      metric: '95%+',
      metricLabel: 'Accuracy Standard',
    },
    {
      title: 'EHR/EMR Compatibility',
      description: 'No software replacement required. We work directly inside your existing Epic, Oracle Health, athenahealth, Meditech, or custom platform without disruptive migrations.',
      icon: 'Cpu',
      metric: '15+',
      metricLabel: 'Compatible EHRs',
    },
    {
      title: 'Secure Data Handling & BAA',
      description: 'Enterprise-grade security controls including end-to-end AES-256 encryption, zero local data caching, multi-factor authentication, and signed Business Associate Agreements.',
      icon: 'Lock',
      metric: '100%',
      metricLabel: 'HIPAA Compliant',
    },
    {
      title: 'Transparent Reporting & Telemetry',
      description: 'Live visibility into daily production volumes, turnaround metrics, clean-claim rates, and denial trends through our secure client portal and weekly operational reviews.',
      icon: 'BarChart3',
      metric: 'Live',
      metricLabel: 'Real-Time Insights',
    },
  ],

  compliance: {
    eyebrow: 'SECURITY & COMPLIANCE',
    title: 'Your patients\' data,',
    titleAccent: 'protected at every step.',
    lede: 'We treat information security and patient confidentiality as an unyielding core commitment. Every interaction is governed by strict federal standards and institutional-grade controls.',
    checklist: [
      {
        title: 'HIPAA-Compliant Operations',
        desc: 'Comprehensive administrative, physical, and technical safeguards in place. Fully signed Business Associate Agreements (BAA) executed prior to onboarding.',
      },
      {
        title: 'Secure Delivery Center Operations',
        desc: 'Restricted biometric access, strictly enforced clean-desk policy, paperless workstations, disabled removable USB storage, and continuous facility monitoring.',
      },
      {
        title: 'Encryption & Least-Privilege Access',
        desc: 'All patient health information (PHI) is encrypted with AES-256 at rest and TLS 1.3 in transit. Role-Based Access Control (RBAC) ensures minimum necessary data exposure.',
      },
      {
        title: 'Responsible AI & Certified Human Oversight',
        desc: 'Our machine learning models assist only with document organization and code suggestion. 100% of claims are finalized and signed by certified human coders.',
      },
    ],
    orbitPills: ['HIPAA Compliant', 'BAA Protected', 'AES-256 Bit', 'MFA Required', 'Audit Trails', 'SOC 2 Ready'],
  },

  engagement: [
    {
      id: 'per-chart',
      name: 'Per Chart / Per Claim',
      subtitle: 'Flexible On-Demand Production',
      description: 'Ideal for practices and billing companies needing scalable overflow support, queue clearing, or variable specialty volume without fixed overhead.',
      idealFor: 'Solo practices, growing specialty clinics, and billing companies handling seasonal volume spikes.',
      features: [
        'Pay strictly for charts coded or claims billed',
        'Guaranteed sub-24hr turnaround SLA options',
        'Access to certified specialty-specific coders',
        'No minimum long-term contract lock-ins',
        'Complimentary 50-chart baseline quality audit',
      ],
      ctaText: 'Start On-Demand',
    },
    {
      id: 'dedicated-team',
      name: 'Dedicated Coding & RCM Team',
      subtitle: 'Full-Time Remote Practice Extension',
      badge: 'Most chosen',
      isPopular: true,
      description: 'A hand-selected team of certified coders and billing specialists working exclusively for your organization during your preferred operational hours.',
      idealFor: 'Multi-specialty clinics, surgical centers, and hospital HIM departments seeking dedicated bandwidth.',
      features: [
        'Exclusively allocated certified coders (CPC, CCS, CRC)',
        'US-based account lead and daily production standups',
        'Full integration into your EHR workflows & clinical messaging',
        'Custom SOP and practice-specific coding guidelines',
        'Continuous second-level QA auditing included',
        'Priority SLA with sub-12hr emergency turnaround',
      ],
      ctaText: 'Build Your Dedicated Pod',
    },
    {
      id: 'audit-consulting',
      name: 'Audit & Advisory Consulting',
      subtitle: 'Compliance & Optimization Deep Dive',
      description: 'Comprehensive chart auditing, provider documentation training, and revenue cycle process optimization designed to safeguard compliance and minimize denial rates.',
      idealFor: 'Healthcare organizations preparing for payer audits, expanding service lines, or resolving high denial rates.',
      features: [
        'Pre-bill and post-bill statistical chart sample audits',
        'E/M documentation bell-curve benchmarking',
        'Provider education & CDI feedback webinars',
        'Denial root-cause remediation roadmaps',
        'Comprehensive compliance audit reporting',
      ],
      ctaText: 'Schedule Audit Review',
    },
  ],

  medicalWriting: {
    badge: 'COMING SOON',
    title: 'Medical Writing is',
    titleAccent: 'our next department.',
    lede: 'Expanding our clinical documentation expertise to support pharmaceutical, biotech, medical device, and academic healthcare institutions with high-rigor medical writing.',
    cta: 'Join the Early-Access List',
    tiles: [
      {
        title: 'Regulatory Writing',
        desc: 'Clinical study reports (CSRs), investigator brochures, protocols, and regulatory submission summaries adhering to ICH-GCP standards.',
        icon: 'FileText',
      },
      {
        title: 'Peer-Reviewed Publications',
        desc: 'Manuscript preparation, scientific posters, abstracts, and journal submissions written to ICMJE publication guidelines.',
        icon: 'BookOpen',
      },
      {
        title: 'Medical Communications',
        desc: 'Advisory board summaries, scientific slide decks, white papers, and continuing medical education (CME) content modules.',
        icon: 'MessageSquare',
      },
      {
        title: 'Patient-Facing Health Content',
        desc: 'Clear, empathetic, health-literate patient education materials, disease state guides, and informed consent documentation.',
        icon: 'HeartHandshake',
      },
    ],
  },

  locations: {
    eyebrow: 'GLOBAL COLLABORATION',
    title: 'Working while you sleep,',
    titleAccent: 'ready when you wake.',
    lede: 'Our dual-hub delivery model combines US-based client leadership with our 24/7 technology and coding operations in India—enabling overnight chart turnaround and continuous revenue cycle velocity.',
    hubs: [
      {
        id: 'us',
        country: 'United States',
        role: 'Client Services & Account Leadership',
        timezone: 'America/New_York',
        city: 'New York / Eastern Time',
        focus: ['Client Onboarding & BAA', 'Provider Relations & CDI', 'Executive Quarterly Reviews', 'Payer Contract Escalations'],
      },
      {
        id: 'india',
        country: 'India',
        role: 'Delivery Operations & Technology Center',
        timezone: 'Asia/Kolkata',
        city: 'Technology Park, Ahmedabad',
        focus: ['24/7 Coding & Claim Scrubbing', 'Overnight Chart Queue Clearing', 'AI/ML Healthcare Systems Lab', 'Second-Level QA Auditing'],
      },
    ],
  },

  faq: [
    {
      question: 'Do you execute a formal Business Associate Agreement (BAA)?',
      answer: 'Yes, absolutely. As a standard requirement for all US healthcare partnerships, we execute a legally binding Business Associate Agreement (BAA) before receiving any protected health information (PHI) or accessing your electronic health record system. Our operations strictly comply with HIPAA privacy and security rules.',
    },
    {
      question: 'Does your AI make the final coding decision?',
      answer: 'No. Our proprietary healthcare AI is strictly computer-assisted coding (CAC)—it pre-screens documentation, flags potential ICD-10/CPT codes, and identifies documentation gaps. 100% of charts are reviewed, verified, and signed off by a credentialed human medical coder (CPC, CCS, CRC) before submission. AI never files claims autonomously.',
    },
    {
      question: 'Which Electronic Health Record (EHR) systems do you work with?',
      answer: 'We are EHR-agnostic. Our certified teams have extensive direct production experience with Epic, Oracle Health (Cerner), athenahealth, Meditech, eClinicalWorks, NextGen, Allscripts, Greenway, and specialized clinical software. We access your system securely via your preferred VPN or secure remote gateway.',
    },
    {
      question: 'How does the complimentary 50-chart coding audit work?',
      answer: 'Our free 50-chart audit provides an objective evaluation of your current coding accuracy, E/M bell-curve distribution, and uncaptured revenue or compliance risks. After executing a BAA, you securely share 50 blinded encounters. Our senior auditors review them and deliver an executive report detailing your accuracy rate, missed diagnosis codes, and revenue opportunities—with zero obligation.',
    },
    {
      question: 'How quickly can a dedicated team or coding support start?',
      answer: 'For standard on-demand coding queues or our 50-chart audit, onboarding typically takes 48 to 72 hours once EHR credentials and BAA are finalized. For custom dedicated team pods, we typically complete specialty guideline alignment, team training, and go-live within 1 to 2 weeks.',
    },
  ],

  contact: {
    eyebrow: 'LET\'S CONNECT',
    title: 'Let\'s discuss your',
    titleAccent: 'practice needs.',
    lede: 'Connect with our leadership team for a confidential revenue cycle consultation or to claim your complimentary 50-chart coding accuracy audit.',
    direct: {
      phone: '+1 (XXX) XXX-XXXX [[REAL NUMBER]]',
      email: 'info@crystalclearone.net',
      website: 'www.crystalclearone.net',
      locations: 'United States (Client Services) · India (Delivery Operations)',
    },
    interestOptions: [
      { id: 'free-audit', label: 'Free 50-chart coding audit' },
      { id: 'coding', label: 'Medical coding services' },
      { id: 'billing', label: 'Medical billing & AR recovery' },
      { id: 'rcm', label: 'Full revenue cycle management' },
      { id: 'ai-ml', label: 'AI/ML healthcare systems engineering' },
      { id: 'writing', label: 'Medical writing (early access list)' },
    ],
  },

  footer: {
    disclaimer: '© 2026 Crystal Clear One.net LLC. CPT® is a registered trademark of the American Medical Association. Codes, claims, clinical encounters and dashboard figures shown across this website are illustrative samples. [[Replace all bracketed placeholders prior to production deployment]]',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'HIPAA Notice', href: '#' },
      { label: 'BAA Request', href: '#contact' },
    ],
  },
};
