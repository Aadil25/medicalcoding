import React from 'react';

export const MaleDoctorPortrait: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 400 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        aria-label="Male Physician - Clinical Documentation Lead"
      >
        <defs>
          <linearGradient id="bgGradMale" x1="0" y1="0" x2="400" y2="520" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0B3A5C" />
            <stop offset="0.6" stopColor="#0A2D4D" />
            <stop offset="1" stopColor="#061B30" />
          </linearGradient>
          <linearGradient id="coatGrad" x1="120" y1="260" x2="300" y2="520" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8FAFC" />
            <stop offset="0.8" stopColor="#E2E8F0" />
            <stop offset="1" stopColor="#CBD5E1" />
          </linearGradient>
          <linearGradient id="skinGrad" x1="160" y1="90" x2="240" y2="230" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E5B292" />
            <stop offset="0.5" stopColor="#D99B77" />
            <stop offset="1" stopColor="#BA7B56" />
          </linearGradient>
          <linearGradient id="hairGrad" x1="150" y1="50" x2="250" y2="130" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2D3748" />
            <stop offset="1" stopColor="#1A202C" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000000" floodOpacity="0.35" />
          </filter>
        </defs>

        {/* Ambient Backing */}
        <rect width="400" height="520" fill="url(#bgGradMale)" />
        <circle cx="200" cy="180" r="140" fill="#0F8B8D" opacity="0.22" />

        {/* Doctor Figure */}
        <g filter="url(#softGlow)">
          {/* Lab Coat / Shoulders */}
          <path
            d="M60 520C65 410 110 320 160 300L180 340L200 480L220 340L240 300C290 320 335 410 340 520H60Z"
            fill="url(#coatGrad)"
          />
          {/* Inner Navy Scrub Shirt */}
          <path d="M165 305L200 370L235 305L215 270H185L165 305Z" fill="#0A2D4D" />
          <path d="M185 270L200 330L215 270Z" fill="#1BB3B0" opacity="0.4" />

          {/* Neck */}
          <path d="M178 220C178 255 222 255 222 220V195H178V220Z" fill="url(#skinGrad)" />

          {/* Head & Face */}
          <path
            d="M200 78C162 78 152 110 152 150C152 196 172 232 200 232C228 232 248 196 248 150C248 110 238 78 200 78Z"
            fill="url(#skinGrad)"
          />

          {/* Hair & Beard Style */}
          <path
            d="M152 140C150 115 156 80 180 62C204 46 230 52 244 70C252 80 250 108 248 135C242 120 236 100 215 98C190 96 170 110 152 140Z"
            fill="url(#hairGrad)"
          />
          {/* Well-groomed stubble / jawline */}
          <path
            d="M175 190C182 215 218 215 225 190C228 196 226 218 200 224C174 218 172 196 175 190Z"
            fill="#2D3748"
            opacity="0.25"
          />

          {/* Eyes & Eyebrows */}
          <path d="M172 136C176 133 186 133 190 137" stroke="#2D3748" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M210 137C214 133 224 133 228 136" stroke="#2D3748" strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="181" cy="144" rx="4" ry="4.5" fill="#1A202C" />
          <ellipse cx="219" cy="144" rx="4" ry="4.5" fill="#1A202C" />
          <circle cx="182.5" cy="142.5" r="1.5" fill="#FFFFFF" />
          <circle cx="220.5" cy="142.5" r="1.5" fill="#FFFFFF" />

          {/* Nose & Smile */}
          <path d="M200 142V166L196 168H204" stroke="#BA7B56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M188 184C194 192 206 192 212 184" stroke="#8C4A26" strokeWidth="2.5" strokeLinecap="round" />

          {/* Modern Stethoscope */}
          <path
            d="M162 300C155 350 162 430 188 435C200 437 206 420 206 405"
            stroke="#1BB3B0"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M238 300C245 350 236 410 216 415"
            stroke="#1BB3B0"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle cx="206" cy="405" r="12" fill="#0A2D4D" stroke="#1BB3B0" strokeWidth="4" />
          <circle cx="206" cy="405" r="5" fill="#38E8E4" />

          {/* Professional Lapels */}
          <path d="M160 300L185 410L145 440L125 330L160 300Z" fill="#FFFFFF" opacity="0.9" />
          <path d="M240 300L215 410L255 440L275 330L240 300Z" fill="#FFFFFF" opacity="0.9" />

          {/* ID Badge Lanyard */}
          <path d="M152 300L135 390" stroke="#0F8B8D" strokeWidth="2" strokeDasharray="3 3" />
          <rect x="120" y="390" width="30" height="42" rx="4" fill="#FFFFFF" stroke="#0F8B8D" strokeWidth="1.5" />
          <rect x="125" y="396" width="20" height="12" rx="2" fill="#0A2D4D" />
          <line x1="125" y1="414" x2="145" y2="414" stroke="#1BB3B0" strokeWidth="2" />
          <line x1="125" y1="420" x2="139" y2="420" stroke="#94A3B8" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
};

