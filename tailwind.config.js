/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      extend: {
        colors: {
            primary: {
              400: '#367C5A',
            },
            secondary: {
              400: '#FF9500',
            },
            light: {
              100: '#F7F7F7',
              800: '#1E1E1E'
            }
        },

        fontFamily:{
            primary: 'Satoshi',
            secondary:'Plus Jakarta Sans'
        },
        animation: {
          'spin-slow':'spin 30s linear infinite'
        }
    },
  },
  plugins: [],
}
