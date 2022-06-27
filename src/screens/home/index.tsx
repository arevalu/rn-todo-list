import React, { FunctionComponent, useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';
import EmptyStateNoTasks from '../../../assets/images/img_empty_state_no_tasks.webp';
import { Container, EmptyState } from '../../components';
import { Button } from '../../components/button';
import { Navbar } from '../../components/navbar';
import { isEmptyArray } from '../../core/helpers';
import { RootNavigationParams } from '../../core/routing/types';
import styled from '../../core/theme/styled-components';
import { FilterSection } from './filter-section';
import { ItemList } from './item-list';
import { FilterOptions, Task } from './types';
import { useFilteredTasks } from './use-filtered-tasks';

/**
 * Types
 */

type HomeScreenProps = NativeStackScreenProps<RootNavigationParams, 'Home'>;

interface WrapperProps {
  fullWidth?: boolean;
}

/**
 * Constants
 */

const IMAGE_SCALE = 0.2;

/**
 * Styled components
 */

const Wrapper = styled.View<WrapperProps>`
  flex: 1;
  justify-content: space-between;

  ${({ fullWidth }) => !fullWidth && 'padding: 0 16px;'}
`;

const FlatlistWrapper = styled.View`
  flex: 1;
  padding: 0 16px;
`;

/**
 * HomeScreen
 */

export const HomeScreen: FunctionComponent<HomeScreenProps> = ({
  navigation: { navigate },
}) => {
  const { options, selectedFilter, tasks, changeFilter, updateTasks } =
    useFilteredTasks();

  const handleToggleTask = useCallback(
    (task: Task): void => {
      const updatedTasks: Task[] = tasks.map(taskList =>
        taskList.id === task.id
          ? {
              ...taskList,
              completed: !taskList.completed,
            }
          : taskList,
      );

      updateTasks(updatedTasks);
    },
    [tasks, updateTasks],
  );

  const handleCreateTask = (): void => {
    navigate('AddTask');
  };

  return (
    <Container>
      <Navbar>
        <Navbar.Title title="My Tasks" />
      </Navbar>
      {(!isEmptyArray(tasks) || selectedFilter === FilterOptions.COMPLETED) && (
        <FilterSection options={options} onChangeFilter={changeFilter} />
      )}
      <Wrapper>
        {isEmptyArray(tasks) && selectedFilter === FilterOptions.ALL ? (
          <EmptyState
            image={EmptyStateNoTasks}
            scale={IMAGE_SCALE}
            title="No tasks created yet!"
          />
        ) : (
          <FlatlistWrapper>
            <FlatList<Task>
              data={tasks}
              renderItem={({ item }) => (
                <ItemList
                  onToggleTask={() => handleToggleTask(item)}
                  {...item}
                />
              )}
              keyExtractor={({ id }) => id}
            />
          </FlatlistWrapper>
        )}
        <Button
          accessibilityLabel="Add task"
          text="Add task"
          onPress={handleCreateTask}
        />
      </Wrapper>
    </Container>
  );
};
