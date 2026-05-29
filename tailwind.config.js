/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#050508',
          deeper: '#030305',
          surface: '#0a0a10',
          card: '#0f0f18',
          border: '#1a1a2e',
          accent: '#00b4ff',
          glow: '#0088cc',
          purple: '#7c3aed',
          muted: '#6b6b80',
          text: '#e2e2ea',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'grid-move': 'gridMove 25s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40) 1s forwards, blink 0.75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gridMove: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', boxShadow: '0 0 20px rgba(0,180,255,0.1)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(0,180,255,0.3)' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: '#00b4ff' },
        },
      },
    },
  },
  plugins: [],
};
