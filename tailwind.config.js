/** @type {import('tailwindcss').Config} */

const colors = {
  body: "#171D2C",
  "body-gray": "#B1BAD1",
  yellow: "#FABE2F",
  brown: "#42330E",
};

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  plugins: [],
};
