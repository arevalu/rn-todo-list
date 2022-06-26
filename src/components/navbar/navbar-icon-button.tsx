import React, { FunctionComponent } from 'react';
import styled from '../../core/theme/styled-components';
import { PickWithRequired, TouchableOpacityProps } from '../../core/types';
import { Icon, IconsProps } from '../icon';

/**
 * Types
 */

enum Align {
  LEFT = 'left',
  RIGHT = 'right',
}

export interface NavbarIconButtonProps
  extends TouchableOpacityProps,
    PickWithRequired<Partial<IconsProps>, 'name'> {
  align: `${Align}`;
}

/**
 * Constants
 */

const ICON_SIZE = 32;
const HIT_SLOP = {
  top: 20,
  bottom: 20,
  left: 20,
  right: 20,
};

/**
 * Styled components
 */

const NavbarIconButtonWrapper = styled.TouchableOpacity<
  Pick<NavbarIconButtonProps, 'align'>
>`
  ${({ align }) =>
    align === Align.LEFT ? 'padding-right: 16px' : 'padding-left: 16px'}
`;

/**
 * NavbarIconButton
 */

export const NavbarIconButton: FunctionComponent<NavbarIconButtonProps> = ({
  align,
  color = 'black',
  name,
  size = ICON_SIZE,
  onPress,
}) => (
  <NavbarIconButtonWrapper align={align} onPress={onPress} hitSlop={HIT_SLOP}>
    <Icon color={color} name={name} size={size} />
  </NavbarIconButtonWrapper>
);
