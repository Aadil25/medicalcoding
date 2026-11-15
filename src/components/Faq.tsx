import React, { useState } from 'react';
import { SITE_CONTENT, FaqItem } from '../content/site-content';
import { Plus, HelpCircle } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = SITE_CONTENT.faq;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-paper py-24 sm:py-32 border-b border-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mist text-teal text-xs font-mono font-bold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>TRANSPARENT ANSWERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight tracking-tight text-balance">
            Frequently asked{' '}
            <span className="font-serif italic font-normal text-teal">
              questions.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted max-w-xl mx-auto leading-relaxed">
            Direct information regarding HIPAA compliance, our human-in-the-loop AI philosophy, and onboarding timelines.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-28 bg-white border border-line shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-28"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="text-base sm:text-lg font-bold text-navy pr-2">
                    {faq.question}
                  </span>

                  {/* Rotating "+" in a mist circle */}
                  <div
                    className={`w-9 h-9 rounded-full bg-mist flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-teal text-white' : 'text-teal'
                    }`}
                  >
                    <Plus className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm sm:text-base text-muted leading-relaxed border-t border-line/40 pt-4"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Prompt to ask custom questions */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted">
            Have a specialized requirement or custom EHR workflow?{' '}
            <a href="#contact" className="text-teal font-semibold underline underline-offset-4 hover:text-navy">
              Speak with our healthcare solutions team →
            </a>
          </p>
        </div>

      </div>
    </section>
  );
};

