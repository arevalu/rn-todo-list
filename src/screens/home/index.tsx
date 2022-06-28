import React, {
  FunctionComponent,
  useCallback,
  useLayoutEffect,
  useState,
} from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FlatList } from 'react-native';

import { EmptyState, Icon, Modal, Navbar, Wrapper } from '@components';
import { Button } from '@components/button';
import { useTasks } from '@core/hooks';
import { RootNavigationParams } from '@core/routing/types';
import styled from '@core/theme/styled-components';
import { Task } from '@core/types';
import EmptyStateNoTasks from '../../../assets/images/img_empty_state_no_tasks.webp';
import { FilterSection } from './filter-section';
import { ItemList } from './item-list';

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

const NavbarWrapper = styled.View`
  align-items: center;
  flex: 1%;
  flex-direction: row;
  justify-content: space-between;
`;

const ModalContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 16px;
`;

const ModalMessage = styled.View`
  align-items: center;
  flex: 1;
  flex-direction: row;
  padding: 0 8px 16px;
`;

const ModalText = styled.Text`
  font-family: ${({ theme: { Fonts } }) => Fonts.light};
  flex: 1;
  font-size: 16px;
  margin-left: 8px;
`;

const ButtonsWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

/**
 * HomeScreen
 */

export const HomeScreen: FunctionComponent<HomeScreenProps> = ({
  navigation: { navigate, setOptions },
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    isEmptyTaskList,
    options,
    tasks,
    changeFilter,
    clearTasks,
    updateTasks,
  } = useTasks();

  const handleDetailTask = useCallback(
    (task: Task) => {
      navigate('TaskDetail', {
        task,
      });
    },
    [navigate],
  );

  const handleCreateTask = (): void => {
    navigate('AddTask');
  };

  const handleAcceptModal = (): void => {
    clearTasks();
    setModalVisible(!modalVisible);
  };

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

  useLayoutEffect(() => {
    setOptions({
      header: () => (
        <Navbar>
          <NavbarWrapper>
            <Navbar.Title title="My Tasks" />
            {!isEmptyTaskList && (
              <Navbar.LinkText
                accessibilityLabel="Clear all tasks"
                text="Clear all tasks"
                onPress={() => setModalVisible(!modalVisible)}
              />
            )}
          </NavbarWrapper>
        </Navbar>
      ),
    });
  }, [isEmptyTaskList, modalVisible, setOptions]);

  return (
    <>
      {!isEmptyTaskList && (
        <Wrapper expanded={false} fullWidth>
          <FilterSection options={options} onChangeFilter={changeFilter} />
        </Wrapper>
      )}
      <Wrapper>
        {isEmptyTaskList ? (
          <EmptyState
            image={EmptyStateNoTasks}
            scale={IMAGE_SCALE}
            title="No tasks created yet!"
          />
        ) : (
          <Wrapper>
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
          </Wrapper>
        )}
        <Button
          accessibilityLabel="Add task"
          text="Add task"
          onPress={handleCreateTask}
        />
      </Wrapper>
      <Modal visible={modalVisible}>
        <ModalContainer>
          <ModalMessage>
            <Icon name="Delete" color="gray600" size={32} />
            <ModalText>¿Do you want to delete all your tasks?</ModalText>
          </ModalMessage>
          <ButtonsWrapper>
            <Button
              accessibilityLabel="Cancelar"
              color="danger"
              text="Cancelar"
              variant="text"
              onPress={() => setModalVisible(!modalVisible)}
            />
            <Button
              accessibilityLabel="Ok"
              color="secondary"
              text="Ok"
              onPress={handleAcceptModal}
            />
          </ButtonsWrapper>
        </ModalContainer>
      </Modal>
    </>
  );
};
