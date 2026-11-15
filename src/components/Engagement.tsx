import React from 'react';
import { SITE_CONTENT, EngagementPlan } from '../content/site-content';
import { Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const Engagement: React.FC = () => {
  const plans = SITE_CONTENT.engagement;

  return (
    <section id="engage" className="bg-paper py-24 sm:py-32 border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mist text-teal text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <span>FLEXIBLE OPERATIONAL PARTNERSHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight tracking-tight text-balance">
            Start small,{' '}
            <span className="font-serif italic font-normal text-teal">
              scale with confidence.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Whether you need on-demand queue clearing or an exclusive remote practice extension, our staffing models flex to your clinical volume without long-term lock-in.
          </p>
        </div>

        {/* 3 Plans Grid (Middle is Navy, Raised, Tagged 'Most chosen') */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`rounded-34 p-8 sm:p-10 border transition-all duration-300 flex flex-col justify-between relative ${
                  isPopular
                    ? 'bg-navy text-white border-teal shadow-2xl lg:-translate-y-4 ring-2 ring-teal/30'
                    : 'bg-white text-navy border-line shadow-card hover:shadow-card-hover'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-teal text-white text-xs font-mono font-bold uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Subtitle */}
                  <div
                    className={`text-xs font-mono font-bold uppercase tracking-wider mb-2 ${
                      isPopular ? 'text-teal-bright' : 'text-teal'
                    }`}
                  >
                    {plan.subtitle}
                  </div>

                  {/* Plan Name */}
                  <h3
                    className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                      isPopular ? 'text-white' : 'text-navy'
                    }`}
                  >
                    {plan.name}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-4 text-sm leading-relaxed ${
                      isPopular ? 'text-slate-200' : 'text-muted'
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Ideal For Box */}
                  <div
                    className={`mt-6 p-3.5 rounded-20 text-xs ${
                      isPopular
                        ? 'bg-white/10 text-slate-200 border border-white/15'
                        : 'bg-mist/70 text-text border border-teal/20'
                    }`}
                  >
                    <span className="font-bold block mb-0.5">Ideal for:</span>
                    <span>{plan.idealFor}</span>
                  </div>

                  {/* Features List */}
                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            isPopular
                              ? 'bg-teal-bright/20 text-teal-bright'
                              : 'bg-teal/15 text-teal'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                        </div>
                        <span
                          className={`text-sm ${
                            isPopular ? 'text-slate-100' : 'text-text'
                          }`}
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-10 pt-6 border-t border-line/20">
                  <a
                    href="#contact"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-md ${
                      isPopular
                        ? 'bg-teal hover:bg-teal-bright text-white shadow-glow-teal'
                        : 'bg-navy hover:bg-teal text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <p
                    className={`text-center text-[11px] font-mono mt-3 ${
                      isPopular ? 'text-slate-400' : 'text-muted'
                    }`}
                  >
                    Custom quotes tailored to specialty & volume
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

