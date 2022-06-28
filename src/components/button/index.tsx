import React, { FunctionComponent } from 'react';
import { Colors } from '@core/theme';
import styled from '@core/theme/styled-components';
import { TouchableOpacityProps } from '@core/types';

/**
 * Types
 */

enum ButtonColor {
  DANGER = 'danger',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

enum ButtonVariant {
  FILLED = 'filled',
  TEXT = 'text',
}

interface ButtonProps extends TouchableOpacityProps {
  color?: `${ButtonColor}`;
  text: string;
  variant?: `${ButtonVariant}`;
}

type StyledButtonProps = Pick<ButtonProps, 'color' | 'disabled' | 'variant'>;

/**
 * Styled components
 */

const BackgroundColor: Record<ButtonColor, Record<ButtonVariant, string>> = {
  [ButtonColor.DANGER]: {
    [ButtonVariant.FILLED]: Colors.danger,
    [ButtonVariant.TEXT]: Colors.transparent,
  },
  [ButtonColor.PRIMARY]: {
    [ButtonVariant.FILLED]: Colors.primary,
    [ButtonVariant.TEXT]: Colors.transparent,
  },
  [ButtonColor.SECONDARY]: {
    [ButtonVariant.FILLED]: Colors.secondary,
    [ButtonVariant.TEXT]: Colors.transparent,
  },
};

const TextColor: Record<ButtonColor, Record<ButtonVariant, string>> = {
  [ButtonColor.DANGER]: {
    [ButtonVariant.FILLED]: Colors.white,
    [ButtonVariant.TEXT]: Colors.danger,
  },
  [ButtonColor.PRIMARY]: {
    [ButtonVariant.FILLED]: Colors.white,
    [ButtonVariant.TEXT]: Colors.primary,
  },
  [ButtonColor.SECONDARY]: {
    [ButtonVariant.FILLED]: Colors.white,
    [ButtonVariant.TEXT]: Colors.secondary,
  },
};

const ButtonWrapper = styled.TouchableOpacity<StyledButtonProps>`
  align-items: center;
  background-color: ${({ color, disabled, theme: { Colors }, variant }) =>
    disabled
      ? Colors.gray100
      : BackgroundColor[color as ButtonColor][variant as ButtonVariant]};
  border-radius: 16px;
  flex: 1;
  justify-content: center;
  height: 60px;
  max-height: 60px;
`;

const ButtonText = styled.Text<StyledButtonProps>`
  color: ${({ color, disabled, theme: { Colors }, variant }) =>
    disabled
      ? Colors.gray500
      : TextColor[color as ButtonColor][variant as ButtonVariant]};
  font-family: ${({ theme: { Fonts } }) => Fonts.medium};
  font-size: 16px;
`;

/**
 * Button
 */

export const Button: FunctionComponent<ButtonProps> = ({
  color = 'primary',
  disabled,
  text,
  variant = 'filled',
  ...buttonProps
}) => (
  <ButtonWrapper
    color={color}
    disabled={disabled}
    variant={variant}
    {...buttonProps}
  >
    <ButtonText color={color} disabled={disabled} variant={variant}>
      {text}
    </ButtonText>
  </ButtonWrapper>
);
