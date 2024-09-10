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
      600: "#E48A02", //line invitation for discord
      700: "#FE8700", //search button **gradient
      800: "#FE7000", //icons in filter
      900: "#9B541C", //border color in search bar

    },
    background: {
      200: "#535353", //hover bargain bg
      300: "#393939", //hover search
      400: "#37332F", //bargain bg
      500: "#252525", //select bg
      600: "#1A1A1A", //product card bg ****gradient
      700: "#171717", //filter container bg
      800: "#111111", //site bg
      900: "#000000", //wear bg
    },
    border: {
      500: "#282828", //border color in filter container
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
