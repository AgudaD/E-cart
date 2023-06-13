/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica': ['Helvetica', 'sans serif'] 
      },
      backgroundImage: {
        'chairset': "url('/src/assets/chair1.jpg')"
      }
    },
  },
  plugins: [],
}