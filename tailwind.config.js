/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-Page": "url('/assets/png/homePageBackground.png')",
      },
      boxShadow: {
        "8xl": "inset 0px 0px 22px -12px rgba(0,0,0,0.09)",
      },
    },
  },
  plugins: [],
};
