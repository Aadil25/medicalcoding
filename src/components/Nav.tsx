import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { SITE_CONTENT } from '../content/site-content';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-card border-b border-line py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-lg">
          <Logo variant={scrolled ? 'dark' : 'light'} size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {SITE_CONTENT.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded px-1.5 py-1 ${
                scrolled
                  ? 'text-text hover:text-teal'
                  : 'text-white/90 hover:text-white hover:drop-shadow-[0_0_8px_rgba(27,179,176,0.6)]'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs font-mono font-medium tracking-tight text-teal-bright">
            <span className="w-2 h-2 rounded-full bg-teal-bright animate-pulse" />
            <span className={scrolled ? 'text-muted' : 'text-slate-300'}>BAA & HIPAA Ready</span>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal hover:bg-teal-bright text-white text-sm font-semibold shadow-md hover:shadow-glow-teal transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-teal"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-full bg-teal text-white text-xs font-semibold sm:inline-flex hidden"
          >
            Consultation
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-teal ${
              scrolled
                ? 'text-navy hover:bg-mist'
                : 'text-white hover:bg-white/10'
            }`}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Card */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 max-w-lg mx-auto">
          <div className="bg-white rounded-28 p-6 shadow-2xl border border-line flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-line">
              <span className="text-xs font-mono uppercase tracking-widest text-muted">Navigation Menu</span>
              <div className="flex items-center gap-1.5 text-xs font-mono text-teal">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>HIPAA Verified</span>
              </div>
            </div>

            <nav className="flex flex-col gap-2">
              {SITE_CONTENT.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-xl text-base font-semibold text-text hover:text-teal hover:bg-mist transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-line flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-teal text-white font-semibold text-sm shadow-md"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-center text-xs text-muted">
                Free 50-chart coding accuracy audit available
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

