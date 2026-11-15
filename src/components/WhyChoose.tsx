import React from 'react';
import { SITE_CONTENT, WhyChooseItem } from '../content/site-content';
import { Headphones, ShieldCheck, Cpu, Lock, BarChart3, ArrowRight } from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  Headphones: <Headphones className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Lock: <Lock className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
};

export const WhyChoose: React.FC = () => {
  const cards = SITE_CONTENT.whyChoose;

  return (
    <section id="why" className="bg-paper py-24 sm:py-32 border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mist text-teal text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <span>THE CRYSTAL CLEAR ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight tracking-tight text-balance">
            Why leading US providers{' '}
            <span className="font-serif italic font-normal text-teal">
              partner with us.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Five core pillars that distinguish our revenue cycle partnerships from conventional transactional billing shops.
          </p>
        </div>

        {/* 5 Cards Layout (Top row 3, Bottom row 2 centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.slice(0, 3).map((item, idx) => (
            <WhyCard key={idx} item={item} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {cards.slice(3, 5).map((item, idx) => (
            <WhyCard key={idx + 3} item={item} />
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 rounded-34 bg-gradient-to-r from-navy via-[#0C385D] to-navy text-white text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h4 className="text-xl font-bold">Ready to benchmark your practice?</h4>
            <p className="text-sm text-slate-300 mt-1">
              Claim our complimentary 50-chart coding accuracy audit with full executive debrief.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-teal hover:bg-teal-bright text-white text-sm font-semibold shadow-glow-teal transition-all transform hover:-translate-y-0.5"
          >
            <span>Request Free Audit</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

const WhyCard: React.FC<{ item: WhyChooseItem }> = ({ item }) => {
  return (
    <div className="group p-8 rounded-34 bg-white border border-line hover:border-teal/50 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-24 bg-mist group-hover:bg-teal text-teal group-hover:text-white transition-all duration-300 flex items-center justify-center">
            {icons[item.icon] || <ShieldCheck className="w-6 h-6" />}
          </div>
          <div className="text-right">
            <span className="text-2xl font-extrabold font-mono text-navy block leading-none">
              {item.metric}
            </span>
            <span className="text-[10px] font-mono text-muted uppercase tracking-wider">
              {item.metricLabel}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-navy group-hover:text-teal transition-colors">
          {item.title}
        </h3>

        <p className="mt-3 text-sm text-muted leading-relaxed">
          {item.description}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-line/60 flex items-center text-xs font-mono text-teal font-semibold">
        <span>Verified Standard</span>
      </div>
    </div>
  );
};

