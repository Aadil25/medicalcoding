import React, { useEffect, useRef } from 'react';
import { SITE_CONTENT } from '../content/site-content';
import { gsap, ScrollTrigger } from '../animations/gsap-setup';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { Shield, ShieldCheck, Lock, Key, FileCheck, CheckCircle2 } from 'lucide-react';

export const Compliance: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shieldRef = useRef<HTMLDivElement | null>(null);
  const checklistRef = useRef<HTMLDivElement | null>(null);

  const prefersReducedMotion = useReducedMotion();
  const { eyebrow, title, titleAccent, lede, checklist, orbitPills } = SITE_CONTENT.compliance;

  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Shield slow vertical parallax
      gsap.to(shieldRef.current, {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
        },
      });

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
          
          {/* Left Column: Animated Shield with Counter-Rotating Rings & Orbiting Pills */}
          <div ref={shieldRef} className="lg:col-span-5 flex items-center justify-center relative min-h-[420px]">
            {/* Center Outer Glow */}
            <div className="absolute w-72 h-72 bg-teal/15 rounded-full blur-3xl pointer-events-none" />

            {/* Counter-Rotating Ring 1 (Clockwise) */}
            <div
              className={`absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border-2 border-dashed border-teal/30 pointer-events-none ${
                prefersReducedMotion ? '' : 'animate-spin-slow'
              }`}
              style={{ animationDuration: '35s' }}
            />

            {/* Counter-Rotating Ring 2 (Counter-Clockwise) */}
            <div
              className={`absolute w-56 h-56 sm:w-64 sm:h-64 rounded-full border border-dashed border-navy/25 pointer-events-none ${
                prefersReducedMotion ? '' : 'animate-spin-slow'
              }`}
              style={{ animationDuration: '24s', animationDirection: 'reverse' }}
            />

            {/* Core Shield */}
            <div className="relative z-10 w-40 h-44 sm:w-48 sm:h-52 rounded-3xl bg-gradient-to-br from-navy via-navy to-teal p-1 shadow-2xl flex items-center justify-center">
              <div className="w-full h-full rounded-[22px] bg-gradient-to-b from-[#0A2D4D] to-[#071F37] flex flex-col items-center justify-center p-4 text-center border border-teal/40">
                <ShieldCheck className="w-14 h-14 text-teal-bright mb-2" strokeWidth={1.5} />
                <span className="text-white font-extrabold text-sm sm:text-base font-mono">
                  HIPAA SAFE
                </span>
                <span className="text-teal-bright text-[10px] font-mono mt-0.5">
                  100% BAA Enforced
                </span>
              </div>
            </div>

            {/* Orbiting Security Pills */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top Left Pill */}
              <div className="absolute top-4 left-0 sm:left-4 bg-white/95 border border-line shadow-lg rounded-full px-3 py-1 text-xs font-mono font-bold text-navy flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-teal" />
                <span>AES-256 Bit</span>
              </div>

              {/* Top Right Pill */}
              <div className="absolute top-8 right-0 sm:right-4 bg-navy-deep text-white border border-teal/40 shadow-lg rounded-full px-3 py-1 text-xs font-mono font-bold flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-teal-bright" />
                <span>Mutual BAA</span>
              </div>

              {/* Bottom Left Pill */}
              <div className="absolute bottom-6 left-2 sm:left-6 bg-white/95 border border-line shadow-lg rounded-full px-3 py-1 text-xs font-mono font-bold text-navy flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5 text-teal" />
                <span>MFA / RBAC</span>
              </div>

              {/* Bottom Right Pill */}
              <div className="absolute bottom-4 right-2 sm:right-8 bg-mist border border-teal/30 shadow-lg rounded-full px-3 py-1 text-xs font-mono font-bold text-teal flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-teal" />
                <span>Zero PHI Retention</span>
              </div>
            </div>

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

