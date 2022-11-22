import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME} from './routes';
import Home from '../screens/app/home/home.screen';

const Stack = createNativeStackNavigator();

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
