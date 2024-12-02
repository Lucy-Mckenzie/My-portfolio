/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      boxShadow: {
        white: "0 8px 15px rgba(255, 255, 255, 0.5)", 
      },
      fontFamily: {
        merriweather: ['Merriweather', 'serif'],
        sans: ['Lato', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
    },
    animation: {
      'clouds-moving': 'moveClouds 100s linear infinite',
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
