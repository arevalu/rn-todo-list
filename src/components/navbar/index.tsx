import React, { FunctionComponent, ReactNode } from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import styled from '../../core/theme/styled-components';
import { NavbarIconButton, NavbarIconButtonProps } from './navbar-icon-button';
import { NavbarTitle } from './navbar-title';

/**
 * Types
 */

interface NavbarProps extends Partial<NativeStackHeaderProps> {
  children?: ReactNode;
  testID?: string;
  title?: string;
}

interface NavbarCompound {
  IconButton: FunctionComponent<NavbarIconButtonProps>;
  Title: FunctionComponent<NavbarTitle>;
}

/**
 * Styled components
 */

const NavbarWrapper = styled.View`
  border-bottom-color: ${({ theme: { Colors } }) => Colors.gray100};
  border-bottom-width: 2px;
  align-items: center;
  flex-direction: row;
  padding: 32px 16px 24px;
`;

/**
 * Navbar
 */

export const Navbar: FunctionComponent<NavbarProps> & NavbarCompound = ({
  children,
  testID,
}) => <NavbarWrapper testID={testID}>{children}</NavbarWrapper>;

Navbar.IconButton = NavbarIconButton;
Navbar.Title = NavbarTitle;
