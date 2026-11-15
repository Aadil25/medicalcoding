import React from 'react';

interface HeroWavesProps {
  fillColor?: string; // target background color to blend into (e.g. #F6F9FB or #FFFFFF)
  className?: string;
}

export const HeroWaves: React.FC<HeroWavesProps> = ({
  fillColor = '#F6F9FB',
  className = '',
}) => {
  return (
    <div className={`relative w-full overflow-hidden leading-none ${className}`} aria-hidden="true">
      <svg
        className="relative block w-full h-16 sm:h-24 md:h-32 lg:h-40"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveTealGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0F8B8D" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#1BB3B0" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#38E8E4" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="waveSoftTeal" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0F8B8D" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#1BB3B0" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* Layer 1: Back Wave (Teal 35% opacity) */}
        <path
          className="hero-wave-back"
          d="M0,80 C320,160 520,30 840,110 C1120,180 1320,80 1440,100 L1440,220 L0,220 Z"
          fill="url(#waveSoftTeal)"
        />

        {/* Layer 2: Middle Wave (Teal to Bright Teal Gradient) */}
        <path
          className="hero-wave-mid"
          d="M0,130 C360,60 620,190 980,120 C1240,70 1380,150 1440,140 L1440,220 L0,220 Z"
          fill="url(#waveTealGrad)"
          opacity="0.75"
        />

        {/* Layer 3: Foreground Wave (Seamless transition to target section background) */}
        <path
          className="hero-wave-front"
          d="M0,165 C380,120 720,205 1100,150 C1280,125 1380,165 1440,160 L1440,220 L0,220 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

