/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     colors:{
      lightModeBg: '#FFCC99',
        lightModeText: '#000000',
        darkModeText: '#FFFFFF',
     }
    },
  },
  plugins: [],
}