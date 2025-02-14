/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B1F3B',
          gold: '#C9A66B',
          teal: '#64B6AC',
          gray: '#E5E5E5',
          white: '#F8F9FA',
          pearl: '#FFFFF0',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h1': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h2': ['2rem', { lineHeight: '1.4' }],
        'h3': ['1.5rem', { lineHeight: '1.5' }],
        'body': ['1.125rem', { lineHeight: '1.6' }],
      },
      spacing: {
        'section': '8rem',
      }
    },
  },
  plugins: [],
};
