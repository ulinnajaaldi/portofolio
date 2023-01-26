/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "base-100": "#e4e7e6",
          "base-200": "#ffffff",
          "base-content": "#9CA3AF",
          accent: "#83DBFF",
        },
        dark: {
          "base-100": "#111827",
          "base-200": "#151E31",
          "base-content": "#9CA3AF",
          accent: "#83DBFF",
        },
      },
    ],
  },
};
