import React, { FunctionComponent, ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ColorsKey } from '../../core/theme/colors';
import styled, { css } from '../../core/theme/styled-components';

/**
 * Types
 */

interface ContainerProps {
  backgroundColor?: ColorsKey;
  children: ReactNode;
  spacing?: boolean;
}

/**
 * Constants
 */

const ContainerSpacing = css`
  padding: 16px;
`;

/**
 * Styled components
 */

const ContainerWrapper = styled(SafeAreaView)<ContainerProps>`
  background-color: ${({ backgroundColor, theme }) =>
    theme.Colors[backgroundColor ?? 'white']};
  flex: 1;

  ${({ spacing }) => spacing && ContainerSpacing};
`;

/**
 * Container
 */

export const Container: FunctionComponent<ContainerProps> = ({
  backgroundColor,
  children,
  spacing,
}) => (
  <ContainerWrapper backgroundColor={backgroundColor} spacing={spacing}>
    {children}
  </ContainerWrapper>
);
