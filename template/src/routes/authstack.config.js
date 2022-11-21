/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/login.screen';
import {LOGIN} from './routes';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={LOGIN}
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen name={LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
