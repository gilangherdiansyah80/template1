/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('images/hero1.jpg')",
      },
      fontFamily: {
        'briem': 'Briem Hand'
      }
    },
  },
  plugins: [],
}

