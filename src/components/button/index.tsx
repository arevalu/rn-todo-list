import React, { FunctionComponent } from 'react';
import styled from '../../core/theme/styled-components';
import { TouchableOpacityProps } from '../../core/types';

/**
 * Types
 */

interface ButtonProps extends TouchableOpacityProps {
  text: string;
}

type StyledButtonProps = Pick<ButtonProps, 'disabled'>;

/**
 * Styled components
 */

const ButtonWrapper = styled.TouchableOpacity<StyledButtonProps>`
  background-color: ${({ disabled, theme: { Colors } }) =>
    disabled ? Colors.gray100 : Colors.primary};
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  height: 60px;
`;

const ButtonText = styled.Text<StyledButtonProps>`
  color: ${({ disabled, theme: { Colors } }) =>
    disabled ? Colors.gray500 : Colors.white};
  font-family: ${({ theme: { Fonts } }) => Fonts.medium};
  font-size: 16px;
`;

/**
 * Button
 */

export const Button: FunctionComponent<ButtonProps> = ({
  disabled,
  text,
  ...buttonProps
}) => (
  <ButtonWrapper disabled={disabled} {...buttonProps}>
    <ButtonText disabled={disabled}>{text}</ButtonText>
  </ButtonWrapper>
);
