import React, { FunctionComponent, ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ColorsKey } from '../../core/theme/colors';
import styled from '../../core/theme/styled-components';

/**
 * Types
 */

interface ContainerProps {
  backgroundColor?: ColorsKey;
  children: ReactNode;
}

/**
 * Styled components
 */

const ContainerWrapper = styled(SafeAreaView)<
  Pick<ContainerProps, 'backgroundColor'>
>`
  background-color: ${({ backgroundColor, theme }) =>
    theme.Colors[backgroundColor ?? 'white']};
  flex: 1;
`;

/**
 * Container
 */

export const Container: FunctionComponent<ContainerProps> = ({
  backgroundColor,
  children,
}) => (
  <ContainerWrapper backgroundColor={backgroundColor}>
    {children}
  </ContainerWrapper>
);
