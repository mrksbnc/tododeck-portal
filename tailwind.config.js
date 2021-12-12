module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        toast: '9010',
        modal: '9000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
