import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#0a0a0a",
      "800": "#131212",
      // "700": "#353646",
      // "600": "#4B4D63",
      // "500": "#616480",
      // "400": "#797D9A",
      // "300": "#9699B0",
      // "200": "#B3B5C6",
      // "100": "#D1D2DC",
      // "50": "#EEEEF2",
    },
    red: {
      "600": "#d41a1a"
    }
  },
  fonts: {
    heading: "Nunito",
    body: "Nunito"
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
      }
    }
  }
});