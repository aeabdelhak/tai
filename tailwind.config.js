module.exports = {
  mode:['jit'],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
 
  },
  variants: {
    extend: {
      display:["hover"],
      zIndex:["hover"]
    },
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
     require('@tailwindcss/aspect-ratio'),
     require('@tailwindcss/forms'),
     require('tailwind-scrollbar'),
     require('tailwindcss-gradients'),
     require('tailwindcss-elevation')(
      [],
      {
        color: '77,192,181',
        opacityBoost: '0.23'
      }

      )
  ],
}
