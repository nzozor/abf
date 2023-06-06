/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'abf-gold': '#BFA057',
        'abf-black': '#212121',
        'abf-black': '#212121',
        'abf-ligth-grey': '#F8F8F8',
        'abf-ligth-grey': '#F8F8F8',
        'abf-green': '#7CD8AE',
      },
    },
  },
  plugins: [],
}
