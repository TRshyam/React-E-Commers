/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
            colors: {
        'regal-blue-ad': '#282A57',
        'light-blue-ad': '#5256B9',
        'sandel': '#EBECD7',
        'light':'#ebecd7',
        'hover-light':'#faffe8',


      },
    },
  },
  plugins: [],
}