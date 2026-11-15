import React, { useEffect, useRef } from 'react';
import { SITE_CONTENT, AiSystemItem } from '../content/site-content';
import { gsap, ScrollTrigger } from '../animations/gsap-setup';
import { useReducedMotion } from '../hooks/useReducedMotion';
import {
  Cpu,
  TrendingDown,
  Database,
  Users,
  Sparkles,
  Smartphone,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const icons = [
  <Cpu className="w-6 h-6" />,
  <TrendingDown className="w-6 h-6" />,
  <Database className="w-6 h-6" />,
  <Users className="w-6 h-6" />,
  <Sparkles className="w-6 h-6" />,
  <Smartphone className="w-6 h-6" />,
];

export const AiRail: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinWrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const prefersReducedMotion = useReducedMotion();
  const cards = SITE_CONTENT.aiRail;

  useEffect(() => {
    // Check if on desktop and not preferring reduced motion
    if (prefersReducedMotion || typeof window === 'undefined') return;

    const track = trackRef.current;
    const pinWrapper = pinWrapperRef.current;
    const section = sectionRef.current;
    if (!track || !pinWrapper || !section) return;

    // Only pin on screens >= 900px
    const mm = gsap.matchMedia();

    mm.add('(min-width: 900px)', () => {
      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        const windowWidth = window.innerWidth;
        return -(trackWidth - windowWidth + 120);
      };

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
      });

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=2400',
        pin: pinWrapper,
        scrub: 1,
        animation: tween,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${self.progress * 100}%`;
          }
        },
      });
    });

    return () => {
      mm.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      id="ai"
      ref={sectionRef}
      className="bg-navy-deep text-white relative"
    >
      <div ref={pinWrapperRef} className="py-20 sm:py-24 min-h-screen flex flex-col justify-between overflow-hidden">
        
        {/* Top Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[2px] bg-teal-bright" />
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-teal-bright">
                  HEALTHCARE AI & DATA PLATFORMS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                We also build the software{' '}
                <span className="font-serif italic font-normal text-teal-bright">
                  behind healthcare.
                </span>
              </h2>
            </div>
            
            <p className="text-sm sm:text-base text-slate-300 max-w-md">
              Beyond operational coding, our specialized engineering team designs and ships HIPAA-grade clinical AI, predictive RCM models, and EHR integration backbones.
            </p>
          </div>

          {/* Horizontal Scroll Progress Indicator (desktop) */}
          <div className="mt-8 hidden lg:block">
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                ref={progressBarRef}
                className="h-full bg-gradient-to-r from-teal to-teal-bright transition-all duration-75 rounded-full"
                style={{ width: '0%' }}
              />
            </div>
            <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-2">
              <span>Scroll to navigate systems</span>
              <span>6 Engineering Pillars</span>
            </div>
          </div>
        </div>

        {/* Horizontal Track (pinned on desktop; stacks vertically on mobile/tablet) */}
        <div className="w-full overflow-hidden px-4 sm:px-6 lg:px-8">
          <div
            ref={trackRef}
            className="flex flex-col lg:flex-row gap-6 sm:gap-8 w-full lg:w-max py-4"
          >
            {cards.map((card, idx) => {
              const isAccent = card.isTealAccent;

              return (
                <div
                  key={card.number}
                  className={`w-full lg:w-[440px] flex-shrink-0 rounded-34 p-8 sm:p-10 border transition-all duration-300 flex flex-col justify-between ${
                    isAccent
                      ? 'bg-gradient-to-br from-teal to-[#0C6D6F] text-white border-teal-bright/40 shadow-glow-teal'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-teal/50 text-white backdrop-blur-md'
                  }`}
                >
                  <div>
                    {/* Top Row: Icon + Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-14 h-14 rounded-24 flex items-center justify-center ${
                          isAccent
                            ? 'bg-white/20 text-white'
                            : 'bg-teal/20 text-teal-bright border border-teal/40'
                        }`}
                      >
                        {icons[idx] || <Cpu className="w-6 h-6" />}
                      </div>
                      <span className="text-2xl font-mono font-extrabold opacity-60">
                        {card.number}
                      </span>
                    </div>

                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-teal-bright mb-1">
                      {card.category}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                      {card.title}
                    </h3>

                    <p className="mt-4 text-sm text-slate-200/90 leading-relaxed">
                      {card.description}
                    </p>

                    <ul className="mt-6 space-y-2.5">
                      {card.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-100/90">
                          <CheckCircle2
                            className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                              isAccent ? 'text-white' : 'text-teal-bright'
                            }`}
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-300">
                      HL7 · FHIR · Cloud
                    </span>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-bright hover:text-white transition-colors"
                    >
                      <span>Engineering consult</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="mt-6 text-center lg:hidden">
          <span className="text-xs font-mono text-slate-400">
            6 Specialized Healthcare Systems
          </span>
        </div>

      </div>
    </section>
  );
};

