/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xxs: '319px', // => @media (min-width: 320px) { ... }
      xs: '480px', //wh => @media (min-width: 320px) { ... }
      sm: '640px', // => @media (min-width: 640px) { ... }
      md: '768px', // => @media (min-width: 768px) { ... }
      lg: '1024px', // => @media (min-width: 1024px) { ... }
      xl: '1280px', // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        black: '#171717',
      },
      width: {
        98: '26rem',
      },
    },
  },
  darkMode: 'class',
  plugins: [require('daisyui')],
}
