/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-Page": "url('/assets/png/homePageBackground.png')",
        "custom-radial":
          "radial-gradient(circle, rgba(199,194,196,0.8477984943977591) 0%, rgba(35,36,38,0.7077424719887955) 100%)",
      },
      boxShadow: {
        "8xl": "inset 0px 0px 22px -12px rgba(0,0,0,0.09)",
        "9xl": "inset 0px 0px 125px -133px rgba(255,255,255,0.49)",
        "10xl": " inset 0px -25px 80px -79px rgba(255,255,255,0.6)",
      },
    },
  },
  plugins: [],
};
