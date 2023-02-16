import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

//extend the theme
const colors = {
  brand: {
    900: "#024fc9",
    800: "#146af5",
    700: "#2p77f2",
    600: "#337df2",
    500: "#4287f6",
  },
};

const fonts = {
  body: "Tohoma",
  heading: "Courier New",
};

const theme = extendTheme({ colors, fonts });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
