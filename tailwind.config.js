const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      sampleCustomColor: '#37AA69',
      p_light: '#f5c0bf',
      p_lighter: '#ead4d4',
      p_lightest: '#f0eae0',
      p_comp: '#cee0e6',
      darkText: '#0e1b4b',
      slate: colors.slate,
    },
    extend: {
      fontFamily: {
        HindSiliguri: ['Hind Siliguri'],
      },
      gridTemplateColumns: {
        autoFit2: 'repeat(auto-fit, minmax(225px, 1fr))',
        // checkoutForm: '25% 1fr',
        checkoutForm: 'max-content 1fr',
      },
    },
  },
  plugins: [],
}
