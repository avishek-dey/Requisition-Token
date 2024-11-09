/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: 
      {
        'brand_1': '#3dfcaa',
        'brand_2': '#E6F514',
        'brand_3': '#FEA201',
        'brand_4': '#004025',
        'brand_5': '#F4FBF8',

      },

      boxShadow: 
      {
        'inner': 'inset 0 -6px 3px rgba(0, 0, 0, 0.222)',
      }
    },
  },
  plugins: [],
}