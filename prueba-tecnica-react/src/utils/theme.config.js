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
      default: "#232931",
      paper: "#393E46",
    },
  },
  typography: {
    h3: {
      color: "#EEEEEE",
    },
  },
});
