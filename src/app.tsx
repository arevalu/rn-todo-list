import React, { FunctionComponent, useEffect } from 'react';
import { StatusBar } from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import { RootNavigation } from '@core/routing/root-navigation';
import { Colors } from '@core/theme';
import ThemeProvider from '@core/theme/theme-provider';

const App: FunctionComponent = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
        <RootNavigation />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;
