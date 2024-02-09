/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A335B",
        accent: "#ED3237",
        light: "#667085",
      },
      backgroundImage: {
        "auth-background": "url('/src/assets/images/png/bg-pattern.png')",
      },
      backgroundSize: {},
    },
  },
  plugins: [],
};
