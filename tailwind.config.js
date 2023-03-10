/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: 'hsl(0, 0%, 8%)',
        white: 'hsl(0, 0%, 98%)',
        gray: 'hsl(0, 0%, 41%)',
      },
      fontFamily: {
        serif: 'Epilogue, sans-serif',
      },
    },
  },
  plugins: [],
};
