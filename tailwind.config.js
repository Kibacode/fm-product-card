/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Monserrat", "serif"],
        fraunces: ["Fraunces", "sans-serif"],
      },
    },
    screens: {
      sm: { min: "320px", max: "767px" },
      xl: { min: "768px", max: "1440px" },
    },
    colors: {
      "primary-dark-cyan": "#3c8067",
      "hover-dark-cyan": "#1c3b30",
      "primary-cream": "#f2ebe3",
      "neutral-very-dark-blue": "#1c232b",
      "neutral-dark-gayish-blue": "#6c7289",
      "neutral-white": "#ffffff",
    },
  },
  plugins: [],
};
