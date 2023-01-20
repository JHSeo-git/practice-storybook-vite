const vars = require('./tailwindcss-vars');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class'],
  theme: {
    extend: {
      colors: {
        primary: vars.$semantic.color.primary,
      },
    },
  },
  plugins: [],
};
