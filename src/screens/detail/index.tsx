import React, { FunctionComponent, useLayoutEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Button, Wrapper } from '@components';
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

/**
 * TaskDetail
 */

export const TaskDetail: FunctionComponent<TaskDetailScreenProps> = ({
  route: {
    params: {
      task: { description, title },
    },
  },
  navigation: { setOptions },
}) => {
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
          onPress={() => {}}
          variant="danger"
        />
      </>
    </CustomWrapper>
  );
};
