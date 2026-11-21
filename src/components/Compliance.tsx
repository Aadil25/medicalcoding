import React, { useEffect, useRef } from 'react';
import { SITE_CONTENT } from '../content/site-content';
import { SecurityShield } from './SecurityShield';
import { gsap } from '../animations/gsap-setup';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { CheckCircle2 } from 'lucide-react';

export const Compliance: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const checklistRef = useRef<HTMLDivElement | null>(null);

  const prefersReducedMotion = useReducedMotion();
  const { eyebrow, title, titleAccent, lede, checklist } = SITE_CONTENT.compliance;

  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Checklist items slide in
      const items = checklistRef.current?.querySelectorAll('.compliance-item');
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: checklistRef.current,
              start: 'top 75%',
              end: 'bottom 60%',
              scrub: false,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="compliance"
      ref={sectionRef}
      className="bg-white py-24 sm:py-32 border-b border-line overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Security Core Animation */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <SecurityShield />
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-teal" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-teal">
                {eyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-navy leading-[1.18] tracking-[-0.025em]">
              {title}{' '}
              <span className="font-serif italic font-normal text-teal">
                {titleAccent}
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              {lede}
            </p>

            {/* Checklist Items */}
            <div ref={checklistRef} className="mt-8 space-y-4">
              {checklist.map((item, idx) => (
                <div
                  key={idx}
                  className="compliance-item p-5 rounded-24 bg-paper border border-line hover:border-teal/50 transition-colors flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-mist text-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-xs text-muted font-mono">
              Notice: Operations strictly adhere to HIPAA Privacy and Security Rules. [[List only certifications you actually hold before going live]]
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
