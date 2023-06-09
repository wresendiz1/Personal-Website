/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        "bg-pan": {
          '0%, 100%': {
            'background-size':'200% 200%',
             'background-position': 'left center'
         },
         '50%': {
            'background-size':'200% 200%',
             'background-position': 'right center'
         }
        },
      },
      animation: {
        "pan": "bg-pan 5s linear infinite",
      },
    },
  },
  plugins: [],
};
