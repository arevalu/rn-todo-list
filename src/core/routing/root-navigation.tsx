import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Navbar, SafeArea } from '@components';
import { AddTaskScreen, HomeScreen, TaskDetail } from '@screens';
import { RootNavigationParams } from './types';

const Stack = createNativeStackNavigator<RootNavigationParams>();

export const RootNavigation: FunctionComponent = () => (
  <SafeArea>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen
          name="AddTask"
          component={AddTaskScreen}
          options={{
            header: ({ navigation: { goBack } }) => (
              <Navbar>
                <Navbar.IconButton
                  accessibilityLabel="Go back"
                  align="left"
                  name="ArrowLeft"
                  onPress={goBack}
                />
                <Navbar.Title title="Add task" />
              </Navbar>
            ),
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            header: () => (
              <Navbar>
                <Navbar.Title title="My Tasks" />
              </Navbar>
            ),
          }}
        />
        <Stack.Screen
          name="TaskDetail"
          component={TaskDetail}
          options={{
            header: ({ navigation: { goBack }, options: { title } }) => (
              <Navbar>
                <Navbar.IconButton
                  accessibilityLabel="Go back"
                  align="left"
                  name="ArrowLeft"
                  onPress={goBack}
                />
                <Navbar.Title title={title || 'Task'} />
              </Navbar>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeArea>
);
