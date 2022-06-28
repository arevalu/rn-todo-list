import React, { FunctionComponent, ReactNode } from 'react';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

import styled from '@core/theme/styled-components';
import { NavbarIconButton, NavbarIconButtonProps } from './navbar-icon-button';
import { NavbarLink, NavbarLinkProps } from './navbar-link';
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
  LinkText: FunctionComponent<NavbarLinkProps>;
  Title: FunctionComponent<NavbarTitle>;
}

/**
 * Styled components
 */

const NavbarWrapper = styled.View`
  align-items: center;
  background-color: ${({ theme: { Colors } }) => Colors.white};
  border-bottom-color: ${({ theme: { Colors } }) => Colors.gray100};
  border-bottom-width: 2px;
  flex-direction: row;
  padding: 16px 16px 24px;
`;

/**
 * Navbar
 */

export const Navbar: FunctionComponent<NavbarProps> & NavbarCompound = ({
  children,
  testID,
}) => <NavbarWrapper testID={testID}>{children}</NavbarWrapper>;

Navbar.IconButton = NavbarIconButton;
Navbar.LinkText = NavbarLink;
Navbar.Title = NavbarTitle;
