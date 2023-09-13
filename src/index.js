import { ColorModeScript,ChakraProvider , extendTheme} from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher';

// Define your Chakra UI theme
const theme = extendTheme({
  // Your theme configuration goes here
});
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme = {theme}>
      <ColorModeSwitcher />
    <App />
    </ChakraProvider>

    
  </StrictMode>
);

