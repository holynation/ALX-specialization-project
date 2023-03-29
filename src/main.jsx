import React from 'react'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ReactDOM from 'react-dom/client'
import App from './App'
import { themes } from './utility/general';

// const theme = extendTheme(themes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider >
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
