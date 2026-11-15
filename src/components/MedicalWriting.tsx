import React, { useEffect, useRef } from 'react';
import { SITE_CONTENT } from '../content/site-content';
import { gsap, ScrollTrigger } from '../animations/gsap-setup';
import { useReducedMotion } from '../hooks/useReducedMotion';
import {
  FileText,
  BookOpen,
  MessageSquare,
  HeartHandshake,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

const tileIcons: Record<string, React.ReactNode> = {
  FileText: <FileText className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  MessageSquare: <MessageSquare className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
};

export const MedicalWriting: React.FC = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const paperStackRef = useRef<HTMLDivElement | null>(null);

  const prefersReducedMotion = useReducedMotion();
  const { badge, title, titleAccent, lede, cta, tiles } = SITE_CONTENT.medicalWriting;

  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Paper stack drifts with parallax
      gsap.to(paperStackRef.current, {
        y: -35,
        rotate: 4,
        ease: 'none',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      });
    }, cardRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  const handleEarlyAccessClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Preset dropdown to writing
    window.dispatchEvent(new CustomEvent('preset-contact-interest', { detail: 'writing' }));
  };

  return (
    <section id="writing" className="bg-white py-24 sm:py-32 border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Gradient Card */}
        <div
          ref={cardRef}
          className="rounded-34 bg-gradient-to-br from-white via-mist/50 to-mist p-8 sm:p-12 lg:p-16 border border-line shadow-card relative overflow-hidden"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-teal/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Coming Soon Copy & CTA */}
            <div className="lg:col-span-6">
              {/* Navy Pill with Pulsing Gold Dot */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-navy text-white text-xs font-mono font-bold uppercase tracking-wider mb-6 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse-glow" />
                <span>{badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight tracking-tight">
                {title}{' '}
                <span className="font-serif italic font-normal text-teal">
                  {titleAccent}
                </span>
              </h2>

              <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed">
                {lede}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  onClick={handleEarlyAccessClick}
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-teal hover:bg-teal-bright text-white text-base font-semibold shadow-glow-teal transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span>{cta}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <div className="text-xs font-mono text-muted">
                  Early partners receive priority queue allocations
                </div>
              </div>

              {/* Drifting Paper-Stack Illustration */}
              <div
                ref={paperStackRef}
                className="mt-10 relative w-48 h-28 hidden sm:block pointer-events-none"
              >
                {/* Back page */}
                <div className="absolute top-3 left-4 w-36 h-20 rounded-xl bg-white/70 border border-line shadow-sm -rotate-6" />
                {/* Middle page */}
                <div className="absolute top-1.5 left-2 w-36 h-20 rounded-xl bg-white/90 border border-teal/20 shadow-sm -rotate-2" />
                {/* Front page */}
                <div className="absolute top-0 left-0 w-36 h-20 rounded-xl bg-white border border-teal/40 shadow-md p-3 flex flex-col justify-between">
                  <div className="w-12 h-1.5 rounded bg-teal" />
                  <div className="space-y-1">
                    <div className="w-full h-1 rounded bg-slate-200" />
                    <div className="w-4/5 h-1 rounded bg-slate-200" />
                  </div>
                  <div className="w-8 h-1 rounded bg-teal-bright" />
                </div>
              </div>
            </div>

            {/* Right Column: 2x2 Grid of Dashed Tiles */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {tiles.map((tile) => (
                  <div
                    key={tile.title}
                    className="p-6 rounded-28 bg-white/90 border-2 border-dashed border-teal/35 hover:border-teal hover:bg-white transition-all duration-300 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-mist text-teal flex items-center justify-center mb-4">
                        {tileIcons[tile.icon] || <FileText className="w-5 h-5" />}
                      </div>

                      <h3 className="text-base font-bold text-navy">
                        {tile.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
                        {tile.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-line/60 text-[11px] font-mono text-teal font-semibold">
                      ICH-GCP / ICMJE
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

