import React, { useState, useEffect, useRef } from 'react';
import { SITE_CONTENT } from '../content/site-content';
import { RotateCcw, FileText, UserCheck, CheckCircle2 } from 'lucide-react';

export const CodingDemo: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(-1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState<boolean>(false);

  const containerRef = useRef<HTMLElement | null>(null);
  const { eyebrow, title, titleAccent, subtitle, noteText, panelTitle, steps, disclaimer } =
    SITE_CONTENT.codingDemo;

  // Auto play when scrolled into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasPlayedOnce) {
          startDemo();
          setHasPlayedOnce(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasPlayedOnce]);

  // Demo sequence player
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isPlaying && activeStepIndex < steps.length - 1) {
      timeoutId = setTimeout(() => {
        setActiveStepIndex((prev) => prev + 1);
      }, 950);
    } else if (activeStepIndex >= steps.length - 1) {
      setIsPlaying(false);
    }

    return () => clearTimeout(timeoutId);
  }, [isPlaying, activeStepIndex, steps.length]);

  const startDemo = () => {
    setActiveStepIndex(0);
    setIsPlaying(true);
  };

  const handleReplay = () => {
    setActiveStepIndex(-1);
    setIsPlaying(false);
    setTimeout(() => {
      startDemo();
    }, 150);
  };

  // Helper to render clinical note with dynamic multi-color highlights
  const renderInteractiveNote = () => {
    const isStep1Active = activeStepIndex >= 0;
    const isStep2Active = activeStepIndex >= 1;
    const isStep3Active = activeStepIndex >= 2;
    const isStep4Active = activeStepIndex >= 3;
    const isStep5Active = activeStepIndex >= 4;
    const isStep6Active = activeStepIndex >= 5;

    return (
      <div className="font-mono text-xs sm:text-[13px] leading-[1.8] text-navy">
        62-year-old male, established patient, seen for follow-up of{' '}
        <mark
          className={`px-1 py-0.5 rounded transition-all duration-300 font-bold ${
            isStep1Active
              ? 'bg-teal/25 text-navy border-b-2 border-teal'
              : 'bg-transparent text-navy'
          }`}
        >
          type 2 diabetes mellitus with diabetic chronic kidney disease
        </mark>
        . Latest eGFR 52, consistent with{' '}
        <mark
          className={`px-1 py-0.5 rounded transition-all duration-300 font-bold ${
            isStep2Active
              ? 'bg-teal/25 text-navy border-b-2 border-teal'
              : 'bg-transparent text-navy'
          }`}
        >
          CKD stage 3a
        </mark>
        . History of{' '}
        <mark
          className={`px-1 py-0.5 rounded transition-all duration-300 font-bold ${
            isStep3Active
              ? 'bg-sky-200 text-navy border-b-2 border-sky-600'
              : 'bg-transparent text-navy'
          }`}
        >
          hypertension
        </mark>
        , BP 142/88 today; lisinopril dose increased. Continues{' '}
        <mark
          className={`px-1 py-0.5 rounded transition-all duration-300 font-bold ${
            isStep4Active
              ? 'bg-emerald-200 text-navy border-b-2 border-emerald-600'
              : 'bg-transparent text-navy'
          }`}
        >
          insulin glargine
        </mark>{' '}
        nightly; A1c 8.1%, up from 7.6%. Reviewed labs, adjusted two prescription medications, discussed renal referral.{' '}
        <mark
          className={`px-1 py-0.5 rounded transition-all duration-300 font-bold ${
            isStep5Active
              ? 'bg-purple-200 text-navy border-b-2 border-purple-600'
              : 'bg-transparent text-navy'
          }`}
        >
          Medical decision making: moderate
        </mark>
        .{' '}
        <mark
          className={`px-1.5 py-0.5 rounded transition-all duration-300 font-bold ${
            isStep6Active
              ? 'bg-gold/40 text-navy border-2 border-gold animate-pulse'
              : 'bg-transparent text-navy'
          }`}
        >
          Diabetic retinopathy mentioned in history without status or laterality
        </mark>
        .
      </div>
    );
  };

  const revealedCount = Math.max(0, activeStepIndex + 1);
  const progressPercent = Math.round((revealedCount / steps.length) * 100);

  return (
    <section
      id="demo"
      ref={containerRef}
      className="bg-white py-24 sm:py-32 border-b border-line overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mist text-teal text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <UserCheck className="w-3.5 h-3.5" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight tracking-tight text-balance">
            {title}{' '}
            <span className="font-serif italic font-normal text-teal">
              {titleAccent}
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Demo Stage Split Panel */}
        <div className="rounded-34 border border-line bg-paper shadow-2xl overflow-hidden max-w-6xl mx-auto">
          {/* Top Demo Bar */}
          <div className="bg-[#F8FAFC] px-6 py-4 border-b border-line flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-teal-bright animate-ping" />
              <div className="text-xs font-mono font-bold text-navy flex items-center gap-2">
                <span>Status:</span>
                <span className={isPlaying ? 'text-teal' : 'text-navy'}>
                  {isPlaying
                    ? `Coder reviewing… ${progressPercent}%`
                    : activeStepIndex >= 0
                    ? 'Coding complete'
                    : 'Ready to review'}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-xs font-mono font-bold bg-white px-3 py-1.5 rounded-full border border-line">
                <span className="text-muted">Validated Findings: </span>
                <span className="text-teal font-extrabold">{revealedCount}</span> / {steps.length}
              </div>

              <button
                type="button"
                onClick={handleReplay}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal hover:bg-teal-bright text-white text-xs font-mono font-bold transition-all shadow-sm active:scale-95"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Replay Demo</span>
              </button>
            </div>
          </div>

          {/* Split Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
            {/* Left Column: Clinical Progress Note */}
            <div className="lg:col-span-6 bg-white p-7 sm:p-10 border-b lg:border-b-0 lg:border-r border-line flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-line mb-6">
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-teal" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-navy">
                      Clinical Encounter Note (SOAP)
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-mist text-teal font-semibold">
                    Coder Abstraction Stage
                  </span>
                </div>

                {/* Rendered Text with Dynamic Highlights */}
                <div className="p-5 rounded-24 bg-paper/70 border border-line/80">
                  {renderInteractiveNote()}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-line text-[11px] font-mono text-muted flex items-center justify-between">
                <span>Certified Coder Review</span>
                <span className="text-teal font-bold">1 Provider Query Flagged</span>
              </div>
            </div>

            {/* Right Column: Assigned Codes on Navy Gradient */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#061B30] to-[#0A2D4D] text-white p-7 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-2.5">
                    <UserCheck className="w-4 h-4 text-teal-bright" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-bright">
                      {panelTitle}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-300">
                    E/M 2027 & CMS-HCC V28
                  </span>
                </div>

                {/* Cards List revealed by step */}
                <div className="space-y-3">
                  {steps.map((step, idx) => {
                    const isVisible = activeStepIndex >= idx;
                    const isCurrent = activeStepIndex === idx;

                    return (
                      <div
                        key={step.id}
                        className={`rounded-20 p-3.5 border transition-all duration-500 transform ${
                          isVisible
                            ? step.isQuery
                              ? 'bg-amber-500/20 border-gold shadow-lg opacity-100 translate-x-0'
                              : 'bg-white/10 border-teal/40 opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-6 pointer-events-none'
                        } ${isCurrent ? 'ring-2 ring-teal-bright' : ''}`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-sm font-mono font-extrabold px-2 py-0.5 rounded ${
                                step.isQuery
                                  ? 'bg-gold text-navy'
                                  : 'bg-teal text-white'
                              }`}
                            >
                              {step.code}
                            </span>
                            <span className="text-xs font-bold text-white">
                              {step.category}
                            </span>
                          </div>
                          <span
                            className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                              step.isQuery
                                ? 'bg-amber-400/20 text-amber-300 border-amber-400/40'
                                : 'bg-teal/30 text-teal-bright border-teal/50'
                            }`}
                          >
                            {step.tag}
                          </span>
                        </div>

                        <p className="mt-1.5 text-xs text-slate-300 leading-snug">
                          {step.rationale}
                        </p>
                      </div>
                    );
                  })}

                  {activeStepIndex < 0 && (
                    <div className="py-16 text-center text-slate-400 font-mono text-xs">
                      Press "Replay Demo" or scroll down to initiate review...
                    </div>
                  )}
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-bright" />
                  <span>1 provider query · ready for QA audit</span>
                </span>
                <span className="text-teal-bright font-bold">98.5% Accuracy Target</span>
              </div>
            </div>
          </div>

          {/* Bottom Disclaimer */}
          <div className="bg-[#071F37] text-slate-400 px-6 py-3 text-center text-xs font-mono border-t border-white/10">
            {disclaimer}
          </div>
        </div>
      </div>
    </section>
  );
};

