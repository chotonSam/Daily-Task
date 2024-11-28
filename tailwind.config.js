/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        3: "3px", // Custom border width of 3px
        5: "5px", // Custom border width of 5px
        // Add more as needed
      },
    },
  },
  plugins: [],
};
