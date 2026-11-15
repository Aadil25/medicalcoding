import React from 'react';
import { SITE_CONTENT, ServiceItem } from '../content/site-content';
import { EncounterVisual } from './ServiceVisuals/EncounterVisual';
import { BillingLifecycleVisual } from './ServiceVisuals/BillingLifecycleVisual';
import { DenialTriageVisual } from './ServiceVisuals/DenialTriageVisual';
import { ArAgingVisual } from './ServiceVisuals/ArAgingVisual';
import { AuditScorecardVisual } from './ServiceVisuals/AuditScorecardVisual';
import { RcmKpiVisual } from './ServiceVisuals/RcmKpiVisual';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const renderVisual = (type: ServiceItem['visualType'], isDark: boolean) => {
  switch (type) {
    case 'coding':
      return <EncounterVisual isDark={isDark} />;
    case 'billing':
      return <BillingLifecycleVisual isDark={isDark} />;
    case 'denial':
      return <DenialTriageVisual isDark={isDark} />;
    case 'ar':
      return <ArAgingVisual isDark={isDark} />;
    case 'audit':
      return <AuditScorecardVisual isDark={isDark} />;
    case 'rcm':
      return <RcmKpiVisual isDark={isDark} />;
    default:
      return null;
  }
};

export const ServiceStack: React.FC = () => {
  const services = SITE_CONTENT.services;

  return (
    <section id="services" className="bg-paper py-24 sm:py-32 border-b border-line relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-teal" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-teal">
              OUR PRACTICE CAPABILITIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold text-navy leading-[1.18] tracking-[-0.025em] text-balance">
            End-to-end revenue cycle support,{' '}
            <span className="font-serif italic font-normal text-teal">
              built around your practice.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted max-w-2xl leading-relaxed">
            From chart intake to cash posting, we combine AAPC/AHIMA certified specialists with intelligent technology to eliminate revenue leakage and accelerate cash flow.
          </p>
        </div>

        {/* Stacking Cards Container */}
        <div className="relative flex flex-col gap-8 md:gap-12">
          {services.map((svc, index) => {
            const isDark = svc.isDark ?? false;
            // Desktop sticky offset: 90px + index * 20px
            const topOffset = 90 + index * 22;

            return (
              <div
                key={svc.id}
                className="w-full md:sticky transition-transform duration-300"
                style={{ top: `${topOffset}px` }}
              >
                <div
                  className={`rounded-34 p-7 sm:p-10 lg:p-12 border transition-all duration-300 ${
                    isDark
                      ? 'bg-navy text-white border-white/10 shadow-card-dark'
                      : 'bg-white text-navy border-line shadow-card'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left Column: Service Details */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                      <div>
                        {/* Number Eyebrow */}
                        <div className="flex items-center gap-3 mb-4">
                          <span
                            className={`text-sm font-mono font-extrabold px-3 py-1 rounded-full ${
                              isDark ? 'bg-teal text-white' : 'bg-mist text-teal'
                            }`}
                          >
                            SERVICE {svc.number}
                          </span>
                          <span className="text-xs font-mono text-muted tracking-wide">
                            Sample Operational Model
                          </span>
                        </div>

                        {/* Title */}
                        <h3
                          className={`text-2xl sm:text-3xl font-extrabold leading-tight tracking-tight ${
                            isDark ? 'text-white' : 'text-navy'
                          }`}
                        >
                          {svc.title}
                        </h3>

                        {/* Description */}
                        <p
                          className={`mt-4 text-sm sm:text-base leading-relaxed ${
                            isDark ? 'text-slate-300' : 'text-muted'
                          }`}
                        >
                          {svc.description}
                        </p>

                        {/* Bullets */}
                        <ul className="mt-6 space-y-3">
                          {svc.bullets.map((b, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-3">
                              <CheckCircle2
                                className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                  isDark ? 'text-teal-bright' : 'text-teal'
                                }`}
                              />
                              <span
                                className={`text-sm leading-relaxed ${
                                  isDark ? 'text-slate-200' : 'text-text'
                                }`}
                              >
                                {b}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Chips */}
                        <div className="mt-6 flex flex-wrap gap-2">
                          {svc.chips.map((chip) => (
                            <span
                              key={chip}
                              className={`text-xs font-mono px-3 py-1 rounded-full border ${
                                isDark
                                  ? 'bg-white/5 border-white/15 text-teal-bright'
                                  : 'bg-paper border-line text-muted'
                              }`}
                            >
                              {chip}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Card CTA Link */}
                      <div className="mt-8 pt-6 border-t border-line/20 flex items-center justify-between">
                        <a
                          href="#contact"
                          className={`inline-flex items-center gap-2 text-sm font-bold group ${
                            isDark ? 'text-teal-bright hover:text-white' : 'text-teal hover:text-navy'
                          } transition-colors`}
                        >
                          <span>Request workflow details</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        <span className="text-[11px] font-mono text-muted">
                          Sample data shown
                        </span>
                      </div>
                    </div>

                    {/* Right Column: Realistic Mini UI */}
                    <div className="lg:col-span-6">
                      <div className="relative">
                        {renderVisual(svc.visualType, isDark)}
                        <div className="mt-2 text-right">
                          <span className="text-[10px] font-mono text-muted/70">
                            Illustrative component with sample data
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

