/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dim: {
          50: '#5f99f7',
          100: '#5f99f7',
          200: '#38444d',
          300: '#202e3a',
          400: '#253341',
          500: '#5f99f7',
          600: '#5f99f7',
          700: '#192734',
          800: '#162d40',
          900: '#15202b',
        }
      },
      animation: {
        'spin-fast': 'spin .5s linear infinite',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
  ],
}

