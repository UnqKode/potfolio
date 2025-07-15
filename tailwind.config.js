/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/magic-ui/**/*.{js,ts,jsx,tsx}", // ✅ Add this line
  ],
  theme: {
    extend: {
      fontFamily: {
        bangers: ['"Bangers"', 'cursive'],
        beau: ['"Beau Rivage"', 'cursive'],
        dela: ['"Dela Gothic One"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        orbitron: ['"Orbitron"', 'sans-serif'],
        oswald: ['"Oswald"', 'sans-serif'],
        poppins: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
