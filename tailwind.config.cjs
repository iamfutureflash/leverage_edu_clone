/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        "dark-blue": "#0f0f2e",
      },
      screens: {
        'xsm': '520px',
        'xxsm':'577px',
        'slg': '992px',
        //slg:small large screen
      },
    },
  },
  plugins: [],
}
