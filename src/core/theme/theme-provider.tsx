import React, { FunctionComponent, ReactNode } from 'react';
import { Colors } from './colors';
import { Fonts } from './fonts';
import { ThemeProvider as Provider } from './styled-components';

/**
 * Types
 */

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * ThemeProvider
 */

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => (
  <Provider
    theme={{
      Colors,
      Fonts,
    }}
  >
    <>{children}</>
  </Provider>
);

export default ThemeProvider;
