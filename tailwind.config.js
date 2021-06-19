module.exports = {
  mode:['jit'],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    linearGradientColors: theme => theme('colors'),
    radialGradientColors: theme => theme('colors'),
    conicGradientColors: theme => theme('colors'),
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
     require('@tailwindcss/aspect-ratio'),
     require('@tailwindcss/forms'),
     require('tailwind-scrollbar'),
     require('tailwindcss-gradients'),


  ],
}
