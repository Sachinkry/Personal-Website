

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkGray: "#48495C",
        lightGray: "#AEB3AE",
        superLightGray: "#E2E4EB",
        lightBrown: "#AC7268",
        mediumGreen: '#7B9B55',

      }
    },
  },
  plugins: [],
}
