/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'Dongle': ['Dongle', 'sans-serif']
      },
      boxShadow: {
        '3xl': '0px -5px 10px 0px rgba(0, 0, 0, 0.4)',
        '4xl' : '0px 0px 10px rgba(0, 0, 0, 0.3)',
        '5xl' : '0px 5px 10px 0px rgba(0, 0, 0, 0.3)',
        '6xl' : '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
        '7xl' : '0px 10px 20px 2px rgba(0, 0, 0, 0.25)'
      },
    },
  },
  plugins: [],
}
