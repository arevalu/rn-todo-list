import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { RootNavigation } from '@core/routing/root-navigation';
import { Colors } from '@core/theme';
import ThemeProvider from '@core/theme/theme-provider';

const App: FunctionComponent = () => (
  <ThemeProvider>
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <RootNavigation />
    </SafeAreaProvider>
  </ThemeProvider>
);

export default App;
