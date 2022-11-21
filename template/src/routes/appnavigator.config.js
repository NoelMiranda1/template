import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useSelector} from 'react-redux';
import AppStack from './appstack.config';
import AuthStack from './authstack.config';
import {ROUTE_APP, ROUTE_AUTH} from './routes';

const AppNavigator = () => {
  const auth = useSelector(state => state.auth.authenticate);

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={auth ? ROUTE_APP : ROUTE_AUTH}
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
        gestureDirection: 'horizontal',
      }}>
      <Stack.Screen name={ROUTE_APP} component={AppStack} />
      <Stack.Screen name={ROUTE_AUTH} component={AuthStack} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
