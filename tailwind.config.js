/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      boxShadow: {
        white: '0 8px 15px rgba(255, 255, 255, 0.5)', 
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      darkMode: 'class',
    },
  },
  plugins: [],
}
