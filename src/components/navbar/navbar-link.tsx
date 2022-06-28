import React, { FunctionComponent } from 'react';
import { Insets, TouchableOpacity } from 'react-native';
import styled from '@core/theme/styled-components';
import { TouchableOpacityProps } from '@core/types';

/**
 * Types
 */

export interface NavbarLinkProps extends TouchableOpacityProps {
  text: string;
}

/**
 * Constants
 */

const HIT_SLOP: Insets = {
  bottom: 16,
  left: 16,
  right: 16,
  top: 16,
};

/**
 * Styled components
 */

const LinkText = styled.Text`
  color: ${({ theme: { Colors } }) => Colors.primary};
  font-family: ${({ theme: { Fonts } }) => Fonts.medium};
`;

/**
 * NavbarLink
 */

export const NavbarLink: FunctionComponent<NavbarLinkProps> = ({
  text,
  ...touchableProps
}) => (
  <TouchableOpacity hitSlop={HIT_SLOP} {...touchableProps}>
    <LinkText>{text}</LinkText>
  </TouchableOpacity>
);
