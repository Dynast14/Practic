module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        arcade: ['"Press Start 2P"', 'cursive'], // Fuente estilo arcade
      },
      animation: {
        'gradient-flow': 'gradientBG 8s ease infinite',
      },
      keyframes: {
        gradientBG: {
          '0%': { background: 'linear-gradient(to right, #ff7e5f, #feb47b)' },
          '25%': { background: 'linear-gradient(to right, #ff9966, #ff5e62)' },
          '50%': { background: 'linear-gradient(to right, #56ccf2, #2f80ed)' },
          '75%': { background: 'linear-gradient(to right, #76b852, #8dc26f)' },
          '100%': { background: 'linear-gradient(to right, #ff7e5f, #feb47b)' },
        },
      },
    },
  },
  plugins: [],
};
