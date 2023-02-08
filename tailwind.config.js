const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-orange": "#FF772D",
        "custom-black": "#212121",
        "custom-gray": "#676767",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)", ...fontFamily.sans],
        unbounded: ["var(--font-unbounded)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
