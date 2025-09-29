// tailwind.config.cjs
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED', // purple-600
        accent: '#4F46E5', // indigo-600
        background: '#F9FAFB', // gray-50
        card: '#FFFFFF', // white
        textPrimary: '#111827', // gray-900
        textSecondary: '#6B7280', // gray-500
      },
    },
  },
  plugins: [],
};
