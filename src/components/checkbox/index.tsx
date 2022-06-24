import React, { FunctionComponent } from 'react';
import { ColorsKey, css } from '../../core/theme';
import styled from '../../core/theme/styled-components';

/**
 * Types
 */

interface CheckboxProps {
  color: ColorsKey;
  checked: boolean;
}

/**
 * Constants
 */

const CheckboxChecked = css<CheckboxProps>`
  background-color: ${({ color, theme: { Colors } }) =>
    Colors[color] || Colors.gray500};
`;

const CheckboxUnchecked = css<CheckboxProps>`
  border-color: ${({ color, theme: { Colors } }) =>
    Colors[color] || Colors.gray500};
  border-width: 1px;
`;

/**
 * Styled components
 */

const CheckboxWrapper = styled.TouchableOpacity<CheckboxProps>`
  border-radius: 8px;
  height: 24px;
  margin-right: 16px;
  width: 24px;

  ${({ checked }) => (checked ? CheckboxChecked : CheckboxUnchecked)}
`;

/**
 * Checkbox
 */

export const Checkbox: FunctionComponent<CheckboxProps> = props => (
  <CheckboxWrapper {...props} />
);
