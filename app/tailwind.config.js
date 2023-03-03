/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
    },
    extend: {
      colors: {
        BLUE: "#26387C",
        BLUE_TRANS: "#26387C69",
        LIGHT_BLUE: "#0074d4",
        LIGHT_BLUE_TRANS: "#0074d488",
        DARK_BLUE: "#0A215C",
        DARK_BLUE_TRANS: "#c6cad2",
        LIGHT_GRAY: "#B8B8B8",
        WHITE: "#FFFFFF",
        test: {
          "Bleu clair": "#D0EFFF",
          Vert: "#00B0A7",
          "Jaune pâle": "#F1C65C",
          "Gris foncé": "#555555",
          Blanc: "#FFFFFF",
        },
        primary: {
          DEFAULT: "#0074d4",
          50: "#ecfcff",
          100: "#d4f6ff",
          200: "#b2f2ff",
          300: "#7dedff",
          400: "#40deff",
          500: "#14c2ff",
          600: "#00a4ff",
          700: "#008cff",
          800: "#0074d4",
          900: "#085fa0",
        },
        secondary: {
          DEFAULT: "#00B0A7",
        },
      },
    },
  },
  plugins: [],
};
