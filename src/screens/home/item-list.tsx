import React, { FunctionComponent } from 'react';
import { Checkbox } from '../../components/checkbox';
import styled from '../../core/theme/styled-components';
import { Task } from './types';

/**
 * Types
 */

interface ItemListProps extends Task {
  onToggleTask: () => void;
}

/**
 * Styled components
 */

const ItemWrapper = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  margin-bottom: 24px;
`;

const ItemTitle = styled.Text`
  font-family: ${({ theme: { Fonts } }) => Fonts.light};
  font-size: 16px;
`;

/**
 * ItemList
 */

export const ItemList: FunctionComponent<ItemListProps> = ({
  category: { color } = {},
  completed,
  title,
  onToggleTask,
}) => (
  <ItemWrapper onPress={onToggleTask}>
    <Checkbox
      accessibilityLabel={
        completed ? 'Mark task as complete' : 'Mark task as incomplete'
      }
      checked={completed}
      color={color || 'defaultCategory'}
      onPress={onToggleTask}
    />
    <ItemTitle>{title}</ItemTitle>
  </ItemWrapper>
);
