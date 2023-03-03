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
        LIGHT_BLUE: "#1FC6D5",
        LIGHT_BLUE_TRANS: "#1FC6D588",
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
          DEFAULT: "#1fc6d5",
          50: "#eefdfd",
          100: "#d4f8f9",
          200: "#aef0f3",
          300: "#76e3ea",
          400: "#37cdd9",
          500: "#1fc6d5",
          600: "#1a8ea0",
          700: "#1c7282",
          800: "#1f5e6b",
          900: "#1e4e5b",
        },
        secondary: {
          DEFAULT: "#00B0A7",
        },
      },
    },
  },
  plugins: [],
};
