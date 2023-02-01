/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'lightred': '#F55A5A',
      },
      fontFamily:{
        'TextFont':['Inter','sans-serif'],
    },
  },
  plugins: [],
}
}