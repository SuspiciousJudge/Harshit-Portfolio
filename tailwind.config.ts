import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          black: '#0A0A0F',
          dark: '#0D1117',
          panel: '#161B22',
          mid: '#21262D',
          cyan: '#00D4FF',
          teal: '#00FFC8',
          violet: '#8B5CF6',
          amber: '#F59E0B',
        },
        text: {
          primary: '#E6EDF3',
          secondary: '#8B949E',
          muted: '#484F58',
        },
        border: {
          subtle: '#30363D',
          active: '#00D4FF',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
        `,
        'radial-glow-cyan': 'radial-gradient(circle at 50% 50%, rgba(0,212,255,0.12) 0%, transparent 70%)',
        'radial-glow-violet': 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.10) 0%, transparent 70%)',
        'gradient-card': 'linear-gradient(135deg, #161B22 0%, #0D1117 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(0,212,255,0.05) 0%, rgba(139,92,246,0.05) 100%)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0,212,255,0.4), 0 0 60px rgba(0,212,255,0.1)',
        'glow-teal': '0 0 20px rgba(0,255,200,0.35)',
        'glow-violet': '0 0 20px rgba(139,92,246,0.4)',
        'glow-amber': '0 0 15px rgba(245,158,11,0.5)',
        card: '0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.6), 0 0 30px rgba(0,212,255,0.15)',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'spin-reverse': 'spinReverse 14s linear infinite',
        float: 'float 4s ease-in-out infinite',
        'float-delayed': 'float 4s ease-in-out 1.3s infinite',
        'float-slow': 'float 6s ease-in-out 0.6s infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'scan-line': 'scanLine 3s linear infinite',
        'blueprint-pulse': 'blueprintPulse 5s ease-in-out infinite',
        'crosshair-pulse': 'crosshairPulse 1.5s ease-in-out infinite',
        'draw-line': 'drawLine 1.2s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-left': 'slideLeft 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.5s ease-out forwards',
        'data-scroll': 'dataScroll 20s linear infinite',
      },
      keyframes: {
        spinReverse: {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', boxShadow: '0 0 10px rgba(0,212,255,0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 30px rgba(0,212,255,0.7)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        blueprintPulse: {
          '0%, 100%': { opacity: '0.02' },
          '50%': { opacity: '0.07' },
        },
        crosshairPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.15)', opacity: '0.7' },
        },
        drawLine: {
          from: { strokeDashoffset: '2000' },
          to: { strokeDashoffset: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          from: { opacity: '0', transform: 'translateX(60px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-60px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        dataScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
