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
      'clouds-moving': 'moveClouds 60s linear infinite',
    },
    keyframes: {
      moveClouds: {
        '0%': {
          transform: 'translateX(-100%)',
        },
        '50%': {
          transform: 'translateX(100%)'
        },
        '100%': {
          transform: 'translateX(-100%)',
        },
      },
    },
    darkMode: 'class',
  },
  },
  plugins: [],
}
