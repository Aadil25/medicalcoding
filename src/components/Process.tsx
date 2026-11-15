import React, { useState, useEffect, useRef } from 'react';
import { SITE_CONTENT, ProcessStep } from '../content/site-content';
import { ShieldCheck, Cpu, UserCheck, Award, Send, CheckCircle2 } from 'lucide-react';

const stepIcons = [
  <ShieldCheck className="w-5 h-5 text-teal" />,
  <Cpu className="w-5 h-5 text-teal" />,
  <UserCheck className="w-5 h-5 text-teal" />,
  <Award className="w-5 h-5 text-teal" />,
  <Send className="w-5 h-5 text-teal" />,
];

export const Process: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const containerRef = useRef<HTMLElement | null>(null);
  const stepCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = SITE_CONTENT.processSteps;

  useEffect(() => {
    const handleScroll = () => {
      const viewportCenter = window.innerHeight * 0.45;
      let currentIndex = 0;

      stepCardRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportCenter) {
          currentIndex = idx;
        }
      });

      setActiveStepIndex(currentIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeStep = steps[activeStepIndex] || steps[0];
  const progressPercent = ((activeStepIndex + 1) / steps.length) * 100;

  return (
    <section id="process" ref={containerRef} className="bg-white py-24 sm:py-32 border-b border-line relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Timeline Controller */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-teal" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-teal">
                PROVEN 5-STAGE PIPELINE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy leading-[1.18] tracking-[-0.025em]">
              From patient chart to{' '}
              <span className="font-serif italic font-normal text-teal">
                clean claim
              </span>{' '}
              in five steps.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
              Every chart flows through an audited, multi-layered verification protocol that combines speed, clinical accuracy, and total compliance with zero manual drag.
            </p>

            {/* Giant Outlined Step Number Display */}
            <div className="mt-8 flex items-baseline gap-4 select-none">
              <div
                className="text-7xl sm:text-8xl lg:text-9xl font-black font-mono tracking-tighter text-transparent stroke-text"
                style={{ WebkitTextStroke: '2px #0F8B8D' }}
              >
                {activeStep.step}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal">
                  Step {activeStepIndex + 1} of 5
                </span>
                <span className="text-base font-extrabold text-navy mt-1">
                  {activeStep.title}
                </span>
              </div>
            </div>

            {/* Gradient Progress Meter */}
            <div className="mt-6 space-y-2 max-w-sm">
              <div className="w-full h-2 rounded-full bg-mist overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-navy via-teal to-teal-bright transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[11px] font-mono text-muted">
                <span>Intake & Ingestion</span>
                <span>Sub-24hr Adjudication</span>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-20 bg-mist/60 border border-teal/20 text-xs text-text max-w-sm">
              <span className="font-bold text-teal block mb-1">Human-in-the-Loop Safeguard:</span>
              AI pre-screens and flags indicators, but 100% of encounters are certified and signed by credentialed coders.
            </div>
          </div>

          {/* Right Column: Step Cards along Vertical Progress Rail */}
          <div className="lg:col-span-7 relative">
            {/* Vertical Rail Line */}
            <div
              className="absolute left-6 top-6 bottom-6 w-1 bg-line hidden sm:block rounded-full"
              aria-hidden="true"
            >
              <div
                className="w-full bg-gradient-to-b from-navy via-teal to-teal-bright transition-all duration-300 rounded-full"
                style={{ height: `${progressPercent}%` }}
              />
            </div>

            {/* Step Cards List */}
            <div className="space-y-8 sm:space-y-12 sm:pl-16">
              {steps.map((st, idx) => {
                const isActive = activeStepIndex === idx;

                return (
                  <div
                    key={st.step}
                    ref={(el) => (stepCardRefs.current[idx] = el)}
                    className={`rounded-34 p-7 sm:p-9 border transition-all duration-300 transform ${
                      isActive
                        ? 'bg-white border-teal shadow-xl translate-x-1 sm:translate-x-3 ring-2 ring-teal/20'
                        : 'bg-paper/80 border-line/80 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                            isActive ? 'bg-teal text-white shadow-glow-teal' : 'bg-mist text-teal'
                          }`}
                        >
                          {stepIcons[idx]}
                        </div>
                        <span className="text-xs font-mono font-bold text-teal tracking-wider uppercase">
                          Stage {st.step} · {st.tagline}
                        </span>
                      </div>
                      <span className="text-xl font-mono font-black text-navy/40">
                        {st.step}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-navy">
                      {st.title}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                      {st.description}
                    </p>

                    <div className="mt-4 p-3 rounded-xl bg-mist/50 border border-teal/15 text-xs text-text font-medium flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                      <span>{st.highlight}</span>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2 pt-3 border-t border-line/40">
                      {st.specs.map((spec) => (
                        <span
                          key={spec}
                          className="px-2.5 py-1 rounded-full bg-white border border-line text-[11px] font-mono text-muted"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

