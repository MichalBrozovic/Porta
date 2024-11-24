/** @type {import('tailwindcss').Config} */
const pxToRem = px => `${px / 16}rem`;
const plugin = require('tailwindcss/plugin'); 
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,tsx}', 
    './index.html'
  ],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1300px' },
      'lg-2': { max: '1200px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '420px' },
      xs: { max: '370px' }
    },

    fontFamily: {
      default: ['"Plus Jakarta Sans"', 'sans-serif']
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem', 
        },
      },
      fontSize: {
        // h1
        h1: pxToRem(56),
        'h1-mobile': pxToRem(46),
        // h2
        h2: pxToRem(44),
        'h2-mobile': pxToRem(32),
        'h2-small': pxToRem(26),
        'h2-small-mobile': pxToRem(26),
        // h3
        h3: pxToRem(20),
        'h3-mobile': pxToRem(20),
        // h4
        h4: pxToRem(18),
        'h4-mobile': pxToRem(18),
        // 26px
        26: pxToRem(26),
        // 44px
        44: pxToRem(44)
      },
      colors: {
        color_primary: '#063436',
        color_secondary: '#C6E51B',
        color_font: '#063436',
        color_font_invert: '#FFFFFF',
        color_font_secondary: '#3C6762',
        color_flag: '#B0D9D4',
        color_border: '#285556',
        color_border_secondary: '#B0D9D433',
        color_border_btn: '#B0D9D44D'
      }
    }
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    plugin(function({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: 'calc(1580px + 4rem)',
          '@screen md': {
            paddingLeft: '1.125rem',
            paddingRight: '1.125rem',
          },
        },
      })
    })
  ],
}
