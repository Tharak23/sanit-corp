/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#FFFFFF',
        'background-alt': '#FCFCFC',
        primary: '#6ECEB2',
        'primary-light': '#B6E6DB',
        'primary-dark': '#4FBDA0',
        accent: '#111111',
        grid: '#D1D5DB',
        'soft-gray': '#F3F4F6',
        'medium-gray': '#9CA3AF',
        'dark-gray': '#4B5563',
      },
      backgroundImage: {
        'grid-pattern': "url('/grid-pattern.svg')",
        'paper-texture': "url('/paper-texture.svg')",
      },
      boxShadow: {
        'hand-drawn': '2px 2px 0 rgba(0, 0, 0, 0.1)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      borderWidth: {
        '3': '3px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 