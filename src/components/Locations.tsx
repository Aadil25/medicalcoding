import React from 'react';
import { SITE_CONTENT } from '../content/site-content';
import { useClock } from '../hooks/useClock';
import { Clock, Globe2, CheckCircle2, ArrowRight } from 'lucide-react';

const HubCard: React.FC<{
  hub: typeof SITE_CONTENT.locations.hubs[0];
}> = ({ hub }) => {
  const clock = useClock(hub.timezone);

  return (
    <div className="flex-1 rounded-34 p-8 sm:p-10 bg-white/5 border border-white/10 hover:border-teal/50 backdrop-blur-md shadow-2xl flex flex-col justify-between transition-all duration-300">
      <div>
        {/* Country & Status */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <Globe2 className="w-5 h-5 text-teal-bright" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-bright">
              {hub.country}
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono">
            <span
              className={`w-2 h-2 rounded-full ${
                clock.isBusinessHours ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
              }`}
            />
            <span className="text-white">
              {clock.isBusinessHours ? 'Active Shift' : 'Overnight Shift'}
            </span>
          </div>
        </div>

        {/* Live Clock Display */}
        <div className="p-5 rounded-24 bg-navy-deep/80 border border-teal/30 mb-6">
          <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-1">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-teal-bright" />
              <span>Local Station Time</span>
            </span>
            <span className="text-teal-bright font-bold">{clock.dateStr}</span>
          </div>

          <div className="text-3xl sm:text-4xl font-black font-mono text-white tracking-tight flex items-baseline gap-2">
            <span>{clock.timeStr}</span>
            <span className="text-base sm:text-lg text-teal-bright font-normal font-sans">
              {clock.ampm}
            </span>
          </div>
          <div className="text-[11px] font-mono text-slate-400 mt-1">
            {hub.city} ({hub.timezone})
          </div>
        </div>

        {/* Hub Role & Description */}
        <h3 className="text-xl font-bold text-white mb-2">
          {hub.role}
        </h3>

        {/* Operational Focus Areas */}
        <ul className="mt-5 space-y-2.5">
          {hub.focus.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-teal-bright flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
        <span>Integrated Pod Architecture</span>
        <span className="text-teal-bright font-semibold">Continuous Coverage</span>
      </div>
    </div>
  );
};

export const Locations: React.FC = () => {
  const { eyebrow, title, titleAccent, lede, hubs } = SITE_CONTENT.locations;

  return (
    <section className="bg-navy-deep text-white py-24 sm:py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-teal/40 text-teal-bright text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight text-balance">
            {title}{' '}
            <span className="font-serif italic font-normal text-teal-bright">
              {titleAccent}
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {lede}
          </p>
        </div>

        {/* Two Hub Cards with Animated Joining Dashed Curve */}
        <div className="relative flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">
          
          {/* Animated Connecting SVG Arc (Desktop) */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-24 hidden lg:block pointer-events-none z-20"
            aria-hidden="true"
          >
            <svg viewBox="0 0 192 96" fill="none" className="w-full h-full">
              <path
                d="M10 48 Q96 10 182 48"
                stroke="#1BB3B0"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="animate-pulse"
              />
              <circle cx="10" cy="48" r="4" fill="#0A2D4D" stroke="#1BB3B0" strokeWidth="2" />
              <circle cx="182" cy="48" r="4" fill="#0A2D4D" stroke="#1BB3B0" strokeWidth="2" />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-navy border border-teal/40 text-[10px] font-mono text-teal-bright shadow-lg whitespace-nowrap">
              24/7 Handshake
            </div>
          </div>

          {/* Hub 1: United States */}
          <HubCard hub={hubs[0]} />

          {/* Hub 2: India */}
          <HubCard hub={hubs[1]} />

        </div>

      </div>
    </section>
  );
};

