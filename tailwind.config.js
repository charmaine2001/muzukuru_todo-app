// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "./index.html"
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         primary: '#4C6EF5',
//         secondary: '#15AABF',
//         accent: '#FF6B6B',
//         background: '#F8F9FA',
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  darkMode: 'class', // Ensure dark mode is enabled using the 'class' strategy
  theme: {
    extend: {
      colors: {
        primary: '#4C6EF5',
        secondary: '#15AABF',
        accent: '#FF6B6B',
        background: '#F8F9FA',
      },
    },
  },
  plugins: [],
}

