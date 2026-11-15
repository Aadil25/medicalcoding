import React from 'react';
import { SITE_CONTENT } from '../content/site-content';

export const CodeMarquee: React.FC = () => {
  const chips = SITE_CONTENT.codeSets;

  return (
    <section className="bg-white py-10 border-b border-line overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-muted">
          Code sets & standards our coders work with every day
        </span>
      </div>

      {/* Marquee with fading edge masks */}
      <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <div className="marquee-track flex gap-4 w-max hover:[animation-play-state:paused]">
          {/* First loop */}
          {chips.map((chip, idx) => (
            <div
              key={`chip-1-${idx}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-paper border border-line hover:border-teal hover:bg-mist text-text text-sm font-mono font-medium whitespace-nowrap shadow-sm transition-all duration-200 cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-teal" />
              <span>{chip}</span>
            </div>
          ))}

          {/* Duplicate loop for seamless infinite marquee */}
          {chips.map((chip, idx) => (
            <div
              key={`chip-2-${idx}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-paper border border-line hover:border-teal hover:bg-mist text-text text-sm font-mono font-medium whitespace-nowrap shadow-sm transition-all duration-200 cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-teal" />
              <span>{chip}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

