import React, { FunctionComponent } from 'react';
import { css } from '../../core/theme';
import styled from '../../core/theme/styled-components';

/**
 * Types
 */

interface CheckboxProps {
  checked: boolean;
}

/**
 * Constants
 */

const CheckboxChecked = css`
  background-color: ${({ theme: { Colors } }) => Colors.gray500};
`;

const CheckboxUnchecked = css`
  border-color: ${({ theme: { Colors } }) => Colors.gray500};
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
