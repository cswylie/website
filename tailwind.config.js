module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'theme-fernGreen',
    'theme-magnolia',
    'theme-dark',
    'theme-rust',
  ],
  theme: {
    extend: {
      colors: {
        rust: '#ba3f1d',
        magnolia: '#F7F0F5',
        richBlack: '#040f0f',
        fernGreen: '#588157',
        calPolyGreen: '#2A3F2A'
      },
      fontFamily: {
        zain: ['Zain'],
        cutive: ['Cutive']
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}