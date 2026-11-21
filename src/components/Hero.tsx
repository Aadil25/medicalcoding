import React, { useEffect, useRef } from 'react';
import { ParticleCanvas } from './ParticleCanvas';
import { HeroWaves } from './HeroWaves';
import { MaleDoctorPortrait, FemaleDoctorPortrait } from './DoctorPortraits';
import { SITE_CONTENT } from '../content/site-content';
import { gsap } from '../animations/gsap-setup';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { ArrowRight, CheckCircle2, ShieldCheck, Activity, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const leftColRef = useRef<HTMLDivElement | null>(null);
  const rightColRef = useRef<HTMLDivElement | null>(null);
  const archPhotoRef = useRef<HTMLDivElement | null>(null);
  const roundPhotoRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  // 4 floating glass card refs
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);
  const card4Ref = useRef<HTMLDivElement | null>(null);

  const prefersReducedMotion = useReducedMotion();

  // Mouse smoothing parallax
  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    const hero = heroRef.current;
    if (!hero) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x;
      mouseY = y;
    };

    const updateMouseParallax = () => {
      // Lerp smoothing
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (archPhotoRef.current) {
        archPhotoRef.current.style.transform = `translate3d(${currentX * 18}px, ${currentY * 18}px, 0)`;
      }
      if (roundPhotoRef.current) {
        roundPhotoRef.current.style.transform = `translate3d(${currentX * -24}px, ${currentY * -24}px, 0)`;
      }
      if (card1Ref.current) {
        card1Ref.current.style.transform = `translate3d(${currentX * 26}px, ${currentY * 26}px, 0)`;
      }
      if (card2Ref.current) {
        card2Ref.current.style.transform = `translate3d(${currentX * -30}px, ${currentY * -25}px, 0)`;
      }
      if (card3Ref.current) {
        card3Ref.current.style.transform = `translate3d(${currentX * 32}px, ${currentY * -20}px, 0)`;
      }
      if (card4Ref.current) {
        card4Ref.current.style.transform = `translate3d(${currentX * -22}px, ${currentY * 28}px, 0)`;
      }

      rafId = requestAnimationFrame(updateMouseParallax);
    };

    hero.addEventListener('mousemove', handleMouseMove);
    rafId = requestAnimationFrame(updateMouseParallax);

    // Scroll parallax with GSAP ScrollTrigger
    const ctx = gsap.context(() => {
      // Left text column slight counter-parallax
      gsap.to(leftColRef.current, {
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Arch photo parallax speed
      gsap.to(archPhotoRef.current, {
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Round photo parallax speed
      gsap.to(roundPhotoRef.current, {
        y: 80,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Glass cards differential speeds
      gsap.to(card1Ref.current, {
        y: -90,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(card2Ref.current, {
        y: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(card3Ref.current, {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to(card4Ref.current, {
        y: 75,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Waves parallax speeds
      gsap.to('.hero-wave-back', {
        x: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to('.hero-wave-mid', {
        x: 35,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      gsap.to('.hero-wave-front', {
        x: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, hero);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
      ctx.revert();
    };
  }, [prefersReducedMotion]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[96vh] lg:min-h-screen bg-gradient-to-b from-[#071F37] via-[#0A2D4D] to-[#0B3A5C] text-white pt-28 sm:pt-36 pb-12 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Teal Radial Glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal/20 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-10 w-[450px] h-[450px] bg-teal-bright/15 rounded-full blur-[110px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Particle Network Canvas */}
      <ParticleCanvas />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial & Value Proposition */}
          <div ref={leftColRef} className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-3.5 mb-5">
              <span className="w-[34px] h-[2px] bg-gradient-to-r from-teal-bright to-teal" />
              <span className="text-[11px] sm:text-[12.5px] font-bold uppercase tracking-[0.18em] text-teal-bright">
                {SITE_CONTENT.hero.eyebrow}
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.035em] leading-[1.12] text-white">
              {SITE_CONTENT.hero.titleMain}{' '}
              <span className="font-serif italic font-normal text-teal-bright tracking-normal block sm:inline">
                {SITE_CONTENT.hero.titleAccent}
              </span>
            </h1>

            {/* Lede Body */}
            <p className="mt-6 text-base sm:text-lg text-slate-200/90 leading-[1.7] max-w-[620px] font-normal">
              {SITE_CONTENT.hero.lede}
            </p>

            {/* CTA Action Row */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-teal hover:bg-teal-bright text-white text-base font-semibold shadow-glow-teal transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>{SITE_CONTENT.hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-line/40 hover:border-teal-bright/80 bg-white/5 hover:bg-white/10 text-white text-base font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                <span>{SITE_CONTENT.hero.ctaSecondary}</span>
              </a>
            </div>

            {/* Trust Row: 98.5% coding accuracy · 24×7 support */}
            <div className="mt-10 pt-7 border-t border-white/10 flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal/20 border border-teal text-xs font-mono font-bold text-white shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-bright" />
                  <span>{SITE_CONTENT.hero.trustMetric}</span>
                </div>
                {SITE_CONTENT.hero.badges.slice(2).map((badge) => (
                  <div
                    key={badge}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-navy-deep/80 border border-teal/40 text-[11px] sm:text-xs font-mono font-medium text-teal-bright"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-teal" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-300/80 font-medium">
                {SITE_CONTENT.hero.trustNote}
              </p>
            </div>
          </div>

          {/* Right Column: Layered Collage with 4 Glass Floating Cards */}
          <div ref={rightColRef} className="lg:col-span-5 relative flex items-center justify-center min-h-[440px] sm:min-h-[520px]">
            {/* Slowly Rotating Dashed Ring Background */}
            <div
              ref={ringRef}
              className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full border border-dashed border-teal/30 animate-spin-slow pointer-events-none"
              aria-hidden="true"
            />

            {/* Large Arch-Shaped Male Doctor Portrait */}
            <div
              ref={archPhotoRef}
              className="relative w-[240px] sm:w-[280px] h-[340px] sm:h-[400px] rounded-t-[140px] rounded-b-28 overflow-hidden shadow-2xl border-2 border-white/20 bg-navy/80 z-10 transition-transform duration-100 ease-out"
            >
              <MaleDoctorPortrait className="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-teal-bright flex items-center justify-between">
                <span>DR. M. AUSTIN, MD</span>
                <span className="w-2 h-2 rounded-full bg-teal-bright animate-ping" />
              </div>
            </div>

            {/* Overlapping Round Female Doctor Portrait */}
            <div
              ref={roundPhotoRef}
              className="absolute bottom-6 right-2 sm:right-6 w-[140px] sm:w-[175px] h-[140px] sm:h-[175px] rounded-full overflow-hidden shadow-2xl border-4 border-white/30 bg-navy-deep z-20 transition-transform duration-100 ease-out"
            >
              <FemaleDoctorPortrait className="w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Glass Card 1: ICD-10-CM Validation */}
            <div
              ref={card1Ref}
              className="absolute -top-4 -left-4 sm:left-0 z-30 bg-white/10 backdrop-blur-md border border-white/25 rounded-20 px-4 py-3 shadow-navy-soft flex items-center gap-3 transition-transform duration-100 ease-out"
            >
              <div className="w-9 h-9 rounded-xl bg-teal/30 flex items-center justify-center text-teal-bright border border-teal/40">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-teal-bright">
                  ICD-10-CM Validated
                </div>
                <div className="text-xs font-mono font-bold text-white">
                  E11.22 · N18.31
                </div>
              </div>
            </div>

            {/* Floating Glass Card 2: Clean Claim Status (White card) */}
            <div
              ref={card2Ref}
              className="absolute top-24 -right-4 sm:right-0 z-30 bg-white rounded-20 px-4 py-2.5 shadow-2xl border border-line flex items-center gap-2.5 transition-transform duration-100 ease-out"
            >
              <CheckCircle2 className="w-5 h-5 text-teal" />
              <div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-muted">
                  Claim Status
                </div>
                <div className="text-xs font-bold text-navy flex items-center gap-1">
                  <span>Clean Claim 98.2%</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono">
                    Pass
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Glass Card 3: Two-Level QA Gate */}
            <div
              ref={card3Ref}
              className="absolute bottom-10 -left-6 sm:left-2 z-30 bg-navy-deep/90 backdrop-blur-md border border-teal/30 rounded-20 px-4 py-3 shadow-navy-soft transition-transform duration-100 ease-out"
            >
              <div className="flex items-center justify-between gap-3 mb-1">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-teal-bright">
                  <Activity className="w-3.5 h-3.5 animate-pulse text-teal-bright" />
                  <span>Two-Level QA Gate</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              <div className="w-36 h-6 overflow-hidden">
                <svg viewBox="0 0 144 24" className="w-full h-full" fill="none">
                  <path
                    d="M0 12 L30 12 L36 4 L42 20 L48 10 L52 14 L56 12 L80 12 L86 2 L92 22 L98 8 L104 16 L108 12 L144 12"
                    stroke="#1BB3B0"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ecg-pulse-line"
                  />
                </svg>
              </div>
              <div className="text-[9px] font-mono text-slate-300 mt-1">
                Dual-Pass Verification · 98.5% Gate
              </div>
            </div>

            {/* Floating Glass Card 4: Turnaround < 24 Hours */}
            <div
              ref={card4Ref}
              className="absolute -bottom-4 right-12 z-30 bg-white/95 rounded-20 px-4 py-2.5 shadow-2xl border border-line flex items-center gap-2.5 transition-transform duration-100 ease-out"
            >
              <div className="w-8 h-8 rounded-full bg-mist flex items-center justify-center text-teal">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-muted">
                  Turnaround
                </div>
                <div className="text-xs font-mono font-bold text-navy">
                  &lt; 24 Hours SLA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Layered Parallax Waves Transition at bottom */}
      <HeroWaves fillColor="#FFFFFF" className="mt-8 -mb-1" />
    </section>
  );
};
