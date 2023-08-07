/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors:{
        'text':'#5c4d49',
        'right':'#fbd989',
        'left':'#f69c84',
        'container':'#f9f5f3',
        'svg-color':'#f38e82',
        'li-img-left':'#f69c8433',
        'li-img-right':"#fbd98966"
      }
    },
  },
  plugins: [],
}

