/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A2D4D',
          deep: '#061B30',
        },
        teal: {
          DEFAULT: '#0F8B8D',
          bright: '#1BB3B0',
        },
        mist: '#E7F4F4',
        paper: '#F6F9FB',
        text: '#22384D',
        muted: '#5A6B7B',
        line: '#DCE6EC',
        gold: '#F2B544',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"IBM Plex Mono"', 'Menlo', 'monospace'],
      },
      borderRadius: {
        '20': '20px',
        '28': '28px',
        '34': '34px',
      },
      boxShadow: {
        'navy-soft': '0 40px 80px -50px rgba(10, 45, 77, 0.45)',
        'card': '0 12px 32px -8px rgba(10, 45, 77, 0.08), 0 4px 12px -4px rgba(10, 45, 77, 0.04)',
        'card-dark': '0 20px 50px -15px rgba(0, 0, 0, 0.5)',
        'glow-teal': '0 0 40px -10px rgba(27, 179, 176, 0.4)',
      },
      animation: {
        'spin-slow': 'spin 25s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.2)' },
        },
      },
    },
  },
  plugins: [],
};

