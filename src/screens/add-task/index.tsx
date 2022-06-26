import React, { FunctionComponent, useMemo } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Formik } from 'formik';
import { View } from 'react-native';
import { Button, Container, InputText, Navbar } from '../../components';
import { RootNavigationParams } from '../../core/routing/types';
import styled from '../../core/theme/styled-components';
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

const FormWrapper = styled(Container)`
  justify-content: space-between;
`;

/**
 * AddTaskScreen
 */

export const AddTaskScreen: FunctionComponent<AddTaskScreenProps> = ({
  navigation: { goBack },
}) => {
  const validationSchema = useMemo(() => getValidationSchema(), []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = (values: FormFields): void => {
    // TODO: implement this method
  };

  return (
    <Container>
      <Navbar>
        <Navbar.IconButton
          accessibilityLabel="Go back"
          align="left"
          name="ArrowLeft"
          onPress={goBack}
        />
        <Navbar.Title title="Add task" />
      </Navbar>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnMount
      >
        {({ isValid, values, handleBlur, handleChange, handleSubmit }) => (
          <FormWrapper horizontalSpacing>
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
    </Container>
  );
};
