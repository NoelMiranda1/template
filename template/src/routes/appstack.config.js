import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HOME} from './routes';
import Home from '../screens/app/home/home.screen';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={HOME}
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen name={HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default AppStack;
