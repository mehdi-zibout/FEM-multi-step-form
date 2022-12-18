const { startTransition } = require("react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "964px",
    },
    colors: {
      denim: "#022959",
      grey: "#9699AA",
      lightBlue: "#ABBCFF",
      skyBlue: "#BEE2FD",
      lightGrey: "#D6D9E6",
      veryLightGrey: "#F8F9FF",
      orange: "#FFAF7E",
      pink: "#F9818E",
      purple: "#483EFF",
      red: "#EE374A",
      black: "#000",
      white: "#FFF",
      bgColor: "#EFF5FF",
      borderColor: "#D6D9E6",
    },
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
    },
    fontSize: {
      xl: ["32px", { fontWeight: 700 }],
      l: ["16px", { lineHeight: "25px", fontWeight: 400 }],
      m: ["14px", { fontWeight: 400 }],
      s: ["12px", { fontWeight: 400 }],
    },
    extend: {},
  },
  plugins: [],
};
