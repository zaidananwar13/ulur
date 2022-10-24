/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors :{
      'mred' : '#C8435D',
      'mpurple' : '#8C2F41'
    },
    container: {
      screens :{
        'md':'425px'
      }
    },
  },
  plugins: [],
}
