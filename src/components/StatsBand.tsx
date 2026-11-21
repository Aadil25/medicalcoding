import React, { useState, useEffect, useRef } from 'react';
import { SITE_CONTENT } from '../content/site-content';
import { useCountUp } from '../hooks/useCountUp';

const StatCard: React.FC<{
  target: number;
  decimals?: number;
  suffix: string;
  label: string;
  note: string;
  startTrigger: boolean;
}> = ({ target, decimals = 0, suffix, label, note, startTrigger }) => {
  const countStr = useCountUp(target, 1600, startTrigger, decimals);

  return (
    <div className="flex flex-col items-center text-center p-6 sm:p-8">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-mono text-white tracking-tight flex items-baseline justify-center">
        <span>{countStr}</span>
        <span className="text-teal-bright text-3xl sm:text-4xl ml-0.5">{suffix}</span>
      </div>
      <div className="mt-2 text-base sm:text-lg font-bold text-white tracking-tight">
        {label}
      </div>
      <div className="mt-1 text-xs sm:text-sm text-slate-300/80 font-normal max-w-[220px]">
        {note}
      </div>
    </div>
  );
};

export const StatsBand: React.FC = () => {
  const [inView, setInView] = useState(false);
  const bandRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = bandRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={bandRef}
      className="relative bg-gradient-to-r from-navy-deep via-navy to-[#0A415C] text-white py-16 sm:py-20 overflow-hidden"
    >
      {/* Decorative Parallax Swoosh Curve Stroke */}
      <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
        <svg viewBox="0 0 1440 240" fill="none" className="w-full h-full object-cover">
          <path
            d="M-40,160 C320,60 720,240 1140,80 C1320,20 1480,120 1520,140"
            stroke="#1BB3B0"
            strokeWidth="3.5"
            strokeDasharray="8 8"
          />
          <path
            d="M-20,200 C360,90 760,260 1180,110 C1360,50 1500,160 1540,180"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeOpacity="0.4"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
          {SITE_CONTENT.stats.map((item, idx) => (
            <StatCard
              key={idx}
              target={item.value}
              decimals={item.decimals}
              suffix={item.suffix}
              label={item.label}
              note={item.note}
              startTrigger={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
