/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        custom: '3px 5px 40px 0px rgba(173, 173, 173, 0.25)', 
      },
      colors: {
        mainBlue: '#5AAAD9',
        mainGray: '#434343',
        mainGreen: '#24919C',
        skyBlue: '#E3EFFA',
        lightGray: '#F8F8F8',
        blueGradient90: 'linear-gradient(90deg, #6589E7, #49DFC4)',
        redGradient: 'linear-gradient(180deg, #E63F3F 0%, #ED6B6B 100%)',
        purpleGradient: 'linear-gradient(180deg, #6488E7 0%, #A4BDEE 100%)',
        whiteGradient: 'linear-gradient(180deg, #F7FAFE 0%, rgba(206, 229, 248, 0.80) 100%)',
        lightGreen: '#DFF7E2',
        lightGreen70: 'rgba(223, 247, 226, 0.70)',
      }
    },
  },
  plugins: [],
}

