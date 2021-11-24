module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#2b2d42",
          light: "#8d99ae",
        },
        secondary: "#edf2f4", 
        tertiary: {
          dark: "#d90429",
          light: "#ef233c",
        }
      },
      fontFamily: {
        'comfortaa': ['Comfortaa', 'cursive']
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
