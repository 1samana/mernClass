/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '30rem',  // Example: width of 512px
        '144': '36rem',  // Example: width of 576px
        '160': '40rem',  // Example: width of 640px
        '192': '48rem',  // Example: width of 768px
        '224': '56rem',  // Example: width of 896px
        '256': '64rem',  // Example: width of 1024px
        '288': '72rem',  // Example: width of 1152px
        '320': '80rem',  // Example: width of 1280px
      },
   },
   },
  plugins: [],
}