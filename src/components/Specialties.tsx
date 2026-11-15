import React, { useEffect, useRef } from 'react';
import { SITE_CONTENT } from '../content/site-content';
import { gsap, ScrollTrigger } from '../animations/gsap-setup';
import { useReducedMotion } from '../hooks/useReducedMotion';
import {
  Activity,
  Bone,
  ShieldAlert,
  Siren,
  Scan,
  HeartPulse,
  Stethoscope,
  Scissors,
  ArrowRight,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Activity: <Activity className="w-6 h-6" />,
  Bone: <Bone className="w-6 h-6" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6" />,
  Siren: <Siren className="w-6 h-6" />,
  Scan: <Scan className="w-6 h-6" />,
  HeartPulse: <HeartPulse className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  Scissors: <Scissors className="w-6 h-6" />,
};

export const Specialties: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const row1Ref = useRef<HTMLDivElement | null>(null);
  const row2Ref = useRef<HTMLDivElement | null>(null);
  const row3Ref = useRef<HTMLDivElement | null>(null);

  const prefersReducedMotion = useReducedMotion();
  const { specialtiesTicker, specialties } = SITE_CONTENT;

  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Row 1 moves left
      gsap.to(row1Ref.current, {
        x: -120,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      // Row 2 moves right
      gsap.to(row2Ref.current, {
        x: 120,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });

      // Row 3 moves left
      gsap.to(row3Ref.current, {
        x: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      id="specialties"
      ref={sectionRef}
      className="bg-navy-deep text-white py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background Giant Outlined Text Tickers (Scrubbed in alternating directions) */}
      <div className="absolute inset-0 flex flex-col justify-around pointer-events-none opacity-[0.07] select-none overflow-hidden">
        <div
          ref={row1Ref}
          className="whitespace-nowrap text-6xl sm:text-7xl lg:text-8xl font-black font-sans tracking-widest uppercase text-transparent stroke-text"
          style={{ WebkitTextStroke: '1.5px #1BB3B0' }}
        >
          {specialtiesTicker[0].join(' · ')} · {specialtiesTicker[0].join(' · ')}
        </div>
        <div
          ref={row2Ref}
          className="whitespace-nowrap text-6xl sm:text-7xl lg:text-8xl font-black font-sans tracking-widest uppercase text-transparent stroke-text"
          style={{ WebkitTextStroke: '1.5px #E7F4F4' }}
        >
          {specialtiesTicker[1].join(' · ')} · {specialtiesTicker[1].join(' · ')}
        </div>
        <div
          ref={row3Ref}
          className="whitespace-nowrap text-6xl sm:text-7xl lg:text-8xl font-black font-sans tracking-widest uppercase text-transparent stroke-text"
          style={{ WebkitTextStroke: '1.5px #1BB3B0' }}
        >
          {specialtiesTicker[2].join(' · ')} · {specialtiesTicker[2].join(' · ')}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-teal/40 text-teal-bright text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <span>Specialty-Matched Coders</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight text-balance">
            Coders matched to your specialty,{' '}
            <span className="font-serif italic font-normal text-teal-bright">
              not just your volume.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Coding cardiology, orthopedics, or oncology requires deep sub-specialty understanding. We assign coders credentialed in your specific clinical domain.
          </p>
        </div>

        {/* 8 Specialty Tiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((spec) => (
            <div
              key={spec.id}
              className="group p-6 sm:p-7 rounded-28 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-teal/50 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-glow-teal flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-20 bg-teal/20 group-hover:bg-teal border border-teal/30 group-hover:border-teal flex items-center justify-center text-teal-bright group-hover:text-white transition-all duration-300 mb-5">
                  {iconMap[spec.icon] || <Activity className="w-6 h-6" />}
                </div>

                <div className="text-[11px] font-mono text-teal-bright uppercase tracking-wider mb-1">
                  {spec.code}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-teal-bright transition-colors">
                  {spec.name}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {spec.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-teal-bright transition-colors">
                <span>Certified Pods</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Specialty Note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-400">
            Do not see your clinical sub-specialty? We support 30+ domains including Pathology, Pulmonology, and Pediatrics.{' '}
            <a href="#contact" className="text-teal-bright underline underline-offset-4 hover:text-white font-semibold">
              Inquire about your specialty →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

