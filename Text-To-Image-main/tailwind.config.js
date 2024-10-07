/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pxorange': '#FC9459',
        'darkorange': '#FF8139',
        'gray': '#939393',
        'hovergray': '#1E1E1E',
        'stable-purple': '#340068',
      },
    },
    fontFamily: {
      Display: ["outfit", "sans-serif"],
    },
  },
  plugins: [],
}