/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#5aa9e6',
        'custom-blue-light': '#7fc8f8',
      }
    },
  },
  plugins: [],
}