/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-color': '#E52525',
        'kalo' : '#333333'
      },
    },
    container: {
      center: true,
      padding: 'lg:50px',
      padding : '15px'
    },
    fontFamily : {
    "inter" : ["Inter", "sans-serif"],
    "pt" : ["PT Serif", "serif"]
    },
  },
  plugins: [],
}