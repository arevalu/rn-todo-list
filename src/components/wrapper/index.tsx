import styled from '../../core/theme/styled-components';

/**
 * Types
 */

interface WrapperProps {
  fullWidth?: boolean;
}

/**
 * Wrapper
 */

export const Wrapper = styled.View<WrapperProps>`
  flex: 1;
  justify-content: space-between;

  ${({ fullWidth }) => !fullWidth && 'padding: 0 16px;'}
`;
