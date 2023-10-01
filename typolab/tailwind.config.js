/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#1d1e1d",
      white: "#f5f5f5",
      fog: "#eff4f5",
      lightGrey: "#c0c6c4",
      greenGrey: "#708783",
      darkGreen: "#132127",
      blueblue: "#4f89a7",
      red: "#ec5424",
      yellow: "#ffa621",
    },
    fontFamily: {
      BlackOpsOne: "Black Ops One",
      Bayon: "Bayon",
      NotoSans: "Noto Sans",
    },
    screens: {
      mobile: { max: "430px" },
      tablet: { min: "431px", max: "1023px" },
      desktop: { min: "1024px" },
    },
    rotate: {
      90: "90deg",
      180: "180deg",
      270: "270deg",
    },
  },

  plugins: [],
};
