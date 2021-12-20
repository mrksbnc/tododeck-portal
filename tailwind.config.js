module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {
      zIndex: {
        toast: '9999',
        modal: '9998',
        'modal-backdrop': '9997',
      },
      backgroundImage: {
        'liquid-marble': "url('./src/assets/images/liquid-marble.jpeg')",
      },
    },
  },
  plugins: [],
};
