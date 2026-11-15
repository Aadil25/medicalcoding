import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  const isDarkBg = variant === 'light'; // variant 'light' means light text on dark background
  const navyColor = isDarkBg ? '#FFFFFF' : '#0A2D4D';
  const subColor = isDarkBg ? '#1BB3B0' : '#0F8B8D';
  const taglineColor = isDarkBg ? '#E7F4F4' : '#5A6B7B';

  const markHeight = size === 'sm' ? 32 : size === 'lg' ? 48 : 40;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* CC1 Emblem Mark */}
      <svg
        height={markHeight}
        viewBox="0 0 68 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
        aria-label="Crystal Clear One Logo Mark"
      >
        <defs>
          <linearGradient id="swooshGrad" x1="4" y1="48" x2="64" y2="28" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0F8B8D" />
            <stop offset="0.6" stopColor="#1BB3B0" />
            <stop offset="1" stopColor="#38E8E4" />
          </linearGradient>
          <linearGradient id="cGrad" x1="6" y1="10" x2="38" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor={isDarkBg ? '#FFFFFF' : '#0A2D4D'} />
            <stop offset="1" stopColor={isDarkBg ? '#CBD5E1' : '#143C63'} />
          </linearGradient>
        </defs>

        {/* Outer C shape */}
        <path
          d="M24 10C14.0589 10 6 18.0589 6 28C6 37.9411 14.0589 46 24 46H27C29.2091 46 31 44.2091 31 42C31 39.7909 29.2091 38 27 38H24C18.4772 38 14 33.5228 14 28C14 22.4772 18.4772 18 24 18H27C29.2091 18 31 16.2091 31 14C31 11.7909 29.2091 10 27 10H24Z"
          fill="url(#cGrad)"
        />

        {/* Inner C accent shape */}
        <path
          d="M36 12C28.268 12 22 18.268 22 26C22 33.732 28.268 40 36 40H38C40.2091 40 42 38.2091 42 36C42 33.7909 40.2091 32 38 32H36C32.6863 32 30 29.3137 30 26C30 22.6863 32.6863 20 36 20H38C40.2091 20 42 18.2091 42 16C42 13.7909 40.2091 12 38 12H36Z"
          fill="#1BB3B0"
          opacity="0.85"
        />

        {/* The "1" numeral */}
        <path
          d="M48 10H54V42H48V10Z"
          fill="#0F8B8D"
        />
        <path
          d="M42 18L49 10H54V18H42Z"
          fill="#1BB3B0"
        />
        <rect x="44" y="40" width="14" height="4" rx="2" fill="#0F8B8D" />

        {/* Dynamic Teal Swoosh Wave at the base */}
        <path
          d="M4 47C18 39 38 41 64 34C54 44 28 50 4 47Z"
          fill="url(#swooshGrad)"
        />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col justify-center leading-none">
        <div
          className="font-extrabold tracking-wider text-sm sm:text-base tracking-[0.16em] uppercase"
          style={{ color: navyColor }}
        >
          CRYSTAL CLEAR
        </div>
        <div
          className="font-bold tracking-[0.28em] text-[10px] sm:text-[11px] mt-0.5"
          style={{ color: subColor }}
        >
          ONE.NET LLC
        </div>
        {showTagline && (
          <div
            className="font-serif italic text-xs tracking-normal mt-1 opacity-90 hidden sm:block"
            style={{ color: taglineColor }}
          >
            Clarity. Innovation. Excellence.
          </div>
        )}
      </div>
    </div>
  );
};

