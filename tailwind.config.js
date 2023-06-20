module.exports = {
  mode: 'jit', // enable Just-in-Time mode
  purge: {
    enabled: true,
    content: ['./public/**/*.{html,js}', './src/**/*.{html,js}'],
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
