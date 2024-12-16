import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#80af49",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        darkBg: "#262626",
        limeBg: "#8bc53e",
      },
    },
  },
  plugins: [daisyui],
};
