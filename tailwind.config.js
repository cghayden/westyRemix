module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
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
};
