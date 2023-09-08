/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
      extend: {
        screens:{
          'ms':'455px'
        },
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
          'spin-slow':'spin 30s linear infinite',
          'infinite-scroll': 'infinite-scroll 35s linear infinite',
          'bounce-slow': 'bounce 4s infinite'
        },
         keyframes: {
          'infinite-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
          }
      }
    },
  },
  plugins: [],
}
