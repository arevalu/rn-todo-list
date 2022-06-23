import React, { FunctionComponent } from 'react';
import { RootNavigation } from './core/routing/root-navigation';
import ThemeProvider from './core/theme/theme-provider';

const App: FunctionComponent = () => (
  <ThemeProvider>
    <RootNavigation />
  </ThemeProvider>
);

export default App;
