module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
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
  plugins: [],
};
