import React, { FunctionComponent } from 'react';
import { TextInputProps } from 'react-native';
import styled from '../../core/theme/styled-components';

/**
 * Types
 */

interface InputTextProps extends Omit<TextInputProps, 'accessibilityRole'> {
  label?: string;
  lastItem?: boolean;
}

/**
 * Styled components
 */

const InputWrapper = styled.View<Pick<InputTextProps, 'lastItem'>>`
  ${({ lastItem }) => !lastItem && 'margin-bottom: 20px'}
`;

const Label = styled.Text`
  font-family: ${({ theme: { Fonts } }) => Fonts.semibold};
  font-size: 14px;
  letter-spacing: 0.25px;
`;

const Input = styled.TextInput`
  background-color: ${({ theme: { Colors } }) => Colors.gray50};
  border-radius: 16px;
  font-family: ${({ theme: { Fonts } }) => Fonts.regular};
  font-size: 16px;
  height: 60px;
  margin-top: 8px;
  padding: 0px 16px;
`;

/**
 * InputText
 */

export const InputText: FunctionComponent<InputTextProps> = ({
  label,
  lastItem,
  ...inputProps
}) => (
  <InputWrapper lastItem={lastItem}>
    {!!label && <Label>{label}</Label>}
    <Input {...inputProps} />
  </InputWrapper>
);
