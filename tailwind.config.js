/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'user-icon': "url('../src/assets/images/unnamed.jpg')"
      }
    }
  },
  plugins: []
}
