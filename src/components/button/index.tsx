import React, { FunctionComponent } from 'react';
import { Colors } from '@core/theme';
import styled from '@core/theme/styled-components';
import { TouchableOpacityProps } from '@core/types';

/**
 * Types
 */

enum ButtonVariant {
  DANGER = 'danger',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  variant?: `${ButtonVariant}`;
}

type StyledButtonProps = Pick<ButtonProps, 'disabled' | 'variant'>;

/**
 * Styled components
 */

const ButtonVariants: Record<ButtonVariant, string> = {
  [ButtonVariant.DANGER]: Colors.danger,
  [ButtonVariant.PRIMARY]: Colors.primary,
  [ButtonVariant.SECONDARY]: Colors.secondary,
};

const ButtonWrapper = styled.TouchableOpacity<StyledButtonProps>`
  background-color: ${({ disabled, theme: { Colors }, variant }) =>
    disabled ? Colors.gray100 : ButtonVariants[variant as ButtonVariant]};
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
  variant = 'primary',
  ...buttonProps
}) => (
  <ButtonWrapper disabled={disabled} variant={variant} {...buttonProps}>
    <ButtonText disabled={disabled}>{text}</ButtonText>
  </ButtonWrapper>
);
