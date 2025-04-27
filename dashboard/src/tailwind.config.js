/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        colors: {
          darkbg: "#0f0f0f",
          accent: "#00FFAB",
          highlight: "#FF6B00",
        },
      },
    },
    plugins: [],
  }
  