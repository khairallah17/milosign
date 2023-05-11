/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "bg-yello-500"
      },
    },
  },
  plugins: [],
}

