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
        'regal-yellow-ad': '#A58B02',
        'light-yellow-ad': '#FFE146',
        'sandel': '#EBECD7',
        'light':'#ebecd7',
        'hover-light':'#faffe8',
        'card-color':'#f1f2f4',
        'card-content-color':'#eeeeee',


      },
   
    },
  },
  plugins: [],
}