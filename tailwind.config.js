module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      'avenir': ['Avenir'],
      'avenir-roman': ['Avenir-Roman'],
      'avenir-bold': ['Avenir-Bold'],
      'bauerbodonistd': ['BauerBodoniStd-Roman'],
      'bauerbodonibt': ['BauerBodoniBT'],
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        }
      },
      screens: {
        '3xl': '1920px'
      },
      spacing: {
        '22': '5.5rem'
      },
      borderWidth: {
        '1.5': '1.5px'
      },
      fontSize: {
        '2xs': '.625rem',
        '4.5xl': '2.625rem'
      },
      colors: {
        'primary': '#312d2c',
        'secondary': '#ecb10e',
        'primary-light': '#988e8b',
      }
    },
  },
  plugins: [],
}
