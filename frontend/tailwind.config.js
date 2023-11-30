/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: {
          '50':  '#f3f8f9',
          '100': '#daf1fa',
          '200': '#afe0f5',
          '300': '#7cc2e7',
          '400': '#479ed3',
          '500': '#357dc0',
          '600': '#265aa7',
          '700': '#254a87',
          '800': '#1b3260',
          '900': '#101f3f',
        },
        yellow: {
          '50':  '#f9f9f1',
          '100': '#f6efb3',
          '200': '#ffe400',
          '300': '#c9c043',
          '400': '#949a22',
          '500': '#717d10',
          '600': '#5a650a',
          '700': '#464c0a',
          '800': '#303409',
          '900': '#212008',
        }
      }
    },
  },
  plugins: [],
}

