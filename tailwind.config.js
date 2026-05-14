const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        'brand-primary': '#4F46E5', // Indigo 600
        'brand-accent': '#EC4899', // Pink 500
        'triage-pending': '#FBBF24', // Amber 400
        'triage-approved': '#34D399', // Emerald 400
        'triage-rejected': '#EF4444', // Red 500
        'triage-processed': '#6B7280', // Gray 500
      },
    },
  },
  plugins: [],
}