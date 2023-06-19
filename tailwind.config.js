module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        ratiogreen: {
          100: "#c0ebc5",
          200: "#96dea0",
          300: "#64d278",
          400: "#34C759",
          500: "#00bc37",
          600: "#00ad2d",
          700: "#009a20",
          800: "#008911",
          900: "#006900",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
