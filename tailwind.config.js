/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    fontFamily: {
      Roboto: ["Raleway", "sans-serif"],
      Poppins: ['Poppins', "sans-serif"],
    },
    extend: {
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "400px": "400px"
      },
      backgroundImage: {
        'hero': "url('/src/assets/imgs/hero-bg.jpg')",
        'stats': "url('/src/assets/imgs/stats-bg.jpg')",
        'world': "url('/src/assets/imgs/cta-bg.jpg')",
      },
      colors: {
        'backgroundcolor': 'rgba(255, 255, 255, 0)',
        'overlay': 'rgba(0, 0, 0, 0.6)',
        'navcolor': 'rgba(255, 255, 255, 0.515)',
        'backlessRed': 'rgba(232, 69, 69, 0.05)',
        'redCircle': 'rgba(232, 69, 69, 0.3)',
        'iconsSerivce': 'rgba(33, 37, 41, 0.7)',
        'grayColor': 'rgba(33, 37, 41, 0.3)',
        'defaultColor': '#212529',
        'primaryColor': '#e84545',
        'semicolon': 'rgba(232, 69, 69,0.3)',
        'contactbg': 'rgba(255, 255, 255, 0.5)',

      },
    },
  },
  plugins: [],
};