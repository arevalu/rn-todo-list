import React, { FunctionComponent, useLayoutEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button, Icon, Modal, Wrapper } from '@components';
import { useTasks } from '@core/hooks';
import { RootNavigationParams } from '@core/routing/types';
import styled from '@core/theme/styled-components';

/**
 * Types
 */

type TaskDetailScreenProps = NativeStackScreenProps<
  RootNavigationParams,
  'TaskDetail'
>;

/**
 * Styled components
 */

const CustomWrapper = styled(Wrapper)`
  padding-top: 24px;
`;

const ItemCardWrapper = styled.View`
  margin-bottom: 16px;
`;

const ItemCard = styled.View`
  background-color: ${({ theme: { Colors } }) => Colors.gray100};
  border-radius: 16px;
  padding: 16px;
`;

const ItemCardLabel = styled.Text`
  font-family: ${({ theme: { Fonts } }) => Fonts.semibold};
  font-size: 16px;
  margin-bottom: 8px;
`;

const ItemCardText = styled.Text`
  font-family: ${({ theme: { Fonts } }) => Fonts.regular};
  font-size: 16px;
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
  margin: 0 8px;
`;

const ModalText = styled.Text`
  font-family: ${({ theme: { Fonts } }) => Fonts.light};
  font-size: 16px;
  margin-left: 8px;
`;

/**
 * TaskDetail
 */

export const TaskDetail: FunctionComponent<TaskDetailScreenProps> = ({
  route: {
    params: {
      task: { description, id, title },
    },
  },
  navigation: { goBack, setOptions },
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { deleteTask } = useTasks();

  const handleDeleteTask = (id: string): void => {
    deleteTask(id);
    setModalVisible(!modalVisible);
  };

  const handleModal = (): void => {
    setModalVisible(!modalVisible);
    goBack();
  };

  useLayoutEffect(() => {
    setOptions({
      title,
    });
  }, [title, setOptions]);

  return (
    <CustomWrapper>
      <>
        <ItemCardWrapper>
          <ItemCardLabel>Description</ItemCardLabel>
          <ItemCard>
            <ItemCardText>{description}</ItemCardText>
          </ItemCard>
        </ItemCardWrapper>
        <Button
          accessibilityLabel="Delete task"
          text="Delete task"
          onPress={() => handleDeleteTask(id)}
          variant="danger"
        />
        <Modal visible={modalVisible}>
          <ModalContainer>
            <ModalMessage>
              <Icon name="Delete" color="gray600" size={32} />
              <ModalText>The task was successfully deleted!</ModalText>
            </ModalMessage>
            <Button
              accessibilityLabel="Ok"
              text="Ok"
              onPress={handleModal}
              variant="secondary"
            />
          </ModalContainer>
        </Modal>
      </>
    </CustomWrapper>
  );
};
