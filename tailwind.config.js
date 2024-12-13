const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        // fadeInLeft: {
        //   '0%': { opacity: '0', transform: 'translateX(-100%)' },
        //   '100%': { opacity: '1', transform: 'translateX(0)' },
        // },
        // fadeInRight: {
        //   '0%': { opacity: '0', transform: 'translateX(100%)' },
        //   '100%': { opacity: '1', transform: 'translateX(0)' },
        // },
        // slideInLeft: {
        //   '0%': { transform: 'translateX(-100%)' },
        //   '100%': { transform: 'translateX(0)' },
        // },
        // slideInRight: {
        //   '0%': { transform: 'translateX(100%)' },
        //   '100%': { transform: 'translateX(0)' },
        // },
        // slideInTop: {
        //   '0%': { transform: 'translateY(-100%)' },
        //   '100%': { transform: 'translateY(0)' },
        // },
        // slideInBottom: {
        //   '0%': { transform: 'translateY(100%)' },
        //   '100%': { transform: 'translateY(0)' },
        // },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '70%': { opacity: '1', transform: 'translateX(0)' }, // Animation finishes at 70%
          '100%': { opacity: '1', transform: 'translateX(0)' }, // Pause for the remaining 30%
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '70%': { opacity: '1', transform: 'translateX(0)' }, // Animation finishes at 70%
          '100%': { opacity: '1', transform: 'translateX(0)' }, // Pause for the remaining 30%
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '70%': { transform: 'translateX(0)' }, // Animation finishes at 70%
          '100%': { transform: 'translateX(0)' }, // Pause for the remaining 30%
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '70%': { transform: 'translateX(0)' }, // Animation finishes at 70%
          '100%': { transform: 'translateX(0)' }, // Pause for the remaining 30%
        },
        slideInTop: {
          '0%': { transform: 'translateY(-100%)' },
          '70%': { transform: 'translateY(0)' }, // Animation finishes at 70%
          '100%': { transform: 'translateY(0)' }, // Pause for the remaining 30%
        },
        slideInBottom: {
          '0%': { transform: 'translateY(100%)' },
          '70%': { transform: 'translateY(0)' }, // Animation finishes at 70%
          '100%': { transform: 'translateY(0)' }, // Pause for the remaining 30%
        },
        
      },
      animation: {
        fadeInLeft: 'fadeInLeft 5s ease-out infinite',
        fadeInRight: 'fadeInRight 5s ease-out infinite',
        slideInLeft: 'slideInLeft 5s ease-in infinite',
        slideInRight: 'slideInRight 5s ease-in infinite',
        slideInTop: 'slideInTop 5s ease-in infinite',
        slideInBottom: 'slideInBottom 5s ease-in infinite',
      },
    },
  },
  plugins: [],
};
