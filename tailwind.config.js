module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        HindSiliguri: ['Hind Siliguri'],
      },
      gridTemplateColumns: {
        autoFit2: 'repeat(auto-fit, minmax(225px, 1fr))',
        orderSummary: '50px max-content 100px',
        // checkoutForm: '25% 1fr',
        checkoutForm: 'max-content 1fr',
      },
    },
  },
  plugins: [],
}
