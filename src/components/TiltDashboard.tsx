import React, { useEffect, useRef } from 'react';
import { SITE_CONTENT } from '../content/site-content';
import { gsap, ScrollTrigger } from '../animations/gsap-setup';
import { useReducedMotion } from '../hooks/useReducedMotion';
import {
  LayoutDashboard,
  FileCode,
  Receipt,
  AlertTriangle,
  Clock,
  ClipboardCheck,
  BarChart3,
  Search,
  Bell,
  ArrowUpRight,
  ArrowDownRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const TiltDashboard: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const prefersReducedMotion = useReducedMotion();
  const { reportingDashboard } = SITE_CONTENT;

  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    const el = cardRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          rotateX: 24,
          scale: 0.88,
          transformPerspective: 1600,
          boxShadow: '0 40px 100px -30px rgba(10, 45, 77, 0.45)',
        },
        {
          rotateX: 0,
          scale: 1,
          transformPerspective: 1600,
          boxShadow: '0 20px 60px -20px rgba(10, 45, 77, 0.25)',
          ease: 'power1.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            end: 'center 45%',
            scrub: 0.8,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const navItems = [
    { label: 'Overview', icon: <LayoutDashboard className="w-4 h-4" />, active: true },
    { label: 'Coding Queue', icon: <FileCode className="w-4 h-4" /> },
    { label: 'Billing Batches', icon: <Receipt className="w-4 h-4" /> },
    { label: 'Denial Triage', icon: <AlertTriangle className="w-4 h-4" /> },
    { label: 'A/R Aging', icon: <Clock className="w-4 h-4" /> },
    { label: 'Quality Audits', icon: <ClipboardCheck className="w-4 h-4" /> },
    { label: 'Executive Reports', icon: <BarChart3 className="w-4 h-4" /> },
  ];

  return (
    <section
      id="reporting"
      ref={containerRef}
      className="bg-paper py-24 sm:py-32 border-b border-line overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mist text-teal text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <span>REAL-TIME PRACTICE TELEMETRY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight tracking-tight text-balance">
            See your revenue cycle{' '}
            <span className="font-serif italic font-normal text-teal">
              at a glance.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Every client receives access to our enterprise portal with live claim tracking, coder turnaround metrics, and root-cause denial intelligence.
          </p>
        </div>

        {/* 3D Perspective Stage Container */}
        <div
          ref={stageRef}
          className="relative max-w-6xl mx-auto [perspective:1600px] flex justify-center"
        >
          {/* Dashboard Window Chrome */}
          <div
            ref={cardRef}
            className="w-full bg-white rounded-28 sm:rounded-34 border border-line overflow-hidden shadow-2xl transition-transform duration-100 ease-out"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Browser Chrome Header */}
            <div className="bg-[#F1F5F9] px-4 sm:px-6 py-3 border-b border-line flex items-center justify-between gap-4">
              {/* Traffic Light Dots */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-400/90 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400/90 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400/90 inline-block" />
              </div>

              {/* URL Address Bar */}
              <div className="flex-1 max-w-md mx-auto bg-white rounded-full px-4 py-1.5 border border-line flex items-center justify-center gap-2 text-xs font-mono text-muted shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-teal" />
                <span className="text-navy font-semibold">https://</span>
                <span>{reportingDashboard.url}</span>
              </div>

              {/* Right Profile & Indicator */}
              <div className="flex items-center gap-2 text-xs font-mono text-teal">
                <span className="w-2 h-2 rounded-full bg-teal-bright animate-ping hidden sm:inline-block" />
                <span className="font-semibold hidden sm:inline-block">LIVE TELEMETRY</span>
              </div>
            </div>

            {/* Dashboard Workspace */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
              
              {/* Left Side Navigation */}
              <div className="hidden md:block md:col-span-3 bg-[#FAFCFD] p-5 border-r border-line flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-muted font-bold mb-4 px-2">
                    WORKSPACE NAVIGATION
                  </div>
                  <nav className="space-y-1">
                    {navItems.map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-colors ${
                          item.active
                            ? 'bg-navy text-white shadow-sm'
                            : 'text-text hover:bg-mist hover:text-navy cursor-pointer'
                        }`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </nav>
                </div>

                <div className="p-3 rounded-20 bg-mist/60 border border-teal/20 text-[11px] font-mono text-navy">
                  <div className="font-bold text-teal mb-1">AUDIT READY: BAA</div>
                  <span>100% HIPAA compliant data pipeline</span>
                </div>
              </div>

              {/* Right Content Area */}
              <div className="col-span-1 md:col-span-9 p-6 sm:p-8 bg-paper/60 space-y-6">
                
                {/* Dashboard Topbar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-line">
                  <div>
                    <h3 className="text-xl font-extrabold text-navy">Executive Performance Snapshot</h3>
                    <p className="text-xs font-mono text-muted mt-0.5">{reportingDashboard.period}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>EHR Sync: Connected</span>
                    </span>
                  </div>
                </div>

                {/* 4 KPI Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {reportingDashboard.kpis.map((kpi, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-20 border border-line shadow-sm flex flex-col justify-between"
                    >
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted">
                        {kpi.label}
                      </span>
                      <div className="my-2">
                        <span className="text-2xl sm:text-3xl font-extrabold font-mono text-navy">
                          {kpi.value}
                        </span>
                        {kpi.suffix && (
                          <span className="text-xs text-muted ml-1 font-mono">{kpi.suffix}</span>
                        )}
                      </div>
                      <div className="flex items-center text-[10px] font-mono font-semibold text-teal">
                        {kpi.trend === 'up' && <ArrowUpRight className="w-3.5 h-3.5 text-teal" />}
                        {kpi.trend === 'down' && <ArrowDownRight className="w-3.5 h-3.5 text-teal" />}
                        <span>{kpi.delta}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Charts Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Clean Claim Area Line Chart */}
                  <div className="lg:col-span-7 bg-white p-5 rounded-20 border border-line shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-navy">
                        Clean Claim Rate (Past 6 Months)
                      </span>
                      <span className="text-[11px] font-mono text-teal font-bold">Target: 95%+</span>
                    </div>

                    {/* Area Line Chart SVG */}
                    <div className="h-44 w-full">
                      <svg viewBox="0 0 400 160" className="w-full h-full" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartAreaGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#0F8B8D" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="#0F8B8D" stopOpacity="0.02" />
                          </linearGradient>
                        </defs>
                        {/* Grid lines */}
                        <line x1="0" y1="40" x2="400" y2="40" stroke="#E2E8F0" strokeDasharray="3 3" />
                        <line x1="0" y1="80" x2="400" y2="80" stroke="#E2E8F0" strokeDasharray="3 3" />
                        <line x1="0" y1="120" x2="400" y2="120" stroke="#E2E8F0" strokeDasharray="3 3" />

                        {/* Benchmark Line at 95% (y=60) */}
                        <line x1="0" y1="60" x2="400" y2="60" stroke="#F2B544" strokeWidth="1.5" strokeDasharray="4 4" />

                        {/* Area */}
                        <path
                          d="M0,130 Q70,110 130,80 T260,50 T400,28 L400,160 L0,160 Z"
                          fill="url(#chartAreaGrad)"
                        />
                        {/* Line */}
                        <path
                          d="M0,130 Q70,110 130,80 T260,50 T400,28"
                          fill="none"
                          stroke="#0F8B8D"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        {/* Dots */}
                        <circle cx="130" cy="80" r="4.5" fill="#0A2D4D" stroke="#1BB3B0" strokeWidth="2.5" />
                        <circle cx="260" cy="50" r="4.5" fill="#0A2D4D" stroke="#1BB3B0" strokeWidth="2.5" />
                        <circle cx="400" cy="28" r="5" fill="#0F8B8D" stroke="#FFFFFF" strokeWidth="2.5" />
                      </svg>
                    </div>

                    <div className="flex justify-between text-[10px] font-mono text-muted mt-2">
                      <span>May</span>
                      <span>Jun</span>
                      <span>Jul</span>
                      <span>Aug</span>
                      <span>Sep</span>
                      <span className="font-bold text-teal">Oct (97.4%)</span>
                    </div>
                  </div>

                  {/* Denials by Reason Donut */}
                  <div className="lg:col-span-5 bg-white p-5 rounded-20 border border-line shadow-sm flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-navy">
                        Denials by Reason
                      </span>
                      <span className="text-[10px] font-mono text-muted">Total: 111</span>
                    </div>

                    {/* Donut representation */}
                    <div className="flex items-center gap-4 my-auto">
                      <div className="relative w-28 h-28 flex-shrink-0">
                        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                          {/* Circle segments */}
                          <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#E2E8F0" strokeWidth="4.5" />
                          <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#0F8B8D" strokeWidth="4.5" strokeDasharray="38 62" strokeDashoffset="0" />
                          <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#1BB3B0" strokeWidth="4.5" strokeDasharray="26 74" strokeDashoffset="-38" />
                          <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#F2B544" strokeWidth="4.5" strokeDasharray="21 79" strokeDashoffset="-64" />
                          <circle cx="18" cy="18" r="15.9155" fill="none" stroke="#0A2D4D" strokeWidth="4.5" strokeDasharray="15 85" strokeDashoffset="-85" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                          <span className="text-xs font-mono font-bold text-navy">2.8%</span>
                          <span className="text-[8px] text-muted uppercase">Rate</span>
                        </div>
                      </div>

                      {/* Legend */}
                      <div className="space-y-1.5 text-[11px] font-mono">
                        {reportingDashboard.denialReasons.map((d, i) => (
                          <div key={d.code} className="flex items-center justify-between gap-2">
                            <span className="flex items-center gap-1.5">
                              <span
                                className={`w-2 h-2 rounded-full ${
                                  i === 0
                                    ? 'bg-teal'
                                    : i === 1
                                    ? 'bg-teal-bright'
                                    : i === 2
                                    ? 'bg-amber-400'
                                    : 'bg-navy'
                                }`}
                              />
                              <span className="text-muted">{d.code}</span>
                            </span>
                            <span className="font-bold text-navy">{d.pct}%</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-line text-[10px] text-muted text-center font-mono">
                      All root-cause denials automatically remediated
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* Bottom Caption */}
            <div className="bg-[#F8FAFC] py-2.5 px-6 border-t border-line text-center text-xs font-mono text-muted">
              Illustrative dashboard with sample data. Actual analytics portal connects directly with your EHR.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

