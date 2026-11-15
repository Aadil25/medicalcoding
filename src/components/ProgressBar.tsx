import React, { useEffect, useState } from 'react';

export const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const scrollPct = (totalScroll / windowHeight) * 100;
        setProgress(Math.min(100, Math.max(0, scrollPct)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[999] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-navy via-teal to-teal-bright transition-all duration-75 ease-out shadow-[0_0_8px_rgba(27,179,176,0.6)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

