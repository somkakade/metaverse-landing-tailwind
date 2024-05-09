/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat:['Montserrat','sans-serif'],
        parisienne:["Parisienne", "cursive"],
      },
      colors:{
        primary:"#00C2FF",
        secondary:"#DD0BFF",
        dark:"#1111111",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem",
          // lg:"3rem",
          // xl:"4rem",
          // "2xl":"5rem",
        }
      }
    },
  },
  plugins: [],
}