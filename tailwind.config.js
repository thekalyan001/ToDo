/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure to include JSX files
  ],
  theme: {
    extend: { 
        colors: {
          'custom-green': '#438670',
        }, 
    },
  },
  plugins: [],
}

