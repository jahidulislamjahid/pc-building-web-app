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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
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
