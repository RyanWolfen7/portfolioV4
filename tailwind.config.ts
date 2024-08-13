import { type Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    colors: {
      main: {
        100: '#8A998A',
        200: '#7E8C7E',
        300: '#738073',
        400: '#677367',
        500: '#5C665C',
        600: '#505950',
        700: '#454D45',
        800: '#394039',
        900: '#2F332E'
      },
      secondary: {
        100: 'F8FFF2',
        200: '#DFE6DA',
        300: '#D2D9CE',
        400: '#C6CCC2',
        500: '#BABFB6',
        600: '#AEB3AA',
        700: '#A1A69D',
        800: '#959991',
        900: '#898C85'
      },
      accent: {
        100: '#D6F5FF',
        200: '#CBE8F2',
        300: '#C1DCE6',
        400: '#B7D1DA',
        500: '#ABC4CC',
        600: '#A1B8BF',
        800: '#96ACB3',
        900: '#8BA0A6'
      },
      error: 'red-500'
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;