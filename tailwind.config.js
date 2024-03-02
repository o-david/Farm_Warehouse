/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pry':"#0D8A6A",
        'faintTxt':"#475467"
      },
    },
  },
  plugins: [],
}