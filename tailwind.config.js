/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // Scan all React files
  ],
  theme: {
    extend: {}, // You can customize theme here (colors, fonts, etc.)
  },
  plugins: [],
};
