module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#4831d4', // Replace with actual color codes
        'brand-green': '#ccf381',
      },
    },
  },
  variants: {},
  plugins: [],
}
