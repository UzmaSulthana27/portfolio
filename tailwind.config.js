/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0812', bg2: '#100e1a', surface: '#16122a',
        accent: '#a78bfa', accent2: '#f472b6', accent3: '#c084fc',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
