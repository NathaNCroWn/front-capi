/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "'node_modules/flowbite-react/*/.{js,jsx,ts,tsx}'"
  ],
  theme: {
    colors: {
      // Configure your color palette here
      'primarioUno': '#FF75A0',
      'primarioDos': '#EAFFD0',
      'fondo':'#f5f5f5'
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

