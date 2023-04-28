import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4ECCA3",
    },
    text : {
        primary: "#EEEEEE",
    },
    background: {
      default: "#393E46",
      paper: "#121820",
    },
  },
  typography: {
    h3: {
      color: "#4ECCA3",
    },
    h1: {
      color: "#4ECCA3"
    }
  },
});
