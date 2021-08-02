const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#020202',
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: '#FC5162',
      yellow: colors.amber,
      blue: colors.blue,
      green: colors.green,
    },
    extend: {
      fontFamily: {
        lemonmilk: ['Lemonmilk-Regular'],
        lemonmilkBold: ['Lemonmilk-Bold'],
        primary: ['"Bambino"'],
        secondary: ['"Lemonmilk"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
