/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        headingFont:["Playfair Display", "serif"],
        titleFont:[ "Oswald"," sans-serif"]
      }
    },
  },
  plugins: [],
}