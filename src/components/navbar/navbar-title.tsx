import React, { FunctionComponent } from 'react';
import styled from '@core/theme/styled-components';

/**
 * Types
 */

export interface NavbarTitle {
  title: string;
}

/**
 * Styled components
 */

const Title = styled.Text`
  color: ${({ theme }) => theme.Colors.text};
  font-family: ${({ theme }) => theme.Fonts.semibold};
  font-size: 24px;
`;

/**
 * NavbarTitle
 */

export const NavbarTitle: FunctionComponent<NavbarTitle> = ({ title }) => (
  <Title>{title}</Title>
);
