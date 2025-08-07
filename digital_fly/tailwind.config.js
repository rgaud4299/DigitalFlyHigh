/** @type {import('tailwindcss').Config} */

export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        manrope: ['Manrope', 'Helvetica', 'Arial', 'sans-serif']
      },
        animation: {
        'spin-slow': 'spin 15s linear infinite',
      },
        colors: {
        'page-bg2': '#0f1f44',
        'page-bg': '#0E1129',
        'card-bg': '#1f2f66',
        'card-bg2':'#141a3a',
        'text-primary': '#cfd8ee',
        'accent': '#00b0d9',
        'btn-blue': '#1fa3ff',
        'btn-blue-hover': '#178de6',
        'herovideo':'#105183',
        'color-contact':'#0f1f50',
        'gradi':'#105183',
        'page-bg3': '#0E1129',
        'card-highlighted':'#00b0d9'

      },
      backgroundImage: {
        'title-gradient': 'linear-gradient(90deg, #e5e9f2 0%, #c7d0e8 100%)'
      }
    },
  },
  plugins: [],
}

