/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-lobster)',
      },

      colors: {
        richblack: {
          50: '#DEE4F2',
          100: '#BDC9E5',
          200: '#7B93CB',
          300: '#415FA5',
          400: '#273963',
          500: '#0D1321',
          600: '#0A0F1A',
          700: '#070B12',
          800: '#06080F',
          900: '#030407',
          950: '#010204',
        },
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'my-gradient': 'linear-gradient(16deg, #5A69DA 0%, #58CE89 100%);',
      },

      animation: {
        'collapseCard': 'opacity 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
}
