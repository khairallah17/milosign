/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1D4ED8",
          blue: "#004AAD"
        },
        secondary: "bg-yello-500",
      },
    },
  },
  plugins: [],
}
