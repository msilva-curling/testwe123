import type { Config } from 'tailwindcss'
import animatePlugin from 'tailwindcss-animate'
import typographyPlugin from '@tailwindcss/typography'
import aspectRatioPlugin from '@tailwindcss/aspect-ratio'

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        'square-default': '#6a89cc',
        'square-hover': '#4a69bd',
        'square-active': '#3b5998',
        'square-glow-default': '#f1c40f',
        'square-glow-hover': '#f39c12',
        'square-glow-active': '#e67e22',
        'square-pulse-default': '#9b59b6',
        'square-pulse-hover': '#8e44ad',
        'square-pulse-active': '#2980b9',
        'text-primary': '#2c3e50',
        'text-secondary': '#ecf0f1',
        'toast-background': '#2ecc71',
        'toast-text': '#ffffff',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        'square-desktop': '20px',
        'square-mobile': '15px',
        toast: '8px',
      },
      boxShadow: {
        'square-default':
          '0px 4px 15px rgba(0, 0, 0, 0.1), 0px 2px 5px rgba(0, 0, 0, 0.05)',
        'square-hover':
          '0px 8px 25px rgba(0, 0, 0, 0.2), 0px 4px 10px rgba(0, 0, 0, 0.1)',
        'square-glow-hover': '0 0 25px #f39c12, 0 0 10px #f1c40f',
        toast: '0px 2px 8px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'toast-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'toast-out': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' },
        },
        'spin-once': {
          '0%': { transform: 'rotate(0deg) scale(0.95)' },
          '100%': { transform: 'rotate(360deg) scale(0.95)' },
        },
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1.05)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'toast-in': 'toast-in 150ms ease-out forwards',
        'toast-out': 'toast-out 200ms ease-in forwards',
        'spin-once': 'spin-once 0.5s ease-in-out',
        'pulse-subtle': 'pulse-subtle 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [animatePlugin, typographyPlugin, aspectRatioPlugin],
} satisfies Config
