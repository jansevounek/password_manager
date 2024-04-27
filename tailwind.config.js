/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        first: '#161925',
        second: '#23395B',
        third: '#325475',
        fourth: '#406E8E',
        fifth: '#8EA8C3',
        sixth: '#CBF7ED',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

