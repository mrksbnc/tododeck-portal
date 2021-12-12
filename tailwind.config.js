module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        toast: '9010',
        modal: '9000',
      },
      backgroundImage: {
        'liquid-marble': "url('./src/assets/images/liquid-marble.jpeg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
