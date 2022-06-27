import React, { FunctionComponent } from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { RootNavigation } from '@core/routing/root-navigation';
import ThemeProvider from '@core/theme/theme-provider';

const App: FunctionComponent = () => (
  <ThemeProvider>
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <RootNavigation />
    </SafeAreaProvider>
  </ThemeProvider>
);

export default App;