export const FemaleDoctorPortrait: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        aria-label="Female Physician - Quality & Audit Director"
      >
        <defs>
          <linearGradient id="bgGradFem" x1="0" y1="0" x2="320" y2="320" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0F8B8D" />
            <stop offset="0.7" stopColor="#0A2D4D" />
            <stop offset="1" stopColor="#061B30" />
          </linearGradient>
          <linearGradient id="femSkin" x1="120" y1="60" x2="200" y2="180" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FAD4C0" />
            <stop offset="0.6" stopColor="#F3BFA3" />
            <stop offset="1" stopColor="#D99B77" />
          </linearGradient>
          <linearGradient id="femHair" x1="90" y1="40" x2="230" y2="240" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B2616" />
            <stop offset="0.7" stopColor="#241408" />
            <stop offset="1" stopColor="#120904" />
          </linearGradient>
        </defs>

        <rect width="320" height="320" fill="url(#bgGradFem)" />
        <circle cx="160" cy="140" r="110" fill="#1BB3B0" opacity="0.25" />

        {/* Doctor Shoulders & Coat */}
        <path
          d="M40 320C46 240 84 195 125 180L145 220L160 300L175 220L195 180C236 195 274 240 280 320H40Z"
          fill="#F8FAFC"
        />
        {/* Teal Scrub */}
        <path d="M130 185L160 235L190 185L175 160H145L130 185Z" fill="#0F8B8D" />

        {/* Neck */}
        <path d="M144 140C144 168 176 168 176 140V120H144V140Z" fill="url(#femSkin)" />

        {/* Flowing Hair Back */}
        <path
          d="M100 120C100 60 130 35 160 35C190 35 220 60 220 120C224 160 228 200 232 230C215 235 208 200 205 180C190 180 185 220 160 220C135 220 130 180 115 180C112 200 105 235 88 230C92 200 96 160 100 120Z"
          fill="url(#femHair)"
        />

        {/* Face */}
        <path
          d="M160 65C132 65 125 90 125 120C125 155 140 180 160 180C180 180 195 155 195 120C195 90 188 65 160 65Z"
          fill="url(#femSkin)"
        />

        {/* Hair Front Side Bangs */}
        <path
          d="M125 105C125 75 140 50 160 50C178 50 195 72 195 102C188 88 175 78 158 80C142 82 134 92 125 105Z"
          fill="url(#femHair)"
        />

        {/* Eyes & Brows */}
        <path d="M138 112C142 109 150 109 153 112" stroke="#241408" strokeWidth="2" strokeLinecap="round" />
        <path d="M167 112C170 109 178 109 182 112" stroke="#241408" strokeWidth="2" strokeLinecap="round" />
        <circle cx="145.5" cy="118.5" r="3.5" fill="#1E293B" />
        <circle cx="174.5" cy="118.5" r="3.5" fill="#1E293B" />
        <circle cx="147" cy="117" r="1.2" fill="#FFFFFF" />
        <circle cx="176" cy="117" r="1.2" fill="#FFFFFF" />

        {/* Nose & Friendly Smile */}
        <path d="M160 118V136L157 138H163" stroke="#D99B77" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M150 150C155 157 165 157 170 150" stroke="#C25A4B" strokeWidth="2.4" strokeLinecap="round" />

        {/* Stethoscope around neck */}
        <path
          d="M132 180C126 215 130 255 150 260C162 262 166 248 166 238"
          stroke="#0A2D4D"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="166" cy="238" r="8" fill="#1BB3B0" stroke="#0A2D4D" strokeWidth="2.5" />
      </svg>
    </div>
  );
};

