/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      gridTemplateColumns: {
        "fluid-xs": "repeat(auto-fill, minmax(10rem, 1fr))",
        fluid: "repeat(auto-fill, minmax(15rem, 1fr))",
      },
      ringWidth: {
        DEFAULT: "2px",
      },
      ringColor: {
        DEFAULT: "gray",
      },
      ringOffsetWidth: {
        DEFAULT: "2px",
      },
      outlineColor: {
        DEFAULT: "gray",
      },
    },
  },
};
