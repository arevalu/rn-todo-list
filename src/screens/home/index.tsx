import React, { FunctionComponent, useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import { Container, EmptyState } from '../../components';
import { Navbar } from '../../components/navbar';
import { isEmptyArray } from '../../core/helpers';
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
 * Styled components
 */

const FlatlistWrapper = styled.View`
  padding: 0 16px;
`;

/**
 * HomeScreen
 */

export const HomeScreen: FunctionComponent = () => {
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

  return (
    <Container>
      <Navbar>
        <Navbar.Title title="My Tasks" />
      </Navbar>
      <Container spacing>
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
      </Container>
    </Container>
  );
};
