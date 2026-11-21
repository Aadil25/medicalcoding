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

export interface CoverageCardItem {
  number: string;
  setting: string;
  title: string;
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
  ehrList?: string[];
}

export const SITE_CONTENT = {
  brand: {
    name: 'Crystal Clear One.net LLC',
    shortName: 'Crystal Clear 1.net LLC',
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
    { label: 'Reporting', href: '#reporting' },
    { label: 'Coverage', href: '#coverage' },
    { label: 'Compliance', href: '#compliance' },
    { label: 'FAQ', href: '#faq' },
  ],

  hero: {
    eyebrow: 'Healthcare revenue solutions for US providers',
    titleMain: 'Simplify your medical coding & billing,',
    titleAccent: 'with clarity.',
    lede: 'Professional, reliable and cost-efficient revenue cycle support for hospitals, clinics and physician practices. Certified coders, a two-level quality process and 24×7 support mean your claims go out clean and your team gets time back.',
    ctaPrimary: 'Book a Consultation',
    ctaSecondary: 'Explore Services',
    trustNote: 'US client services · India delivery operations',
    trustMetric: '98.5% coding accuracy · 24×7 support',
    badges: ['98.5% Coding Accuracy', '24×7 Support', 'AAPC · CPC', 'AHIMA · CCS', 'CRC · CIC'],
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
        title: 'Two-Level QA Gate',
        indicator: 'Audited Encounter Feed',
        detail: 'Dual-Pass Verification',
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
    'E/M 2027 Guidelines',
    'MS-DRG Inpatient',
    'APR-DRG Ped/Critical',
    'CMS-HCC Model V28',
    'NCCI Edits & PTP',
    'Modifiers -25, -59, -X{EPSU}',
    'CARC / RARC Remits',
    'Epic · eClinicalWorks · Allscripts',
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
    highlightIndices: [14, 15, 16, 29, 34, 35],
    signature: 'Crystal Clear One.net LLC · Clarity. Innovation. Excellence.',
  },

  stats: [
    {
      value: 98.5,
      decimals: 1,
      suffix: '%',
      label: 'Coding Accuracy',
      note: 'Verified through two-level QA audits',
    },
    {
      value: 24,
      decimals: 0,
      suffix: 'hr',
      label: 'Outpatient Turnaround',
      note: 'Rapid queue clearing',
    },
    {
      value: 30,
      decimals: 0,
      suffix: '+',
      label: 'Clinical Specialties',
      note: 'Sub-specialty certified coders',
    },
    {
      value: 24,
      decimals: 0,
      suffix: '×7',
      label: '24×7 Support',
      note: 'Support for your team, every day of the year',
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
        'E/M 2027 guidelines applied for professional services with NCCI modifier logic',
      ],
      chips: ['ICD-10-CM', 'CPT®', 'HCPCS', 'HCC V28', 'E/M 2027'],
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
        'Aggressive payer follow-up via automated status checks and experienced payer reps',
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
      chips: ['Baseline Audits', 'E/M Bell Curves', 'CDI Feedback', '98.5% Accuracy'],
      visualType: 'audit' as const,
      isDark: false,
    },
    {
      id: 'revenue-cycle',
      number: '06',
      title: 'End-to-end revenue cycle management',
      serifAccent: 'built around your practice',
      description: 'Full-spectrum RCM orchestration combining certified human talent with structured workflows from patient scheduling and eligibility verification through to final balance resolution.',
      bullets: [
        'Initial denial rate held at 1.8%',
        'Seamless handoff across intake, authorization, coding, billing, and patient collections',
        'Dedicated US account manager paired with 24×7 delivery operations',
      ],
      chips: ['Full-Lifecycle', '1.8% Denial Rate', 'Dedicated Lead', '24×7 Support'],
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
      description: 'Chronic care management (CCM), transitional care (TCM), AWVs, and accurate HCC capture under E/M 2027.',
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
      description: 'We execute a mutual Business Associate Agreement (BAA), establish encrypted VPN or secure credentials to your EHR, and configure your practice guidelines within 48 hours.',
      highlight: 'Full HIPAA compliance with signed BAA and audited access credentials',
      specs: ['IMS', 'eClinicalWorks', 'Epic', 'Allscripts', 'MD Office Manager', 'Practice Fusion'],
    },
    {
      step: '02',
      title: 'Specialty routing & chart abstraction',
      tagline: 'Specialty-matched coders · documentation gap checks',
      description: 'Each chart goes to a coder who knows the specialty. They abstract diagnoses and procedures and note missing details such as laterality, acuity or stage.',
      highlight: 'Specialty-matched coders abstract chart details and flag missing documentation',
      specs: ['Specialty Assignment', 'Clinical Abstraction', 'Laterality & Acuity Checks', 'Physician Query Prep'],
    },
    {
      step: '03',
      title: 'Code assignment & validation',
      tagline: 'CPC · CCS · CRC · CIC credentialed coders',
      description: 'Codes are assigned and checked against official guidelines, E/M 2027 rules, NCCI edits and payer policy. Physician queries go out when the record is unclear.',
      highlight: 'Rigorous verification under official guidelines, E/M 2027 rules, and payer policies',
      specs: ['AAPC / AHIMA Certified', 'E/M 2027 Standards', 'NCCI & LCD/NCD Checks', 'Physician Clarifications'],
    },
    {
      step: '04',
      title: 'Second-Level QA Audit & Scrubbing',
      tagline: 'Rigorous 98.5% accuracy gate',
      description: 'A senior QA auditor samples charts for E/M balance, unbundling traps, and LCD/NCD compliance before transmission, ensuring our client target of 98.5% accuracy is upheld.',
      highlight: 'Zero tolerance for compliance drift, pre-empting payer clawbacks and audits',
      specs: ['Pre-Submission Scrub', 'Statistical Random Sampling', 'Audit Scorecard Logging', '98.5% Gate'],
    },
    {
      step: '05',
      title: 'Delivery & Transparent Reporting',
      tagline: 'Clean claims out, live insights in',
      description: 'Clean claims transmit directly to your clearinghouse or EHR queue. You access live dashboards showing turnaround times, clean-claim rates, and denial trends.',
      highlight: 'Complete visibility into turnaround times, coder notes, and daily production stats',
      specs: ['Sub-24hr Turnaround', 'Live Portal Analytics', 'Weekly RCM Debriefs', '24×7 Availability'],
    },
  ],

  reportingDashboard: {
    url: 'portal.crystalclearone.net/analytics',
    period: 'Current Month · Production Live',
    kpis: [
      { label: 'Coding Accuracy', value: '98.5%', delta: 'QA verified', trend: 'up' },
      { label: 'Days in A/R (DNFB)', value: '34', suffix: 'Days', delta: '-4.2 days YoY', trend: 'down' },
      { label: 'Initial Denial Rate', value: '1.8%', delta: '▼ 2.4 pts', trend: 'down' },
      { label: 'Clean Claim Rate', value: '98.2%', delta: '+2.1% vs benchmark', trend: 'up' },
    ],
    chartTitle: 'Coding accuracy, last 6 months',
    denialReasons: [
      { code: 'CO-16', label: 'Missing / Incomplete Info', pct: 38, count: 42 },
      { code: 'CO-97', label: 'Bundled / Inclusive Charge', pct: 26, count: 29 },
      { code: 'CO-197', label: 'Pre-certification Absent', pct: 21, count: 23 },
      { code: 'CO-11', label: 'Diagnosis Inconsistent', pct: 15, count: 17 },
    ],
  },

  codingDemo: {
    eyebrow: 'Coding in action',
    title: 'See how our coders turn a note',
    titleAccent: 'into a clean claim.',
    subtitle: 'A certified coder reads the note, marks the clinical evidence, assigns each code and flags what the documentation is missing, before a QA auditor signs off.',
    noteText: '62-year-old male, established patient, seen for follow-up of type 2 diabetes mellitus with diabetic chronic kidney disease. Latest eGFR 52, consistent with CKD stage 3a. History of hypertension, BP 142/88 today; lisinopril dose increased. Continues insulin glargine nightly; A1c 8.1%, up from 7.6%. Reviewed labs, adjusted two prescription medications, discussed renal referral. Medical decision making: moderate. Diabetic retinopathy mentioned in history without status or laterality.',
    panelTitle: 'Assigned codes',
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
        tag: 'E/M 2027',
        category: 'Evaluation & Management',
        rationale: 'Office/outpatient visit for established patient under E/M 2027 rules; moderate MDM.',
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
    disclaimer: 'Sample note written for demonstration. Contains no real patient data.',
  },

  coverage: {
    eyebrow: 'Coding coverage',
    title: 'Every care setting,',
    titleAccent: 'one accountable coding team.',
    sideText: 'From the inpatient floor to the physician office, our certified coders cover facility and professional coding on your EHR, with support available 24×7.',
    cards: [
      {
        number: '01',
        setting: 'INPATIENT',
        title: 'Inpatient facility coding',
        description: 'Complete ICD-10-CM and ICD-10-PCS coding with DRG validation for acute-care stays.',
        bullets: [
          'MS-DRG and APR-DRG assignment',
          'POA indicators and CC/MCC capture',
          'Physician queries for unclear records',
        ],
        isTealAccent: true,
      },
      {
        number: '02',
        setting: 'OUTPATIENT & ED',
        title: 'Outpatient & emergency',
        description: 'Emergency department, observation, same-day surgery and clinic visits coded for accurate facility payment.',
        bullets: [
          'ED facility and pro-fee levels',
          'Observation and APC coding',
          'Same-day surgery',
        ],
      },
      {
        number: '03',
        setting: 'PROFESSIONAL FEE',
        title: 'Physician & E/M coding',
        description: 'Professional services coded under E/M 2027 guidelines, with correct modifiers and NCCI checks.',
        bullets: [
          'E/M leveling by MDM or time',
          'Modifier and bundling review',
          'Physician and NPP services',
        ],
      },
      {
        number: '04',
        setting: 'RISK ADJUSTMENT',
        title: 'HCC risk adjustment',
        description: 'Retrospective and prospective reviews under CMS-HCC V28, with every diagnosis supported by the record.',
        bullets: [
          'MEAT-supported HCC capture',
          'RAF impact reporting',
          'RADV-ready documentation',
        ],
      },
      {
        number: '05',
        setting: 'SURGICAL',
        title: 'Surgical & interventional',
        description: 'Operative and procedure reports for orthopedics, cardiology, general surgery and interventional radiology.',
        bullets: [
          'Global periods and bundling',
          'Cath lab and interventional procedures',
          'Multiple-procedure rules',
        ],
      },
      {
        number: '06',
        setting: 'ANCILLARY',
        title: 'Radiology, lab & anesthesia',
        description: 'High-volume ancillary coding with fast turnaround and consistent modifier use.',
        bullets: [
          'Radiology -26 / -TC modifiers',
          'Pathology and laboratory',
          'Anesthesia base and time units',
        ],
      },
    ] as CoverageCardItem[],
  },

  whyChoose: [
    {
      title: '24×7 dedicated support',
      description: 'A named team and team lead who learn your practice, reachable around the clock.',
      icon: 'Headphones',
      metric: '24×7',
      metricLabel: 'Always Available',
    },
    {
      title: '98.5% coding accuracy',
      description: 'Specialty-matched coders and second-level audits on every batch.',
      icon: 'ShieldCheck',
      metric: '98.5%',
      metricLabel: 'Audited Accuracy',
    },
    {
      title: 'EHR/EMR compatibility',
      description: 'We work inside IMS, eClinicalWorks, Epic, Allscripts, MD Office Manager and Practice Fusion.',
      icon: 'Cpu',
      metric: 'Remote',
      metricLabel: 'Direct EHR Access',
    },
    {
      title: 'Secure data handling & BAA',
      description: 'Enterprise-grade security controls including end-to-end AES-256 encryption, zero local data caching, multi-factor authentication, and signed Business Associate Agreements.',
      icon: 'Lock',
      metric: '100%',
      metricLabel: 'HIPAA Compliant',
    },
    {
      title: 'Transparent reporting & telemetry',
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
        title: '24×7 security monitoring',
        desc: 'Systems and user access are monitored around the clock, with documented incident response procedures.',
      },
    ],
    orbitPills: ['HIPAA Compliant', 'BAA Protected', 'AES-256 Bit', 'MFA Required', 'Audit Trails', '24×7 Monitoring'],
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
        'Priority SLA with sub-12hr turnaround and 24×7 escalation',
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
        'E/M documentation bell-curve benchmarking under E/M 2027 rules',
        'Provider education & CDI feedback webinars',
        'Denial root-cause remediation roadmaps',
        'Comprehensive compliance audit reporting',
      ],
      ctaText: 'Schedule Audit Review',
    },
  ],

  ehrSystems: [
    'IMS',
    'eClinicalWorks',
    'Epic',
    'Allscripts',
    'MD Office Manager',
    'Practice Fusion',
  ],

  locations: {
    eyebrow: 'GLOBAL COLLABORATION',
    title: 'Working while you sleep,',
    titleAccent: 'ready when you wake.',
    lede: 'Our dual-hub delivery model combines US-based client leadership with our 24×7 operations in India—enabling overnight chart turnaround and continuous revenue cycle velocity.',
    hubs: [
      {
        id: 'us',
        country: 'United States',
        role: 'Client Services & Account Leadership',
        timezone: 'America/New_York',
        city: 'New York / Eastern Time',
        focus: [
          'Account management, onboarding and consultations, with 24×7 support for urgent requests.',
          'Provider Relations & CDI Feedback',
          'Executive Quarterly Reviews',
          'Payer Contract Escalations',
        ],
      },
      {
        id: 'india',
        country: 'India',
        role: 'Delivery Operations & Quality Center',
        timezone: 'Asia/Kolkata',
        city: 'Technology Park, Ahmedabad',
        focus: [
          'Certified coders, billers and QA auditors working 24×7, delivering overnight for your next business day.',
          'Specialty Routing & Chart Abstraction',
          'Second-Level QA Auditing to 98.5%',
          'Continuous Claim Scrubbing & Posting',
        ],
      },
    ],
  },

  faq: [
    {
      question: 'Do you execute a formal Business Associate Agreement (BAA)?',
      answer: 'Yes, absolutely. As a standard requirement for all US healthcare partnerships, we execute a legally binding Business Associate Agreement (BAA) before receiving any protected health information (PHI) or accessing your electronic health record system. Our operations strictly comply with HIPAA privacy and security rules.',
    },
    {
      question: 'What coding accuracy do you guarantee?',
      answer: 'We maintain 98.5% coding accuracy, measured through second-level QA audits on every batch and reported to you each month by coder and specialty.',
    },
    {
      question: 'Do you offer 24×7 support?',
      answer: 'Yes. Our team is available 24×7, so urgent questions, backlogs and turnaround requests are handled on your schedule, including nights and weekends.',
    },
    {
      question: 'Which EHR systems do you work with?',
      answer: 'Our coders work directly inside your EHR through secure remote access that you control. We currently work with:',
      ehrList: ['IMS', 'eClinicalWorks', 'Epic', 'Allscripts', 'MD Office Manager', 'Practice Fusion'],
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
    lede: 'Request a complimentary revenue cycle consultation and a free 50-chart audit. Our team is available 24×7.',
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
      { id: 'rcm', label: 'End-to-end revenue cycle management' },
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
