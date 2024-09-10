"use client";

import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    brand: {
      50: "#e3fdfd",
      100: "#cbf1f5",
      200: "#a6e3e9",
      300: "#71c9ce",
      400: "#45b6c1",
      500: "#2d6a8f",
      600: "#1e546f",
      700: "#154355",
      800: "#12374a",
      900: "#0c2b36",
    },
    factoryNew: "#397539",
    minimalWear: "#488b47",
    fieldTested: "#f1ac4d",
    wellWorn: "#b7625f",
    battleScarred: "#993a38",
    float: {
      marker: "#7F2AF6FF"
    }
  },
  components: {
    Badge: {
      variants: {
        factoryNew: {
          bg: "factoryNew",
          color: "white",
        },
        minimalWear: {
          bg: "minimalWear",
          color: "white",
        },
        fieldTested: {
          bg: "fieldTested",
          color: "white",
        },
        wellWorn: {
          bg: "wellWorn",
          color: "white",
        },
        battleScarred: {
          bg: "battleScarred",
          color: "white",
        },
      },
    },
  },
});

export default customTheme;
