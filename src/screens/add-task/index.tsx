import React, { FunctionComponent, useMemo } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import { View } from 'react-native';

import { Button, InputText, Wrapper } from '@components';
import { storage, storedKeys } from '@core/helpers';
import { RootNavigationParams } from '@core/routing/types';
import styled from '@core/theme/styled-components';
import { Task } from '@core/types';
import { FormFields, getValidationSchema } from './helpers';

/**
 * Types
 */

type AddTaskScreenProps = NativeStackScreenProps<
  RootNavigationParams,
  'AddTask'
>;

/**
 * Constants
 */

const initialValues: FormFields = {
  description: '',
  title: '',
};

/**
 * Styled components
 */

const FormWrapper = styled(Wrapper)`
  justify-content: space-between;
  padding-top: 16px;
`;

/**
 * AddTaskScreen
 */

export const AddTaskScreen: FunctionComponent<AddTaskScreenProps> = ({
  navigation: { navigate },
}) => {
  const validationSchema = useMemo(() => getValidationSchema(), []);
  const taskId = new Date().getTime().toString();

  const handleSubmit = (values: FormFields): void => {
    const newTask: Task = {
      ...values,
      completed: false,
      id: taskId,
    };

    const savedTasks = storage.getString(storedKeys.TASKS_KEY);
    const tasks = savedTasks ? [...JSON.parse(savedTasks), newTask] : [newTask];

    storage.set(storedKeys.TASKS_KEY, JSON.stringify(tasks));

    navigate('Home');
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnMount
    >
      {({ isValid, values, handleBlur, handleChange, handleSubmit }) => (
        <FormWrapper>
          <View>
            <InputText
              label="Title"
              placeholder="Add title"
              value={values.title}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
            />
            <InputText
              label="Description"
              placeholder="Add description for your task"
              value={values.description}
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              lastItem
            />
          </View>
          <Button
            accessibilityLabel="Create a task"
            disabled={!isValid}
            text="Create a task"
            onPress={handleSubmit}
          />
        </FormWrapper>
      )}
    </Formik>
  );
};
