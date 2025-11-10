/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#0e263f',
        secondary: '#d5591a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Konexy', 'Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        section: '5rem',
      },
      borderRadius: {
        card: '1rem',
      },
    },
  },
  plugins: [],
}
