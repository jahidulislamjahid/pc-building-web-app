/** @type {import('tailwindcss').Config} */


const colors = {
  curiousGreen: {
    DEFAULT: "#081621",
  },
  curiousYellow: {
    DEFAULT: "#ffe8a1"
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
        curiousGreen: colors.curiousGreen,
        curiousYellow: colors.curiousYellow
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate"]
  }
}
