import React, { FunctionComponent } from 'react';
import styled from '../../core/theme/styled-components';
import { TouchableOpacityProps } from '../../core/types';

/**
 * Types
 */

export interface NavbarIconButtonProps extends TouchableOpacityProps {
  icon: string;
}

/**
 * Styled components
 */

const NavbarIconButtonWrapper = styled.TouchableOpacity``;

const IconWrapper = styled.View``;

/**
 * NavbarIconButton
 */

export const NavbarIconButton: FunctionComponent<NavbarIconButtonProps> = ({
  onPress,
}) => (
  <NavbarIconButtonWrapper onPress={onPress}>
    <IconWrapper />
  </NavbarIconButtonWrapper>
);
