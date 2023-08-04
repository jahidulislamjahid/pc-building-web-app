/** @type {import('tailwindcss').Config} */


const colors = {
  curiousGreen: {
    DEFAULT: "#081621",
  }
}


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        curiousGreen: colors.curiousGreen
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate"]
  }
}
