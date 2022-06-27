import { ColorsKey } from '@core/theme';
import styled from '@core/theme/styled-components';

/**
 * Types
 */

interface WrapperProps {
  backgroundColor?: ColorsKey;
  flex?: boolean;
  fullWidth?: boolean;
}

/**
 * Wrapper
 */

export const Wrapper = styled.View<WrapperProps>`
  justify-content: space-between;

  background-color: ${({ backgroundColor, theme: { Colors } }) =>
    Colors[backgroundColor || 'white']};

  ${({ flex = true }) => flex && 'flex: 1;'}
  ${({ fullWidth }) => !fullWidth && 'padding: 0 16px;'}
`;
