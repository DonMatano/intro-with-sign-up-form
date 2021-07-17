
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'primary-red': 'hsl(0, 100%, 74%)',
        'primary-green': 'hsl(154, 59%, 51%)',
        'primary-light-green': 'hsl(154, 59%, 60%)',
        'accent-blue': 'hsl(248, 32%, 49%)',
        'neutral-dark-blue': 'hsl(249, 10%, 26%)',
        'neutral-grayish-blue': 'hsl(246, 25%, 77%)',
        'neutral-gray': 'hsl(252, 4%, 44%)',
      },
      backgroundImage: theme => ({
        'intro-desktop': "url('/src/images/bg-intro-desktop.png')",
        'intro-mobile': "url('/src/images/bg-intro-mobile.png')",
      })
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
  },
  plugins: [],
}
