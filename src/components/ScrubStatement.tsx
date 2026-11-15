import React, { useEffect, useRef } from 'react';
import { SITE_CONTENT } from '../content/site-content';
import { gsap, ScrollTrigger } from '../animations/gsap-setup';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const ScrubStatement: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { words, highlightIndices, signature } = SITE_CONTENT.scrubStatement;

  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;

    const el = textRef.current;
    if (!el) return;

    const wordSpans = el.querySelectorAll('.scrub-word');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordSpans,
        {
          opacity: 0.16,
          y: 4,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.04,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            end: 'bottom 40%',
            scrub: 0.6,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="bg-paper py-24 sm:py-32 border-b border-line overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mist text-teal text-xs font-mono font-semibold uppercase tracking-widest mb-8">
          <span>Our Clinical & RCM Ethos</span>
        </div>

        {/* Word by word scrub headline */}
        <div
          ref={textRef}
          className="text-[1.85rem] sm:text-[2.6rem] md:text-[3.1rem] lg:text-[3.3rem] font-bold text-navy leading-[1.28] tracking-[-0.025em] text-balance max-w-4xl mx-auto"
        >
          {words.map((word, i) => {
            const isHighlight = highlightIndices.includes(i);
            return (
              <span
                key={i}
                className={`scrub-word inline-block mr-[0.3em] transition-colors duration-200 ${
                  isHighlight ? 'text-teal font-extrabold' : 'text-navy'
                } ${prefersReducedMotion ? 'opacity-100' : 'opacity-15'}`}
              >
                {word}
              </span>
            );
          })}
        </div>

        {/* Signature Line */}
        <div className="mt-12 pt-8 border-t border-line/70 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="w-8 h-[2px] bg-teal hidden sm:block" />
          <p className="font-serif italic text-base sm:text-lg text-muted">
            {signature}
          </p>
          <div className="w-8 h-[2px] bg-teal hidden sm:block" />
        </div>
      </div>
    </section>
  );
};

