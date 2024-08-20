/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'color-primary': '#B68C5A',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

