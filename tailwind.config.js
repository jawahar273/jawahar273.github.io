/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {},
  variants: {
    textColor: ['responsive', 'hover', 'focus'],
    transitionProperty: ['responsive', 'hover'],
    backgroundColor: ['responsive', 'hover', 'focus']
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  plugins: []
}
