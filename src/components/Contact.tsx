import React, { useState } from 'react';
import { SITE_CONTENT } from '../content/site-content';
import { HeroWaves } from './HeroWaves';
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  Send,
  CheckCircle2,
  ShieldCheck,
} from 'lucide-react';

interface FormState {
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  organization?: string;
  email?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    interest: 'free-audit',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<string | null>(null);

  const { eyebrow, title, titleAccent, lede, direct, interestOptions } = SITE_CONTENT.contact;

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.organization.trim()) {
      errs.organization = 'Please provide your practice, clinic, or hospital name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your work email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid work email format.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    // Client-side demonstration handling:
    setIsSubmitted(true);
    setSubmissionFeedback(
      'Thank you! Your consultation request has been captured locally. (Note: Front-end demo mode: no backend form service or Formspree webhook is wired yet, so no external email was dispatched. Connect your production API to finalize).'
    );
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmissionFeedback(null);
    setFormData({
      fullName: '',
      organization: '',
      email: '',
      phone: '',
      interest: 'free-audit',
      message: '',
    });
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-[#071F37] via-[#0A2D4D] to-[#0A415C] text-white pt-24 sm:pt-32 pb-16 overflow-hidden"
    >
      {/* Decorative radial lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-teal/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Consultation Value */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-teal-bright" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-teal-bright">
                {eyebrow}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-extrabold text-white leading-[1.18] tracking-[-0.025em]">
              {title}{' '}
              <span className="font-serif italic font-normal text-teal-bright">
                {titleAccent}
              </span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-200/90 leading-relaxed">
              {lede}
            </p>

            {/* Direct Contact Details */}
            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-teal-bright flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Phone Direct
                  </div>
                  <div className="text-base font-bold text-white font-mono mt-0.5">
                    {direct.phone}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-teal-bright flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Confidential Inquiries
                  </div>
                  <a
                    href={`mailto:${direct.email}`}
                    className="text-base font-bold text-teal-bright hover:underline font-mono mt-0.5 block"
                  >
                    {direct.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-teal-bright flex-shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Web Domain
                  </div>
                  <div className="text-base font-bold text-white font-mono mt-0.5">
                    {direct.website}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-teal-bright flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    Operational Centers
                  </div>
                  <div className="text-sm font-semibold text-slate-200 mt-0.5">
                    {direct.locations}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 p-5 rounded-28 bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-teal-bright font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Strict HIPAA Confidentiality</span>
              </div>
              <p>
                All inquiries are protected by standard mutual non-disclosure and healthcare confidentiality standards.
              </p>
            </div>
          </div>

          {/* Right Column: White Form Card "Book a consultation" */}
          <div className="lg:col-span-7">
            <div className="rounded-34 bg-white text-navy p-8 sm:p-10 lg:p-12 shadow-2xl border border-line">
              <div className="flex items-center justify-between pb-6 border-b border-line mb-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-navy">Book a Consultation</h3>
                  <p className="text-xs text-muted mt-1">
                    Connect with our certified revenue cycle and medical coding directors
                  </p>
                </div>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-mist text-teal text-xs font-mono font-bold">
                  Complimentary 50 Charts
                </span>
              </div>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-navy">Request Received!</h4>
                  <p className="text-sm text-text max-w-md mx-auto leading-relaxed">
                    {submissionFeedback}
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-navy text-white text-sm font-semibold hover:bg-teal transition-colors"
                  >
                    <span>Submit another inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Full Name & Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Dr. Jordan Hayes"
                        className={`w-full px-4 py-3 rounded-20 bg-paper border text-sm text-navy placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-teal ${
                          errors.fullName ? 'border-rose-500 bg-rose-50' : 'border-line'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-500 mt-1 font-mono">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text mb-1.5">
                        Organization / Practice *
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Metro Regional Health Clinic"
                        className={`w-full px-4 py-3 rounded-20 bg-paper border text-sm text-navy placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-teal ${
                          errors.organization ? 'border-rose-500 bg-rose-50' : 'border-line'
                        }`}
                      />
                      {errors.organization && (
                        <p className="text-xs text-rose-500 mt-1 font-mono">{errors.organization}</p>
                      )}
                    </div>
                  </div>

                  {/* Work Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="j.hayes@metrohealth.org"
                        className={`w-full px-4 py-3 rounded-20 bg-paper border text-sm text-navy placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-teal ${
                          errors.email ? 'border-rose-500 bg-rose-50' : 'border-line'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-500 mt-1 font-mono">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text mb-1.5">
                        Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834"
                        className="w-full px-4 py-3 rounded-20 bg-paper border border-line text-sm text-navy placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-teal"
                      />
                    </div>
                  </div>

                  {/* Interest Dropdown */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text mb-1.5">
                      I'm interested in *
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-20 bg-paper border border-line text-sm text-navy focus:outline-none focus:ring-2 focus:ring-teal font-medium"
                    >
                      {interestOptions.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-text mb-1.5">
                      Practice Needs or Chart Volume Details
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your specialties, current EHR, monthly encounter volume, or denial bottlenecks..."
                      className="w-full px-4 py-3 rounded-20 bg-paper border border-line text-sm text-navy placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-teal resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full group inline-flex items-center justify-center gap-2.5 py-4 rounded-full bg-teal hover:bg-teal-bright text-white font-semibold text-base shadow-glow-teal transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal"
                    >
                      <span>Submit Consultation Request</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-center text-[11px] font-mono text-muted mt-3">
                      Prompt response guaranteed within 24 business hours · 24×7 support
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Swoosh Wave Transition at the bottom of Contact */}
      <HeroWaves fillColor="#FFFFFF" className="mt-8 -mb-1" />
    </section>
  );
};
