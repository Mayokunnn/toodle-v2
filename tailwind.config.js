/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    gradientColorStopPositions: {
      33: "33%",
    },

    backgroundImage: {
      "light-mode-mobile": "url('./public/bg-mobile-light.jpg')",
      "dark-mode-mobile": "url('./public/bg-mobile-dark.jpg')",
      "light-mode-desktop": "url('./public/bg-desktop-light.jpg')",
      "dark-mode-desktop": "url('./public/bg-desktop-dark.jpg')",
    },
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        lightVeryLight: "hsl(0, 0%, 98%)",
        lightVeryGrayishBlue: " hsl(236, 33%, 92%)",
        lightGrayishBlue: " hsl(233, 11%, 84%)",
        lightDarkGrayishBlue: "hsl(236, 9%, 61%)",
        lightVeryDarkGrayishBlue: "hsl(235, 19%, 35%)",

        darkVeryBlue: "hsl(235, 21%, 11%)",
        darkVeryDesaturatedBlue: " hsl(235, 24%, 19%)",
        darkLightGrayishBlue: "hsl(234, 39%, 85%)",
        darkLightGrayishBlueHover: "hsl(236, 33%, 92%)",
        darkGrayishBlue: "hsl(234, 11%, 52%)",
        darkVeryGrayishBlue: " hsl(233, 14%, 35%)",

        brightBlue: "hsl(220, 98%, 61%)",
        gradientFirst: "hsl(192, 100%, 67%)",
        gradientSecond: "hsl(280, 87%, 65%)",
      },
    },
  },
};
