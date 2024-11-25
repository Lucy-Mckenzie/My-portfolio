/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        sans: ['Lato', 'sans-serif'],
      },
      animation: {
        'glow-spin': 'glow-spin 50s linear infinite',
      },
      keyframes: {
        'glow-spin': {
          '0%, 100%': { transform: 'rotate(0deg)', opacity: '1' },
          '50%': { transform: 'rotate(180deg)', opacity: '0.5' },
        },
    },
  },
  },
  plugins: [],
}
