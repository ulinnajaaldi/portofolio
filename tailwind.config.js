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
    container: {
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        md: "3rem",
        lg: "6.2rem",
      },
    },
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
          "base-content": "#9CA3AF",
          accent: "#83DBFF",
        },
        dark: {
          "base-100": "#111827",
          "base-200": "#151E31",
          "base-300": "#E5E7EB",
          "base-content": "#9CA3AF",
          accent: "#83DBFF",
        },
      },
    ],
  },
};
