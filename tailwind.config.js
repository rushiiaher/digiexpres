/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#13386E',
          red: '#E81C25',
          dark: '#4A4A4A',
          grey: '#7E7E7E'
        }
      }
    },
  },
  plugins: [],
};