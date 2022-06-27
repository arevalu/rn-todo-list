import React, { FunctionComponent, useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';

import { EmptyState, Wrapper } from '@components';
import { Button } from '@components/button';
import { isEmptyArray } from '@core/helpers';
import { RootNavigationParams } from '@core/routing/types';
import styled from '@core/theme/styled-components';
import { Task } from '@core/types';
import EmptyStateNoTasks from '../../../assets/images/img_empty_state_no_tasks.webp';
import { FilterSection } from './filter-section';
import { ItemList } from './item-list';
import { FilterOptions } from './types';
import { useFilteredTasks } from './use-filtered-tasks';

/**
 * Types
 */

type HomeScreenProps = NativeStackScreenProps<RootNavigationParams, 'Home'>;

/**
 * Constants
 */

const IMAGE_SCALE = 0.2;

/**
 * Styled components
 */

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

  const handleDetailTask = useCallback(
    (task: Task) => {
      navigate('TaskDetail', {
        task,
      });
    },
    [navigate],
  );

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
    <>
      {(!isEmptyArray(tasks) || selectedFilter === FilterOptions.COMPLETED) && (
        <Wrapper flex={false} fullWidth>
          <FilterSection options={options} onChangeFilter={changeFilter} />
        </Wrapper>
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
                  onDetailTask={() => handleDetailTask(item)}
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
    </>
  );
};
