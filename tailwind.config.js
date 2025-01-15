/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage:
      {
        customGradientLight : 'linear-gradient( 90deg, rgba(112,246,255,0.33) 11.2%, rgba(221,108,241,0.26) 42%, rgba(229,106,253,0.71) 71.5%, rgba(123,183,253,1) 100.2% );',
        customGradientDark  : 'linear-gradient(90deg, #310e68 0%, #5f0f40 74%);',
      }
    },
  },
  plugins: [],
}