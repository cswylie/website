module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sageGreen: '#547453',
        magnolia: '#F7F0F5',
        englishViolet: '#4F345A',
        lapisLazuli: '#05668D',
      },
      fontFamily: {
        zain: ['Zain'],
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