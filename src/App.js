import React from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import Home from './pages/Home';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;
