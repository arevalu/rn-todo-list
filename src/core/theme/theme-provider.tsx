import React, { FunctionComponent } from 'react';
import { Colors } from './colors';
import { ThemeProvider as Provider } from './styled-components';

/**
 * Types
 */

interface ThemeProviderProps {
  children: Element;
}

/**
 * ThemeProvider
 */

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => (
  <Provider
    theme={{
      Colors,
    }}
  >
    <>{children}</>
  </Provider>
);

export default ThemeProvider;
