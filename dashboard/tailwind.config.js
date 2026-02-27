/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Syne"', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#0A0D12',
          50:  '#F0F2F5',
          100: '#E2E6EC',
          200: '#C5CDD9',
          300: '#8A97A8',
          400: '#4D5A6B',
          500: '#2A3344',
          600: '#1A2232',
          700: '#121926',
          800: '#0D1420',
          900: '#0A0D12',
          950: '#060810',
        },
        accent: {
          DEFAULT: '#00E5C3',
          50:  '#E6FFF9',
          100: '#B3FFF0',
          200: '#66FFE1',
          300: '#1AFFD2',
          400: '#00E5C3',
          500: '#00C4A7',
          600: '#009E87',
          700: '#007A68',
          800: '#00574A',
          900: '#00332C',
        },
        positive: '#00D67F',
        negative: '#FF4D6A',
        warning:  '#FFB547',
      },
      boxShadow: {
        'card':       '0 1px 2px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,229,195,0.2)',
        'glow-sm':    '0 0 12px rgba(0,229,195,0.2)',
      },
      animation: {
        'fade-in':  'fadeIn 0.4s ease forwards',
        'slide-up': 'slideUp 0.35s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
