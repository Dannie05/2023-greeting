/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './pages/**/*.{js,ts,jsx,tsx}',
    // './components/**/*.{js,ts,jsx,tsx}',
    './index.html',
    './greeting.html',
  ],
  theme: {
    extend: {
      colors: {
        "dark":"#000",
      "light": "#f2f2f2"
      }
    },
  },
  plugins: [],
}
