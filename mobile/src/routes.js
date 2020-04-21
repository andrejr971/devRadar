import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const StackNavigate = createStackNavigator();

import Main from './pages/Main';
import Profile from './pages/Profile';

export default function Routes() {
  return (
    <NavigationContainer>
      <StackNavigate.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerBackTitleVisible: null,
          headerStatusBarHeight: 35,
          headerTitleAlign: 'center',
        }}
      >
        <StackNavigate.Screen
          name="Main"
          component={Main}
          options={{
            title: 'DevRadar',
          }}
        />
        <StackNavigate.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
          }}
        />
      </StackNavigate.Navigator>
    </NavigationContainer>
  );
}
