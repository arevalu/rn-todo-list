import React, { FunctionComponent } from 'react';
import styled from '../../core/theme/styled-components';

/**
 * Types
 */

interface EmptyStateProps {
  title: string;
}

/**
 * Styled components
 */

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

const Title = styled.Text`
  color: ${({ theme: { Colors } }) => Colors.gray500};
  font-family: ${({ theme: { Fonts } }) => Fonts.medium};
  font-size: 24px;
  text-align: center;
`;

/**
 * EmptyState
 */

export const EmptyState: FunctionComponent<EmptyStateProps> = ({ title }) => (
  <Wrapper>
    <Title>{title}</Title>
  </Wrapper>
);
