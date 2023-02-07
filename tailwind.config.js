/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      tablet: '960px',
      desktop: '1248px'
    },
    extend: {
      backgroundColor: {
        skin: {
          site: 'var(--color-site-background)'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops) 15%)'
      },
      colors: {
        stone: '#1f1f26',
        error: '#c00'
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
        display: ['var(--font-pacifico)']
      },
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
}
