/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          "0%, 100%": {
            transform: "scaleY(0.5)",
          },
          "50%": {
            transform: "scaleY(1.5)",
          },
        },

        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        wavey: "wavey 1000ms linear infinite",
        fadeIn: "fadeIn 300ms ease-in-out ",
      },
    },
  },
  plugins: [
    require("./plugins/tableCaption"),
    require("./plugins/openVariant"),
    require("./plugins/animationDelay"),
  ],
};
