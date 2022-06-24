import React, { FunctionComponent, useCallback, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';
import { Container, EmptyState } from '../../components';
import { Button } from '../../components/button';
import { Navbar } from '../../components/navbar';
import { isEmptyArray } from '../../core/helpers';
import { RootNavigationParams } from '../../core/routing/types';
import styled from '../../core/theme/styled-components';
import { ItemList } from './item-list';
import { Task } from './types';

const Tasks: Task[] = [
  {
    id: '1',
    title: 'My first task',
    completed: false,
  },
  {
    id: '2',
    title: 'My second task',
    completed: true,
  },
];

/**
 * Types
 */

type HomeScreenProps = NativeStackScreenProps<RootNavigationParams, 'Home'>;

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
  const [tasks, setTasks] = useState<Task[]>(Tasks);

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

      setTasks(updatedTasks);
    },
    [tasks],
  );

  const handleCreateTask = (): void => {
    navigate('AddTask');
  };

  return (
    <Container>
      <Navbar>
        <Navbar.Title title="My Tasks" />
      </Navbar>
      <Container horizontalSpacing>
        <>
          {isEmptyArray(tasks) ? (
            <EmptyState title="No tasks created yet!" />
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
        </>
      </Container>
    </Container>
  );
};
