import React from 'react';
import { Logo } from './Logo';
import { SITE_CONTENT } from '../content/site-content';
import {
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  ArrowUp,
  ShieldCheck,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { disclaimer, links } = SITE_CONTENT.footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, href: '# [[REAL PROFILE URL]]' },
    { name: 'X / Twitter', icon: <Twitter className="w-4 h-4" />, href: '# [[REAL PROFILE URL]]' },
    { name: 'Facebook', icon: <Facebook className="w-4 h-4" />, href: '# [[REAL PROFILE URL]]' },
    { name: 'Instagram', icon: <Instagram className="w-4 h-4" />, href: '# [[REAL PROFILE URL]]' },
    { name: 'YouTube', icon: <Youtube className="w-4 h-4" />, href: '# [[REAL PROFILE URL]]' },
  ];

  const columns = [
    {
      title: 'Practice Services',
      items: [
        { label: 'Medical Coding Services', href: '#services' },
        { label: 'Medical Billing & Charge Capture', href: '#services' },
        { label: 'Denial Management & Appeals', href: '#services' },
        { label: 'Accounts Receivable Cleanup', href: '#services' },
        { label: 'Coding Audits & Provider QA', href: '#services' },
        { label: 'End-to-end RCM', href: '#services' },
      ],
    },
    {
      title: 'EHR systems',
      items: SITE_CONTENT.ehrSystems.map((ehr) => ({
        label: ehr,
        href: '#services',
      })),
    },
    {
      title: 'Company & Practice',
      items: [
        { label: 'Why choose us', href: '#why' },
        { label: '5-Stage Delivery Process', href: '#process' },
        { label: 'Clinical Specialties (30+)', href: '#specialties' },
        { label: 'Coding Coverage', href: '#coverage' },
        { label: 'Security & Compliance', href: '#compliance' },
        { label: 'Complimentary 50-Chart Audit', href: '#contact' },
      ],
    },
  ];

  return (
    <footer className="bg-white text-text border-t border-line pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-line">
          {/* Brand & Socials Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <a href="#" className="inline-block focus:outline-none focus:ring-2 focus:ring-teal rounded-lg">
                <Logo variant="dark" size="lg" showTagline={false} />
              </a>

              <p className="mt-4 font-serif italic text-base text-teal">
                Clarity. Innovation. Excellence.
              </p>

              <p className="mt-3 text-sm text-muted leading-relaxed max-w-sm">
                Empowering US hospitals, clinics, and physician practices with credentialed medical coding, seamless billing velocity, and 98.5% verified accuracy.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mist border border-teal/30 text-xs font-mono text-teal">
                <ShieldCheck className="w-4 h-4" />
                <span>HIPAA Compliant · BAA Ready</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-8">
              <div className="text-xs font-mono uppercase tracking-wider text-muted font-bold mb-3">
                Connect With Us
              </div>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    className="w-9 h-9 rounded-full bg-navy text-white hover:bg-teal transition-colors flex items-center justify-center shadow-sm"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-navy mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-sm text-muted hover:text-teal transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted">
          <p className="text-center md:text-left leading-relaxed max-w-2xl">
            {disclaimer}
          </p>

          <div className="flex items-center gap-6 flex-shrink-0">
            <div className="flex items-center gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-teal transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-paper border border-line hover:border-teal hover:bg-mist text-navy flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-teal"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
