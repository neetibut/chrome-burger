/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
        lobster: ['"Lobster"', "cursive"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(255, 215, 0, 0.7)" },
          "50%": { boxShadow: "0 0 30px rgba(255, 215, 0, 1)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-out forwards",
        glow: "glow 2s infinite",
      },
    },
  },
  plugins: [],
};
