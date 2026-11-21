import React from 'react';
import { useLenis } from './hooks/useLenis';
import { ProgressBar } from './components/ProgressBar';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { CodeMarquee } from './components/CodeMarquee';
import { ScrubStatement } from './components/ScrubStatement';
import { StatsBand } from './components/StatsBand';
import { ServiceStack } from './components/ServiceStack';
import { Specialties } from './components/Specialties';
import { Process } from './components/Process';
import { TiltDashboard } from './components/TiltDashboard';
import { CodingDemo } from './components/CodingDemo';
import { Coverage } from './components/Coverage';
import { WhyChoose } from './components/WhyChoose';
import { Compliance } from './components/Compliance';
import { Engagement } from './components/Engagement';
import { Locations } from './components/Locations';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Initialize Lenis smooth scroll linked with GSAP ScrollTrigger
  useLenis();

  return (
    <div className="min-h-screen flex flex-col bg-paper text-text selection:bg-teal selection:text-white">
      {/* 3px Scroll Progress Bar at very top */}
      <ProgressBar />

      {/* Floating Dynamic Navbar */}
      <Nav />

      {/* Main Page Flow */}
      <main id="main-content" className="flex-1">
        {/* 1. Hero: Multi-layer Parallax */}
        <Hero />

        {/* 2. Code-Set Marquee */}
        <CodeMarquee />

        {/* 3. Statement: Word-by-Word Scroll Scrub */}
        <ScrubStatement />

        {/* 4. Stats Band */}
        <StatsBand />

        {/* 5. Services: Sticky Stacking Cards */}
        <ServiceStack />

        {/* 6. Specialties Band */}
        <Specialties />

        {/* 7. Process: Sticky Timeline */}
        <Process />

        {/* 8. Transparent Reporting: 3D Tilting Dashboard */}
        <TiltDashboard />

        {/* 9. Live Coding Demo (Human Coder Work) */}
        <CodingDemo />

        {/* 10. Coding Coverage Across Care Settings: Pinned Horizontal Rail */}
        <Coverage />

        {/* 11. Why Choose Crystal Clear One */}
        <WhyChoose />

        {/* 12. Security & Compliance */}
        <Compliance />

        {/* 13. Engagement Models */}
        <Engagement />

        {/* 14. Two Locations, One Team (US & India Live Clocks) */}
        <Locations />

        {/* 15. FAQ Accordion */}
        <Faq />

        {/* 16. Contact & Consultation Booking Form */}
        <Contact />
      </main>

      {/* 17. Footer */}
      <Footer />
    </div>
  );
};

export default App;
