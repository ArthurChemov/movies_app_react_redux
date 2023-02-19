/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#373737',
      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/line-clamp'),
  ],
};
