/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      keyframes: {
        growTriangle: {
          '0%': {
            'border-top-width': '0',
            'border-right-width': '0',
          },
          '100%': {
            'border-top-width': '30vw',
            'border-right-width': '50vh',
          },
        },
        growTriangleMobile: {
          '0%': {
            'border-top-width': '0',
            'border-right-width': '0',
          },
          '100%': {
            'border-top-width': '100vw',
            'border-right-width': '40vh',
          },
        },
      },
      animation: {
        'grow-triangle': 'growTriangle 1.2s ease-out forwards',
        'grow-mobile': 'growTriangleMobile 1.2s ease-out forwards',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

