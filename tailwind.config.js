/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./home.html'],
  theme: {
    extend: {
      fontFamily:{
       'display':['canela-deck,serif'],
       'text':[' "Kanit", sans-serif']
      },
      colors: { 
        'primary':'#002147',
        'secondary':'#005F5F',
        'accent':'#FFD700',
        'background':'#F5F5F5'
      },
    },
  },
  plugins: [],
}

