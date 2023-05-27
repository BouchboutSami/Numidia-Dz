/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      GothamBlack: ["GothamBlack"],
      GothamBold: ["GothamBold"],
      GothamMedium: ["GothamMedium"],
      GothamLight: ["GothamLight"],
    },
    extend: {
      colors: {
        numidiaOrange: "#FF842B",
        numidiaBleu: "#0095B6",
        blanc: "#ffffff",
        noir: "#000000",
      },
    },
  },
  plugins: [],
};
