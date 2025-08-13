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
        'spin-slow': 'spin 8s linear infinite',
      },
        colors: {
         'page-bg': '#0f1f50',
        //  'page-bg': '#0E1129',

         'card-bg2':'#141a3a',
         'btn-color': '#00A8CC',
         'btn-color-hover': '#008FB0',
         'card-hover': '#00b0d9',
         'herovideo':'#105183',

         //  'card-bg2':'red',
       

         
         'page-bg2': '#0f1f44',
        'card-bg': '#1f2f66',
        'text-primary': '#cfd8ee',
         
        
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

