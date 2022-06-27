import React, { FunctionComponent, ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ColorsKey } from '@core/theme/colors';
import styled from '@core/theme/styled-components';

/**
 * Types
 */

interface ContainerProps {
  backgroundColor?: ColorsKey;
  children: ReactNode;
  horizontalSpacing?: boolean;
  spacing?: boolean;
}

/**
 * Styled components
 */

const SafeAreaWrapper = styled.View<ContainerProps>`
  flex: 1;

  background-color: ${({ backgroundColor, theme }) =>
    theme.Colors[backgroundColor || 'white']};
`;

/**
 * Container
 */

export const SafeArea: FunctionComponent<ContainerProps> = ({
  children,
  ...containerProps
}) => {
  const insets = useSafeAreaInsets();

  const SafeAreaStyles = {
    paddingTop: insets.top,
    paddingRight: insets.right,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
  };

  return (
    <SafeAreaWrapper style={SafeAreaStyles} {...containerProps}>
      {children}
    </SafeAreaWrapper>
  );
};
