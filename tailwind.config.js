import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Wix Madefor Display', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
};